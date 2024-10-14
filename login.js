const login = () => {
    var email = document.logform.umail.value;
    var password = document.logform.pass.value;

    if(email == "" || email == null){
        alert("Provide Valid Email Id");
        return false;
    }
    if(password == "" || password == null){
        alert("Provide Valid Password");
        return false;
    }
    if(password.length < 6){
        alert("Password must be more than 6 characters");
        return false;
    }
    alert("Login Successfull as "+email);
    return;

}

var home = document.getElementById("home")
var reg = document.getElementById("reg")

home.addEventListener('click', ()=>{
    window.location.href="./index.html";
})
reg.addEventListener('click', ()=>{
    window.location.href="./register.html";
})