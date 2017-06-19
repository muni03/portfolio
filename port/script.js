$(document).ready(function(){
  $("#burger").click(function(){
    $("#burgerMenu").slideToggle("slow", function(){
      $("#burgerMenu").css("visibility","visible");
  });
});
});
