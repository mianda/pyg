$(function () {
    banner()
    // nav()
    prolist()
    
})
function banner(){
    $.ajax({
        type: 'get',
        url: 'home/swiperdata',
        dataType: 'json',
        success: function (result) {
            // console.log(result);
            //调用template模板，生成动态图片结构
            var html = template('bannerTemp', result)
            $('.pyg_indexbanner').html(html)
            //调用模板，生成点标记结构
            var indicatorHtml = template('indicatorTemp', result)
            $('.pyg_bannerIndicator').html(indicatorHtml)
            //如果轮播图实动态生成的，就需要手动初始化
            //获得slider插件对象
            mui('.mui-slider').slider({
                interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    })
}
function nav(){
    $.ajax({
        type:'get',
        url:'home/catitems',
        dataType:'json',
        success:function(result){
            console.log(result);
            // var navHtml=template('navTemp',result)
            // $('.pyg_nav').html(navHtml)
        }
    })


}
function prolist(){
    $.ajax({
        type:'get',
        url:'home/goodslist',
        dataType:'json',
        success:function(result){
            console.log(result)
            var prolistHtml=template('proListTemp',result)
            $('.pyg_productList').html(prolistHtml);
        }
    })
}