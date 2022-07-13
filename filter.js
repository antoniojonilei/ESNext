const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Ipad Pro", preco: 4199, fragil: true },
    { nome: "Copo de vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 5.19, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))