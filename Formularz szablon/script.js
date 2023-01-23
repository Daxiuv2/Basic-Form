const form = document.getElementById('formularz');
const password1 = document.getElementById("haslo1");
const password2 = document.getElementById("haslo2");
const errormess = document.getElementById("errormess");
const message = document.getElementById("mess");

let isValid = false;
let correctpass = false;

document.getElementById("powrot").addEventListener("click",funkcja3)
document.getElementById("start").addEventListener('click',funkcja1)
document.getElementById("confirm-but").addEventListener('click', funkcja2)

function funkcja1(){
document.getElementById("container").style.display="flex";
document.getElementById("headline").style.display="none";
document.getElementById("start").style.display="none";

}

function funkcja2(e){
   e.preventDefault();
   console.log(e);
   sprawdzFormularz();
   if(isValid&& correctpass){
       Dane()
       document.getElementById("powrot").style.display="block"
   }
    }
function funkcja3(){
    document.getElementById("powrot").style.display="none"
    document.getElementById("container").style.display="none";
document.getElementById("headline").style.display="block";
document.getElementById("start").style.display="block";
}
function sprawdzFormularz(){
    isValid = form.checkValidity();
    console.log(isValid)
    if (isValid===false){
    message.textContent = "Prosze wypelnic wszystkie pola"
    message.style.color = "red";
    errormess.style.borderColor = "red";
    }
    if (password1.value === password2.value){
        correctpass = true;
    }else {
        correctpass = false;
        message.textContent = "Hasla sa rozne"
        message.style.color = "red";
        errormess.style.borderColor = "red";
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
    }
    if(isValid&& correctpass) {
        message.textContent = 'Rejestracja przebiegla pomyslnie!'
        message.style.color = 'green';
        errormess.style.borderColor = 'green';
    }

}

function Dane(){
    const user ={
     imie: form.imie.value,
     telefon: form.telefon.value,
     email: form.email.value,
     haslo: form.haslo.value
    };
    console.log(user);
}

