function validation(){
    if(document.Formfill.Username.value == ""){
        document.getElementById("result").innerHTML = "Ingresar usuario.";
        return false;
    } 
    else if(document.Formfill.Username.value.length < 6){
        document.getElementById("result").innerHTML = "Mínimo 6 caracteres.";
        return false;
    }
    else if(document.Formfill.Email.value == ""){
        document.getElementById("result").innerHTML = "Ingresar correo.";
        return false;
    }
    else if(document.Formfill.Password.value == ""){
        document.getElementById("result").innerHTML = "Ingresar contraseña.";
        return false;
    }
    else if(document.Formfill.Password.value.length < 6){
        document.getElementById("result").innerHTML = "Contraseña menor a 6 caracteres.";
        return false;
    }
    else if(document.Formfill.cPassword.value == ""){
        document.getElementById("result").innerHTML = "Confirmar contraseña.";
        return false;
    }
    else if(document.Formfill.cPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML = "Las contraseñas no coinciden.";
        return false;
    }
    else if(document.Formfill.cPassword.value == document.Formfill.Password.value){
        popup.classList.add("open-slide");
        return false;
    }
}

var popup = document.getElementById("popup"); 

function closeSlide(){
    popup.classList.remove("open-slide");
}