const nodeList = document.querySelectorAll('.gallery-section__card');
const array = Array.prototype.slice.call(nodeList);

function getParentId(el) {
const id = el.parentElement.id;
}

let btns = document.querySelectorAll('.filters-list__button');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    getParentId(btn);
    for (i = 0; i <= array.length - 1; i++) {
      array[i].classList.remove('visually-hidden')
      if (btn.id === 'js-all') {
        array[i].classList.remove('visually-hidden')
      }
      else {
        if (array[i].id !== btn.id) {
          array[i].classList.add('visually-hidden')
        }
      }
      console.log(btn.id)
    }
  })
})

/* const ref = {
  allBtn: document.querySelector('[data-action="js-btn-all"]'),
  webBtn: document.querySelector('[data-action="js-btn-web"]'),
  appBtn: document.querySelector('[data-action="js-btn-app"]'),
  designBtn: document.querySelector('[data-action="js-btn-design"]'),
  marketingBtn: document.querySelector('[data-action="js-btn-marketing"]'),
}
  
  const nodeList = document.querySelectorAll('.gallery-section__card');
  const array = Array.prototype.slice.call(nodeList);
  const toHide = []
//console.log(array)


ref.webBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++){
    array[i].classList.remove('visually-hidden')
    if (array[i].id !== 'js-web') {
      toHide.push(array[i])
      array[i].classList.add('visually-hidden')
      console.log(toHide)
    }
}
})

ref.allBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++)
      array[i].classList.remove('visually-hidden')
      console.log(toHide)
    }
)

ref.appBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++){
    array[i].classList.remove('visually-hidden')
    if (array[i].id !== 'js-app') { 
      toHide.push(array[i])
      array[i].classList.add('visually-hidden')
      console.log(toHide)
    }
}
})

ref.designBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++){
    array[i].classList.remove('visually-hidden')
    if (array[i].id !== 'js-design') { 
      toHide.push(array[i])
      array[i].classList.add('visually-hidden')
      console.log(toHide)
    }
}
})

ref.marketingBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++){
    array[i].classList.remove('visually-hidden')
    if (array[i].id !== 'js-marketing') { 
      toHide.push(array[i])
      array[i].classList.add('visually-hidden')
      console.log(toHide)
    }
}
}) */