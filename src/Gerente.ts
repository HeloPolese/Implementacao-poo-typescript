import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private static _niveis = ["CONTA", "AGÊNCIA", "AGENCIA", "REGIONAL"];
    private _nivel: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, agencia: number, salario: number, nivel: string, dataNascimento?: Date) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);

        const novoNivelFormatado = nivel.toUpperCase();

        if (Gerente._niveis.includes(novoNivelFormatado)) {
            this._nivel = novoNivelFormatado;
        } 
        else {
            this._nivel = "CONTA";
        }

    }
    get nivel(): string {
        return this._nivel;
    }

    get niveis() {
        return Gerente._niveis.slice();
    }
    set nivel(novoNivel: string) {
        const novoNivelFormatado = novoNivel.toUpperCase()
        if (Gerente._niveis.includes(novoNivelFormatado)) {
            this._nivel = novoNivelFormatado;
        } 
        else {
            this._nivel = "CONTA";
        }
    }
    public bonificacao(percentual?: number): number {
        if (percentual != undefined && percentual > 0) {
            return (super.salario * percentual / 100);
        } 
        else {
            if (this._nivel === "CONTA") {
                return (super.salario * 15 / 100);
            }
            else if (this._nivel === "AGENCIA" || this._nivel == "AGÊNCIA") {
                return (super.salario * 20 / 100);
            }
            else if (this._nivel === "REGIONAL") {
                return (super.salario * 25 / 100);
            }
        }
        throw new Error("Naõ foi possível efetuar a bonificacao de Gerente! Verifique o Parâmetro.");
    }

    toString(): string {
        return "\n- GERENTE - " + super.toString() +
            "\nNivel: " + this._nivel;
    }
}