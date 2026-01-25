// Theme & Logo Logic
const themeBtn = document.getElementById('theme-toggle');
const logoImg = document.getElementById('nav-logo');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    logoImg.src = isLight ? "images/logo-light.png" : "images/logo-dark.png";
});

// Language Toggle
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    const isEn = document.body.classList.contains('lang-en');
    document.body.classList.toggle('lang-en', !isEn);
    document.body.classList.toggle('lang-fr', isEn);
    langBtn.innerText = isEn ? "EN" : "FR";
});

// Enhanced Modal
function openModal(title, desc, link, gallery, doc) {
    document.getElementById('m-title').innerText = title;
    document.getElementById('m-desc').innerText = desc;
    document.getElementById('m-link').href = link;
    document.getElementById('m-image').src = gallery[0];
    
    const galleryDiv = document.getElementById('m-gallery');
    galleryDiv.innerHTML = '';
    gallery.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.onclick = () => document.getElementById('m-image').src = src;
        galleryDiv.appendChild(img);
    });

    const docLink = document.getElementById('m-doc-link');
    docLink.href = doc || '#';
    docLink.style.display = doc ? 'flex' : 'none';

    document.getElementById('projectModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Form Handling
const contactForm = document.getElementById('contact-form');
const status = document.getElementById('form-status');
contactForm.onsubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, { method: 'POST', body: data, headers: {'Accept': 'application/json'}});
    if (response.ok) {
        status.innerHTML = "Success! Your message was sent.";
        status.className = "form-status success";
        contactForm.reset();
    } else {
        status.innerHTML = "Oops! There was a problem.";
        status.className = "form-status error";
    }
};

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
