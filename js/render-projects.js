const containerProjectsWebSite = document.querySelector('#swiper-wrapper-web-site')
const containerProjectsWebApp = document.querySelector('#swiper-wrapper-web-appp')

async function getProjects() {
  try {
    const response = await fetch('./js/projects.json')
    const projectArray = await response.json()
    renderProjectsSite(projectArray.sites)
    renderProjectsApp(projectArray.apps)
  } catch (error) {
    console.log('Ответ не пришол')
  }
}
getProjects()

function renderProjectsSite(site) {
  site.forEach(project => {
    const projectHTML = `<div class="swiper-slide">
                  <div class="project">
                    <a href="${project.link}" target="_blank" class="project__link">
                      <div class="project__overlay">
                        <div class="project__image">
                          <img src="${project.img}" alt="Обложка проекта" class="project__img" />
                        </div>
                        <div class="project__text">
                          <h3 class="project__title">${project.title}</h3>
                          <p class="project__description">
                         ${project.description}
                          </p>
                          <svg xmlns="http://www.w3.org/2000/svg" class="project__icon-arrow" viewBox="0 0 24 24">
                            <path class="project__icon-arrow" d="M2 2H13V4H4V20H13V22H2V2Z" />
                            <path
                              class="project__icon-arrow"
                              d="M17 6.58579L22.4142 12L17 17.4142L15.5858 16L18.5858 13H7V11H18.5858L15.5858 8L17 6.58579Z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>`
    containerProjectsWebSite.insertAdjacentHTML('afterbegin', projectHTML)
  })
}
function renderProjectsApp(app) {
  app.forEach(project => {
    const projectHTML = `<div class="swiper-slide">
                  <div class="project">
                    <a href="${project.link}" target="_blank" class="project__link">
                      <div class="project__overlay">
                        <div class="project__image">
                          <img src="${project.img}" alt="Обложка проекта" class="project__img" />
                        </div>
                        <div class="project__text">
                          <h3 class="project__title">${project.title}</h3>
                          <p class="project__description">
                         ${project.description}
                          </p>
                          <svg xmlns="http://www.w3.org/2000/svg" class="project__icon-arrow" viewBox="0 0 24 24">
                            <path class="project__icon-arrow" d="M2 2H13V4H4V20H13V22H2V2Z" />
                            <path
                              class="project__icon-arrow"
                              d="M17 6.58579L22.4142 12L17 17.4142L15.5858 16L18.5858 13H7V11H18.5858L15.5858 8L17 6.58579Z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>`
    containerProjectsWebApp.insertAdjacentHTML('afterbegin', projectHTML)
  })
}
