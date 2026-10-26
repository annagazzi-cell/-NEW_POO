console.log("Criando classes");
// criar classes (molde)
export class produto {
    id;
    nome;
    ativo;
// método especial construtor
    constructor(id,nome){
        this.id =id;
        this.nome =nome;
        this.ativo =true;
    }

    info(){
        return "Produto: " + this.nome + " - " + (this.ativo?"Em estoque!":"Em falta!");
    }
    
}
// instanciando = construir um objeto
const p1 =new produto(1,"Carregador");
const p2 =new produto(2,"Capinha");

console.log(p1);
p1.nome ="Carregador tipo C";
console.log(p1);
console.log(p2);
p2.ativo =false;
console.log(p2);
console.log("Nome produto: " + p2.nome + " - status: " + p2.ativo);

