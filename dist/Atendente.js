"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendente = void 0;
const Funcionario_1 = require("./Funcionario");
class Atendente extends Funcionario_1.Funcionario {
    static _tipos = ["CAIXA", "PESSOAL"];
    _tipo;
    constructor(nome, endereco, telefone, cpf, agencia, tipo, salario, dataNascimento) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        const tipoFormatado = tipo.toUpperCase();
        if (Atendente._tipos.includes(tipoFormatado)) {
            this._tipo = tipoFormatado;
        }
        else {
            this._tipo = "CAIXA";
        }
    }
    get tipo() {
        return this._tipo;
    }
    get tipos() {
        return Atendente._tipos.slice();
    }
    set tipo(tipo) {
        const tipoFormatado = tipo.toUpperCase();
        if (Atendente._tipos.includes(tipoFormatado)) {
            this._tipo = tipoFormatado;
        }
        else {
            this._tipo = Atendente._tipos[0];
        }
    }
    bonificacao(percentual) {
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
    toString() {
        return "\n - ATENDENTE - " + super.toString() +
            "\nTipo: " + this._tipo;
    }
}
exports.Atendente = Atendente;
//# sourceMappingURL=Atendente.js.map