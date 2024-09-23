const alunos = [
    { nome: 'Luiz', nota: 7 },
    { nome: 'Roberto', nota: 5 },
    { nome: 'Larissa', nota: 8 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Fernanda', nota: 6 }
];

const filtrarAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAprovados(alunos);

console.log(alunosAprovados);
