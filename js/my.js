

console.log('dark mode');

$(document).ready(function(){
    $( ‘.item’ ).click( function( ){
        $(this).toggleClass('active'));


});

$("#darkmode").click(function(){
    $('body').toggleClass('darkmode');

});