// Os valores das variaveis nunca mudam. Se vc precisa alterar o valor dela, então cria-se uma variavel nova

const user = {
    nome: "Antonio",
    lastName: "Jonilei da Silva"
}

// console.log(`${user.nome} ${user.lastName}`)

function getUserWithFullName(user) {
    return {
        ...user,  //spread operator
        fullName: `${user.nome} ${user.lastName}` 
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)