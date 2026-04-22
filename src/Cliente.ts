import { Pessoa } from "./Pessoa"
export class Cliente extends Pessoa {
    private static _qtdCliente: number = 0;
    private _idConta: number;
    private _limiteCredito: number;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, limiteCredito: number = 100, dataNascimento?: Date) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        this._limiteCredito = limiteCredito;
        this._idConta = Cliente._qtdCliente;
        Cliente._qtdCliente++;
    }

    get idConta(): number {
        return this._idConta;
    }
    get limiteCred(): number {
        return this._limiteCredito;
    }

    set limiteCred(novoLimite: number) {
        if (novoLimite > 0) {
            this._limiteCredito = novoLimite;
        }
    }

    toString(): string {
        return "\n- CLIENTE - " + super.toString() +
            "ID: " + this._idConta +
            "\nLimite Crédito: " + this._limiteCredito;
    }
}