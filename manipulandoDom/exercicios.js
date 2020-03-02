// 1º exercício
// Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
// vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
// aparecer na tela.
var  botao = document.querySelector('button.button')
console.log(botao)
botao.onclick = () => {
    console.log(onclick)
    var square = document.createElement('div')
    square.setAttribute('class','square')
    square.style.width = "100px"
    square.style.height = "100px"
    square.style.backgroundColor = "#f00"

    var app = document.querySelector('div.app')
    app.appendChild(square)

// 2º exercício
// Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
// algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

    getRandomColor = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
    
        for (var i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }
    square.onmouseover = () => {
        square.style.backgroundColor = getRandomColor()
    }
}


// 3º exercício
// A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
// Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
// ● Diego
// ● Gabriel
// ● Lucas
var container = document.querySelector(".app")
var table = document.createElement("ul")

for (var name of nomes) {
    console.log(name)
    var items = document.createElement("li")
    var text = document.createTextNode(name)

    items.appendChild(text)
    table.appendChild(items)
    container.appendChild(table)
}

