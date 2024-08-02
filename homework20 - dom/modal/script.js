let btn = document.getElementsByClassName("modal_btn")[0];
let modal = document.getElementsByClassName("modal")[0];
let close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => {
    modal.classList.add("modal_show");
});

close.addEventListener("click", () => {
    modal.classList.remove("modal_show");
});