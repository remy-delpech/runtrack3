window.onload = function () {
    var compteur = 0;
    var button = document.getElementById("button");
    var compteurElement = document.getElementById("compteur");

    button.addEventListener("click", addone);

    function addone() {
        compteur++;
        compteurElement.textContent = compteur;
    }
};
