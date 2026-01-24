// --- LANGUAGE TOGGLE ---
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    const isEn = document.body.classList.contains('lang-en');
    if (isEn) {
        document.body.classList.replace('lang-en', 'lang-fr');
        langBtn.innerText = "EN";
    } else {
        document.body.classList.replace('lang-fr', 'lang-en');
        langBtn.innerText = "FR";
    }
});

// --- THEME TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const icon = themeBtn.querySelector('i');
    icon.className = document.body.classList.contains('light') ? 'fas fa-sun' : 'fas fa-moon';
});

// --- REVEAL ON SCROLL (Sections loading while scrolling) ---
const observerOptions = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- BACK TO TOP & SMOOTH SCROLL ---
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 600 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
