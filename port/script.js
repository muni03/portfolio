$(document).ready(function(){

  $("#burger").click(function(){
    $("#topNav").slideToggle("slow", function(){
      $("#topNav").show();
    })
  })
});
