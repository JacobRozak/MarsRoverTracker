module.exports = class Grid {
    
    constructor(width, height, min_width=0, min_height=0){
        this.width = width
        this.height = height
        this.min_width = min_width
        this.min_height = min_height
    }
    checkIfMoveAvaliable(){
        return this.min_width <= position.x <= this.width && this.min_height <= position.y <= this.height
    }
}
