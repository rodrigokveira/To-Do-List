var buttonAdd = document.getElementById("buttonAdd");
var lista = document.getElementById("lista");
var inputTask = document.getElementById("inputTask");
var initialText = inputTask.value;

function addItem() {
    if (inputTask.value != initialText && inputTask.value != ""){
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
        inputTask.value = initialText;
        inputTask.style.color = "rgb(165, 165, 165)";
    }
}

function inputTextInitial() {
    if (inputTask.value == initialText) {
        inputTask.value = "";
        inputTask.style.color = "black";
    }
}

function inputTextCheck() {
    if (inputTask.value == "") {
        inputTask.value = initialText;
        inputTask.style.color = "rgb(165, 165, 165)";
    } else {
        inputTask.style.color = "black";
    }
}

buttonAdd.addEventListener("click", addItem);
inputTask.addEventListener("focus", inputTextInitial);
inputTask.addEventListener("focusout", inputTextCheck);
