$(document).ready(function(){
    /*navigation*/
    $(".response").click(function(){
      $(".navigation").toggleClass("nav-open");
      $(".right_coloum").toggleClass("nav-colse");
      $(".logo").toggleClass("logo_close");
      $(".nav-item").toggleClass("item_close");
      $(".content").toggleClass("con_text");
      $(".response .fas").toggleClass(" fas fa-bars").toggleClass('fas fa-times');
    });
    /*search-box*/
    $(".search_fd").click(function(){
      $(".search_hd").toggleClass("search-open");   
    });

});