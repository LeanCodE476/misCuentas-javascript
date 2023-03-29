const buttonLogin = document.querySelector('#btnLogin');
const form = document.querySelector('#form');
const inputUsuario = document.querySelector('#usuario');
const inputPassword = document.querySelector("#password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputUsuario.value === "" && inputUsuario.value === "") {
         console.log("hola");
       showAlert("Debes colocar un usuario o la password!");
    }
    if (inputUsuario.value === "admin" && inputUsuario.value === "admin") {
        location.href = "index.html";
       
    }

})
const showAlert = (text) => {
    document.querySelector('.alert').style.display = "block";
    document.querySelector(".text-alert").textContent = text;
    
    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";

    }, 1700);

}
