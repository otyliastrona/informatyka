const slajdy = ['Slajd 1', 'Slajd 2', 'Slajd 3', 'Slajd 4', 'Slajd 5'];
let aktualny = 0;
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { aktualny = (aktualny + 1) % slajdy.length; }
  if (e.key === 'ArrowLeft') { aktualny = (aktualny - 1 + slajdy.length) % slajdy.length; }
  document.getElementById('slajd').innerText = slajdy[aktualny];
});
