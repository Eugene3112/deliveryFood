const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('name');

function toggleModalAuth(){
  modalAuth.classList.toggle('is-open');
}


function authorized(){
  function logOut(){
    login = '';
    checkAuth();
    buttonAuth.style.display = 'block';
    userName.style.display = 'none'; 
    buttonOut.style.display = 'none'; 
  }

  buttonAuth.style.display = 'none';
  userName.textContent = login;
  userName.style.display = 'block'; 
  buttonOut.style.display = 'block'; 

  buttonOut.addEventListener('click', logOut);

}

function noAuthorized(){

  function logIn(event){
    event.preventDefault();
    if (loginInput.value.trim()) {
      login = loginInput.value;
      localStorage.setItem('name', login);  

    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset()
    checkAuth();
    } else {
      alert('Введите логин!');
    }
  
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth(){
  if ( login ) {
    authorized();
  } else {
    noAuthorized();
  }
}

checkAuth();