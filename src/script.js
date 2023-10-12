const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
let count = 0;

function adjustImageSize() {
    const sliderHeight = slider.clientHeight;
    images.forEach((img) => {
        img.style.height = sliderHeight + "px";
    });
}

function nextSlide() {
    count = (count + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    count = (count - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const translation = -count * 100;
    slider.style.transform = `translateX(${translation}%)`;
}

function autoAdvance() {
    nextSlide();
}

// Adjust image size initially and on window resize
adjustImageSize();
window.addEventListener("resize", adjustImageSize);

setInterval(autoAdvance, 3000); // Auto-advance every 3 seconds

document.querySelector(".next-button").addEventListener("click", nextSlide);
document.querySelector(".prev-button").addEventListener("click", prevSlide);
