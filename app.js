// Initial data and configuration
const ADMIN_PASSWORD = 'admin123';

const INITIAL_SHOES_DATA = [
  {
    "id": 1,
    "modelo": "Nike Vomero Plus",
    "marca": "Nike",
    "categoria": "Max Cushion",
    "amortecimento": "ZoomX foam full-length stack",
    "peso": "335g (masculino) / 275g (feminino)",
    "drop": "10 mm",
    "tipo_uso": "Max cushion, ultra comfort",
    "estabilidade": "Neutro com base larga",
    "tecnologias": "ZoomX foam stack, Rocker geometry, Wide base",
    "sustentabilidade": "Move to Zero premium line",
    "numeracao": "Numeração verdadeira",
    "duracao_esperada": "700-900 km",
    "data_lancamento": "Agosto 2025",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop"
    ],
    "comprar_url": "https://www.nike.com.br/tenis-vomero-plus",
    "youtube_url": "https://youtube.com/watch?v=vomero-plus-review",
    "review_text": "<h3>Análise Completa</h3><p>O <strong>Nike Vomero Plus (2025)</strong> representa a aposta máxima da Nike em conforto e tecnologia para treinos longos.</p><p>O destaque absoluto é o <em>amortecimento ZoomX de grande volume</em>, equilibrado por uma base larga e geometria rocker, proporcionando transições suaves, estabilidade admirável e resposta satisfatória para um tênis ultra cushioned.</p><p>A experiência reforça que o Vomero Plus entrega:</p><ul><li>Excelente ajuste</li><li>Muito conforto na região do tornozelo</li><li>Suporte para quilometragem alta</li><li>Proteção e estabilidade</li></ul><p>Surpreende por permitir arrancadas em ritmos mais baixos graças ao formato rocker. É uma escolha certeira para maratonistas ou atletas de perfil 'rodador'.</p>",
    "views": 0
  },
  {
    "id": 2,
    "modelo": "Nike Structure 26",
    "marca": "Nike",
    "categoria": "Stability",
    "amortecimento": "ReactX foam full-length",
    "peso": "353g (masculino) / 285g (feminino)",
    "drop": "10 mm",
    "tipo_uso": "Estabilidade avançada, pronadores",
    "estabilidade": "Sistema de suporte midfoot",
    "tecnologias": "ReactX foam, Midfoot support system",
    "sustentabilidade": "ReactX 43% menor pegada carbono",
    "numeracao": "Numeração verdadeira",
    "duracao_esperada": "700-900 km",
    "data_lancamento": "Julho 2025",
    "images": [
      "https://images.unsplash.com/photo-1551107696-a4bb99fa27d3?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552066344-2464c1135c32?w=500&h=400&fit=crop"
    ],
    "comprar_url": "https://www.nike.com.br/tenis-structure-26",
    "youtube_url": "https://youtube.com/watch?v=structure-26-review",
    "review_text": "<h3>Revolução em Estabilidade</h3><p>O <strong>Nike Structure 26</strong> revoluciona a categoria de tênis de estabilidade com sua nova tecnologia ReactX foam.</p><p>Este modelo oferece <em>suporte excepcional para pronadores</em> sem comprometer o conforto. O sistema de suporte midfoot redesenhado proporciona estabilidade precisa.</p><p><strong>Principais características:</strong></p><ul><li>ReactX foam sustentável</li><li>Sistema de suporte midfoot</li><li>Controle de movimento preciso</li><li>Performance técnica</li></ul><p>Ideal para corredores que precisam de controle de movimento, combinando performance com consciência ambiental.</p>",
    "views": 0
  },
  {
    "id": 3,
    "modelo": "Nike Pegasus Premium",
    "marca": "Nike",
    "categoria": "Daily Trainer",
    "amortecimento": "Triple stack: ReactX + Air Zoom + ZoomX",
    "peso": "285g (masculino) / 240g (feminino)",
    "drop": "10 mm",
    "tipo_uso": "Premium daily trainer, powered runs",
    "estabilidade": "Neutro responsivo",
    "tecnologias": "3-layer cushioning, Full Air Zoom unit",
    "sustentabilidade": "Move to Zero premium materials",
    "numeracao": "Numeração verdadeira",
    "duracao_esperada": "600-800 km",
    "data_lancamento": "Agosto 2025",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=400&fit=crop"
    ],
    "comprar_url": "https://www.nike.com.br/tenis-pegasus-premium",
    "youtube_url": "https://youtube.com/watch?v=pegasus-premium-review",
    "review_text": "<h3>O Pegasus Evoluído</h3><p>O <strong>Nike Pegasus Premium</strong> eleva o clássico Pegasus a um novo patamar com sua inovadora <em>tecnologia de três camadas de amortecimento</em>.</p><p>A combinação de ReactX, Air Zoom e ZoomX cria uma experiência de corrida única:</p><ul><li>Conforto excepcional</li><li>Responsividade superior</li><li>Versatilidade para todos os tipos de treino</li><li>Confiabilidade comprovada</li></ul><p>Este tênis versátil se adapta perfeitamente desde treinos regenerativos até sessões de velocidade, mantendo sempre a confiabilidade que tornou a linha Pegasus uma das mais respeitadas do mundo.</p>",
    "views": 0
  },
  {
    "id": 4,
    "modelo": "Nike Vaporfly 4",
    "marca": "Nike",
    "categoria": "Racing",
    "amortecimento": "ZoomX foam otimizado",
    "peso": "166g (masculino) / 139g (feminino)",
    "drop": "6 mm",
    "tipo_uso": "Racing 5K-meia maratona",
    "estabilidade": "Neutro racing",
    "tecnologias": "ZoomX foam, Carbon Flyplate",
    "sustentabilidade": "Performance sustainable materials",
    "numeracao": "Numeração justa - meio número acima",
    "duracao_esperada": "300-500 km",
    "data_lancamento": "Março 2025",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=400&fit=crop"
    ],
    "comprar_url": "https://www.nike.com.br/tenis-vaporfly-4",
    "youtube_url": "https://youtube.com/watch?v=vaporfly-4-review",
    "review_text": "<h3>A Lenda Continua</h3><p>O <strong>Nike Vaporfly 4</strong> continua a linhagem dos tênis que <em>revolucionaram o mundo da corrida de elite</em>.</p><p>Com espuma ZoomX otimizada e placa de carbono Flyplate, este modelo oferece:</p><ul><li>Retorno de energia excepcional</li><li>Eficiência de corrida incomparável</li><li>Sensação de 'voar' sobre o asfalto</li><li>Leveza sem perder durabilidade</li></ul><p>Projetado para competições de <strong>5K a meia maratona</strong>, é a escolha de atletas que buscam quebrar recordes pessoais.</p>",
    "views": 0
  },
  {
    "id": 5,
    "modelo": "Nike Alphafly 3",
    "marca": "Nike",
    "categoria": "Racing",
    "amortecimento": "ZoomX foam premium",
    "peso": "201g (masculino) / 170g (feminino)",
    "drop": "8 mm",
    "tipo_uso": "Maratona e ultra performance",
    "estabilidade": "Neutro racing estável",
    "tecnologias": "ZoomX foam, FlyPlate carbon, Air Zoom pods",
    "sustentabilidade": "Premium eco materials",
    "numeracao": "Numeração justa",
    "duracao_esperada": "400-600 km",
    "data_lancamento": "Fevereiro 2025",
    "images": [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=500&h=400&fit=crop"
    ],
    "comprar_url": "https://www.nike.com.br/tenis-alphafly-3",
    "youtube_url": "https://youtube.com/watch?v=alphafly-3-review",
    "review_text": "<h3>O Ápice da Tecnologia</h3><p>O <strong>Nike Alphafly 3</strong> representa o ápice da tecnologia Nike para <em>maratonas e ultramaratonas</em>.</p><p>Equipado com tecnologias revolucionárias:</p><ul><li>Espuma ZoomX premium</li><li>Placa FlyPlate de carbono</li><li>Unidades Air Zoom duplas</li><li>Propulsão excepcional</li></ul><p>Desenvolvido com base no feedback de <strong>atletas de elite</strong>, o Alphafly 3 proporciona estabilidade superior em longas distâncias, mantendo o retorno de energia que tornou a linha famosa.</p><p>É o tênis escolhido por maratonistas profissionais e amadores que buscam <em>performance máxima</em> em provas longas.</p>",
    "views": 0
  }
];

