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


const cards = document.querySelectorAll('.testimonial-card');
let current = 0;

function showNextTestimonial() {
  cards[current].classList.remove('active');
  current = (current + 1) % cards.length;
  cards[current].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // change every 5 seconds

