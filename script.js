// --- LANGUAGE TOGGLE ---
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    if (document.body.classList.contains('lang-en')) {
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

// --- REVEAL ON SCROLL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- BACK TO TOP ---
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 800 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
