<!DOCTYPE html>
<html>
<head>
  <title>Jeu du Taquin</title>
  <style>
    .puzzle {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      width: 300px;
    }

    .tile {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      cursor: pointer;
      background-size: cover;
      background-position: center;
    }

    #message {
      font-weight: bold;
    }

    #buttons {
      margin-top: 10px;
    }

    #restartButton {
      display: none;
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</head>
<body>
  <h1>Jeu du Taquin</h1>
  <div class="puzzle" id="puzzleContainer">
  <div class="tile" id="tile1" style="background-image: url('logo1.png');"></div>
  <div class="tile" id="tile2" style="background-image: url('logo2.png');"></div>
  <div class="tile" id="tile3" style="background-image: url('logo3.png');"></div>
  <div class="tile" id="tile4" style="background-image: url('logo4.png');"></div>
  <div class="tile" id="tile5" style="background-image: url('logo5.png');"></div>
  <div class="tile" id="tile6" style="background-image: url('logo6.png');"></div>
  <div class="tile" id="tile7" style="background-image: url('logo7.png');"></div>
  <div class="tile" id="tile8" style="background-image: url('logo8.png');"></div>
  <div class="tile" id="tile9"></div>
</div>

<div id="buttons">
    <button id="shuffleButton">Mélanger</button>
    <button id="restartButton" style="display: none;">Recommencer</button>
  </div>
  <div id="message"></div>
</body>
</html>