const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list')

function AddTask(){
    if(inputBox.value === ''){
        alert('You must write Something!')
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.className = "unchecked";
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = ""
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        e.target.classList.toggle("unchecked");
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false);