// THEME & LOGO SWITCHING
const themeBtn = document.getElementById('theme-toggle');
const logoImg = document.getElementById('nav-logo');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    
    // Switch Icon
    themeBtn.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    
    // Switch Nav Logo
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

// ENHANCED MODAL LOGIC (With Video Support & Bilingual Text)
const modal = document.getElementById('projectModal');

function openModal(titleEn, titleFr, descEn, descFr, link, gallery, doc) {
    // Populate Bilingual Fields
    document.getElementById('m-title-en').innerText = titleEn;
    document.getElementById('m-title-fr').innerText = titleFr;
    
    // Allow HTML in description for breaks and strong tags
    document.getElementById('m-desc-en').innerHTML = descEn;
    document.getElementById('m-desc-fr').innerHTML = descFr;
    
    document.getElementById('m-link').href = link;
    
    // Setup Main Media (Video or Image)
    const mediaContainer = document.getElementById('main-media-container');
    const firstMedia = gallery[0];
    
    renderMainMedia(mediaContainer, firstMedia);
    
    // Build Gallery Thumbnails
    const galleryDiv = document.getElementById('m-gallery');
    galleryDiv.innerHTML = '';
    
    gallery.forEach(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        const el = isVideo ? document.createElement('video') : document.createElement('img');
        el.src = src;
        
        // On Click: Render to Main Container
        el.onclick = () => renderMainMedia(mediaContainer, src);
        
        galleryDiv.appendChild(el);
    });

    // Handle Document Download Link
    const docLink = document.getElementById('m-doc-link');
    if (doc) {
        docLink.href = doc;
        docLink.style.display = 'flex';
    } else {
        docLink.style.display = 'none';
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Helper to Render Video or Image in Main Modal View
function renderMainMedia(container, src) {
    container.innerHTML = '';
    const isVideo = src.toLowerCase().endsWith('.mp4');
    
    if (isVideo) {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.muted = true; // Required for autoplay
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
    // Stop video playback on close
    document.getElementById('main-media-container').innerHTML = '';
}

window.onclick = (event) => {
    if (event.target == modal) closeModal();
};

// CONTACT FORM SUBMISSION
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

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// BACK TO TOP BUTTON
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
