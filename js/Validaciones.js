export function valida(input){
    const tipoDeInput= input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    //console.log(input.parentElement);
    //codigo para verificar la validacion del input y agregar o quitar estilo
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeError(tipoDeInput, input);
    }
}

//arreglo con los tipos de errores 
const tiposDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

//objeto con los tipos de mensajes
const mensajesDeError= {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",

    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El email no es valido"
    },
    password: {
        valueMissing: "La constraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener minimo una letra Mayuscula, una letra minuscula, un numero y no acepta caracteres"
    },
    nacimiento: {
        valueMissing: "El campo fecha no puede estar vacio",
        customError: "Debes de tener almenos 18 años de edad"
    },
    telefono: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXX-XXX-XXXX 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El domicilio requerido dene contener 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad requerido dene contener 10 a 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El estado requerido dene contener 10 a 40 caracteres"
    },
}




//objeto con todos los input con su funcion correspondiente 
const validadores = {
    //si 
    nacimiento: (input) => validarNacimiento(input),
}



//mensajes de error al invalid de input 
function mostrarMensajeError (tipoDeInput, input){
    let mensaje="";
    tiposDeErrores.forEach(error => {
        if(input.validity[error]){
            //console.log(tipoDeInput, error);
            //console.log(input.validity[error]);
            //console.log(mensajesDeError[tipoDeInput][error]);
            mensaje= mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje
}





function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje ="";
    if (!mayorEdad(fechaCliente)){
        mensaje= "Debes de tener almenos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}

function mayorEdad(fecha){
    const fechaHoy= new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear()+ 18, fecha.getUTCMonth(), fecha.getUTCDate())
    return diferenciaFechas < fechaHoy;
}