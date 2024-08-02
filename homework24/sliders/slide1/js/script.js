let parent = document.getElementById("slide");
let left_button = document.getElementsByClassName("left_arrow")[0];
let right_button = document.getElementsByClassName("right_arrow")[0];

right_button.addEventListener("click", function(){
    let active_div = document.getElementsByClassName("active")[0];
    let next_div = active_div.nextElementSibling;
    if (next_div === null) next_div = parent.firstElementChild;
    next_div.classList.add("active");
    active_div.classList.remove("active");
});

left_button.addEventListener("click", function(){
    let active_div = document.getElementsByClassName("active")[0];
    let previous_div = active_div.previousElementSibling;
    if (previous_div === null) previous_div = parent.lastElementChild;
    previous_div.classList.add("active");
    active_div.classList.remove("active");
});

