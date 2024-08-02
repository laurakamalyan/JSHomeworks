let slider = document.getElementById("slider");
let previous_btn = document.getElementsByClassName("left_arrow")[0];
let next_btn = document.getElementsByClassName("right_arrow")[0];

let index = 0;
let x = [];

let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

let show = imgs => {
    for (let i = 0; i < imgs.length; i++) {
        slider.innerHTML += `<img src="img/${imgs[i]}" alt="slider image">`;
    }
}

let move = btn => {
    if (btn === "prev") {
        index++;
        if (index === imgs.length) index = 0;
    } else {
        index--;
        if (index === 0) index = imgs.length;
    }

    slider.innerHTML = "";

    x = imgs.slice(index,).concat(imgs.slice(0, index));
    show(x);
}

show(imgs);

previous_btn.addEventListener("click", () => move("prev"));
next_btn.addEventListener("click", () => move("next"));