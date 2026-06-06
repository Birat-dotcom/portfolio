// when page opens
window.onload = function () {
  showCart();
};
// ---------- CART ----------
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
// ---------- BOOK TABLE ----------
function bookTable() {
  let name = document.getElementById("rname").value;
  let date = document.getElementById("rdate").value;
  let time = document.getElementById("rtime").value;

  if (name == "" || date == "" || time == "") {
    alert("Fill all fields");
  } else {
    alert("Table booked for " + name);
  }
}
// ---------- CONTACT ----------
function sendMessage() {
  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let msg = document.getElementById("cmsg").value;
  if (name == "" || email == "" || msg == "") {
    alert("Fill all fields");
  } else {
    alert("Message sent");
  }
}
// ---------- LOGIN ----------
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (email == "" || pass == "") {
    alert("Fill all fields");
  } else {
    alert("Login successful");
  }
}
