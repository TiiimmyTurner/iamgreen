document.getElementById("sidebar").addEventListener("mouseover", () => {
    document.getElementById("sidebar").setAttribute("style", "background-color: rgba(0, 0, 0, 0.2);");
});
document.getElementById("sidebar").addEventListener("mouseleave", () => {
    document.getElementById("sidebar").setAttribute("style", "background-color: rgba(0, 0, 0, 0);");
});
