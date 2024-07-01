let acumuladorCarrinho = 0;
function adicionar(){
    let nomeCompletoProduto =  document.getElementById("produto").value
    let nomeProduto = nomeCompletoProduto.split("-")[0];
    let precoUnitario = nomeCompletoProduto.split("R$")[1]
    let quantidade = document.getElementById("quantidade").value

    let Precototal =  precoUnitario * quantidade 
    acumuladorCarrinho = acumuladorCarrinho + Precototal;
    
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto" id="lista-produtos">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${Precototal}
    </span> </section>`
    let campoTotal = document.getElementById("valor-total")
    campoTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${acumuladorCarrinho}</span></p>`
    document.getElementById("quantidade").value = ""
}

function limpar(){
    acumuladorCarrinho = 0;
    let campoTotal = document.getElementById("valor-total")
    campoTotal.innerHTML = ""
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = `<section class="carrinho__produtos__produto"></section>`
}
