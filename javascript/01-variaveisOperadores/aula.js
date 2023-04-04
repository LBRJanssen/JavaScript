//preço gasolina = 5,75
//gasto médio de km/l = 8km/l
//distancia da viagem = 15km


const valorGasolina = 5.79;
const kmPorLitro = 12;
const distanciaPorKM = 1580;

const litrosConsumidos = distanciaPorKM / kmPorLitro;
console.log('Litros consumidos:',litrosConsumidos.toFixed(2));
const valorGasto = litrosConsumidos * valorGasolina;
console.log('O nosso sistema concluíu que você usará:', valorGasto.toFixed(2));