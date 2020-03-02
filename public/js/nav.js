// fixed nav
$(window).scroll(function(){
  if ($(window).scrollTop() > 300) {
    $('.nav').addClass('header-fixed');
    $('.menu-desc').addClass('dlg-n');
    $('.humburger').removeClass('dlg-n');
    $(".nav").removeClass("nav-top");
  }
  else {
    $('.nav').removeClass('header-fixed');
    $('.menu-desc').removeClass('dlg-n');
    $('.humburger').addClass('dlg-n');
    $(".nav").addClass("nav-top");
  }
});
$(function(){
  $('#hamburger-open').on('click', function() {
    $('.spans').toggleClass('d-n');
    $('.modal-menu').toggleClass("modal-menu_open");
    $('.cross').toggleClass("d-n");
    if($('.modal-menu').hasClass("modal-menu_open")){
      $("html,body").css("overflow","hidden");
      $(".nav-top").css("background","black");
    }
    else {
      $("html,body").css("overflow-y","auto");
      $(".nav-top").css("background","transparent");
    }
  });
});