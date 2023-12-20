function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.padding = "7.5px 10px";
    } else {
        document.getElementById("navbar-text1").style.fontSize = "18px";
        document.getElementById("navbar-text2").style.fontSize = "18px";
    }
}

window.onscroll = function () {
    scrollFunction();
};