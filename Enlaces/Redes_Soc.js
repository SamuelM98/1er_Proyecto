window.addEventListener("scroll", function () {
    var rs = document.getElementById("RS");
    var windowHeight = window.innerHeight;
    var contentHeight = document.body.clientHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= contentHeight) {
        rs.style.display = "none";
    } else {
        rs.style.display = "block";
    }
});