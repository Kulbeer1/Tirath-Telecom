// Simple slider (animation)
// Rotates through images
const sliderImages = document.querySelector('.slider-images');
const images = sliderImages.querySelectorAll('img');
let currentIndex = 0;

// Function to show image at index
function showImage(index) {
    sliderImages.style.transform = 'translateX(' + (-index * (images[0].width + 20)) + 'px)';
}

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);

// Slider buttons
document.getElementById('slider-left').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
};
document.getElementById('slider-right').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
};