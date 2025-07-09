        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animate team members on scroll
        const teamMembers = document.querySelectorAll('.team-member');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        teamMembers.forEach(member => {
            member.style.opacity = '0';
            member.style.transform = 'translateY(20px)';
            member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(member);
        });

        // Testimonial animation
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        testimonials.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = `translateX(${index % 2 === 0 ? '-' : ''}20px)`;
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            const testimonialObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            testimonialObserver.observe(card);
        });