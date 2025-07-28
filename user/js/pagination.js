// Pagination functionality for wallpaper gallery
class Pagination {
    constructor(totalItems, itemsPerPage, currentPage = 1) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.totalPages = Math.ceil(totalItems / itemsPerPage);
        this.maxVisiblePages = 5; // Maximum number of visible page buttons
    }

    // Generate pagination HTML
    generatePagination() {
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination';

        // Previous button
        const prevBtn = this.createPageButton('Previous', this.currentPage > 1, () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.onPageChange(this.currentPage);
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Calculate range of pages to show
        let startPage, endPage;
        if (this.totalPages <= this.maxVisiblePages) {
            // Show all pages
            startPage = 1;
            endPage = this.totalPages;
        } else {
            // Calculate start and end pages
            const maxPagesBeforeCurrent = Math.floor(this.maxVisiblePages / 2);
            const maxPagesAfterCurrent = Math.ceil(this.maxVisiblePages / 2) - 1;

            if (this.currentPage <= maxPagesBeforeCurrent) {
                // Current page near the start
                startPage = 1;
                endPage = this.maxVisiblePages;
            } else if (this.currentPage + maxPagesAfterCurrent >= this.totalPages) {
                // Current page near the end
                startPage = this.totalPages - this.maxVisiblePages + 1;
                endPage = this.totalPages;
            } else {
                // Current page somewhere in the middle
                startPage = this.currentPage - maxPagesBeforeCurrent;
                endPage = this.currentPage + maxPagesAfterCurrent;
            }
        }

        // First page and ellipsis if needed
        if (startPage > 1) {
            const firstPageBtn = this.createPageButton('1', false, () => {
                this.currentPage = 1;
                this.onPageChange(this.currentPage);
            });
            paginationContainer.appendChild(firstPageBtn);

            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
        }

        // Page number buttons
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = this.createPageButton(
                i.toString(),
                i === this.currentPage,
                () => {
                    this.currentPage = i;
                    this.onPageChange(this.currentPage);
                }
            );
            paginationContainer.appendChild(pageBtn);
        }

        // Last page and ellipsis if needed
        if (endPage < this.totalPages) {
            if (endPage < this.totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }

            const lastPageBtn = this.createPageButton(
                this.totalPages.toString(),
                false,
                () => {
                    this.currentPage = this.totalPages;
                    this.onPageChange(this.currentPage);
                }
            );
            paginationContainer.appendChild(lastPageBtn);
        }

        // Next button
        const nextBtn = this.createPageButton('Next', this.currentPage < this.totalPages, () => {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.onPageChange(this.currentPage);
            }
        });
        paginationContainer.appendChild(nextBtn);

        return paginationContainer;
    }

    // Create a page button element
    createPageButton(text, isActive, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.disabled = !onClick; // Disable if no click handler provided

        if (isActive) {
            button.classList.add('active');
        }

        if (onClick) {
            button.addEventListener('click', () => {
                onClick();
                // Scroll to top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        return button;
    }

    // Callback for page changes (to be implemented by the consumer)
    onPageChange(page) {
        console.log('Page changed to:', page);
        // This should be implemented by the page that uses the pagination
        // to update the displayed content
    }
}

// Initialize pagination for the wallpaper gallery
function initPagination(totalItems, itemsPerPage, currentPage, onPageChangeCallback) {
    const pagination = new Pagination(totalItems, itemsPerPage, currentPage);
    
    // Set the callback for page changes
    pagination.onPageChange = onPageChangeCallback;
    
    // Generate and return the pagination HTML
    return pagination.generatePagination();
}

// Export for use in other files
export { Pagination, initPagination };