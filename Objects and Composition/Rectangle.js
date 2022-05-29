function rectangle(width, height, color){
    let rect = {
        width:Number(width),
        height:Number(height),
        color:(color[0].toUpperCase()) + color.slice(1),
        calcArea: () =>  width * height
    };

    return rect;
}


//input
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
