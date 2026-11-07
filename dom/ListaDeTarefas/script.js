const input = document.getElementById("nova-tarefa");
const btnAdd = document.getElementById("btn-add");
const lista = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    const texto = input.value.trim();//trim tira os caracteres vazios do input
    if (texto === "") {// se texto digitado estiver vazio ""
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");// a tag da ul é a li --createlement é para criar uma lista, mas serve p criar qquer coisa
    item.textContent = texto; // vai vir aqui dentro da li o que a pessoa digitou no texto

    item.addEventListener("click", function() {
        item.classList.toggle("feita")   //criando lista, classlist// toggle ativo e desativo qquer click
    });
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "x";
    btnRemover.addEventListener("click", function (e) {
        e.stopPropagation();

        item.remove();
    });
    item.appendChild(btnRemover);
    lista.appendChild(item);
    input.value = "";
    input.focus(); //significa q quando esvaziar o input ele estara com o cursor em cima para a pessoa digitar
}
 btnAdd.addEventListener("click", adicionarTarefa);
 input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }

 });