const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value===''){
        alert("u must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; // unicode for cross(*)
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();//whenever will add any task this save data will be called and it will save the updated version in the brwoser
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){ // it will take class = checked that we have define in style.css and if we already have it will toggle
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to store the element in the list even after the browser is closed

function saveData(){ // whatever text is in listContainer that will be stored in our local storage with name "data"
    localStorage.setItem("data",listContainer.innerHTML);
    // and we can display "data" using getItem data
}

//display the data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();