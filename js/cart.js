

// Arreglo para almacenar los productos en el carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart() {
    // Encontrar el producto en el DOM
    const productDetails = document.querySelector('.product-details');
    const productId = productDetails.getAttribute('data-id');
    const productName = productDetails.getAttribute('data-name');
    const productPrice = parseFloat(productDetails.getAttribute('data-price'));
    const productQuantity = parseInt(document.getElementById('quantity').value);

    
    const existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        existingProduct.quantity += productQuantity;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: productQuantity });
    }

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCart();
}

// Función para actualizar la vista del carrito
function updateCart() {
    const cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = '';

    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    const ul = document.createElement('ul');
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
        ul.appendChild(li);
    });
    cartContent.appendChild(ul);

    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total}`;
    cartContent.appendChild(totalElement);
}

// Función para cargar el carrito desde localStorage al cargar la página
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Función para vaciar el carrito
function emptyCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
}

// Función para proceder a la compra
function checkout() {
    alert('En un momento pasara al portal de pago');
    emptyCart();
}

// Cargar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    loadCart();

    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart-dropdown');
    const emptyCartButton = document.getElementById('empty-cart');
    const checkoutButton = document.getElementById('checkout');

    cartButton.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'none' || cartDropdown.style.display === '' ? 'flex' : 'none';
    });

    emptyCartButton.addEventListener('click', emptyCart);

    checkoutButton.addEventListener('click', checkout);
});
