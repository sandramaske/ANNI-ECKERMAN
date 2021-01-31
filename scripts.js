const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementsByClassName("dropdownMenu")[0];
menuToggle.addEventListener("click", function(){
    dropdownMenu.classList.toggle("showMenu");
});

function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message")
    var text;
    
    error_message.style.padding = "10px";

    if(name.lenght <3){
        text = "Please enter Valid Name"
        error_message.innerHTML = text;
        return false;
    }

    if(subject.lenght <3){
        text = "Please enter Subject"
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please enter correct Phone Number"
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexof("@") == -1 || email.length < 3 ){ 
        text = "Please enter correct Email"
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 50){
        text = "Please enter more than 50 characters"
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;
}
