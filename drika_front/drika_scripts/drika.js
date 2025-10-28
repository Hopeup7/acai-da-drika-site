// Meu Deus, eu coloco esta nova fase em suas poderosas e Santas Mãos, Senhor Jesus. Amém!

// ===================== FUNCIONALIDADE DO CARROSSEL DRIKA =====================

// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos com a classe .carrossel-item (os slides)
  const itens = document.querySelectorAll(".carrossel-item");

  // Seleciona o botão de navegação esquerda (←)
  const btnEsquerda = document.querySelector(".seta-esquerda");

  // Seleciona o botão de navegação direita (→)
  const btnDireita = document.querySelector(".seta-direita");

  // Define o índice atual do item visível no carrossel (inicia no primeiro)
  let indexAtual = 0;

  // Função que atualiza o carrossel, mostrando apenas o item ativo
  function atualizarCarrossel() {
    // Percorre todos os itens do carrossel
    itens.forEach((item, i) => {
      // Remove a classe "ativo" de todos os itens
      item.classList.remove("ativo");

      // Adiciona a classe "ativo" apenas ao item correspondente ao índice atual
      if (i === indexAtual) {
        item.classList.add("ativo");
      }
    });
  }

  // Evento de clique no botão esquerdo (←)
  btnEsquerda.addEventListener("click", () => {
    // Decrementa o índice atual, voltando um item
    // O cálculo com módulo (%) garante que o índice nunca fique fora do intervalo
    indexAtual = (indexAtual - 1 + itens.length) % itens.length;

    // Atualiza o carrossel com o novo índice
    atualizarCarrossel();
  });

  // Evento de clique no botão direito (→)
  btnDireita.addEventListener("click", () => {
    // Incrementa o índice atual, avançando um item
    indexAtual = (indexAtual + 1) % itens.length;

    // Atualiza o carrossel com o novo índice
    atualizarCarrossel();
  });

  // Chama a função uma vez ao carregar a página para exibir o primeiro item
  atualizarCarrossel();
});
