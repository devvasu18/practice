// Product Data
const products = [
    { name: "Laptop", price: 8000 },
    { name: "iPhone", price: 50000 },
    { name: "Headphones", price: 1000 },
    { name: "Monitor", price: 2000 }
];

// Function to Display Products
function displayProducts(productList, containerId) {
    
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous list
    productList.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price.toFixed(2)}`;
        container.appendChild(li);
    });
}

// Initial Display of Products
displayProducts(products, "products");

// Apply Discount
document.getElementById("apply-discount").addEventListener("click", () => {
    const discountInput = document.getElementById("discount");
    const discount = parseFloat(discountInput.value);

    if (isNaN(discount) || discount <= 0 || discount > 100) {
        alert("Please enter a valid discount percentage (1-100).");
        return;
    }

    const discountedProducts = products.map(product => ({
        ...product,
        price: product.price * (1 - discount / 100)
    }));

    // Display Discounted Products
    displayProducts(discountedProducts, "discounted-products");
});




