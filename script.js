//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	get Area(){
		return this.width*this.height;
	}
	class square extend Rectangle {
	constructor(side){
		super(side,side);
	}
	get perimeter(){
		return this.width*4;
	}
	}
}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
