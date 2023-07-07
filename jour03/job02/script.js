$(document).ready(function() {
    var rainbowImages = $("#rainbowContainer .image");
    var containers = $(".container");
    var originalOrder = [];
  
    // Mémoriser l'ordre initial des images
    rainbowImages.each(function(index) {
      originalOrder.push($(this).attr("src"));
    });
  
    $("#shuffleButton").click(function() {
      shuffleImages();
    });
  
    containers.droppable({
      drop: function(event, ui) {
        $(this).append(ui.draggable);
        checkOrder();
      }
    });
  
    function shuffleImages() {
      var currentIndex = rainbowImages.length;
      var temporaryValue, randomIndex;
  
      // Algorithme de mélange aléatoire (Fisher-Yates shuffle)
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        temporaryValue = rainbowImages[currentIndex].src;
        rainbowImages[currentIndex].src = rainbowImages[randomIndex].src;
        rainbowImages[randomIndex].src = temporaryValue;
      }
    }
  
    function checkOrder() {
      var currentOrder = [];
  
      containers.each(function(index) {
        var image = $(this).children(".image");
        if (image.length > 0) {
          currentOrder.push(image.attr("src"));
        }
      });
  
      if (currentOrder.length === rainbowImages.length && arraysEqual(currentOrder, originalOrder)) {
        $("#message").text("Vous avez gagné").css("color", "green");
      } else {
        $("#message").text("Vous avez perdu").css("color", "red");
      }
    }
  
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
  
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
  
      return true;
    }
  });
  