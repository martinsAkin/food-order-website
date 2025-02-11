// REFER TO THE BUTTOM SECTION OF THE HTML FILE FOR THE JAVASCRIPT SOURCE CODE

let currentFood = { name: "", price: 0 };
let cartCount = 0;

document.querySelectorAll('.add-to-list').forEach(button => {
 button.addEventListener('click', function full_description() {
     const name = this.getAttribute('food-name');
     const price = parseFloat(this.getAttribute('food-price'));
    //  const image_link = button.getAttribute('image-link');


     currentFood = { name, price};
     addToCart(name, price)
     
 });
});

let cartPopUp = document.getElementById('cartBtn');
let cart = document.getElementById('cart')
cart.style.display = 'none'
let cartClicked = false
function popUpCart(){
    cartClicked = !cartClicked
    if (cartClicked) {
        cart.style.display = 'block'
    } else{
        cart.style.display = 'none'
    }
}
cartPopUp.addEventListener('click', popUpCart)


const cartItems = [];

function updateCart() {
    const cartItemsList = document.getElementById('lists');
    const itemCount = document.getElementById('item-count'); // Total item count element
    const orderTotal = document.getElementById('order-total'); // Total price element

    cartItemsList.innerHTML = ''; // Clear the cart list
    let total = 0;
    let count = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
        count += item.quantity;

        // Create list item for each cart product
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x ${item.quantity} = $${itemTotal.toFixed(2)}`;

        // Create "Reduce Quantity" button
        const reduceButton = document.createElement('button');
        reduceButton.textContent = '-';
        reduceButton.style.width = '2rem'
        reduceButton.style.fontSize = 'larger' 
        reduceButton.style.borderRadius = '10px' 
        reduceButton.style.border = 'none'
        reduceButton.style.marginLeft = '10px'; // Optional styling
        reduceButton.addEventListener('click', () => {
            reduceQuantity(index);
        });

        // Append button to list item
        listItem.appendChild(reduceButton);

        // Append list item to cart list
        cartItemsList.appendChild(listItem);
    });

    // Update item count and total price
    itemCount.innerText = count;
    orderTotal.innerText = total.toFixed(2);
}

function addToCart(name, price) {
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, quantity: 1, price }); // Start with quantity 1 for new items
    }
    updateCart();
}

function reduceQuantity(index) {
    const item = cartItems[index];
    if (item.quantity > 1) {
        item.quantity--; // Reduce quantity by 1
    } else {
        cartItems.splice(index, 1); // Remove item from cart if quantity reaches 0
    }
    updateCart();
}


// // like reaction
const heartIcons = document.querySelectorAll('.fa-heart');
heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        if (this.style.color === 'red') {
            this.style.color = 'black';
        }
        else{
            this.style.color = 'red';
        }
    })
    
})

// checkout
// const checkoutBtn = document.getElementById('checkout')
// checkoutBtn.addEventListener('click', () =>{
//     alert("Thank you for trying, no payment gateway yet. Check back later")
// })
