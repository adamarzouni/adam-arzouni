// --- PROJECT DATA ---
const projectsData = {
    'phoenix': {
        titleEn: 'Phoenix – Fire Rescue Drone',
        titleFr: 'Phoenix – Drone Incendie',
        descEn: '<strong>1st Prize - Ecole Polytechnique</strong><br><br><strong>Team:</strong> Adam Arzouni, Emilie Huynh, Jean-Christophe Fronteddu, Louis St-Laurent, Marc Alexandre Savard.<br><br><strong>Description:</strong> Phoenix is a lightweight rescue drone designed to evacuate injured people trapped in forest fires. The drone’s structure is engineered to be fire-resistant, sealed, and lightweight (300g).<br><br><strong>Objectives:</strong> Design a drone capable of rescuing injured people from forest fires. Ensure the structure is lightweight, sealed, and fire-resistant.',
        descFr: '<strong>1er Prix - École Polytechnique</strong><br><br><strong>Équipe :</strong> Adam Arzouni, Emilie Huynh, Jean-Christophe Fronteddu, Louis St-Laurent, Marc Alexandre Savard.<br><br><strong>Description :</strong> Phoenix est un drone de sauvetage léger conçu pour évacuer les blessés des feux de forêt. La structure est résistante au feu, étanche et légère.<br><br><strong>Objectifs :</strong> Concevoir un drone de sauvetage résistant au feu et léger.',
        link: '#',
        gallery: ['images/PI1.jpg', 'images/IMG_5254_mp4.mp4', 'images/PI11.jpg', 'images/PI12.jpg', 'images/PI19.jpg', 'images/team before after.jpg'],
        docs: [
            {nameEn: 'Assembly PDF', nameFr: 'Assemblage PDF', url: 'documents/Assemblage.pdf', protected: true},
            {nameEn: 'CAD Drawings (Zip)', nameFr: 'Dessins CAD (Zip)', url: 'documents/CAD DrawingsPE1.zip', protected: true}
        ]
    },
    'sleepsafe': {
        titleEn: 'SleepSafe – Smart Baby Monitor',
        titleFr: 'SleepSafe – Moniteur Bébé',
        descEn: '<strong>Client:</strong> New Parents<br><strong>Team:</strong> Adam Arzouni<br><br><strong>Description:</strong> Development of a smart baby-monitoring device that controls bedroom lighting and detects a child’s movement. Connects to Wi-Fi and communicates with Amazon Alexa.<br><br><strong>Objectives:</strong> Develop a smart system to monitor a child’s sleep environment, detect movement, and send alerts via Alexa.',
        descFr: '<strong>Client :</strong> Nouveaux Parents<br><strong>Équipe :</strong> Adam Arzouni<br><br><strong>Description :</strong> Développement d\'un dispositif intelligent de surveillance pour bébé qui contrôle l\'éclairage et détecte les mouvements. Se connecte au Wi-Fi et communique avec Alexa.<br><br><strong>Objectifs :</strong> Développer un système intelligent pour surveiller le sommeil et envoyer des alertes.',
        link: '#',
        gallery: ['images/PI3.jpg', 'images/PI3 (2).jpg', 'images/CATIA.PNG'],
        docs: [
            {nameEn: 'Movement Detection Report', nameFr: 'Rapport Détection', url: 'documents/Détection de mouvement pour une chambre d’enfant.pdf', protected: true}
        ]
    },
    'robot': {
        titleEn: 'Autonomous Delivery Robot',
        titleFr: 'Robot Livreur Autonome',
        descEn: '<strong>Client:</strong> CEM5102<br><strong>Team:</strong> Tania Araujo Domingues, Adam Arzouni, Tristan Doyle, El Hadj Keita, Yassine Rafi, Hamza Rahmani.<br><br><strong>Description:</strong> Design and development of an autonomous delivery robot capable of performing transport tasks without human intervention. Inspired by pandemic constraints.<br><br><strong>Objectives:</strong> Design and build an autonomous delivery robot. Enable navigation without human control. Optimize mechanical design.',
        descFr: '<strong>Client :</strong> CEM5102<br><strong>Équipe :</strong> Tania Araujo Domingues, Adam Arzouni, Tristan Doyle, El Hadj Keita, Yassine Rafi, Hamza Rahmani.<br><br><strong>Description :</strong> Conception et développement d\'un robot livreur autonome capable d\'effectuer des tâches de transport sans intervention humaine.<br><br><strong>Objectifs :</strong> Concevoir et construire un robot livreur autonome. Permettre la navigation sans contrôle humain.',
        link: '#',
        gallery: ['images/pi23.jpg', 'images/pi2.mp4', 'images/pi22.mp4', 'images/pi25.mp4', 'images/pi24.jpg', 'images/pi26.jpg', 'images/pi27.png', 'images/pi28.png'],
        docs: [
            {nameEn: 'Course Project Report', nameFr: 'Rapport de Projet', url: 'documents/Le-projet-coursier.1.pdf', protected: true}
        ]
    },
    'riaupel': {
        titleEn: 'RIAUPEL Energy Connector',
        titleFr: 'Connecteur Énergie RIAUPEL',
        descEn: '<strong>Client:</strong> Patrick Mongenot (IREQ, Hydro-Québec)<br><strong>Team:</strong> Adam Arzouni, Alec Bergeron, Ève Chouinard, Guillaume St-Hilaire, Rosalie Gagnon, Anne-Laurence Trudeau.<br><br><strong>Description:</strong> The goal of the RIAUPEL project is to provide TransÉnergie with robotic means for remote inspection of transmission substations. This system consists of a robotic vehicle, its docking station, and a supervision station.<br><br><strong>Objectives:</strong> Design an autonomous mechanical connection system for recharging (connector self-alignment) and a simulator.',
        descFr: '<strong>Client :</strong> Patrick Mongenot (IREQ, Hydro-Québec)<br><strong>Équipe :</strong> Adam Arzouni, Alec Bergeron, Ève Chouinard, Guillaume St-Hilaire, Rosalie Gagnon, Anne-Laurence Trudeau.<br><br><strong>Description :</strong> Le but du projet RIAUPEL est d\'offrir à TransÉnergie des moyens robotisés d’inspection à distance des postes de transport. Ce système est constitué d’un véhicule robotique, de sa station d’accueil et d’un poste de supervision.<br><br><strong>Objectifs :</strong> Concevoir un système de connexion mécanique autonome pour la recharge.',
        link: 'https://www.pi-aer-meca-polymtl.ca/2022-mec8370-02-02-connecteur/',
        gallery: ['images/riaupel-main.jpg', 'images/Riaupel-video.mp4', 'images/RIAUPEL VIDEO 2.mp4', 'images/RIAUPEL CONNECT.png', 'images/RIAUPEL CONNECT 2.jpg', 'images/riaupel-2.png', 'images/riaupel-3.png', 'images/riaupel-4.jpeg', 'images/riaupel-5.jpg', 'images/riaupel.jpg'],
        docs: [
            {nameEn: 'Technical Report', nameFr: 'Rapport Technique', url: 'documents/riaupel_report.pdf', protected: true}
        ]
    },
    'tizen': {
        titleEn: 'Tizen App Creation',
        titleFr: 'Création d\'App Tizen',
        descEn: '<strong>Technology:</strong> Tizen OS, C++, Samsung Wearables<br><br><strong>Description:</strong> Design and development of a custom application for Tizen-based wearable devices. Focus on user interface optimization and sensor integration.',
        descFr: '<strong>Technologie :</strong> Tizen OS, C++, Samsung Wearables<br><br><strong>Description :</strong> Conception et développement d\'une application personnalisée pour les appareils portables Tizen. Accent sur l\'optimisation de l\'interface utilisateur et l\'intégration des capteurs.',
        link: '#',
        gallery: ['images/tizen-main.jpg'],
        docs: []
    },
    'phone': {
        titleEn: 'Wedding Rotary Phone',
        titleFr: 'Téléphone Rotatif de Mariage',
        descEn: '<strong>Project:</strong> Audio Guestbook Transformation<br><br><strong>Description:</strong> Converting a vintage rotary phone into a digital audio guestbook for weddings. Guests pick up the receiver, hear a pre-recorded greeting, and leave a voicemail message which is stored digitally.',
        descFr: '<strong>Projet :</strong> Livre d\'Or Audio<br><br><strong>Description :</strong> Transformation d\'un téléphone à cadran vintage en livre d\'or audio numérique pour les mariages. Les invités décrochent, entendent un message d\'accueil et laissent un message vocal enregistré numériquement.',
        link: '#',
        gallery: ['images/phone_main.jpg', 'images/wedding1.jpg', 'images/wedding2.jpg'],
        docs: []
    }
};

