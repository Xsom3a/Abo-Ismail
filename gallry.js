let spanheader = document.querySelector(".span-header");
let listphone = document.querySelector(".list-phone");

spanheader.addEventListener("click", function(eo) {
    listphone.classList.add("list-phoneX");
});
let close = document.querySelector(".close");

close.addEventListener("click", function(eo) {
    listphone.classList.remove("list-phoneX");
});

let bookoverlay = document.querySelector(".book-overlay");
let partgallry = document.querySelectorAll(".part-gallry");
partgallry.forEach((element, index) => {
    element.addEventListener("click", function(eo) {
        bookoverlay.classList.add("book-overlayX");
        let imgSrc = element.getElementsByTagName("img")[0].getAttribute("src");
        let inerhtmlImg = `
<img src="${imgSrc}" alt="" srcset="" />
`;
        let imgover = document.querySelector(".img-over");
        imgover.innerHTML = inerhtmlImg;

        let right = document.querySelector(".right");

        let i = 0;
        right.addEventListener("click", function(eo) {
            let bookimginerarray = [
                `img/gallry/1.jpg`,
                `img/gallry/2.jpg`,
                `img/gallry/3.jpg`,
                `img/gallry/4.jpg`,
                `img/gallry/5.jpg`,
                `img/gallry/6.jpg`,
                `img/gallry/7.jpg`,
                `img/gallry/8.jpg`,
                `img/gallry/9.jpg`,
                `img/gallry/10.jpg`,
                `img/gallry/11.jpg`,
                `img/gallry/12.jpg`,
                `img/gallry/13.jpg`,
                `img/gallry/14.jpg`,
                `img/gallry/15.jpg`,
                `img/gallry/16.jpg`,
                `img/gallry/17.jpg`,
                `img/gallry/18.jpg`,
                `img/gallry/19.jpg`,
            ];
            let inerhtmlImg = `
      <img src="${bookimginerarray[i]}" alt="" srcset="" />
      `;
            i++;
            let imgover = document.querySelector(".img-over");
            imgover.innerHTML = inerhtmlImg;
            if (i == bookimginerarray.length) {
                i = 0;
            }
        });
        let left = document.querySelector(".left");
        // let i = 0;

        left.addEventListener("click", function(eo) {
            let bookimginerarray = [
                `img/gallry/1.jpg`,
                `img/gallry/2.jpg`,
                `img/gallry/3.jpg`,
                `img/gallry/4.jpg`,
                `img/gallry/5.jpg`,
                `img/gallry/6.jpg`,
                `img/gallry/7.jpg`,
                `img/gallry/8.jpg`,
                `img/gallry/9.jpg`,
                `img/gallry/10.jpg`,
                `img/gallry/11.jpg`,
                `img/gallry/12.jpg`,
                `img/gallry/13.jpg`,
                `img/gallry/14.jpg`,
                `img/gallry/15.jpg`,
                `img/gallry/16.jpg`,
                `img/gallry/17.jpg`,
                `img/gallry/18.jpg`,
                `img/gallry/19.jpg`,
            ];
            console.log(bookimginerarray.length);
            let inerhtmlImg = `
      <img src="${bookimginerarray[i]}" alt="" srcset="" />
      `;

            let imgover = document.querySelector(".img-over");
            imgover.innerHTML = inerhtmlImg;
            if (i == 0) {
                i = bookimginerarray.length;
            }
            i--;
            console.log(i);
        });
    });
});

let right = document.querySelector(".right");

let closebookover = document.querySelector(".close-book-over");
closebookover.addEventListener("click", function(eo) {
    bookoverlay.classList.remove("book-overlayX");
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