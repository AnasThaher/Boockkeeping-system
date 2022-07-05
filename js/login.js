function login() {
  let userData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  if (email != "" && password != "") {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (user of users) {
      

      if (user.email == email && user.passowrd == password) {
        console.log("sucsess");
        window.location.href = "C:/Users/dell/Boockkeeping-system/userPage.html";
        return;
      } else {
        continue;
      }
      
      
       
    }
     console.log("the data is not vaild");
        alert("email or password is not valid");
        return;
      
  } else {
    console.log("fill the fild");
    alert("fill the fild");
  }
}
