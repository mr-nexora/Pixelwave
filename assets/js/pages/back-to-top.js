document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.getElementById('backToTop');
            
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            // Smooth scroll to top
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Add click animation
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
            
            // Optional: Add floating animation
            function floatAnimation() {
                backToTopButton.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    backToTopButton.style.transform = 'translateY(5px)';
                    setTimeout(() => {
                        backToTopButton.style.transform = '';
                        setTimeout(floatAnimation, 2000);
                    }, 1000);
                }, 1000);
            }
            
            // Start animation when button is active
            setInterval(() => {
                if (backToTopButton.classList.contains('active')) {
                    floatAnimation();
                }
            }, 4000);
        });