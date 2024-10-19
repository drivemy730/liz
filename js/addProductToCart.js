
let selectedProductsLocalStorage = [];
let shopingCartBtn = document.querySelector("floating-cart")


window.addEventListener('DOMContentLoaded',onload)
{
    let getHuesosCartFromLocalStorage = JSON.parse(localStorage.getItem("HuesitosDeColores"));
   
}

// function to add product to cart 
document.querySelectorAll('.product-item').forEach((item, index) => 
{
        let btnCounter = 1; 
        let = cartQuantityCounter  = 0; 
        const quantityOfProduct = item.querySelector('.quantity-value');
        const decreaseCartBtn = item.querySelector('.quantity-btn.decrease');
        const increaseCartBtn = item.querySelector('.quantity-btn.increase');
        const addToCartBtn = item.querySelector('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');

        
        // Initialize counter display if you have a span or div for quantity
        if (quantityOfProduct) 
        {
            quantityOfProduct.innerHTML = btnCounter;
        }

        function updateProductQuantity(type) 
        {
            if (type === "increase") 
            {
                btnCounter++;

            } else if (type === "decrease" && btnCounter > 1) 

            {
                btnCounter--;
            }
            if (quantityOfProduct) 
            {
                quantityOfProduct.innerHTML = btnCounter;
            }
        }

        increaseCartBtn.addEventListener('click', () => updateProductQuantity("increase"));
        decreaseCartBtn.addEventListener('click', () => updateProductQuantity("decrease"));

        // Add to cart button logic
        addToCartBtn.addEventListener('click', () => 
        {
            
                cartQuantityCounter++

                const productDetails = 
                {
                    index: index, 
                    quantity: btnCounter, 
                    productName: item.querySelector('img').alt, 
                    productPrice: item.querySelector('h3').textContent, 
                };
                
                // Add product to the selectedProducts array
                selectedProductsLocalStorage.push(productDetails);
            
                // store in localStorage
                localStorage.setItem('selectedProductsCart', JSON.stringify(selectedProductsLocalStorage));  
                cartCount.innerHTML = cartQuantityCounter;
        });
});

// function to show cart products


    
    