export const Turno = Object.freeze({
    MANHA:"MANHÃ",
    TARDE:"TARDE",
    NOITE:"NOITE"
})
export class Aluno{
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;

    constructor(id, nome, dataMatricula, turno){
        this.id = id;
        this.nome = nome;
        this.dataMatricula = new Date(dataMatricula);
        this.turno = turno;
        this.estaAtivo = true;
    }
     matricula(){
        return "Nome:" + this.nome + " - Data de Matrícula:" + this.dataMatricula.toString();
    }
}

const Aluno1 = new Aluno(1, "Anna","2020-06-23T00:00:00", Turno.MANHA);
const Aluno2 = new Aluno(2, "Luiza","2020-08-13T00:00:00", Turno.TARDE);
Aluno1.turno = Turno.NOITE;
console.log(Aluno1);
Aluno2.estaAtivo = false;
console.log(Aluno2);