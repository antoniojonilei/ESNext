//hoisting de variável

function fn() {
    console.log(text) // variavel existe mas nbão foi difinida ainda

    var text = "texto exemplo"

    console.log(text)

}

fn()


function fn2() {
    var text2

    console.log(text2)

    text2 = "segundo texto exemplo"

    console.log(text2)
}

fn2()


//hoisting de função

function fn3() {
    log('Valor aqui!!')

    function log(value) {
        console.log(value)
    } 
}

fn3()