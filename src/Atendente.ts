import { Funcionario } from "./Funcionario";

export class Atendente extends Funcionario {
    private _tipo: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, agencia: string, salario?: number, dataNascimento?: Date | undefined, tipo?: string) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        if (tipo != undefined) {
            this._tipo = tipo;
        } else {
            this._tipo = "CAIXA";
        }
    }
    get tipo(): string {
        return this._tipo;
    }

    set tipo(tipo: string) {
        const tipoFormatado = tipo.toUpperCase()
        if (tipoFormatado == "CAIXA" || tipoFormatado == "PESSOAL") {
            this._tipo = tipoFormatado
        }
    }

    public bonificacao(percentual?: number): number {
        if (percentual != undefined) {
            return super.bonificacao(percentual);
        }
        if (this._tipo == "CAIXA") {
            return super.bonificacao(-10);
        }
        if (this._tipo == "PESSOAL") {
            return super.bonificacao(-10);
        }
        throw new Error("Tipo inválido");
    }
    toString(): string {
        return "\n - ATENDENTE - " + super.toString() +
            "\nTipo: " + this._tipo;
    }
}