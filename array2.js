const array = [1, 2, 3, 4, 5]
//primeiro parametro é o valor do item, 
//segundo parametro é o indice
array.forEach(function(value, index){
    console.log(`indice: ${index}, valor: ${value}`)
})

const array2 = [6, 7, 8, [9, 10]]
console.log(array2)

const array3 = array2.flat()
console.log(array3)