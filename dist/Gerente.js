"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    static _niveis = ["CONTA", "AGÊNCIA", "AGENCIA", "REGIONAL"];
    _nivel;
    constructor(nome, endereco, telefone, cpf, agencia, salario, nivel, dataNascimento) {
        super(nome, endereco, telefone, cpf, agencia, salario, dataNascimento);
        const novoNivelFormatado = nivel.toUpperCase();
        if (Gerente._niveis.includes(novoNivelFormatado)) {
            this._nivel = novoNivelFormatado;
        }
        else {
            this._nivel = "CONTA";
        }
    }
    get nivel() {
        return this._nivel;
    }
    get niveis() {
        return Gerente._niveis.slice();
    }
    set nivel(novoNivel) {
        const novoNivelFormatado = novoNivel.toUpperCase();
        if (Gerente._niveis.includes(novoNivelFormatado)) {
            this._nivel = novoNivelFormatado;
        }
        else {
            this._nivel = "CONTA";
        }
    }
    bonificacao(percentual) {
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
    toString() {
        return "\n- GERENTE - " + super.toString() +
            "\nNivel: " + this._nivel;
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map