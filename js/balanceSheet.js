balance();
function balance() {
  let receipts = JSON.parse(localStorage.getItem("receipts")) || [];
  let payments = JSON.parse(localStorage.getItem("payments")) || [];
  console.log(receipts, payments);
  let sum = 0;
  let spay = 0;
  let sres = 0;

  let balanceSheet = `<tr>
  <th>Name</th>
  <th>Date</th>
  <th>Amount</th>
</tr>
<tr>`;
  for (const pay of payments) {
    // console.log(emp.name);
    spay += parseInt(pay.amount);
    spay * -1;
    balanceSheet += `
    
    <tr>
      <td>${pay.userName}</td>
      <td>${pay.date}</td>
      <td>${pay.amount}</td>
    </tr>
    
        `;
  }
  console.log(spay);

  for (const res of receipts) {
    // console.log(res.name);
    sres += parseInt(res.amount);

    balanceSheet += `
    
    <tr>
      <td>${res.userName}</td>
      <td>${res.date}</td>
      <td>${res.amount}</td>
    </tr>
    
        `;


  }
  
  
  console.log(sres);
  sum = spay + sres;
  console.log(sum);

  balanceSheet+=`<tr>
  <td>Sum</td>
  <td></td>
  <td>${sum}</td>
</tr>`;

  document.getElementById("table1").innerHTML = balanceSheet;
}

{
  /* <strong class="dname">${emp.name}</strong> 

<a  href="" class="dbutn">Delete</a>

<a href="" class="dbutn2">Update</a> */
}
