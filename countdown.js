const targetDate = new Date('May 26, 2026 00:00:00').getTime();

// teks yang ditranslate
const translations = {
    id: {
buttonText: "English",
title: "Hitung Mundur Perilisan GTA VI",
days: "Hari",
hours: "Jam",
minutes: "Menit",
seconds: "Detik",
completed: "GTA VI SUDAH RILIS!!!!!!"
    },
    en: {
buttonText: "Bahasa Indonesia",
title: "Countdown to GTA VI",
days: "Days",
hours: "Hours",
minutes: "Minutes",
seconds: "Seconds",
completed: "GTA VI IS OUT NOW!!!!!!"
    }
};

// status bahasa saat ini
let currentLang = 'id';

// fungsi untuk mengubah bahasa
function toggleLanguage() {
    // ganti bahasa
    currentLang = currentLang === 'id' ? 'en' : 'id';
    
    // ubah teks tombol
    document.getElementById('lang-btn').innerText = translations[currentLang].buttonText;
    
    // ubah teks elemen
    document.getElementById('title').innerText = translations[currentLang].title;
    document.getElementById('days-label').innerText = translations[currentLang].days;
    document.getElementById('hours-label').innerText = translations[currentLang].hours;
    document.getElementById('minutes-label').innerText = translations[currentLang].minutes;
    document.getElementById('seconds-label').innerText = translations[currentLang].seconds;
}

// event listener untuk tombol bahasa
document.getElementById('lang-btn').addEventListener('click', toggleLanguage);

// update countdown setiap 1 detik
const countdown = setInterval(function() {
    // dapetin data waktu sekarang
    const now = new Date().getTime();
    
    // selisih waktu antara sekarang dan tanggal perilisan
    const distance = targetDate - now;
    
    // kalkulasi untuk hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // menampilkan elemen sesuai id
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    
    // GTA VI RELEASEEEEEEEEEEEEEEEEEE
    if (distance < 0) {
clearInterval(countdown);
document.getElementById('days').innerHTML = "0";
document.getElementById('hours').innerHTML = "0";
document.getElementById('minutes').innerHTML = "0";
document.getElementById('seconds').innerHTML = "0";

document.getElementById('title').innerHTML = translations[currentLang].completed;
    }
}, 1000);