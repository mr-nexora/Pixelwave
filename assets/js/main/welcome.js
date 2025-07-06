document.addEventListener('DOMContentLoaded', function() {
            // Mobile wallpaper cycling
            const mobileImages = document.querySelectorAll('.mobile-screen img');
            let mobileCurrent = 0;
            
            // Desktop wallpaper cycling
            const desktopImages = document.querySelectorAll('.desktop-screen img');
            let desktopCurrent = 0;
            
            function cycleMobileWallpapers() {
                mobileImages[mobileCurrent].classList.remove('active');
                mobileCurrent = (mobileCurrent + 1) % mobileImages.length;
                mobileImages[mobileCurrent].classList.add('active');
            }
            
            function cycleDesktopWallpapers() {
                desktopImages[desktopCurrent].classList.remove('active');
                desktopCurrent = (desktopCurrent + 1) % desktopImages.length;
                desktopImages[desktopCurrent].classList.add('active');
            }
            
            // Start cycling (different intervals for visual interest)
            setInterval(cycleMobileWallpapers, 3000);
            setInterval(cycleDesktopWallpapers, 3500);
        });