// float image box
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideimage");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
} 



// login button

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

function check(){
  let username,password;
  username=document.getElementById("uname1").value;
  password=document.getElementById("psw1").value;

  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{
    return v.username==username && v.password==password
  })){
    alert("Login Successfull");
    let current_user=user_records.filter((v)=>{
      return v.username==username && v.password==password
    })[0]

    localStorage.setItem("name",current_user.name);
    localStorage.setItem("username",current_user.username);
    localStorage.setItem("email",current_user.email);
    window.location.href="./source/account.html";
  }
  else{
    alert("login fail");
  }  
}


//sign up button
var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
 
function store(){
  let name,email, username,password;
            name=document.getElementById("name").value
            email=document.getElementById("email").value
            username=document.getElementById("uname").value
            password=document.getElementById("psw").value
            console.log(username,password)
            
            let user_records=new Array();
            user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
            if(user_records.some((v)=>{
              return v.email==email || v.username==username
            })){
              alert("duplicate data");
            }
            else{
              user_records.push({
                "name":name,
                "email":email,
                "username":username,
                "password":password

              })
              localStorage.setItem("users",JSON.stringify(user_records)) // stringyfy use to convert object into string
            }
 
            
}
// profile 
document.getElementById("profile").addEventListener("click", function() {
    document.getElementById("profileDropdown").classList.toggle("show");
  });
  
  window.onclick = function(event) {
    if (!event.target.matches('#profile')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // navigation
  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }