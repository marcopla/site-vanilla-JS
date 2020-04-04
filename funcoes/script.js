function clicou() {
    console.log('Clicou');
}
addEventListener ('click', clicou);

var totalPaises = 193;

function faltaVisitar (jaVisitados){
    return `Falta visitar ${totalPaises - jaVisitados}`;
}

console.log(faltaVisitar(10));

console.log('*** Exercícios: ***');

// Crie uma função para verificar se um valor é Truthy

function verificaBoolean (valor){
    if(valor)
        return 'True';
    else
        return 'False';
}
// function verifica(valor){
// return !!valor 
//}
console.log(verificaBoolean(''));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calculaPerimetroQuadradado (ladoQuadrado){
    return `O perímetro do quadrado é ${4 * ladoQuadrado}`;
}

console.log(calculaPerimetroQuadradado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

var primeiroNome = 'Marco';
var sobreNome = 'Plá';

function retornaNomeCompleto (primeiroNome, sobreNome){
    return `Nome completo: ${primeiroNome} ${sobreNome}`;
}

console.log(retornaNomeCompleto(primeiroNome, sobreNome));

// Crie uma função que verifica se um número é par


function verificaSeEhPar (numero) {
    if((numero % 2) === 0)
        return `O número ${numero} é par.`
    else
        return `O número ${numero} é impar.`
}

console.log(verificaSeEhPar(10));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaTipoDoDado(dado) {
    return typeof dado; 
}

console.log(verificaTipoDoDado('Olá'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function scrollou() {
    console.log('scrollou');
}
addEventListener('scroll', scrollou);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  

