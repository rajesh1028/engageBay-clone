document.querySelector("#image").addEventListener("click",function(){
    window.location.href="homepage.html"
})



let ans=document.querySelector("#slot")

let submit=document.querySelector("#submit");
submit.addEventListener("click",function(event){
    event.preventDefault();
    let selected=document.querySelector('input[type="radio"]:checked')
    if(selected==null){
        alert("Choose a slot")
    }else{
        alert("You have successfully scheduled a meeting")
        alert("Your meeting duration is "+selected.value+"")
    } 
})