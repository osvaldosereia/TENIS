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
        "review": "O <strong style='color: #2563eb;'>Nike Air Zoom Pegasus 40</strong> é um tênis versátil e confortável, ideal para corredores de todos os níveis.<br><br><span style='background: #fef3c7; padding: 4px 8px; border-radius: 4px; font-weight: bold;'>✨ Principais Características:</span><br>• <strong>Entressola responsiva</strong> com tecnologia Zoom Air<br>• <strong style='color: #059669;'>Cabedal respirável</strong> em mesh engineered<br>• <strong>Tração excepcional</strong> em diversas superfícies<br><br><em style='color: #7c3aed; font-weight: 600;'>💡 Ideal para treinos diários e corridas de longa distância!</em>",
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
        "review": "O <strong style='color: #dc2626;'>Adidas Ultraboost 22</strong> representa o ápice da tecnologia em tênis de corrida.<br><br><span style='background: #dbeafe; padding: 8px; border-left: 4px solid #3b82f6; display: block; margin: 16px 0;'>🚀 <strong>Tecnologia Boost:</strong> Amortecimento excepcional e retorno de energia incomparável</span><br><strong style='color: #059669;'>Especificações Premium:</strong><br>• <strong>Cabedal:</strong> Primeknit+ adaptativo<br>• <strong>Sola:</strong> Continental para aderência superior<br>• <strong style='color: #ea580c;'>Tecnologia:</strong> Linear Energy Push<br><br><em style='color: #7c3aed;'>👨‍🏃 Escolha dos profissionais e entusiastas!</em>",
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
        "review": "O <strong style='color: #7c3aed;'>Asics Gel-Nimbus 25</strong> é projetado para oferecer máximo conforto em longas distâncias.<br><br><span style='background: #f3e8ff; padding: 8px; border-radius: 8px; display: block; margin: 16px 0;'>💎 <strong>Tecnologias Principais:</strong><br>🛡️ <strong style='color: #c2410c;'>GEL Technology</strong> - Absorção de impacto superior<br>🪶 <strong style='color: #166534;'>FlyteFoam</strong> - Leveza sem comprometer amortecimento</span><br><strong style='color: #0891b2;'>🌟 Destaques do Modelo:</strong><br>• Cabedal em mesh macio para ajuste confortável<br>• Nova geometria para transições mais suaves<br>• <strong style='color: #dc2626;'>Detalhes refletivos</strong> para visibilidade noturna<br><br><em style='color: #059669; font-weight: 600;'>🎯 Ideal para corredores que priorizam conforto e proteção!</em>",
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
        "review": "O <strong style='color: #059669;'>New Balance Fresh Foam X 1080v12</strong> combina amortecimento macio com responsividade.<br><br><span style='background: #ecfdf5; padding: 8px; border-left: 4px solid #10b981; display: block; margin: 16px 0;'>🚀 <strong>Fresh Foam X:</strong> Sensação suave e confortável a cada passada</span><br><strong style='color: #ea580c;'>Características Técnicas:</strong><br>• <strong>Drop:</strong> 8mm para equilíbrio perfeito<br>• <strong style='color: #7c3aed;'>Construção:</strong> Sem costura para máximo conforto<br>• <strong>Design:</strong> Moderno com funcionalidade<br><br><em style='color: #dc2626; font-weight: 600;'>💡 Versátil para iniciantes e experientes!</em>",
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
        "review": "O <strong style='color: #2563eb;'>Nike React Infinity Run 3</strong> foi desenvolvido para reduzir lesões e proporcionar suporte contínuo.<br><br><span style='background: #fef2f2; padding: 8px; border-left: 4px solid #ef4444; display: block; margin: 16px 0;'>🛡️ <strong>Foco na Proteção:</strong> Design ampliado da base para estabilidade extra</span><br><strong style='color: #7c3aed;'>Tecnologias Nike:</strong><br>• <strong style='color: #059669;'>Nike React:</strong> Amortecimento responsivo e durável<br>• <strong>Flyknit:</strong> Ajuste personalizado<br>• <strong style='color: #ea580c;'>Geometria especial:</strong> Reduz rotação do pé<br><br><em style='color: #166534; font-weight: 600;'>🏃‍♂️ Evolução para corredores que priorizam segurança!</em>",
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
        "review": "O <strong style='color: #dc2626;'>Adidas Supernova 2.0</strong> é um tênis versátil para treinos diários.<br><br><span style='background: #fff7ed; padding: 8px; border-radius: 8px; display: block; margin: 16px 0;'>⚡ <strong style='color: #ea580c;'>Amortecimento Bounce:</strong> Energia e conforto a cada passada</span><br><strong style='color: #059669;'>Construção Durável:</strong><br>• <strong>Cabedal:</strong> Mesh para respirabilidade<br>• <strong style='color: #7c3aed;'>Solado:</strong> Borracha para tração durável<br>• <strong>Design:</strong> Elementos clássicos com toques modernos<br><br><em style='color: #166534; font-weight: 600;'>💰 Excelente custo-benefício para o dia a dia!</em>",
        "dateAdded": "2025-08-16",
        "views": 33
    },
    {
"id": 7,
"name": "Adizero Drive RC",
"brand": "Adidas",
"image": "https://s3.sa-east-1.amazonaws.com/static.activodeporte.com/brasil/uploads/2025/05/20122619/Olympikus-Corre-Grafeno-3-R-79999-Drop-Aura-4-1-548x365.jpg?w=400&q=80",
"images": [
"https://www.adidas.com.br/tenis-adizero-drive-rc/JH5694.html?w=600&q=80",
"https://www.decathlon.com.br/tenis-de-corrida-mulher-adizero-drive-rc-/p?w=600&q=80",
"https://www.procorrer.com.br/produtos/tenis-adidas-adizero-drive-rc-masculino-azul/?w=600&q=80"
],
"buyLink": "https://www.adidas.com.br/tenis-adizero-drive-rc/JH5694.html",
"youtubeLink": "https://www.youtube.com/watch?v=noZhW7WvWtU",
"review": "<strong style='color:#111;'>Adizero Drive RC</strong><br>\n<em style='color:#555;'>Perfil: corrida leve e treino de ritmo</em><br><br>\n\n<span style='background:#e6f4ff;padding:4px 8px;border-radius:4px;font-weight:700;'>⚙️ Plataforma</span><br>\n• <strong>Entressola:</strong> EVA Lightstrike + hastes Energy Rods 2.0, com boa resposta e transição energizada<br>\n• <strong>Altura/Drop:</strong> stack traseiro ~38 mm; drop ~6,5 mm<br>\n• <strong>Peso:</strong> cerca de 225 g (tamanho de referência não especificado)<br><br>\n\n<span style='background:#fff7e6;padding:4px 8px;border-radius:4px;font-weight:700;'>👟 Cabedal & Ajuste</span><br>\n• <strong>Materiais:</strong> mesh respirável com sobreposições plásticas; bom suporte médio-pé<br>\n• <strong>Ajuste:</strong> forma justa (snug); calcanhar firme com contraforte rígido; bom travamento no médio-pé<br>\n• <strong>Numeração:</strong> fiel ao tamanho padrão<br><br>\n\n<span style='background:#f3e8ff;padding:4px 8px;border-radius:4px;font-weight:700;'>🛣️ Sola & Durabilidade</span><br>\n• <strong>Tração:</strong> adequada para asfalto seco; borracha Adiwear durável<br>\n• <strong>Borracha:</strong> Adiwear resistente; <strong>Durabilidade:</strong> estimativa superior a 300 km de uso<br><br>\n\n<span style='background:#e8fff3;padding:4px 8px;border-radius:4px;font-weight:700;'>🏃 Uso recomendado</span><br>\n• <strong>Ritmos:</strong> moderado a progressivo, ideal para treinos de ritmo e meia maratona<br>\n• <strong>Distâncias:</strong> de 10 K a meia maratona, uso diário leve também possível<br>\n• <strong>Pisada/Suporte:</strong> neutra, com estabilidade moderada por rigidez da entressola<br><br>\n\n<span style='background:#fff0f0;padding:4px 8px;border-radius:4px;font-weight:700;'>✅ Prós</span><br>\n• Leve e com boa resposta devido à entressola e hastes rígidas<br>\n• Estável para um “racing flat” graças à entressola firme e contraforte<br>\n• Alta durabilidade de sola, incomum em tênis desse perfil<br><br>\n\n<span style='background:#f0f0f0;padding:4px 8px;border-radius:4px;font-weight:700;'>⚠️ Contras</span><br>\n• Contraforte elevado e rígido pode incomodar calcanhares sensíveis<br>\n• Amortecimento firme não é o mais macio para treinos longos muito confortáveis<br><br>\n\n<em style='color:#0f766e;font-weight:600;'>💡 Ideal para: corredores que buscam um tênis leve e responsivo para treinos mais rápidos e corridas de até meia maratona com estabilidade.</em><br>\n<em style='color:#7c3aed;font-weight:600;'>🚫 Evite se você precisa de: amortecimento macio e conforto em treinos longos para quem tem calcanhar sensível.</em>",
"dateAdded": "2025-08-24",
"views": 0
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
