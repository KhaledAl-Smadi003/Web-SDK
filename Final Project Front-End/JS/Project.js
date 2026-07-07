if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "Login.html";
}
function logout() {
    localStorage.clear();
    window.location.href = "Login.html";
}