// ...spread

const lista1 = [1, 2, 3, 4]
const lista2 = [5, 6, 7, 8]

const combinado = [...lista1, "a", "b", "c", ...lista2]

const clonado = [...combinado]

console.log(combinado)
console.log(clonado)

//dio

const musica = ["verso", "chorus", "ponte"]
const corpo = ["cabeça", "tronco", "membros"]

const tudo = [...musica, "tempo", ...corpo]

console.log(tudo)

//function

function fn(x, y, z) {
    console.log(x, y, z)
}
let param = [1, 2, 3]

fn(...param)