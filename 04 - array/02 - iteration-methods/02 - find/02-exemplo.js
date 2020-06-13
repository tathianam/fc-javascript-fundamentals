const pessoas = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Jose' }
];

const joao = pessoas.find((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value.id == 1;
})

const je = pessoas.find((value) => value.nome == 'Jose');

console.log(joao);
console.log(je);