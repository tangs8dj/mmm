$(function ( ) {
    var shopid = 0;
    var areaid = 0;
    $('.btn-group').on('click',function ( ) {
        $(this).children('a').children().toggleClass('active');
        $(this).siblings().children().children('span').removeClass('active');
        
    })


    //选中i
    $('.gsshop').on('click','a',function (){
        $(this).parent().siblings().children().children().removeClass('fa-check-square-o');
        $(this).children().addClass('fa-check-square-o');
        shopid = $(this).data('id');
        $('.txtShop').html($(this).text())
        getProductList(shopid,areaid);
    })
    $('.gsshoparea').on('click','a',function (){
        $(this).parent().siblings().children().children().removeClass('fa-check-square-o');
        $(this).children().addClass('fa-check-square-o');
        
        areaid = $(this).data('id');
        $('.txtArea').html($(this).text().substr(0,2))
        // console.log($('.caret').removeClass('active'));
        getProductList(shopid,areaid);
        getProductList(shopid,areaid);
    })
    $('.gsprice').on('click','a',function (){
        $(this).parent().siblings().children().children().removeClass('fa-check-square-o');
        $(this).children().addClass('fa-check-square-o');
        $('.txtPrice').html($(this).text())
    })
    // fa-check-square-o
    //请求店铺
    $.ajax({
        url: "http://120.78.196.6:9090/api/getgsshop",
        success: function (response) {
 
            var gsshop = template('tpl-gsshop',response);
            $('.gsshop').html(gsshop);
        }
    });
    //请求地区
    $.ajax({
        url: "http://120.78.196.6:9090/api/getgsshoparea",
        success: function (response) {

            var gsshoparea = template('tpl-getgsshoparea',response);
            $('.gsshoparea').html(gsshoparea);
        }
    });
    //商品列表
    getProductList(0,0);
  
    function getProductList(shopid ,areaid) {
        $.ajax({
            url: "http://120.78.196.6:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid,
            },
            success: function (response) {
                
                var prodcut = template('tpl-section',response);
                $('.section').html(prodcut);
            }
        });
      }

})