// --- LOGIC ---

// HEARTBEAT ON SCROLL
const exploreBtn = document.querySelector('.explore-btn');
if(exploreBtn) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) exploreBtn.classList.remove('pulsing');
        else exploreBtn.classList.add('pulsing');
    });
}

// THEME TOGGLE
const themeBtn = document.getElementById('theme-toggle');
const logoImg = document.getElementById('nav-logo');
if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        themeBtn.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        logoImg.src = isLight ? "images/logo-light.png" : "images/logo-dark.png";
    });
}

// LANGUAGE TOGGLE
const langBtn = document.getElementById('lang-toggle');
if(langBtn) {
    langBtn.addEventListener('click', () => {
        const isEn = document.body.classList.contains('lang-en');
        if(isEn) {
            document.body.classList.replace('lang-en', 'lang-fr');
            langBtn.innerText = "EN";
        } else {
            document.body.classList.replace('lang-fr', 'lang-en');
            langBtn.innerText = "FR";
        }
    });
}

// MOBILE MENU
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburgerBtn.querySelector('i').className = mobileMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
}
function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburgerBtn.querySelector('i').className = 'fas fa-bars';
}

// PROJECT MODAL
const modal = document.getElementById('projectModal');

function openProject(id) {
    const data = projectsData[id];
    if(!data) return;

    document.getElementById('m-title-en').innerText = data.titleEn;
    document.getElementById('m-title-fr').innerText = data.titleFr;
    document.getElementById('m-desc-en').innerHTML = data.descEn;
    document.getElementById('m-desc-fr').innerHTML = data.descFr;

    const linkBtn = document.getElementById('m-link');
    if(data.link && data.link !== '#') {
        linkBtn.href = data.link;
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.style.display = 'none';
    }

    // Gallery
    const mediaContainer = document.getElementById('main-media-container');
    const galleryDiv = document.getElementById('m-gallery');
    galleryDiv.innerHTML = '';
    renderMainMedia(mediaContainer, data.gallery[0]);

    data.gallery.forEach(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        const el = isVideo ? document.createElement('video') : document.createElement('img');
        el.src = src;
        el.onclick = () => renderMainMedia(mediaContainer, src);
        galleryDiv.appendChild(el);
    });

    // Docs
    const docsContainer = document.getElementById('m-docs-container');
    const docsSection = document.getElementById('m-docs-section');
    docsContainer.innerHTML = '';

    if(data.docs && data.docs.length > 0) {
        docsSection.style.display = 'block';
        data.docs.forEach(doc => {
            const btn = document.createElement('a');
            btn.className = 'doc-download-link';
            btn.href = '#';
            btn.innerHTML = `<i class="fas fa-file-pdf"></i> <span class="en">${doc.nameEn}</span><span class="fr">${doc.nameFr}</span> ${doc.protected ? '<i class="fas fa-lock" style="margin-left:auto; opacity:0.7;"></i>' : ''}`;
            
            if(doc.protected) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    const password = prompt("Enter Password / Entrez le mot de passe:");
                    if(password === "admin") window.open(doc.url, '_blank');
                    else alert("Incorrect Password");
                };
            } else {
                btn.href = doc.url;
                btn.target = "_blank";
            }
            docsContainer.appendChild(btn);
        });
    } else {
        docsSection.style.display = 'none';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function renderMainMedia(container, src) {
    container.innerHTML = '';
    if(!src) return;
    const isVideo = src.toLowerCase().endsWith('.mp4');
    if(isVideo) {
        const v = document.createElement('video');
        v.src = src; v.controls = true; v.autoplay = true; v.muted = true;
        container.appendChild(v);
    } else {
        const i = document.createElement('img');
        i.src = src;
        container.appendChild(i);
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('main-media-container').innerHTML = '';
}

window.onclick = (e) => { if(e.target == modal) closeModal(); };

// FORM SUBMIT
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if(form) {
    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch(e.target.action, { method: 'POST', body: data, headers: {'Accept': 'application/json'} })
        .then(response => {
            if(response.ok) {
                status.innerHTML = "Success! Message sent.";
                status.className = "form-status success";
                form.reset();
            } else {
                status.innerHTML = "Error sending message.";
                status.className = "form-status error";
            }
        });
    };
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// BACK TO TOP
const topBtn = document.getElementById('topBtn');
if(topBtn) {
    window.onscroll = () => {
        topBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
    };
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}
