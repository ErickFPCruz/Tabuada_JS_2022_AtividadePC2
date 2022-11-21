const nrPrincipal = Number(prompt(`Escreva um número qualquer: `));

let contador = -1;
let mensagem = '';

let produto = null;

while (contador++ < 10)
{    
    produto = contador * nrPrincipal
    mensagem += `\n${nrPrincipal} x ${contador} = ${produto}`;
}

alert(`A tabuada do número ${nrPrincipal} é: ${mensagem}`);
