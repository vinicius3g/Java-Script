function exibeAlgo(){
    console.log("hello world")
}
// o setInterval faz com que o elemento seja renderizado em um tempo definido
setInterval(exibeAlgo, 10000)

// o setTimeout renderiza o elemento apenas uma vez com um tempo definido

function exibir(){
    console.log("Hello")
}
setTimeout(exibir,1000)