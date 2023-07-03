<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Ma page</h1>

    <button id="button">Cliquez ici</button>
    <p id="compteur">0</p>

    <script>
        var compteur = 0;
        var button = document.getElementById("button");
        var compteurElement = document.getElementById("compteur");

        button.addEventListener("click", addone);

        function addone() {
            compteur++;
            compteurElement.textContent = compteur;
        }
    </script>
</body>
</html>
