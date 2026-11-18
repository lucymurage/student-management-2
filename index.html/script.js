let student = [];

function getPerformance(marks){ 
    if(marks >=80){
        return "Excellent";
    }
    else if(marks>=70){
        return "Very Good";
    }
    else if(marks>=60){
        return "Good"
    }
    else if(marks>=50){
        return "Average"
    }
    else{
    return "Failed"
    }
}

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("student-name").value;
  const age = Number(document.getElementById("student-age").value);
  const gender = document.getElementById("student-gender").value;
  const course = document.getElementById("student-course").value;
  const marks = Number(document.getElementById("student-marks").value);

  if (name === "" || gender === "" || course === "") {
    console.log("Please fill in all fields");
    return;
  }

  if (isNaN(age) || age <= 0) {
    console.log("Age must be a valid number");
    return;
  }

  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Marks must be between 0 and 100");
    return;
  }

  console.log("All fields are filled");
});
