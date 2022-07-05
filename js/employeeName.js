employeeName();
function employeeName() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let payments = JSON.parse(localStorage.getItem("payments")) || [];
  let sum=0;

  let employeeData = `<tr>
  <th>Name</th>
  <th>Date</th>
  <th>Amount</th>
</tr>
<tr>`;
  for (const emp of payments) {
    console.log(emp.name);

    employeeData += `
    
    <tr>
      <td>${emp.userName}</td>
      <td>${emp.date}</td>
      <td>${emp.amount}</td>
    </tr>
    
        `;  
        sum+= parseInt(emp.amount);

  }

    employeeData+=`<tr>
        <td>Sum</td>
        <td></td>
        <td>${sum}</td>
        </tr>`;
        console.log(employeeData);
        console.log("SADDDDDDDDDDD")
  document.getElementById("empName").innerHTML = employeeData;
}

{
  /* <strong class="dname">${emp.name}</strong> 

<a  href="" class="dbutn">Delete</a>

<a href="" class="dbutn2">Update</a> */
}
