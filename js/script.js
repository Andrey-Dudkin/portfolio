const body = document.querySelector('body')

// *toggle theme light-dark
const btnToggkeTheme = document.querySelector('.btn-toggle-theme')

if (localStorage.getItem('dark-theme') === 'dark') {
  btnToggkeTheme.classList.add('dark-theme__active')
  body.classList.add('dark-theme')
} else if (localStorage.getItem('dark-theme') === 'light') {
  btnToggkeTheme.classList.remove('dark-theme__active')
  body.classList.remove('dark-theme')
}

// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     btnToggkeTheme.classList.add('dark-theme__active')
//     body.classList.add('dark-theme')
// }

btnToggkeTheme.addEventListener('click', function () {
  btnToggkeTheme.classList.toggle('dark-theme__active')
  let isDark = body.classList.toggle('dark-theme')
  if (isDark) {
    localStorage.setItem('dark-theme', 'dark')
  } else {
    localStorage.setItem('dark-theme', 'light')
  }
})

//* toggle section
const containerBtn = document.querySelector('.toggle-section__body')
const btnSectionLeft = document.querySelector('.toggle-section__btn--left')
const btnSectionRight = document.querySelector('.toggle-section__btn--right')
btnSectionLeft.addEventListener('click', () => {
  containerBtn.classList.remove('toggle-section__btn--active')
})
btnSectionRight.addEventListener('click', () => {
  containerBtn.classList.add('toggle-section__btn--active')
})
const toggleBtns = document.querySelectorAll('.toggle-section__btn')
const tabContent = document.querySelectorAll('.section-content')
toggleBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    let currentBtn = btn
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)
    console.log(tabId)
    toggleBtns.forEach(btn => {
      btn.classList.remove('toggle-section__btn--active')
    })
    tabContent.forEach(tab => {
      tab.classList.remove('section-content--active')
    })
    currentBtn.classList.add('toggle-section__btn--active')
    currentTab.classList.add('section-content--active')
  })
})

//* toggle projects
const btnsTabProject = document.querySelectorAll('.projects-tabs-btns__btn')
const contentTabProject = document.querySelectorAll('.projects__content')
btnsTabProject.forEach(btn => {
  btn.addEventListener('click', function () {
    let currentBtn = btn
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)
    btnsTabProject.forEach(btn => {
      btn.classList.remove('projects-tabs-btns__btn--active')
    })
    contentTabProject.forEach(tab => {
      tab.classList.remove('projects__content--active')
    })
    currentBtn.classList.add('projects-tabs-btns__btn--active')
    currentTab.classList.add('projects__content--active')
  })
})

// *swiper
let swiperWebSite = new Swiper('.swiper-web-site', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 800,
  navigation: {
    prevEl: '.swiper-web-site__btn-prev',
    nextEl: '.swiper-web-site__btn-next',
  },
  breakpoints: {
    1025: {
      spaceBetween: 20,
    },
  },
})
let swiperWebApp = new Swiper('.swiper-web-app', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-web-app__btn-prev',
    prevEl: '.swiper-web-app__btn-next',
  },
  breakpoints: {
    1025: {
      spaceBetween: 20,
    },
  },
})
