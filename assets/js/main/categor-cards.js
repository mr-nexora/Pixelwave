// Category data with your provided images
        const categories = [
            { 
                name: "Nature", 
                image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHwxfDB8fHww",
                link: "#nature" // Replace with your actual link
            },
            { 
                name: "Abstract", 
                image: "https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHwxfDB8fHww",
                link: "#abstract" // Replace with your actual link
            },
            { 
                name: "Space", 
                image: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHwxfDB8fHww",
                link: "#space" // Replace with your actual link
            },
            { 
                name: "Cityscapes", 
                image: "https://images.unsplash.com/photo-1516522973472-f009f23bba59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHwxfDB8fHww",
                link: "#cityscapes" // Replace with your actual link
            },
            { 
                name: "Minimalist", 
                image: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzfGVufDB8MXwwfHx8MA%3D%3D",
                link: "#minimalist" // Replace with your actual link
            },
            { 
                name: "Animals", 
                image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfDF8MHx8fDA%3D",
                link: "#animals" // Replace with your actual link
            },
            { 
                name: "Fantasy", 
                image: "https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfDF8MHx8fDA%3D",
                link: "#fantasy" // Replace with your actual link
            },
            { 
                name: "Technology", 
                image: "https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95c3xlbnwwfDF8MHx8fDA%3D",
                link: "#technology" // Replace with your actual link
            },
            { 
                name: "Art & Illustrations", 
                image: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                link: "#art" // Replace with your actual link
            },
            { 
                name: "Anime", 
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                link: "#anime" // Replace with your actual link
            },
            { 
                name: "Vintage", 
                image: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                link: "#vintage" // Replace with your actual link
            },
            { 
                name: "Travel & Adventure", 
                image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
                link: "#travel" // Replace with your actual link
            },
            { 
                name: "Seasons", 
                image: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
                link: "#seasons" // Replace with your actual link
            },
            { 
                name: "Gaming", 
                image: "https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D%3D",
                link: "#gaming" // Replace with your actual link
            },
            { 
                name: "Macro", 
                image: "https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D%3D",
                link: "#macro" // Replace with your actual link
            }
        ];
        
        // Function to create category cards
        function createCategoryCards() {
            const track = document.querySelector('.categories-track');
            
            // Duplicate categories to create infinite loop effect
            const duplicatedCategories = [...categories, ...categories];
            
            duplicatedCategories.forEach(category => {
                const card = document.createElement('a');
                card.className = 'category-card';
                card.href = category.link;
                card.setAttribute('data-category', category.name.toLowerCase().replace(' & ', '-').replace(' ', '-'));
                
                card.innerHTML = `
                    <img src="${category.image}" alt="${category.name}" class="category-image">
                    <div class="category-name">${category.name}</div>
                `;
                
                track.appendChild(card);
            });
        }
        
        // Initialize on page load
        window.addEventListener('DOMContentLoaded', createCategoryCards);