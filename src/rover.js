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
            } else if (command == 'F') {
                this.forward();
            } else {
                console.log('Gimmie a break, that command is obviously stupid');
            }
        });
    }
    forward() {
        //console.log(this.grid)
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
        if (this.heading !== 1){
            this.heading -= 1
        } else {
            this.heading = 4
        }
    }
    
    turnRight() {
        if (this.heading !== 4){
            this.heading += 1
        } else {
            this.heading = 1
        }
    }
    
}

