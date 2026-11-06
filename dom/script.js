// // //Pega o elemento pelo id
// // const paragrafo = document.getElementById("mensagem");
// // const titulo = document.getElementById("titulo");// significa que estou pegando o elemento com id

// // console.log(paragrafo);
// // console.log(titulo);

// // paragrafo.textContent = "O DOM permitiu que o JS me alterasse!" ///le o texto qto altera (textcontent)
// // paragrafo.style.color = "blue"; ///quero alterar a cor do texto
// // paragrafo.style.borderBottom = "2px solid blue";

// // const botao = document.getElementById("btn-acao");
// // console.log("Tag do bitao:" + botao.tagName);

// // Por TAG
// // const primeiroP = document.querySelector("p"); ///(queryselector)seletor que selecionna qquer coisa, mas pega apenas o primeiro..
// // primeiroP.style.backgroundColor = "yellow";

// // const alerta = document.querySelector(".alerta"); //chamo uma classe e coloco o ponto e o que procuro, ex: "".alerta
// // console.log("Por Classe:", alerta.textContent)// tras o texto sem alteracao o textcontent

// // const span = document.querySelector("#unico"); //# chama o ID, tenho que colocar esse # porque coloco o querySelector
// // console.log(span);
// // span.textContent = "Alterado pelo queryselector!"; //span é uma "tag coringa" que uso para qualquer coisa, colocar um texto
//por exemplo

// // const pNoDiv = document.querySelector("div p") //chamar a tag dentro da div, chama o pai primeiro ex: "div p";
// // pNoDiv.style.fontWeight = "bold";

// const itens = document.querySelectorAll(".item"); //pego todas minhas lis do html
// console.log(itens);

// for (let i = 0; i < itens.length; i++) {
//     console.log("Item" + (i + 1) + ": " + itens[i].textContent);
    
//     if (i % 2 !== 0) {
//         itens[i].style.backgroundColor = "#ccc"
//     }
// }

// for (const item of itens) {
//     item.style.fontWeight = "bold";
// };

// itens.forEach((item, index) => {
//     console.log(index + ": " + itens.textContent);
// })

// const saudacao = document.getElementById("saudacao");
// const nome = document.getElementById("nome");
// const link = document.getElementById("link");

// function mudarDados() {
//     saudacao.textContent = "O conteudo da div foi alterado!";
//     nome.value = "Novo valor (Lucas)";
//     saudacao.innerHTML += '<p style="color: blue;">Conteúdo injetado com innerHTML</p>'
//     link.setAttribute("href", "https://www.google.com");
//     console.log(link.getAttribute("href"));

//     saudacao.classList.add("destaque");
// }

// document.getElementById("btn-mudar").addEventListener("click", mudarDados);//(espera uma acao)

// const lista = document.getElementById("lista");
// function adicionarItem() {
//     const novoItem = document.createElement("li") //peguei minha li

//     novoItem.textContent = "Novo Item às " + new Date().toLocaleTimeString();// peguei a li e coloquei essas informacoes 
//     // como a data dentro
//     lista.appendChild(novoItem); //chamo minha UL
// }

// function removerUltimo() {
//     const ultimo = lista.lastElementChild;

//     if (ultimo) {
//         lista.removeChild(ultimo);
//         console.log("Ultimo item removido.");
//     } else {
//         console.log("Lista vazia. Nada a remover.")

//     }
// }
//  document.getElementById("btn-add").addEventListener("click", adicionarItem);
//  document.getElementById("btn-remover").addEventListener("click", removerUltimo);


