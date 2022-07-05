console.log("hello");
fullCustomer();
function fullCustomer() {
  let Customers = JSON.parse(localStorage.getItem("customers")) || [];
  let customerData = ``;
  for (const cus of Customers) {
    console.log(cus.name);

    customerData += `
        <option value="${cus.name}">${cus.name}</option>
                `;
  }
  document.getElementById("cusName").innerHTML = customerData;
}

function addReceipt() {
  let newReceipt = {
    amount: document.getElementById("amount").value,
    date: document.getElementById("date").value,
    paid: document.getElementById("paid").value,
    userName: document.getElementById("cusName").value,
  };

    // console.log(newReceipt);

  if (
    newReceipt.amount != "" &&
    newReceipt.date != "" &&
    newReceipt.paid != ""
  ) {
    let Receipts = JSON.parse(localStorage.getItem("receipts")) || [];
    Receipts.push(newReceipt);
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
    document.getElementById("paid").value = "";
    localStorage.setItem("receipts", JSON.stringify(Receipts));
  } else {
    console.log("the data is null");
    alert("The Data is not valid");
  }
}
