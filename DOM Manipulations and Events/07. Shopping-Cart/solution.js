function solve() {

   //let isButtonsDisabled = false;
   let uniqueProds = [];
   let cartTotal = 0;

   let textArea = document.querySelector('textarea');

   //add button event listeners
   document.querySelector('.shopping-cart').addEventListener('click', onAdd);

   document.querySelector('.checkout').addEventListener('click', onCheckout);


   function onAdd(ev) {
      if (ev.target.className == 'add-product') {
         //get product name and price 
         let prodName = ev.target.parentElement.parentElement.querySelector('.product-title').textContent;

         let prodPrice = Number(ev.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

         //add to array and cartTotal
         if(!uniqueProds.includes(prodName)){
            uniqueProds.push(prodName);
         }
         cartTotal += prodPrice;

         //edit textarea
         textArea.value += `Added ${prodName} for ${prodPrice.toFixed(2)} to the cart.\n`;
      }
   }

   function onCheckout() {

      document.querySelector('.shopping-cart').removeEventListener('click', onAdd);
      document.querySelector('.checkout').removeEventListener('click', onCheckout);

      textArea.value += `You bought ${uniqueProds.join(', ')} for ${cartTotal.toFixed(2)}.`


   }
}