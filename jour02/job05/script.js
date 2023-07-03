window.addEventListener("scroll", function () {
    var footer = document.querySelector("footer");
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercent = (scrollTop / (bodyHeight - windowHeight)) * 100;

    footer.style.backgroundColor = "hsl(" + scrollPercent + ", 100%, 50%)";
});
