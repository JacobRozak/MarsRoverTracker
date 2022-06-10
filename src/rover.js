const directions = require('./directions')
module.exports = class Rover {
    constructor(grid, position, heading, input) {
        this.grid = grid;
        this.position = position;
        this.heading = heading;
        this.input = input;
    }
    run() {
        this.process(this.input);
        return `${this.position.x} ${this.position.y} ${this.get_heading()} ${this.grid.lost}`;
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
    checkIfMoveAvaliable(){
        if (this.grid.offside.length == 0) {
            if (this.position.x > this.grid.width || this.position.y > this.grid.height) {
                this.grid.offside.push(this.position)
                this.grid.lost = 'LOST'
                
                return true
            }
        } else if(this.grid.offside.length > 0) {
            this.grid.offside.forEach(e => {
                if (this.position.x > e.x || this.position.y > e.y) {
                    this.position.y -= 1;
                }
            })
        }
        if (this.position.x > this.grid.width) {
            this.grid.offside.push(this.position);
            this.position.x -= 1;
            
            return true
        } else if (this.position.y > this.grid.height) {
            this.grid.offside.push(this.position);
            this.position.y -= 1;
            
            return true;
        }
        this.grid.lost = '';
        return false;
    }
    forward() {
        this.checkIfMoveAvaliable(this.position)
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
            this.heading -= 1;
        } else {
            this.heading = 4;
        }
    }
    
    turnRight() {
        if (this.heading !== 4){
            this.heading += 1;
        } else {
            this.heading = 1;
        }
    }
    
}

