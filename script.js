const container = document.querySelector(".container");
const valuebtn = document.querySelector("#valuebtn");
// Get the value from input field
function createSquare(num) {
    num = num*8;
    for (i = 0; i < num; i++) {
        const div = document.createElement("div");
        // Add event listener to each div element 
        div.addEventListener('mouseenter', function() {  // On mouse enter
            div.classList.add("onhover");  
        });

        container.appendChild(div)
    }
}
valuebtn.addEventListener("click", () => {
    let square = parseInt(document.querySelector("#numberofSquare").value);
    if (square > 0) {
        container.innerHTML = ""; // This line will reset the .container div to an empty state before creating new squares
        createSquare(square);
    }
    else {
        alert("Error type a number only!");
    }

})
