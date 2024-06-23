document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        const currentItem = items[currentIndex];
        const h2Element = currentItem.querySelector('h2');
        const newColor = h2Element.getAttribute('data-color');
        h2Element.style.color = newColor;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel(); // Initial call to set the correct state
});