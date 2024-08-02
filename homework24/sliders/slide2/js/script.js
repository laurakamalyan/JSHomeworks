let previous_btn = document.getElementsByClassName("left_arrow")[0];
let next_btn = document.getElementsByClassName("right_arrow")[0];
let slider = document.getElementById("slider");
let position = 0;
const step = 200;

let imgs = document.getElementsByTagName("img");
let img_width = imgs[0].offsetWidth;
let imgs_count = imgs.length;
let imgs_show = slider.offsetWidth / img_width;
let imgs_hide = imgs_count - imgs_show;

function move(btn) {
    if (btn === "prev" && position !== -imgs_hide * img_width) position -= step;
    else if (btn === "next" && position !== 0) position += step;

    slider.style.left = position + "px";
}

previous_btn.addEventListener("click", () => move("prev") );
next_btn.addEventListener("click", () => move("next") );