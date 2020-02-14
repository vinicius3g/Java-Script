// 1º exercício
// Crie uma função que dado o objeto a seguir:
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function usuario(endereco){
        return( `O usuario mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com  N° ${endereco.numero}`)
};
// console.log(usuario(endereco));

// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
   for ( let  i = x; i <= y; i ++){
       if(i % 2 == 0){
           console.log(i)
       }
   }
};
// pares(32,321)

// 3º exercício
// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não
var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    skills.indexOf("Javascript", [0])
}
temHabilidade(skills);
console.log(temHabilidade(skills))
// 4º exercício
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

// 5º exercício
// Dado o seguinte vetor de objetos:

// Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
// com um separador utilize o join.