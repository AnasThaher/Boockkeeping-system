function fillCustomersTable() {
    let currentCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    let customersTableData = ``;
    for (const customer of currentCustomers) {
        customersTableData += `
            <tr>
                <td>${customer.customer_name}</td>
                <td>${customer.reciept_amount}</td>
                <td>${customer.reciept_date}</td>
            </tr>
        `;
    }
    document.getElementById('customerTable').innerHTML = customersTableData;
}

function submitForm() {
    const newCustomer = {
        customer_name: document.getElementById('c_name').value,
        reciept_amount: document.getElementById('reciept amount').value,
        reciept_date: document.getElementById('reciept date').value,
    }
    let currentCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    currentCustomers.push(newCustomer);
    document.getElementById('c_name').value = '';
    document.getElementById('reciept amount').value = '';
    document.getElementById('reciept date').value = '';
    localStorage.setItem('customers', JSON.stringify(currentCustomers));
    fillCustomersTable();
}