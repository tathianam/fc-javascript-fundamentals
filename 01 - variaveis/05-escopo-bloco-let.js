'use strict'
// https://pt.stackoverflow.com/questions/2746/quando-por-que-e-como-utilizar-a-diretiva-use-strict-em-javascript
// Essa linha acima serve para nao deixar usar variavel global sem var, sem let, sem const (a festa da uva basicamente...)

// ## Escopo de bloco

// Quando você declara uma variável usando let em um escopo de bloco, ela poderá ser usada dentro apenas dentro do bloco.

{    
    let teste = 'Teste';
    console.log(teste);
    // Teste
}
teste = 'Teste 2' // Erro (esse erro nao daria se nao tivese a linha do strict la em cima)
console.log(teste);
