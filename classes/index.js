// class Rectangle {
//     constructor(height, width) {
//         this.width = width;
//         this.height = height;
//     }
// }

// let rec1 = new Rectangle(20,30);
// console.log(`${rec1.width} ${rec1.height}`);

// // unnamed class
// let RectangleUnnamed = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(RectangleUnnamed.name);

// let Rectangle3 = class Rectangle2 {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(Rectangle3.name);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     get area() {
//         return this.calcArea();
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(2,4);
// console.log(square.area);

// class Point {
//     constructor(x, y) {
//         this._x = x;
//         this._y = y;
//     }

//     get x() {
//         return this._x;
//     }

//     set x(newX) {
//         this._x = newX;
//     }

//     get y() {
//         return this._y;
//     }

//     set x(newY) {
//         this._y = newY;
//     }

//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot(dx, dy);
//     }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// console.log(Point.distance(p1, p2));

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
        
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

let dog = new Dog('Mitzie');
dog.speak();