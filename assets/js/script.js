let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');
let fillUsername = document.getElementById('created-name')

function clearFields() {
  document.getElementById('email').value = '';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('repeat-password').value = '';
  errorMsg.innerHTML = '';
}



function handleSubmit(event) {
  event.preventDefault();
  //let name = form.elements.username.value;
  let name = document.getElementById('username').value;
  if (usernames.includes(name)) {
    errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
  } else {

    fillUsername.innerHTML = name;
    usernames.push(name);
    form.submit();
    console.log(usernames);
    clearFields();
  }

}
