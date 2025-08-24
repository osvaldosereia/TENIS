# 📝 Como Adicionar Novos Produtos - Versão 2.0

## ⭐ Nova Estrutura de Produto

Agora cada produto suporta:
- **6 imagens** para galeria completa
- **5 links de reviews do YouTube**
- **5 links de sites especializados**
- **5 links para comprar**
- **Botão WhatsApp** automático para compartilhamento

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
    "id": 8, // ⚠️ IMPORTANTE: Use o próximo número sequencial
    "name": "Nome do Tênis Aqui",
    "brand": "Nike", // Nike, Adidas, Asics, New Balance, Puma, Mizuno, Saucony
    "image": "https://images.unsplash.com/photo-XXXXX?w=600&q=80", // Imagem principal
    "images": [ // 6 imagens para galeria
        "https://images.unsplash.com/photo-1?w=600&q=80",
        "https://images.unsplash.com/photo-2?w=600&q=80",
        "https://images.unsplash.com/photo-3?w=600&q=80",
        "https://images.unsplash.com/photo-4?w=600&q=80",
        "https://images.unsplash.com/photo-5?w=600&q=80",
        "https://images.unsplash.com/photo-6?w=600&q=80"
    ],
    "youtubeReviews": [ // 5 reviews do YouTube
        { "name": "Canal do Corredor", "url": "https://youtube.com/watch?v=VIDEO_ID1" },
        { "name": "Tênis e Corrida", "url": "https://youtube.com/watch?v=VIDEO_ID2" },
        { "name": "Running Brasil", "url": "https://youtube.com/watch?v=VIDEO_ID3" },
        { "name": "Maratona Review", "url": "https://youtube.com/watch?v=VIDEO_ID4" },
        { "name": "Correr é Vida", "url": "https://youtube.com/watch?v=VIDEO_ID5" }
    ],
    "siteReviews": [ // 5 sites especializados
        { "name": "RunnerWorld BR", "url": "https://runnersworld.com.br" },
        { "name": "O2 Por Minuto", "url": "https://o2porminuto.com.br" },
        { "name": "Ativo", "url": "https://ativo.com" },
        { "name": "EuAtleta", "url": "https://euatleta.globo.com" },
        { "name": "Tênis Certo", "url": "https://teniscerto.com.br" }
    ],
    "buyLinks": [ // 5 lojas para comprar
        { "name": "Loja Oficial", "url": "https://marca-oficial.com" },
        { "name": "Netshoes", "url": "https://netshoes.com.br" },
        { "name": "Centauro", "url": "https://centauro.com.br" },
        { "name": "Amazon", "url": "https://amazon.com.br" },
        { "name": "Dafiti", "url": "https://dafiti.com.br" }
    ],
    "review": "Escreva aqui o review completo do produto. Pode usar HTML básico como <strong>, <em>, <br>, etc. Seja bem detalhado sobre características, tecnologias, conforto, durabilidade, para que tipo de corredor é ideal, etc.",
    "dateAdded": "2025-08-24", // Data atual no formato YYYY-MM-DD
    "views": 0 // Sempre inicie com 0
}
```

## 🔍 Onde Encontrar Conteúdo

### Imagens (Unsplash - Gratuitas)
1. Vá para [unsplash.com](https://unsplash.com)
2. Pesquise por "running shoes", "sneakers", "nike shoes", etc.
3. Escolha 6 imagens diferentes do mesmo produto (ou similares)
4. Para cada imagem, copie o link e adicione `?w=600&q=80`

**Exemplo de URLs:**
```
https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80
https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80
```

### Reviews do YouTube
1. Pesquise no YouTube por reviews do tênis específico
2. Encontre 5 canais diferentes que fizeram reviews
3. Copie o nome do canal e o link do vídeo
4. Use o formato: `{ "name": "Nome do Canal", "url": "link-completo" }`

**Canais populares de tênis no Brasil:**
- Canal do Corredor
- Tênis e Corrida  
- Running Brasil
- Maratona Review
- Correr é Vida

### Sites Especializados
**Exemplos de sites confiáveis:**
- RunnerWorld Brasil
- O2 Por Minuto
- Ativo.com
- EuAtleta (Globo)
- Tênis Certo
- Solereview (inglês)
- Believe in the Run (inglês)
- Running Magazine
- Gear Junkie

### Lojas para Comprar
**Sempre inclua:**
- Loja oficial da marca (Nike, Adidas, etc.)
- Netshoes
- Centauro  
- Amazon Brasil
- Dafiti/Kanui/Zattini
- Decathlon
- Sport Zone

## ⚠️ Pontos Importantes

### ID do Produto
- **SEMPRE** use o próximo número sequencial
- Se o último produto tem ID 7, o próximo deve ser 8
- **NUNCA** repita IDs

### Vírgula `,`
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

### Links
- Use sempre links completos (com https://)
- Teste os links antes de adicionar
- Para YouTube: `https://youtube.com/watch?v=VIDEO_ID`
- Para sites: `https://site-completo.com`

