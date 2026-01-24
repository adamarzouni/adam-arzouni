// --- THEME TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('light')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// --- REVEAL ON SCROLL ---
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
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// --- PROJECT MODAL ---
const modal = document.getElementById('projectModal');
function openProject(title) {
    document.getElementById('modal-title').innerText = title;
    modal.style.display = "block";
    body.style.overflow = "hidden"; // Stop scrolling
}
function closeProject() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

// Close modal when clicking outside content
window.onclick = (event) => {
    if (event.target == modal) closeProject();
}

// --- SMOOTH SCROLL FOR EXPLORE BUTTON ---
document.querySelector('.explore-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
