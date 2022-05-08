$(function(){
  /*
    To Do.
    메뉴를 클릭하면, 몇 번째 메뉴를 클릭했는지 순번확인, 그 순번에 해당하는 내용이 화면 상단에서 얼마 떨어져있는지 거리 확인 (1100),
    html, body에 스크롤양을 확인한 수치만큼 준다 - animate ()
  */

  //변수지정
  var menu = $('.container ul li'),
      section = $('#contents > section');
  
  //메뉴 클릭 이동
  menu.click(function(e){
    e.preventDefault();

    var idx = $(this).index();
    var offset = section.eq(idx).offset().top;

    $('html, body').animate({scrollTop: offset}, 500);

    $(this).addClass('on').siblings().removeClass('on');

  });

  //스크롤 이동 반영하기  
  $(window).scroll(function(){
    var currentOffset = window.pageYOffset || window.scrollTop || window.scrollY;

    section.each(function(index){
      var target = $(this);

      if(currentOffset > $(this).offset().top - 50){
        menu.eq(index).addClass('on').siblings().removeClass('on');
      }
    });

  });
  

});