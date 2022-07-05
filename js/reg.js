function reg() {
  let newUser = {
    id: Date.now(),
    idCompany: Date.now() + 1,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    companyName: document.getElementById("companyName").value,
    passowrd: document.getElementById("passowrd").value,
  };

  let newCompany = {
    idCompany: newUser.idCompany,
    city: document.getElementById("city").value,
    currency: document.getElementById("currency").value,
    companyName: newUser.companyName,
  };


  let na = document.getElementById("name").value;
  let em = document.getElementById("email").value;
  let comn = document.getElementById("companyName").value;
  let pass = document.getElementById("passowrd").value;

  let companes = JSON.parse(localStorage.getItem("companes")) || [];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let numOfUser = 0;

  for (const user of users) {
    if (user.idCompany == newUser.idCompany) {
      numOfUser++;
    }
  }
  if (numOfUser >= 3) {
    return alert("Check data");
  }

  if (na != "" && em != "" && comn != "" && pass != "" && pass.length > 8) {
    let companes = JSON.parse(localStorage.getItem("companes")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    companes.push(newCompany);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("passowrd").value = "";

    localStorage.setItem("companes", JSON.stringify(companes));
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "C:/Users/dell/Boockkeeping-system/login.html";

    console.log(localStorage.getItem("companes"));
    console.log(localStorage.getItem("users"));
  } else {
    console.log("the value is null");
    alert("Check data");
  }
}
