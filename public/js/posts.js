let posts = document.querySelector("#posts")

posts.addEventListener("click", async function(event) {

if (event.target.matches("button")) {
    let clickedId = event.target.getAttribute("data-id")

    const response = await fetch("/api/posts/" + clickedId, {
        method: "DELETE",

    })
    
    await response.json();
    if (response.status === 200) {
    window.location.reload();
    } else {
        console.log("an error occured")
    }
}

})