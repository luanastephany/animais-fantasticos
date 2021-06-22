function initTabNav() {
  //imagens
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  //descrições
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    //sempre mostrar o 1º texto ao carregar a página
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    //loop pra cada item
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if (accordionList.length) {

    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')

    function activeAccordion() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const topo = section.offsetTop

    window.scrollTo({
      top: topo,
      behavior: 'smooth', //scroll suave
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()

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