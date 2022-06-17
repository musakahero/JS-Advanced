class Rectangle {
    constructor(width, height, color){
        this.width = Number(width);
        this.height = Number(height);
        this.color = color;
    }

    calcArea = () => (this.width * this.height); 
}

//input
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
