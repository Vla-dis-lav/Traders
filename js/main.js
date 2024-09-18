document.addEventListener('DOMContentLoaded', () => {
  const tradersButtons = document.querySelectorAll('.traders__button')

  for (const tradersButton of tradersButtons) {
    tradersButton.addEventListener('click', () => {
      tradersButton.classList.add('traders__button_primary')
      for (const tradersButton2 of tradersButtons) {
        if (tradersButton2 !== tradersButton) {
          tradersButton2.classList.remove('traders__button_primary')
        }
      }
    })
  }

  new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',

    // Navigation arrows
    navigation: {
      nextEl: '.traders-slider__button-next',
      prevEl: '.traders-slider__button-prev',
    },
  })

  new Accordion('.accordion-container', {
    activeClass: 'accordion_active',
    /**
     * 
     * @param {HTMLElement} item 
     */
    beforeOpen: (item) => {
      item.querySelector('.accordion__collapse-icon').setAttribute('src', './images/Remove.svg')
    },
    /**
     * 
     * @param {HTMLElement} item 
     */
    beforeClose: (item) => {
      item.querySelector('.accordion__collapse-icon').setAttribute('src', './images/Plus.svg')
    }
  });
})