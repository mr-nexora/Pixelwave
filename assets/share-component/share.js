// Common share functionality
function initShareComponent(config) {
    // Create share component HTML
    const shareHTML = `
        <div class="share-header">
            <h2>Share This Wallpaper</h2>
            <p>Help others discover this amazing image</p>
        </div>
        
        <div class="share-preview">
            <img src="${config.imageUrl}" alt="Wallpaper Preview" class="share-preview-image">
            <div class="share-preview-text">
                <h4>${config.title.split('|')[0].trim()}</h4>
                <p>${config.resolution} | Free Download</p>
            </div>
        </div>
        
        <div class="share-options">
            <div class="share-btn whatsapp" data-platform="whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
            </div>
            <div class="share-btn instagram" data-platform="instagram">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
            </div>
            <div class="share-btn twitter" data-platform="twitter">
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
            </div>
            <div class="share-btn pinterest" data-platform="pinterest">
                <i class="fab fa-pinterest"></i>
                <span>Pinterest</span>
            </div>
            <div class="share-btn telegram" data-platform="telegram">
                <i class="fab fa-telegram"></i>
                <span>Telegram</span>
            </div>
            <div class="share-btn facebook" data-platform="facebook">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </div>
            <div class="share-btn reddit" data-platform="reddit">
                <i class="fab fa-reddit-alien"></i>
                <span>Reddit</span>
            </div>
        </div>
        
        <div class="link-copy-container">
            <div class="link-copy-label">
                <i class="fas fa-link"></i>
                <span>Or copy the direct link</span>
            </div>
            <div class="link-copy">
                <input type="text" class="link-input" value="${config.pageUrl}" readonly>
                <button class="copy-btn">
                    <i class="fas fa-copy"></i>
                    <span>Copy</span>
                </button>
            </div>
        </div>
        
        <div class="share-tags">
            <div class="tag primary">#pixelwave</div>
            <div class="tag primary">#sunexora</div>
            <div class="tag">#wallpaper</div>
            <div class="tag">${config.tags.split(' ')[3]}</div>
            <div class="tag">#photography</div>
        </div>
    `;
    
    // Insert into the share component container
    document.getElementById('share-component').innerHTML = shareHTML;
    
    // Add event listeners
    setupShareFunctionality(config);
}

function setupShareFunctionality(config) {
    const shareBtns = document.querySelectorAll('.share-btn');
    const copyBtn = document.querySelector('.copy-btn');
    const linkInput = document.querySelector('.link-input');
    const toast = document.querySelector('.toast');
    
    // Social media share functions
    function shareOnPlatform(platform) {
        let shareUrl = '';
        const fullText = `${config.title}\n\n${config.caption}\n\n${config.pageUrl}\n\n${config.tags}`;
        
        switch(platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
                break;
            case 'instagram':
                shareUrl = 'https://www.instagram.com/';
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(config.title)}&url=${encodeURIComponent(config.pageUrl)}&hashtags=pixelwave,sunexora,wallpaper`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(config.pageUrl)}&media=${encodeURIComponent(config.imageUrl)}&description=${encodeURIComponent(config.caption + ' ' + config.tags)}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${encodeURIComponent(config.pageUrl)}&text=${encodeURIComponent(config.title + '\n\n' + config.caption + '\n\n' + config.tags)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.pageUrl)}&quote=${encodeURIComponent(config.caption)}&picture=${encodeURIComponent(config.imageUrl)}`;
                break;
            case 'reddit':
                shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(config.pageUrl)}&title=${encodeURIComponent(config.title + ' - ' + config.caption)}`;
                break;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=600');
    }
    
    // Add click events to share buttons
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            shareOnPlatform(platform);
        });
    });
    
    // Copy link functionality
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            linkInput.select();
            document.execCommand('copy');
            
            // Show toast notification
            toast.querySelector('span').textContent = 'Link copied to clipboard!';
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        });
    }
    
    // Add click to copy for tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                toast.querySelector('span').textContent = `Copied ${text}`;
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 1500);
            });
        });
    });
}