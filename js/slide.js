function slide() {
  $('.slide').stop().animate({"margin-left": -1000}, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css('margin-left', 0);
  });
}

setInterval(slide, 3000);