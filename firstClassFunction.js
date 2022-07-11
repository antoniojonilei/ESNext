const foo = function asd(){
    console.log("Exemplo de texto")
}

// const foo = () => console.log('arrow exemplo')

foo()

//função como argumento

// function dizOla() {
//     return "Olá, "
// }

// function mensagemOla(funcaoMensagemOla, nome) {
//     console.log(funcaoMensagemOla() + nome)
// }


function falar() {
    return "Ola"
}

function saudacao(funcaoFalar) {
    console.log(funcaoFalar())
}

saudacao(falar)