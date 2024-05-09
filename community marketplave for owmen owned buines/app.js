// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();

    document.getElementById('addProductForm').addEventListener('submit', addProduct);
});

async function fetchProducts() {
    const response = await fetch('products.php');
    const products = await response.json();

    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productsDiv.appendChild(productDiv);
    });
}

async function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;

    const response = await fetch('addProduct.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice
        })
    });

    const result = await response.json();
    if (result.success) {
        fetchProducts();
        document.getElementById('productName').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Failed to add product');
    }
}
