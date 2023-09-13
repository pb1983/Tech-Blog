

const newFormHandler = async (event) => {
    event.preventDefault();
  

    const comment = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector("#singlepost").getAttribute("data-number");
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(response)
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };










// let posts = document.querySelector("#posts")

// posts.addEventListener("click", async function(event) {

// if (event.target.matches("button")) {
//     let clickedId = event.target.getAttribute("data-id")

//     const response = await fetch("/api/posts/" + clickedId, {
//         method: "DELETE",

//     })
    
//     await response.json();
//     if (response.status === 200) {
//     window.location.reload();
//     } else {
//         console.log("an error occured")
//     }
// }

// })


document.querySelector('#post-comment').addEventListener('click', newFormHandler);