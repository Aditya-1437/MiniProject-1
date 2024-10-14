const register = () => {
    var fullname = document.regform.uname.value;
    var email = document.regform.umail.value;
    var password = document.regform.pass.value;
    var confirmPassword = document.regform.Cpass.value;

    if(fullname == "" || fullname == null){
        alert("Provide Valid Full Name");
        return false;
    }
    if(fullname.length <=3){
        alert("Full Name must be more than 3 characters");
        return false;
    }
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
    if(confirmPassword == "" || confirmPassword == null){
        alert("Provide Valid Confirm Password");
        return false;
    }
    if(password != confirmPassword){
        alert("Password does not match with Confirm Password");
        return false;
    }
    alert("Registration Successfull as "+fullname);
    return;

}

var home = document.getElementById("home")
var log = document.getElementById("log")

home.addEventListener('click', ()=>{
    window.location.href="./index.html";
})
log.addEventListener('click', ()=>{
    window.location.href="./login.html";
})