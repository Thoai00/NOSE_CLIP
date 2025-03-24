document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".product-image img");
    const thumbnails = document.querySelectorAll(".product-thumbnails img");
    const productImageContainer = document.querySelector(".product-image");
    const images = document.querySelectorAll('.image');


    images.forEach(image => {
        image.addEventListener('click', function () {
            images.forEach(img => {
                img.dataset.size = 'small';
                img.style.width = '300px';
            });
            this.dataset.size = 'large';
            this.style.width = '630px';
        });
    });

       thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            mainImage.src = this.src;
            productImageContainer.style.transition = "background-color 0.5s ease";
            productImageContainer.style.backgroundColor = getRandomColor();
        });
    });

});

const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel .image");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let currentIndex = 0;

function updateCarousel() {
    const translateValue = currentIndex * -80; 
    track.style.transform = `translateX(${translateValue}%)`;

    images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
    });
}

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

updateCarousel();

function toggleFAQ(element) {
    let answer = element.parentElement.nextElementSibling;
    let isVisible = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((ans, index) => {
        if (index !== 0) ans.style.display = "none";
    });

    document.querySelectorAll(".toggle-icon").forEach((icon, index) => {
        if (index !== 0) icon.src = "assets/image/plus.png";
    });

    if (!isVisible) {
        answer.style.display = "block";
        element.src = "assets/image/minus.png"; 
    } else if (element.parentElement.previousElementSibling) { 
        element.src = "assets/image/plus.png";
    }
}

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        document.querySelector(".navbar").classList.remove("hide");
        return;
    }

    if (currentScroll > lastScroll && !document.querySelector(".navbar").classList.contains("hide")) {
        document.querySelector(".navbar").classList.add("hide");
    } else if (currentScroll < lastScroll && document.querySelector(".navbar").classList.contains("hide")) {
        document.querySelector(".navbar").classList.remove("hide");
    }

    lastScroll = currentScroll;
});

document.querySelectorAll('.extra-info li').forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('active');
    });
});



