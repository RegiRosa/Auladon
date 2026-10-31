// //Pega o elemento pelo id
// const paragrafo = document.getElementById("mensagem");
// const titulo = document.getElementById("titulo");// significa que estou pegando o elemento com id

// console.log(paragrafo);
// console.log(titulo);

// paragrafo.textContent = "O DOM permitiu que o JS me alterasse!" ///le o texto qto altera (textcontent)
// paragrafo.style.color = "blue"; ///quero alterar a cor do texto
// paragrafo.style.borderBottom = "2px solid blue";

// const botao = document.getElementById("btn-acao");
// console.log("Tag do bitao:" + botao.tagName);

// Por TAG
const primeiroP = document.querySelector("p"); ///(queryselector)seletor que selecionna qquer coisa, mas pega apenas o primeiro..
primeiroP.style.backgroundColor = "yellow";

const alerta = document.querySelector(".alerta"); //chamo uma classe e coloco o ponto e o que procuro, ex: "".alerta
console.log("Por Classe:", alerta.textContent)

const span = document.querySelector("#unico"); //# chama o ID
console.log(span);
span.textContent = "Alterado pelo queryselector!";

const pNoDiv = document.querySelector("div p") //chamar a tag dentro da div, chama o pai primeiro ex: "div p";
pNoDiv.style.fontWeight = "bold";