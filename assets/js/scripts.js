var buttonAdd = document.getElementById("buttonAdd");   // recebe o botão
var lista = document.getElementById("lista");           // recebe a div da lista
var inputTask = document.getElementById("inputTask");   // recebe o input
var initialText = inputTask.value;                      // recebe o conteúdo do texto inicial ("Digite aqui a sua tarefa")

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
        inputTask.value = initialText;                  // volta o input para o seu conteúdo inicial
        inputTask.style.color = "rgb(165, 165, 165)";   // altera a cor do input para cinza
    }
}

function inputTextInitial() {                           // verifica se o input está com o texto inicial
    if (inputTask.value == initialText) {               // caso esteja
        inputTask.value = "";                           // apaga o seu conteúdo
        inputTask.style.color = "black";                // e seta a cor para preto
    }
}

function inputTextCheck() {                             // verifica se o input está vazio
    if (inputTask.value == "") {                        // caso esteja
        inputTask.value = initialText;                  // coloca o texto inicial
        inputTask.style.color = "rgb(165, 165, 165)";   // e muda sua cor para cinza
    } else {                                            // caso contrário
        inputTask.style.color = "black";                // seta a cor para preto
    }
}

buttonAdd.addEventListener("click", addItem);               // chama a função de adicionar item ao clicar no botão
inputTask.addEventListener("focus", inputTextInitial);      // chama a função de verificação do texto inicial no input
inputTask.addEventListener("focusout", inputTextCheck);     // chama a função de verificação do conteúdo do input
