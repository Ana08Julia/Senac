// Criem uma página HTML simples que: 
    // Peça o *Nome do Aluno*  
    // Peça as 4 notas desse aluno, uma por vez === Number
    // Realiza o calculo da média final desse aluno
    // Exibe na tela (impresso no HTML)
        // Nome do aluno
        // As 4 notas digitadas 
        // média final  
            // Situação desse aluno
            // Aprovado com mérito (média igual ou acima de 9)
            // Aprovado (média entre 7 e 8.9)
            // Recuperação (média entre 5 e 6.9)
            // Reprovado (média menor que 5)

/////////////////////////////////////////////////////////////////////

// Exemplo de impressão:
    // Aluno: Nome Aluno
    // Notas: 8, 7, 6, 6
    // Média Final: 7.5
    // Situação: Aprovado

/////////////// SOLUÇÃO ///////////////
const nome = prompt(`Digite o nome do Aluno`);
const nota1 = Number(prompt(`Digite a nota do primeiro Bimestre.`));
const nota2 = Number(prompt(`Digite a nota do segundo Bimestre.`));
const nota3 = Number(prompt(`Digite a nota do terceiro Bimestre.`));
const nota4 = Number(prompt(`Digite a nota do quarto Bimestre.`));
const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao = "";
if(mediaFinal >= 9){
    situacao = 'Aprovado com mérito!!';
}else if(mediaFinal >= 7 && mediaFinal <= 8.9){
    situacao = 'Aprovado!';
}else if(mediaFinal >= 5 && mediaFinal <= 6.9){
    situacao = 'Recuperação!';
}else if(mediaFinal < 5){
    situacao = 'Reprovado!!';
}else {
    situacao = 'Aluno não matriculado.';
}
document.body.innerHTML = `Aluno: ${nome}.<br>Notas: ${nota1, nota2, nota3, nota4}<br>Média Final: ${mediaFinal}<br>Situação: ${situacao}.`;