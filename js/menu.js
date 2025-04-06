$('.menu>li').mouseover(function(){
  $('.sub').stop().slideDown();
}).mouseout(function(){
  $('.sub').stop().slideUp();
});