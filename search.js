function updateFields(){
    document.getElementById('customer name').value = ' ';
    document.getElementById('from_date').value = ' ';
    document.getElementById('to_date').value = ' ';

}
function getFieldValue(value){
    return document.getElementById(value).value;

}
function serchCustomer() {
    let customers = JSON.parse(localStorage.getItem('customr')) || [];
    //let customer_name = customers.getElementById('customer name');
    console.log(JSON.stringify(customers));
    updateFields(); 
   // localStorage.setItem('users',JSON.stringify(users));
    

}
