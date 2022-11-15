const errorMessages = document.getElementsByClassName("errorMessage");

for(let message of errorMessages){
    message.classList.add("display-none");
}

document.getElementById("programSubmit").addEventListener("click", function(){
    const form = document.getElementById("inputForm");
    form.submit();
});

document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();
    let isFormValid = true;
    const email = document.getElementById("email");
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const result = email.value.match(regEmail);
    console.log(result);

    const isEmailValid = result === null;
    toggleErrorMessage(isEmailValid, email);

    if(isEmailValid){
        isFormValid = false;
    }

    const password = document.getElementById("password");
    //To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter
    const regPassword = /^[A-Za-z]\w{7,14}$/;

    const resultPass = password.value.match(regPassword);
    console.log(resultPass);
    
    const isPassValid = result === null;
    toggleErrorMessage(isPassValid, password);
    if(isPassValid){
        isFormValid = false;
    }

    if(isFormValid){
        event.target.submit();
    }


});

function toggleErrorMessage(isFieldNotValid, formElement) {
    if(isFieldNotValid) {
        formElement.parentElement.querySelector(".errorMessage").classList.remove("display-none");
    } else {
        formElement.parentElement.querySelector(".errorMessage").classList.add("display-none");
    }
}