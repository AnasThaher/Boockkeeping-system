function addEmployee() {
    let newEmployee = {
      id: Date.now(),
      name: document.getElementById("employeeName").value,
    };
    let a = document.getElementById("employeeName").value;
    console.log(a);
    if (a != "") {
      let employees = JSON.parse(localStorage.getItem("employees")) || [];
      employees.push(newEmployee);
      document.getElementById("employeeName").value = "";
      localStorage.setItem("employees", JSON.stringify(employees));
    } else {
      console.log("the data is null");
      alert("The name is null");
    }
  
    console.log(localStorage.getItem("employees"));
  }
  