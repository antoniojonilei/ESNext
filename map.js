//map#1

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const maisDez = e => e + 10
const triplo = e => e * 3
const paraDinhiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(maisDez).map(triplo).map(paraDinhiro)

console.log(resultado)

//map#2

const carrinho = [
    '{"nome": "Borracha", "preco": 13.45}',
    '{"nome": "Caderno", "preco": 12.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar apenas os precos 

const paraJson = json => JSON.parse(json)
const justPrice = produto => `R$: ${produto.preco.toFixed(2)}`

const precos = carrinho.map(paraJson).map(justPrice)

console.log(precos)