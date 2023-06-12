
// Login and logout functionality  //
let login = document.getElementById("login");



let loginT = false
  
 if (login) {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  login.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value === password.value) {
      alert("Login Successfull");
      localStorage.setItem(
        "Credential",
        JSON.stringify({ user: username.value, password: password.value })
        );
        window.location.replace("/orders.html");
        loginT = true
      } else {
        alert("Please enter valid credentials!");
      }
      
    });
  }



