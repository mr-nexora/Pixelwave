document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Get wallpaper ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const wallpaperId = urlParams.get('id');
    
    if (!wallpaperId) {
        window.location.href = 'forests.html';
        return;
    }
    
    // Fetch wallpapers data
    fetch('../../data.json')
        .then(response => response.json())
        .then(data => {
            const wallpaper = data.wallpapers.find(w => w.id === wallpaperId);
            
            if (!wallpaper) {
                window.location.href = 'forests.html';
                return;
            }
            
            // Update page title
            document.title = `${wallpaper.title} - PixelWave`;
            
            // Populate wallpaper details
            document.getElementById('wallpaper-title').textContent = wallpaper.title;
            document.getElementById('wallpaper-resolution').textContent = wallpaper.resolution;
            document.getElementById('wallpaper-downloads').textContent = `${wallpaper.downloads.toLocaleString()} Downloads`;
            document.getElementById('wallpaper-date').textContent = wallpaper.dateAdded;
            document.getElementById('wallpaper-image').src = wallpaper.image;
            document.getElementById('wallpaper-image').alt = wallpaper.title;
            document.getElementById('fullscreen-image').src = wallpaper.image;
            document.getElementById('wallpaper-prompt').textContent = wallpaper.prompt;
            document.getElementById('wallpaper-description').textContent = wallpaper.description || 'No description available.';
            
            // Set share link
            const shareLink = `${window.location.origin}${window.location.pathname}?id=${wallpaper.id}`;
            document.getElementById('share-link').value = shareLink;
            
            // Render tags
            renderTags(wallpaper.tags);
            
            // Find related wallpapers (same type, different wallpapers)
            const relatedWallpapers = data.wallpapers
                .filter(w => w.type === wallpaper.type && w.id !== wallpaper.id)
                .slice(0, 6);
            
            renderRelatedWallpapers(relatedWallpapers);
            
            // Set up event listeners
            setupEventListeners(wallpaper);
        })
        .catch(error => {
            console.error('Error loading wallpaper:', error);
            document.querySelector('.single-wallpaper-page').innerHTML = `
                <div class="container">
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Failed to load wallpaper</h3>
                        <p>Please try refreshing the page</p>
                        <a href="forests.html" class="btn">Back to forests Wallpapers</a>
                    </div>
                </div>
            `;
        });
    
    function renderTags(tags) {
        const tagsList = document.getElementById('tags-list');
        tagsList.innerHTML = '';
        
        tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = `forests.html`;
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsList.appendChild(tagElement);
        });
    }
    
    function renderRelatedWallpapers(wallpapers) {
        const relatedGrid = document.getElementById('related-grid');
        relatedGrid.innerHTML = '';
        
        if (wallpapers.length === 0) {
            relatedGrid.innerHTML = '<p>No related wallpapers found.</p>';
            return;
        }
        
        wallpapers.forEach((wallpaper, index) => {
            const relatedItem = document.createElement('a');
            relatedItem.className = 'related-item';
            relatedItem.href = `single.html?id=${wallpaper.id}`;
            relatedItem.style.animationDelay = `${index * 0.1}s`;
            
            const img = document.createElement('img');
            img.src = wallpaper.image;
            img.alt = wallpaper.title;
            img.loading = "lazy";
            
            const overlay = document.createElement('div');
            overlay.className = 'related-overlay';
            
            const title = document.createElement('h4');
            title.textContent = wallpaper.title;
            
            overlay.appendChild(title);
            relatedItem.appendChild(img);
            relatedItem.appendChild(overlay);
            relatedGrid.appendChild(relatedItem);
        });
    }
    
    function setupEventListeners(wallpaper) {
        // Free download button
        const freeDownloadBtn = document.getElementById('free-download-btn');
        freeDownloadBtn.addEventListener('click', function() {
            showAdPopup(wallpaper);
        });
        
        // Premium download button
        document.getElementById('premium-download-btn').addEventListener('click', function() {
            window.open('https://www.pixelwave.com/premium', '_blank');
        });
        
        // Copy prompt button
        document.getElementById('copy-prompt-btn').addEventListener('click', function() {
            const promptText = document.getElementById('wallpaper-prompt').textContent;
            navigator.clipboard.writeText(promptText).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
        
        // Copy link button
        document.getElementById('copy-link-btn').addEventListener('click', function() {
            const shareLink = document.getElementById('share-link');
            shareLink.select();
            navigator.clipboard.writeText(shareLink.value).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
        
        // Share button
        document.getElementById('share-btn').addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: `${wallpaper.title} - PixelWave Wallpapers`,
                    text: `Check out this amazing ${wallpaper.type} wallpaper`,
                    url: window.location.href
                }).catch(err => {
                    console.log('Error sharing:', err);
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                document.querySelector('.share-section').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
        
        // Social share buttons
        const shareUrl = encodeURIComponent(window.location.href);
        const shareTitle = encodeURIComponent(`${wallpaper.title} - PixelWave Wallpapers`);
        const shareImage = encodeURIComponent(wallpaper.image);
        
        document.querySelector('.facebook').href = 
            `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        document.querySelector('.twitter').href = 
            `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        document.querySelector('.pinterest').href = 
            `https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${shareImage}&description=${shareTitle}`;
        document.querySelector('.whatsapp').href = 
            `https://wa.me/?text=${shareTitle}%20${shareUrl}`;
        document.querySelector('.reddit').href = 
            `https://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`;
        
        // Donate button
        document.getElementById('donate-btn').addEventListener('click', function() {
            window.open('https://www.buymeacoffee.com', '_blank');
        });
        
        // Follow button
        document.getElementById('follow-btn').addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i> Following';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> Follow';
            }, 3000);
        });
        
        // Zoom controls
        let scale = 1;
        const preview = document.getElementById('wallpaper-preview');
        
        document.getElementById('zoom-in').addEventListener('click', function() {
            scale += 0.1;
            preview.style.transform = `scale(${scale})`;
        });
        
        document.getElementById('zoom-out').addEventListener('click', function() {
            if (scale > 0.5) {
                scale -= 0.1;
                preview.style.transform = `scale(${scale})`;
            }
        });
        
        document.getElementById('reset-zoom').addEventListener('click', function() {
            scale = 1;
            preview.style.transform = `scale(${scale})`;
        });
        
        // Fullscreen preview
        document.getElementById('fullscreen-btn').addEventListener('click', function() {
            document.getElementById('fullscreen-preview').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('exit-fullscreen').addEventListener('click', function() {
            document.getElementById('fullscreen-preview').classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    function showAdPopup(wallpaper) {
        const popup = document.getElementById('ad-popup');
        const countdownTimer = document.getElementById('countdown-timer');
        const downloadNowBtn = document.getElementById('download-now-btn');
        const closePopup = document.getElementById('close-popup');
        const freeDownloadBtn = document.getElementById('free-download-btn');
        
        // Disable and style the free download button
        freeDownloadBtn.disabled = true;
        freeDownloadBtn.classList.add('download-disabled', 'download-progress');
        freeDownloadBtn.innerHTML = `<i class="fas fa-download"></i> Preparing Download <span class="download-countdown">5</span>`;
        
        // Show popup
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Initially disable the download button
        downloadNowBtn.disabled = true;
        downloadNowBtn.classList.add('download-disabled');
        
        // Simulate ad loading
        document.getElementById('ad-container').innerHTML = `
            <div class="ad-content">
                <div class="ad-loader">
                    <div class="loader"></div>
                    <p>Loading ad...</p>
                </div>
            </div>
        `;
        
        // Simulate ad loaded after 1 second
        setTimeout(() => {
            document.getElementById('ad-container').innerHTML = `
                <div class="ad-content">
                    <h4>Advertisement</h4>
                    <p>Thanks for supporting our free wallpaper service!</p>
                    <div class="ad-placeholder-image">
                        <i class="fas fa-ad"></i>
                    </div>
                    <p class="small-text">Advertisement will play here</p>
                </div>
            `;
        }, 1000);
        
        // Start countdown for button
        let seconds = 5;
        const countdownElement = freeDownloadBtn.querySelector('.download-countdown');
        countdownElement.textContent = seconds;
        
        const buttonTimer = setInterval(() => {
            seconds--;
            countdownElement.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(buttonTimer);
                // Enable and style the free download button
                freeDownloadBtn.disabled = false;
                freeDownloadBtn.classList.remove('download-disabled', 'download-progress');
                freeDownloadBtn.classList.add('download-pulsing');
                freeDownloadBtn.innerHTML = `<i class="fas fa-download"></i> Download Now!`;
            }
        }, 1000);
        
        // Start popup countdown
        let popupSeconds = 5;
        countdownTimer.textContent = popupSeconds;
        
        const popupTimer = setInterval(() => {
            popupSeconds--;
            countdownTimer.textContent = popupSeconds;
            
            if (popupSeconds <= 0) {
                clearInterval(popupTimer);
                // Enable the download button after 5 seconds
                downloadNowBtn.disabled = false;
                downloadNowBtn.classList.remove('download-disabled');
                downloadNowBtn.classList.add('download-pulsing');
                countdownTimer.textContent = 'Ready!';
            }
        }, 1000);
        
        // Download now button
        downloadNowBtn.addEventListener('click', function() {
            if (this.disabled) return; // Prevent action if button is disabled
            
            // Redirect to Adsera link first
            window.open(wallpaper.adseraLink, '_blank');
            
            // Then start the download
            const link = document.createElement('a');
            link.href = wallpaper.downloadLink;
            link.download = `${wallpaper.title.replace(/\s+/g, '_')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Close popup
            closeAdPopup();
            
            // Track download (in a real app, you would send this to your analytics)
            console.log(`Downloaded: ${wallpaper.title}`);
        });
        
        // Close popup button
        closePopup.addEventListener('click', closeAdPopup);
        
        // Close popup when clicking outside
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closeAdPopup();
            }
        });
        
        function closeAdPopup() {
            popup.classList.remove('active');
            document.body.style.overflow = '';
            clearInterval(buttonTimer);
            clearInterval(popupTimer);
            
            // Reset free download button
            freeDownloadBtn.disabled = false;
            freeDownloadBtn.classList.remove('download-disabled', 'download-progress', 'download-pulsing');
            freeDownloadBtn.innerHTML = `<i class="fas fa-download"></i> Free Download`;
        }
    }
});

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}