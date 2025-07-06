        // Track if this is first click
        let isFirstClick = true;
        
        // Free Download Button
        document.getElementById('freeDownload').addEventListener('click', function() {
            if (isFirstClick) {
                // Show ad popup for first click
                const popup = document.getElementById('adPopup');
                popup.style.display = 'block';
                
                // Start countdown
                let seconds = 3;
                const countdown = document.getElementById('countdown');
                const loadingBar = document.getElementById('loadingBar');
                
                loadingBar.style.width = '100%';
                
                const timer = setInterval(() => {
                    seconds--;
                    countdown.textContent = `Download starts in ${seconds} second${seconds !== 1 ? 's' : ''}...`;
                    
                    if (seconds <= 0) {
                        clearInterval(timer);
                        popup.style.display = 'none';
                        startDownload();
                        isFirstClick = false; // Next clicks will skip ad
                    }
                }, 1000);
            } else {
                // Subsequent clicks go straight to download
                startDownload();
            }
        });
        
        // Start download function
        function startDownload() {
            window.location.href = 'https://drive.google.com/uc?export=download&id=1kziIVSA94fNBEirgBzcDzigQIHr7ii7d';
        }
        
        // Prompt section click for Adsera ad
        document.getElementById('promptSection').addEventListener('click', function(e) {
            if (!e.target.closest('#promptText')) {
                window.open('https://www.profitableratecpm.com/i35gc0ehr?key=6cac7bbf1e040ae606c1cc644319c6ca', '_blank');
            }
        });
        
        // Copy prompt text
        document.getElementById('promptText').addEventListener('click', function() {
            const prompt = this.textContent;
            navigator.clipboard.writeText(prompt).then(() => {
                alert('Prompt copied to clipboard!');
            });
        });
        
        // Share functionality
        function shareWallpaper(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Check out this amazing Cyberpunk Neon City wallpaper from YourBrand!');
            let shareUrl = '';
            
            switch(platform) {
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${text}%20${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'reddit':
                    shareUrl = `https://www.reddit.com/submit?url=${url}&title=${text}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
                    break;
                case 'instagram':
                default:
                    shareUrl = 'https://instagram.com';
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
        
        // Copy share link
        function copyShareLink() {
            const shareLink = document.getElementById('share-link').textContent;
            navigator.clipboard.writeText(shareLink).then(() => {
                const tooltip = document.querySelector('.tooltip .tooltiptext');
                tooltip.textContent = 'Copied!';
                setTimeout(() => {
                    tooltip.textContent = 'Copy to clipboard';
                }, 2000);
            });
        }
        
        // Toggle FAQ
        function toggleFaq(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
        }
