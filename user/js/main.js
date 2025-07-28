document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
        
    // Get current page type from URL
    const pageType = window.location.pathname.split('/').pop().split('.')[0] || 'nature';
    
    // Fetch wallpapers data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const allWallpapers = data.wallpapers.filter(w => w.type === pageType);
            let currentWallpapers = [...allWallpapers];
            let currentType = 'desktop';
            let currentTag = 'All';
            let currentPage = 1;
            const itemsPerPage = 20;
            
            // DOM elements
            const desktopToggle = document.getElementById('desktop-toggle');
            const mobileToggle = document.getElementById('mobile-toggle');
            const toggleHighlight = document.querySelector('.toggle-highlight');
            const tagsCloud = document.getElementById('tags-cloud');
            const wallpapersGrid = document.getElementById('wallpapers-grid');
            const pagination = document.getElementById('pagination');
            
            // Initialize
            renderTags(allWallpapers);
            renderWallpapers(getPaginatedWallpapers());
            renderPagination();
            
            // Event listeners
            desktopToggle.addEventListener('change', function() {
                if (this.checked) {
                    currentType = 'desktop';
                    toggleHighlight.style.transform = 'translateX(0)';
                    filterWallpapers();
                }
            });
            
            mobileToggle.addEventListener('change', function() {
                if (this.checked) {
                    currentType = 'mobile';
                    toggleHighlight.style.transform = 'translateX(100%)';
                    filterWallpapers();
                }
            });
            
            // Tag filtering
            tagsCloud.addEventListener('click', function(e) {
                if (e.target.classList.contains('tag-btn')) {
                    document.querySelectorAll('.tag-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    currentTag = e.target.textContent;
                    currentPage = 1;
                    filterWallpapers();
                }
            });
            
            // Pagination
            pagination.addEventListener('click', function(e) {
                if (e.target.classList.contains('page-btn')) {
                    const page = e.target.dataset.page;
                    
                    if (page === 'prev' && currentPage > 1) {
                        currentPage--;
                    } else if (page === 'next' && currentPage < Math.ceil(currentWallpapers.length / itemsPerPage)) {
                        currentPage++;
                    } else if (!isNaN(page)) {
                        currentPage = parseInt(page);
                    }
                    
                    renderWallpapers(getPaginatedWallpapers());
                    renderPagination();
                    window.scrollTo({
                        top: wallpapersGrid.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
            
            // Helper functions
            function filterWallpapers() {
                // First filter by device type
                let filteredByDevice = allWallpapers.filter(wallpaper => {
                    // Check if deviceType property exists
                    if (wallpaper.deviceType) {
                        return wallpaper.deviceType === currentType;
                    }
                    // Fallback: determine by resolution if deviceType not specified
                    const [width, height] = wallpaper.resolution.split('x').map(Number);
                    return currentType === 'desktop' ? width > height : width < height;
                });
                
                // Then filter by tag if not 'All'
                currentWallpapers = currentTag === 'All' ? 
                    filteredByDevice : 
                    filteredByDevice.filter(w => w.tags.includes(currentTag));
                
                currentPage = 1;
                renderWallpapers(getPaginatedWallpapers());
                renderPagination();
            }
            
            function getPaginatedWallpapers() {
                const start = (currentPage - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                return currentWallpapers.slice(start, end);
            }
            
            function renderTags(wallpapers) {
                // Get all unique tags from all wallpapers (not just current filtered ones)
                const allTags = [...new Set(allWallpapers.flatMap(w => w.tags))];
                
                // Sort by popularity (simple sort for demo)
                allTags.sort();
                
                // Render tags
                tagsCloud.innerHTML = '';
                
                // Add 'All' tag
                const allTag = document.createElement('button');
                allTag.className = 'tag-btn active';
                allTag.textContent = 'All';
                tagsCloud.appendChild(allTag);
                
                // Add other tags with random sizes for cloud effect
                allTags.forEach(tag => {
                    const tagBtn = document.createElement('button');
                    tagBtn.className = 'tag-btn';
                    tagBtn.textContent = tag;
                    
                    // Random size for cloud effect
                    const size = Math.floor(Math.random() * 4) + 1;
                    tagBtn.style.fontSize = `${0.8 + (size * 0.2)}rem`;
                    tagBtn.style.opacity = `${0.7 + (size * 0.1)}`;
                    
                    tagsCloud.appendChild(tagBtn);
                });
            }
            
            function renderWallpapers(wallpapers) {
                wallpapersGrid.innerHTML = '';
                
                if (wallpapers.length === 0) {
                    wallpapersGrid.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-image"></i>
                            <h3>No wallpapers found</h3>
                            <p>Try selecting different tags or device type</p>
                        </div>
                    `;
                    return;
                }
                
                wallpapers.forEach((wallpaper, index) => {
                    const wallpaperItem = document.createElement('div');
                    wallpaperItem.className = 'wallpaper-item';
                    wallpaperItem.style.animationDelay = `${index * 0.05}s`;
                    
                    // Use appropriate image based on current device type
                    const imgSrc = currentType === 'desktop' ? wallpaper.image : wallpaper.mobileImage;
                    
                    const img = document.createElement('img');
                    img.className = 'wallpaper-img';
                    img.src = imgSrc;
                    img.alt = wallpaper.title;
                    img.loading = "lazy";
                    
                    const overlay = document.createElement('div');
                    overlay.className = 'wallpaper-overlay';
                    
                    const content = document.createElement('div');
                    content.className = 'wallpaper-content';
                    
                    const title = document.createElement('h3');
                    title.className = 'wallpaper-title';
                    title.textContent = wallpaper.title;
                    
                    const meta = document.createElement('div');
                    meta.className = 'wallpaper-meta';
                    meta.innerHTML = `
                        <span><i class="fas fa-expand"></i> ${wallpaper.resolution}</span>
                        <span><i class="fas fa-download"></i> ${wallpaper.downloads.toLocaleString()}</span>
                        <span><i class="fas fa-${wallpaper.deviceType === 'mobile' ? 'mobile-alt' : 'desktop'}"></i> ${wallpaper.deviceType || (currentType === 'desktop' ? 'Desktop' : 'Mobile')}</span>
                    `;
                    
                    const downloadBtn = document.createElement('button');
                    downloadBtn.className = 'download-btn';
                    downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
                    downloadBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.location.href = `single.html?id=${wallpaper.id}`;
                    });
                    
                    content.appendChild(title);
                    content.appendChild(meta);
                    overlay.appendChild(content);
                    wallpaperItem.appendChild(img);
                    wallpaperItem.appendChild(overlay);
                    wallpaperItem.appendChild(downloadBtn);
                    
                    wallpaperItem.addEventListener('click', () => {
                        window.location.href = `single.html?id=${wallpaper.id}`;
                    });
                    
                    wallpapersGrid.appendChild(wallpaperItem);
                });
            }
            
            function renderPagination() {
                const totalPages = Math.ceil(currentWallpapers.length / itemsPerPage);
                
                if (totalPages <= 1) {
                    pagination.innerHTML = '';
                    return;
                }
                
                let html = '';
                
                // Previous button
                html += `
                    <button class="page-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                `;
                
                // Page numbers
                const maxVisiblePages = 5;
                let startPage, endPage;
                
                if (totalPages <= maxVisiblePages) {
                    startPage = 1;
                    endPage = totalPages;
                } else {
                    const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
                    const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
                    
                    if (currentPage <= maxPagesBeforeCurrent) {
                        startPage = 1;
                        endPage = maxVisiblePages;
                    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
                        startPage = totalPages - maxVisiblePages + 1;
                        endPage = totalPages;
                    } else {
                        startPage = currentPage - maxPagesBeforeCurrent;
                        endPage = currentPage + maxPagesAfterCurrent;
                    }
                }
                
                // First page with ellipsis if needed
                if (startPage > 1) {
                    html += `
                        <button class="page-btn" data-page="1">1</button>
                        ${startPage > 2 ? '<span class="ellipsis">...</span>' : ''}
                    `;
                }
                
                // Page range
                for (let i = startPage; i <= endPage; i++) {
                    html += `
                        <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                            ${i}
                        </button>
                    `;
                }
                
                // Last page with ellipsis if needed
                if (endPage < totalPages) {
                    html += `
                        ${endPage < totalPages - 1 ? '<span class="ellipsis">...</span>' : ''}
                        <button class="page-btn" data-page="${totalPages}">${totalPages}</button>
                    `;
                }
                
                // Next button
                html += `
                    <button class="page-btn" data-page="next" ${currentPage === totalPages ? 'disabled' : ''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                `;
                
                pagination.innerHTML = html;
            }
        })
        .catch(error => {
            console.error('Error loading wallpapers:', error);
            document.getElementById('wallpapers-grid').innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Failed to load wallpapers</h3>
                    <p>Please try refreshing the page</p>
                </div>
            `;
        });
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