//ex 01

let personagem = {
    nome: "Arthas",
    classe: "Guerreiro",
    nivel: 10,
    vida: 100,
    forca: 50
};

console.log(`Nome: ${personagem.nome}`);
console.log(`Classe: ${personagem.classe}`);
console.log(`Nível: ${personagem.nivel}`);
console.log(`Vida: ${personagem.vida}`);
console.log(`Força: ${personagem.forca}`);

//ex 02

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Preto",
    preco: 95000
};

console.log(`O veículo ${carro.marca} ${carro.modelo}, ano ${carro.ano}, custa R$ ${carro.preco}.`);

//ex 03

let produto = {
    nome: "Teclado",
    preco: 120,
    estoque: 15
};

produto.preco = 100;
produto.estoque = 20;

console.log(produto);

//ex 04

let filme = {
    titulo: "Interestelar",
    ano: 2014
};

filme.diretor = "Christopher Nolan";
filme.genero = "Ficção científica";
filme.nota = 9;

console.log(filme);

//ex 05

let animal = {
    nome: "Rex",
    especie: "Cachorro",
    idade: 5,
    peso: 12,
    vacinado: true
};

if (animal.vacinado == true) {
    console.log(`${animal.nome} está vacinado.`);
} else {
    console.log(`${animal.nome} não está vacinado.`);
}

//ex 06

let aluno = {
    nome: "Mariana",
    nota1: 8,
    nota2: 6
};

let media = (aluno.nota1 + aluno.nota2) / 2;

console.log(`Média: ${media}`);

if (media >= 7) {
    console.log(`${aluno.nome} foi aprovado!`);
} else {
    console.log(`${aluno.nome} foi reprovado!`);
}

//ex 07

let produto = {
    nome: "Monitor",
    preco: 900,
    desconto: 15
};

let valorDesconto = produto.preco * produto.desconto / 100;
let precoFinal = produto.preco - valorDesconto;

console.log(`Valor do desconto: R$ ${valorDesconto}`);
console.log(`Preço final: R$ ${precoFinal}`);

//ex 08

let personagem = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 25,
    defesa: 10
};

let danoRecebido = 30 - personagem.defesa;

personagem.vida = personagem.vida - danoRecebido;

console.log(`Vida restante: ${personagem.vida}`);

//ex 09

let conta = {
    titular: "Ana",
    saldo: 1500,
    valorSaque: 200
};

if (conta.saldo >= conta.valorSaque) {
    conta.saldo = conta.saldo - conta.valorSaque;

    console.log(`Saque realizado com sucesso!`);
    console.log(`Saldo atual: R$ ${conta.saldo}`);
} else {
    console.log("Saldo insuficiente!");
}

//ex 10

let atleta = {
    nome: "Carlos",
    idade: 19,
    altura: 1.85,
    pontos: 120
};

if (atleta.pontos < 50) {
    console.log("Classificação: Iniciante");
} else if (atleta.pontos <= 99) {
    console.log("Classificação: Intermediário");
} else {
    console.log("Classificação: Avançado");
}

//ex 11

let alunos = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 18 },
    { nome: "Carlos", idade: 16 },
    { nome: "Daniela", idade: 19 }
];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Nome: ${alunos[i].nome}`);
    console.log(`Idade: ${alunos[i].idade}`);
}

//ex 12
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 7 },
    { nome: "Eduardo", nota: 4 }
];

let aprovados = 0;

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
        aprovados++;
    }
}

console.log(`Quantidade de aprovados: ${aprovados}`);

//ex 13

let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 10 },
    { nome: "Teclado", preco: 120, quantidade: 5 },
    { nome: "Monitor", preco: 900, quantidade: 3 }
];

let total = 0;

for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco * produtos[i].quantidade;
}

console.log(`Valor total do estoque: R$ ${total}`);

//ex 14

let jogadores = [
    { nome: "Lucas", pontos: 150 },
    { nome: "Mariana", pontos: 230 },
    { nome: "Carlos", pontos: 180 },
    { nome: "Ana", pontos: 310 }
];

let maiorPontuacao = jogadores[0];

for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos > maiorPontuacao.pontos) {
        maiorPontuacao = jogadores[i];
    }
}

console.log(`Jogador com maior pontuação: ${maiorPontuacao.nome}`);
console.log(`Pontuação: ${maiorPontuacao.pontos}`);

