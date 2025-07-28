/**
 * Smooth Scroll Utility
 * Provides smooth scrolling for anchor links and scroll-to-top functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize smooth scroll for anchor links
  initSmoothScroll();
  
  // Add smooth scroll to top functionality
  initScrollToTop();
});

/**
 * Initialize smooth scrolling for all anchor links
 */
function initSmoothScroll() {
  // Select all anchor links with href starting with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Skip if it's a # link with no target
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate offset based on header height
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        smoothScrollTo(targetPosition, 800);
      }
    });
  });
}

/**
 * Initialize scroll to top button functionality
 */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('backToTop');
  
  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo(0, 800);
    });
  }
}

/**
 * Smooth scroll to a specific position
 * @param {number} targetPosition - The position to scroll to
 * @param {number} duration - Duration of the scroll animation in ms
 */
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Easing function for smooth acceleration/deceleration
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
}

// Make functions available globally if needed
window.smoothScrollTo = smoothScrollTo;
window.initSmoothScroll = initSmoothScroll;