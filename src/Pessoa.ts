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
        
        if (cpf.length == 11) {
            this._cpf = cpf;
        } else {
            throw new Error("O cpf deve conter 11 números!");
        }
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
        if ( novoNome.length > 0) {
            this._nome = novoNome;
        }
    }

    set endereco(novoEndereco: string) {
        if (novoEndereco.length > 0) {
            this._endereco = novoEndereco;
        }
    }

    set telefone(novoNumeTelefone: string) {
        if (novoNumeTelefone.length > 0) {
            this._numeroTelefone = novoNumeTelefone;
        }
    }

    set dataNascimento(novaDataNascimento: Date) {
        if (novaDataNascimento) {
            this._dataNascimento = novaDataNascimento;
        }
    }

    toString(): string {
        return "Nome: " + this._nome +
            "\nEndereço: " + this._endereco +
            "\nNúmero de Telefone: " + this._numeroTelefone +
            "\nCPF: " + this._cpf +
            "\nData de Nascimento: " + this.dataNascimento;
    }
}