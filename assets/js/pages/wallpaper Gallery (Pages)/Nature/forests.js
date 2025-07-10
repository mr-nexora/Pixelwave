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
                    url: 'https://plus.unsplash.com/premium_photo-1669472897414-098c530ffb64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['nature', 'forest']
                },
                { 
                    id: 2, 
                    url: 'https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['ocean', 'water']
                },
                { 
                    id: 3, 
                    url: 'https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['tropical', 'sunset']
                },
                { 
                    id: 4, 
                    url: 'https://images.unsplash.com/photo-1633770420143-a94c96c46376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDF8MHx8fDA%3D', 
                    aspect: '9/16',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 5, 
                    url: 'https://images.unsplash.com/photo-1597551681492-10c86e481548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['city', 'night']
                },
                { 
                    id: 6, 
                    url: 'https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['nature', 'water']
                },
                { 
                    id: 7, 
                    url: 'https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['forest', 'sky']
                },
                
                // 1:1 Square Images
                { 
                    id: 8, 
                    url: 'https://images.unsplash.com/photo-1580636887279-02d758189fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['nature', 'forest']
                },
                { 
                    id: 9, 
                    url: 'https://plus.unsplash.com/premium_photo-1705335058710-281b2a47fcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['ocean', 'water']
                },
                { 
                    id: 10, 
                    url: 'https://images.unsplash.com/photo-1598621201048-5c1bc5cf3077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['tropical', 'sunset']
                },
                { 
                    id: 11, 
                    url: 'https://images.unsplash.com/photo-1699435516531-89fa50177726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 12, 
                    url: 'https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['city', 'night']
                },
                { 
                    id: 13, 
                    url: 'https://images.unsplash.com/photo-1586946935456-fca2498cc208?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['nature', 'water']
                },
                { 
                    id: 14, 
                    url: 'https://images.unsplash.com/photo-1699435516314-2688141d28e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['forest', 'sky']
                },
                
                // 16:9 Landscape Images
                { 
                    id: 15, 
                    url: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['nature', 'forest']
                },
                { 
                    id: 16, 
                    url: 'https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['ocean', 'water']
                },
                { 
                    id: 17, 
                    url: 'https://images.unsplash.com/photo-1566423471547-2a37c9a39899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['tropical', 'sunset']
                },
                { 
                    id: 18, 
                    url: 'https://images.unsplash.com/photo-1622017634176-8da750043c54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 19, 
                    url: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['city', 'night']
                },
                { 
                    id: 20, 
                    url: 'https://plus.unsplash.com/premium_photo-1674929041956-f9fbbbdcc227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['nature', 'water']
                },
                { 
                    id: 21, 
                    url: 'https://images.unsplash.com/photo-1685926942337-aff9f087a8b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['forest', 'sky']
                },
                
                // Additional images to reach 40 for pagination demo
                { 
                    id: 22, 
                    url: 'https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['tropical', 'sunset']
                },
                { 
                    id: 23, 
                    url: 'https://images.unsplash.com/photo-1580636887279-02d758189fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['nature', 'forest']
                },
                { 
                    id: 24, 
                    url: 'https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['ocean', 'water']
                },
                { 
                    id: 25, 
                    url: 'https://plus.unsplash.com/premium_photo-1669472897414-098c530ffb64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['nature', 'forest']
                },
                { 
                    id: 26, 
                    url: 'https://plus.unsplash.com/premium_photo-1705335058710-281b2a47fcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['ocean', 'water']
                },
                { 
                    id: 27, 
                    url: 'https://images.unsplash.com/photo-1566423471547-2a37c9a39899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['tropical', 'sunset']
                },
                { 
                    id: 28, 
                    url: 'https://images.unsplash.com/photo-1633770420143-a94c96c46376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDF8MHx8fDA%3D', 
                    aspect: '9/16',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 29, 
                    url: 'https://images.unsplash.com/photo-1699435516531-89fa50177726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 30, 
                    url: 'https://images.unsplash.com/photo-1622017634176-8da750043c54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['mountain', 'sky']
                },
                { 
                    id: 31, 
                    url: 'https://images.unsplash.com/photo-1597551681492-10c86e481548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['city', 'night']
                },
                { 
                    id: 32, 
                    url: 'https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['city', 'night']
                },
                { 
                    id: 33, 
                    url: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['city', 'night']
                },
                { 
                    id: 34, 
                    url: 'https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['nature', 'water']
                },
                { 
                    id: 35, 
                    url: 'https://images.unsplash.com/photo-1586946935456-fca2498cc208?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['nature', 'water']
                },
                { 
                    id: 36, 
                    url: 'https://plus.unsplash.com/premium_photo-1674929041956-f9fbbbdcc227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D', 
                    aspect: '16/9',
                    tags: ['nature', 'water']
                },
                { 
                    id: 37, 
                    url: 'https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D', 
                    aspect: '9/16',
                    tags: ['forest', 'sky']
                },
                { 
                    id: 38, 
                    url: 'https://images.unsplash.com/photo-1699435516314-2688141d28e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D', 
                    aspect: '1/1',
                    tags: ['forest', 'sky']
                },
                { 
                    id: 39, 
                    url: 'https://images.unsplash.com/photo-1685926942337-aff9f087a8b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D', 
                    aspect: '16/9',
                    tags: ['forest', 'sky']
                },
                { 
                    id: 40, 
                    url: 'https://images.unsplash.com/photo-1598621201048-5c1bc5cf3077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D', 
                    aspect: '1/1',
                    tags: ['tropical', 'sunset']
                }
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

            // Render gallery items
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
                    
                    item.innerHTML = `
                        <img src="${image.url}" alt="Anime Image ${image.id}" loading="lazy">
                        <button class="download-btn-gallery" onclick="window.location.href='download.html?id=${image.id}'">
                            <i class="fas fa-download"></i> Download
                        </button>
                    `;
                    
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
                const tags = document.querySelectorAll('.tag');
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
