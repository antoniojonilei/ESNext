const myNumber = 15.4265

//Trasnforma numero para String
const numberToString = myNumber.toString()
console.log("Numero para String: ", typeof numberToString)

//Retorna número com um numero de casa decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log(`Número com duas casa decimais: ${fixedTwoDecimals}`)

//transforma uma string em float "numeros quebrados"
console.log("String parseada para float: ", parseFloat("13.22"))

//Transforma ums string em inteiro
console.log("String parseada para int: ", parseInt("13.20"))