// Simple interactivity for the testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    function showNextTestimonial() {
        if (testimonials.length === 0) return; // Prevent errors if no testimonials exist
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
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});