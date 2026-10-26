console.log("Classe carro");

export class carro {
    id;
    nome;
    cor;
    disponivel;
    anoFabricacao;

    constructor(id,nome,cor,anoFabricacao){
        this.id =id;
        this.nome =nome;
        this.cor =cor;
        this.disponivel =true;
        this.anoFabricacao =anoFabricacao;
    }
    classificacao(){
        return "Modelo: " + this.nome + " - " + (this.ativo?"Disponível!":"Em falta!");
    }
}

const p1 =new carro(1,"Cruise","branco",2025);
const p2 =new carro(2,"Fusca","amarelo",1980);
const p3 =new carro(3,"Camaro","amarelo",2009);

console.log(p1);
p1.cor ="preto";
console.log(p1);

console.log(p2);
console.log(p3);
p3.nome ="Ferrari";
console.log(p3);
