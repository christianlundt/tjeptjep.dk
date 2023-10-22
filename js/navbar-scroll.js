//Scroll 70px ned og navbar ændre sig
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
        document.geoElementById("navbar").style.background = "rgba(255, 255, 255, .99)";
    } else {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, .5)";
        document.getElementById("navbar").style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
    }
}
