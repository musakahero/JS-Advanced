function extractAndUpper(input){
    let regex = /[\w+]+/gm;

    let resultArr = input.match(regex);

    console.log(resultArr.join(', ').toUpperCase());

}

extractAndUpper('Hi, how are you?');
extractAndUpper('hello');