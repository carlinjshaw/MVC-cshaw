
function signupFormHandler(event) {

  event.preventDefault();
  console.log("SCRIPT IS CONNECTED")
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

      if (username && password) {
        console.log("CONNECTED TO FETCH LOGIC")
        fetch('/data/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
      }
    }

document.getElementById("mysignup-form-button").addEventListener("click", signupFormHandler);