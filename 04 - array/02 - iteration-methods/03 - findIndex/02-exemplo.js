const pessoas = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Jose' }
];

const indexJoao = pessoas.findIndex((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value.id == 1;
})

const indexJe = pessoas.findIndex((value) => value.nome == 'Jose');

console.log(indexJoao);
console.log(indexJe);