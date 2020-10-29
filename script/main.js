//scroll-queue

var pictureHeight = 600; //mit Framework in CSS
var navbarHeight = 100;
window.addEventListener("scroll", () => {
    var y = pageYOffset;
    document.getElementsByClassName("picture")[0].setAttribute("style", "background-position: 50% " + (40 - y/30) + "%;");
    document.querySelectorAll(".picture a").forEach((element) => {
        element.setAttribute("style", "opacity: " + (1 - y/(pictureHeight/2)) + ";");
    });
    if(y < 200){
        document.querySelector(".picture .push").setAttribute("style", "height: 0px;");
    }
    else{
        document.querySelector(".picture .push").setAttribute("style", "height: " + (y-200)/2 + "px;");
    }
});