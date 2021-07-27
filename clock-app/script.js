/* Kullanıcıdan isim bilgisi alındı. */
let lastame = prompt("Adınızı Giriniz..");
document.getElementById("name").innerHTML = lastame;
/* Kullanıcıdan isim bilgisi alındı. */

/* Ekranda saati tuttuğumuz fonksiyon */
function datenow() {
  let now = new Date();
  document.getElementById("hours").innerText = now.getHours();
  document.getElementById("minute").innerText = now.getMinutes();
  document.getElementById("second").innerText = now.getSeconds();
  document.getElementById("millisecond").innerText = now.getMilliseconds();
}
/* Ekranda saati tuttuğumuz fonksiyon */

/* Her 1 saniyede fonksiyonu çalıştırıyor */
setInterval(datenow, 1000);
