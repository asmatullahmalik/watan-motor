// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission and success message display
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-success').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('form-success').classList.add('hidden');
        document.getElementById('contact-form').reset();
    }, 3000);
});
// JavaScript for Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Show the first slide on load
showSlide(slideIndex);

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function showSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// Smooth Scroll Function for Learn More Button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Function to filter cars by category
function filterCars(category) {
    const cars = document.querySelectorAll('.car-card');

    cars.forEach(car => {
        if (category === 'all') {
            car.style.display = 'block';
        } else if (car.classList.contains(category)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
}
// Function to show service details (for demonstration purposes)
function showServiceDetails(serviceName) {
    alert("You clicked on " + serviceName + ". More details coming soon!");
}
// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the back-to-top button when scrolling down
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
