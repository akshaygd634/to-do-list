const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
const btn=document.querySelector(".btn")
const res=document.querySelector(".res")
// to add entered text in list
btn.addEventListener("click",()=>{
    if(inputBox.value ===''){
        alert("you must write something ")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    save()
})

// to check, unchecked and remove list
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        save()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)

// to save data even after refresh
let save=()=>{
    localStorage.setItem("data", listContainer.innerHTML)
}

let showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()

//reset the all the checked value to unchecked
res.addEventListener("click",()=>{
    let items = listContainer.querySelectorAll("li");
  items.forEach(item => {
    item.classList.remove("checked");
  });
  save();
   
})

