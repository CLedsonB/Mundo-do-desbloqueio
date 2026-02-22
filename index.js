// Função para criar os produtos
function criarProdutos(produtos) {
  const container = document.querySelector('.container');

  // Limpa o conteúdo existente
  container.innerHTML = '';

  produtos.forEach((produto) => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';

    const imagem = document.createElement('img');
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    produtoDiv.appendChild(imagem);

    const nome = document.createElement('h2');
    nome.textContent = produto.nome;
    produtoDiv.appendChild(nome);

    const preco = document.createElement('p');
    preco.textContent = `R$ ${produto.preco}`;
    produtoDiv.appendChild(preco);

    const botoesDiv = document.createElement('div');
    botoesDiv.className = 'botoes';

    const botaoDetalhes = document.createElement('button');
    botaoDetalhes.className = 'botao-detalhes';
    botaoDetalhes.textContent = 'Detalhes';
    botoesDiv.appendChild(botaoDetalhes);

    const botaoWhatsapp = document.createElement('button');
    const link = document.createElement('a');
    link.href = `${produto.link}`
    botaoWhatsapp.className = 'botao-whatsapp';
    const imagemWhatsapp = document.createElement('img');
    imagemWhatsapp.src = 'img/whatsapp.png';
    imagemWhatsapp.alt = 'icone-Whatssap';
//    botaoWhatsapp.appendChild(imagemWhatsapp);
//    botoesDiv.appendChild(botaoWhatsapp);
    
    link.appendChild(imagemWhatsapp);
    botaoWhatsapp.appendChild(link);
    botoesDiv.appendChild(botaoWhatsapp)
    
    produtoDiv.appendChild(botoesDiv);
    container.appendChild(produtoDiv);
  });
}

// Exemplo de uso
const produtos = [
  { nome: 'TSM-PRO 3 meses', preco: '29,99', imagem: 'img/turbo.jpg', link: `https://wa.me/+5571992790348?text=Oi%20eu%20tenho%20interesse%20no%20turbo%20service%20mobile%20de%203%20meses`},
  { nome: 'TSM-PRO 6 meses', preco: '52,99', imagem: 'img/turbo.jpg', link: `https://wa.me/+5571992790348?text=Oi%20eu%20tenho%20interesse%20no%20turbo%20service%20mobile%20de%206%20meses`},
  { nome: 'TSM-PRO 12 meses', preco: '75,00', imagem: 'img/turbo.jpg', link: `https://wa.me/+5571992790348?text=Oi%20eu%20tenho%20interesse%20no%20turbo%20service%20mobile%20de%2012%20meses`},
  { nome: 'Unlock Tool 3 meses', preco: '34,99', imagem: 'img/unlock.jpg', link: `https://wa.me/+5571992790348?text=Oi%20eu%20tenho%20interesse%20no%20Unlock%20Tool%20de%203%20meses` },
  { nome: 'Unlock Tool 6 meses', preco: '49,00', imagem: 'img/unlock.jpg', link: `https://wa.me/+5571992790348?text=Oi%20eu%20tenho%20interesse%20no%20Unlock%20Tool%20de%206%20meses` },
  { nome: 'Unlock Tool 12 meses', preco: '86,00', imagem: 'img/unlock.jpg', link: `https://wa.me/+557171992790348?text=Oi%20eu%20tenho%20interesse%20no%20Unlock%20Tool%20de%2012%20meses` },
  { nome: 'TFM-TOOL 3 meses', preco: '38,99', imagem: 'img/tfm.jpg', link: `https://wa.me/+557171992790348?text=Oi%20eu%20tenho%20interesse%20no%20TFM%20TOOL%20de%203%20meses` },
  { nome: 'TFM-TOOL 12 meses', preco: '55,00', imagem: 'img/tfm.jpg', link: `https://wa.me/+557171992790348?text=Oi%20eu%20tenho%20interesse%20no%20TFM%20TOOL%20de%2012%20meses` },
];

criarProdutos(produtos);
