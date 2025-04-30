let start_btn=document.getElementById("start_btn");
let main_1=document.querySelector(".main-1")
let main_2=document.querySelector(".main-2")
let input_box=document.getElementById("input_box");
let add_btn=document.getElementById("add");
let list=document.getElementById("list");


start_btn.onclick=()=>{
   main_2.style.display="block"
   main_1.style.display="none" 
}

add_btn.onclick=()=>{
    if (input_box.value == ""){
        alert("Please enter your job..!")
    }else{
        let work=document.createElement("li");
        work.innerText=input_box.value;
        list.appendChild(work);
        let remove_btn=document.createElement("button");
        remove_btn.innerHTML=`remove`
        remove_btn.setAttribute("class","removeBtn")
        work.appendChild(remove_btn);

    }
    input_box.value="";
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    } else if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove(); 
    }
});
