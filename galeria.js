const dane = [
  {
    src: "img/LaptopDell.jpg",
    opis: "Laptop Dell XPS 13",
    cena: "5000 zł"
  },
  {
    src: "img/TelefonSamsung.jpg",
    opis: "Telefon Samsung S21",
    cena: "3000 zł"
  },
  {
    src: "img/iPadPro.jpg",
    opis: "Tablet iPad Pro",
    cena: "4000 zł"
  }
  ,
  {
    src: "img/MonitorLG.jpg",
    opis: "Monitor LG UltraWide",
    cena: "1200 zł"
  },
  {
    src: "img/Myszka.jpg",
    opis: "Mysz Logitech MX",
    cena: "300 zł"
  },
  {
    src: "img/Klawiatura.jpg",
    opis: "Klawiatura Corsair K70",
    cena: "450 zł"
  },
  {
    src: "img/Drukarka.jpg",
    opis: "Drukarka HP LaserJet",
    cena: "700 zł"
  },
  {
    src: "img/Router.jpg",
    opis: "Router TP-Link AX",
    cena: "250 zł"
  },
  {
    src: "img/Sluchawki.jpg",
    opis: "Słuchawki Sony WH-1000XM5",
    cena: "1200 zł"
  },
  {
    src: "img/Kamera.jpg",
    opis: "Kamera Logitech C920",
    cena: "400 zł"
  }
];

let indeks = 0;

function pokazZdjecie(i) {
  const obraz = document.getElementById("obraz");
  const opis = document.getElementById("opis");
  const cena = document.getElementById("cena");
  const numer = document.getElementById("numer");

  obraz.src = dane[i].src;
  opis.textContent = dane[i].opis;
  cena.textContent = "Cena: " + dane[i].cena;
  numer.textContent = `${i + 1}/${dane.length}`;
}

function pierwszy() {
  indeks = 0;
  pokazZdjecie(indeks);
}

function ostatni() {
  indeks = dane.length - 1;
  pokazZdjecie(indeks);
}

function nastepny() {
  if (indeks < dane.length - 1) {
    indeks++;
    pokazZdjecie(indeks);
  }
}

function poprzedni() {
  if (indeks > 0) {
    indeks--;
    pokazZdjecie(indeks);
  }
}
