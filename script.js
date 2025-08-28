// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Form Validation for Contact Form
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset error messages
            document.querySelectorAll('#nameError, #emailError, #messageError').forEach(error => {
                error.classList.add('hidden');
            });
            
            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput && nameError && !nameInput.value.trim()) {
                nameError.classList.remove('hidden');
                isValid = false;
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && emailError && !emailRegex.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                isValid = false;
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput && messageError && !messageInput.value.trim()) {
                messageError.classList.remove('hidden');
                isValid = false;
            }
            
            // If valid, show success message
            if (isValid) {
                contactForm.reset();
                
                // Create and show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'bg-green-100 text-green-700 p-4 rounded-lg mt-4';
                successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.appendChild(successMessage);
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Add animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    fadeInOnScroll();
    
    // Add event listener
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Video play functionality
    const videoThumbnail = document.getElementById('videoThumbnail');
    const videoOverlay = document.getElementById('videoOverlay');
    
    if (videoThumbnail && videoOverlay) {
        videoThumbnail.addEventListener('click', function() {
            // Here you would typically replace the thumbnail with an actual video
            // For this example, we'll just hide the overlay
            videoOverlay.classList.add('hidden');
            
            // Create and append an iframe for YouTube video (example)
            const videoContainer = document.getElementById('videoContainer');
            if (videoContainer) {
                const iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Replace with actual video ID
                iframe.width = '100%';
                iframe.height = '100%';
                iframe.frameBorder = '0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                
                videoContainer.appendChild(iframe);
            }
        });
    }
});

// Pricing toggle functionality
const monthlyToggle = document.getElementById('monthlyToggle');
const yearlyToggle = document.getElementById('yearlyToggle');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

if (monthlyToggle && yearlyToggle) {
    monthlyToggle.addEventListener('click', function() {
        monthlyToggle.classList.add('bg-primary', 'text-white');
        yearlyToggle.classList.remove('bg-primary', 'text-white');
        
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
    });
    
    yearlyToggle.addEventListener('click', function() {
        yearlyToggle.classList.add('bg-primary', 'text-white');
        monthlyToggle.classList.remove('bg-primary', 'text-white');
        
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
        monthlyPrices.forEach(price => price.classList.add('hidden'));
    });
}