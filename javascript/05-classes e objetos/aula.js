/*class car {
    marca;
    gastoPorKm;
    distanciaKm;
    valorCombust;




    constructor(marca, gastoPorKm, distanciaKm, valorCombust) {  // FUNCTION
        this.marca = marca;
        this.gastoPorKm = gastoPorKm;
        this.distanciaKm = distanciaKm;
        this.valorCombust = valorCombust;

        const valorGasto = (distanciaKm / gastoPorKm) * valorCombust;

        console.log('a marca do carro é ', this.marca, 'e ele gasta', this.gastoPorKm, 'Km/L. Concluimos que em uma viagem de ', this.distanciaKm, 'km, o carro gasta', valorGasto.toFixed(2), 'Reais');
    }
}



const uno = new car('Fiat', 13, 200, 5.70);
const jeep = new car('Renegade', 10, 200, 5.70);
*/




class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarIMC() {
        const imc = this.calcularIMC();
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
}

const lucas = new Pessoa('Lucas', 105, 1.77);
console.log(lucas.classificarIMC());


















