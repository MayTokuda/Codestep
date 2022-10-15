$(function() {
    //================================================
    //  ハンバーガーメニュー
    //================================================

    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });

    //================================================
    //  スライドイン
    //================================================
    $('.left').each(function(){
        let $item = $(this);
        $(window).on('scroll', function(){
          let top = $item.offset().top; // ターゲットの位置取得
          let position = top - $(window).height();  // イベントを発火させたい位置
          if($(window).scrollTop() > position){
            $item.addClass('slide-left');
          }
        });
    });

    $('.right').each(function(){
        let $item = $(this);
        $(window).on('scroll', function(){
          let top = $item.offset().top; // ターゲットの位置取得
          let position = top - $(window).height();  // イベントを発火させたい位置
          if($(window).scrollTop() > position){
            $item.addClass('slide-right');
          }
        });
    });
});




