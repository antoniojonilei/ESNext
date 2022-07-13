const array = [1, 2, 3, 4, 5, 6, 7, 8]

function parImpar(item) {
    if(item % 2 == 0){
        console.log(`O número ${item} é par`)
    }else {
        console.log(`O número ${item} é impar`)
    }
}

array.forEach(parImpar)
console.log("-----------------else if----------------------")

const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function divisor(item) {
    if(item % 2 == 0) {
        console.log(`O núemro ${item} é divisível por 2`)
    } else if(item % 3 == 0){
        console.log(`O núemro ${item} é divisível por 3`)
    } else if(item % 5 == 0) {
        console.log(`O núemro ${item} é divisível por 5`)
    } else {
        console.log(`O número ${item} não entra na lista de divisão`)
    }
}

array2.forEach(divisor)
console.log("-----------------Paralelas----------------------------")

function divisor2(item) {
    if(item % 2 == 0) {
        console.log(`O núemro ${item} é divisível por 2`)
    } if(item % 3 == 0){
        console.log(`O núemro ${item} é divisível por 3`)
    } if(item % 5 == 0) {
        console.log(`O núemro ${item} é divisível por 5`)
    }
}

array2.forEach(divisor2)
console.log("=======switch case=======")

const fruits = "banana"

switch(fruits){
    case "banana":
        console.log(fruits + ":" + "R$ 3,50 /kg")
        break
    case "maça":
        console.log(fruits + ":" + "R$ 4,00 /kg")
        break
    case "pera":
        console.log(fruits + ":" + "R$ 8,00 /kg")
        break
    default:
        console.log(fruits + ":" + "Produto não existe na lista")
}