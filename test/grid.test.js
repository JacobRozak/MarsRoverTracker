const Rover = require('../src/rover');
const Grid = require('../src/grid');
const Position = require('../src/position');
const directions = require('../src/directions');

const grid = new Grid(5, 3);
const position = new Position(3, 2);
const rover = new Rover(grid, position, directions['N'], "FRRFLLFFRRFLL");

test('test Grid height/width', () => {
    expect(grid.width).toBe(5);
    expect(grid.height).toBe(3);
    expect(grid.min_width).toBe(0);
    expect(grid.min_height).toBe(0);
});

test('test if the position that the previous rover ends up getting LOST is being recorded into the grid', () => {
    rover.run();
    let position2 = new Position(0, 3);
    let rover2 = new Rover(grid, position2, directions['N'], "FRRFLLFFRRFLL");
    rover2.run();
    expect(grid.offside[0].x).toBe(3);
    expect(grid.offside[0].y).toBe(3);
});


