document.addEventListener("DOMContentLoaded", () => {
  const cardStack = document.querySelector(".card-stack");

  if (cardStack) {
    const cards = cardStack.querySelectorAll(".card");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dotsContainer = document.querySelector(".nav-dots");

    let currentIndex = 0;
    const totalCards = cards.length;
    let autoPlayInterval;

    // Pontos de navegação
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => handleNavigation(i));
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll(".dot");

    // Função principal que atualiza o carrossel
    function updateCards() {
      const half = Math.floor(totalCards / 2);

      cards.forEach((card, index) => {
        let position = index - currentIndex;

        // Lógica para o loop infinito "circular"
        if (position > half) {
          position -= totalCards;
        } else if (position < -half) {
          position += totalCards;
        }

        card.style.setProperty("--i", position);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function handleNavigation(newIndex) {
      currentIndex = newIndex;
      updateCards();
      // Reseta o timer do autoplay sempre que o usuário interagir
      resetAutoPlay();
    }

    function autoPlay() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCards();
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(autoPlay, 5000);
    }

    // Event Listeners para os botões
    nextBtn.addEventListener("click", () =>
      handleNavigation((currentIndex + 1) % totalCards)
    );
    prevBtn.addEventListener("click", () =>
      handleNavigation((currentIndex - 1 + totalCards) % totalCards)
    );

    // Inicia o carrossel e o autoplay
    updateCards();
    resetAutoPlay();
  }
});
