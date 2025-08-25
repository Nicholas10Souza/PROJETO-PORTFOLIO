function enviarwhats(event) {
  event.preventDefault(); // evita o reload da página

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const telefone = '5511963126954';

  // validação simples
  if (!nome || !mensagem) {
    alert("Por favor, preencha nome e mensagem antes de enviar.");
    return;
  }

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}
// Menu hambúrguer
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// abre/fecha o menu
menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// fecha o menu ao clicar em um link
const links = document.querySelectorAll(".menu-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});