var buttonAdd = document.getElementById("buttonAdd");
var lista = document.getElementById("lista");
var inputTask = document.getElementById("inputTask");

function addItem() {
    const item = document.createElement("div");     // cria uma nova div
    item.setAttribute('class','item');              // define a classe da div como item
    const checkbox = document.createElement("input"); // cria um novo input
    checkbox.setAttribute('type','checkbox');       // define o tipo de input para checkbox
    // var text = inputTask.value;
    const para = document.createElement("p");       // cria um novo parágrafo
    // const node = document.createTextNode(text);
    // para.appendChild(node);
    // para.innerText = text;
    para.innerText = inputTask.value;               // coloca o value do input no texto do parágrafo
    item.appendChild(checkbox);                     // adiciona o checkbox à div criada
    item.appendChild(para);                         // adiciona o parágrafo à div criada
    lista.appendChild(item);                        // adiciona a div criada à div lista
}

buttonAdd.addEventListener("click", addItem);