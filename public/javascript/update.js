async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="post-content"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

// if (title & content){

    const response = await fetch(`/data/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert("Content and Title are required");
    }
//   } else {
//       alert("Fill in the Title and Content")
//   }
} 
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);