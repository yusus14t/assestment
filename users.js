window.addEventListener("load", () => {
  let credential = JSON.parse(window.localStorage.getItem("Credential"));
  console.log(credential);
  if (credential == null) {
    window.location.replace("index.html");
  } else {
    window.location("users.html");
  }
});
function userData(data) {
  console.log(data, "<<<<<<<<<<<<<<<<<<");
  return `<tr class="TableRow">
            <td class="SecondaryText">${data.id}</td>
            <td class="PrimaryText">
                <img
                src=${data.profilePic}
                alt="Profile Pic"
                />
            </td>
            <td class="SecondaryText">
                ${data.fullName}
            </td>
            <td class="PrimaryText">${data.dob}</td>
            <td class="SecondaryText">${data.gender}</td>
            <td class="SecondaryText">
                ${data.currentCity} ${data.currentCountry}
            </td>
            </tr>`;
}

const appendList = (data) => {
  let userDom = document.getElementById("User-data");
  userDom.innerHTML = `${data.map((user) => userData(user))}`;
};

window.addEventListener("load", async () => {
  let data = await fetch(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
  );
  data = await data.json();
  appendList(data);
});

// search
let searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let data = await fetch(
      `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchBox.value}`
    );
    data = await data.json();
    appendList(data);
  }
});

// reset//

let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  e.preventDefault()
  window.location.reload();
});
