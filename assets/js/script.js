// ==== SAUDAÇÃO DINÂMICA ====
document.addEventListener("DOMContentLoaded", () => {
  const hora = new Date().getHours();
  let saudacao;

  if (hora < 12) saudacao = "☀️ Bom dia!";
  else if (hora < 18) saudacao = "🌤️ Boa tarde!";
  else saudacao = "🌙 Boa noite!";

  const hero = document.querySelector("#home h2");
  if (hero)
    hero.innerHTML = `${saudacao} Eu sou <span class="text-cyan-400">Breno Soares</span> 👋`;
});

// ==== MENU MOBILE ====
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✖";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.textContent = "☰";
    });
  });
}

// ==== BOTÃO "VOLTAR AO TOPO" ====
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.className =
  "fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white text-xl rounded-full w-12 h-12 shadow-lg hidden transition duration-300";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) backToTop.classList.remove("hidden");
  else backToTop.classList.add("hidden");
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==== ANIMAÇÃO SUAVE NOS LINKS ====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==== EFEITO DE DIGITAÇÃO NO HERO ====
const textoHero = document.querySelector("#home p");
if (textoHero) {
  const texto = textoHero.textContent;
  textoHero.textContent = "";
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      textoHero.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 35);
    }
  }
  setTimeout(digitar, 600);
}

// ==== MODO ESCURO / CLARO ====
const themeToggle = document.createElement("button");
themeToggle.innerHTML = "🌙";
themeToggle.className =
  "fixed bottom-6 left-6 bg-gray-800 hover:bg-gray-700 text-yellow-300 text-2xl rounded-full w-12 h-12 shadow-lg flex items-center justify-center transition duration-300";
document.body.appendChild(themeToggle);

// Carregar tema salvo
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
  themeToggle.innerHTML = "☀️";
}

// Trocar tema
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    themeToggle.innerHTML = "☀️";
    localStorage.setItem("theme", "light");
    document.body.classList.add("bg-gray-100", "text-gray-900");
    document.body.classList.remove("bg-gray-950", "text-gray-100");
  } else {
    themeToggle.innerHTML = "🌙";
    localStorage.setItem("theme", "dark");
    document.body.classList.add("bg-gray-950", "text-gray-100");
    document.body.classList.remove("bg-gray-100", "text-gray-900");
  }
});
