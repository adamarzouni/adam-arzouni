// --- THEME TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('light')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

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

// --- MODAL LOGIC ---
const modal = document.getElementById('projectModal');
const mTitle = document.getElementById('m-title');
const mDesc = document.getElementById('m-desc');
const mLink = document.getElementById('m-link');
const mImage = document.getElementById('m-image');

function openModal(title, desc, link, imgSrc) {
    mTitle.innerText = title;
    mDesc.innerText = desc;
    mLink.href = link;
    mImage.src = imgSrc || "https://via.placeholder.com/600x400?text=Project+Image";
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
}

// --- SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- BACK TO TOP ---
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
