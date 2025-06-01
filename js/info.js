
function aktualizujDateIZegar() {
  const teraz = new Date();
  document.getElementById("data").textContent =
    "Data: " + teraz.toLocaleDateString("pl-PL");
  document.getElementById("zegar").textContent =
    "Godzina: " + teraz.toLocaleTimeString("pl-PL");
}
setInterval(aktualizujDateIZegar, 1000);
aktualizujDateIZegar();

if (!sessionStorage.getItem("odwiedzinyZliczone")) {
  let odwiedziny = localStorage.getItem("licznikOdwiedzin") || 0;
  odwiedziny = parseInt(odwiedziny) + 1;
  localStorage.setItem("licznikOdwiedzin", odwiedziny);
  sessionStorage.setItem("odwiedzinyZliczone", "true");
}
document.getElementById("licznik").textContent = "Odwiedziny: " + localStorage.getItem("licznikOdwiedzin");

let startCzas = sessionStorage.getItem("czasStart");
if (!startCzas) {
  startCzas = Date.now();
  sessionStorage.setItem("czasStart", startCzas);
}
function aktualizujCzasNaStronie() {
  const teraz = Date.now();
  const roznica = Math.floor((teraz - startCzas) / 1000);
  const minuty = Math.floor(roznica / 60);
  const sekundy = roznica % 60;
  document.getElementById("czas").textContent =
    "Czas na stronie: " + minuty + " min " + sekundy + " s";
}
setInterval(aktualizujCzasNaStronie, 1000);
