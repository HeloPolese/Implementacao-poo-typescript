"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendente = void 0;
const Funcionario_1 = require("./Funcionario");
class Atendente extends Funcionario_1.Funcionario {
    _tipo;
    constructor(nome, endereco, telefone, cpf, agencia, salario, dataNascimento, tipo) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        if (tipo != undefined) {
            this._tipo = tipo;
        }
        else {
            this._tipo = "CAIXA";
        }
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        const tipoFormatado = tipo.toUpperCase();
        if (tipoFormatado == "CAIXA" || tipoFormatado == "PESSOAL") {
            this._tipo = tipoFormatado;
        }
    }
    bonificacao(percentual) {
        if (percentual != undefined) {
            return super.bonificacao(percentual);
        }
        if (this._tipo == "CAIXA") {
            return super.bonificacao(-7);
        }
        if (this._tipo == "PESSOAL") {
            return super.bonificacao(-10);
        }
        throw new Error("Tipo inválido");
    }
    toString() {
        return "\n - ATENDENTE - " + super.toString() +
            "\nTipo: " + this._tipo;
    }
}
exports.Atendente = Atendente;
//# sourceMappingURL=Atendente.js.map