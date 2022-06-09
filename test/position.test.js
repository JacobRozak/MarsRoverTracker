const Rover = require('../src/rover')
const Grid = require('../src/grid')
const Position = require('../src/position')
const directions = require('../src/directions')

const position = new Position(3, 3)

test('test position initiation', () => {
    expect(position.x).toBe(3);
    expect(position.y).toBe(3);
});

test('test if moveForward() works', () => {
    let grid = new Grid(5, 3)
    let rover = new Rover(grid, position, directions['E'], "FFRFFRFRRF")
    rover.forward()
    expect(position.x).toBe(4);
    rover.forward()
    expect(position.x).toBe(5);
    expect(position.y).toBe(3);
});


