const add_btn = document.getElementById("add-btn");
const container = document.getElementById("content");
const done = document.getElementsByClassName("done-btn");
const re_form = document.getElementById("form");
function add() {
    const add_task = document.getElementById("input-task").value ;
    if (add_task == "") {
        alert("you shoud write in the input");
    }
    else {
        // create new li 
        let new_li = document.createElement("li");
        // create the p to appent to the li 
        let content_text = document.createElement("p");
        // crate the text to appent to the p
        let text = document.createTextNode(add_task);
        content_text.appendChild(text);
        // create the remove button to appent to the li 
        let remove_btn = document.createElement("button");
        let text_btn = document.createTextNode("delete");
        remove_btn.appendChild(text_btn);
        remove_btn.className = "remove-btn";

        // create the done button to appent to the li 
        let done_btn = document.createElement("button");
        let text_done = document.createTextNode("done");
        done_btn.appendChild(text_done);
        done_btn.className = "done-btn";
        
        new_li.appendChild(content_text);
        new_li.appendChild(remove_btn);
        new_li.appendChild(done_btn);
        container.appendChild(new_li);
    }
    re_form.reset();
    saveData();
};
container.addEventListener('click', function(t){
    if(t.target.className === "remove-btn"){
        if(prompt("are you sour", "yes") == "yes"){
            t.target.parentElement.remove();
            saveData()
        }
    }
    else if (t.target.className === "done-btn"){
        const parant = t.target.parentElement;
        parant.classList.toggle("ops");
        saveData();
        setTimeout(showDone,100);
        setTimeout(deleteDone,2000);
    }
},false);
// this function is respons to push the data from the locale stoage
function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
// this function is respons to git the data from the locale storage
function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
// call function show task
showTask();
function showDone(){
    const done = document.getElementById("done");
    done.style.display = "block"
}
function deleteDone(){
    const done = document.getElementById("done");
    done.style.display = "none"
}






