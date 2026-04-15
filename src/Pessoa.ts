export class Pessoa {
    private _nome: string;
    private _endereco: string;
    private _numeroTelefone: string;
    private _cpf: string;
    private _dataNascimento: Date;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataNascimento?: Date) {
        this._nome = nome;
        this._endereco = endereco;
        this._numeroTelefone = telefone;
        this._cpf = cpf;

        if (dataNascimento != undefined) {
            this._dataNascimento = dataNascimento;
        } else {
            this._dataNascimento = new Date('0000-00-00');
        }
    }

    get nome(): string {
        return this._nome;
    }

    get endereco(): string {
        return this._endereco;
    }

    get telefone(): string {
        return this._numeroTelefone;
    }

    get cpf(): string {
        return this._cpf;
    }

    get dataNascimento(): string {
        return this._dataNascimento.toLocaleDateString("pt-br");
    }

    set nome(novoNome: string) {
        if (novoNome != undefined && novoNome.length > 0) {
            this._nome = novoNome;
        }
    }

    set endereco(novoEndereco: string) {
        if (novoEndereco != undefined) {
            this._endereco = novoEndereco;
        }
    }

    set telefone(novoNumeTelefone: string) {
        if (novoNumeTelefone != undefined) {
            this._numeroTelefone = novoNumeTelefone;
        }
    }

    set dataNascimento(novaDataNascimento: Date) {
        if (novaDataNascimento != undefined) {
            this._dataNascimento = novaDataNascimento;
        }
    }

    toString():string {
        return "\nNome: " + this._nome +
            "\nEndereço: " + this._endereco +
            "\nNúmero de Telefone: " + this._numeroTelefone +
            "\nCPF: " + this._cpf +
            "\nData de Nascimento: " + this.dataNascimento;
    }
}