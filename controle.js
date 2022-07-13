//for
const array = ["zero", "one", "two", "three", "four"] 

for(let index = 0; index < array.length; index++) {
    console.log(`${index} : ${array[index]}`)
}

//while
let a = 0
let b = 10

while(a < 30) {
    console.log(a)
    a++
    a += b
}

//do while
let i = 0
do{
    console.log("valor de i: " + i)
    i++    
} while(i <= 4)


//for in
const notas = [6.7, 7.4, 8.7, 7.8]

for(index in notas) {
    console.log(`nota de index: ${index} é ${notas[index]}`)
}

const pessoa = {
    nome: "Jonilei",
    sobrenome: "Silva",
    idade: 31,
    peso: "80kg"
}

for(atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}