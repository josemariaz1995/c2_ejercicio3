const unionArray = [];
function analizaPalabras(palabras) {
  palabras.forEach((palabra) => unionArray.push(palabra));
  unionArray.forEach((palabra, index) => {
    palabras.push(palabra);
    console.log("#######");
    console.log(`Palabra ${index + 1}: ${palabra}`);
    console.log(`Nº de caracteres: ${palabra.length}`);
    const snake = deletreo(palabra);
    console.log(`Deletreo: ${snake}`);
    const par = esPar(palabra);
    const mayus = esMayus(palabra);
    console.log(
      `La palabra ${esPar(palabra) ? "" : "no"} es par y ${
        esMayus(palabra) ? "" : "no "
      }empieza por mayuscula.`
    );
    //   console.log(`es par? ${par} y es mayus? ${mayus}`);
    if (palabra.indexOf("ble") >= 0) {
      console.log(`La palabra si contiene "ble"`);
    } else {
      console.log(`La palabra no contiene "ble"`);
    }
    return unionArray;
  });
  console.log(unionArray);
}

const deletreo = (texto) => texto.split("").join("-");
const esPar = (texto) => texto.length % 2 === 0;
const esMayus = (texto) => texto.charAt(0) === texto.charAt(0).toUpperCase();
