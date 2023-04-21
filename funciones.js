// Función que siempre devuelve true
function alwaysTrue() {
  return true;
}

// Función asíncrona que usa setTimeout para imprimir un mensaje después de 5 segundos
async function delayedGreeting() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("Hola, soy una promesa!");
}

// Generador que produce índices pares automáticamente
function* evenIndexGenerator() {
  let index = 0;
  while (true) {
    yield index;
    index += 2;
  }
}
