const submitButton = document.querySelector(".submit-button");
const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;

submitButton.addEventListener('click', () => {
    if(username=="admin" && password=="admin"){
        window.location.href = "welcome.html";
    }
    else{
        alert("Wrong username or password");
    }
})