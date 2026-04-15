import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    private static _quantidadeFuncionarios: number = 0;
    private _agencia: string;
     private _salario: number;
    private _matricula: string;
   
    constructor(nome: string, endereco: string, telefone: string, cpf: string, agencia: string, salario: number = 0.0, dataNascimento?: Date) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        Funcionario._quantidadeFuncionarios++;
        this._matricula = new Date().getFullYear().toString() + Funcionario._quantidadeFuncionarios.toString();
        this._salario = salario;
        this._agencia = agencia;
    }

    get quantidadeFuncionarios(): number {
        return Funcionario._quantidadeFuncionarios;
    }

    get matricula(): string {
        return this._matricula;
    }

    get salario(): number {
        return this._salario;
    }

    get agencia(): string {
        return this._agencia;
    }

    set salario(novoSalario: number) {
        if (novoSalario > 0 && novoSalario != undefined) {
            this._salario = novoSalario;
        }
    }

    set agencia(novaAgencia: string) {
        if (novaAgencia != undefined && novaAgencia.length > 0) {
            this._agencia = novaAgencia;
        }
    }

    public bonificacao(percentual: number): number {
        if (percentual > 0) {
            return (this._salario * percentual / 100);
        } else {
            return 0;
        }
    }

    toString(): string {
        return "\n" + super.toString() +
            "\nMatrícula: " + this._matricula +
            "\nSalário: " + this._salario +
            "\nAgência: " + this._agencia;
    }
}