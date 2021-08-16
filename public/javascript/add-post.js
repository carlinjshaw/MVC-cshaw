
function addPost(event) {

    event.preventDefault();
    console.log("SCRIPT IS CONNECTED")
      const title = document.querySelector('#title-text').value.trim();
      const content = document.querySelector('#content-text').value.trim();
  
        if (title && content) {
          console.log("CONNECTED TO FETCH LOGIC")
          fetch('/data/posts', {
            method: 'post',
            body: JSON.stringify({
              title,
              content
            }),
            headers: { 'Content-Type': 'application/json' }
          }).then((response) => {console.log(response)
        
        
            if (response.ok) {
              document.location.replace("/dashboard");
            } else {
              alert(response.statusText);
            }
        })  
        }
      }



document.getElementById("add-post-button").addEventListener("click", addPost);