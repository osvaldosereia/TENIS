// Product data - EDITE ESTE ARRAY PARA ADICIONAR NOVOS PRODUTOS
// AGORA O CAMPO "review" ACEITA HTML BÁSICO!

const products = [
    {
        "id": 1,
        "name": "Air Zoom Pegasus 40",
        "brand": "Nike",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        "images": [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80"
        ],
        "youtubeReviews": [
            { "name": "Canal do Corredor", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Tênis e Corrida", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Running Brasil", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Maratona Review", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Correr é Vida", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        "siteReviews": [
            { "name": "RunnerWorld BR", "url": "https://runnersworld.com.br" },
            { "name": "O2 Por Minuto", "url": "https://o2porminuto.com.br" },
            { "name": "Ativo", "url": "https://ativo.com" },
            { "name": "EuAtleta", "url": "https://euatleta.globo.com" },
            { "name": "Tênis Certo", "url": "https://teniscerto.com.br" }
        ],
        "buyLinks": [
            { "name": "Nike Oficial", "url": "https://nike.com.br" },
            { "name": "Netshoes", "url": "https://netshoes.com.br" },
            { "name": "Centauro", "url": "https://centauro.com.br" },
            { "name": "Amazon", "url": "https://amazon.com.br" },
            { "name": "Dafiti", "url": "https://dafiti.com.br" }
        ],
        "review": "O <strong style='color: #2563eb;'>Nike Air Zoom Pegasus 40</strong> é um tênis versátil e confortável, ideal para corredores de todos os níveis.<br><br><span style='background: #fef3c7; padding: 4px 8px; border-radius: 4px; font-weight: bold;'>✨ Principais Características:</span><br>• <strong>Entressola responsiva</strong> com tecnologia Zoom Air<br>• <strong style='color: #059669;'>Cabedal respirável</strong> em mesh engineered<br>• <strong>Tração excepcional</strong> em diversas superfícies<br><br><em style='color: #7c3aed; font-weight: 600;'>💡 Ideal para treinos diários e corridas de longa distância!</em>",
        "dateAdded": "2025-08-20",
        "views": 45
    },
    {
        "id": 2,
        "name": "Ultraboost 22",
        "brand": "Adidas",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80"
        ],
        "youtubeReviews": [
            { "name": "Adidas Review BR", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Ultra Running", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Boost Test", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Tênis Pro", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Running Expert", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        "siteReviews": [
            { "name": "Solereview", "url": "https://solereview.com" },
            { "name": "Running Magazine", "url": "https://runningmagazine.com" },
            { "name": "Footwear News", "url": "https://footwearnews.com" },
            { "name": "Believe in the Run", "url": "https://believeintherun.com" },
            { "name": "Runners Need", "url": "https://runnersneed.com" }
        ],
        "buyLinks": [
            { "name": "Adidas Oficial", "url": "https://adidas.com.br" },
            { "name": "Netshoes", "url": "https://netshoes.com.br" },
            { "name": "Centauro", "url": "https://centauro.com.br" },
            { "name": "Decathlon", "url": "https://decathlon.com.br" },
            { "name": "Kanui", "url": "https://kanui.com.br" }
        ],
        "review": "O <strong>Adidas Ultraboost 22</strong> representa o ápice da tecnologia em tênis de corrida.<br><br><strong>Tecnologia Boost:</strong> Amortecimento excepcional e retorno de energia incomparável<br><br><strong>Especificações Premium:</strong><br>• <strong>Cabedal:</strong> Primeknit+ adaptativo<br>• <strong>Sola:</strong> Continental para aderência superior<br>• <strong>Tecnologia:</strong> Linear Energy Push<br><br><em>👨‍🏃 Escolha dos profissionais e entusiastas!</em>",
        "dateAdded": "2025-08-18",
        "views": 62
    },
    {
        "id": 3,
        "name": "Gel-Nimbus 25",
        "brand": "Asics",
        "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
        "images": [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80"
        ],
        "youtubeReviews": [
            { "name": "Asics Brasil", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Gel Technology", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Nimbus Review", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Long Distance BR", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Asics Test", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        "siteReviews": [
            { "name": "Asics Running", "url": "https://asics.com/running" },
            { "name": "Gear Junkie", "url": "https://gearjunkie.com" },
            { "name": "Outside Magazine", "url": "https://outsideonline.com" },
            { "name": "Runner Click", "url": "https://runnerclick.com" },
            { "name": "The Running Clinic", "url": "https://therunningclinic.com" }
        ],
        "buyLinks": [
            { "name": "Asics Oficial", "url": "https://asics.com.br" },
            { "name": "Centauro", "url": "https://centauro.com.br" },
            { "name": "Netshoes", "url": "https://netshoes.com.br" },
            { "name": "Sport Zone", "url": "https://sportzone.com.br" },
            { "name": "Authentic Feet", "url": "https://authenticfeet.com.br" }
        ],
        "review": "O <strong>Asics Gel-Nimbus 25</strong> é projetado para oferecer máximo conforto em longas distâncias.<br><br><strong>Tecnologias Principais:</strong><br>🛡️ <strong>GEL Technology</strong> - Absorção de impacto superior<br>• <strong>FlyteFoam</strong> - Leveza sem comprometer amortecimento<br><br><strong>🌟 Destaques do Modelo:</strong><br>• Cabedal em mesh macio para ajuste confortável<br>• Nova geometria para transições mais suaves<br>• <strong>Detalhes refletivos</strong> para visibilidade noturna<br><br><em>🎯 Ideal para corredores que priorizam conforto e proteção!</em>",
        "dateAdded": "2025-08-15",
        "views": 38
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
        <div class="product-card" onclick="openProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <button class="btn-primary">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

function openProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Nova função showProductDetails otimizada para o novo layout
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
        <div class="product-header">
            <div class="product-main-image">
                <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
                <button class="whatsapp-share-btn" onclick="window.open('${whatsappUrl}', '_blank')" title="Compartilhar no WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </button>
            </div>
            
            <div class="image-gallery">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="${product.name}" class="gallery-thumb ${index === 0 ? 'active' : ''}" 
                         onclick="changeMainImage('${img}', ${index})">
                `).join('')}
            </div>
        </div>

        <div class="product-info-section">
            <h1 class="product-title">${product.name}</h1>
            <div class="product-brand-badge">${product.brand}</div>
        </div>

        <div class="links-section">
            <div class="links-group">
                <h3 class="links-title">
                    <i class="fab fa-youtube"></i>
                    Reviews do YouTube
                </h3>
                <div class="links-list">
                    ${product.youtubeReviews.map(link => `
                        <div class="link-item">
                            <span class="link-name">${link.name}</span>
                            <a href="${link.url}" class="link-btn" target="_blank" rel="noopener" title="Abrir">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="links-group">
                <h3 class="links-title">
                    <i class="fas fa-globe"></i>
                    Reviews Sites Especializados
                </h3>
                <div class="links-list">
                    ${product.siteReviews.map(link => `
                        <div class="link-item">
                            <span class="link-name">${link.name}</span>
                            <a href="${link.url}" class="link-btn" target="_blank" rel="noopener" title="Abrir">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="links-group">
                <h3 class="links-title">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar
                </h3>
                <div class="links-list">
                    ${product.buyLinks.map(link => `
                        <div class="link-item">
                            <span class="link-name">${link.name}</span>
                            <a href="${link.url}" class="link-btn" target="_blank" rel="noopener" title="Abrir">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="product-review">
            <h3>Review Completo</h3>
            <div class="review-content">${product.review}</div>
        </div>
    `;

    // Add fade-in animation
    container.classList.add('fade-in');
    
    // Increment views
    product.views += 1;
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}
