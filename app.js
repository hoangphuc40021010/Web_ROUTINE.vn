document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const thumbnailsContainer = document.querySelector(".thumbnails");

    // Tạo thumbnails
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        thumbnail.addEventListener("click", () => showSlide(index));
        thumbnailsContainer.appendChild(thumbnail);
    });

    function showSlide(index) {
        slideIndex = index;
        updateSlides();
    }

    function updateSlides() {
        slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
        updateThumbnails();
    }

    function updateThumbnails() {
        const thumbnails = document.querySelectorAll(".thumbnail");
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active", index === slideIndex);
        });
    }

    function nextSlide() {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateSlides();
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slides.length - 1;
        }
        updateSlides();
    }

    setInterval(nextSlide, 3000); // Thay đổi số 3000 để điều chỉnh thời gian chuyển đổi giữa các slide
});

window.onscroll = () =>{
    let header = document.querySelector('.header-content');
    let left1 = document.querySelector('.left1');
    let left2 = document.querySelector('.left2');
    let left3 = document.querySelector('.left3');
    let nav = document.querySelector('.head-logo');
    let icon1 = document.querySelector('.icon1');
    let icon2 = document.querySelector('.icon2');
    let icon3 = document.querySelector('.icon3');
    let icon4 = document.querySelector('.icon4');
    let search = document.querySelector('.search');



    header.classList.toggle('sticky', window.scrollY > 80);
    left1.classList.toggle('sticky', window.scrollY > 80);
    left2.classList.toggle('sticky', window.scrollY > 80);
    left3.classList.toggle('sticky', window.scrollY > 80);
    nav.classList.toggle('sticky', window.scrollY > 80);
    icon1.classList.toggle('sticky', window.scrollY > 80);
    icon2.classList.toggle('sticky', window.scrollY > 80);
    icon3.classList.toggle('sticky', window.scrollY > 80);
    icon4.classList.toggle('sticky', window.scrollY > 80);
    search.classList.toggle('sticky', window.scrollY > 80);
};
