const Rover = require('./src/rover')
const Grid = require('./src/grid')
const Position = require('./src/position')
const directions = require('./src/directions')

var grid = new Grid(5, 5)
var position = new Position(1, 2)

var rover = new Rover(grid, position, directions['N'], "LMLMLMLMM")
console.log(rover.run())
