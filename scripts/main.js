// Simple interactivity for the testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    function showNextTestimonial() {
        testimonials.forEach(testimonial => testimonial.classList.add('hidden'));
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.remove('hidden');
    }
    
    // Initially show the first testimonial
    if (testimonials.length > 0) {
        testimonials[0].classList.remove('hidden');
        setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});