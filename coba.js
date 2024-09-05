// declare dulu, baru assign
// let firstName
// firstName = "Adam"

// declare sekaligus assign
// let lastName = "Fadil"
// let fullName = `${firstName} ${lastName}`

// console.log(fullName);

// let arrNums = [1, 2, 3, 4, 5]
// console.log(arrNums.splice(2,1));

// let collectionNumber = [1, 2, 3, 4, 5]

// let CollectionGanjil = collectionNumber.filter(function(el){
//     return el % 2 == 1
// })

// console.log(CollectionGanjil);

// let CollectionGenap = collectionNumber.filter(function(el){
//     return el % 2 == 0
// })

// console.log(CollectionGenap);

// let carInnova = {
//     "merk": "Toyota",
//     "year": "2024",
//     "type": "G",
//     "color": "black",
//     "cc": 2000,
//     "transmition": "matic",
//     listSpeaker: ["bose", "venom", "jbl"], //key bisa tanpa kutip juga
//     typeOption: [
//         {
//             type: "V",
//             price: 1000000
//         },
//         {
//             type: "G",
//             price: 2000000
//         },
//         {
//             type: "X",
//             price: 3000000
//         },
//         {
//             type: "HYBRID",
//             price: 4000000
//         },
//         {
//             type: "GR",
//             price: 5000000
//         }   
//     ],
//     seatType: {
//         material: {
//             leather: {
//                 type: ["horse", "frog"],
//                 since: 1800
//             }
//         }
//     }
// }

// console.log(carInnova.color);

// let another = carInnova["transmition"]
// console.log(another);

// let keySelect = "color"
// console.log(carInnova[keySelect])

// let x = carInnova.typeOption[4]
// console.log(x)

// const selectLeather = "leather"
// let another = carInnova["seatType"]["material"][selectLeather].type[0]
// console.log(another)

// for (const key in carInnova){
//     console.log(key, "==> this key")
// }

// const typeInnova = carInnova["seatType"]["material"]["leather"]["type"].find(el => el === "horse");
// console.log(typeInnova)

// let cekType = carInnova.typeOption
// console.log(cekType.find(el => {
//     return el.type === "G"
// }))

// const typeInnova = carInnova.typeOption.find(el => el.type === "G");
// console.log(typeInnova)

// carInnova.seatType.material.leather.type.push("cow")
// console.log(carInnova)

// let student = {}
// student.name = "anisa"
// student["class"] = "Hacktiv8"
// console.log(student)

// function greeting(inputUser){
//     console.log("Hello my name is " + inputUser);
// }

// const greeting = (inputUser) => {
//     return "Hello my name is", inputUser;
// }

// const greeting2 = (inputUser = "Anisa") => {
//     return "Hello my name is", inputUser;
// }

// greeting("Anisa");
// let temp = greeting2()
// console.log(temp)

// let collectionAge = [20, 23, 28, 30]
// let result = collectionAge.filter(el => el >= 28)
// console.log(result)

// (function () {
//     let x = "Hello";
// })();

// let { transmition } = carInnova  //destructuring => tidak perlu menulis carInnova.transmition berulangkali
// console.log(transmition);

// let { transmition: transmitionInnova, merk: merkInnova } = carInnova
// console.log(transmitionInnova);
// console.log(merkInnova);

// console.log(this)

// let person = {
//     name: "Anisa",
//     age: 20,
//     increment: function(){
//         this.age += 1
//     }
// }

// person.increment();
// console.log(person.age);

let goToMarket = (uang, barang, harga, callback) => {
    if (uang > harga){
        let kembalianUang = uang - harga;
        console.log("Berhasil beli " + barang);
        callback(kembalianUang);
    }
}

let shopping = (userMoney) => {
    goToMarket(userMoney, "Shampoo", 20000, (uang) => {
        console.log(uang, "==> sisa uang")
    })
} 

// let shopping = (userMoney) => {
//     goToMarket(userMoney, "Shampoo", 20000, (uang) => {
//         goToMarket(uang, "Sabun", 30000, (uang) => {
//             console.log(uang, "==> sisa uang")
//         })
//     })
// } 

shopping(100000)