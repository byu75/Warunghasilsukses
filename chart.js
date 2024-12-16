

let cart = [];

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    
    cartItemsContainer.innerHTML = '';

    
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - Rp ${item.price.toLocaleString()} 
                        <button class="remove-item" data-index="${index}">Hapus</button>`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

   
    totalPriceElement.textContent = totalPrice.toLocaleString();

    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('data-index'));
            removeItemFromCart(index);
        });
    });
}


function removeItemFromCart(index) {
    cart.splice(index, 1); 
    updateCartDisplay(); 
}


function clearCart() {
    cart = [];
    updateCartDisplay();
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = button.parentElement;
        const name = productElement.getAttribute('data-name');
        const price = parseInt(productElement.getAttribute('data-price'));

        addToCart(name, price);
    });
});


document.getElementById('clear-cart').addEventListener('click', clearCart);
