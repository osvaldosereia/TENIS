// Product data - EDITE ESTE ARRAY PARA ADICIONAR NOVOS PRODUTOS
// AGORA O CAMPO "review" ACEITA HTML BÁSICO!
const products = [
    {
        "id": 1,
        "name": "Air Zoom Pegasus 40",
        "brand": "Nike",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80"
        ],
        "buyLink": "https://nike.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O <strong style='color: #2563eb;'>Nike Air Max</strong> é ideal para corridas.<br><br>✨ <strong>Características:</strong><br>• <strong>Conforto:</strong> Excelente<br>• <strong style='color: #059669;'>Durabilidade:</strong> Superior<br><br><em style='color: #7c3aed;'>🎯 Recomendado para todos!</em>"
        "dateAdded": "2025-08-20",
        "views": 45
    }
];

// Global variables
let filteredProducts = [...products];
let currentProductId = null;

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const brandFilter = document.getElementById('brandFilter');
const sortFilter = document.getElementById('sortFilter');
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Setup event listeners only if elements exist (for index page)
    if (searchInput && searchBtn) {
        setupEventListeners();
        renderProducts();
    }

    // Setup mobile menu if it exists
    if (menuToggle && mobileMenu) {
        setupMobileMenu();
    }
}

function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    brandFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', sortProducts);
}

function setupMobileMenu() {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('show');
        mobileMenu.classList.remove('hidden');
    });

    if (menuClose) {
        menuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });
}

function handleSearch() {
    filterProducts();
}

function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedBrand = brandFilter ? brandFilter.value : '';

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.brand.toLowerCase().includes(searchTerm);
        const matchesBrand = !selectedBrand || product.brand === selectedBrand;

        return matchesSearch && matchesBrand;
    });

    sortProducts(false);
}

function sortProducts(render = true) {
    const sortBy = sortFilter ? sortFilter.value : 'recent';

    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'views':
                return b.views - a.views;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'recent':
            default:
                return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
    });

    if (render) {
        renderProducts();
    } else {
        renderProducts();
    }
}

function renderProducts() {
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.classList.remove('hidden');
        return;
    }

    productsGrid.style.display = 'grid';
    noResults.classList.add('hidden');

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in" onclick="goToProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <button class="btn-primary">VER</button>
            </div>
        </div>
    `).join('');
}

function goToProduct(productId) {
    // Increment views
    const product = products.find(p => p.id === productId);
    if (product) {
        product.views++;
    }

    // Navigate to product page
    window.location.href = `product.html?id=${productId}`;
}

// Product page functions
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    currentProductId = productId;

    const container = document.getElementById('productContainer');
    if (!container) return;

    // Generate WhatsApp message
    const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no tênis ${product.name} da ${product.brand}. Pode me dar mais informações?`);
    const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
            </div>
            <div class="thumbnail-container">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                         onclick="changeMainImage('${img}', ${index})">
                `).join('')}
            </div>
        </div>

        <div class="product-details">
            <h1>${product.name}</h1>
            <div class="product-brand">${product.brand}</div>

            <div class="product-actions">
                <a href="${product.buyLink}" class="action-btn btn-buy" target="_blank" rel="noopener" title="Comprar">
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="${product.youtubeLink}" class="action-btn btn-youtube" target="_blank" rel="noopener" title="Ver Review">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="${whatsappUrl}" class="action-btn btn-whatsapp" target="_blank" rel="noopener" title="Compartilhar">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>

            <div class="product-review">
                <h3>Review Completo</h3>
                <div class="review-content">${product.review}</div>
            </div>
        </div>
    `;

    // Add fade-in animation
    container.classList.add('fade-in');
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage) {
        mainImage.src = imageSrc;
    }

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all lazy images
    document.addEventListener('DOMContentLoaded', function() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}
