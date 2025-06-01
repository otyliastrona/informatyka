function obliczKoszt() {
  const kwh = parseFloat(document.getElementById('kwh').value);
  const cena = parseFloat(document.getElementById('cena').value);
  const dni = parseFloat(document.getElementById('dni').value);
  const urz = parseFloat(document.getElementById('urz').value);
  const wynik = kwh * cena * dni * urz;
  document.getElementById('wynik').innerText = 'Koszt: ' + wynik.toFixed(2) + ' zł';
  const canvas = document.getElementById('wykres');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, wynik, 50);
}
