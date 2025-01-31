const products = [{ "id": 1, "name": "Floral Summer Dress", "price": 30, "image": "https://via.placeholder.com/150?text=Floral+Dress" },
    { "id": 2, "name": "Princess Party Gown", "price": 55, "image": "https://via.placeholder.com/150?text=Party+Gown" },
    { "id": 3, "name": "Casual Cotton T-Shirt", "price": 15, "image": "https://via.placeholder.com/150?text=Cotton+T-Shirt" },
    { "id": 4, "name": "Denim Jacket", "price": 40, "image": "https://via.placeholder.com/150?text=Denim+Jacket" },
    { "id": 5, "name": "Unicorn Pajama Set", "price": 25, "image": "https://via.placeholder.com/150?text=Unicorn+Pajamas" },
    { "id": 6, "name": "School Uniform Set", "price": 35, "image": "https://via.placeholder.com/150?text=School+Uniform" },
    { "id": 7, "name": "Polka Dot Skirt", "price": 22, "image": "https://via.placeholder.com/150?text=Polka+Dot+Skirt" },
    { "id": 8, "name": "Winter Woolen Coat", "price": 60, "image": "https://via.placeholder.com/150?text=Winter+Coat" },
    { "id": 9, "name": "Fairy Costume Dress", "price": 50, "image": "https://via.placeholder.com/150?text=Fairy+Dress" },
    { "id": 10, "name": "Printed Leggings", "price": 18, "image": "https://via.placeholder.com/150?text=Leggings" },
    { "id": 11, "name": "Striped Cotton Frock", "price": 28, "image": "https://via.placeholder.com/150?text=Striped+Frock" },
    { "id": 12, "name": "Hoodie Sweatshirt", "price": 35, "image": "https://via.placeholder.com/150?text=Hoodie" },
    { "id": 13, "name": "Sportswear Tracksuit", "price": 45, "image": "https://via.placeholder.com/150?text=Tracksuit" },
    { "id": 14, "name": "Cute Bunny Nightdress", "price": 27, "image": "https://via.placeholder.com/150?text=Nightdress" },
    { "id": 15, "name": "Sequin Party Dress", "price": 70, "image": "https://via.placeholder.com/150?text=Sequin+Dress" },
    { "id": 16, "name": "Disney Princess Dress", "price": 65, "image": "https://via.placeholder.com/150?text=Disney+Dress" },
    { "id": 17, "name": "Animal Print Hoodie", "price": 30, "image": "https://via.placeholder.com/150?text=Animal+Hoodie" },
    { "id": 18, "name": "Ruffled Sleeve Top", "price": 20, "image": "https://via.placeholder.com/150?text=Ruffled+Top" },
    { "id": 19, "name": "Embroidered Ethnic Dress", "price": 55, "image": "https://via.placeholder.com/150?text=Ethnic+Dress" },
    { "id": 20, "name": "Frozen Themed Dress", "price": 50, "image": "https://via.placeholder.com/150?text=Frozen+Dress" }

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