document.getElementById("botonFormulario").addEventListener("click", function () {
  validarFormulario("formulario","nombre","mail","mensajeError","mensajeGracias","popupGracias");
});

document.getElementById("botonFormularioFinal").addEventListener("click", function () {
  validarFormulario("formularioFinal","nombreFinal","mailFinal","mensajeErrorFinal","mensajeGracias","popupGracias");
});


document.getElementById("boton-ok").addEventListener("click", function () {
    var popup = document.getElementById('popupGracias');
    popup.style.display = 'none';
});


function validarFormulario(idFormulario, idNombre, idMail, idMensajeError, idMensajeGracias, idPopup){
    event.preventDefault();
    var nombre = document.getElementById(idNombre).value;
    var mail = document.getElementById(idMail).value;
    var mensajeError = document.getElementById(idMensajeError);

    // Validación básica
    if (nombre === "" || mail === "") {
      mensajeError.textContent = "Por favor completá todos los campos.";
      return;
    }

    // Validar formato de email simple
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    if (!emailValido) {
      mensajeError.textContent = "Ingresá un email válido.";
      return;
    }

    mensajeError.textContent = "";

    var mensaje = document.getElementById(idMensajeGracias);
    var popup = document.getElementById(idPopup);
    mensaje.textContent = `¡GRACIAS ${nombre.toUpperCase()}!`;
    popup.style.display = 'block';
    var form = document.getElementById(idFormulario);
    form.reset();
}