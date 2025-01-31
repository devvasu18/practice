const products = [
        { id: 1, name: "Smartphone", price: 500, image: "https://via.placeholder.com/150?text=Smartphone" },
        { id: 2, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150?text=Laptop" },
        { id: 3, name: "Headphones", price: 150, image: "https://via.placeholder.com/150?text=Headphones" },
        { id: 4, name: "Smartwatch", price: 250, image: "https://via.placeholder.com/150?text=Smartwatch" },
        { id: 5, name: "Wireless Earbuds", price: 100, image: "https://via.placeholder.com/150?text=Wireless+Earbuds" },
        { id: 6, name: "Gaming Console", price: 400, image: "https://via.placeholder.com/150?text=Gaming+Console" },
        { id: 7, name: "4K TV", price: 900, image: "https://via.placeholder.com/150?text=4K+TV" },
        { id: 8, name: "Bluetooth Speaker", price: 80, image: "https://via.placeholder.com/150?text=Bluetooth+Speaker" },
        { id: 9, name: "Mechanical Keyboard", price: 130, image: "https://via.placeholder.com/150?text=Keyboard" },
        { id: 10, name: "Gaming Mouse", price: 70, image: "https://via.placeholder.com/150?text=Gaming+Mouse" },
        { id: 11, name: "Tablet", price: 300, image: "https://via.placeholder.com/150?text=Tablet" },
        { id: 12, name: "External Hard Drive", price: 90, image: "https://via.placeholder.com/150?text=Hard+Drive" },
        { id: 13, name: "Fitness Tracker", price: 120, image: "https://via.placeholder.com/150?text=Fitness+Tracker" },
        { id: 14, name: "Camera", price: 700, image: "https://via.placeholder.com/150?text=Camera" },
        { id: 15, name: "VR Headset", price: 350, image: "https://via.placeholder.com/150?text=VR+Headset" },
        { id: 16, name: "E-Reader", price: 200, image: "https://via.placeholder.com/150?text=E-Reader" },
        { id: 17, name: "Router", price: 110, image: "https://via.placeholder.com/150?text=Router" },
        { id: 18, name: "Portable Monitor", price: 280, image: "https://via.placeholder.com/150?text=Portable+Monitor" },    
];

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

