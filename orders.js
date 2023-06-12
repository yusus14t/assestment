
window.addEventListener("load", () =>{
    let credential = JSON.parse(window.localStorage.getItem("Credential"));
    console.log(credential);
    if (credential == null) {
      window.location.replace("index.html");
    } else {
      window.location("orders.html")
    }
  })

function userData(data) {
  return `<tr class="TableRow">
  <td class="SecondaryText">${data.id}</td>
  <td class="PrimaryText">${data.customerName}</td>
  <td class="PrimaryText">
  ${data.orderDate} <br /><span class="SecondaryText"
  >${data.orderTime}</span
  >
  </td>
  <td class="SecondaryText">${data.amount}</td>
  <td class="PrimaryText">${data.orderStatus}</td>
  </tr>`;
}




const appendList = (data) => {
  let orderDom = document.getElementById("orders-data");
  orderDom.innerHTML = `${data.map((user) => userData(user))}`;
};


const productlist = async () => {
  let data = await fetch(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
  );
  data = await data.json();
  return data;
};

window.addEventListener("load", async () => {
    let data = await productlist();
    appendList(data);
    count.innerHTML = Object.keys(data).length;

    
  });
  
  // -----------filter-----------------//

  //--------------new ---------------//
  let OrderStatus = document.getElementById("OrderStatus");

  OrderStatus.addEventListener("change", async (e) => {
    let data = await productlist();
    if (!e.target.checked) {
      data = data.filter((d) => d.orderStatus === "New");
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    } else {
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    }
  });
  
  //----------------------------------------//

  //---------------------pacekd----------------//
   let packed = document.getElementById("Packed");

   packed.addEventListener("change", async (e) => {
     let data = await productlist();
     if (!e.target.checked) {
       data = data.filter((d) => d.orderStatus === "Packed");
       appendList(data);
       let count = document.getElementById("count");
       count.innerHTML = Object.keys(data).length;
     } else {
       appendList(data);
       let count = document.getElementById("count");
       count.innerHTML = Object.keys(data).length;
     }
   });
  //-----------------////


  //////-------------delivered------------------///
  let delivered = document.getElementById("delivered");

  delivered.addEventListener("change", async (e) => {
    let data = await productlist();
    if (!e.target.checked) {
      data = data.filter((d) => d.orderStatus === "Delivered");
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    } else {
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    }
  });


  ///-------------------------------------Intrasnsit------///
  let Intrasnsit = document.getElementById("Intrasnsit");

  Intrasnsit.addEventListener("change", async (e) => {
    let data = await productlist();
    if (!e.target.checked) {
      data = data.filter((d) => d.orderStatus === "InTransit");
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    } else {
      appendList(data);
      let count = document.getElementById("count");
      count.innerHTML = Object.keys(data).length;
    }
  });