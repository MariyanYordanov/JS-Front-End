/*
7. Shopping Cart

You will be given some products that you should be able to add to your cart.
Each product will have a name, picture, and price.
When the "Add" button is clicked, append the current product to the textarea in the following format:

"Added {name} for {money} to the cart.\n". 

The price must be fixed to the second digit.

When the button "Checkout" is clicked, 
calculate the total money that you need to pay for the products that are currently in your cart. 
Append the result to the textarea in the following format:

"You bought {list} for {totalPrice}."

The list should contain only the unique products, separated by ", ". 
The total price should be rounded to the second decimal point.

Also, after clicking over "Checkout" and every from above is done you should disable all buttons. 
(You can't add products or checkout again if once the checkout button is clicked).
*/

function solve() {

   let sum = 0;
   let bouthProducts = [];

   const addBtn = Array.from(document.getElementsByClassName("add-product"));  
   const textarea = document.querySelector('textarea');

   const checkout = document.querySelector('.checkout');
   checkout.addEventListener('click', showInfoMassage);

   addBtn.forEach(btn => {
      btn.addEventListener('click', addProduct);
   });

   function addProduct(e) {
      const currentProduct = e.currentTarget.parentNode.parentNode;

      const productTitle = currentProduct.querySelector('.product-title').textContent;
      const productPrice = currentProduct.querySelector('.product-line-price').textContent;

      textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
      sum += Number(productPrice);

      if(!bouthProducts.includes(productTitle)){
         bouthProducts.push(productTitle);
      }
   }

   function showInfoMassage(e) {
      const target = e.currentTarget.parentNode.querySelector('textarea');
      target.value = '';
      bouthProducts.forEach(element => `${element} `);
      target.value = `You bought ${bouthProducts} for ${sum.toFixed(2)}.`;

      addBtn.forEach(btn => {
         btn.removeEventListener('click', addProduct);
      });
   
   }

}