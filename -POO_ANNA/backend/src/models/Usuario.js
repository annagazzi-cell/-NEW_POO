// classe
// enum
export const Genero = Object.freeze({
    M:"M",
    F:"F",
    OUTRO:"OUTRO"
})
export class Usuario{
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
// método constructor
    constructor(id, nome, senha, dataNascimento, genero){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmin = false;
    }
//métodos de classe -> função
    perfil(){
        return "Nome:" + this.nome + " - Data de nascimento:" + this.dataNascimento.toString();
    }
}

const user1 = new Usuario(1, "Anna", "123", "2009-06-23T00:00:00", Genero.F);
const user2 = new Usuario(2, "Deise", "12263", "1987-06-23T00:00:00", Genero.F);
console.log(user1);
user1.nome = "Anna Lu";
console.log(user1);
console.log(user1.perfil());
console.log(user2.perfil());