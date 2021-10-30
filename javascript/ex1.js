function verificacao(num1, num2) {
    var saoIguaisOuNao = num1 === num2 ? `` : `não`;
    var soma = num1 + num2;
    var maiorOuMenorQue10 = soma > 10 ? `maior` : `menor`;
    var maiorOuMenorQue20 = soma > 20 ? `maior` : `menor`;

    return `Os números ${num1} e ${num2} ${saoIguaisOuNao} são iguais. Sua soma é ${soma}, que é ${maiorOuMenorQue10} que 10 e ${maiorOuMenorQue20} 20.`;
}
console.log(verificacao(20,20))
