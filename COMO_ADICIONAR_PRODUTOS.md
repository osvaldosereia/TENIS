# 📝 Como Adicionar Novos Produtos

## Passo a Passo Simples

### 1. Abra o arquivo `app.js`
No GitHub, clique em `app.js` e depois no botão "Edit" (ícone do lápis).

### 2. Localize o array `products`
Procure pela linha que contém:
```javascript
const products = [
```

### 3. Adicione o novo produto
Copie o template abaixo e cole ANTES do `];` no final do array:

```javascript
,{
    "id": 7, // ⚠️ IMPORTANTE: Use o próximo número sequencial
    "name": "Nome do Tênis Aqui",
    "brand": "Nike", // Nike, Adidas, Asics, New Balance, Puma, Mizuno, Saucony
    "image": "https://images.unsplash.com/photo-XXXXX?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-XXXXX?w=600&q=80", // Imagem 1
        "https://images.unsplash.com/photo-XXXXX?w=600&q=80", // Imagem 2
        "https://images.unsplash.com/photo-XXXXX?w=600&q=80"  // Imagem 3
    ],
    "buyLink": "https://loja-oficial.com/produto",
    "youtubeLink": "https://youtube.com/watch?v=VIDEO_ID",
    "review": "Escreva aqui o review completo do produto. Pode ser um texto longo descrevendo todas as características, tecnologias, conforto, durabilidade, para que tipo de corredor é ideal, etc. Seja bem detalhado!",
    "dateAdded": "2025-08-23", // Data atual no formato YYYY-MM-DD
    "views": 0 // Sempre inicie com 0
}
```

## 🔍 Onde Encontrar Imagens

### Unsplash (Grátis e de Alta Qualidade)
1. Vá para [unsplash.com](https://unsplash.com)
2. Pesquise por "running shoes", "sneakers", "nike shoes", etc.
3. Escolha 3 imagens do mesmo produto (ou similares)
4. Copie o link da imagem e adicione `?w=400&q=80` para imagem principal
5. Para as 3 imagens da galeria, use `?w=600&q=80`

### Exemplo de URLs:
```
Imagem principal: https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80
Imagens galeria: https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80
```

## ⚠️ Pontos Importantes

### ID do Produto
- **SEMPRE** use o próximo número sequencial
- Se o último produto tem ID 6, o próximo deve ser 7
- **NUNCA** repita IDs

### Vírgula
- **SEMPRE** adicione uma vírgula `,` ANTES de `{` quando adicionar um produto
- O último produto do array **NÃO** deve ter vírgula no final

### Marcas Disponíveis
Certifique-se de usar exatamente uma destas marcas:
- Nike
- Adidas  
- Asics
- New Balance
- Puma
- Mizuno
- Saucony

### Links YouTube
- Use links completos: `https://youtube.com/watch?v=VIDEO_ID`
- Certifique-se de que o vídeo existe e é público

## 📋 Exemplo Completo

Aqui está como adicionar o 7º produto (assumindo que já existem 6):

```javascript
const products = [
    // ... produtos existentes ...
    {
        "id": 6,
        "name": "Supernova 2.0",
        "brand": "Adidas",
        // ... resto do produto 6
    }, // ← Note a vírgula aqui
    {
        "id": 7,
        "name": "Air Max 270",
        "brand": "Nike",
        "image": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80",
        "images": [
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
        ],
        "buyLink": "https://nike.com/air-max-270",
        "youtubeLink": "https://youtube.com/watch?v=dQw4w9WgXcQ",
        "review": "O Nike Air Max 270 apresenta a maior unidade Max Air já criada, oferecendo amortecimento excepcional para o dia todo. Desenvolvido para o lifestyle urbano, combina estilo contemporâneo com conforto incomparável. A parte superior em mesh e materiais sintéticos proporciona durabilidade e respirabilidade. Ideal para uso casual e caminhadas urbanas, este tênis se destaca pelo design inovador e pela tecnologia de amortecimento revolucionária.",
        "dateAdded": "2025-08-23",
        "views": 0
    } // ← Último produto SEM vírgula
];
```

## ✅ Verificação Final

Antes de salvar, verifique:
- [ ] ID único e sequencial
- [ ] Todas as aspas estão fechadas
- [ ] Vírgulas nos lugares corretos
- [ ] Data no formato YYYY-MM-DD
- [ ] Links das imagens funcionam
- [ ] Marca está na lista permitida

## 🚀 Publicar

1. Role até o final da página
2. Escreva uma mensagem de commit: "Adicionar produto: Nome do Tênis"
3. Clique em "Commit changes"
4. O site será atualizado automaticamente em poucos minutos!

---

💡 **Dica**: Sempre teste o site após adicionar produtos para garantir que tudo está funcionando corretamente!