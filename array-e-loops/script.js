var videoGames =['switch', 'ps4', 'xbox', '3DS'];


for(var numero = 1; numero <= 10; numero++){
    console.log(numero);
}

var i = 0;

while( i < 10) {
    console.log(i);
    i++;
}

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] === 'ps4')
        break;
}

console.log('**********');
var pecas = ['banheiro', 'sala', 'cozinha', 'quarto'];

pecas.forEach(function(item, index, array) {
    console.log(item, index, array);
});
console.log('**********');

videoGames.forEach( videoGame => console.log(videoGame));

console.log('*** Exercícios ***');

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

anosCopasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anosCopasBrasil.forEach( ano => console.log(`O Brasil ganhou a copa de ${ano}`));

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(var i = 0; i <= frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pera')
        break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];

console.log(ultimaFruta);

