{
    var numero = 12;
    let numero2 = 11;
}

//console.log(numero, numero2);


const data = {
    ano: 2020,
    mês: 'janeiro',
}


data.ano = 2021;

console.log(data);

console.log('*** Exercícios ***');

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(cor, marca, portas);
  
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  