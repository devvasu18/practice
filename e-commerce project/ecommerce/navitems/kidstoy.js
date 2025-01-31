const products =[
    { "id": 1, "name": "Lego Classic Bricks Set", "price": 25, "image": "https://via.placeholder.com/150?text=Lego+Set" },
    { "id": 2, "name": "Hot Wheels Car Set", "price": 20, "image": "https://via.placeholder.com/150?text=Hot+Wheels" },
    { "id": 3, "name": "Barbie Dreamhouse Playset", "price": 180, "image": "https://via.placeholder.com/150?text=Barbie+Dreamhouse" },
    { "id": 4, "name": "Remote Control Car", "price": 40, "image": "https://via.placeholder.com/150?text=RC+Car" },
    { "id": 5, "name": "Plush Teddy Bear", "price": 18, "image": "https://via.placeholder.com/150?text=Teddy+Bear" },
    { "id": 6, "name": "Nerf Elite Blaster Gun", "price": 30, "image": "https://via.placeholder.com/150?text=Nerf+Gun" },
    { "id": 7, "name": "Dinosaur Action Figures", "price": 22, "image": "https://via.placeholder.com/150?text=Dinosaur+Figures" },
    { "id": 8, "name": "Play-Doh Set", "price": 15, "image": "https://via.placeholder.com/150?text=Play-Doh" },
    { "id": 9, "name": "Kids' Kitchen Play Set", "price": 50, "image": "https://via.placeholder.com/150?text=Kitchen+Set" },
    { "id": 10, "name": "Magic Drawing Board", "price": 35, "image": "https://via.placeholder.com/150?text=Drawing+Board" },
    { "id": 11, "name": "Soft Foam Building Blocks", "price": 45, "image": "https://via.placeholder.com/150?text=Foam+Blocks" },
    { "id": 12, "name": "Superhero Action Figures", "price": 28, "image": "https://via.placeholder.com/150?text=Superhero+Figures" },
    { "id": 13, "name": "Musical Toy Piano", "price": 55, "image": "https://via.placeholder.com/150?text=Toy+Piano" },
    { "id": 14, "name": "Bubble Blower Machine", "price": 25, "image": "https://via.placeholder.com/150?text=Bubble+Machine" },
    { "id": 15, "name": "Talking Parrot Plush Toy", "price": 35, "image": "https://via.placeholder.com/150?text=Talking+Parrot" },
    { "id": 16, "name": "Ride-on Electric Car", "price": 200, "image": "https://via.placeholder.com/150?text=Ride-on+Car" },
    { "id": 17, "name": "Puzzle Set (100 Pieces)", "price": 18, "image": "https://via.placeholder.com/150?text=Puzzle+Set" },
    { "id": 18, "name": "Doctor Play Set", "price": 30, "image": "https://via.placeholder.com/150?text=Doctor+Set" },
    { "id": 19, "name": "Wooden Train Set", "price": 50, "image": "https://via.placeholder.com/150?text=Train+Set" },
    { "id": 20, "name": "Stuffed Unicorn Plush", "price": 22, "image": "https://via.placeholder.com/150?text=Unicorn+Plush" }

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