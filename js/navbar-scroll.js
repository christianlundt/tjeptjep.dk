function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.padding = "7.5px 10px";
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, .99)";
    } else {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, .5)";
        document.getElementById("navbar").style.boxShadow = "0 8px 32px 0 rgba( 0, 0, 0, 0.37 )";
        document.getElementById("navbar-text1").style.fontSize = "18px";
        document.getElementById("navbar-text2").style.fontSize = "18px";
    }
}

window.onscroll = function () {
    scrollFunction();
};