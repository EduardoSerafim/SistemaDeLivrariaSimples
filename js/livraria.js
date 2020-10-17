const resultado = document.querySelector('#elementos')


const nomeDoLivro  =document.querySelector('#nomeLivro');
const precoDoLivro =document.querySelector('#preco');
let descDoLivro = document.querySelector('#desconto');


document.querySelector('form').addEventListener('submit', function(evento){
    evento.preventDefault();
   
    const paragrafoNome = document.createElement('p');
    const paragrafoPreco = document.createElement('p');
    const paragrafoDesconto = document.createElement('p');
    const ParagrafoTotal = document.createElement('p');

    const paragrafoDeSeparacao = document.createElement('p');
    
    paragrafoNome.textContent = (`Nome do livro: ${nomeDoLivro.value} `);
    paragrafoPreco.textContent = ( `Preço do livro: R$ ${precoDoLivro.value}`);
    
   let desconto = 0;
   let cliente = 0;
    if(descDoLivro.value == "7"){
        //desconto do cliente C é de 7%
        desconto = preco.value * 7 /100 ;
        cliente = "cliente C";

    }else if(descDoLivro.value == "10"){
        //desconto do cliente B é de 10%
        desconto = preco.value * 10 /100 ;
        cliente = "cliente B";

    }else if(descDoLivro.value == "15"){
        //desconto do cliente A é de 15%
        desconto = preco.value * 15 /100 ;
        cliente = "cliente A";

    }else{
        //cliente normal não tem desconto
        desconto = 0;
        cliente = "cliente"
    }
    
    paragrafoDesconto.textContent = (`Desconto do ${cliente}: R$ ${desconto} `) ;
    ParagrafoTotal.textContent = (`Total a pagar: R$ ${preco.value-desconto} `) ;
    
    paragrafoDeSeparacao.textContent = ("------------------------------------------------------------------");
    
    
    resultado.appendChild(paragrafoNome);
    resultado.appendChild(paragrafoPreco);
    resultado.appendChild(paragrafoDesconto);
    resultado.appendChild(ParagrafoTotal);
    
    resultado.appendChild(paragrafoDeSeparacao);
    
    this.reset();

    nome.focus();

});