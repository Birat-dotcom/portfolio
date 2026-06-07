
window.onload = function () {
    showCart();
};

window.goToMenu = function () {
    showToast("🍽 Taking you to delicious menu...", "success");

    setTimeout(() => {
        window.location.href = "menu.html";
    }, 800);
};
let total = 0;

function addToCart(name, price) {
    price = Number(price);

    if (isNaN(price)) {
        showToast("Invalid price item!", "error");
        return;
    }

    total += price;

    showToast(`🍜 ${name} added to cart!`, "success");

    showCart();
}

function showCart() {
    const box = document.getElementById("orderTotal");

    if (!box) return;

    box.innerHTML = `Total: Rs ${total.toFixed(2)}`;
}
function bookTable() {
    let name = document.getElementById("rname").value.trim();
    let date = document.getElementById("rdate").value;
    let time = document.getElementById("rtime").value;

    if (!name || !date || !time) {
        showToast("⚠ Please fill all fields", "error");
        return;
    }

    if (name.length < 3) {
        showToast("⚠ Name must be at least 3 characters", "warning");
        return;
    }

    // date validation
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let selected = new Date(date);

    if (selected < today) {
        showToast("⚠ Cannot select past date", "warning");
        return;
    }

    // time validation
    if (!/^\d{2}:\d{2}$/.test(time)) {
        showToast("⚠ Invalid time format", "error");
        return;
    }

    let [h, m] = time.split(":");
    h = parseInt(h);

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    let formattedTime = `${h}:${m} ${ampm}`;

    let formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    showToast(
        `🍽 Booked for ${name} on ${formattedDate} at ${formattedTime}`,
        "success"
    );

    document.getElementById("rname").value = "";
    document.getElementById("rdate").value = "";
    document.getElementById("rtime").value = "";
}
function sendMessage() {
    let name = document.getElementById("cname").value.trim();
    let email = document.getElementById("cemail").value.trim();
    let msg = document.getElementById("cmsg").value.trim();

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!name || !email || !msg) {
        showToast("Please fill all fields", "error");
        return;
    }

    if (name.length < 3) {
        showToast("Name too short", "warning");
        return;
    }

    if (!emailPattern.test(email)) {
        showToast("Invalid email", "error");
        return;
    }

    if (msg.length < 10) {
        showToast("Message too short", "warning");
        return;
    }

    showToast("✅ Message sent successfully!", "success");

    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cmsg").value = "";
}

function login() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!email || !pass) {
        showToast("Please fill all fields", "error");
        return;
    }

    if (!emailPattern.test(email)) {
        showToast("Invalid email format", "error");
        return;
    }

    if (!passPattern.test(pass)) {
        showToast("Weak password format", "warning");
        return;
    }

    showToast("✅ Login successful", "success");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
document.querySelectorAll(".premium-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
});
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.className = `show ${type}`;

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
        toast.className = "";
    }, 3000);
}
