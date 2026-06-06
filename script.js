// when page opens
window.onload = function () {
  showCart();
};
/* ---------- CART ---------- */
let total = 0;
function addToCart(name, price) {
  total = total + price;
  alert(name + " added");
  showCart();
}
function showCart() {
  let t = document.getElementById("orderTotal");
  if (t) {
    t.innerText = "Total: Rs " + total;
  }
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
}
/* ---------- CONTACT ---------- */
function sendMessage() {
    let name = document.getElementById("cname").value;
    let email = document.getElementById("cemail").value;
    let msg = document.getElementById("cmsg").value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }
    if (name == "" || email == "" || msg == "") {
        alert("Fill all fields");
        return;
    }
    alert("Message sent");
}
/* ---------- LOGIN ---------- */
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  // patterns (FIXED NAMES)
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let passPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
  // 1. empty check first
  if (email == "" || pass == "") {
    alert("Fill all fields");
    return;
  }
  // 2. email check
  if (!emailPattern.test(email)) {
    alert("Invalid email format");
    return;
  }
  // 3. password check
  if (!passPattern.test(pass)) {
    alert("Password must be 6+ chars with letters + numbers");
    return;
  }

  alert("Login successful");
}
