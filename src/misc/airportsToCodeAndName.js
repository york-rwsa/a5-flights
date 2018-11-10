const airports = require('./airports')
const fs = require('fs')

// let out = { data: [].concat.apply([], airports.map(x => [x.code, x.name])) }
let out = { data: [].concat.apply([], airports.map(x => `${x.name} [${x.code}]`)) }
let jsondata = JSON.stringify(out)

fs.writeFile('./airports_list.json', jsondata, 'utf8', function (error) {
  if (error) {
    throw error
  }

  console.log('completed')
})
