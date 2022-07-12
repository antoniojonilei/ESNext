let test = "valor fora do bloco"
console.log(test)

function teste () {
    let test = "valor dentro da função"
    console.log(test)
    if(true) {
        let test = "valor dentro do if"
        console.log(test)
    }
}

teste()

const valor = "const fora do bloco'global'"
console.log(valor)

function teste2() {
    const valor = "const dentro da função"
    console.log(valor)
    if(true) {
        const valor = "const dentro do if"
        console.log(valor)
    }
}

teste2()