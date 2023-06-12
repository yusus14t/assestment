function Navbar() {
  return `<div class="LeftMenu">
    <div class="LogoWrapper">
    <img class="Lo" src="./assets/logo.png" alt="Logo" />
    <p class="BrandName">Kafene</p>
    </div>
    <nav id="nav">
    <a class="MenuItem Active" href="/orders.html"
    >Orders</a
    ><a class="MenuItem" href="/products.html">Products</a
    ><a class="MenuItem" href="/users.html">Users</a>
    </nav>
    </div>
    <a id="logout" class="MenuItem">Logout</a>`;
  }
  let navbar = document.getElementsByClassName("navbar")[0];
  navbar.innerHTML = Navbar();
  
  var btns = document.getElementsByClassName("MenuItem");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("Active");
      current[0].className = current[0].className.replace(" Active", "");
      this.className += " Active";
    });
  }
let logout = document.getElementById("logout");
logout.style.cursor = "pointer";
logout.addEventListener("click", () => {
  localStorage.clear();
  window.location.replace("/index.html");
});

