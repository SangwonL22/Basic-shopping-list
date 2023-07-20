const items = document.querySelector('.items');
const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const darkModeBtn = document.querySelector('.header__darkMode');
const section = document.querySelector('.section');
const header = document.querySelector('.header');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  onAdd();
});

darkModeBtn.addEventListener('click', () => {
  section.classList.toggle('dark');
  header.classList.toggle('dark');
});

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
     <div class="item">
         <span class="item__name">${text}</span>
            <button class="item__delete">
            <i class="fa-solid fa-square-minus" data-id=${id}></i>
           </button>
         </div>
     <div class="item__divider"></div>
  `;
  return itemRow;
}

items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id ="${id}"]`);
    toBeDeleted.remove();
  }
});
