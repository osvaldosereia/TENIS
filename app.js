// Product data - EDITE ESTE ARRAY PARA ADICIONAR NOVOS PRODUTOS
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
                <p>${product.review}</p>
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