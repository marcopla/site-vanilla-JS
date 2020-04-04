// var valor = false;

// if(valor)
//     console.log(`verdadeiro`);
// else
//     console.log(`falso`);

// // !!valor;

// var condicional = (5 - 10) && ( 25 );

// if(condicional)
//     console.log('Entrou no if');

// var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);

// console.log(condicional2);

//Exercício

var minhaIdade = 36;
var idadeIrmao = 32;
if(minhaIdade > idadeIrmao)
    console.log('É maior.');
else if (minhaIdade < idadeIrmao)
    console.log('É maior.');
else 
    console.log('É igual.');

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

var nome = 'André';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

var brasil = 207;
var china = 1340;

if(brasil > china)
    console.log(`População do Brasil é maior`);
else
    console.log(`População da China é maior`);

if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}



