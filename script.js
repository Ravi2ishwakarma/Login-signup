
function myfun()
{
let password=document.querySelector("#password");
let cpassword=document.querySelector("#cpassword");

let pass=password.value;
let cpass=cpassword.value;
    if(pass===cpass)
        alert("Create accout successfully");
        
    else
        alert("Password does not match");
}