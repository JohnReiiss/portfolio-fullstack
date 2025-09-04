document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o contêiner do carrossel pelo novo ID de chakra
  const carouselContainer = document.querySelector("#stacks-carousel .flex");

  // Verifica se o contêiner existe antes de continuar
  if (carouselContainer) {
    // Pega todos os cards de jutsus originais
    const originalItems = Array.from(carouselContainer.children);

    // Faz um kage bushin em cada item e posiciona no final do contêiner
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      carouselContainer.appendChild(clone);
    });

    // Adiciona a classe 'scrolling' para iniciar a a técnica no CSS
    carouselContainer.classList.add("scrolling");

    // Pausa a animação ao passar o mouse sobre o contêiner
    carouselContainer.addEventListener("mouseover", () => {
      carouselContainer.classList.add("paused");
    });

    // Retoma a animação ao remover o mouse do contêiner
    carouselContainer.addEventListener("mouseout", () => {
      carouselContainer.classList.remove("paused");
    });
  }
});
