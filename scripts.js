function checkPassword() {
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;  
    if (password != repassword) {
      document.getElementById("message").innerHTML = "Passwords do not match";
      document.getElementById("message").style.color = "red";
    } 
    else {
      document.getElementById("message").innerHTML = "Passwords match";
      document.getElementById("message").style.color = "green";
    }
  }
  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Formun otomatik olarak submit olmasını engelle

    var name = document.getElementById("name").value; 
    console.log("Name: " + name); 
        var email = document.getElementById("email").value; 
    console.log("Mail: " + email); 
    var password = document.getElementById("password").value; 
    console.log("password: " + password); 
});

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var repassword = document.forms["myForm"]["repassword"].value;
  if (name == "") {
    alert("Please enter your name");
        return false;
  }
  if (email == "") {
    alert("Please enter your e-mail address");
    return false;
  }
  if (password == "") {
    alert("Please enter your password");
    return false;
  }
  if (repassword == "") {
    alert("Please enter your repassword");
    return false;
  }  
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    alert("Geçerli bir e-posta adresi girin");
    return false;
  }
}