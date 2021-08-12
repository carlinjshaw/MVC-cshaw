
  console.log("SCRIPT IS CONNECTED")

function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
      if (email && password) {
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
  
      document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);