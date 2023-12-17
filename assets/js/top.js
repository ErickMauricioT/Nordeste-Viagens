// Mostra o botão e faz a página subir ao clicar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Mostrar botão
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }

  // Fazer a header desaparecer
  var header = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
}

// Função para fazer a página subir ao topo
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mostra ou esconde a header baseado na direção do scroll
/*
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    document.getElementById("header").classList.add("hidden");
  } else {
    document.getElementById("header").classList.remove("hidden");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
*/