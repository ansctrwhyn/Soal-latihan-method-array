// declare dulu, baru assign
// let firstName
// firstName = "Adam"

// declare sekaligus assign
// let lastName = "Fadil"
// let fullName = `${firstName} ${lastName}`

// console.log(fullName);

// let arrNums = [1, 2, 3, 4, 5]
// console.log(arrNums.splice(2,1));

let collectionNumber = [1, 2, 3, 4, 5]

// let CollectionGanjil = collectionNumber.filter(function(el){
//     return el % 2 == 1
// })

// console.log(CollectionGanjil);

let CollectionGenap = collectionNumber.filter(function(el){
    return el % 2 == 0
})

console.log(CollectionGenap);