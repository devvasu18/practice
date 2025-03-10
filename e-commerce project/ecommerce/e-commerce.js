//logout option in humburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('lgtbtn');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Get the logout button
const logoutBtn = document.getElementById('lgtbtn');
if (localStorage.getItem('userData')) {// Show logout button if user is logged in
    logoutBtn.style.display = 'block';
}
// Add click event listener to the logout button
const messageContainer = document.getElementById('message'); 

// Show logout button if user is logged in
if (localStorage.getItem('userData')) {
    logoutBtn.style.display = 'block';
}else {
    logoutBtn.style.display = 'none';
}

// Add click event listener to the logout button
logoutBtn.addEventListener('click', function () {
    //messageContainer.textContent = 'You have been logged out!';
    //messageContainer.style.color = 'red';
   // messageContainer.style.fontWeight = 'bold';

    // Use setTimeout to automatically log the user out after 2 seconds
    setTimeout(function () {
      //  localStorage.removeItem('userData');// Remove user data from localStorage
        window.location.href = "file:///D:/vasu/e-commerce%20project/validationfrm/validationform.html"; // Redirect to login page // Redirect to the login page (or another page)
    },0); // Wait 2 seconds before logging out
});



// Function to update the user greeting
function updateUserGreeting() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userGreeting = document.getElementById('user-greeting');
    if (userData) {
        userGreeting.textContent = `Hello, ${userData.name}`;
    } else {
        userGreeting.textContent = 'Hello, sign in';
    }
}

// Call this function on page load
window.onload = function() {
    updateUserGreeting();
    loadCartFromLocalStorage();
};

// Redirect to account page
const loginSignupBtn = document.getElementById('login-signup-btn');
loginSignupBtn.addEventListener('click', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        window.location.href = "file:///D:/vasu/e-commerce%20project/ecommerce/account.html"; // Redirect to account page
    } else {
        window.location.href = "file:///D:/vasu/e-commerce%20project/validationfrm/validationform.html"; // Redirect to login page
    }
});
//products identification
// images will only displayed when the vs code live server is running. bcs images url link is copied from live server.
const products = [
    { id: 1, name: "Smartphone", price: 500, category: "electronics", image: "http://127.0.0.1:5500/e-commerce%20project/project%20images/d58dde04-041b-4ff5-adda-de71e7d552c1.webp" },
    { id: 2, name: "T-shirt", price: 100, category: "clothing", image: "http://127.0.0.1:5500/e-commerce%20project/project%20images/ceaa3a8d-ed56-4fa7-8157-2f8b1188abf4.webp" },
    { id: 3, name: "Laptop", price: 1200, category: "electronics", image: "http://127.0.0.1:5500/e-commerce%20project/project%20images/6019c862-8f9c-470a-9cdd-6ddf96374ba5.webp" },
    { id: 4, name: "Book", price: 80, category: "books", image: "http://127.0.0.1:5500/e-commerce%20project/project%20images/c6706689-417a-4114-ada8-f962375b3aee.webp" },
    { id: 5, name: "Headphones", price: 150, category: "electronics", image: "http://127.0.0.1:5500/e-commerce%20project/project%20images/23b25ca8-deeb-4e23-aac0-e38eb45e1315.webp" },
];


let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize from localStorage

function addToCart(productId) {
    console.log(`Adding product with ID: ${productId}`); // Debugging
    const existingProduct = cart.find(product => product.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        const product = products.find(product => product.id === productId);
        if (product) {
            cart.push({ ...product, quantity: 1 });
        } else {
            console.error('Product not found!');
        }
    }
    updateCartCount();
    saveCartToLocalStorage();
}

// Render products
function renderProducts(filter = "all") {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    const filteredProducts = filter === "all"
        ? products
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:150px;height:150px;">
        <h3>${product.name}</h3>

        <div>
           
        
        </div>
    `;  
    /*
     <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})" style="background-color:blue; color : white ;">Add to Cart</button>
            <button onclick="incrementQuantity(${product.id})" style="background-color: green; color: white;"> + </button>
            <button onclick="decrementQuantity(${product.id})" style="background-color: red; color: white;"> - </button>
       */  
        productContainer.appendChild(productDiv);
    });
}
// Increment quantity of a product in the cart
function incrementQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity++;
        updateCartCount();
        saveCartToLocalStorage();
    }
}

// Decrement quantity of a product in the cart
function decrementQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product && product.quantity > 1) {
        product.quantity--;
        updateCartCount();
        saveCartToLocalStorage();
    }
}

// Update cart count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load items from localStorage on page load
function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    updateCartCount();
}

// Show cart modal
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
let cartTotal = 0;
    // Clear previous cart display
    cartItems.innerHTML = "";

    // Check if cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        // Display each product in the cart along with its quantity
        const productQuantity = {};
        cart.forEach(product => {
            if (!productQuantity[product.id]) {
                productQuantity[product.id] = product.quantity;
            } else {
                productQuantity[product.id] += product.quantity;
            }
        });

        for (const productId in productQuantity) {
            const product = products.find(p => p.id === parseInt(productId));
            const quantity = productQuantity[productId];
            
            cartTotal += product.price*quantity;

            const itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";
            itemDiv.innerHTML = `
          <p>${product.name} - $${product.price} x ${quantity}  = ${product.price*quantity }    <button class="rmvbtn" onclick="removeFromCart(${cart.findIndex(p => p.id === product.id)})">REMOVE</button> </p> `;
            cartItems.appendChild(itemDiv);
        }
        //discount
        const totalDiv = document.createElement("div");
        totalDiv.className = "cart-total";
        totalDiv.innerHTML = `<p>Total: $${cartTotal.toFixed(2)}</p>`;
        cartItems.appendChild(totalDiv);
    }


    // Show the modal
    cartModal.style.display = "block";
}


// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    updateCartCount();
    showCart(); // Refresh cart view
}

// Close cart modal
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Filter products
document.getElementById("category").addEventListener("change", (e) => {
    renderProducts(e.target.value);
});

// Initialize
renderProducts();

// Attach event listener for the "View Cart" button
document.getElementById("view-cart").addEventListener("click", showCart);

// Load cart on page load
window.onload = loadCartFromLocalStorage;


