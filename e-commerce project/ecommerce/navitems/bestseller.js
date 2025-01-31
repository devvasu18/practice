
const products = [ { "id": 1, "name": "Wireless Earbuds", "price": 50, "image": "https://via.placeholder.com/150?text=Wireless+Earbuds" },
    { "id": 2, "name": "Smartphone", "price": 499, "image": "https://via.placeholder.com/150?text=Smartphone" },
    { "id": 3, "name": "Gaming Laptop", "price": 1200, "image": "https://via.placeholder.com/150?text=Gaming+Laptop" },
    { "id": 4, "name": "Smartwatch", "price": 99, "image": "https://via.placeholder.com/150?text=Smartwatch" },
    { "id": 5, "name": "Bluetooth Speaker", "price": 30, "image": "https://via.placeholder.com/150?text=Bluetooth+Speaker" },
    { "id": 6, "name": "Electric Kettle", "price": 25, "image": "https://via.placeholder.com/150?text=Electric+Kettle" },
    { "id": 7, "name": "Air Fryer", "price": 150, "image": "https://via.placeholder.com/150?text=Air+Fryer" },
    { "id": 8, "name": "LED TV 4K", "price": 899, "image": "https://via.placeholder.com/150?text=LED+TV+4K" },
    { "id": 9, "name": "Hair Dryer", "price": 45, "image": "https://via.placeholder.com/150?text=Hair+Dryer" },
    { "id": 10, "name": "Fitness Tracker", "price": 59, "image": "https://via.placeholder.com/150?text=Fitness+Tracker" },
    { "id": 11, "name": "Wireless Keyboard", "price": 35, "image": "https://via.placeholder.com/150?text=Wireless+Keyboard" },
    { "id": 12, "name": "Gaming Chair", "price": 250, "image": "https://via.placeholder.com/150?text=Gaming+Chair" },
    { "id": 13, "name": "Vacuum Cleaner", "price": 180, "image": "https://via.placeholder.com/150?text=Vacuum+Cleaner" },
    { "id": 14, "name": "Pressure Cooker", "price": 80, "image": "https://via.placeholder.com/150?text=Pressure+Cooker" },
    { "id": 15, "name": "Wireless Mouse", "price": 20, "image": "https://via.placeholder.com/150?text=Wireless+Mouse" },
    { "id": 16, "name": "Noise Cancelling Headphones", "price": 199, "image": "https://via.placeholder.com/150?text=Noise+Cancelling+Headphones" },
    { "id": 17, "name": "Instant Camera", "price": 99, "image": "https://via.placeholder.com/150?text=Instant+Camera" },
    { "id": 18, "name": "Coffee Maker", "price": 70, "image": "https://via.placeholder.com/150?text=Coffee+Maker" },
    { "id": 19, "name": "Smart Home Hub", "price": 120, "image": "https://via.placeholder.com/150?text=Smart+Home+Hub" },
    { "id": 20, "name": "Portable Hard Drive", "price": 89, "image": "https://via.placeholder.com/150?text=Portable+Hard+Drive" }

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

