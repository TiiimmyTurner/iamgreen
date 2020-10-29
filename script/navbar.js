window.addEventListener("scroll", () => {
    if(pageYOffset >= pictureHeight - navbarHeight && pageYOffset <= pictureHeight){
        document.querySelector("#navbar .color").setAttribute("style", "height: " + (pageYOffset - pictureHeight + navbarHeight) + "px;");
    }
    else if(pageYOffset < pictureHeight - navbarHeight){
        document.querySelector("#navbar .color").setAttribute("style", "height: 0px;");
    }
    else{
        document.querySelector("#navbar .color").setAttribute("style", "height: " + navbarHeight + "px;");
    }
});