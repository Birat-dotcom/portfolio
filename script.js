// when page opens
window.onload = function () {
    showCart();
};

/* ---------- CART / MENU ---------- */
let total = 0;

function addToCart(name, price) {
    console.log("Price item:", price);
    console.log("Data type:", typeof price);
    total += Number(price);

    // User feedback
    alert(name + " added to cart!");
    
    
    showCart();
}
/* ---------- BOOK TABLE ---------- */
function bookTable() {
    let name = document.getElementById("rname").value;
    let date = document.getElementById("rdate").value;
    let time = document.getElementById("rtime").value;

    if (name == "" || date == "" || time == "") {
        alert("Fill all fields");
        return;
    }

    alert("Table booked for " + name);

    document.getElementById("rname").value = "";
    document.getElementById("rdate").value = "";
    document.getElementById("rtime").value = "";
}

/* ---------- CONTACT---------- */
function sendMessage() {
    // Added .trim() to prevent bypasses using empty spaces
    let name = document.getElementById("cname").value.trim();
    let email = document.getElementById("cemail").value.trim();
    let msg = document.getElementById("cmsg").value.trim();

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (name == "" || email == "" || msg == "") {
        alert("Fill all fields");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }

    alert("Message sent successfully!");
}

/* ---------- LOGIN ---------- */
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let passPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;

    if (email == "" || pass == "") {
        alert("Fill all fields");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }

    if (!passPattern.test(pass)) {
        alert("Password must be 6+ chars with letters + numbers");
        return;
    }

    alert("Login successful");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
