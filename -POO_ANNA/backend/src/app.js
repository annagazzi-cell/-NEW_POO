// 1.Produto:

import { produto } from './models/produto.js';
const p = new produto(5,"Iphone 17");
const p2 = new produto(6,"Iphone 18 pro");

console.log(p.nome);
console.log(p2);
console.log(p.info());
p.ativo = false;
console.log(p.info());

// 2.Usuário:
import { Genero, Usuario } from './models/Usuario.js';
const u = new Usuario(3, "Maria", "123", "2009-06-23T00:00:00", Genero.F);
console.log();
console.log(u.perfil());
console.log(u);

// 3.Carro:

import { carro } from './models/carro.js';
const c = new carro(5,"Gol","Preto",2009);
console.log();
console.log(c.classificacao());
console.log(c);

// 4.Aluno:
import { Aluno } from './models/Aluno.js';
const a = new Aluno(3, "Iolanda","2010-06-13T00:00:00", Turno.MANHA);
console.log();
console.log(a.dataMatricula());
console.log(a);




