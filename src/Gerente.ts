import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private _nivel: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, agencia: string, salario: number, nivel: string, dataNascimento?: Date) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        const novoNivelFormatado = nivel.toUpperCase();

        if (novoNivelFormatado == "CONTA" || novoNivelFormatado == "AGENCIA" || novoNivelFormatado == "REGIONAL") {
            this._nivel = novoNivelFormatado;
        }else{
        this._nivel = "CONTA";  
        }
   
    }
    get nivel(): string {
        return this._nivel;
    }

    public bonificacao(percentual?: number): number {
        if (percentual != undefined) {
            return super.bonificacao(percentual);
        }
        if (this._nivel == "CONTA") {
            return  super.bonificacao(-15);
        }
         if (this._nivel == "AGENCIA") {
            return  super.bonificacao(-25);
        }
         if (this._nivel == "REGIONAL") {
            return  + super.bonificacao(-25);
        }
        return 0;
        
    }
    toString(): string {
        return "\n- GERENTE - " + super.toString() +
            "\nNivel: " + this._nivel;
    }
}