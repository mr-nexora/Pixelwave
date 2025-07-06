document.addEventListener('DOMContentLoaded', function() {
            // Wallpaper data
            const wallpapers = [
                {
                    url: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG92ZXxlbnwwfDF8MHx8fDA%3D",
                    title: "Romantic Sunset"
                },
                {
                    url: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHwxfDB8fHww",
                    title: "Heart in Nature"
                },
                {
                    url: "https://images.unsplash.com/photo-1607772550709-da3a8218ac69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D",
                    title: "Portrait Beauty"
                },
                {
                    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                    title: "Mountain Lake"
                },
                {
                    url: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                    title: "Forest Path"
                },
                {
                    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
                    title: "Alpine View"
                },
                {
                    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                    title: "Waterfall Mist"
                },
                {
                    url: "https://images.unsplash.com/photo-1504203772830-87fba72385ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95fGVufDB8MXwwfHx8MA%3D%3D",
                    title: "Portrait Art"
                },
                {
                    url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwxfDB8fHww",
                    title: "Tropical Beach"
                },
                {
                    url: "https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHwxfDB8fHww",
                    title: "Ocean Sunset"
                }
            ];

            // Add wallpapers to container
            const container = document.getElementById('wallpapersContainer');
            
            wallpapers.forEach(wallpaper => {
                const item = document.createElement('div');
                item.className = 'wallpaper-item';
                item.innerHTML = `
                    <img src="${wallpaper.url}" alt="${wallpaper.title}">
                    <div class="wallpaper-overlay">${wallpaper.title}</div>
                `;
                container.appendChild(item);
            });

            // Auto-scroll animation
            let scrollPosition = 0;
            const scrollSpeed = 1; // pixels per frame
            
            function autoScroll() {
                scrollPosition += scrollSpeed;
                if (scrollPosition >= container.scrollWidth / 2) {
                    scrollPosition = 0;
                }
                container.scrollLeft = scrollPosition;
                requestAnimationFrame(autoScroll);
            }
            
            // Start auto-scroll after a delay
            setTimeout(() => {
                autoScroll();
            }, 2000);
        });