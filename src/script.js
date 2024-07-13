/* Creating an intersection observer */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

/* Adding the observer to the elements */
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var swiper = new Swiper(".mySwiper", {
    effect: 'coverflow',
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: '2',

    // Settings for coverflow effect
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows : true,
    },  

    // Loop and autoplay
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
        
     /*Pagination
    pagination: {
    el: '.swiper-pagination',
    },*/

    // Navigation with keyboard and mouse
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

/* Creating a dropdown menu  */
const toggleBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown');

/* Adding an event listener to the button */
toggleBtn.addEventListener('click', function() {
    dropdown.classList.toggle('open');
});
