let cart = [];

function addToCart(itemName,itemPrice){

  const existingItem =
  cart.find((item)=> item.name === itemName);

  if(existingItem){

    existingItem.quantity += 1;

  }else{

    cart.push({
      name:itemName,
      price:itemPrice,
      quantity:1
    });

  }

  updateCart();
}

function updateCart(){

  let cartHTML = "";

  let total = 0;

  cart.forEach((item)=>{

    const itemTotal =
    item.price * item.quantity;

    cartHTML += `

      <div class="cart-item">

        <h3>${item.name}</h3>

        <p>Price: ₹${item.price}</p>

        <p>Quantity: ${item.quantity}</p>

        <p>Item Total: ₹${itemTotal}</p>

        <button onclick="removeItem('${item.name}')">
          Remove
        </button>

      </div>

    `;

    total += itemTotal;

  });

  document.getElementById("cartItems")
  .innerHTML = cartHTML;

  document.getElementById("totalPrice")
  .innerHTML = "Total: ₹" + total;
}

function removeItem(itemName){

  cart =
  cart.filter((item)=> item.name !== itemName);

  updateCart();
}

document
.getElementById("whatsappBtn")
.addEventListener("click",sendWhatsAppOrder);

function sendWhatsAppOrder(){

  const customerName =
  document.getElementById("customerName").value;

  const customerPhone =
  document.getElementById("customerPhone").value;

  const customerAddress =
  document.getElementById("customerAddress").value;

  let total = 0;

  let message =
`Hello Deepak Sweets & Restaurant

Customer Name: ${customerName}

Phone: ${customerPhone}

Address: ${customerAddress}

Order Details:
`;

  cart.forEach((item)=>{

    const itemTotal =
    item.price * item.quantity;

    message += `
${item.name}
Quantity: ${item.quantity}
Item Total: ₹${itemTotal}

`;

    total += itemTotal;

  });

  message += `
Total Bill: ₹${total}
`;

  const whatsappNumber =
  "919811859294";

  const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL,"_blank");
}