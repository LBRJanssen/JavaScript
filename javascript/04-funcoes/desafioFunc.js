/*function userName(name) {
    console.log('Seu usuário é:' + name)
}

userName('Lucas');
*/
/*
function yourAge(age) {
    if (age >= 18) {
        console.log('Acesso liberado!! sua idade é:', age);
    } else {
        console.log('Acesso negado!! sua idade é:', age);  
    } 
}

yourAge(17);
*/



/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const valorEtiqueta = 150;
const formaPagamento = 2

function getDiscount(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function putDiscount(valor, juros) {
    return (valor + (valor * juros/100));
}

function main(valorEtiqueta, formaPagamento) {
    if (formaPagamento === 1) { // 1 - À vista Débito, recebe 10% de desconto;
        return (getDiscount(valorEtiqueta, 10));

    } else if (formaPagamento === 2) { // 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        return (getDiscount(valorEtiqueta, 15));

    } else if (formaPagamento === 3) { // 3 - Em duas vezes, preço normal de etiqueta sem juros;
        return valorEtiqueta;

    } else if (formaPagamento === 4) { // 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
        return (putDiscount(valorEtiqueta, 10));

    } else {
        return 'Método pagamento inválido!!';
    }
}

console.log(main(valorEtiqueta, formaPagamento));