document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    
    // Only handle internal scroll links like #section
    if (href.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: "smooth",
          });
        }
      });
    }
  });
});



// Testimonial slider functionality
// This assumes you have a set of testimonial cards with the class 'testimonial-card'
// and a parent container with the class 'testimonial-slider'
const cards = document.querySelectorAll('.testimonial-card');
let current = 0;

function showNextTestimonial() {
  cards[current].classList.remove('active');
  current = (current + 1) % cards.length;
  cards[current].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // change every 5 seconds



// Smooth scrolling for buttons with class 'scroll-btn'
// This assumes you have buttons with class 'scroll-btn' and a data-target attribute
// that corresponds to the ID of the section you want to scroll to
document.addEventListener('DOMContentLoaded', function () {
  const scrollButtons = document.querySelectorAll('.scroll-btn');

  scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -70; // Offset for fixed navbar
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});
