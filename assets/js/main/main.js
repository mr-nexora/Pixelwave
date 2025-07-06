//Hero Section
// Background Image Rotation
        document.addEventListener('DOMContentLoaded', function() {
            const heroBg = document.querySelector('.hero-bg');
            const images = heroBg.querySelectorAll('img');
            let currentIndex = 0;
            
            function rotateImages() {
                // Remove active class from current image
                images[currentIndex].classList.remove('active');
                
                // Increment index or reset to 0
                currentIndex = (currentIndex + 1) % images.length;
                
                // Add active class to next image
                images[currentIndex].classList.add('active');
            }
            
            // Rotate images every 5 seconds
            setInterval(rotateImages, 5000);
            
            // Message Popup Toggle
            const messageTab = document.querySelector('.message-tab');
            const messagePopup = document.querySelector('.message-popup');
            const closeMessage = document.querySelector('.close-message');
            
            messageTab.addEventListener('click', function() {
                messagePopup.classList.toggle('active');
            });
            
            closeMessage.addEventListener('click', function() {
                messagePopup.classList.remove('active');
            });
            
            // Close popup when clicking outside
            document.addEventListener('click', function(event) {
                if (!messagePopup.contains(event.target) && event.target !== messageTab) {
                    messagePopup.classList.remove('active');
                }
            });
        });


        //Wallpaper Category Cards Section
        // Manual scrolling with arrows
        const scrollLeft = document.getElementById('scrollLeft');
        const scrollRight = document.getElementById('scrollRight');
        const categoriesScroller = document.getElementById('categoriesScroller');
        
        scrollLeft.addEventListener('click', () => {
            categoriesScroller.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        scrollRight.addEventListener('click', () => {
            categoriesScroller.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
        
        // Pause auto-scroll on hover
        categoriesScroller.addEventListener('mouseenter', () => {
            categoriesScroller.style.animationPlayState = 'paused';
        });
        
        categoriesScroller.addEventListener('mouseleave', () => {
            categoriesScroller.style.animationPlayState = 'running';
        });
        
        // Touch/swipe support for mobile
        let isDown = false;
        let startX;
        let scrollLeftPos;
        
        categoriesScroller.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - categoriesScroller.offsetLeft;
            scrollLeftPos = categoriesScroller.scrollLeft;
            categoriesScroller.style.cursor = 'grabbing';
            categoriesScroller.style.animationPlayState = 'paused';
        });
        
        categoriesScroller.addEventListener('mouseleave', () => {
            isDown = false;
            categoriesScroller.style.cursor = 'grab';
            categoriesScroller.style.animationPlayState = 'running';
        });
        
        categoriesScroller.addEventListener('mouseup', () => {
            isDown = false;
            categoriesScroller.style.cursor = 'grab';
            categoriesScroller.style.animationPlayState = 'running';
        });
        
        categoriesScroller.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoriesScroller.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            categoriesScroller.scrollLeft = scrollLeftPos - walk;
        });
        
        // Touch events for mobile
        categoriesScroller.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - categoriesScroller.offsetLeft;
            scrollLeftPos = categoriesScroller.scrollLeft;
            categoriesScroller.style.animationPlayState = 'paused';
        }, {passive: false});
        
        categoriesScroller.addEventListener('touchend', () => {
            isDown = false;
            categoriesScroller.style.animationPlayState = 'running';
        }, {passive: false});
        
        categoriesScroller.addEventListener('touchmove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - categoriesScroller.offsetLeft;
            const walk = (x - startX) * 2;
            categoriesScroller.scrollLeft = scrollLeftPos - walk;
        }, {passive: false});
        
        // Infinite scroll simulation
        categoriesScroller.addEventListener('scroll', () => {
            const maxScroll = categoriesScroller.scrollWidth - categoriesScroller.clientWidth;
            
            // If we've scrolled to the end, reset to start
            if (categoriesScroller.scrollLeft >= maxScroll - 10) {
                setTimeout(() => {
                    categoriesScroller.scrollTo({
                        left: 0,
                        behavior: 'auto'
                    });
                }, 1000);
            }
        });