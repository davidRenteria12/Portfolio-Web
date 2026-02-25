    let lastScroll = 0;
  const nav = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    // Ocultar al bajar
    if (currentScroll > lastScroll) {
      nav.style.top = "-80px"; 
    } else {
      nav.style.top = "0";
    }

    // Si el scroll pasa de 100px, activar modo compacto
    if (currentScroll > 100) {
      nav.classList.add("compacto");
    } else {
      nav.classList.remove("compacto");
    }

    lastScroll = currentScroll;
  });

