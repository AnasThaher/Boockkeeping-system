function employeeName() {
  console.log("i am here");
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let payments = JSON.parse(localStorage.getItem("payments")) || [];

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  from = Date.parse(from);
  to = Date.parse(to);

  let employeeData = `<tr>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
  </tr>
  <tr>`;
  for (const emp of payments) {
    let d = Date.parse(emp.date);
    console.log(d);
    if (d >= from && d <= to) {
      employeeData += `
      
      <tr>
        <td>${emp.userName}</td>
        <td>${emp.date}</td>
        <td>${emp.amount}</td>
      </tr>
      
          `;
    } else {
    }
  }
  
  document.getElementById("empName").innerHTML = employeeData;
}
