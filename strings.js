//Retorna o tamanho de ums string
const textSize = "texto".length
console.log(`Quantidade de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split('x')
console.log(`Array com as posições separadas por delimitador: ${splittedText}`)

//Busca por um valor e substitui por outro
const replacedText = "Texto".replace("Text", 'txeT')
console.log(`Substituição de valor: ${replacedText}`)

//Retorna a "fatia" de um valor
const lastChar = "Texto".slice(-1)
console.log(`Ultima letra de um string: ${lastChar}`)

const allWithoutLastChar = "Texto".slice(0, -1)
console.log(`String da primeira letra menos a última: ${allWithoutLastChar}`)

const secondToEnd = "Texto".slice(1)
console.log(`String da segunda letra até a ultima: ${secondToEnd}`)

//Retorna N Caracteres a partir de uma posição
const twoChars = "Texto".substring(0, 2)
console.log(`Duas primeiras letras: ${twoChars}`)