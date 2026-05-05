"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = require("./Gerente");
const Atendente_1 = require("./Atendente");
const Cliente_1 = require("./Cliente");
const gerente1 = new Gerente_1.Gerente("Ana", "marilandia", "999999999", "33333333333", 10, 20000, "regional", new Date('2002-03-20'));
const gerente2 = new Gerente_1.Gerente("Heloisa", "Piuma", "9999999999", "11111111111", 14, 3000, "regional", new Date('2007-02-20'));
const gerente3 = new Gerente_1.Gerente("Fernando", "marilandia", "999999999", "33333333333", 15, 20000, "regional", new Date('2002-03-20'));
const atendente1 = new Atendente_1.Atendente("janete", "aracruz", "9999999999", "11111111111", 70, "PESSOAL", 3000, new Date('2007-02-20'));
const atendente2 = new Atendente_1.Atendente("eliane", "Maceió", "9966699999", "11111111199", 2, "caixa", 5000, new Date('2000-08-10'));
const atendente3 = new Atendente_1.Atendente("Mariana", "Linhares", "995742224", "23244444444", 5, "PESSOAL", 15000, new Date('1998-07-21'));
//------- erro ao puxar um cliente para o vetor de Funcionários
const cliente1 = new Cliente_1.Cliente("Amanda", "Santa Leopoldina", "996892225", "22222222222", 120, new Date('2001-04-10'));
const vetorFuncionarios = [gerente1, gerente2, gerente3, atendente1, atendente2, atendente3];
//vetorFuncionarios.push(cliente1);
console.log("\n 🤖 TESTE DO MÉTODO toString()");
vetorFuncionarios.forEach(e => console.log(e.toString()));
console.log("\n 🤖 Teste do Método de Bonificação SEM passagem de parâmetro - \n");
vetorFuncionarios.forEach(e => {
    if (e instanceof Gerente_1.Gerente) {
        console.log(` ${e.nome} - Gerente - ${e.nivel} - Bonificação: R$ ${e.bonificacao().toFixed(2)}`);
    }
    else if (e instanceof Atendente_1.Atendente) {
        console.log(` ${e.nome} - Atendente - ${e.tipo} - Bonificação: R$ ${e.bonificacao().toFixed(2)}`);
    }
});
console.log("\n 🤖  Teste do Método de Bonificação COM passagem de parâmetro - \n");
vetorFuncionarios.forEach(e => {
    if (e instanceof Gerente_1.Gerente) {
        console.log(` ${e.nome} - Gerente - ${e.nivel} - Bonificação: R$ ${e.bonificacao(20).toFixed(2)}`);
    }
    else if (e instanceof Atendente_1.Atendente && e.tipo == "PESSOAL") {
        console.log(` ${e.nome} - Atendente - ${e.tipo} - Bonificação: R$ ${e.bonificacao(20).toFixed(2)}`);
    }
    else {
        console.log(` ${e.nome} - Atendente - CAIXA - Bonificação: R$ ${e.bonificacao(15).toFixed(2)}`);
    }
});
//# sourceMappingURL=teste.js.map