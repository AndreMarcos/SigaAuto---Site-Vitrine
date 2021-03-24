$(function() {

    document.getElementById("backtop").style.display = "none";
    document.getElementById("entrar").style.backgroundColor = "#FFA500";
    document.getElementById("entrar").style.color = "#FFFFFF";
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 2) {
        document.getElementById("backtop").style.display = "block";
        document.getElementById("gtco-main-nav2").style.background = "#FFFFFF";
        document.getElementById("entrar").style.borderColor = "none";
        document.getElementById("entrar").style.backgroundColor = "#4B0082"
    } else {
        document.getElementById("backtop").style.display = "none";
        document.getElementById("gtco-main-nav2").style.background = "none";
        document.getElementById("entrar").style.backgroundColor = "#FFA500";

    }
});

$(function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2500); // Change image every 2 seconds
    }
})