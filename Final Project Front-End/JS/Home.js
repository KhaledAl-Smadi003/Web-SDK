if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "Login.html";
}

if (localStorage.getItem("role") !== "admin") {
    const adminLink = document.querySelector(".admin-link");

    if (adminLink) {
        adminLink.style.display = "none";
    }
}
function logout() {
    localStorage.clear();
    window.location.href = "Login.html";
}