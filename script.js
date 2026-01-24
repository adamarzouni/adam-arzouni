// ================= DARK / LIGHT MODE =================
function toggleMode() {
  document.body.classList.toggle("light");
}

// ================= LANGUAGE TOGGLE =================
let english = true; // Default English

function toggleLang() {
  english = !english;
  document.querySelectorAll(".en").forEach(e => e.classList.toggle("show", english));
  document.querySelectorAll(".fr").forEach(f => f.classList.toggle("show", !english));
}

// Force English on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".en").forEach(e => e.classList.add("show"));
  document.querySelectorAll(".fr").forEach(f => f.classList.remove("show"));
});

// ================= SCROLL NAVIGATION =================
function goToSection(id) {
  const section = document.getElementById(id);
  if(section) section.scrollIntoView({behavior: "smooth"});
}

// ================= SCROLL ANIMATIONS =================
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {threshold: 0.2});

fadeElements.forEach(el => observer.observe(el));

// ================= BACK TO TOP BUTTON =================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

// ================= PROJECT MODAL =================
const projectsData = {
  wedding:{
    title:"Wedding Rotary Phone",
    desc:"Transformed an old rotary phone into a recording station using Arduino + Teensy. Guests could leave voice messages for the wedding.",
    images:["images/wedding1.jpg","images/wedding2.jpg"]
  },
  tvapp:{
    title:"Samsung TV App",
    desc:"Developed a Tizen-based smart TV app with interactive content browsing.",
    images:["images/tvapp1.jpg","images/tvapp2.jpg"]
  },
  photography:{
    title:"Photography",
    desc:"Creative photography projects showcasing landscapes, portraits, and experimental work.",
    images:["images/photo1.jpg","images/photo2.jpg"]
  }
};

let currentProject = null;
let currentImageIndex = 0;

function openProject(id) {
  const modal = document.getElementById("projectModal");
  modal.style.display = "block";
  currentProject = projectsData[id];
  currentImageIndex = 0;
  document.getElementById("modal-title").innerText = currentProject.title;
  document.getElementById("modal-desc").innerText = currentProject.desc;
  document.getElementById("modal-main-img").src = currentProject.images[currentImageIndex];
}

function changeImage(direction) {
  if(!currentProject) return;
  currentImageIndex += direction;
  if(currentImageIndex < 0) currentImageIndex = currentProject.images.length - 1;
  if(currentImageIndex >= currentProject.images.length) currentImageIndex = 0;
  document.getElementById("modal-main-img").src = currentProject.images[currentImageIndex];
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
  currentProject = null;
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if(e.target === document.getElementById("projectModal")) closeProject();
});
