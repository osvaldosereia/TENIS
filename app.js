// Product data
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
        "review": "O Nike Air Zoom Pegasus 40 é um tênis versátil e confortável, ideal para corredores de todos os níveis. Com sua entressola responsiva e cabedal respirável, oferece o equilíbrio perfeito entre conforto e performance. A tecnologia Zoom Air no antepé proporciona retorno de energia a cada passada, enquanto o design clássico garante durabilidade para treinos diários. O cabedal em mesh engineered garante ventilação superior, mantendo os pés secos durante longos treinos. A sola de borracha oferece tração excepcional em diversas superfícies, proporcionando confiança a cada pisada. Este modelo se destaca pela versatilidade, sendo adequado tanto para treinos intervalados quanto para corridas de longa distância.",
        "dateAdded": "2025-08-20",
        "views": 45
    },
    {
        "id": 2,
        "name": "Ultraboost 22",
        "brand": "Adidas",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80"
        ],
        "buyLink": "https://adidas.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O Adidas Ultraboost 22 representa o ápice da tecnologia em tênis de corrida. Sua entressola Boost oferece amortecimento excepcional e retorno de energia incomparável. O cabedal Primeknit+ se adapta perfeitamente ao pé, proporcionando suporte e respirabilidade. Ideal para longas distâncias e corredores que buscam máximo conforto. A tecnologia Linear Energy Push aumenta a rigidez do antepé, otimizando a transição e impulsão. O sistema de cordões integrado garante ajuste personalizado e seguro. A sola Continental oferece aderência superior em condições secas e molhadas, inspirada nos pneus de alta performance. Este tênis é a escolha preferida de atletas profissionais e entusiastas que não abrem mão do máximo conforto e tecnologia.",
        "dateAdded": "2025-08-18",
        "views": 62
    },
    {
        "id": 3,
        "name": "Gel-Nimbus 25",
        "brand": "Asics",
        "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80"
        ],
        "buyLink": "https://asics.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O Asics Gel-Nimbus 25 é projetado para oferecer máximo conforto em longas distâncias. Com tecnologia GEL no calcanhar e antepé, proporciona absorção de impacto superior. A entressola FlyteFoam oferece leveza sem comprometer o amortecimento. Perfeito para corredores que priorizam conforto e proteção contra impactos. O cabedal em mesh macio garante ajuste confortável e ventilação adequada. A nova geometria da entressola promove transições mais suaves durante a corrida. O design atualizado inclui detalhes refletivos para maior visibilidade em condições de pouca luz. A durabilidade excepcional faz deste tênis um investimento de longo prazo para corredores sérios que buscam o máximo de conforto e proteção.",
        "dateAdded": "2025-08-15",
        "views": 38
    },
    {
        "id": 4,
        "name": "Fresh Foam X 1080v12",
        "brand": "New Balance",
        "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80"
        ],
        "buyLink": "https://newbalance.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O New Balance Fresh Foam X 1080v12 combina amortecimento macio com responsividade. A tecnologia Fresh Foam X proporciona uma sensação suave e confortável a cada passada. O cabedal em mesh garante excelente respirabilidade, enquanto o design permite transições naturais do pé. Ideal para treinos diários e longas corridas. O drop de 8mm oferece equilíbrio perfeito entre amortecimento e conexão com o solo. A construção sem costura reduz pontos de atrito e aumenta o conforto geral. O design moderno combina funcionalidade com estética contemporânea. Este modelo se destaca pela versatilidade, sendo adequado tanto para corredores iniciantes quanto experientes que valorizam conforto e suavidade.",
        "dateAdded": "2025-08-22",
        "views": 29
    },
    {
        "id": 5,
        "name": "React Infinity Run 3",
        "brand": "Nike",
        "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
        ],
        "buyLink": "https://nike.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O Nike React Infinity Run 3 foi desenvolvido para reduzir lesões e proporcionar suporte contínuo. Sua entressola Nike React oferece amortecimento responsivo e durável. O design ampliado da base proporciona estabilidade extra, enquanto o cabedal Flyknit garante ajuste personalizado. Perfeito para corredores que buscam proteção e performance. A geometria especial da sola foi projetada para reduzir a rotação excessiva do pé, diminuindo o risco de lesões. O cabedal mais respirável mantém os pés frescos durante treinos intensos. A durabilidade aprimorada da entressola garante performance consistente por milhares de quilômetros. Este tênis representa a evolução da tecnologia Nike para corredores que priorizam segurança e conforto.",
        "dateAdded": "2025-08-19",
        "views": 51
    },
    {
        "id": 6,
        "name": "Supernova 2.0",
        "brand": "Adidas",
        "image": "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80"
        ],
        "buyLink": "https://adidas.com",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O Adidas Supernova 2.0 é um tênis versátil para treinos diários. Com amortecimento Bounce, oferece energia e conforto a cada passada. O cabedal em mesh proporciona respirabilidade, enquanto o solado de borracha garante tração durável. Ideal para corredores iniciantes e intermediários que buscam um tênis confiável para o dia a dia. O design renovado combina elementos clássicos com toques modernos. A construção robusta garante durabilidade excepcional para uso frequente. O ajuste confortável e seguro proporciona confiança durante toda a corrida. A relação custo-benefício excepcional faz deste modelo uma escolha inteligente para quem busca qualidade sem comprometer o orçamento.",
        "dateAdded": "2025-08-16",
        "views": 33
    }
];

