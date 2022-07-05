console.log("hello");
fullEmployee();
function fullEmployee() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let employeeData = ``;
  for (const emp of employees) {
    console.log(emp.name);

    employeeData += `
        <option value="${emp.name}">${emp.name}</option>
                `;
  }
  document.getElementById("empName").innerHTML = employeeData;
}

function addPayment() {
  let newPayment = {
    amount: document.getElementById("amount").value,
    date: document.getElementById("date").value,
    payee: document.getElementById("payee").value,
    userName: document.getElementById("empName").value,
  };

  //   console.log(newPayment);

  if (
    newPayment.amount != "" &&
    newPayment.date != "" &&
    newPayment.payee != ""
  ) {
    let payments = JSON.parse(localStorage.getItem("payments")) || [];
    payments.push(newPayment);
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
    document.getElementById("payee").value = "";
    localStorage.setItem("payments", JSON.stringify(payments));
  } else {
    console.log("the data is null");
    alert("The Data is not valid");
  }
}
