const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
 
// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
 
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
 
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
// Render cart list
function renderCart() {
	cartList.innerHTML = "";
	cart.forEach((item, index) => {
		const li = document.createElement("li");
		li.innerHTML += `${item.name} - $${item.price}
		<button onclick="removeFromCart(${index})">Remove</button>`;
		cartList.appendChild(li)
	})
 
	sessionStorage.setItem("cart", JSON.stringify(cart));
}
 
 
// Add item to cart
function addToCart(productId) {
	let product = products.find((prod) => prod.id === productId);
	if(product) {
		cart.push(product);
		renderCart();
	}
}
 
// Remove item from cart
function removeFromCart(productId) {
	cart.splice(productId, 1);
	renderCart()
}

function clearCart() {
	cart = [];
	sessionStorage.removeItem("cart");
	renderCart();
}
 
// Initial render
renderProducts();
renderCart();