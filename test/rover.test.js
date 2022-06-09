const Rover = require('../src/rover')
const Grid = require('../src/grid')
const Position = require('../src/position')
const directions = require('../src/directions')

const grid = new Grid(5, 5)
const position = new Position(1, 2)
const rover = new Rover(grid, position, directions['N'], "LMLMLMLMM")

test('test rover get_heading()', () => {
    expect(rover.get_heading()).toBe('N');
});

test('test rover turnLeft()', () => {
    rover.turnLeft()
    expect(rover.get_heading()).toBe('W');
});

test('test rover turnRight()', () => {
    rover.turnRight()
    expect(rover.get_heading()).toBe('N');
});

test('test rover checkIfMoveAvaliable()', () => {
    expect(rover.checkIfMoveAvaliable(position)).toBe(false);
});

test('test rover checkIfMoveAvaliable(), checking if the position is inside of the grid', () => {
    position.x = 3
    position.y = 8
    expect(rover.checkIfMoveAvaliable(position)).toBe(true);
});

test('test rover checkIfMoveAvaliable(), checking if the position is inside of the grid', () => {
    position.x = 4
    position.y = 3
    expect(rover.checkIfMoveAvaliable(position)).toBe(false);
});

test('test rover integration', () => {
    const grid = new Grid(5, 5)
    const position = new Position(1, 2)
    const rover = new Rover(grid, position, directions['N'], "LMLMLMLMM")
    expect(rover.run()).toBe('1 2 N ');
});
