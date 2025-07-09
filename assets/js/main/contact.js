        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const btnText = document.querySelector('.btn-text');
            const btnLoading = document.querySelector('.btn-loading');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-block';
                
                // Hide any previous messages
                document.getElementById('successMessage').style.display = 'none';
                document.getElementById('errorMessage').style.display = 'none';
                
                // Simulate form submission (replace with actual AJAX call)
                setTimeout(function() {
                    // Randomly show success or error for demo
                    const isSuccess = Math.random() > 0.3;
                    
                    if (isSuccess) {
                        document.getElementById('successMessage').style.display = 'flex';
                        contactForm.reset();
                    } else {
                        document.getElementById('errorMessage').style.display = 'flex';
                    }
                    
                    // Reset button
                    btnText.style.display = 'inline-block';
                    btnLoading.style.display = 'none';
                    
                    // Scroll to message
                    const messageElement = isSuccess ? 
                        document.getElementById('successMessage') : 
                        document.getElementById('errorMessage');
                    
                    messageElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // Hide messages after 5 seconds
                    setTimeout(function() {
                        document.getElementById('successMessage').style.display = 'none';
                        document.getElementById('errorMessage').style.display = 'none';
                    }, 5000);
                }, 1500);
            });
        });