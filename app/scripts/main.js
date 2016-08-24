$(document).ready(function() {
	$('.hero').mousemove(function(e){
		var movedX = (e.pageX * -1 / 10);
		var movedY = (e.pageY * -1 / 10);
    if($(window).width() >= 968){
		$(this).css('background-position', movedX + 'px ' + movedY + 'px');
    }
	});

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
