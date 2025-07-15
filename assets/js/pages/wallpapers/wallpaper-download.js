

// Track if this is first click
        let isFirstClick = true;
        



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

    // Toggle FAQ
        function toggleFaq(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
        }