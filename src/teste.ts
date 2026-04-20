import { Gerente } from "./Gerente";
import { Funcionario } from "./Funcionario";
import { Atendente } from "./Atendente";

const funcionario1 = new Funcionario("ana","barraco","999999999","33333333333","marrocos",2000,new Date('1990-03-15'));
const funcionario2 = new Funcionario("Heloisa","pedrolandia","999999799","33333833333","marranhao",2000,new Date('1990-03-15'));

console.log(funcionario1.toString());
console.log(funcionario2.toString());
console.log(funcionario1.bonificacao(20));

const gerente1 = new Gerente("analisa","marilandia","999999999","33333333333","contaLimpa",20000,"regional",new Date('2002-03-20'));
console.log(gerente1.toString());

const atendente1 = new Atendente("janete","aracruz","9999999999", "11111111111","agencia Castro",3000,new Date('2007-02-20'),"PESSOAL");
    console.log(atendente1.toString());
    console.log(atendente1.bonificacao());

const gerente2 = new Gerente("Helaine","Piuma","9999999999", "11111111111","agencia Castro",3000,"regional",new Date('2007-02-20'));
  
    console.log(gerente2.toString());
    console.log(gerente2.bonificacao(2));
