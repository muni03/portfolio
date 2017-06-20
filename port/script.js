$(document).ready(function(){
  $("#burger").click(function(){
    $("#burgerMenu").slideToggle("slow", function(){
      $("#burgerMenu").css("visibility","visible");
    });
  });

  $(".typing").typeIt({
      strings:['websites.','web applications.','landing pages.'],
      speed: 90,
      breakLines: false,
      loop: true,
      deleteDelay: 2000,
      loopDelay: 2000
  })
});
