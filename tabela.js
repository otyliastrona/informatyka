const produkty = [
  { nazwa: "Laptop", opis: "Dell XPS", cena: "5000 zł" },
  { nazwa: "Telefon", opis: "Samsung S21", cena: "3000 zł" },
  { nazwa: "Tablet", opis: "iPad Pro", cena: "4000 zł" },
  { nazwa: "Monitor", opis: "LG UltraWide", cena: "1200 zł" },
  { nazwa: "Mysz", opis: "Logitech MX", cena: "300 zł" },
  { nazwa: "Klawiatura", opis: "Corsair K70", cena: "450 zł" },
  { nazwa: "Drukarka", opis: "HP LaserJet", cena: "700 zł" },
  { nazwa: "Router", opis: "TP-Link AX", cena: "250 zł" },
  { nazwa: "Słuchawki", opis: "Sony WH-1000XM5", cena: "1200 zł" },
  { nazwa: "Kamera", opis: "Logitech C920", cena: "400 zł" }
];

function generujTabele() {
  const tabela = document.createElement("table");
  tabela.border = "1";

  
  const naglowek1 = tabela.insertRow();
  const thProdukt = document.createElement("th");
  thProdukt.colSpan = 2;
  thProdukt.textContent = "Produkt";
  naglowek1.appendChild(thProdukt);

  const thCena = document.createElement("th");
  thCena.rowSpan = 2;
  thCena.textContent = "Cena";
  naglowek1.appendChild(thCena);


  const naglowek2 = tabela.insertRow();
  const thNazwa = document.createElement("th");
  thNazwa.textContent = "Nazwa";
  naglowek2.appendChild(thNazwa);

  const thOpis = document.createElement("th");
  thOpis.textContent = "Opis";
  naglowek2.appendChild(thOpis);

  produkty.forEach(produkt => {
    const wiersz = tabela.insertRow();
    const tdNazwa = wiersz.insertCell();
    tdNazwa.textContent = produkt.nazwa;

    const tdOpis = wiersz.insertCell();
    tdOpis.textContent = produkt.opis;

    const tdCena = wiersz.insertCell();
    tdCena.textContent = produkt.cena;
  });

  document.getElementById("tabela-container").appendChild(tabela);
}

document.addEventListener("DOMContentLoaded", generujTabele);
