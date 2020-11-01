let images = document.querySelectorAll(".visibility");
let current = 0;
let forward = document.querySelector(".btn-right");
let backward = document.querySelector(".btn-left");
slider();
function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("opacity");
    }
    images[current].classList.remove("opacity");
}
forward.onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider();
}
backward.onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
}