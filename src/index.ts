let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let numero1 = Number(dato1.value);
  let numero2 = Number(dato2.value);

  function esMultiplo(numero1: number, numero2: number): boolean {
    return numero1 % numero2 === 0;
  }
  if (esMultiplo(numero1, numero2)) {
    console.log(numero1 + " es multiplo de " + numero2);
  } else {
    console.log(numero1 + " no es multiplo de " + numero2);
  }
});
