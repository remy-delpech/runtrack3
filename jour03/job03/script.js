$(document).ready(function() {
    var emptyTile = "tile9";
    var messageElement = $("#message");
    var restartButton = $("#restartButton");
    var tiles = $(".tile");
  
    tiles.click(function() {
      var tileId = $(this).attr("id");
      var emptyTileId = emptyTile.substring(4);
  
      if (isAdjacent(tileId, emptyTileId)) {
        swapTiles(tileId, emptyTile);
        emptyTile = tileId;
        checkWinCondition();
      }
    });
  
    $("#shuffleButton").click(function() {
      shuffleTiles();
      restartButton.hide();
      messageElement.text("");
    });
  
    restartButton.click(function() {
      restartGame();
    });
  
    initializeGame();
  
    function initializeGame() {
      shuffleTiles();
    }
  
    function shuffleTiles() {
      var tileIds = ["1", "2", "3", "4", "5", "6", "7", "8"];
      tileIds.push(emptyTile.substring(4));
  
      for (var i = 0; i < tiles.length; i++) {
        var randomIndex = Math.floor(Math.random() * tileIds.length);
        var tileId = "tile" + tileIds[randomIndex];
        tiles.eq(i).attr("id", tileId).css("background-image", "url('image" + tileIds[randomIndex] + ".jpg')");
        tileIds.splice(randomIndex, 1);
      }
    }
  
    function swapTiles(tileId1, tileId2) {
      var tile1 = $("#" + tileId1);
      var tile2 = $("#" + tileId2);
      var tile1Position = tile1.position();
      var tile2Position = tile2.position();
  
      tile1.animate(tile2Position, 200);
      tile2.animate(tile1Position, 200);
  
      tile1.attr("id", tileId2);
      tile2.attr("id", tileId1);
    }
  
    function isAdjacent(tileId, emptyTileId) {
      var tileNumber = parseInt(tileId.substring(4));
      var emptyTileNumber = parseInt(emptyTileId);
  
      return (
        (tileNumber === emptyTileNumber - 1 && emptyTileNumber % 3 !== 1) || // Left
        (tileNumber === emptyTileNumber + 1 && emptyTileNumber % 3 !== 0) || // Right
        tileNumber === emptyTileNumber - 3 || // Top
        tileNumber === emptyTileNumber + 3 // Bottom
      );
    }
  
    function checkWinCondition() {
      var isWin = true;
  
      tiles.each(function(index) {
        var tileId = $(this).attr("id");
        var tileNumber = parseInt(tileId.substring(4));
  
        if (tileNumber !== index + 1) {
          isWin = false;
          return false; // Exit the loop
        }
      });
  
      if (isWin) {
        messageElement.text("Vous avez gagné").css("color", "green");
        restartButton.show();
      }
    }
  
    function restartGame() {
      tiles.removeAttr("style").attr("id", function(index) {
        return "tile" + (index + 1);
      });
  
      emptyTile = "tile9";
      initializeGame();
    }
  });
   