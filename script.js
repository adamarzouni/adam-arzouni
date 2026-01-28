// THEME & LOGO SWITCHING
const themeBtn = document.getElementById('theme-toggle');
const logoImg = document.getElementById('nav-logo');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    logoImg.src = isLight ? "images/logo-light.png" : "images/logo-dark.png";
});

// LANGUAGE SWITCHING
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

// MOBILE MENU TOGGLE
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.className = 'fas fa-times'; // Change to X icon
    } else {
        icon.className = 'fas fa-bars'; // Back to hamburger
    }
});

function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburgerBtn.querySelector('i').className = 'fas fa-bars';
}

// ENHANCED MODAL LOGIC
const modal = document.getElementById('projectModal');

function openModal(titleEn, titleFr, descEn, descFr, link, gallery, docs) {
    document.getElementById('m-title-en').innerText = titleEn;
    document.getElementById('m-title-fr').innerText = titleFr;
    document.getElementById('m-desc-en').innerHTML = descEn;
    document.getElementById('m-desc-fr').innerHTML = descFr;
    
    // View Project Button
    const linkBtn = document.getElementById('m-link');
    if (link && link !== '#') {
        linkBtn.href = link;
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.style.display = 'none';
    }
    
    // Media Setup
    const mediaContainer = document.getElementById('main-media-container');
    const firstMedia = gallery[0];
    renderMainMedia(mediaContainer, firstMedia);
    
    const galleryDiv = document.getElementById('m-gallery');
    galleryDiv.innerHTML = '';
    
    gallery.forEach(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        const el = isVideo ? document.createElement('video') : document.createElement('img');
        el.src = src;
        el.onclick = () => renderMainMedia(mediaContainer, src);
        galleryDiv.appendChild(el);
    });

    // Docs Setup
    const docsContainer = document.getElementById('m-docs-container');
    docsContainer.innerHTML = ''; 

    if (docs && docs.length > 0) {
        document.getElementById('m-docs-section').style.display = 'block';
        
        docs.forEach(doc => {
            const btn = document.createElement('a');
            btn.className = 'doc-download-link';
            btn.href = '#';
            
            const nameEn = doc.nameEn || doc.name;
            const nameFr = doc.nameFr || doc.name;
            
            btn.innerHTML = `<i class="fas fa-file-pdf"></i> 
                             <span class="en">${nameEn}</span>
                             <span class="fr">${nameFr}</span>
                             ${doc.protected ? '<i class="fas fa-lock" style="margin-left:auto; font-size:0.8em; opacity:0.7;"></i>' : ''}`;

            if (doc.protected) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    const password = prompt("Enter Password / Entrez le mot de passe:");
                    if (password === "admin") {
                        window.open(doc.url, '_blank');
                    } else {
                        alert("Incorrect Password / Mot de passe incorrect");
                    }
                };
            } else {
                btn.href = doc.url;
                btn.target = "_blank";
            }
            docsContainer.appendChild(btn);
        });
    } else {
        document.getElementById('m-docs-section').style.display = 'none';
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function renderMainMedia(container, src) {
    container.innerHTML = '';
    if (!src) return;
    
    const isVideo = src.toLowerCase().endsWith('.mp4');
    
    if (isVideo) {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        container.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    }
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById('main-media-container').innerHTML = '';
}

window.onclick = (event) => {
    if (event.target == modal) closeModal();
};

// CONTACT FORM
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.onsubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
        formStatus.innerHTML = "Success! Your message was sent.";
        formStatus.className = "form-status success";
        contactForm.reset();
    } else {
        formStatus.innerHTML = "Oops! Something went wrong.";
        formStatus.className = "form-status error";
    }
};

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// BACK TO TOP
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
