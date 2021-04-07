//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

var ValordoJantar = Number(prompt("Valor do jantar: "));
var TaxadoGarcom = ValordoJantar / 10;
var TotalaPagar = ValordoJantar + TaxadoGarcom;

console.log(`Valor do Jantar: ${ValordoJantar}`)
console.log(`Taxa do Garcom: ${TaxadoGarcom}`)
console.log(`Total a Pagar: ${TotalaPagar}`)


/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duraão total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

var NumDias = Number(prompt("Número de dias: ")) * 24;
var NumHoras = Number(prompt("Número de horas:"));
var TotaldeHoras = NumDias + NumHoras;

console.log(`Número de dias: ${NumDias}`)
console.log(`Número de horas: ${NumHoras}`)
console.log(`Total de horas: ${TotaldeHoras}`)

/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/

var Num = Number(prompt("Número: "))
var Numvizinho1 = Num - 1
var Numvizinho2 = Num + 1

console.log(`Número: ${Num}`)
console.log(`Vizinhos: ${Numvizinho1, Numvizinho2}`)

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
   
var ValordaConta = Number(prompt("Valor da conta:"))
var NumeroClientes = Number(prompt("Número de clientes:"))
var ValorClientes = ValordaConta / NumeroClientes

console.log (`Valor da Conta: ${ValordaConta}`)
console.log (`Número de clientes: ${NumeroClientes}`)
console.log (`ValorClientes: ${ValorClientes}`)

/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
   
var Preco = Number(prompt("Preço:"))
var Vista = Preco * 10 - Preco
var TresV = Preco / 3

console.log (`Preço: ${Preco}`)
console.log (`À vista: ${Vista}`)
console.log (`Ou 3x de: ${TresV}`)
/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/
var Nota1 = Number(prompt("Nota:"))
var Nota2 = Number(prompt("Nota:"))
var Nota3 = Number(prompt("Nota:"))
var Media = Nota1 + Nota2 + Nota3 / 3

console.log (`Nota 1: ${Nota1}`)
console.log (`Nota 2: ${Nota2}`)
console.log (`Nota 3: ${Nota3}`)
console.log (`Média: ${Media}`)