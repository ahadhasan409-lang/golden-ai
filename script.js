function login(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u=="admin" && p=="1234"){
alert("Login successful!")
}
else{
alert("Wrong username or password")
}

}
