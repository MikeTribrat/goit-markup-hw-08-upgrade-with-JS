const allBtn = document.querySelector('[data-action="js-btn-all"]');
const webBtn = document.querySelector('[data-action="js-btn-web"]');
const appBtn = document.querySelector('[data-action="js-btn-app"]');
const designBtn = document.querySelector('[data-action="js-btn-design"]');
const marketingBtn = document.querySelector('[data-action="js-btn-marketing"]');
//console.log(webBtn)
//const values = [document.querySelectorAll('.gallery-section__card')]
const div_list = document.querySelectorAll('.gallery-section__card'); // returns NodeList
//console.log(div_list)
const div_array = Array.prototype.slice.call(div_list); // преобразует NodeList в Array
//console.log(div_array)

//console.log(div_array.length)
const newArray = []

webBtn.addEventListener('click', () => {
    /* for (let i = 0; i <= div_array.length - 1; i++) {
        let el = document.getElementsByClassName('js-design');
        console.log(el)
    } */
    for (let i = 0; i <= div_array.length - 1; i++) {
        if (div_array[i].document.getElementById = 'webBtn') {
            console.log(div_array[i])
        }
    }
    
    //const choose = document.querySelectorAll('.js-web')
    //for (let i = 0; i <= div_array.length - 1; i++){
    //console.log(div_array[i])
    //console.log(div_array[i].classList)
    //if (div_array[i].includes('.js-web')) {
    //let removed = div_array.splice(i, 1);
    //newArray.push(div_array[i])
    //console.log(removed)
})
        //console.log(newArray)
    //}
    //console.log(div_array)
    //console.log(show)
//})

allBtn.addEventListener('click', () => {
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
})

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
