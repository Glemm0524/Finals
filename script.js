let totalPrice = 0;

function addToTotal(price) {
  totalPrice += price;
  document.getElementById("totalPrice").textContent = totalPrice;
}

function calculateDifference() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  const difference = inputNumber - totalPrice;
  document.getElementById("difference").textContent = difference;
}