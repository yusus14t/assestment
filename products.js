window.addEventListener("load", () => {
  let credential = JSON.parse(window.localStorage.getItem("Credential"));
  // console.log(credential);
  if (credential == null) {
    window.location.replace("index.html");
  } else {
    window.location("products.html");
  }
});

function userData(data) {
  
  return `
    <tr class="TableRow ExpiredRow">
                <td class="SecondaryText">${data.id}</td>
                <td class="PrimaryText">
                  ${data.medicineName}
                </td>
                <td class="SecondaryText">
                  ${data.medicineBrand}.
                </td>
                <td class="PrimaryText__">
                  ${data.expiryDate}
                </td>
                <td class="SecondaryText">$${data.unitPrice}</td>
                <td class="SecondaryText">${data.stock}</td>
              </tr>
  
  `;
}

const appendList = (data) => {
  let userDom = document.getElementById("products-data");
  userDom.innerHTML = `${data.map((user) => userData(user))}`;
};

//----api call----//
const productlist = async () =>{
  let data = await fetch(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
  );
  data = await data.json();
  return data
}

window.addEventListener("load", async () => {
  let data = await productlist()
  appendList(data);
  let count = document.getElementById("count");
  count.innerHTML = Object.keys(data).length;
});
/////   end -------------//



let lowStock = document.getElementById("lowStock");
lowStock.addEventListener("change", async(e)=>{
  let data = await productlist()
  if(!e.target.checked){
    data = data.filter(d=> d.stock > 100)
    appendList(data);
    let count = document.getElementById("count");
    count.innerHTML = Object.keys(data).length;
  }
  else{
    appendList(data);
    let count = document.getElementById("count");
    count.innerHTML = Object.keys(data).length;
  }
})

let expired = document.getElementById("expired");
const date = new Date();

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); 
var yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;




  expired.addEventListener("change", async (e) => {
    let data = await productlist();
    if (!e.target.checked) {
      data = data.filter((d) => d.expiryDate >= today);
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    } else {
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    }
  });