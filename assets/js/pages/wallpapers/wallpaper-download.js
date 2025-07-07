        // Track if this is first click
        let isFirstClick = true;
        
        
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


        //wallpaper download button 
        // JavaScript for handling the popup and countdown
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.download-btn');
        const popup = document.getElementById('popup');
        const adFrame = document.getElementById('adFrame');
        const countdownElement = document.getElementById('countdown');
        const countdownText = document.getElementById('countdownText');
        const downloadButton = document.getElementById('downloadButton');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const adLink = button.getAttribute('data-adlink');
                const imgLink = button.getAttribute('data-imglink');

                // Show the popup
                popup.style.display = 'block';

                // Set the ad link to the iframe
                adFrame.src = adLink;

                // Start countdown
                let countdown = 4;
                countdownElement.textContent = countdown;

                const interval = setInterval(() => {
                    countdown--;
                    countdownElement.textContent = countdown;

                    if (countdown === 0) {
                        clearInterval(interval);

                        // Hide countdown text
                        countdownText.style.display = 'none';

                        // Show download button
                        downloadButton.href = imgLink;
                        downloadButton.download = imgLink.split('/').pop();
                        downloadButton.style.visibility = 'visible';
                    }
                }, 1000);
            });
        });

        // Close the popup
        window.closePopup = function () {
            popup.style.display = 'none';
        };

        // Social media sharing functions (placeholders)
        function shareOnFacebook() {
            alert("Share on Facebook");
        }

        function shareOnPinterest() {
            alert("Share on Pinterest");
        }

        function shareOnTwitter() {
            alert("Share on Twitter");
        }
    });