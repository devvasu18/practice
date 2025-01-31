
const products = [ 
     { "id": 1, "name": "Organic Apple", "price": 1.99, "image": "https://via.placeholder.com/150?text=Organic+Apple" },
    { "id": 2, "name": "Whole Wheat Bread", "price": 2.49, "image": "https://via.placeholder.com/150?text=Whole+Wheat+Bread" },
    { "id": 3, "name": "Almonds (200g)", "price": 4.99, "image": "https://via.placeholder.com/150?text=Almonds+200g" },
    { "id": 4, "name": "Coconut Oil (500ml)", "price": 5.49, "image": "https://via.placeholder.com/150?text=Coconut+Oil+500ml" },
    { "id": 5, "name": "Organic Honey (250g)", "price": 7.99, "image": "https://via.placeholder.com/150?text=Organic+Honey+250g" },
    { "id": 6, "name": "Whole Grain Pasta", "price": 3.29, "image": "https://via.placeholder.com/150?text=Whole+Grain+Pasta" },
    { "id": 7, "name": "Fresh Spinach (250g)", "price": 1.79, "image": "https://via.placeholder.com/150?text=Fresh+Spinach+250g" },
    { "id": 8, "name": "Greek Yogurt (500g)", "price": 3.99, "image": "https://via.placeholder.com/150?text=Greek+Yogurt+500g" },
    { "id": 9, "name": "Cheddar Cheese (200g)", "price": 4.99, "image": "https://via.placeholder.com/150?text=Cheddar+Cheese+200g" },
    { "id": 10, "name": "Frozen Broccoli (300g)", "price": 2.79, "image": "https://via.placeholder.com/150?text=Frozen+Broccoli+300g" },
    { "id": 11, "name": "Organic Tomatoes (500g)", "price": 3.49, "image": "https://via.placeholder.com/150?text=Organic+Tomatoes+500g" },
    { "id": 12, "name": "Carrots (1kg)", "price": 2.29, "image": "https://via.placeholder.com/150?text=Carrots+1kg" },
    { "id": 13, "name": "Bananas (6 pieces)", "price": 1.59, "image": "https://via.placeholder.com/150?text=Bananas+6pcs" },
    { "id": 14, "name": "Basmati Rice (1kg)", "price": 4.99, "image": "https://via.placeholder.com/150?text=Basmati+Rice+1kg" },
    { "id": 15, "name": "Peanut Butter (350g)", "price": 3.79, "image": "https://via.placeholder.com/150?text=Peanut+Butter+350g" },
    { "id": 16, "name": "Canned Chickpeas (400g)", "price": 1.49, "image": "https://via.placeholder.com/150?text=Canned+Chickpeas+400g" },
    { "id": 17, "name": "Frozen Pizza (400g)", "price": 5.99, "image": "https://via.placeholder.com/150?text=Frozen+Pizza+400g" },
    { "id": 18, "name": "Instant Oatmeal Packets (10pcs)", "price": 2.99, "image": "https://via.placeholder.com/150?text=Instant+Oatmeal+10pcs" },
    { "id": 19, "name": "Tomato Sauce (500ml)", "price": 2.49, "image": "https://via.placeholder.com/150?text=Tomato+Sauce+500ml" },
    { "id": 20, "name": "Dark Chocolate Bar (100g)", "price": 2.79, "image": "https://via.placeholder.com/150?text=Dark+Chocolate+100g" }
]
const productContainer = document.getElementById('products');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
    `;
    productContainer.appendChild(productDiv);
});