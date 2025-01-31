
const products = [ { "id": 1, "name": "Nike Air Zoom Pegasus", "price": 120, "image": "https://via.placeholder.com/150?text=Nike+Air+Zoom+Pegasus" },
    { "id": 2, "name": "Converse Chuck Taylor", "price": 60, "image": "https://via.placeholder.com/150?text=Converse+Chuck+Taylor" },
    { "id": 3, "name": "Oxford Shoes", "price": 90, "image": "https://via.placeholder.com/150?text=Oxford+Shoes" },
    { "id": 4, "name": "Timberland 6-Inch Boots", "price": 150, "image": "https://via.placeholder.com/150?text=Timberland+Boots" },
    { "id": 5, "name": "Birkenstock Arizona", "price": 100, "image": "https://via.placeholder.com/150?text=Birkenstock+Arizona" },
    { "id": 6, "name": "Havaianas Flip-Flops", "price": 25, "image": "https://via.placeholder.com/150?text=Havaianas+Flip-Flops" },
    { "id": 7, "name": "Christian Louboutin Pigalle", "price": 695, "image": "https://via.placeholder.com/150?text=Christian+Louboutin+Pigalle" },
    { "id": 8, "name": "Sam Edelman Yaro", "price": 120, "image": "https://via.placeholder.com/150?text=Sam+Edelman+Yaro" },
    { "id": 9, "name": "Red Wing Iron Ranger", "price": 320, "image": "https://via.placeholder.com/150?text=Red+Wing+Iron+Ranger" },
    { "id": 10, "name": "UGG Scuff Slippers", "price": 80, "image": "https://via.placeholder.com/150?text=UGG+Scuff+Slippers" },
    { "id": 11, "name": "Crocs Classic Clog", "price": 40, "image": "https://via.placeholder.com/150?text=Crocs+Classic+Clog" },
    { "id": 12, "name": "Dr. Martens 2976 Chelsea Boots", "price": 150, "image": "https://via.placeholder.com/150?text=Dr+Martens+Chelsea+Boots" },
    { "id": 13, "name": "Asics Gel-Kayano", "price": 130, "image": "https://via.placeholder.com/150?text=Asics+Gel+Kayano" },
    { "id": 14, "name": "Burton Moto Ski Boots", "price": 200, "image": "https://via.placeholder.com/150?text=Burton+Moto+Ski+Boots" },
    { "id": 15, "name": "Vans SK8-Hi", "price": 65, "image": "https://via.placeholder.com/150?text=Vans+SK8-Hi" },
    { "id": 16, "name": "Merrell Waterpro Maipo", "price": 70, "image": "https://via.placeholder.com/150?text=Merrell+Waterpro+Maipo" },
    { "id": 17, "name": "Vans Classic Slip-On", "price": 55, "image": "https://via.placeholder.com/150?text=Vans+Classic+Slip-On" },
    { "id": 18, "name": "Salomon Speedcross", "price": 120, "image": "https://via.placeholder.com/150?text=Salomon+Speedcross" },
    { "id": 19, "name": "Columbia Newton Ridge", "price": 90, "image": "https://via.placeholder.com/150?text=Columbia+Newton+Ridge" },
    { "id": 20, "name": "Orthofeet Coral", "price": 130, "image": "https://via.placeholder.com/150?text=Orthofeet+Coral" }
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