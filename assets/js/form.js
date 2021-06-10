let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');
let fillUsername = document.getElementById('created-name');
let errorPwd = document.getElementById('password-error');

function clearFields() {
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeat-password').value = '';
    errorMsg.innerHTML = '';
    errorPwd.innerHTML = '';
    
}





function handleSubmit(event) {
    event.preventDefault();
    //let name = form.elements.username.value;
    let name = document.getElementById('username').value;
    let password1 = form.elements['password'].value;
    let password2 = form.elements['repeat-password'].value;

    if ((usernames.includes(name)) && (password1 !== password2)) {

        errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
        
        
        
        errorPwd.innerHTML = "Please ensure your passwords match.";
        errorPwd.style.display = 'block';
        
    }

    else if ((usernames.includes(name)) && (password1 == password2)) {

        errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;

     } 
     
     
     else if ((!(usernames.includes(name))) && (password1 !== password2)) {

            let errorPwd = document.getElementById('password-error');
            errorPwd.innerHTML = `Please ensure your passwords match.`;
            errorPwd.style.display = 'block';
            errorMsg.innerHTML = '';

    } else {
        fillUsername.innerHTML = name;
        usernames.push(name);
        form.submit();
        console.log(usernames);
        clearFields();   
        
       
    }

    

}

