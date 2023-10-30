
$(document).ready(function(){
  $(".button").click(function(){
    var answer = $(this).data('correct')=== true;
    if(answer === true){
    
      $(this).text("Correct Answer");
      $(this).css("background-color", "green",);
      $(this).css("font-size", "20px",);

    }else{
     
      $(this).text("Incorrect Try Again!");
      $(this).css("background-color", "red");
      $(this).css("font-size", "20px",);

    }
    $('.button').prop('disabled', true);

  });
 
});





