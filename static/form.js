
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
  e.preventDefault();
  if (!isValidEmail(emailValue)) {
    email.style.borderBottomColor = 'red'
    alert('Enter a valid email address');
    
  }
  else {
    setTimeout(() => {
        body.innerHTML = `
        <div class="bg-black my-auto w-screen h-screen grid grid-cols-1 place-items-center">
        <div class="grid grid-cols-1 place-items-center gap-10 w-[80%] text-center">
        <h1 class="text-3xl sm:text-5xl text-white text-center shiny ">CONGRATULATIONS!!! YOU HAVE <span class="font-bold">FINALLLY RESERVED YOUR SEAT FOR THE NEXT BIG THING</span></h1>
          <p class="text-white text-xl">Kindly check your email for your e-ticket</p>
          <a href= "./index.html" class="inline-block px-10 py-2.5 rounded-full text-white registerBtn h-[600px] w-[70%] hover:font-bold">DISMISS MESSAGE</a>
        </div>
        </div>
      `
    },1000)
     
  }
})
