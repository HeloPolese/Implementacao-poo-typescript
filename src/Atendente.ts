import { Funcionario } from "./Funcionario";

export class Atendente extends Funcionario {
    private static _tipos = ["CAIXA", "PESSOAL"];
    private _tipo: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, agencia: number, tipo: string, salario?: number, dataNascimento?: Date | undefined) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);

        const tipoFormatado = tipo.toUpperCase();
        if (Atendente._tipos.includes(tipoFormatado)) {
            this._tipo = tipoFormatado;
        } else {
            this._tipo = "CAIXA";
        }
    }

    get tipo(): string {
        return this._tipo;
    }

    get tipos(): string[] {
        return Atendente._tipos.slice();
    }

    set tipo(tipo: string) {
        const tipoFormatado = tipo.toUpperCase();

        if (Atendente._tipos.includes(tipoFormatado)) {
            this._tipo = tipoFormatado;
        } else {
            this._tipo = Atendente._tipos[0];
        }
    }

    public bonificacao(percentual?: number): number {
        if (percentual != undefined && percentual > 0) {
            return (super.salario * percentual / 100);
        }
        else {
            if (this._tipo == "CAIXA") {
                return (super.salario * 7 / 100);
            }
            else if (this._tipo == "PESSOAL") {
                return (super.salario * 10 / 100);
            }
        }
        throw new Error("Naõ foi possível efetuar a bonificacao de Atendente! Verifique o Parâmetro.");
    }

    toString(): string {
        return "\n - ATENDENTE - " + super.toString() +
            "\nTipo: " + this._tipo;
    }
}