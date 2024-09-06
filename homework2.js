const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (inputArray) => {
    return new Promise((resolve, reject) => {
        const validateType = inputArray.every(el => typeof el === 'string')
        if (validateType) {
            const result = inputArray.map(el => {
                return el.toUpperCase()
            })
            resolve(result)
        } else {
            reject('Input is wrong type')
        }
    })
}

const sortWords = (inputData) => {
    return new Promise((resolve, reject) => {
        const result = inputData.sort()
        if (result) {
            resolve(result)
        } else {
            reject('Data not found')
        }
    })
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })