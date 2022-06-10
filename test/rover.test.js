const Rover = require('../src/rover')

describe("Rover", () => {
  var grid = new Grid(5, 5)
  var position = new Position(1, 2)
  var rover = new Rover(grid, position, directions['N'], "LFLFLFLFF")
  test("defines run", () => {
    expect(typeof rover.run).toBe("function");
  });
  
  test("check if values are correct", () => {
    
  })
  
});


