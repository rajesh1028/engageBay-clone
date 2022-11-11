let button=document.querySelector("#hi")
button.addEventListener("click",submit)

function submit(event){
    event.preventDefault();
    alert("Fill the required details in the upcoming page !")
    window.location.href = "signup.html"
}

let cell=document.querySelector("#cell")
cell.addEventListener("click",redirect)

let dataArr= JSON.parse(localStorage.getItem("sign-up")) || [];

function redirect(){
    let name=document.querySelector("#name").value

    let url=document.querySelector("#url").value

    let mail=document.querySelector("#mail").value

    let pwd=document.querySelector("#password").value

    let obj={
        name,
        url,
        mail,
        pwd
    }

    if(obj.name=="" || obj.mail=="" || obj.url=="" || obj.pwd==""){
        alert("Fill all the Details")
    }else{
        dataArr.push(obj);
        localStorage.setItem("sign-up",JSON.stringify(dataArr))
        alert("SignUp Successful")
        window.location.href = "signin.html";
    }

}

let login=document.querySelector("#login")
login.addEventListener("click",function(){
    window.location.href="signin.html";
})