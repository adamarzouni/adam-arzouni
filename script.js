// ===== DARK / LIGHT MODE =====
function toggleMode(){document.body.classList.toggle("light");}

// ===== LANGUAGE =====
let english=true;
function toggleLang(){english=!english; updateLang();}
function updateLang(){
  document.querySelectorAll(".en").forEach(el=>english?el.classList.add("show"):el.classList.remove("show"));
  document.querySelectorAll(".fr").forEach(el=>!english?el.classList.add("show"):el.classList.remove("show"));
}
window.addEventListener("DOMContentLoaded",()=>{updateLang();});

// ===== SCROLL =====
function goToSection(id){const s=document.getElementById(id); if(s)s.scrollIntoView({behavior:"smooth"});}

// ===== FADE-IN =====
const fadeElems=document.querySelectorAll(".fade-in");
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");else e.target.classList.remove("visible");});},{threshold:0.2});
fadeElems.forEach(el=>observer.observe(el));

// ===== BACK TO TOP =====
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>400?"block":"none";});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// ===== PROJECT MODAL WITH FADE =====
const projectsData={
  wedding:{titleEn:"Wedding Rotary Phone",titleFr:"Téléphone Rotatif de Mariage",descEn:"Transformed an old rotary phone into a recording station using Arduino + Teensy.",descFr:"J'ai transformé un vieux téléphone rotatif en station d'enregistrement avec Arduino + Teensy.",images:["images/wedding1.jpg","images/wedding2.jpg"]},
  tvapp:{titleEn:"Samsung TV App",titleFr:"Application TV Samsung",descEn:"Developed a Tizen-based smart TV app.",descFr:"Développement d'une application TV Tizen.",images:["images/tvapp1.jpg","images/tvapp2.jpg"]},
  photography:{titleEn:"Photography",titleFr:"Photographie",descEn:"Creative photography projects.",descFr:"Projets photographiques créatifs.",images:["images/photo1.jpg","images/photo2.jpg"]}
};

let currentProject=null,currentImageIndex=0;

function openProject(id){
  const modal=document.getElementById("projectModal"); modal.style.display="flex";
  currentProject=projectsData[id]; currentImageIndex=0;
  document.getElementById("modal-title").innerText=currentProject.titleEn;
  document.getElementById("modal-title-fr").innerText=currentProject.titleFr;
  document.getElementById("modal-desc").innerText=currentProject.descEn;
  document.getElementById("modal-desc-fr").innerText=currentProject.descFr;
  const img=document.getElementById("modal-main-img"); img.style.opacity=0;
  img.src=currentProject.images[currentImageIndex];
  setTimeout(()=>{img.style.opacity=1;},50);
  updateLang();
}

function changeImage(dir){
  if(!currentProject)return;
  currentImageIndex+=dir;
  if(currentImageIndex<0) currentImageIndex=currentProject.images.length-1;
  if(currentImageIndex>=currentProject.images.length) currentImageIndex=0;
  const img=document.getElementById("modal-main-img"); img.style.opacity=0;
  img.src=currentProject.images[currentImageIndex];
  setTimeout(()=>{img.style.opacity=1;},50);
}

function closeProject(){document.getElementById("projectModal").style.display="none"; currentProject=null;}
window.addEventListener("click",e=>{if(e.target===document.getElementById("projectModal")) closeProject();});
