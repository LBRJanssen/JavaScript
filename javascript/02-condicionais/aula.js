/* 
Um programa para calcular o valor de uma viagem

Terá 3 variaveis. Sendo elas:
1- Preço Etanol;
2- Preço Gasolina;
3- O tipo de combustivel que esta no seu carro;
4- Gasto médio de combustivel do carro por KM;
5- Distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem
*/

const valorEtanol = 5.79;
const valorGasolina = 6.66;
const kmPorLitro = 10;
const distanceForKM = 100;
const typeCombust = 'Etanol';

const litrosConsumidos = distanceForKM / kmPorLitro;
console.log('Litros consumidos:', litrosConsumidos.toFixed(2));

if (typeCombust === 'Etanol') {
    const valorGasto = litrosConsumidos * valorEtanol;
    console.log('O nosso sistema concluiu que você irá gastar:', valorGasto.toFixed(2), 'Reais, usando Etanol')
} else {
    const valorGasto = litrosConsumidos * valorGasolina;
    console.log('O nosso sistema concluiu que você irá gastar:', valorGasto.toFixed(2), 'Reais, usando Gasolina')
}
