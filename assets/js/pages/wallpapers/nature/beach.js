// Image data with metadata
        const imageData = [
            // 9:16 images
            {
                id: 1,
                src: "https://plus.unsplash.com/premium_photo-1669472897414-098c530ffb64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "../../../index.html",
                viewUrl: "https://unsplash.com/photos/random-beach-1",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "summer"],
                date: "this-month",
                style: ["aesthetic", "realistic"],
                color: ["blue", "multicolor"]
            },
            {
                id: 2,
                src: "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1EeylY-w8VbQ5_M3dLBWT66Rxt-hzW7zC",
                viewUrl: "https://unsplash.com/photos/random-beach-2",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "sunset"],
                date: "last-month",
                style: ["aesthetic", "minimal"],
                color: ["blue", "pastel"]
            },
            {
                id: 3,
                src: "https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1V0zZMn-DYf0f49u-VML4rfPNK_vxvIOB",
                viewUrl: "https://unsplash.com/photos/random-beach-3",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "tropical"],
                date: "last-3-months",
                style: ["realistic"],
                color: ["blue", "green"]
            },
            {
                id: 4,
                src: "https://images.unsplash.com/photo-1633770420143-a94c96c46376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDF8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1FRSiVFv5moaDGgcgGeMNO6Sj10AbMT7q",
                viewUrl: "https://unsplash.com/photos/random-beach-4",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "water"],
                date: "last-month",
                style: ["abstract"],
                color: ["blue", "multicolor"]
            },
            {
                id: 5,
                src: "https://images.unsplash.com/photo-1597551681492-10c86e481548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1YunQpV6tCApROMbDhblOhiYPvI1PRZPN",
                viewUrl: "https://unsplash.com/photos/random-beach-5",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "travel"],
                date: "this-month",
                style: ["realistic"],
                color: ["blue"]
            },
            {
                id: 6,
                src: "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=14vxYTU4LSeYXCWcNBGoHo1AcyehaIkNj",
                viewUrl: "https://unsplash.com/photos/random-beach-6",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "sunset"],
                date: "last-3-months",
                style: ["aesthetic"],
                color: ["pink", "pastel"]
            },
            {
                id: 7,
                src: "https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1VjVxVjbbDEFqO79SMXUGDOc_Mhfm14W2",
                viewUrl: "https://unsplash.com/photos/random-beach-7",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "summer"],
                date: "all-time",
                style: ["vintage"],
                color: ["bw"]
            },
            {
                id: 8,
                src: "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=14vxYTU4LSeYXCWcNBGoHo1AcyehaIkNj",
                viewUrl: "https://unsplash.com/photos/random-beach-6",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "sunset"],
                date: "last-3-months",
                style: ["aesthetic"],
                color: ["pink", "pastel"]
            },
            {
                id: 9,
                src: "https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1VjVxVjbbDEFqO79SMXUGDOc_Mhfm14W2",
                viewUrl: "https://unsplash.com/photos/random-beach-7",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "summer"],
                date: "all-time",
                style: ["vintage"],
                color: ["bw"]
            },
            {
                id: 10,
                src: "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=14vxYTU4LSeYXCWcNBGoHo1AcyehaIkNj",
                viewUrl: "https://unsplash.com/photos/random-beach-6",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "sunset"],
                date: "last-3-months",
                style: ["aesthetic"],
                color: ["pink", "pastel"]
            },
            {
                id: 11,
                src: "https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MXwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1VjVxVjbbDEFqO79SMXUGDOc_Mhfm14W2",
                viewUrl: "https://unsplash.com/photos/random-beach-7",
                category: "Beaches",
                size: "9:16",
                aspect: "portrait",
                tags: ["nature", "ocean", "summer"],
                date: "all-time",
                style: ["vintage"],
                color: ["bw"]
            },

            // 1:1 images
            {
                id: 8,
                src: "https://images.unsplash.com/photo-1580636887279-02d758189fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1zUUOO8hKY6Rn8oZHC7DjrMhD4CRnwc7o",
                viewUrl: "https://unsplash.com/photos/random-beach-8",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean"],
                date: "this-month",
                style: ["minimal"],
                color: ["blue"]
            },
            {
                id: 9,
                src: "https://plus.unsplash.com/premium_photo-1705335058710-281b2a47fcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1ARn5GoDNxkQIQr7NDj3gxcPJroH3GBry",
                viewUrl: "https://unsplash.com/photos/random-beach-9",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean", "travel"],
                date: "last-month",
                style: ["aesthetic"],
                color: ["blue", "green"]
            },
            {
                id: 10,
                src: "https://images.unsplash.com/photo-1598621201048-5c1bc5cf3077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2VzfGVufDB8MnwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1RDxz9lwt0cymXvqu7elsXRQhrbcGb2_j",
                viewUrl: "https://unsplash.com/photos/random-beach-10",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean", "tropical"],
                date: "last-3-months",
                style: ["realistic"],
                color: ["blue", "multicolor"]
            },
            {
                id: 11,
                src: "https://images.unsplash.com/photo-1699435516531-89fa50177726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1XE7R8dD2yUFoKynnCnIVdQf4ZCTjbSpY",
                viewUrl: "https://unsplash.com/photos/random-beach-11",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean"],
                date: "this-month",
                style: ["abstract"],
                color: ["blue"]
            },
            {
                id: 12,
                src: "https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1nGgI3FZg763w6gX3qpixCQpX4WKBRLOS",
                viewUrl: "https://unsplash.com/photos/random-beach-12",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean", "sunset"],
                date: "last-month",
                style: ["aesthetic"],
                color: ["pink", "pastel"]
            },
            {
                id: 13,
                src: "https://images.unsplash.com/photo-1586946935456-fca2498cc208?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1rrle0VCDvELFU0HmTYnEwn0xykZmKptY",
                viewUrl: "https://unsplash.com/photos/random-beach-13",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean"],
                date: "all-time",
                style: ["vintage"],
                color: ["bw"]
            },
            {
                id: 14,
                src: "https://images.unsplash.com/photo-1699435516314-2688141d28e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlc3xlbnwwfDJ8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=16QkIIFtNCUWD4Vxl07q0Ximop3BNTSLt",
                viewUrl: "https://unsplash.com/photos/random-beach-14",
                category: "Beaches",
                size: "1:1",
                aspect: "square",
                tags: ["nature", "ocean", "travel"],
                date: "last-3-months",
                style: ["minimal"],
                color: ["blue"]
            },
            
            // 16:9 images
            {
                id: 15,
                src: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=12C48fWDfJaobyPsPwoAAqcODl0_Ph7Ec",
                viewUrl: "https://unsplash.com/photos/random-beach-15",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean"],
                date: "this-month",
                style: ["realistic"],
                color: ["blue"]
            },
            {
                id: 16,
                src: "https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1VIIO5IMDFkUXA3LZchVrsoawHpYT4tXQ",
                viewUrl: "https://unsplash.com/photos/random-beach-16",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean", "tropical"],
                date: "last-month",
                style: ["aesthetic"],
                color: ["blue", "green"]
            },
            {
                id: 17,
                src: "https://images.unsplash.com/photo-1566423471547-2a37c9a39899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1UX98Smvf6MX_O5svZwFoOMGOlXwpO9z3",
                viewUrl: "https://unsplash.com/photos/random-beach-17",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean", "sunset"],
                date: "last-3-months",
                style: ["abstract"],
                color: ["pink", "multicolor"]
            },
            {
                id: 18,
                src: "https://images.unsplash.com/photo-1622017634176-8da750043c54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1iTnj62NFY5htF5E01pobvTBQJxkw02KJ",
                viewUrl: "https://unsplash.com/photos/random-beach-18",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean"],
                date: "this-month",
                style: ["minimal"],
                color: ["blue"]
            },
            {
                id: 19,
                src: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1d2-IIAMyQa5DRIPDpOjNfZ-VRwvv20lM",
                viewUrl: "https://unsplash.com/photos/random-beach-19",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean", "travel"],
                date: "last-month",
                style: ["aesthetic"],
                color: ["blue", "pastel"]
            },
            {
                id: 20,
                src: "https://plus.unsplash.com/premium_photo-1674929041956-f9fbbbdcc227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D",
                downloadUrl: "https://drive.google.com/uc?export=download&id=1Jna5plWI_J7RsCcGWlQYODB-tqL89KtB",
                viewUrl: "https://unsplash.com/photos/random-beach-20",
                category: "Beaches",
                size: "16:9",
                aspect: "landscape",
                tags: ["nature", "ocean"],
                date: "all-time",
                style: ["vintage"],
                color: ["bw"]
            }
        ];

        // Current state
        let currentImages = [];
        let displayedCount = 0;
        let currentDownloadUrl = '';
        let selectedFilters = {
            date: [],
            style: [],
            color: [],
            orientation: [],
            tags: ['all']
        };

        // DOM elements
        const gallery = document.getElementById('gallery');
        const loadMoreBtn = document.getElementById('loadMore');
        const filterHeaders = document.querySelectorAll('.filter-header');
        const filterOptions = document.querySelectorAll('.filter-option');
        const tags = document.querySelectorAll('.tag');
        const applyFiltersBtn = document.getElementById('applyFilters');
        const resetFiltersBtn = document.getElementById('resetFilters');
        const popupOverlay = document.getElementById('popupOverlay');
        const popupClose = document.getElementById('popupClose');
        const countdown = document.getElementById('countdown');
        const downloadReady = document.getElementById('downloadReady');
        const finalDownload = document.getElementById('finalDownload');
        const adContainer = document.getElementById('adContainer');

        // Initialize the gallery
        function initGallery() {
            currentImages = [...imageData];
            displayedCount = 0;
            gallery.innerHTML = '';
            loadMoreImages();
        }

        // Load more images
        function loadMoreImages() {
            const remainingImages = currentImages.length - displayedCount;
            const batchSize = Math.min(20, remainingImages);
            
            for (let i = displayedCount; i < displayedCount + batchSize; i++) {
                if (i >= currentImages.length) break;
                
                const image = currentImages[i];
                const imageCard = createImageCard(image);
                gallery.appendChild(imageCard);
            }
            
            displayedCount += batchSize;
            
            if (displayedCount >= currentImages.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        // Create an image card
        function createImageCard(image) {
            const card = document.createElement('div');
            card.className = `image-card aspect-${image.aspect}`;
            card.dataset.id = image.id;
            card.dataset.date = image.date;
            card.dataset.style = image.style.join(',');
            card.dataset.color = image.color.join(',');
            card.dataset.aspect = image.aspect;
            card.dataset.tags = image.tags.join(',');
            
            card.innerHTML = `
                <img src="${image.src}" alt="Beach Image ${image.id}" loading="lazy">
                <div class="image-overlay">
                    <div class="image-info">
                        <h3>${image.category}</h3>
                        <p>Size: ${image.size}</p>
                    </div>
                    <button class="download-btn" data-download="${image.downloadUrl}">Download</button>
                </div>
            `;
            
            return card;
        }

        // Filter images based on selected filters
        function filterImages() {
            gallery.innerHTML = '';
            displayedCount = 0;
            
            currentImages = imageData.filter(image => {
                // Date filter
                if (selectedFilters.date.length > 0 && !selectedFilters.date.includes(image.date)) {
                    return false;
                }
                
                // Style filter
                if (selectedFilters.style.length > 0 && !image.style.some(style => selectedFilters.style.includes(style))) {
                    return false;
                }
                
                // Color filter
                if (selectedFilters.color.length > 0 && !image.color.some(color => selectedFilters.color.includes(color))) {
                    return false;
                }
                
                // Orientation filter
                if (selectedFilters.orientation.length > 0 && !selectedFilters.orientation.includes(image.aspect)) {
                    return false;
                }
                
                // Tags filter
                if (!selectedFilters.tags.includes('all') && !image.tags.some(tag => selectedFilters.tags.includes(tag))) {
                    return false;
                }
                
                return true;
            });
            
            loadMoreImages();
        }

        // Event listeners
        filterHeaders.forEach(header => {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close all other dropdowns
                document.querySelectorAll('.filter-options').forEach(option => {
                    if (option !== header.nextElementSibling) {
                        option.classList.remove('active');
                        option.previousElementSibling.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                header.classList.toggle('active');
                header.nextElementSibling.classList.toggle('active');
            });
        });

        filterOptions.forEach(option => {
            option.addEventListener('click', () => {
                option.classList.toggle('selected');
            });
        });

        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                if (tag.dataset.tag === 'all') {
                    // Reset all tags and set 'all' as active
                    tags.forEach(t => t.classList.remove('active'));
                    tag.classList.add('active');
                    selectedFilters.tags = ['all'];
                } else {
                    // Remove 'all' from selected tags if present
                    const allTag = document.querySelector('.tag[data-tag="all"]');
                    allTag.classList.remove('active');
                    selectedFilters.tags = selectedFilters.tags.filter(t => t !== 'all');
                    
                    // Toggle current tag
                    tag.classList.toggle('active');
                    
                    // Update selected tags
                    if (tag.classList.contains('active')) {
                        selectedFilters.tags.push(tag.dataset.tag);
                    } else {
                        selectedFilters.tags = selectedFilters.tags.filter(t => t !== tag.dataset.tag);
                    }
                    
                    // If no tags selected, default to 'all'
                    if (selectedFilters.tags.length === 0) {
                        allTag.classList.add('active');
                        selectedFilters.tags = ['all'];
                    }
                }
                
                filterImages();
            });
        });

        applyFiltersBtn.addEventListener('click', () => {
            // Collect selected filters
            selectedFilters.date = [];
            selectedFilters.style = [];
            selectedFilters.color = [];
            selectedFilters.orientation = [];
            
            document.querySelectorAll('.filter-option.selected').forEach(option => {
                const category = option.parentElement.dataset.category;
                const value = option.dataset.value;
                
                if (category === 'date') selectedFilters.date.push(value);
                if (category === 'style') selectedFilters.style.push(value);
                if (category === 'color') selectedFilters.color.push(value);
                if (category === 'orientation') selectedFilters.orientation.push(value);
            });
            
            // Close all dropdowns
            document.querySelectorAll('.filter-options').forEach(option => {
                option.classList.remove('active');
                option.previousElementSibling.classList.remove('active');
            });
            
            filterImages();
        });

        resetFiltersBtn.addEventListener('click', () => {
            // Reset all filters
            selectedFilters = {
                date: [],
                style: [],
                color: [],
                orientation: [],
                tags: ['all']
            };
            
            // Reset UI
            document.querySelectorAll('.filter-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            document.querySelectorAll('.tag').forEach(tag => {
                tag.classList.remove('active');
            });
            
            document.querySelector('.tag[data-tag="all"]').classList.add('active');
            
            filterImages();
        });

        loadMoreBtn.addEventListener('click', loadMoreImages);

        // Handle download button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('download-btn')) {
                e.preventDefault();
                currentDownloadUrl = e.target.dataset.download;
                
                // Show popup
                popupOverlay.classList.add('active');
                downloadReady.classList.remove('active');
                
                // Start countdown
                let seconds = 3;
                countdown.textContent = `${seconds} seconds remaining...`;
                
                const timer = setInterval(() => {
                    seconds--;
                    countdown.textContent = `${seconds} seconds remaining...`;
                    
                    if (seconds <= 0) {
                        clearInterval(timer);
                        countdown.textContent = "Your wallpaper is downloading...";
                        
                        // Load ad (in a real implementation, this would be the actual ad code)
                        adContainer.innerHTML = '<iframe src="https://www.profitableratecpm.com/uw30m1nti9?key=46c870d1067a9f226912631ee691ebd7" width="300" height="250" frameborder="0"></iframe>';
                        
                        // Show download button after delay
                        setTimeout(() => {
                            downloadReady.classList.add('active');
                        }, 1000);
                    }
                }, 1000);
            }
        });

        popupClose.addEventListener('click', () => {
            popupOverlay.classList.remove('active');
        });

        finalDownload.addEventListener('click', () => {
            // Trigger download
            window.location.href = currentDownloadUrl;
            popupOverlay.classList.remove('active');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.filter-options').forEach(option => {
                option.classList.remove('active');
                option.previousElementSibling.classList.remove('active');
            });
        });

        // Initialize the gallery on load
        window.addEventListener('DOMContentLoaded', initGallery);