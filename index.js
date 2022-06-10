const Rover = require('./src/rover')
const Grid = require('./src/grid')
const Position = require('./src/position')
const Controller = require('./src/controller')
const fs = require('fs')
const controller = new Controller();

fs.readFile('./parameters.txt', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const input = data.toString();
    controller.init(input).forEach(rover => console.log(rover.run()));
})


