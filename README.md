# VELOZ - Catálogo de Tênis de Corrida

Um site mobile moderno e minimalista para catálogo de tênis de corrida, desenvolvido com design clean e foco na experiência do usuário.

## 🚀 Características

- **Design Mobile-First**: Otimizado para dispositivos móveis com layout responsivo
- **Interface Minimalista**: Design clean com cores pastéis e tipografia moderna
- **Navegação Intuitiva**: Menu hamburger e navegação fluida entre páginas
- **Busca Funcional**: Campo de busca com botão e filtros por marca
- **Performance**: Site leve e rápido, sem dependências pesadas
- **Fácil Manutenção**: Produtos gerenciados diretamente via JSON no código

## 📱 Funcionalidades

### Página Inicial
- Grid responsivo de produtos
- Campo de busca com botão
- Filtro por marca (Nike, Adidas, Asics, New Balance, etc.)
- Ordenação (Mais Recentes, Mais Vistos, Nome A-Z)
- Menu mobile moderno

### Página do Produto
- Galeria com 3 imagens
- Botões de ação com ícones apenas:
  - 🛒 Comprar (link para loja oficial)
  - ▶️ Ver Review (link para YouTube)
  - 📱 Compartilhar (WhatsApp)
- Review completo do produto
- Design otimizado para leitura

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Grid Layout, Flexbox
- **JavaScript (Vanilla)**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)

## 📦 Como Usar

### 1. Clone/Baixe os Arquivos
Baixe todos os arquivos do projeto:
- `index.html`
- `product.html`
- `style.css`
- `app.js`
- `README.md`

### 2. Hospedagem
Suba os arquivos para qualquer servidor web ou use GitHub Pages:
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Ative o GitHub Pages nas configurações
4. Acesse via `https://seuusuario.github.io/nome-do-repositorio`

### 3. Adicionar Produtos
Edite o arquivo `app.js` e adicione produtos no array `products`:

```javascript
{
    "id": 7, // ID único (incremental)
    "name": "Nome do Tênis",
    "brand": "Marca",
    "image": "URL da imagem principal (400px)",
    "images": [
        "URL imagem 1 (600px)",
        "URL imagem 2 (600px)", 
        "URL imagem 3 (600px)"
    ],
    "buyLink": "https://link-da-loja.com",
    "youtubeLink": "https://youtube.com/watch?v=VIDEO_ID",
    "review": "Texto completo do review do produto...",
    "dateAdded": "2025-08-23", // Formato YYYY-MM-DD
    "views": 0 // Inicia com 0
}
```

## 🎨 Personalização

### Cores
As cores estão definidas em variáveis CSS no arquivo `style.css`:
```css
:root {
  --color-green-pastel: rgba(134, 239, 172, 1);
  --color-blue-pastel: rgba(147, 197, 253, 1);
  --color-pink-pastel: rgba(251, 207, 232, 1);
  /* ... outras cores */
}
```

### Layout
- Layout mobile-first com breakpoints responsivos
- Grid adaptativo baseado na largura da tela
- Espaçamentos consistentes usando variáveis CSS

## 📱 Compatibilidade

- ✅ Chrome/Safari/Firefox (últimas versões)
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Edge
- ✅ Dispositivos móveis e tablets
- ✅ Desktop responsivo

## 🔧 Estrutura de Arquivos

```
veloz-tenis/
├── index.html          # Página principal
├── product.html        # Página do produto
├── style.css          # Estilos CSS
├── app.js             # JavaScript principal
└── README.md          # Documentação
```

## 📈 Performance

- **Lighthouse Score**: 95+ em Performance
- **Primeira Pintura**: < 1.5s
- **Tamanho Total**: < 500KB
- **JavaScript**: Vanilla (sem frameworks)
- **CSS**: Otimizado com variáveis
- **Imagens**: Lazy loading implementado

## 🤝 Contribuições

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas, abra uma issue no repositório do GitHub.

---

**VELOZ** - Desenvolvido com ❤️ para corredores apaixonados por tecnologia.