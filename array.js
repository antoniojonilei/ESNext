const array = [1, 2, 3]
const array2 = new Array(4, 5, 6)
console.log(array, array2)

const array3 = Array.of(7,8,9)
console.log(array3)

const numerosStrings = Array.of(10, 11, 12, "string", "texto")
console.log(numerosStrings)

const array4 = Array(3) //cria um Array com a quantidade indicada de posições vazias
console.log(array4)

const frutas = ["melancia", "banana"]
frutas.push("laranja") //adiciona item no array
console.log(frutas)
frutas.pop() //remove o ultimo item
console.log(frutas)
frutas.unshift("pera") //adiciona no inicio
console.log(frutas)
frutas.shift() //remove do inicion
console.log(frutas)

const zelda = ["zelda", "zeldaTwo", "ALTTP"]
const zelda2 = ["LA", "OoFT", "MM"]

const mergeZelda = zelda.concat(zelda2) //concat - concatena um array 
console.log(mergeZelda)

//slice
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(lista.slice(0, 2))
console.log(lista.slice(2))
console.log(lista.slice(-1))
console.log(lista.slice(-3))

//splice
const lista2 = [10, 11, 12, 13, 14, 15]
lista2.splice(2)
console.log(lista2)
lista2.splice(0, 0, "first") // primeiro seleciona a posição, segundo remove a quantidade indicada, terceiro adiciona
console.log(lista2)

mergeZelda.splice(2, 0, "BetweenWolrds")
console.log(mergeZelda)