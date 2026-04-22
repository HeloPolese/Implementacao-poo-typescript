import { Gerente } from "./Gerente";
import { Atendente } from "./Atendente";
import { Funcionario } from "./Funcionario";
import { Cliente } from "./Cliente";

const gerente1 = new Gerente("Ana", "marilandia", "999999999", "33333333333", "contaLimpa", 20000, "regional", new Date('2002-03-20'));
const gerente2 = new Gerente("Heloisa", "Piuma", "9999999999", "11111111111", "agencia Castro", 3000, "regional", new Date('2007-02-20'));
const gerente3 = new Gerente("Fernando", "marilandia", "999999999", "33333333333", "contaLimpa", 20000, "regional", new Date('2002-03-20'));

const atendente1 = new Atendente("janete", "aracruz", "9999999999", "11111111111", "Agência Castro", 3000, new Date('2007-02-20'), "PESSOAL");
const atendente2 = new Atendente("eliane", "Maceió", "9966699999", "11111111199", "Agência Salém", 5000, new Date('2000-08-10'), "CAIXA");
const atendente3 = new Atendente("Mariana", "Linhares", "995742224", "23244444444", "Agencia Matriz", 15000, new Date('1998-07-21'), "PESSOAL");

const cliente1 = new Cliente("Amanda", "Santa Leopoldina", "996892225", "22222222222", 120, new Date('2001-04-10'));

const vetorFuncionarios: Funcionario[] = [gerente1, gerente2, gerente3, atendente1, atendente2, atendente3];
//vetorFuncionarios.push(cliente1);

vetorFuncionarios.forEach(e => console.log(e.toString()));

console.log("\n 🤖 Teste do Método de Bonificação SEM passagem de parâmetro - \n")
vetorFuncionarios.forEach(e => {
    if (e instanceof Gerente) {
        console.log(` ${e.nome} - Gerente - ${e.nivel} - Bonificação: R$ ${e.bonificacao().toFixed(2)}`);
    }
    else if (e instanceof Atendente) {
        console.log(` ${e.nome} - Atendente - ${e.tipo} - Bonificação: R$ ${e.bonificacao().toFixed(2)}`);
    }
});

console.log("\n 🤖  Teste do Método de Bonificação COM passagem de parâmetro - \n");

vetorFuncionarios.forEach(e => {
    if (e instanceof Gerente) {
        console.log(` ${e.nome} - Gerente - ${e.nivel} - Bonificação: R$ ${e.bonificacao(20).toFixed(2)}`);
    }
    else if (e instanceof Atendente && e.tipo == "PESSOAL") {
        console.log(` ${e.nome} - Atendente - ${e.tipo} - Bonificação: R$ ${e.bonificacao(20).toFixed(2)}`);
    } else {
        console.log(` ${e.nome} - Atendente - Caixa - Bonificação: R$ ${e.bonificacao(15).toFixed(2)}`);
    }
});

