function Navbar() {
  return `<div class="LeftMenu">
    <div class="LogoWrapper">
    <img class="Lo" src="./assets/logo.png" alt="Logo" />
    <p class="BrandName">Kafene</p>
    </div>
    <nav>
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

let logout = document.getElementById("logout");
logout.style.cursor = "pointer";
logout.addEventListener("click", () => {
  localStorage.clear();
  window.location.replace("/index.html");
});
