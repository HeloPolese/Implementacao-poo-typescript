"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    _nome;
    _endereco;
    _numeroTelefone;
    _cpf;
    _dataNascimento;
    constructor(nome, endereco, telefone, cpf, dataNascimento) {
        this._nome = nome;
        this._endereco = endereco;
        this._numeroTelefone = telefone;
        this._cpf = cpf;
        if (dataNascimento != undefined) {
            this._dataNascimento = dataNascimento;
        }
        else {
            this._dataNascimento = new Date('0000-00-00');
        }
    }
    get nome() {
        return this._nome;
    }
    get endereco() {
        return this._endereco;
    }
    get telefone() {
        return this._numeroTelefone;
    }
    get cpf() {
        return this._cpf;
    }
    get dataNascimento() {
        return this._dataNascimento.toLocaleDateString("pt-br");
    }
    set nome(novoNome) {
        if (novoNome != undefined && novoNome.length > 0) {
            this._nome = novoNome;
        }
    }
    set endereco(novoEndereco) {
        if (novoEndereco != undefined) {
            this._endereco = novoEndereco;
        }
    }
    set telefone(novoNumeTelefone) {
        if (novoNumeTelefone != undefined) {
            this._numeroTelefone = novoNumeTelefone;
        }
    }
    set dataNascimento(novaDataNascimento) {
        if (novaDataNascimento != undefined) {
            this._dataNascimento = novaDataNascimento;
        }
    }
    toString() {
        return "Nome: " + this._nome +
            "\nEndereço: " + this._endereco +
            "\nNúmero de Telefone: " + this._numeroTelefone +
            "\nCPF: " + this._cpf +
            "\nData de Nascimento: " + this.dataNascimento;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map