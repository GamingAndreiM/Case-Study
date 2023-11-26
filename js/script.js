function SignUp(event) {
  event.preventDefault();

  var username = document.querySelector('input[name="Uname"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="pass"]').value;
  var rpass = document.querySelector('input[name="Rpass"]').value;

  if (username && email && password && rpass) {
    window.location.href = "./Login.html";
  } else {
    alert("Please fill in all fields.");
  }
}

function Login(event) {
  event.preventDefault();

  var username = document.querySelector('input[name="Uname"]').value;

  var password = document.querySelector('input[name="pass"]').value;

  if (username && password) {
    window.location.href = "./index.html";
  } else {
    alert("Please Enter the Username and Password.");
  }
}
