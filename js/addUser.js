// fullUsersTable();
// function fullUsersTable() {
//     let currentUsers = JSON.parse(localStorage.getItem('users')) || [];
//     let userTableData = ``;
//     for (const user of currentUsers) {
//         userTableData += `
//             <tr>
//                 <td>${user.f_name}</td>
//                 <td>${user.s_name}</td>
//             </tr>
//         `;
//     }
//     document.getElementById('usersTable').innerHTML = userTableData;
// }
//const user = require('./User.js');
function updateFields(){
    document.getElementById('user name').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('company id').value = ' ';

}
function getFieldValue(value){
    return document.getElementById(value).value;

}
let Users = [];

function addUser() {
    const newUser = {
        name : getFieldValue('user name'),
        email : getFieldValue('email'),
        companyId : getFieldValue('company id')
    }
   // let user = new User(1,newUser.companyId,newUser.name,newUser.email);
   // Users.push(user);
   // let userName = getFieldValue("user name");
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    updateFields(); 
   // (getFieldValue('user name') != null)
    

    localStorage.setItem('users',JSON.stringify(users));
    

}
