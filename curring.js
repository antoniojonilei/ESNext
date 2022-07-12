// function soma(a, b) {
//     console.log(`a soma é: ${a + b}`)
// }

// soma(2, 2)
// soma(2, 3)
// soma(2, 4)
// soma(2, 5)

function soma(a) {
    return function(b) {
        return console.log(`a soma é: ${a + b}`)
    }
}

const soma2 = soma(2)

soma2(2)
soma2(3)
soma2(4)
soma2(5)