// Global state
let shoesData = [];
let filteredShoes = [];
let currentEditId = null;
let csvData = null;

// Initialize app
function initializeApp() {
  // Load data from localStorage or use initial data
  const savedShoes = localStorage.getItem('runtracker_shoes');
  if (savedShoes) {
    shoesData = JSON.parse(savedShoes);
  } else {
    shoesData = [...INITIAL_SHOES_DATA];
    saveData();
  }
  
  filteredShoes = [...shoesData];
  
  // Track visit
  trackVisit();
}

// Save data to localStorage
function saveData() {
  localStorage.setItem('runtracker_shoes', JSON.stringify(shoesData));
}

// Navigation functions
function navigateToHome() {
  window.location.href = 'index.html';
}

function navigateToAdmin() {
  window.location.href = 'admin.html';
}

function navigateToProduct(productId) {
  // Track product view
  trackProductView(productId);
  window.location.href = `product.html?id=${productId}`;
}

// Filter functions
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
  
  if (document.getElementById('productsGrid')) {
    loadProducts();
  }
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

// Product loading functions
function loadProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const resultsCount = document.getElementById('resultsCount');
  
  if (!productsGrid) return;
  
  resultsCount.textContent = `${filteredShoes.length} produtos encontrados`;
  
  if (filteredShoes.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <p>Nenhum produto encontrado com os filtros aplicados.</p>
      </div>
    `;
    return;
  }
  
  productsGrid.innerHTML = filteredShoes.map(shoe => `
    <div class="product-card" onclick="navigateToProduct(${shoe.id})">
      <div class="product-card-image">
        <img src="${shoe.images[0]}" alt="${shoe.modelo}" loading="lazy">
      </div>
      <div class="product-card-content">
        <h3 class="product-card-title">${shoe.modelo}</h3>
        <p class="product-card-brand">${shoe.marca}</p>
        <div class="product-card-meta">
          <span>Lançamento: ${shoe.data_lancamento}</span>
          <span>${shoe.views} visualizações</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Product page functions
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
  
  // Update page content
  document.getElementById('productTitle').textContent = product.modelo;
  document.getElementById('productBrand').textContent = product.marca;
  
  // Load images
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  mainImage.src = product.images[0];
  mainImage.alt = product.modelo;
  
  thumbnails.forEach((thumb, index) => {
    thumb.src = product.images[index];
    thumb.alt = `${product.modelo} - Imagem ${index + 1}`;
  });
  
  // Setup action buttons
  document.getElementById('buyButton').onclick = () => window.open(product.comprar_url, '_blank');
  document.getElementById('youtubeButton').onclick = () => window.open(product.youtube_url, '_blank');
  document.getElementById('whatsappButton').onclick = () => {
    const message = `Olha que tênis incrível: ${product.modelo} da ${product.marca}! ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  // Load specifications
  loadProductSpecs(product);
  
  // Load review
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
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    document.querySelector(`[data-index="${index}"]`).classList.add('active');
  }
}

// Admin functions
function checkAdminAuth() {
  const isLoggedIn = localStorage.getItem('runtracker_admin_logged') === 'true';
  
  if (isLoggedIn) {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('adminContent').style.display = 'block';
    loadAdminData();
  } else {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('adminContent').style.display = 'none';
  }
}

function handleLogin(event) {
  event.preventDefault();
  const password = document.getElementById('passwordInput').value;
  
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem('runtracker_admin_logged', 'true');
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('adminContent').style.display = 'block';
    loadAdminData();
  } else {
    alert('Senha incorreta!');
  }
}

function logout() {
  localStorage.removeItem('runtracker_admin_logged');
  window.location.reload();
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  
  // Load tab-specific data
  if (tabName === 'products') {
    loadProductsTable();
  }
}

function loadAdminData() {
  // Load dashboard stats
  const totalProducts = shoesData.length;
  const totalViews = shoesData.reduce((sum, shoe) => sum + shoe.views, 0);
  const avgViews = totalProducts > 0 ? Math.round(totalViews / totalProducts) : 0;
  const topProduct = shoesData.reduce((top, shoe) => shoe.views > top.views ? shoe : top, shoesData[0]);
  
  document.getElementById('totalProducts').textContent = totalProducts;
  document.getElementById('totalViews').textContent = totalViews;
  document.getElementById('avgViews').textContent = avgViews;
  document.getElementById('topProduct').textContent = topProduct ? topProduct.modelo : '-';
  
  // Load products table
  loadProductsTable();
}

function loadProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = shoesData.map(shoe => `
    <tr>
      <td><img src="${shoe.images[0]}" alt="${shoe.modelo}" class="product-image-small"></td>
      <td>${shoe.modelo}</td>
      <td>${shoe.marca}</td>
      <td>${shoe.views}</td>
      <td>
        <button class="btn btn--sm btn--primary" onclick="editProduct(${shoe.id})">Gerenciar</button>
        <button class="btn btn--sm btn--error" onclick="deleteProduct(${shoe.id})">Excluir</button>
      </td>
    </tr>
  `).join('');
}

function editProduct(productId) {
  const product = shoesData.find(shoe => shoe.id === productId);
  if (!product) return;
  
  currentEditId = productId;
  
  // Fill form
  document.getElementById('editProductId').value = productId;
  document.getElementById('editNome').value = product.modelo;
  document.getElementById('editMarca').value = product.marca;
  document.getElementById('editImagem1').value = product.images[0];
  document.getElementById('editImagem2').value = product.images[1];
  document.getElementById('editImagem3').value = product.images[2];
  document.getElementById('editComprarUrl').value = product.comprar_url;
  document.getElementById('editYoutubeUrl').value = product.youtube_url;
  document.getElementById('editReview').value = product.review_text;
  
  // Show form
  document.getElementById('editForm').style.display = 'block';
  document.getElementById('productsTable').style.display = 'none';
}

function saveProduct(event) {
  event.preventDefault();
  
  const productId = parseInt(document.getElementById('editProductId').value);
  const productIndex = shoesData.findIndex(shoe => shoe.id === productId);
  
  if (productIndex === -1) return;
  
  // Update product
  shoesData[productIndex] = {
    ...shoesData[productIndex],
    modelo: document.getElementById('editNome').value,
    marca: document.getElementById('editMarca').value,
    images: [
      document.getElementById('editImagem1').value,
      document.getElementById('editImagem2').value,
      document.getElementById('editImagem3').value
    ],
    comprar_url: document.getElementById('editComprarUrl').value,
    youtube_url: document.getElementById('editYoutubeUrl').value,
    review_text: document.getElementById('editReview').value
  };
  
  saveData();
  cancelEdit();
  loadProductsTable();
  loadAdminData();
  
  alert('Produto salvo com sucesso!');
}

function cancelEdit() {
  document.getElementById('editForm').style.display = 'none';
  document.getElementById('productsTable').style.display = 'block';
  currentEditId = null;
}

function deleteProduct(productId) {
  if (confirm('Tem certeza que deseja excluir este produto?')) {
    shoesData = shoesData.filter(shoe => shoe.id !== productId);
    saveData();
    loadProductsTable();
    loadAdminData();
  }
}

// CSV functions
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    parseCSV(text);
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length < 2) {
    alert('Arquivo CSV deve ter pelo menos um cabeçalho e uma linha de dados.');
    return;
  }
  
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    return row;
  });
  
  csvData = rows;
  showPreview(headers, rows);
}

function showPreview(headers, rows) {
  const previewHeader = document.getElementById('previewHeader');
  const previewBody = document.getElementById('previewBody');
  
  // Show headers
  previewHeader.innerHTML = `<tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
  
  // Show first 5 rows
  const previewRows = rows.slice(0, 5);
  previewBody.innerHTML = previewRows.map(row => 
    `<tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>`
  ).join('');
  
  document.getElementById('previewTable').style.display = 'block';
}

function importCSV() {
  if (!csvData) return;
  
  let imported = 0;
  const newShoes = [];
  
  csvData.forEach(row => {
    // Generate new ID
    const newId = Math.max(...shoesData.map(s => s.id)) + 1 + imported;
    
    const shoe = {
      id: newId,
      modelo: row.modelo || row.nome || 'Produto Importado',
      marca: row.marca || 'Nike',
      categoria: row.categoria || 'Daily Trainer',
      amortecimento: row.amortecimento || 'N/A',
      peso: row.peso || 'N/A',
      drop: row.drop || 'N/A',
      tipo_uso: row.tipo_uso || 'Uso geral',
      estabilidade: row.estabilidade || 'Neutro',
      tecnologias: row.tecnologias || 'N/A',
      sustentabilidade: row.sustentabilidade || 'N/A',
      numeracao: row.numeracao || 'Numeração verdadeira',
      duracao_esperada: row.duracao_esperada || 'N/A',
      data_lancamento: row.data_lancamento || '2025',
      images: [
        row.imagem1 || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop',
        row.imagem2 || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop',
        row.imagem3 || 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop'
      ],
      comprar_url: row.comprar_url || 'https://www.nike.com.br',
      youtube_url: row.youtube_url || 'https://www.youtube.com',
      review_text: row.review_text || '<p>Review em breve...</p>',
      views: 0
    };
    
    newShoes.push(shoe);
    imported++;
  });
  
  shoesData.push(...newShoes);
  filteredShoes = [...shoesData];
  saveData();
  
  cancelPreview();
  loadAdminData();
  
  alert(`${imported} produtos importados com sucesso!`);
}

function cancelPreview() {
  document.getElementById('previewTable').style.display = 'none';
  document.getElementById('csvFile').value = '';
  csvData = null;
}

// Tracking functions
function trackVisit() {
  const visits = JSON.parse(localStorage.getItem('runtracker_visits') || '[]');
  visits.push({
    timestamp: Date.now(),
    page: window.location.pathname
  });
  localStorage.setItem('runtracker_visits', JSON.stringify(visits));
}

function trackProductView(productId) {
  const productIndex = shoesData.findIndex(shoe => shoe.id === productId);
  if (productIndex !== -1) {
    shoesData[productIndex].views++;
    saveData();
  }
}
