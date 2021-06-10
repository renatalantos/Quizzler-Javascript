let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];

// Write your code here
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('error');


function handleSubmit(event){
    event.preventDefault();
    //let name = form.elements.username.value;
    let name = document.getElementById('username').value;
    if (usernames.includes(name)) {
        errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
    } else {
        usernames.push(name);
        form.submit();
        console.log(usernames);
    }
}