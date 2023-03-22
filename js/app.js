import { valida } from "./validaciones.js";

//tomar todos los input
const inputs = document.querySelectorAll("input");

//recorrer los input tomados 
inputs.forEach((input) => {
  //generar un evento a cada input (blur es cuando quitas el foco)
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
