// menu para tablet y mobile

const bMore = document.querySelector('#bMore');
const submenu = document.querySelector('#submenu');

        bMore.addEventListener('click', (e) => {
            submenu.classList.toggle('collapsed');
        });

const bMoreM = document.querySelector('#bMoreM');
const submenu_mobile = document.querySelector('#submenu_mobile');
        
        bMoreM.addEventListener('click', (e) => {
            submenu_mobile.classList.toggle('collapsed');
        });


// formulario 

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    empresa : /^[a-zA-Z0-9\_ \-]{4,16}$/, //Le decimos que el campo usuario solo acepte letras minusculas, mayusculas y numeros
    nombre : /^[a-zA-ZÁ-ÿ\s]{1,40}$/, //Aqui acepta letras con o sin acento y espacio
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Acepta de todo menos caracteres especiales
    telefono : /^\d{7,14}$/, //Acepta mínimo 7 y máximo 14 números.
    mensaje : /^[a-zA-Z0-9\_ \-]{4,16}$/
}

const campos = {
    Empresa: false,
    nombre : false,
    correo : false,
    telefono : false,
    mensaje : false
}

const validarFormulario = (e) => {   
    switch (e.target.name) {
        case "empresa":
            validarCampo(expresiones.empresa, e.target, "empresa");
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
            break;
        // case "mensaje":
        //     validarCampo(expresiones.mensaje, e.target, "mensaje");
        //     break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove("formulario_input-error-activo");
        campos[campo]=true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add("formulario_input-error-activo");
        campos[campo]=false;
        console.log("funciona");
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

// campos.empresa && campos.nombre && campos.mail && campos.telefono && campos.mensaje

    if(campos.empresa && campos.nombre && campos.email && campos.telefono) {
        formulario.reset()

        document.getElementById("formulario_exito").classList.add("formulario_exito-activo");
        document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje-activo");

        document.querySelectorAll(".formulario_grupo--correcto").forEach((icono)=>{
            icono.classList.remove("formulario_grupo--correcto");
        });


    } else {
        document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo");
    }
});