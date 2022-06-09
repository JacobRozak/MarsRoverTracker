const Controller = require('../src/controller')

const controller = new Controller();
controller.setGridFromInstruction('5 3');
test('test setting up new grid by a controller based on the input', () => {
    expect(controller.grid.width).toBe(5);
});
controller.setRoverFromInstruction({ setRoverInstruction: '1 1 E', moveRoverInstruction: 'RFRFRFRF' });
test('test setting up new position and instruction set', () => {
    expect(controller.rover[0].heading).toBe(2);
    expect(controller.rover[0].position.x).toBe(1);
    expect(controller.rover[0].input).toMatch('RFRFRFRF');
});

test('checking if given parameters produce a adequate rover object', () => {
    expect(controller.rover[0].run()).toBe('1 1 E ');
});
