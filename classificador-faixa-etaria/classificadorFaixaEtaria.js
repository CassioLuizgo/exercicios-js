/*Cria uma função que recebe a idade de uma pessoa
e retorna a categoria correspondente
Mennor que 12 == Criança
Maior/igual 13 e menor/igual 17  == Adolescente 
Maior/igaul 18 && Menor/igual 59 == Adulto
Maior que 60 == Idoso
*/

let idade = Number(prompt("Qual é a sua idade ? Digite-a :"))

if (idade <=12) {
    alert(`Idade ${idade} anos, você é criança.`)
} else if (idade >=13 && idade <=17) {
    alert(`${idade} anos, você é adolescente !`)
} else if (idade >=18 && idade <=59) {
    alert(`Você tem ${idade} anos, adulto`)
} else {
    alert(`${idade} anos, Idoso.`)
};


