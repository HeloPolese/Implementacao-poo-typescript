"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    _nivel;
    constructor(nome, endereco, telefone, cpf, agencia, salario, nivel, dataNascimento) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        const novoNivelFormatado = nivel.toUpperCase();
        if (novoNivelFormatado == "CONTA" || novoNivelFormatado == "AGENCIA" || novoNivelFormatado == "REGIONAL") {
            this._nivel = novoNivelFormatado;
        }
        else {
            this._nivel = "CONTA";
        }
    }
    get nivel() {
        return this._nivel;
    }
    bonificacao(percentual) {
        if (percentual != undefined) {
            return super.bonificacao(percentual);
        }
        if (this._nivel == "CONTA") {
            return super.bonificacao(-15);
        }
        if (this._nivel == "AGENCIA") {
            return super.bonificacao(-20);
        }
        if (this._nivel == "REGIONAL") {
            return super.bonificacao(-25);
        }
        return 0;
    }
    toString() {
        return "\n- GERENTE - " + super.toString() +
            "\nNivel: " + this._nivel;
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map