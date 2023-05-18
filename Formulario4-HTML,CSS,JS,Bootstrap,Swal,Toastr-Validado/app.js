var formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var contrasena = document.getElementById('contrasena').value;
  var confirmarContrasena = document.getElementById('confirmar-contrasena').value;
  var fechaNacimiento = document.getElementById('fecha-nacimiento').value;
  var generoMasculino = document.getElementById('masculino').checked;
  var generoFemenino = document.getElementById('femenino').checked;
  var terminos = document.getElementById('terminos').checked;

  var nombreRegex = /^[A-Za-z]+$/;
  var correoRegex = /^\S+@\S+\.\S+$/;
  var currentDate = new Date();
  var birthDate = new Date(fechaNacimiento);
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  if (nombre.trim() === '') {
    toastr.error('El campo Nombre y Apellido es obligatorio');
    return;
  } else if (!nombre.match(nombreRegex)) {
    toastr.error('El campo Nombre y Apellido solo puede contener letras');
    return;
  } else if (correo.trim() === '') {
    toastr.error('El campo Correo Electrónico es obligatorio');
    return;
  } else if (!correo.match(correoRegex)) {
    toastr.error('Ingrese un correo electrónico válido');
    return;
  } else if (!fechaNacimiento) {
    toastr.error('Seleccione su fecha de nacimiento');
    return;
  } else if (age < 18) {
    toastr.error('Debe tener al menos 18 años de edad');
    return;
  } else if (!generoMasculino && !generoFemenino) {
    toastr.error('Seleccione su género');
    return;
  } else if (contrasena.trim() === '') {
    toastr.error('El campo Contraseña es obligatorio');
    return;
  } else if (contrasena.length < 6) {
    toastr.error('La contraseña debe tener al menos 6 caracteres');
    return;
  } else if (contrasena !== confirmarContrasena) {
    toastr.error('La confirmación de contraseña no coincide');
    return;
  } else if (!terminos) {
    toastr.error('Debe aceptar los Términos y Condiciones');
    return;
  } else {
    Swal.fire('Registro exitoso', '', 'success').then(function() {
      formulario.submit();
    });
    return;
  }
});
