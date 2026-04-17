// Carousel Data
const carouselItems = [
    { type: 'img', src: 'images/profile-1.jpg', caption: 'Profile 1' },
    { type: 'img', src: 'images/profile-2.jpg', caption: 'Profile 2' },
    { type: 'img', src: 'images/profile-3.jpg', caption: 'Profile 3' },
    { type: 'video', src: 'images/profile-4.mp4', caption: 'Profile 4' },
    { type: 'img', src: 'images/profile-5.JPG', caption: 'Profile 5' },
    { type: 'img', src: 'images/profile-6.JPG', caption: 'Profile 6' },
    { type: 'video', src: 'images/profile-7.MOV', caption: 'Profile 7' },
    { type: 'img', src: 'images/profile-8.JPG', caption: 'Profile 8' },
    { type: 'video', src: 'images/profile-9.MOV', caption: 'Profile 9' },
    { type: 'video', src: 'images/profile-10.MOV', caption: 'Profile 10' },
    { type: 'img', src: 'images/profile-11.JPG', caption: 'Profile 11' },
    { type: 'video', src: 'images/profile-12.MOV', caption: 'Profile 12' },
    { type: 'img', src: 'images/profile-13.JPG', caption: 'Profile 13' },
    { type: 'img', src: 'images/profile-14.JPG', caption: 'Profile 14' },
    { type: 'video', src: 'images/profile-15.MOV', caption: 'Profile 15' },
    { type: 'img', src: 'images/profile-16.jpg', caption: 'Profile 16' },
    { type: 'img', src: 'images/profile-17.JPG', caption: 'Profile 17' },
    { type: 'img', src: 'images/profile-18.JPG', caption: 'Profile 18' },
    { type: 'img', src: 'images/profile-19.jpg', caption: 'Profile 19' },
    { type: 'video', src: 'images/profile-20.MOV', caption: 'Profile 20' },
    { type: 'img', src: 'images/profile-21.JPG', caption: 'Profile 21' },
    { type: 'img', src: 'images/profile-22.JPG', caption: 'Profile 22' },
    { type: 'img', src: 'images/profile-23.jpg', caption: 'Profile 23' },
    { type: 'img', src: 'images/profile-24.jpg', caption: 'Profile 24' },
    { type: 'video', src: 'images/profile-25.MOV', caption: 'Profile 25' },
    { type: 'img', src: 'images/profile-26.jpg', caption: 'Profile 26' },
    { type: 'img', src: 'images/profile-27.JPG', caption: 'Profile 27' },
    { type: 'img', src: 'images/profile-28.JPG', caption: 'Profile 28' },
    { type: 'img', src: 'images/profile-29.JPG', caption: 'Profile 29' },
    { type: 'img', src: 'images/profile-30.JPG', caption: 'Profile 30' },
    { type: 'img', src: 'images/profile-31.JPG', caption: 'Profile 31' },
    { type: 'img', src: 'images/profile-32.JPG', caption: 'Profile 32' },
    { type: 'img', src: 'images/profile-33.JPG', caption: 'Profile 33' },
    { type: 'img', src: 'images/profile-34.JPG', caption: 'Profile 34' },
    { type: 'img', src: 'images/profile-35.jpg', caption: 'Profile 35' },
    { type: 'img', src: 'images/profile-36.jpg', caption: 'Profile 36' },
    { type: 'img', src: 'images/profile-37.jpg', caption: 'Profile 37' }
];
let carouselIndex = 0;

function showCarouselItem(idx) {
    const item = carouselItems[idx];
    const img = document.getElementById('carousel-img');
    const video = document.getElementById('carousel-video');
    if (item.type === 'img') {
        img.src = item.src;
        img.alt = item.caption;
        img.style.display = '';
        video.style.display = 'none';
    } else {
        video.src = item.src;
        video.style.display = '';
        img.style.display = 'none';
    }
    document.getElementById('carousel-caption').textContent = item.caption + ' (' + (idx+1) + '/' + carouselItems.length + ')';
}

function carouselPrev() {
    carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(carouselIndex);
}
function carouselNext() {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    showCarouselItem(carouselIndex);
}

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    lightboxContent.innerHTML = '';
    const clone = element.cloneNode(true);
    clone.style.width = 'auto';
    clone.style.height = 'auto';
    lightboxContent.appendChild(clone);
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showCarouselItem(carouselIndex);
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
});
