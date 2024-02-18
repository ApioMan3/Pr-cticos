/*Crear una función de nombre validar que reciba una cadena, chequear que la cadena comience con 2 números, 
luego siga con cuatro letras mayúsculas y finalice con 1 número; si la cadena es valida, es decir, cumple con ese 
patrón muestre un díalogo informando el éxito; caso contrario lance una excepción y en el catch muestre el mensaje de fracaso.*/

function validar(cadena){
let patron =  /^\d{2}[A-Z]{4}\d{1}$/;

try {
    if (patron.test(cadena)) {
        console.log('La cadena "'+cadena+'" cumple con el patrón.');
    } else {
        console.log('La cadena "'+cadena+'" no cumple con el patrón.');
    }
} catch (error) {
    console.error("Fracaso:", error.message);
}

}

validar(prompt());