async function loginFormHandler(event) {
    event.preventDefault();
    console.log("SCRIPT IS CONNECTED")

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    
      if (username && password) {
        const response = await fetch('/data/users/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        })
      

      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
    }
  
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);