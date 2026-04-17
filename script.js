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
    { type: 'video', src: 'images/profile-12.MOV', caption: 'Profile 12' }
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
