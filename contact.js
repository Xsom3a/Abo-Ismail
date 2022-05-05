let spanheader = document.querySelector(".span-header");
let listphone = document.querySelector(".list-phone");

spanheader.addEventListener("click", function(eo) {
    listphone.classList.add("list-phoneX");
});
let close = document.querySelector(".close");

close.addEventListener("click", function(eo) {
    listphone.classList.remove("list-phoneX");
});


// up

let up = document.querySelector(".up");
window.addEventListener("scroll", function(eo) {
    if (window.scrollY > 600) {
        up.classList.add("upx");
    } else {
        up.classList.remove("upx");
    }
});

up.addEventListener("click", function(eo) {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});