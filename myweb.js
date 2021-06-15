var slides = document.getElementsByClassName('mySlides1');
var slides2 = document.getElementsByClassName('mySlides2');
var l = 0;
var m = 0;
plusSlides = () => {
    l++;
    for (var i of slides) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-740px"; }
        if (l == 2) { i.style.left = "-1480px"; }
        if (l > 2) { l = 2;}
    }
}
minusSlides = () => {
    l--;
    console.log('prev CLicked!!');
    for (var i of slides) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-740px"; }
        if (l < 0) { l = 0;}
    }
}
plusSlides2 = () => {
    m++;
    for (var i of slides2) {
        if (m == 0) { i.style.left = "0px"; }
        if (m == 1) { i.style.left = "-740px"; }
        if (m == 2) { i.style.left = "-1480px"; }
        if (m > 2) { m = 2;}
    }
}
minusSlides2 = () => {
    m--;
    for (var i of slides2) {
        if (m == 0) { i.style.left = "0px"; }
        if (m == 1) { i.style.left = "-740px"; }
        if (m < 0) { m = 0;}
    }
}