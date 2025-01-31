
const products = [ { "id": 1, "name": "iPhone 14 Pro", "price": 999, "image": "https://via.placeholder.com/150?text=iPhone+14+Pro" },
    { "id": 2, "name": "Samsung Galaxy S23", "price": 849, "image": "https://via.placeholder.com/150?text=Samsung+Galaxy+S23" },
    { "id": 3, "name": "Google Pixel 8", "price": 699, "image": "https://via.placeholder.com/150?text=Google+Pixel+8" },
    { "id": 4, "name": "OnePlus 11", "price": 729, "image": "https://via.placeholder.com/150?text=OnePlus+11" },
    { "id": 5, "name": "Xiaomi 13 Pro", "price": 799, "image": "https://via.placeholder.com/150?text=Xiaomi+13+Pro" },
    { "id": 6, "name": "Samsung Galaxy Z Fold 5", "price": 1799, "image": "https://via.placeholder.com/150?text=Samsung+Galaxy+Z+Fold+5" },
    { "id": 7, "name": "Oppo Find X6 Pro", "price": 1199, "image": "https://via.placeholder.com/150?text=Oppo+Find+X6+Pro" },
    { "id": 8, "name": "Sony Xperia 1 IV", "price": 1399, "image": "https://via.placeholder.com/150?text=Sony+Xperia+1+IV" },
    { "id": 9, "name": "Motorola Edge+ 2023", "price": 999, "image": "https://via.placeholder.com/150?text=Motorola+Edge+2023" },
    { "id": 10, "name": "Realme GT 2 Pro", "price": 799, "image": "https://via.placeholder.com/150?text=Realme+GT+2+Pro" },
    { "id": 11, "name": "Asus ROG Phone 7", "price": 899, "image": "https://via.placeholder.com/150?text=Asus+ROG+Phone+7" },
    { "id": 12, "name": "Apple iPhone SE (2023)", "price": 429, "image": "https://via.placeholder.com/150?text=Apple+iPhone+SE" },
    { "id": 13, "name": "Nokia X30 5G", "price": 599, "image": "https://via.placeholder.com/150?text=Nokia+X30+5G" },
    { "id": 14, "name": "Vivo X90 Pro", "price": 799, "image": "https://via.placeholder.com/150?text=Vivo+X90+Pro" },
    { "id": 15, "name": "Huawei Mate 50 Pro", "price": 1099, "image": "https://via.placeholder.com/150?text=Huawei+Mate+50+Pro" },
    { "id": 16, "name": "Google Pixel 7a", "price": 499, "image": "https://via.placeholder.com/150?text=Google+Pixel+7a" },
    { "id": 17, "name": "Samsung Galaxy A54 5G", "price": 449, "image": "https://via.placeholder.com/150?text=Samsung+Galaxy+A54" },
    { "id": 18, "name": "Xiaomi Redmi Note 12", "price": 249, "image": "https://via.placeholder.com/150?text=Xiaomi+Redmi+Note+12" },
    { "id": 19, "name": "Realme Narzo 60", "price": 250, "image": "https://via.placeholder.com/150?text=Realme+Narzo+60" },
    { "id": 20, "name": "Nothing Phone (2)", "price": 499, "image": "https://via.placeholder.com/150?text=Nothing+Phone+2" }

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