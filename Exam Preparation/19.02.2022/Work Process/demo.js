let obj = {
    a:{value: 'a'},
    b:{value: 'b'}
}

for (const item in obj) {
    if(obj[item].value == ''){
        console.log('empty');
    }
}