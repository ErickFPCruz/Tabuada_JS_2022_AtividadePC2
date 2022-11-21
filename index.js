const nrPrincipal = Number(prompt(`Escreva um número qualquer: `));

let contador = -1;

let produto = nrPrincipal * contador;

while (contador++ < 10)
{    
    let mensagem += `\n${nrPrincipal} x ${contador} = ${produto}`;
}

alert(`A tabuada do número ${nrPrincipal} é: ${mensagem}`);
