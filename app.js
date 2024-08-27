function posted(event){
    event.preventDefault()
    var heading=document.getElementById("heading")
    var title = document.getElementById("floatingInput")
    var titleValue=title.value 
    heading.textContent = titleValue;
    console.log(titleValue);
    var para=document.getElementById("para")
    var text = document.getElementById("textArea")
    var textValue=text.value 
    para.textContent = textValue;
    title.value = "";  
    text.value = ""; 

    if (titleValue && textValue) { 
        heading.textContent = titleValue;
        para.textContent = textValue;
        
        
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

function editPost() {
    var heading = document.getElementById("heading").textContent;
    var para = document.getElementById("para").textContent;
    var title = document.getElementById("floatingInput");
    var text = document.getElementById("textArea");
    title.value = heading !== "Your Title Here" ? heading : ""; // Only set if not the default placeholder
    text.value = para !== "Your text will appear here." ? para : "";
   
}