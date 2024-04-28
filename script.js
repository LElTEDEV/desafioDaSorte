const buttonBiscoitoParaAbrir = document.querySelector("#abrirBiscoito");
const buttonAbrirOutroBiscoito = document.querySelector("#outroBiscoito");

const primeiraTela = document.querySelector(".screen1");
const segundaTela = document.querySelector(".screen2");

const fraseDaSorte = document.querySelector("#fraseSorte");

const frases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Sei lá, não sei escrever frases",
  "Mais uma frase aqui",
  "Só mais uma :D",
];

const gerarNumeroAletoario = () => {
  return (Math.random() * (frases.length - 1)).toFixed();
};

const abrirBiscoito = () => {
  const frase = +gerarNumeroAletoario();
  fraseDaSorte.textContent = frases[frase];
  primeiraTela.classList.add("hiden");
  segundaTela.classList.remove("hiden");
};

const reseta = () => {
  primeiraTela.classList.remove("hiden");
  segundaTela.classList.add("hiden");
};

buttonBiscoitoParaAbrir.addEventListener("click", abrirBiscoito);
buttonAbrirOutroBiscoito.addEventListener("click", reseta);
