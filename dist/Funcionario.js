"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    static _quantidadeFuncionarios = 0;
    _agencia;
    _salario;
    _matricula;
    constructor(nome, endereco, telefone, cpf, agencia, salario = 0.0, dataNascimento) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        Funcionario._quantidadeFuncionarios++;
        this._matricula = new Date().getFullYear().toString() + Funcionario._quantidadeFuncionarios.toString();
        this._salario = salario;
        this._agencia = agencia;
    }
    static get quantidadeFuncionarios() {
        return Funcionario._quantidadeFuncionarios;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    get agencia() {
        return this._agencia;
    }
    set salario(novoSalario) {
        if (novoSalario < 1621) {
            throw new Error("Salário Inválido!");
        }
        else {
            this._salario = novoSalario;
        }
    }
    set agencia(novaAgencia) {
        if (novaAgencia > 0) {
            this._agencia = novaAgencia;
        }
    }
    toString() {
        return "\n" + super.toString() +
            "\nMatrícula: " + this._matricula +
            "\nSalário: " + this._salario +
            "\nAgência: " + this._agencia;
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map