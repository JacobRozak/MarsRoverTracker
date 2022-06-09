const directions = require('./directions')
module.exports = class Rover {
    constructor(grid, position, heading, input) {
        this.gird = grid;
        this.position = position;
        this.heading = heading;
        this.input = input;
    }
    run() {
        this.process(this.input);
        return `${this.position.x} ${this.position.y} ${this.get_heading()}`;
    }
    
    get_heading() {
        var directionsArr = Object.keys(directions);
        try {
            var direction = directionsArr[this.heading - 1];
        } catch(err) {
            var direction = 'N';
            print('...honestly?');
        }
        
        return direction;
    }
    
    process(commands) {
        commands.split('').forEach(command => {
            if (command == 'L') {
                this.turnLeft();
            } else if (command == 'R') {
                this.turnRight();
            } else if (command == 'M') {
                this.move();
            } else {
                console.log('Gimmie a break');
            }
        });
    }
    move() {
        //if (!this.grid.checkIfMoveAvaliable(this.position)) return False;
        if (directions['N'] == this.heading) {
            this.position.y += 1;
        } else if(directions['E'] == this.heading) {
            this.position.x += 1;
        } else if(directions['S'] == this.heading) {
            this.position.y -= 1;
        } else if(directions['W'] == this.heading) {
            this.position.x -= 1;
        }
        
        return true;
    }
    
    turnLeft() {
        (this.heading -= 1) ? (this.heading !== 1) : (this.heading = 4);
    }
    
    turnRight() {
        (this.heading += 1) ? (this.heading !== 4) : (this.heading = 1);
    }
    
}

