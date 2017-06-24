$(document).ready(function(){
  $("#burger").click(function(){
    $("#burgerMenu").slideToggle("slow", function(){
      $("#burgerMenu").css("visibility","visible");
    });
  });

  $(".typing").typeIt({
      strings:['websites.','web applications.','landing pages.','meaningful experiences.'],
      speed: 90,
      breakLines: false,
      loop: true,
      deleteDelay: 2000,
      loopDelay: 2000
  });

  $("a").click(function(){
    $("#burgerMenu").hide();
  });

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
