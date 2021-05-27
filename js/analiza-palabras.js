const unionArray = [];
function analizaPalabras(palabras) {
  palabras.forEach((palabra) => unionArray.push(palabra));
  unionArray.forEach((palabra, index) => {
    palabras.push(palabra);
    console.log("#######");
    console.log(`Palabra ${index + 1}: ${palabra}`);
    console.log(`Nº de caracteres: ${palabra.length}`);
    let snake = palabra.charAt(0);
    for (const i of palabra.slice(1)) {
      snake += `-${i}`;
    }
    console.log(`Deletreo: ${snake}`);
    let par = false;
    let mayus = false;
    if (palabra.length % 2 === 0) {
      par = true;
    }
    if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
      mayus = true;
    }
    //   console.log(`es par? ${par} y es mayus? ${mayus}`);
    if (par === true && mayus === true) {
      console.log("La palabra es par y empieza por mayuscula.");
    } else if (par === true && mayus !== true) {
      console.log("La palabra es par y no empieza por mayuscula.");
    } else if (par !== true && mayus === true) {
      console.log("La palabra no es par y empieza por mayuscula.");
    } else {
      console.log("La palabra no es par y no empieza por mayuscula.");
    }
    if (palabra.indexOf("ble") >= 0) {
      console.log(`La palabra si contiene "ble"`);
    } else {
      console.log(`La palabra no contiene "ble"`);
    }
  });
  console.log(unionArray);
}
