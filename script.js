function showSection(id) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    const target = document.getElementById(id);

    if (target) {
        target.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const section = this.dataset.section;
            if (section) {
                showSection(section);
            }
        });
    });

    // HERO BUTTON
    const heroBtn = document.getElementById("heroOrderBtn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            showSection("menu");
        });
    }

    // CART BUTTONS (IMPORTANT FIX)
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function () {
            const price = Number(this.dataset.price);
            addToCart(price);
        });
    });

    // OTHER BUTTONS (SAFE BINDING)
    document.getElementById("loginBtn")?.addEventListener("click", login);
    document.getElementById("sendBtn")?.addEventListener("click", sendMessage);
    document.getElementById("bookBtn")?.addEventListener("click", bookTable);
    document.getElementById("placeOrderBtn")?.addEventListener("click", placeOrder);

    // SHOW HOME ON LOAD (IMPORTANT FIX)
    showSection("home");
});
// Hero button
let heroBtn = document.getElementById("heroOrderBtn");
if (heroBtn) {
    heroBtn.onclick = function () {
        showSection("menu");
    };
}
// Add to cart buttons
let cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach(function (btn) {
    btn.onclick = function () {
        let price = Number(btn.getAttribute("data-price"));
        addToCart(price);
    };
});
// Other buttons
let loginBtn = document.getElementById("loginBtn");
if (loginBtn) loginBtn.onclick = login;

let sendBtn = document.getElementById("sendBtn");
if (sendBtn) sendBtn.onclick = sendMessage;

let bookBtn = document.getElementById("bookBtn");
if (bookBtn) bookBtn.onclick = bookTable;

let placeOrderBtn = document.getElementById("placeOrderBtn");
if (placeOrderBtn) placeOrderBtn.onclick = placeOrder;
});
// Show/Hide sections
function showSection(id) {
    let sections = document.querySelectorAll(".section, .page");

    sections.forEach(function (sec) {
        sec.classList.add("hidden");
        sec.classList.remove("active");
    });

    let target = document.getElementById(id);
    if (target) {
        target.classList.remove("hidden");
        target.classList.add("active");
    }
}
// LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Fill all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    if (password.length < 4) {
        alert("Password too short!");
        return;
    }

    document.getElementById("welcome").innerText = "Welcome " + email;
    alert("Login successful!");
}
// CONTACT FORM
function sendMessage() {
    let name = document.getElementById("cname").value;
    let email = document.getElementById("cemail").value;
    let msg = document.getElementById("cmsg").value;

    if (!name || !email || !msg) {
        alert("Fill all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    if (msg.length < 10) {
        alert("Message too short!");
        return;
    }

    alert("Message sent!");
}
// BOOK TABLE
function bookTable() {
    let name = document.getElementById("rname").value;
    let date = document.getElementById("rdate").value;
    let time = document.getElementById("rtime").value;
    if (!name || !date || !time) {
        alert("Fill all details!");
        return;
    }
    let today = new Date();
    let selected = new Date(date);
    if (selected < today.setHours(0, 0, 0, 0)) {
        alert("Select future date!");
        return;
    }
    alert("Table booked!");
}
// CART
let total = 0;

function addToCart(price) {
    total += price;

    document.getElementById("orderTotal").innerText = "Total: Rs." + total;
    document.getElementById("total").innerText = "Total: Rs." + total;

    alert("Added to cart!");
}