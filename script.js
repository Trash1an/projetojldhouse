let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header1')
    header.classList.toggle('rolagem', window.scrollY > 1)
})


AOS.init();

const overlay = document.getElementById("overlay");
const overlayImage = document.querySelector(".overlay-image");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const trabalhos = document.querySelectorAll(".trabalho img");
let currentIndex = 0;

function showImage(index) {
    if (index >= 0 && index < trabalhos.length) {
        const selectedImageSrc = trabalhos[index].src;
        overlayImage.src = selectedImageSrc;
        currentIndex = index;
    }
}

trabalhos.forEach((trabalho, index) => {
    trabalho.addEventListener("click", () => {
        showImage(index);
        overlay.style.display = "block";
    });
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
});