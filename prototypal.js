// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   }
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }
 
// // Square constructor
// function Square(sides, length) {
//   this.sides = sides;
//   this.width = length;
//   this.height = length;
//   this.area = function() {
//     return this.width * this.height;
//   },
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }
 
// var rect = new Rectangle(4, 3, 5);
// var square = new Square(4, 2);
 
// rect.area();
// square.area();

// // Rectangle constructor
// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   }
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }
 
// // Square constructor
// function Square(sides, length) {
//   Rectangle.call(this, sides, length, length);
// }
 
// var rect = new Rectangle(4, 3, 5);
// var square = new Square(4, 2);
 
// rect.area();
// square.area();

// Rectangle constructor
// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   }
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }

// // Square constructor
// function Square (sides, length) {
//   Rectangle.apply(this, [sides, length, length]);
// }

// var square = new Square(4, 3);

// square.perimeter();

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle
 
// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}

var rect = new Rectangle(1,0,5,3)
var shape = new Shape(3,2,2)
 
 
 Shape.prototype.move = function(x,y) {
  this.x = x;
  this.y = y;
}
 
Shape.prototype.position = function() {
  return(this.x + ", " + this.y);
}

for (var prop in rect) {
  console.log("rect." + prop + " = " + rect[prop]);
}