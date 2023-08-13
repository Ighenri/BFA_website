
const body = document.querySelector("body");
const bookSeat = document.getElementById("book-seat");
const formContainer = document.getElementById("formcontain");

const icampYes = document.getElementById("icamp-yes");
const icampContainer = document.getElementById("icamp-contain");
setInterval(()=>{
  if (icampYes.checked) {
    icampContainer.classList.remove("hidden");
  }
  else {
    icampContainer.classList.add("hidden");
  }
}, 100)

const isValidEmail = (email) => {
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return re.test(String(email).toLowerCase());
}

const registerModal = document.querySelector('.register-modal');
const form = document.querySelector('form');
const email = document.getElementById('email');
let emailValue;


form.addEventListener('submit', (e) => {
  emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    e.preventDefault();
    email.style.borderBottomColor = 'red'
    alert('Enter a valid email address');

  }

})
