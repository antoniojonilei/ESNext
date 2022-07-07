//let e const

{
    var a = 2
    let b = 5
    console.log(b)
}

console.log(a)

//template string

const produto = 'Ipad'
console.log(`${produto} é caro!!`)

//destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const pessoa = {
    nome: "Elton",
    age: 26
}

const { age } = pessoa
console.log(age)

const fruits = ['banana', 'pera', 'uva']
const [banana] = fruits

console.log(banana)

function liquidificador({ f2 }) {

    console.log(f2)
}

const frutinhas = {
    f1: "banana",
    f2: "pera",
    f3: "uva"
}

liquidificador(frutinhas)

const [x, ,y] = [1, 2, 3]
console.log(x, y)