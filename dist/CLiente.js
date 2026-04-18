"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    static _qtdCliente = 0;
    _idConta;
    _limiteCredito;
    constructor(nome, endereco, telefone, cpf, limiteCredito = 100, dataNascimento) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        this._limiteCredito = limiteCredito;
        this._idConta = Cliente._qtdCliente;
        Cliente._qtdCliente++;
    }
    get idConta() {
        return this._idConta;
    }
    get limiteCred() {
        return this._limiteCredito;
    }
    set limiteCred(novoLimite) {
        if (novoLimite > 0 && novoLimite != undefined) {
            this._limiteCredito = novoLimite;
        }
    }
    toString() {
        return "\n- CLIENTE - " + super.toString() +
            "ID: " + this._idConta +
            "\nLimite Crédito: " + this._limiteCredito;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map