/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso!';

    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal!';

    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso!';

    } else if (imc >= 30 && imc < 40) {
        return 'Obesidade!';
    } else {
        return 'Obesidade Grave!';
    }
}

function main() {
    const imc = calcularImc(75, 1.75);
    console.log(classificarImc(imc));
}

main();






















































/*
function teste (nome, peso, altura) {
    if (peso / Math.pow(altura,2) < 18.5) {
        const imc = peso / Math.pow(altura, 2)
        console.log(nome, 'Você esta abaixo do peso. Seu IMC atual é', imc.toFixed(2));
    } else if (peso / Math.pow(altura, 2) >= 18.5 && peso / Math.pow(altura, 2) < 25) {
        const imc = peso / Math.pow(altura, 2)
        console.log(nome, 'Você está no seu peso normal. Seu IMC atual é', imc.toFixed(2));
    } else {
        const imc = peso / Math.pow(altura, 2)
        console.log(nome, 'Você está acima do seu peso, seu IMC atual é', imc.toFixed(2));

    }
}
teste('Fernanda', 44, 1.75);
teste('Walery', 64, 1.70);
teste('Lucas', 105, 1.77);
*/

