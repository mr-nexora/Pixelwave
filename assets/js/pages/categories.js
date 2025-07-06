//Wallpaper Galllery
// Gallery specific JavaScript with unique variable names
        document.addEventListener('DOMContentLoaded', function() {
            // Get all wallpaper items
            const wgWallpaperItems = document.querySelectorAll('.wg-wallpaper-item');
            const wgModal = document.getElementById('wg-previewModal');
            const wgMobileScreen = document.getElementById('wg-mobileScreen');
            const wgWallpaperTitle = document.getElementById('wg-wallpaperTitle');
            const wgDownloadBtn = document.getElementById('wg-downloadBtn');
            const wgCloseBtn = document.querySelector('.wg-close-btn');
            const wgScrollLeft = document.getElementById('wg-scrollLeft');
            const wgScrollRight = document.getElementById('wg-scrollRight');
            
            let wgCurrentIndex = 0;
            let wgWallpapers = [];
            
            // Initialize wallpapers array with data from items
            wgWallpaperItems.forEach((item, index) => {
                const wallpaper = {
                    image: item.getAttribute('data-image'),
                    title: item.getAttribute('data-title'),
                    index: index
                };
                wgWallpapers.push(wallpaper);
                
                // Add click event to each item
                item.addEventListener('click', () => {
                    wgCurrentIndex = index;
                    wgShowWallpaper(wgWallpapers[wgCurrentIndex]);
                    wgModal.style.display = 'flex';
                });
            });
            
            // Show wallpaper in mobile mockup
            function wgShowWallpaper(wallpaper) {
                wgMobileScreen.style.backgroundImage = `url('${wallpaper.image}')`;
                wgWallpaperTitle.textContent = wallpaper.title;
                wgDownloadBtn.onclick = () => {
                    window.open(wallpaper.image, '_blank');
                };
            }
            
            // Close modal
            wgCloseBtn.addEventListener('click', () => {
                wgModal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === wgModal) {
                    wgModal.style.display = 'none';
                }
            });
            
            // Navigation between wallpapers
            wgScrollLeft.addEventListener('click', () => {
                wgCurrentIndex = (wgCurrentIndex - 1 + wgWallpapers.length) % wgWallpapers.length;
                wgShowWallpaper(wgWallpapers[wgCurrentIndex]);
            });
            
            wgScrollRight.addEventListener('click', () => {
                wgCurrentIndex = (wgCurrentIndex + 1) % wgWallpapers.length;
                wgShowWallpaper(wgWallpapers[wgCurrentIndex]);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (wgModal.style.display === 'flex') {
                    if (e.key === 'ArrowLeft') {
                        wgCurrentIndex = (wgCurrentIndex - 1 + wgWallpapers.length) % wgWallpapers.length;
                        wgShowWallpaper(wgWallpapers[wgCurrentIndex]);
                    } else if (e.key === 'ArrowRight') {
                        wgCurrentIndex = (wgCurrentIndex + 1) % wgWallpapers.length;
                        wgShowWallpaper(wgWallpapers[wgCurrentIndex]);
                    } else if (e.key === 'Escape') {
                        wgModal.style.display = 'none';
                    }
                }
            });
        });