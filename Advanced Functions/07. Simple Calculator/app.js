function calculator() {

    function init(selector1, selector2, resultSelector){
        this.element1 = document.querySelector(selector1);
        this.element2 = document.querySelector(selector2);
        this.resultElement = document.querySelector(resultSelector);
    }

    function add(){
        let sum = Number(this.element1.value) + Number(this.element2.value);

        this.resultElement.value = sum;
    }

    function subtract(){
        let diff = Number(this.element1.value) - Number(this.element2.value);
        
        this.resultElement.value = diff;
    }

    return {
        init,
        add,
        subtract
    };
}

const calculate = calculator(); 
calculate.init ('#num1', '#num2', '#result'); 



