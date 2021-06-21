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