// Toggle mobile menu
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Mock product data
const products = [
    { id: 1, name: "T-shirt", price: 19.99, image: "tshirt.jpg" },
    { id: 2, name: "Jeans", price: 49.99, image: "jeans.jpg" },
    { id: 3, name: "Sneakers", price: 69.99, image: "sneakers.jpg" },
];

// Render products dynamically
const shopSection = document.querySelector(".shop-section");

function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        shopSection.appendChild(productCard);
    });
}

renderProducts();

// Shopping cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to the cart!`);
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cart.length;
}

// Add event listener for add-to-cart buttons
shopSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const productId = parseInt(e.target.dataset.id, 10);
        addToCart(productId);
    }
});

// Initialize cart count
updateCartCount();
