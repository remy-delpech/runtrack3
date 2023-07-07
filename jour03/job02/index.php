<!DOCTYPE html>
<html>
<head>
  <title>Job 02 - jQuery</title>
  <style>
    .image {
      display: inline-block;
      width: 100px;
    }

    #rainbowContainer {
      margin-bottom: 20px;
    }

    #message {
      font-weight: bold;
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</head>
<body>
  <h1>Job 02 - jQuery</h1>
  <div id="rainbowContainer">
    <img class="image" src="arc1.png">
    <img class="image" src="arc2.png">
    <img class="image" src="arc3.png">
    <img class="image" src="arc3.png">
    <img class="image" src="arc4.png">
    <img class="image" src="arc5.png">
  </div>
  <button id="shuffleButton">Mélanger</button>
  <div id="container1" class="container"></div>
  <div id="container2" class="container"></div>
  <div id="message"></div>
</body>
</html>
