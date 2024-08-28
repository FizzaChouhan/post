// var selectedBackground = "";
// function bg() {
//     var modalContent = document.getElementsByClassName("modal-content")[0];
//     var items = document.getElementsByClassName("dropdown-item");

//     for (var i = 0; i < items.length; i++) {
//         items[i].onclick = function(event) {
//             event.preventDefault();
//             modalContent.style.backgroundImage = "url(" + this.href + ")";
//             modalContent.style.backgroundSize = "cover";
//             modalContent.style.backgroundPosition = "center";
//         };
//     }
// }
// function posted(event){
//     event.preventDefault()
//     var heading=document.getElementById("heading")
//     var title = document.getElementById("floatingInput")
//     var titleValue=title.value 
//     heading.textContent = titleValue;
//     console.log(titleValue);
//     var para=document.getElementById("para")
//     var text = document.getElementById("textArea")
//     var textValue=text.value 
//     para.textContent = textValue;
//     title.value = "";  
//     text.value = ""; 
//     var postModal = document.getElementById("modalDisplayPost");
//     postModal.style.backgroundImage = "url(" + selectedBackground + ")";
//     postModal.style.backgroundSize = "cover";
//     postModal.style.backgroundPosition = "center";

//     if (titleValue && textValue) { 
//         heading.textContent = titleValue;
//         para.textContent = textValue;
        
        
//         document.getElementById("deletePost").style.display = "inline";
//         document.getElementById("editPost").style.display = "inline";
//     }
   
// }
// function deletePost() {
//     var heading = document.getElementById("heading");
//     var para = document.getElementById("para");
//     heading.textContent = " ";
//     para.textContent = " ";
    
   
//     document.getElementById("deletePost").style.display = "none";
//     document.getElementById("editPost").style.display = "none";
// }

// function editPost() {
//     var heading = document.getElementById("heading").textContent;
//     var para = document.getElementById("para").textContent;
//     var title = document.getElementById("floatingInput");
//     var text = document.getElementById("textArea");
//     title.value = heading !== "Your Title Here" ? heading : ""; // Only set if not the default placeholder
//     text.value = para !== "Your text will appear here." ? para : "";
   
// }


var selectedBackground = "";  

function bg() {
    var modalContent = document.getElementsByClassName("modal-content")[0];
    var items = document.getElementsByClassName("dropdown-item");

    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function(event) {
            event.preventDefault();
            selectedBackground = this.href;  
            modalContent.style.backgroundImage = "url(" + selectedBackground + ")";
            modalContent.style.backgroundSize = "cover";
            modalContent.style.backgroundPosition = "center";
        };
    }
}

function posted(event) {
    event.preventDefault();
    
    var heading = document.getElementById("heading");
    var title = document.getElementById("floatingInput");
    var titleValue = title.value;
    heading.textContent = titleValue;

    var para = document.getElementById("para");
    var text = document.getElementById("textArea");
    var textValue = text.value;
    para.textContent = textValue;
    
    title.value = "";  
    text.value = ""; 

    // Apply the selected background to the submitted post area
    var postModal = document.getElementById("modalDisplayPost");
    postModal.style.backgroundImage = "url(" + selectedBackground + ")";
    postModal.style.backgroundSize = "cover";
    postModal.style.backgroundPosition = "center";

    if (titleValue && textValue) { 
        document.getElementById("deletePost").style.display = "inline";
        document.getElementById("editPost").style.display = "inline";
    }
}

function deletePost() {
    var heading = document.getElementById("heading");
    var para = document.getElementById("para");
    heading.textContent = " ";
    para.textContent = " ";
    
    document.getElementById("deletePost").style.display = "none";
    document.getElementById("editPost").style.display = "none";
}


// function editPost(event) {
//     // Find the parent element of the button
//     var postElement = event.target.parentNode;
    
//     // Get the heading and paragraph elements
//     var heading = postElement.querySelector('.heading');
//     var para = postElement.querySelector('.para');
    
//     // Prompt for new title and description
//     var newTitle = prompt("Enter new title:", heading.textContent);
//     var newText = prompt("Enter new description:", para.textContent);
    
//     // Update the heading and paragraph text if valid input is provided
//     if (newTitle !== null && newTitle.trim() !== "") {
//         heading.textContent = newTitle;
//     }
//     if (newText !== null && newText.trim() !== "") {
//         para.textContent = newText;
//     }
// }
function editPost(event) {
    var newTitle = prompt("Enter new title:", heading.textContent);
    var newText = prompt("Enter new description:", para.textContent);
    heading.textContent=newTitle
    para.textContent=newText
}