### Review
- Pode usar HTML básico: `<strong>`, `<em>`, `<br>`, etc.
- Seja detalhado sobre características técnicas
- Mencione para que tipo de corredor é ideal
- Inclua prós e contras se possível

## 📋 Exemplo Completo

```javascript
const products = [
    // ... produtos existentes ...
    {
        "id": 3,
        "name": "Gel-Nimbus 25",
        "brand": "Asics",
        // ... resto do produto 3
    }, // ← Note a vírgula aqui
    {
        "id": 4,
        "name": "Air Max 270",
        "brand": "Nike",
        "image": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80",
        "images": [
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
            "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80"
        ],
        "youtubeReviews": [
            { "name": "Nike Review BR", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Air Max Test", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Lifestyle Sneakers", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Urban Runner", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { "name": "Tênis Casual", "url": "https://youtube.com/watch?v=dQw4w9WgXcQ" }
        ],
        "siteReviews": [
            { "name": "Nike.com", "url": "https://nike.com.br/air-max-270" },
            { "name": "Sneaker News", "url": "https://sneakernews.com" },
            { "name": "Hypebeast", "url": "https://hypebeast.com" },
            { "name": "Complex", "url": "https://complex.com" },
            { "name": "Sole Collector", "url": "https://solecollector.com" }
        ],
        "buyLinks": [
            { "name": "Nike Oficial", "url": "https://nike.com.br/air-max-270" },
            { "name": "Netshoes", "url": "https://netshoes.com.br" },
            { "name": "Centauro", "url": "https://centauro.com.br" },
            { "name": "Amazon", "url": "https://amazon.com.br" },
            { "name": "Dafiti", "url": "https://dafiti.com.br" }
        ],
        "review": "O <strong>Nike Air Max 270</strong> apresenta a maior unidade Max Air já criada, oferecendo amortecimento excepcional para o dia todo.<br><br><strong>Características:</strong><br>• Unidade Max Air de 270 graus<br>• Cabedal em mesh e materiais sintéticos<br>• Design inspirado no Air Max 93 e 180<br><br><em>Ideal para uso casual e lifestyle urbano!</em>",
        "dateAdded": "2025-08-24",
        "views": 0
    } // ← Último produto SEM vírgula
];
```

## ✅ Verificação Final

Antes de salvar, verifique:
- [ ] ID único e sequencial
- [ ] 6 imagens na galeria
- [ ] 5 links para cada categoria (YouTube, Sites, Comprar)
- [ ] Todas as aspas estão fechadas
- [ ] Vírgulas nos lugares corretos
- [ ] Data no formato YYYY-MM-DD
- [ ] Links funcionam
- [ ] Marca está na lista permitida

## 🚀 Publicar

1. Role até o final da página no GitHub
2. Escreva uma mensagem de commit: "Adicionar produto: Nome do Tênis"
3. Clique em "Commit changes"
4. O site será atualizado automaticamente em poucos minutos!

## 🎯 Resultado Final

Com a nova estrutura, cada produto terá:
- ✅ **Foto principal grande** (400px altura)
- ✅ **6 fotos na galeria** navegáveis
- ✅ **Botão WhatsApp** discreto para compartilhar
- ✅ **Nome e marca** com badge moderno
- ✅ **15 links organizados** (5 por categoria)
- ✅ **Layout responsivo** para mobile e desktop

---

💡 **Dica**: Sempre teste o site após adicionar produtos para garantir que tudo está funcionando corretamente com o novo layout!

🎉 **Nova versão 2.0**: Agora com layout moderno, 6 fotos na galeria e links organizados em categorias!
