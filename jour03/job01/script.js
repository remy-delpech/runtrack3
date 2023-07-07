$(document).ready(function() {
    $("#showButton").click(function() {
      $("#displayText").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
      $("#displayText").show();
    });
  
    $("#hideButton").click(function() {
      $("#displayText").hide();
    });
  });
  