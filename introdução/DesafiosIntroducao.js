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

// -------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------

// 3º exercício
// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não

function temHabilidade(skills) {
   return  skills.indexOf("Javascript") != -1

}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills)
// console.log(temHabilidade(skills))

// -------------------------------------------------------------------------------------------------------

// 4º exercício
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
    if(anosEstudo <= 1){
        return "inciante"
    }else if(anosEstudo == 1 || anosEstudo <= 3){
        return "intermediario"
    }else if(anosEstudo == 3 || anosEstudo <= 6){
        return "avançado"
    }else if (anosEstudo > 6){
        return "jedi master"
    }
}

var anosEstudo = 5;
experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master
// console.log(experiencia(anosEstudo))   

// -------------------------------------------------------------------------------------------------------

// 5º exercício
// Dado o seguinte vetor de objetos:

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   function habilidades(usuarios){
        for(usuarios of usuarios){
            console.log (`o usuario ${usuarios.nome} possui as habilidades ${usuarios.habilidades}`)
        }
   }
   habilidades(usuarios)

   

// Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
// com um separador utilize o join.