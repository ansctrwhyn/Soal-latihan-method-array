const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Rusty',
    present: false,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  }
]

let result = videoData.filter(el => {
  return el.present === true
})

console.log("Jumlah data: " + result.length);
console.log(result);
