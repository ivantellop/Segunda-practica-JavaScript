// Declaro la variable nota
let nota = 85; // Este valor se puede cambiar para probar diferentes resultados

// Con esto verifico el rango de la nota con condiciones if, else if, y else
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75 && nota < 90) {
  console.log("Bien");
} else if (nota >= 60 && nota < 75) {
  console.log("Suficiente");
} else if (nota < 60) {
  console.log("No aprueba");
} else {
  console.log("Nota inválida");
}
