let dataArr= JSON.parse(localStorage.getItem("sign-up"));
let form=document.querySelector("form")
form.addEventListener("submit",getData)

function getData(event){
    event.preventDefault();

    let obj={
        mail:form.mail.value,
        pwd:form.password.value
    }

    if(obj.mail=="" || obj.pwd==""){
        alert("Fill the Details")
    }else{
        flag=false;
        dataArr.forEach((elem,i)=>{
            if(obj.mail==elem.mail && obj.pwd==elem.pwd){
                flag=true;
            }
        })
        if(flag){
            alert("SignIn Successful")
        }else{
            alert("Enter Valid Credentials")
        }
        window.location.href = "index.html";
    }
}