// Global variables
let filteredProducts = [...products];
let currentProductIndex = 0;
let currentFilters = {
    search: '',
    brand: '',
    sort: 'recent'
};

// DOM elements - declared globally
let searchInput, searchBtn, brandFilter, sortFilter, productsGrid, noResults;
let homePage, productPage, menuToggle, menuClose, mobileMenu;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDOM();
    renderProducts();
    setupEventListeners();
    showHomePage();
});

// Initialize DOM element references
function initializeDOM() {
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    brandFilter = document.getElementById('brandFilter');
    sortFilter = document.getElementById('sortFilter');
    productsGrid = document.getElementById('productsGrid');
    noResults = document.getElementById('noResults');
    homePage = document.getElementById('homePage');
    productPage = document.getElementById('productPage');
    menuToggle = document.getElementById('menuToggle');
    menuClose = document.getElementById('menuClose');
    mobileMenu = document.getElementById('mobileMenu');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    // Filters
    if (brandFilter) brandFilter.addEventListener('change', handleFilters);
    if (sortFilter) sortFilter.addEventListener('change', handleFilters);
    
    // Mobile menu
    if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
    if (menuClose) menuClose.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }
    
    // Product navigation buttons
    const prevBtn = document.getElementById('prevProduct');
    const nextBtn = document.getElementById('nextProduct');
    if (prevBtn) prevBtn.addEventListener('click', showPreviousProduct);
    if (nextBtn) nextBtn.addEventListener('click', showNextProduct);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyNavigation);
}

// Handle search functionality
function handleSearch() {
    if (!searchInput) return;
    currentFilters.search = searchInput.value.toLowerCase().trim();
    applyFilters();
}

// Handle filter changes
function handleFilters() {
    if (brandFilter) currentFilters.brand = brandFilter.value;
    if (sortFilter) currentFilters.sort = sortFilter.value;
    applyFilters();
}

// Apply all filters and sort
function applyFilters() {
    filteredProducts = products.filter(product => {
        const matchesSearch = currentFilters.search === '' || 
                            product.name.toLowerCase().includes(currentFilters.search) ||
                            product.brand.toLowerCase().includes(currentFilters.search);
        const matchesBrand = currentFilters.brand === '' || product.brand === currentFilters.brand;
        
        return matchesSearch && matchesBrand;
    });
    
    // Sort products
    filteredProducts.sort((a, b) => {
        if (currentFilters.sort === 'recent') {
            return new Date(b.dateAdded) - new Date(a.dateAdded);
        } else if (currentFilters.sort === 'views') {
            return b.views - a.views;
        }
        return 0;
    });
    
    renderProducts();
}

// Render products grid
function renderProducts() {
    if (!productsGrid || !noResults) return;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    const productsHTML = filteredProducts.map(product => {
        return `
            <div class="product-card" data-product-id="${product.id}">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image" 
                     loading="lazy">
                <div class="product-card__body">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <button class="btn-view" onclick="event.stopPropagation(); showProductPage(${product.id})">VER</button>
                </div>
            </div>
        `;
    }).join('');
    
    productsGrid.innerHTML = productsHTML;
    
    // Add click handlers to product cards
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            showProductPage(productId);
        });
    });
}

