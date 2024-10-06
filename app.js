let addToCart = document.getElementById("add-cart");
let addToCart2 = document.getElementById("add-cart2");
let addToCart3 = document.getElementById("add-cart3");
let addToCart4 = document.getElementById("add-cart4");
let addToCart5 = document.getElementById("add-cart5");
let addToCart6 = document.getElementById("add-cart6");
let addToCart7 = document.getElementById("add-cart7");
let addToCart8 = document.getElementById("add-cart8");
let addToCart9 = document.getElementById("add-cart9");

let quantity = document.getElementById("hidden");
let quantity2 = document.getElementById("hidden2");
let quantity3 = document.getElementById("hidden3");
let quantity4 = document.getElementById("hidden4");
let quantity5 = document.getElementById("hidden5");
let quantity6 = document.getElementById("hidden6");
let quantity7 = document.getElementById("hidden7");
let quantity8 = document.getElementById("hidden8");
let quantity9 = document.getElementById("hidden9");

let minusNum = document.getElementById("minus");

let qtyNum = document.getElementById("qtyNum");
let qtyNum1 = document.getElementById("qtyNum1");
let qtyNum2 = document.getElementById("qtyNum2");
let qtyNum3 = document.getElementById("qtyNum3");
let qtyNum4 = document.getElementById("qtyNum4");
let qtyNum5 = document.getElementById("qtyNum5");
let qtyNum6 = document.getElementById("qtyNum6");
let qtyNum7 = document.getElementById("qtyNum7");
let qtyNum8 = document.getElementById("qtyNum8");
let qtyNum9 = document.getElementById("qtyNum9");

let addNum = document.getElementById("add");
let cartSpan = document.getElementById("cartSpan");
let buttons = document.getElementById("buttons");
let showCart = document.getElementById("showCart");
let emptyCart = document.getElementById("emptyCart");

let arrCart = [];

// let objArr = [
//   {
//     name: "Waffle with Berries",
//     category: "Waffle",
//     price: 6.5,
//   },
//   {
//     name: "Vanilla Bean Crème Brûlée",
//     category: "Crème Brûlée",
//     price: 7.0,
//   },
// ];

