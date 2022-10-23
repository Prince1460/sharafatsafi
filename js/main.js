// Header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
//Mouse Hover

var curser = document.querySelector(".curser");
var curserinner = document.querySelector(".curser2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove",function(e){
    var x = e.clientX;
    var y = e.clientY;
    curser.style.transform = 'translate3d(calc(${e.clientX}px - 50%),calc(${e.clientY}px - 50%),0)';
});
document.addEventListener("mousemove",function(e){
    var x = e.clientX;
    var y = e.clientY;
    curserinner.style.left = x + "px";
    curserinner.style.left = y + "px";
})
document.addEventListener("mousedown",function(){
    curser.classList.add("click");
    curserinner.classList.add("curserinner")
})

document.addEventListener("mouseup",function(){
    curser.classList.remove("click");
    curserinner.classList.remove("curserinner")
})