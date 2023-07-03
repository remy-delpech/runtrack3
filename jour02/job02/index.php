<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Ma page</h1>

    <button id="button" onclick="showhide()">Afficher/Disparaitre l'article</button>

    <script>
        function showhide() {
            var article = document.getElementById("article");
            var button = document.getElementById("button");

            if (article.style.display === "none") {
                article.style.display = "block";
                button.textContent = "Disparaitre l'article";
            } else {
                article.style.display = "none";
                button.textContent = "Afficher l'article";
            }
        }
    </script>
</body>
</html>