// Show home page
function showHomePage() {
    if (homePage) homePage.classList.remove('hidden');
    if (productPage) productPage.classList.add('hidden');
    closeMobileMenu();
}

// Show product page
function showProductPage(productId) {
    console.log('Showing product page for ID:', productId); // Debug log
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    // Increment views
    product.views++;
    
    // Update current product index for navigation
    currentProductIndex = filteredProducts.findIndex(p => p.id === productId);
    
    // Hide home page and show product page
    if (homePage) homePage.classList.add('hidden');
    if (productPage) productPage.classList.remove('hidden');
    
    // Populate product details
    populateProductDetails(product);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Setup product navigation
    setupProductNavigation();
}

// Populate product details
function populateProductDetails(product) {
    const productName = document.getElementById('productName');
    const productBrand = document.getElementById('productBrand');
    const reviewText = document.getElementById('reviewText');
    
    if (productName) productName.textContent = product.name;
    if (productBrand) productBrand.textContent = product.brand;
    if (reviewText) reviewText.textContent = product.review;
    
    // Setup gallery
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }
    
    thumbnails.forEach((thumbnail, index) => {
        if (product.images[index]) {
            thumbnail.src = product.images[index];
            thumbnail.alt = `${product.name} - Imagem ${index + 1}`;
            thumbnail.classList.toggle('active', index === 0);
            
            thumbnail.onclick = () => {
                if (mainImage) mainImage.src = product.images[index];
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            };
        }
    });
    
    // Setup action buttons
    setupActionButtons(product);
}

// Setup action buttons
function setupActionButtons(product) {
    const buyButton = document.getElementById('buyButton');
    const reviewButton = document.getElementById('reviewButton');
    const shareButton = document.getElementById('shareButton');
    
    // Buy button
    if (buyButton) {
        buyButton.onclick = function(e) {
            e.preventDefault();
            window.open(product.buyLink, '_blank', 'noopener,noreferrer');
        };
    }
    
    // Review button
    if (reviewButton) {
        reviewButton.onclick = function(e) {
            e.preventDefault();
            window.open(product.youtubeLink, '_blank', 'noopener,noreferrer');
        };
    }
    
    // Share button
    if (shareButton) {
        shareButton.onclick = function(e) {
            e.preventDefault();
            shareOnWhatsApp(product);
        };
    }
}

// Setup product navigation
function setupProductNavigation() {
    const prevBtn = document.getElementById('prevProduct');
    const nextBtn = document.getElementById('nextProduct');
    
    if (prevBtn) prevBtn.disabled = currentProductIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentProductIndex >= filteredProducts.length - 1;
}

// Show previous product
function showPreviousProduct() {
    if (currentProductIndex > 0) {
        const prevProduct = filteredProducts[currentProductIndex - 1];
        showProductPage(prevProduct.id);
    }
}

// Show next product
function showNextProduct() {
    if (currentProductIndex < filteredProducts.length - 1) {
        const nextProduct = filteredProducts[currentProductIndex + 1];
        showProductPage(nextProduct.id);
    }
}

// Share on WhatsApp
function shareOnWhatsApp(product) {
    const message = `Confira este tênis incrível: ${product.name} da ${product.brand}!\n\nUm tênis perfeito para corrida com excelente qualidade e conforto.`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

// Mobile menu functions
function openMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Keyboard navigation handler
function handleKeyNavigation(e) {
    // ESC key to close mobile menu or go back to home
    if (e.key === 'Escape') {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        } else if (productPage && !productPage.classList.contains('hidden')) {
            showHomePage();
        }
    }
    
    // Arrow keys for product navigation when on product page
    if (productPage && !productPage.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            showPreviousProduct();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            showNextProduct();
        }
    }
}

// Debounce utility function
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

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (!productPage || productPage.classList.contains('hidden')) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            showPreviousProduct();
        } else {
            showNextProduct();
        }
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Make functions globally available for onclick handlers
window.showProductPage = showProductPage;
window.showHomePage = showHomePage;