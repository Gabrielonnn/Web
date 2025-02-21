
let inputContraseña = "";
function agregarNumero(numero) {
    // Función para agregar el número al display superior
    inputContraseña += numero;
    document.getElementById("inputDisplay").innerText = inputContraseña;   
}

function verificarContrasena() {
    if(inputContraseña == "2022"){
        alert("Contraseña correcta");
        window.location.href = "ruta.html";
    }else{
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
        window.location.href = "Mal.html";
    }

}
function limpiarInput() {
   inputContraseña = "";
    document.getElementById("inputDisplay").innerText = inputContraseña;
}