
const products = [
    { id: 1, name: "Smartphone", price: 500, category: "electronics" },
    { id: 2, name: "T-shirt", price: 100, category: "clothing" },
    { id: 3, name: "Laptop", price: 1200, category: "electronics" },
    { id: 4, name: "Book", price: 80, category: "books" },
    { id: 5, name: "Headphones", price: 150, category: "electronics" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize from localStorage

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
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="incrementQuantity(${product.id})">+</button>
                <button onclick="decrementQuantity(${product.id})">-</button>
            </div>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
        // Product already exists in the cart, increment its quantity
        cart[existingProductIndex].quantity++;
    } else {
        // Add new product to the cart
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    saveCartToLocalStorage();
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
                <p>${product.name} - $${product.price} x ${quantity}</p>
                <button onclick="removeFromCart(${cart.findIndex(p => p.id === product.id)})">Remove</button>
            `;
            cartItems.appendChild(itemDiv);
        }
        //discount
        let discount =0 ;
        if (cartTotal > 500) {
            discount = 0.1 * cartTotal;
        }
        const discountDiv =document.createElement("div")
        discountDiv.className = "cart-discount";
        discountDiv.innerHTML = `<p>discount:-$$discount.tofixed(2)}</p>`;
        cartItems.appendChild(discountDiv);

        const totalDiv = document.createElement("div");
        totalDiv.className="cart-total";
        totalDiv.innerHTML=`<p>Total:$ ${(cartTotal - discount).toFixed(2)}</p>`;
        cartItems.appendChild(totalDiv);
    }


    // Show the modal
    cartModal.style.display = "block";
}


// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
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


