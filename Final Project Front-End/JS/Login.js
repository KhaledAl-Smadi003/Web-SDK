const btnlogin = document.getElementById("btnlogin");

btnlogin.addEventListener("click", () => {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }
  if (username === "admin" && password === "12345") {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "admin");

    window.location.href = "Project Management.html";

  } 
  else if (username === "khaled" && password === "121314") {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "user");

    window.location.href = "Home.html";

  } 
  else {
    alert("Wrong username or password");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

});