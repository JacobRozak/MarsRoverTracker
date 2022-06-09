const Rover = require('./rover')
const Grid = require('./grid')
const Position = require('./position')
const directions = require('./directions')

module.exports = class Controller {
    constructor (grid) {
      this.grid = grid;
      this.rover = [];
    }
    init (instruction) {
      let instructionLines = instruction.trim().split('\n');
      instructionLines = instructionLines.filter(instructionLine => {
        return instructionLine.trim() !== '';
      });
      //setup grid
      this.setGridFromInstruction(instructionLines[0]);
      //setup rover
      let roverData = instructionLines.slice(1)
      let roverInstructions = [];
      for (let i = 0; i < roverData.length; i += 2) {
        roverInstructions.push(
          {
            setRoverInstruction: roverData[i],
            moveRoverInstruction: roverData[i + 1]
          });
      }
      roverInstructions.forEach(roverInstruction => {
        this.setRoverFromInstruction(roverInstruction);
      });
      
      return this.rover;
    }
    
    validateGridInstruction (instruction) {
      return /^\d+\s+\d+$/.test(instruction);
    }
  
    validateRoverInstruction (instruction) {
      return /^\d+\s\d+\s[ENSW]$/.test(instruction);
    }
  
    validateMoveRoverInstruction (instruction) {
      return /^[RLF]+$/.test(instruction);
    }
    
    setGridFromInstruction (gridInstruction) {
      if (!this.validateGridInstruction(gridInstruction)) {
        throw Error(`Grid instructions is just wrong, look at this crap: "${gridInstruction}"`);
      }
      const args = gridInstruction.split(' ').map(i => parseInt(i));
      this.grid = new Grid(...args);
    }
    
    setRoverFromInstruction ({setRoverInstruction, moveRoverInstruction}) {
      if (!this.validateRoverInstruction(setRoverInstruction)) {
        throw Error(`Your position is stupid: "${setRoverInstruction}"`);
      }
      if (!this.validateMoveRoverInstruction(moveRoverInstruction)) {
        throw Error(`whats up with you and your rover instructions?: "${moveRoverInstruction}"`);
      }
      if (!this.grid) {
        throw Error('You gonna need that gird, first!. Get it?');
      }
      let args = setRoverInstruction.split(' ');
      args = args.slice(0, 2).map(i => parseInt(i)).concat(args[2]);
      let position = new Position(args[0], args[1]);
      this.rover.push(new Rover(this.grid, position, directions[args[2]], moveRoverInstruction, directions));
    }
  }
