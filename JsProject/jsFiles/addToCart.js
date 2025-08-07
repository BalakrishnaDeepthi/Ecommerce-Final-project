function displayData() {
  let CartCon = document.getElementById("items");
  let totalPrice = document.getElementById("totalPrice");
  let products = JSON.parse(localStorage.getItem("cart")) || []
  console.log(products);

  if (products.length == 0) {
    CartCon.innerHTML = `<p>Cart is empty</p>`;
    totalPrice.innerHTML = "";
  }else{

 let total = 0
  products.map((val,ind) => {
    console.log(ind);
    let productDiv = document.createElement("div")

    total += val.price
    productDiv.innerHTML = `      
           <div class="item">
           <main>
             <img src="${val.images[0]}" height="200" width="160"/>
             </main>
             <main>
             <h1>${val.title}</h1>
             <p>Availability Status : ${val.availabilityStatus}</p>
             <p>category : ${val.category}</p>
             <p>Return Policy : ${val.returnPolicy}</p>
             <p>shippingInformation : ${val.shippingInformation}</p>
             <p>warrantyInformation: ${val.warrantyInformation}</p>
             <p>Price : $${val.price}</p>
              <button class="remove" onclick="removeItem(${ind})">Remove</button>
              </main>
           </div>
        
        `;
        totalPrice.innerHTML = `<h1>Total Price : $${total.toFixed(2)}</h1>`
        CartCon.append(productDiv)
  });
}
  }

function removeItem(itemId){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(itemId,1)
    localStorage.setItem("cart" , JSON.stringify(cart))
    alert("product removed from cart")
    displayData()
    console.log(cart);
    

}
displayData();
