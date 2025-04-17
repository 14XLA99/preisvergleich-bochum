document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([51.4818, 7.2162], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  document.getElementById("price-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Preiseingabe erfolgreich gespeichert (Demo)");
    // Hier könnte man lokale Speicherung oder Anzeige einbauen
  });
});
