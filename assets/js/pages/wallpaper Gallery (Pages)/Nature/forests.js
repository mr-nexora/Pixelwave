        document.addEventListener('DOMContentLoaded', function() {
            // Collapsible Filter Categories
              const categoryHeaders = document.querySelectorAll('.category-header');
              categoryHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
            header.classList.toggle('active');
            content.classList.toggle('active');
            });
        });
            // Image Data
            const images = [
                // 9:16 Portrait Images
                { 
                    id: 1, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/1.jpg?updatedAt=1752388574252', 
                    aspect: '9/16',
                    tags: ['nature', 'forest'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/1.html',
                    size: '1920x1080'
                },
                { 
                    id: 2, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/2.jpg?updatedAt=1752388574159', 
                    aspect: '9/16',
                    tags: ['ocean', 'water'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/2.html',
                    size: '1920x1080'
                },
                { 
                    id: 3, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/3.jpg?updatedAt=1752388574211', 
                    aspect: '9/16',
                    tags: ['tropical', 'sunset'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/3.html',
                    size: '1920x1080'
                },
                { 
                    id: 4, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/4.jpg?updatedAt=1752388574176', 
                    aspect: '9/16',
                    tags: ['mountain', 'sky'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/4.html',
                    size: '1920x1080'
                },
                { 
                    id: 5, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/5.jpg?updatedAt=1752388574209', 
                    aspect: '9/16',
                    tags: ['city', 'night'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/5.html',
                    size: '1920x1080'
                },
                { 
                    id: 6, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/6.jpg?updatedAt=1752388574191', 
                    aspect: '9/16',
                    tags: ['nature', 'water'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/6.html',
                    size: '1920x1080'
                },
                { 
                    id: 7, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/7.jpg?updatedAt=1752388574172', 
                    aspect: '9/16',
                    tags: ['forest', 'sky'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/7.html',
                    size: '1920x1080'
                },
                
                // 1:1 Square Images
                { 
                    id: 8, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/8.jpg?updatedAt=1752388574182', 
                    aspect: '9/16',
                    tags: ['nature', 'forest'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/8.html',
                    size: '1920x1080'
                },
                { 
                    id: 9, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/9.jpg?updatedAt=1752388574164', 
                    aspect: '9/16',
                    tags: ['ocean', 'water'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/9.html',
                    size: '1920x1080'
                },
                { 
                    id: 10, 
                    url: 'https://ik.imagekit.io/pixelwave/Nature/1.1/10.jpg?updatedAt=1752388574215', 
                    aspect: '9/16',
                    tags: ['tropical', 'sunset'],
                    viewLink: '../../../../../pages/wallpapers/Nature/Forests/10.html',
                    size: '1920x1080'
                },
            ];

            // Pagination variables
    const itemsPerPage = 20;
    let currentPage = 1;
    let filteredImages = [...images];
    let activeTags = [];

    // Initialize gallery
    function initGallery() {
        renderGallery();
        setupPagination();
        setupEventListeners();
    }

    // Render gallery items with all required information and download links
    function renderGallery(page = 1) {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '';
        
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const imagesToShow = filteredImages.slice(startIndex, endIndex);
        
        imagesToShow.forEach(image => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.setProperty('--aspect-ratio', image.aspect);
            item.dataset.id = image.id;
            item.dataset.tags = image.tags.join(',');
            
            // Create image container
            const imgContainer = document.createElement('div');
            imgContainer.className = 'image-container';
            
            // Create image element
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = `Image ${image.id}`;
            imgElement.loading = 'lazy';
            
            // Create info overlay
            const infoOverlay = document.createElement('div');
            infoOverlay.className = 'info-overlay';
            
            // Create view link
            const viewLink = document.createElement('a');
            viewLink.href = image.viewLink;
            viewLink.className = 'view-link';
            viewLink.innerHTML = '<i class="fas fa-eye"></i> View';
            viewLink.target = '_blank';
            
            // Create size info
            const sizeInfo = document.createElement('span');
            sizeInfo.className = 'size-info';
            sizeInfo.textContent = image.size;
            
            // Create tags container
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags-container';
            image.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'image-tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            
            // Create download button
            const downloadBtn = document.createElement('a');
            downloadBtn.href = `download-${image.id}.html`;
            downloadBtn.className = 'download-btn-gallery';
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
            
            // Assemble the elements
            infoOverlay.appendChild(viewLink);
            infoOverlay.appendChild(sizeInfo);
            infoOverlay.appendChild(tagsContainer);
            
            imgContainer.appendChild(imgElement);
            imgContainer.appendChild(infoOverlay);
            
            item.appendChild(imgContainer);
            item.appendChild(downloadBtn);
            
            gallery.appendChild(item);
        });
        
        // Update pagination buttons
        updatePaginationButtons();
    }

    // Setup pagination
    function setupPagination() {
        const pagination = document.getElementById('pagination');
        const pageCount = Math.ceil(filteredImages.length / itemsPerPage);
        
        pagination.innerHTML = '';
        
        if (pageCount <= 1) return;
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGallery(currentPage);
            }
        });
        pagination.appendChild(prevBtn);
        
        // Page buttons
        for (let i = 1; i <= pageCount; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderGallery(currentPage);
            });
            pagination.appendChild(pageBtn);
        }
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => {
            if (currentPage < pageCount) {
                currentPage++;
                renderGallery(currentPage);
            }
        });
        pagination.appendChild(nextBtn);
    }

    // Update pagination buttons
    function updatePaginationButtons() {
        const pageCount = Math.ceil(filteredImages.length / itemsPerPage);
        const pageButtons = document.querySelectorAll('.page-btn:not(:first-child):not(:last-child)');
        
        pageButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index + 1 === currentPage);
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Tag filtering
        const tags = document.querySelectorAll('.tag-gallery');
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
                const tagValue = tag.dataset.tag;
                
                if (tag.classList.contains('active')) {
                    if (!activeTags.includes(tagValue)) {
                        activeTags.push(tagValue);
                    }
                } else {
                    activeTags = activeTags.filter(t => t !== tagValue);
                }
                
                filterImages();
            });
        });
        
        // Apply filters button
        document.querySelector('.apply-filters').addEventListener('click', () => {
            filterImages();
        });
        
        // Reset filters button
        document.querySelector('.reset-filters').addEventListener('click', () => {
            // Reset checkboxes
            document.querySelectorAll('.filter-option input').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Reset tags
            tags.forEach(tag => {
                tag.classList.remove('active');
            });
            
            activeTags = [];
            filteredImages = [...images];
            currentPage = 1;
            renderGallery(currentPage);
            setupPagination();
        });
        
        // Load more button
        document.getElementById('loadMore').addEventListener('click', () => {
            const loading = document.getElementById('loading');
            const loadBtn = document.getElementById('loadMore');
            
            loading.style.display = 'block';
            loadBtn.style.display = 'none';
            
            setTimeout(() => {
                currentPage++;
                renderGallery(currentPage);
                loading.style.display = 'none';
                
                // Hide load more button if we've reached the end
                if (currentPage * itemsPerPage >= filteredImages.length) {
                    loadBtn.style.display = 'none';
                } else {
                    loadBtn.style.display = 'inline-block';
                }
            }, 1000);
        });
    }

    // Filter images based on active tags and filters
    function filterImages() {
        // Get selected filters
        const selectedFilters = {
            date: Array.from(document.querySelectorAll('input[name="date"]:checked')).map(el => el.value),
            style: Array.from(document.querySelectorAll('input[name="style"]:checked')).map(el => el.value),
            color: Array.from(document.querySelectorAll('input[name="color"]:checked')).map(el => el.value),
            orientation: Array.from(document.querySelectorAll('input[name="orientation"]:checked')).map(el => el.value)
        };
        
        filteredImages = images.filter(image => {
            // Filter by tags
            if (activeTags.length > 0) {
                const hasAllTags = activeTags.every(tag => image.tags.includes(tag));
                if (!hasAllTags) return false;
            }
            
            // Filter by orientation (simplified for demo)
            if (selectedFilters.orientation.length > 0) {
                const imageOrientation = image.aspect === '9/16' ? 'portrait' : 
                                      image.aspect === '16/9' ? 'landscape' : 'square';
                if (!selectedFilters.orientation.includes(imageOrientation)) return false;
            }
            
            // Additional filters could be added here
            
            return true;
        });
        
        currentPage = 1;
        renderGallery(currentPage);
        setupPagination();
        
        // Show/hide load more button
        const loadBtn = document.getElementById('loadMore');
        loadBtn.style.display = filteredImages.length > itemsPerPage ? 'inline-block' : 'none';
    }

    // Initialize the gallery
    initGallery();
});