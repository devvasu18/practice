
const products = [ { "id": 1, "name": "Chocolate Fudge", "price": 5.99, "image": "https://via.placeholder.com/150?text=Chocolate+Fudge" },
    { "id": 2, "name": "Gummy Bears (300g)", "price": 3.49, "image": "https://via.placeholder.com/150?text=Gummy+Bears+300g" },
    { "id": 3, "name": "Lollipops (Pack of 10)", "price": 2.99, "image": "https://via.placeholder.com/150?text=Lollipops+Pack+10" },
    { "id": 4, "name": "Caramel Toffee", "price": 4.29, "image": "https://via.placeholder.com/150?text=Caramel+Toffee" },
    { "id": 5, "name": "Cotton Candy (200g)", "price": 3.19, "image": "https://via.placeholder.com/150?text=Cotton+Candy+200g" },
    { "id": 6, "name": "Marshmallows (250g)", "price": 2.59, "image": "https://via.placeholder.com/150?text=Marshmallows+250g" },
    { "id": 7, "name": "Fruit Jelly", "price": 3.79, "image": "https://via.placeholder.com/150?text=Fruit+Jelly" },
    { "id": 8, "name": "Chocolate Truffles (Box of 12)", "price": 8.99, "image": "https://via.placeholder.com/150?text=Chocolate+Truffles+12" },
    { "id": 9, "name": "Honeycomb Toffee", "price": 5.49, "image": "https://via.placeholder.com/150?text=Honeycomb+Toffee" },
    { "id": 10, "name": "Milk Chocolate Bar", "price": 1.99, "image": "https://via.placeholder.com/150?text=Milk+Chocolate+Bar" },
    { "id": 11, "name": "Fudge Brownies (Pack of 6)", "price": 4.99, "image": "https://via.placeholder.com/150?text=Fudge+Brownies+6" },
    { "id": 12, "name": "Candy Canes (Pack of 10)", "price": 3.49, "image": "https://via.placeholder.com/150?text=Candy+Canes+10" },
    { "id": 13, "name": "Sugar Cookies (Pack of 12)", "price": 2.99, "image": "https://via.placeholder.com/150?text=Sugar+Cookies+12" },
    { "id": 14, "name": "Chocolate-Covered Pretzels", "price": 4.99, "image": "https://via.placeholder.com/150?text=Chocolate+Pretzels" },
    { "id": 15, "name": "Gingerbread Cookies (Pack of 6)", "price": 3.59, "image": "https://via.placeholder.com/150?text=Gingerbread+Cookies" },
    { "id": 16, "name": "Brown Sugar Fudge", "price": 4.49, "image": "https://via.placeholder.com/150?text=Brown+Sugar+Fudge" },
    { "id": 17, "name": "Peanut Brittle", "price": 3.89, "image": "https://via.placeholder.com/150?text=Peanut+Brittle" },
    { "id": 18, "name": "Strawberry Lollipops (Pack of 5)", "price": 2.29, "image": "https://via.placeholder.com/150?text=Strawberry+Lollipops" },
    { "id": 19, "name": "Turkish Delight", "price": 6.99, "image": "https://via.placeholder.com/150?text=Turkish+Delight" },
    { "id": 20, "name": "Chocolates with Almonds (200g)", "price": 4.89, "image": "https://via.placeholder.com/150?text=Chocolates+with+Almonds" }
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