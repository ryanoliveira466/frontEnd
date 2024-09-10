document.addEventListener('DOMContentLoaded', () => {
    const adicionarBotoes = document.querySelectorAll('.adicionar')
    const listaProdutos = document.querySelector('.lista_produtos')
    const totalElement = document.querySelector('.total')
    let total = 0

    //Outra forma de fazer

    document.getElementById('adicionar').addEventListener('click',function () {
                 const produtoElemento = document.getElementById('adicionar').parentElement
                 //Compatível com :SELECT nome FROM produto
                 const nomeProduto = produtoElemento.querySelector('h3').textContent
                 const precoProdutoTexto = produtoElemento.querySelector('p').textContent
                 console.log(precoProdutoTexto)

                 //1o replace, tira a string e deixa só o número
                 //2o replace, troca a vírgula por . para fazer a soma no código
                 const precoProduto = parseFloat(precoProdutoTexto.replace('Preço: R$ ', '').replace(',','.'))
                 console.log(precoProduto)
    
                // Adicionar o produto à lista do carrinho
    
                 const itemCarrinho = document.createElement('li')
                 itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.', ',')}`
                 listaProdutos.appendChild(itemCarrinho)
    
                 //Atualizar o valor do carrinho
                 total += precoProduto
                 totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.',',')}`
             })


    // adicionarBotoes.forEach((botao) => {
    //     botao.addEventListener('click', () => {
    //         const produtoElemento = botao.parentElement
    //         //Compatível com :SELECT nome FROM produto
    //         const nomeProduto = produtoElemento.querySelector('h3').textContent
    //         const precoProdutoTexto = produtoElemento.querySelector('p').textContent
    //         const precoProduto = parseFloat(precoProdutoTexto.replace('Preço: R$ ', '').replace(',','.'))

    //         //Adicionar o produto à lista do carrinho

    //         const itemCarrinho = document.createElement('li')
    //         itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.', ',')}`
    //         listaProdutos.appendChild(itemCarrinho)

    //         //Atualizar o valor do carrinho
    //         total += precoProduto
    //         totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.',',')}`
    //     })
    // })



})