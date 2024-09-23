"use strict";

var alunos = [{
  nome: 'Vithor',
  nota: 7
}, {
  nome: 'Fernando',
  nota: 5
}, {
  nome: 'Giovana',
  nota: 8
}, {
  nome: 'Pedro',
  nota: 4
}, {
  nome: 'Lucas',
  nota: 6
}];
var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);