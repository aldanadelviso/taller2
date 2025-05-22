document.getElementById("botonFormulario").addEventListener("click", function () {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var mail = document.getElementById("mail").value;
  var mensajeError = document.getElementById("mensajeError");

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

  var mensaje = document.getElementById("mensajeGracias");
  var emailPopUp = document.getElementById("emailPopUp");
  var popup = document.getElementById("popupGracias");
  mensaje.textContent = `¡GRACIAS ${nombre.toUpperCase()}!`;
  emailPopUp.textContent= `${mail}`;

  popup.style.display = 'block';
  var form = document.getElementById("formulario");
  form.reset();
});


document.getElementById("boton-ok").addEventListener("click", function () {
    var popup = document.getElementById('popupGracias');
    popup.style.display = 'none';
});