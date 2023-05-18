$(document).ready(function() {
  $("#registroForm").validate({
    rules: {
      nombre: "required",
      correo: {
        required: true,
        email: true
      },
      fechaNacimiento: "required",
      genero: "required",
      contrasena: "required",
      confirmarContrasena: {
        required: true,
        equalTo: "#contrasena"
      },
      terminos: "required"
    },
    messages: {
      nombre: "Por favor, ingresa tu nombre y apellido",
      correo: {
        required: "Por favor, ingresa tu correo electrónico",
        email: "Por favor, ingresa un correo electrónico válido"
      },
      fechaNacimiento: "Por favor, ingresa tu fecha de nacimiento",
      genero: "Por favor, selecciona tu género",
      contrasena: "Por favor, ingresa una contraseña",
      confirmarContrasena: {
        required: "Por favor, repite la contraseña",
        equalTo: "Las contraseñas no coinciden"
      },
      terminos: "Debes aceptar los Términos y Condiciones"
    },
    errorElement: "div",
    errorPlacement: function(error, element) {
      if(element.is(":radio")){
        error.addClass("invalid-feedback");
        error.insertAfter(element.closest(".form-group")); 
        element.closest(".form-group").find(":radio").removeClass("is-valid is-invalid");       
      } else{
        error.addClass("invalid-feedback");
        error.insertAfter(element);
      }
    },
    highlight: function(element, errorClass, validClass) {
      if ($(element).is(":radio")) {
        return;
      }
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function(element, errorClass, validClass) {
      if ($(element).is(":radio")) {
        return;
      }
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
  });
});
$.validator.setDefaults({
  submitHandler: function () {
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'El formulario ha sido enviado correctamente.',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        $(location).attr('href', 'index.html')
      }
    });
  }
});