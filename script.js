// Run instantly when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});

// 📦 STORAGE HELPERS (Keeps your cart data safe when changing pages)
function getCart() {
    let cart = localStorage.getItem("mealMatrixCart");
    // If empty or corrupted, return a clean starting structure
    if (!cart || cart === "undefined") {
        return { items: [], total: 0 };
    }
    return JSON.parse(cart);
}

function saveCart(cartData) {
    localStorage.setItem("mealMatrixCart", JSON.stringify(cartData));
}

// 🛒 CART ACTIONS
function addToCart(itemName, price) {
    let cart = getCart();

    // Add item and update math
    cart.items.push({ name: itemName, price: Number(price) });
    cart.total = Number(cart.total) + Number(price);

    saveCart(cart);
    updateCartUI();

    alert(`${itemName} added to cart!`);
}

function updateCartUI() {
    let cart = getCart();

    // 1. Update Home Page Running Total (index.html)
    const homeTotal = document.getElementById("orderTotal");
    if (homeTotal) {
        homeTotal.innerText = `Running Total: Rs. ${cart.total}`;
    }

    // 2. Update Checkout Page Elements (contact.html)
    const cartList = document.getElementById("orderList");
    const checkoutTotal = document.getElementById("total");

    if (cartList && checkoutTotal) {
        cartList.innerHTML = ""; // Clear list

        if (cart.items.length === 0) {
            cartList.innerHTML = "<li>Your cart is empty.</li>";
        } else {
            cart.items.forEach(item => {
                let li = document.createElement("li");
                li.innerHTML = `<span>${item.name}</span> <span>Rs. ${item.price}</span>`;
                cartList.appendChild(li);
            });
        }
        checkoutTotal.innerText = `Total: Rs. ${cart.total}`;
    }
}

function placeOrder() {
    let cart = getCart();

    // Validation: Can't buy nothing!
    if (cart.items.length === 0) {
        alert("Your cart is empty! Please go to the Home page to add food.");
        return;
    }

    alert(`Order placed successfully! Your total is Rs. ${cart.total}.`);
    localStorage.removeItem("mealMatrixCart"); // Clear cart memory
    updateCartUI();
}

// 📋 FORM VALIDATIONS

function bookTable() {
    const name = document.getElementById("rname").value.trim();
    const date = document.getElementById("rdate").value;
    const time = document.getElementById("rtime").value;

    // Validation: Check if any fields are completely blank
    if (!name || !date || !time) {
        alert("Error: Please fill out your Name, Date, and Time to book a table.");
        return;
    }

    alert(`Success! Table reserved for ${name} on ${date} at ${time}.`);

    // Clear fields after success
    document.getElementById("rname").value = "";
    document.getElementById("rdate").value = "";
    document.getElementById("rtime").value = "";
}

function sendMessage() {
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const msg = document.getElementById("cmsg").value.trim();
    const msg = document.getElementById("cphone").value.trim();


    // Validation 1: Check for empty text fields
    if (!name || !email || !msg ||! Phone Number) {
        alert("Error: All contact fields (Name, Email, Message,Phone Number) are required.");
        return;
    }

    // Validation 2: Basic email pattern check (@ and .)
    if (!email.includes("@") || !email.includes(".")) {
        alert("Error: Please enter a valid email address.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear inputs
    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cmsg").value = "";
}
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const welcomeEl = document.getElementById("welcome");

    // Validation 1: Ensure fields aren't completely blank
    if (!email || !password) {
        alert("Error: Both email and password fields are required.");
        return;
    }

    // Validation 2: Ensure the email contains an '@' and a '.' symbol
    if (!email.includes("@") || !email.includes(".")) {
        alert("Error: Please enter a valid email address (e.g., name@example.com).");
        return;
    }

    // If both checks pass:
    if (welcomeEl) {
        welcomeEl.innerText = `Welcome Back, ${email}!`;
    }
    alert("Login successful!");
}
