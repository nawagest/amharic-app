// https://amharicteacher.com/hahu
// https://s3.amazonaws.com/i.litcdn.com/dict/sounds/mp3/${letterSound}.mp3
// console.log(fidel.map(letter => {
//   return { l: letter, translation: '' }
// }));
// https://commonlyusedwords.com/2000-most-common-amharic-words/

// const amh = words.filter((word, i) => i % 2 === 0);
// const eng = words.filter((word, i) => i % 2 !== 0);

// const word = eng.map((_, i) => { 
//   return { 
//     w: amh[i], 
//     translation: eng[i] 
//   } 
// });
// console.log(word);

// gen will now take a parameter to identify whether or not it is a word or letter

const body = document.querySelector('body');
const word = document.querySelector('.w');
const letter = document.querySelector('.l');
const answer = document.querySelector('.a');
const help = document.querySelector('.help');
const input = document.querySelector('.i');
const options = document.querySelector('.toggle');
const menu = document.querySelector('.options');
const practice = document.querySelector('.practice');
const tableContainerL = document.querySelector('.table-of-fidel');
const tableContainerW = document.querySelector('.table-of-words');
const tableItems = document.querySelector('.table-items');
const fidelBtn = document.querySelector('.fidel');
const wordsBtn = document.querySelector('.words');
const tableL = document.querySelector('.insertL');
const tableW = document.querySelector('.insertW');
const items = document.querySelectorAll('.items');
const icons = document.querySelectorAll('i');

let l;
let w;
let sound;
let i = 0;

let wol = 'l';

if(localStorage.getItem('darkMode') === 'true') {  
  body.classList.add('dark-mode');
  
  items[3].children[0].classList.remove('fa-moon');
  items[3].children[0].classList.add('fa-sun');
  items[3].children[0].classList.add('fa-spin');
} else {
  body.classList.remove('dark-mode');
  
  items[3].children[0].classList.remove('fa-sun');
  items[3].children[0].classList.remove('fa-spin');
  items[3].children[0].classList.add('fa-moon');
}

function timeout(func, sec) {
  return new Promise(resolve => {
    resolve(setTimeout(func, sec * 1000))
  });
}

async function gen() {
  if(items[1].dataset.randomize === 'false' || fidel[i-fidel.length] === 266 || wol === 'w') {
    i = 0
  }
  
  answer.classList.add('hide');
  input.value = '';
  input.style.borderLeft = '#e3e3e3 3px solid';
  l = (items[1].dataset.randomize === 'false') ? fidel[Math.round(Math.random() * fidel.length)] : fidel[i];
  w = words[Math.round(Math.random() * words.length)];

  if(items[1].dataset.randomize === 'true') {
    i+=1;
  }
  
  sound = new Audio(`https://s3.amazonaws.com/i.litcdn.com/dict/sounds/mp3/${l.translation}.mp3`);

  sound.muted = (items[0].dataset.muted === 'false') ? false : true;

  if(wol === 'w') {
    answer.textContent = w.translation;
    word.textContent = w.w;
    sound.muted = true;
  } else {
    answer.textContent = l.translation;
    letter.textContent = l.l;
  }
}
gen()

options.addEventListener('click', (e) => {
  menu.classList.toggle('t');
});

help.addEventListener('click', () => {
  answer.classList.toggle('hide');
});

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const clicked = e.target.textContent.toLowerCase();
    switch(clicked) {
      case 'sound':
        items[0].dataset.muted = (items[0].dataset.muted === 'true') ? 'false' : 'true';
        if(items[0].dataset.muted === 'true') {
          items[0].children[0].classList.remove('fa-volume-high');
          items[0].children[0].classList.add('fa-volume-xmark');
        } else {
          items[0].children[0].classList.remove('fa-volume-xmark');
          items[0].children[0].classList.add('fa-volume-high');
        }
        break;
      case 'randomize':
        items[1].dataset.randomize = (items[1].dataset.randomize === 'true') ? 'false' : 'true';
        items[1].children[0].classList.toggle('fa-beat');
        gen();
        break;
      case 'tables':
        tableItems.classList.toggle('hide');
        items[2].children[0].classList.toggle('fa-caret-up');
        items[2].children[0].classList.toggle('fa-caret-down');
        break;
      case 'dark mode':
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'true');
          
          items[3].children[0].classList.remove('fa-moon');
          items[3].children[0].classList.add('fa-sun');
          items[3].children[0].classList.add('fa-spin');
        } else {
          localStorage.setItem('darkMode', 'false');
    
          items[3].children[0].classList.remove('fa-sun');
          items[3].children[0].classList.remove('fa-spin');
          items[3].children[0].classList.add('fa-moon');
        }
        break;
      case 'words':
        wol = (wol === 'l') ? 'w' : 'l';
        letter.classList.toggle('hide');
        word.classList.toggle('hide');
        items[4].children[0].classList.toggle('fa-beat');
        gen();
    }
  });
});

let toggledTableF, toggledTableW;

fidelBtn.addEventListener('click', () => {
  if(toggledTableW) {
    toggledTableW = false;
    toggledTableF = true;
    tableContainerW.classList.toggle('hide');
    tableContainerL.classList.toggle('hide');
  } else {
    toggledTableF = true;
    practice.classList.toggle('hide');
    tableContainerL.classList.toggle('hide')
  };
});

wordsBtn.addEventListener('click', () => {
  if(toggledTableF) {
    toggledTableF = false;
    toggledTableW = true;
    tableContainerL.classList.toggle('hide');
    tableContainerW.classList.toggle('hide');
  } else {
    toggledTableW = true;
    practice.classList.toggle('hide');
    tableContainerW.classList.toggle('hide')
  };
});

const mappedItemsL = fidel.map((item) => {
  return `
    <tr>
      <td>${item.l}</td>
      <td>${item.translation}</td>
    </tr>
  `
});

const mappedItemsW = words.map((item) => {
  return `
    <tr>
      <td>${item.w}</td>
      <td>${item.translation}</td>
    </tr>
  `
});

tableL.insertAdjacentHTML('afterend', mappedItemsL.join(''));
tableW.insertAdjacentHTML('afterend', mappedItemsW.join(''));

let translation;

input.addEventListener('change', async (e) => {
  const { value } = e.target;

  if(wol === 'w') {
    translation = w.translation;
  } else {
    translation = l.translation;
  }
  
  let style = value.toLowerCase() === translation ? 'green 3px solid' : 'red 3px solid';

  input.style.borderLeft = style;
  value.toLowerCase() === translation && await sound.play().catch(err => err);
  await timeout(() => {
    value.toLowerCase() === translation && gen()
  }, 2)
});