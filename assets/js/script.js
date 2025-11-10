// 🌐 Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 🧭 Menu mobile (abre e fecha)
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('header nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });
}

// ⬆️ Botão de voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.textContent = "↑";
btnTopo.className = "fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition hidden";
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.remove('hidden');
  } else {
    btnTopo.classList.add('hidden');
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 🎨 Efeito de fade-in nas seções ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(sec => {
  sec.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
  observer.observe(sec);
});

// ⏰ Saudação dinâmica (bom dia / boa tarde / boa noite)
const saudacao = document.createElement('p');
const hora = new Date().getHours();
let textoSaudacao = "";

if (hora < 12) textoSaudacao = "☀️ Bom dia!";
else if (hora < 18) textoSaudacao = "🌤️ Boa tarde!";
else textoSaudacao = "🌙 Boa noite!";

saudacao.textContent = textoSaudacao;
saudacao.className = "text-gray-700 text-lg mt-2 fade-in";
document.querySelector('header .container').appendChild(saudacao);
