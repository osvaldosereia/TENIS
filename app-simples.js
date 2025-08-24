// RunTracker - Versão Simples (SEM ADMIN)
// Todos os produtos vêm do arquivo products.json

let shoesData = [];
let filteredShoes = [];

// Inicializar aplicação
async function initializeApp() {
    try {
        // Carregar produtos do arquivo JSON
        console.log('Carregando produtos...');
        const response = await fetch('products.json');
        
        if (!response.ok) {
            throw new Error('Não foi possível carregar os produtos');
        }
        
        shoesData = await response.json();
        filteredShoes = [...shoesData];
        
        console.log(`${shoesData.length} produtos carregados`);
        
        // Se estivermos na homepage, carregar produtos
        if (document.getElementById('productsGrid')) {
            loadProducts();
            setupFilters();
        }
        
        // Se estivermos na página do produto, carregar produto específico
        if (window.location.pathname.includes('product.html')) {
            loadProductPage();
        }
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        showError('Erro ao carregar produtos. Verifique se o arquivo products.json existe.');
    }
}

// Configurar filtros automaticamente
function setupFilters() {
    // Pegar marcas únicas dos dados
    const brands = [...new Set(shoesData.map(shoe => shoe.marca))].sort();
    const brandList = document.getElementById('brandList');
    
    if (brandList) {
        brandList.innerHTML = `
            <div class="brand-item">
                <input type="radio" id="brand-all" name="brand" value="" checked onchange="applyFilters()">
                <label for="brand-all">Todas as marcas</label>
            </div>
            ${brands.map(brand => `
                <div class="brand-item">
                    <input type="radio" id="brand-${brand.toLowerCase().replace(/\s+/g, '-')}" name="brand" value="${brand}" onchange="applyFilters()">
                    <label for="brand-${brand.toLowerCase().replace(/\s+/g, '-')}">${brand}</label>
                </div>
            `).join('')}
        `;
    }
}

// Navegação
function navigateToHome() {
    window.location.href = 'index.html';
}

function navigateToProduct(productId) {
    // Contar visualização
    trackProductView(productId);
    window.location.href = `product.html?id=${productId}`;
}

// Aplicar filtros
function applyFilters() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const selectedBrand = document.querySelector('input[name="brand"]:checked')?.value || '';
    
    filteredShoes = shoesData.filter(shoe => {
        const matchesSearch = shoe.modelo.toLowerCase().includes(searchTerm) ||
                             shoe.marca.toLowerCase().includes(searchTerm) ||
                             shoe.categoria.toLowerCase().includes(searchTerm);
        const matchesBrand = !selectedBrand || shoe.marca === selectedBrand;
        
        return matchesSearch && matchesBrand;
    });
    
    loadProducts();
}

function clearAllFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('brand-all').checked = true;
    applyFilters();
}

function toggleFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    sidebar.classList.toggle('open');
}

// Carregar produtos na homepage
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!productsGrid) return;
    
    resultsCount.textContent = `${filteredShoes.length} produtos encontrados`;
    
    if (filteredShoes.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                <p>Nenhum produto encontrado com os filtros aplicados.</p>
            </div>
        `;
        return;
    }
    
    // Ordenar por produtos em destaque primeiro
    const sortedShoes = filteredShoes.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.novo && !b.novo) return -1;
        if (!a.novo && b.novo) return 1;
        return 0;
    });
    
    productsGrid.innerHTML = sortedShoes.map(shoe => `
        <div class="product-card" onclick="navigateToProduct(${shoe.id})">
            <div class="product-card-image">
                <img src="${shoe.images[0]}" alt="${shoe.modelo}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop'">
                ${shoe.novo ? '<span class="badge badge--new">Novo</span>' : ''}
                ${shoe.featured ? '<span class="badge badge--featured">Destaque</span>' : ''}
            </div>
            <div class="product-card-content">
                <h3 class="product-card-title">${shoe.modelo}</h3>
                <p class="product-card-brand">${shoe.marca}</p>
                <div class="product-card-meta">
                    <span>${shoe.data_lancamento}</span>
                    <span>${getProductViews(shoe.id)} views</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Carregar página do produto
function loadProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = shoesData.find(shoe => shoe.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Atualizar título da página
    document.title = `${product.modelo} - RunTracker`;
    
    // Preencher informações
    document.getElementById('productTitle').textContent = product.modelo;
    document.getElementById('productBrand').textContent = product.marca;
    
    // Carregar imagens
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = product.images[0];
    mainImage.alt = product.modelo;
    
    thumbnails.forEach((thumb, index) => {
        if (product.images[index]) {
            thumb.src = product.images[index];
            thumb.alt = `${product.modelo} - Imagem ${index + 1}`;
            thumb.style.display = 'block';
        } else {
            thumb.style.display = 'none';
        }
    });
    
    // Configurar botões
    document.getElementById('buyButton').onclick = () => window.open(product.comprar_url, '_blank');
    document.getElementById('youtubeButton').onclick = () => window.open(product.youtube_url, '_blank');
    document.getElementById('whatsappButton').onclick = () => {
        const message = `Olha esse tênis: ${product.modelo} da ${product.marca}! ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };
    
    // Carregar especificações
    loadProductSpecs(product);
    
    // Carregar review
    document.getElementById('reviewContent').innerHTML = product.review_text;
}

function loadProductSpecs(product) {
    const specsTable = document.getElementById('specsTable');
    specsTable.innerHTML = `
        <tr><th>Amortecimento</th><td>${product.amortecimento}</td></tr>
        <tr><th>Peso</th><td>${product.peso}</td></tr>
        <tr><th>Drop</th><td>${product.drop}</td></tr>
        <tr><th>Tipo de Uso</th><td>${product.tipo_uso}</td></tr>
        <tr><th>Estabilidade</th><td>${product.estabilidade}</td></tr>
        <tr><th>Tecnologias</th><td>${product.tecnologias}</td></tr>
        <tr><th>Sustentabilidade</th><td>${product.sustentabilidade}</td></tr>
        <tr><th>Numeração</th><td>${product.numeracao}</td></tr>
        <tr><th>Duração Esperada</th><td>${product.duracao_esperada}</td></tr>
        <tr><th>Data de Lançamento</th><td>${product.data_lancamento}</td></tr>
    `;
}

function changeMainImage(index) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = shoesData.find(shoe => shoe.id === productId);
    
    if (product && product.images[index]) {
        document.getElementById('mainImage').src = product.images[index];
        
        // Atualizar thumbnail ativo
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        document.querySelector(`[data-index="${index}"]`)?.classList.add('active');
    }
}

// Sistema simples de tracking
function trackProductView(productId) {
    const views = JSON.parse(localStorage.getItem('runtracker_views') || '{}');
    views[productId] = (views[productId] || 0) + 1;
    localStorage.setItem('runtracker_views', JSON.stringify(views));
}

function getProductViews(productId) {
    const views = JSON.parse(localStorage.getItem('runtracker_views') || '{}');
    return views[productId] || 0;
}

// Mostrar erro
function showError(message) {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <div style="background: #fee; border: 1px solid #fcc; color: #c33; padding: 1rem; border-radius: 0.5rem;">
                    ${message}
                </div>
            </div>
        `;
    }
}

// Busca com delay
let searchTimeout;
function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(applyFilters, 300);
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada, inicializando app...');
    initializeApp();
    
    // Configurar busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
});