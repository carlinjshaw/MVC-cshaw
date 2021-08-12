function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log("SCRIPT IS CONNECTED")
    
      if (email && password) {
        fetch('/data/users/login', {
          method: 'post',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
      }
    }
  
    document.querySelector('#login-form').addEventListener('submit', loginFormHandler);