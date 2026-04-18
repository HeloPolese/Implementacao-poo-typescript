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
        this._nivel = nivel;
    }
    get nivel() {
        return this._nivel;
    }
    toString() {
        return "\n- GERENTE - " + super.toString() +
            "\nNivel: " + this._nivel;
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map