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
