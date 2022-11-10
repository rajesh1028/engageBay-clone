let dataArr= JSON.parse(localStorage.getItem("sign-up")) || [];
let form=document.querySelector("form")
form.addEventListener("submit",getData)

function getData(event){
    event.preventDefault();

    let obj={
        name:form.name.value,
        mail:form.username.value,
        url:form.url.value,
        pwd:form.password.value
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
