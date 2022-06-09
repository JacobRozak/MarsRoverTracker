import Rover from './src/rover';
import Position from './src/position';
import Grid from './src/grid';


var grid = new Grid(5, 5)
var position = new Position(1, 2)

var rover = new Rover(grid, position, directions['N'], "LMLMLMLMM")
console.log(rover.run())
