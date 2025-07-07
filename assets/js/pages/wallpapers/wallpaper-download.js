

// Track if this is first click
        let isFirstClick = true;
        

        
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
                    tooltip.textContent = 'Copy';
                }, 2000);
            });
        }
        
        // Toggle FAQ
        function toggleFaq(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
        }


        //Wallpaper Download Button
        document.addEventListener('DOMContentLoaded', function() {
        const downloadBtn = document.getElementById('downloadBtn');
        const popupOverlay = document.getElementById('popupOverlay');
        const closePopup = document.getElementById('closePopup');
        const countdownCircle = document.getElementById('countdownCircle');
        const countdownContainer = document.getElementById('countdownContainer');
        const downloadReady = document.getElementById('downloadReady');
        const finalDownloadBtn = document.getElementById('finalDownloadBtn');
        const progressBar = document.getElementById('progressBar');
        const adContainer = document.getElementById('adContainer');

        downloadBtn.addEventListener('click', function() {
            const adLink = this.getAttribute('data-adlink');
            const imgLink = this.getAttribute('data-imglink');
            
            // Show popup
            popupOverlay.classList.add('active');
            
            // Load ad (replace with your actual ad code)
            adContainer.innerHTML = `<iframe src="${adLink}" frameborder="0" style="width:100%;height:100%;"></iframe>`;
            
            // Start countdown
            let countdown = 5;
            let progress = 0;
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownCircle.textContent = countdown;
                progress += 20;
                progressBar.style.width = `${progress}%`;
                
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    countdownContainer.style.display = 'none';
                    downloadReady.style.display = 'block';
                    
                    // Set the download link
                    finalDownloadBtn.href = imgLink;
                    finalDownloadBtn.download = `wallpaper-${Date.now()}.jpg`;
                }
            }, 1000);
        });

        closePopup.addEventListener('click', function() {
            popupOverlay.classList.remove('active');
            resetPopup();
        });

        function resetPopup() {
            countdownCircle.textContent = '5';
            countdownContainer.style.display = 'block';
            downloadReady.style.display = 'none';
            progressBar.style.width = '0%';
            adContainer.innerHTML = '<p>Advertisement</p>';
        }
    });