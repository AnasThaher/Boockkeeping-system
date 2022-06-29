function addCusomer() {
  let newCustomer = {
    id: Date.now(),
    name: document.getElementById("customerName").value,
  };
  let a = document.getElementById("customerName").value;
  console.log(a);
  if (a != "") {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.push(newCustomer);
    document.getElementById("customerName").value = "";
    localStorage.setItem("customers", JSON.stringify(customers));
  } else {
    console.log("the data is null");
    alert("The name is null");
  }

  console.log(localStorage.getItem("customers"));
}
