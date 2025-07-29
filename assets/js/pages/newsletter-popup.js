// Add this script to trigger the popup when scrolling
document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.querySelector('.welcome-popup-overlay');
  const popup = document.querySelector('.welcome-popup');
  const closeBtn = document.querySelector('.close-popup');
  
  // Show popup after scrolling 50% of page height
  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.5) {
      if(!sessionStorage.getItem('popupShown')) {
        popupOverlay.classList.add('active');
        popup.classList.add('active');
        sessionStorage.setItem('popupShown', 'true');
      }
    }
  });
  
  // Close popup
  closeBtn.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
    popup.classList.remove('active');
  });
  
  // Close when clicking outside
  popupOverlay.addEventListener('click', function(e) {
    if(e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});