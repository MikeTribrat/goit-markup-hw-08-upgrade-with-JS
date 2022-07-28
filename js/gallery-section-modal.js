
const webBtn = document.querySelector('[data-action="js-btn-web"]');
const nodeList = document.querySelectorAll('.gallery-section__card');
const array = Array.prototype.slice.call(nodeList);
//console.log(array)
const toHide = []

webBtn.addEventListener('click', () => {
  for (i = 0; i <= array.length - 1; i++){
    if (array[i].id ==='js-web') {
      toHide.push(array[i])
      array[i].classList.toggle('visually-hidden')
      //console.log(array[i].id)
      console.log(toHide)
    }
}
})



/* const webBtn = document.querySelector('[data-action="js-btn-web"]');
const navEl = document.querySelector('.gallery-section__card')
webBtn.addEventListener('click', () => {
navEl.classList.toggle('visually-hidden');
}) */

/* const ref = {
  allBtn: document.querySelector('[data-action="js-btn-all"]'),
  webBtn: document.querySelector('[data-action="js-btn-web"]'),
  appBtn: document.querySelector('[data-action="js-btn-app"]'),
  designBtn: document.querySelector('[data-action="js-btn-design"]'),
  marketingBtn: document.querySelector('[data-action="js-btn-marketing"]'),
  actionsEventStart: document.querySelector('.gallery-section__card'),
  modal: document.querySelector('[data-modal]'),
} */


/* ref.actionsEventStart.addEventListener('click', toggleVisibility);
  
  function toggleVisibility() {
    ref.actionsEventStart.classList.toggle('visually-hidden');
} */


//console.log(webBtn)
//const values = [document.querySelectorAll('.gallery-section__card')]
//const div_list = document.querySelectorAll('.gallery-section__card'); // returns NodeList
//console.log(div_list)
//const div_array = Array.prototype.slice.call(div_list); // преобразует NodeList в Array
//console.log(div_array)

//console.log(div_array.length)
//const newArray = []
/* (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');
  }
})(); */


    
    //const choose = document.querySelectorAll('.js-web')
    //for (let i = 0; i <= div_array.length - 1; i++){
    //console.log(div_array[i])
    //console.log(div_array[i].classList)
    //if (div_array[i].includes('.js-web')) {
    //let removed = div_array.splice(i, 1);
    //newArray.push(div_array[i])
    //console.log(removed)

        //console.log(newArray)
    //}
    //console.log(div_array)
    //console.log(show)
//})

/* allBtn.addEventListener('click', () => {
    let el = document.getElementById('js-all');
    console.log(el)
    el.remove()
})

appBtn.addEventListener('click', () => {
    let el = document.getElementById('js-web');
    el.remove()
})

designBtn.addEventListener('click', () => {
    const show = document.querySelectorAll('.js-design') 
})

marketingBtn.addEventListener('click', () => {
    const show = document.querySelectorAll('.js-marketing') 
}) */

/* const action = document.querySelector(".js-actions");
const output = document.querySelector(".gallery-section__card");

action.addEventListener("click", selectFilter);

// This is where delegation «magic» happens
function selectFilter(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedFilter = event.target.dataset.classList;
  output.style.classList = selectedFilter;
}


// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [document.querySelectorAll('.gallery-section__card')];
  for (let i = 0; i < items.length - 1; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  action.append(...items);
}
console.log(items.length)

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
} */
