function calcular() {
  const bin1 = document.getElementById("bin1").value.trim();
  const bin2 = document.getElementById("bin2").value.trim();
  const operacion = document.getElementById("operacion").value;
  const resultado = document.getElementById("resultado");

  if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
    resultado.textContent = "Ingresa solo números binarios";
    return;
  }

  const num1 = parseInt(bin1, 2);
  const num2 = parseInt(bin2, 2);
  let res;

  switch (operacion) {
    case "suma":
      res = num1 + num2;
      break;
    case "resta":
      res = num1 - num2;
      break;
    case "multiplicacion":
      res = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        resultado.textContent = " No se puede dividir entre 0";
        return;
      }
      res = Math.floor(num1 / num2); 
      break;
  }

  resultado.textContent = `${res.toString(2)} (decimal: ${res})`;
}

function resetear() {
  document.getElementById("bin1").value = "";
  document.getElementById("bin2").value = "";
  document.getElementById("operacion").selectedIndex = 0;
  document.getElementById("resultado").textContent = "";
}
