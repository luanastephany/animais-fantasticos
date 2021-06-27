export default function () {
  const sections = document.querySelectorAll('.js-scroll')

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      if (sectionTop < 0) {
        section.classList.add('ativo')
      }
    })
  }

  window.addEventListener('scroll', animaScroll)
}