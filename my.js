
console.log ("check");




$(document).ready(function(){


   $('a').click(function(){
      $(this),toggleClass('big');
   });
   
$("#big").click(function(){

      $('a').toggleClass('big');
});
 
$("#darkmode").click(function(){
      $('body').toggleClass('darkmode');
});


})