function addToCartBtn(cartBtnId, qtyBtnId, qtyNumId) {
  let cartBtn = document.getElementById(cartBtnId);
  let qtyBtn = document.getElementById(qtyBtnId);
  let qtyNum = document.getElementById(qtyNumId);

  qtyNum.innerText = Number(qtyNum.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
  showCart.style.visibility = "visible";
  emptyCart.style.visibility = "collapse";
  cartBtn.style.visibility = "hidden";
  qtyBtn.style.visibility = "visible";
}

// Addition
// First Product
function addQtyNum(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}
// Subtraction
// First Product
function subNum(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum.innerText <= 0) {
    addToCart.style.visibility = "visible";
    quantity.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// Addition
// Second Product
function addQtyNum1(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum1.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// Subtraction
//Second product
function subNum1(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum1.innerText <= 0) {
    addToCart2.style.visibility = "visible";
    quantity2.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum1.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// Addition
//Third product
function addQtyNum2(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum2.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// Subtraction
// Third Product
function subNum2(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum2.innerText <= 0) {
    addToCart3.style.visibility = "visible";
    quantity3.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum2.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// Addition
// Fourth Product
function addQtyNum3(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum3.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// // Subtraction
//Fourth product
function subNum3(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum3.innerText <= 0) {
    addToCart4.style.visibility = "visible";
    quantity4.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum3.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// // Addition
//Fifth Product
function addQtyNum4(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum4.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// // Subtraction
// Fifth Product
function subNum4(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum4.innerText <= 0) {
    addToCart5.style.visibility = "visible";
    quantity5.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum4.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// // Addition
//Sixth Product
function addQtyNum5(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum5.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// // Subtraction
// Sixth Product
function subNum5(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum5.innerText <= 0) {
    addToCart6.style.visibility = "visible";
    quantity6.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum5.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// // Addition
// Seventh Product
function addQtyNum6(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum6.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// // Subtraction
// Seventh Product
function subNum6(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum6.innerText <= 0) {
    addToCart7.style.visibility = "visible";
    quantity7.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum6.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// // Addition
// Eighth Product
// function addQtyNum7(addNum) {
//   let addNumQty = document.getElementById(addNum);

//   addNumQty.innerText = Number(qtyNum7.innerText) + 1;
//   cartSpan.innerText = Number(cartSpan.innerText) + 1;
// }

// // Subtraction
//Eighth Product
// function subNum7(minusNum) {
//   let minusNumber = document.getElementById(minusNum);

//   if (qtyNum7.innerText <= 0) {
//     addToCart8.style.visibility = "visible";
//     quantity8.style.visibility = "hidden";
//   } else {
//     minusNumber.innerText = Number(qtyNum7.innerText) - 1;
//     cartSpan.innerText = Number(cartSpan.innerText) - 1;
//   }
// }

// // Addition
// Ninth Product
function addQtyNum8(addNum) {
  let addNumQty = document.getElementById(addNum);

  addNumQty.innerText = Number(qtyNum8.innerText) + 1;
  cartSpan.innerText = Number(cartSpan.innerText) + 1;
}

// // Subtraction
//Ninth Product
function subNum8(minusNum) {
  let minusNumber = document.getElementById(minusNum);

  if (qtyNum8.innerText <= 0) {
    addToCart9.style.visibility = "visible";
    quantity9.style.visibility = "hidden";
  } else {
    minusNumber.innerText = Number(qtyNum8.innerText) - 1;
    cartSpan.innerText = Number(cartSpan.innerText) - 1;
  }
}

// // Addition
// function addQtyNum1(addNum) {
//   let addNumQty = document.getElementById(addNum);

//   addNumQty.innerText = Number(qtyNum1.innerText) + 1;
//   cartSpan.innerText = Number(cartSpan.innerText) + 1;
// }

// // Subtraction
// function subNum1(minusNum) {
//   let minusNumber = document.getElementById(minusNum);

//   if (qtyNum1.innerText <= 0) {
//     addToCart2.style.visibility = "visible";
//     quantity2.style.visibility = "hidden";
//   } else {
//     minusNumber.innerText = Number(qtyNum1.innerText) - 1;
//     cartSpan.innerText = Number(cartSpan.innerText) - 1;
//   }
// }

// // Addition
// function addQtyNum1(addNum) {
//   let addNumQty = document.getElementById(addNum);

//   addNumQty.innerText = Number(qtyNum1.innerText) + 1;
//   cartSpan.innerText = Number(cartSpan.innerText) + 1;
// }

// // Subtraction
// function subNum1(minusNum) {
//   let minusNumber = document.getElementById(minusNum);

//   if (qtyNum1.innerText <= 0) {
//     addToCart2.style.visibility = "visible";
//     quantity2.style.visibility = "hidden";
//   } else {
//     minusNumber.innerText = Number(qtyNum1.innerText) - 1;
//     cartSpan.innerText = Number(cartSpan.innerText) - 1;
//   }
// }

// function addQtyNum2(addNum) {
//   let addNumQty = document.getElementById(addNum);

//   addNumQty.innerText = Number(qtyNum2.innerText) + 1;
// }

// function subNum2(minusNum) {
//   let minusNumber = document.getElementById(minusNum);

//   if (qtyNum2.innerText <= 1) {
//     addToCart.style.visibility = "visible";
//     quantity.style.visibility = "hidden";
//   } else {
//     minusNumber.innerText = Number(qtyNum2.innerText) - 1;
//   }
// }

// minusNum.addEventListener("click", () => {
//   if (qtyNum.innerText <= 1) {
//     cartBtn.style.visibility = "visible";
//     qtyBtn.style.visibility = "hidden";
//   } else {
//     qtyNum.innerText = Number(qtyNum.innerText) - 1;
//   }
// });

// Hold on
// addToCartBtn("addtocart");

// addToCart.addEventListener("click", () => {
//   addToCart.style.visibility = "hidden";
//   quantity.style.visibility = "visible";
// });

// buttons.addEventListener("click", () => {
//   buttons.style.visibility = "hidden";
//   quantity.style.visibility = "visible";
// });

// addNum.addEventListener("click", () => {
//   qtyNum.innerText = Number(qtyNum.innerText) + 1;

//   arrCart.push("element");
//   cartSpan.innerText = Number(arrCart.length);
// });

// minusNum.addEventListener("click", () => {
//   if (qtyNum.innerText <= 1) {
//     addToCart.style.visibility = "visible";
//     quantity.style.visibility = "hidden";
//     cartSpan.innerText = 0;
//   } else {
//     qtyNum.innerText = Number(qtyNum.innerText) - 1;
//     cartSpan.innerText = Number(arrCart.pop());
//     cartSpan.innerText = Number(arrCart.length);
//   }
// });
