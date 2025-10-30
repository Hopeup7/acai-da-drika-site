// Meu Deus, eu coloco esta nova fase em suas poderosas e Santas Mãos, Senhor Jesus. Amém!

// ===================== FUNCIONALIDADE DO CARROSSEL DRIKA =====================

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os itens do carrossel
  const itens = document.querySelectorAll(".carrossel-item");

  // Define o índice do item atualmente visível
  let indexAtual = 0;

  // Função que mostra apenas o item ativo
  function mostrarItem(index) {
    itens.forEach((item, i) => {
      item.classList.toggle("ativo", i === index);
    });
  }

  // Aplica evento a todos os botões de seta esquerda
  document.querySelectorAll(".seta-esquerda").forEach(botao => {
    botao.addEventListener("click", () => {
      indexAtual = (indexAtual - 1 + itens.length) % itens.length;
      mostrarItem(indexAtual);
    });
  });

  // Aplica evento a todos os botões de seta direita
  document.querySelectorAll(".seta-direita").forEach(botao => {
    botao.addEventListener("click", () => {
      indexAtual = (indexAtual + 1) % itens.length;
      mostrarItem(indexAtual);
    });
  });

  // Exibe o primeiro item ao carregar a página
  mostrarItem(indexAtual);
});
