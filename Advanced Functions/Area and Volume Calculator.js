function solve(areaIn, volIn, input) {
    let data = JSON.parse(input);

    const result = [];

    for (const cube of data) {
        const current = {
            area:areaIn.call(cube),
            volume:volIn.call(cube)
        }

        result.push(current);
    }

    //console.log(result);
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);