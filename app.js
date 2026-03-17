// === GabGnam — Meal Plan Data & App Logic ===

const DAYS = [
  {
    name: 'Lunedì',
    short: 'LUN',
    note: null,
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Latte parzialmente scremato di vacca', qty: 'g 200' },
          { name: 'Choco kraves', qty: 'g 25' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🍓',
        items: [
          { name: 'Fragole', qty: 'g 200' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        free: true,
        freeNote: null
      },
      {
        type: 'Merenda',
        icon: '🥝',
        items: [
          { name: 'Kiwi', qty: 'g 180' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        recipe: 'Orata gratinata al forno',
        items: [
          { name: 'Orata o spigola o merluzzo', qty: 'g 200' },
          { name: 'Pangrattato', qty: 'q.b.' },
          { name: 'Lattuga (o zucchine 200 g)', qty: 'g 100' },
          { name: 'Pane integrale ai cereali', qty: 'g 50' },
          { name: 'Olio extra vergine di oliva', qty: '6 cucchiaini' }
        ],
        prep: 'Lasciare marinare il pesce in succo di limone, cospargere con pangrattato (prezzemolo, aglio e pepe a scelta), ungere la teglia con 2 cucchiaini di olio e altri 2 sul pesce. In forno preriscaldato a 180° per circa 25 minuti.'
      }
    ]
  },
  {
    name: 'Martedì',
    short: 'MAR',
    note: 'Basket ore 16:30',
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Pane integrale ai cereali', qty: 'g 50' },
          { name: 'Miele di acacia', qty: '2 cucchiaini' },
          { name: 'Noci secche', qty: 'g 10' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🥜',
        items: [
          { name: 'Mandorle', qty: 'g 20' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        free: true,
        freeNote: 'Primo piatto, secondo e contorno, frutta, evitare pane'
      },
      {
        type: 'Merenda',
        icon: '🏀',
        subNote: 'Subito dopo fine allenamento',
        items: [
          { name: 'Pane integrale ai cereali', qty: 'g 50' },
          { name: 'Nutella', qty: 'g 20' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        items: [
          { name: 'Hamburger di manzo', qty: 'g 200' },
          { name: 'Peperoni', qty: 'g 200' },
          { name: 'Olio extra vergine di oliva', qty: '4 cucchiaini' }
        ]
      }
    ]
  },
  {
    name: 'Mercoledì',
    short: 'MER',
    note: null,
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Spremuta di arancia', qty: 'g 300' },
          { name: 'Plumcake (n°1)', qty: 'g 30' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🥛',
        items: [
          { name: 'Yogurt greco alla frutta (150 g)', qty: '1 vasetto' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        free: true,
        freeNote: 'Se possibile secondo, contorno e frutta o pane'
      },
      {
        type: 'Merenda',
        icon: '🍓',
        items: [
          { name: 'Fragole', qty: 'g 250' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        recipe: 'Orecchiette con cime di rapa e parmigiano',
        items: [
          { name: 'Pasta di semola', qty: 'g 60' },
          { name: 'Cime di rapa (anche cavolfiori)', qty: '1 porzione' },
          { name: 'Parmigiano grattugiato', qty: 'circa 10 g' },
          { name: 'Olio extra vergine di oliva', qty: '3 cucchiaini' }
        ]
      }
    ]
  },
  {
    name: 'Giovedì',
    short: 'GIO',
    note: 'Basket ore 16:30',
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Pane integrale ai cereali tostato', qty: 'g 50' },
          { name: 'Miele di acacia', qty: '2 cucchiaini' },
          { name: 'Noci secche', qty: 'g 10' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🥜',
        items: [
          { name: 'Mandorle', qty: 'g 20' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        free: true,
        freeNote: 'Come martedì'
      },
      {
        type: 'Merenda',
        icon: '🏀',
        subNote: 'Stesso timing',
        items: [
          { name: 'Pane integrale ai cereali', qty: 'g 50' },
          { name: 'Nutella', qty: 'g 20' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        recipe: 'Cotoletta di pollo al forno',
        items: [
          { name: 'Petto di pollo', qty: 'g 150' },
          { name: 'Pangrattato', qty: 'q.b.' },
          { name: 'Uovo di gallina', qty: 'n° 1' },
          { name: 'Lattuga', qty: 'g 100' },
          { name: 'Olio extra vergine di oliva', qty: '4 cucchiaini' }
        ]
      }
    ]
  },
  {
    name: 'Venerdì',
    short: 'VEN',
    note: 'Basket ore 16:30',
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Tè verde', qty: '1 tazza' },
          { name: 'Gallette di riso al fondente (circa 2)', qty: 'g 30' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🥪',
        recipe: 'Toast cotto e philadelphia',
        items: [
          { name: 'Pancarrè integrale (circa 40 g)', qty: '2 fette' },
          { name: 'Prosciutto cotto', qty: 'g 30' },
          { name: 'Philadelphia', qty: 'g 25' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        free: true,
        freeNote: 'Secondo, contorno, frutta e pane, se possibile'
      },
      {
        type: 'Merenda',
        icon: '🏀',
        subNote: 'Stesso timing',
        items: [
          { name: 'Banane', qty: 'g 150' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        recipe: 'Riso, zucca, parmigiano e speck',
        items: [
          { name: 'Riso', qty: 'g 60' },
          { name: 'Zucca', qty: 'g 100' },
          { name: 'Parmigiano grattugiato', qty: 'g 10' },
          { name: 'Speck', qty: 'g 50' },
          { name: 'Olio extra vergine di oliva', qty: '3 cucchiaini' }
        ]
      },
      {
        type: 'Cena Alternativa',
        icon: '🥑',
        recipe: 'Avocado toast',
        items: [
          { name: 'Uovo di gallina o prosciutto crudo', qty: 'n° 1 o g 50' },
          { name: 'Avocado', qty: 'g 50' },
          { name: 'Salsa tzatziki', qty: 'q.b.' },
          { name: 'Pane integrale ai cereali', qty: 'g 100' }
        ],
        prep: 'Tostare il pane, spalmare l\'avocado schiacciato, aggiungere l\'uovo (in camicia o al tegamino) oppure il prosciutto crudo, e completare con salsa tzatziki.'
      }
    ]
  },
  {
    name: 'Sabato',
    short: 'SAB',
    note: null,
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Latte parzialmente scremato di vacca', qty: 'g 200' },
          { name: 'Choco kraves', qty: 'g 25' }
        ]
      },
      {
        type: 'Metà mattina',
        icon: '🥝',
        items: [
          { name: 'Kiwi', qty: 'g 90' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        items: [
          { name: 'Salmone affumicato', qty: 'g 100' },
          { name: 'Insalata mista', qty: 'g 200' },
          { name: 'Olio extra vergine di oliva', qty: '3 cucchiaini' }
        ]
      },
      {
        type: 'Merenda',
        icon: '🥕',
        items: [
          { name: 'Carote', qty: 'g 150' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        items: [
          { name: 'Pizza Margherita al piatto', qty: '' }
        ]
      }
    ]
  },
  {
    name: 'Domenica',
    short: 'DOM',
    note: null,
    meals: [
      {
        type: 'Colazione',
        icon: '☀️',
        items: [
          { name: 'Spremuta di arancia', qty: 'g 200' }
        ]
      },
      {
        type: 'Pranzo',
        icon: '🍽️',
        recipe: 'Polpette al sugo',
        items: [
          { name: 'Carne mista di vitello e maiale', qty: 'g 250' },
          { name: 'Uovo di gallina', qty: 'n° 1' },
          { name: 'Parmigiano grattugiato', qty: 'g 20' },
          { name: 'Pane bianco (mollica)', qty: 'g 100' },
          { name: 'Salsa di pomodoro', qty: 'q.b.' },
          { name: 'Pane integrale ai cereali', qty: 'g 50' },
          { name: 'Olio extra vergine di oliva', qty: '4 cucchiaini' }
        ],
        prep: 'Si possono aggiungere pinoli e uva passa alla salsa di pomodoro.'
      },
      {
        type: 'Merenda',
        icon: '🍓',
        items: [
          { name: 'Fragole', qty: 'g 250' }
        ]
      },
      {
        type: 'Cena',
        icon: '🌙',
        recipe: 'Toast',
        items: [
          { name: 'Pancarrè integrale (40 g)', qty: '2 fette' },
          { name: 'Prosciutto crudo', qty: 'g 30' },
          { name: 'Bufala o philadelphia o trenta', qty: 'g 30' }
        ]
      }
    ]
  }
];

const NUTRI_INFO = {
  macro: {
    headers: ['', 'Protidi', 'Glucidi', 'Lipidi', 'kcal'],
    rows: [
      ['Apporti stabiliti', 'g 53', 'g 193', 'g 47', '1.400'],
      ['Sabato', 'g 56', 'g 207', 'g 43', '1.441'],
      ['Domenica', 'g 126', 'g 132', 'g 59', '1.567']
    ]
  },
  sabato: [
    ['Fibra', '20,19 g'], ['Colesterolo', '94,80 mg'],
    ['ACGS', '10,89 g'], ['ACGPI', '5,33 g'],
    ['Sodio', '4.772,20 mg'], ['Calcio', '402,70 mg'],
    ['Ferro', '5,57 mg'], ['Fosforo', '792,00 mg'],
    ['Potassio', '2.815,90 mg'], ['Magnesio', '175,80 mg'],
    ['Zinco', '5,82 mg'], ['Rame', '0,97 mg'],
    ['Iodio', '71,28 µg'], ['Vit. A', '448,12 µg RE'],
    ['Vit. B1', '1,15 mg'], ['Vit. B2', '1,48 mg'],
    ['Vit. C', '219,90 mg'], ['Niacina', '10,46 mg']
  ],
  domenica: [
    ['Fibra', '15,20 g'], ['Colesterolo', '710,50 mg'],
    ['ACGS', '21,27 g'], ['ACGPI', '6,60 g'],
    ['Sodio', '2.196,05 mg'], ['Calcio', '801,70 mg'],
    ['Ferro', '12,84 mg'], ['Fosforo', '1.627,50 mg'],
    ['Potassio', '3.004,15 mg'], ['Magnesio', '268,35 mg'],
    ['Zinco', '11,85 mg'], ['Rame', '1,24 mg'],
    ['Iodio', '63,31 µg'], ['Vit. A', '1.431,76 µg RE'],
    ['Vit. B1', '1,47 mg'], ['Vit. B2', '1,92 mg'],
    ['Vit. C', '261,70 mg'], ['Niacina', '31,68 mg']
  ]
};

// === App State ===
let currentDay = new Date().getDay(); // 0=Sun
// Map JS day (0=Sun) to our array index (0=Mon)
const dayMap = [6, 0, 1, 2, 3, 4, 5];
let selectedDay = dayMap[currentDay];

// === Render ===
function renderTabs() {
  const nav = document.getElementById('day-tabs');
  nav.innerHTML = DAYS.map((d, i) =>
    `<button class="tab${i === selectedDay ? ' active' : ''}" role="tab" data-day="${i}">${d.short}</button>`
  ).join('');

  nav.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDay = parseInt(btn.dataset.day);
      renderTabs();
      renderDay();
    });
  });

  // Scroll active tab into view
  const active = nav.querySelector('.tab.active');
  if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function renderDay() {
  const day = DAYS[selectedDay];
  const main = document.getElementById('day-content');
  let html = '';

  if (day.note) {
    html += `<div class="day-note">🏀 ${day.note}</div>`;
  }

  day.meals.forEach(meal => {
    html += '<div class="meal-card">';
    html += `<div class="meal-header">
      <div class="meal-icon">${meal.icon}</div>
      <div>
        <div class="meal-title">${meal.type}</div>
        ${meal.recipe ? `<div class="meal-recipe">${meal.recipe}</div>` : ''}
        ${meal.subNote ? `<div class="meal-recipe">${meal.subNote}</div>` : ''}
      </div>
    </div>`;

    if (meal.free) {
      html += `<div class="free-meal">Pasto libero${meal.freeNote ? `<div class="free-meal-note">${meal.freeNote}</div>` : ''}</div>`;
    } else if (meal.items) {
      html += '<div class="meal-body"><ul>';
      meal.items.forEach(item => {
        html += `<li><span class="item-name">${item.name}</span>${item.qty ? `<span class="item-qty">${item.qty}</span>` : ''}</li>`;
      });
      html += '</ul></div>';
    }

    if (meal.prep) {
      html += `<div class="prep-note"><span class="prep-label">Preparazione</span>${meal.prep}</div>`;
    }

    html += '</div>';
  });

  main.innerHTML = html;
}

function renderNutriModal() {
  const { macro, sabato, domenica } = NUTRI_INFO;
  let html = '<h2>Profilo Nutrizionale</h2>';

  // Macro table
  html += '<table class="nutri-table"><thead><tr>';
  macro.headers.forEach(h => { html += `<th>${h}</th>`; });
  html += '</tr></thead><tbody>';
  macro.rows.forEach(row => {
    html += '<tr>';
    row.forEach((cell, i) => { html += `<td${i === 0 ? ' style="font-weight:600"' : ''}>${cell}</td>`; });
    html += '</tr>';
  });
  html += '</tbody></table>';

  // Micro tables
  const renderMicro = (title, data) => {
    html += `<h3>${title}</h3><table class="nutri-table"><tbody>`;
    data.forEach(([name, val]) => {
      html += `<tr><td>${name}</td><td style="text-align:right;font-weight:600">${val}</td></tr>`;
    });
    html += '</tbody></table>';
  };
  renderMicro('Micronutrienti — Sabato', sabato);
  renderMicro('Micronutrienti — Domenica', domenica);

  document.getElementById('modal-body').innerHTML = html;
}

// === Modal ===
function openModal() {
  renderNutriModal();
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// === Shopping List ===
const SHOP_CAT_ORDER = [
  { key: 'Frutta', icon: '🍎' },
  { key: 'Verdura', icon: '🥬' },
  { key: 'Carne e Pesce', icon: '🥩' },
  { key: 'Latticini e Uova', icon: '🥛' },
  { key: 'Pane e Cereali', icon: '🍞' },
  { key: 'Condimenti', icon: '🫒' },
  { key: 'Frutta secca', icon: '🥜' },
  { key: 'Bevande', icon: '☕' },
  { key: 'Altro', icon: '🛒' }
];

function categorize(name) {
  const n = name.toLowerCase();
  if (/mandaranci|clementine|kiwi|fragole|banane/.test(n)) return 'Frutta';
  if (/lattuga|zucchine|friarielli|cime di rapa|cavolfiori|zucca|insalata|carote|peperoni|avocado/.test(n)) return 'Verdura';
  if (/orata|spigola|merluzzo|hamburger|manzo|pollo|petto|salmone|carne|vitello|maiale|prosciutto|speck/.test(n)) return 'Carne e Pesce';
  if (/latte|yogurt|parmigiano|philadelphia|scamorza|provola|bufala|trenta|uovo/.test(n)) return 'Latticini e Uova';
  if (/pane|fiocchi|corn flakes|choco kraves|pasta|riso|pancarrè|gallette|plumcake|pangrattato|mollica/.test(n)) return 'Pane e Cereali';
  if (/olio|miele|nutella|salsa|pomodoro|tzatziki/.test(n)) return 'Condimenti';
  if (/noci|mandorle/.test(n)) return 'Frutta secca';
  if (/tè|spremuta/.test(n)) return 'Bevande';
  return 'Altro';
}

function buildShoppingList() {
  const itemSet = new Set();
  DAYS.forEach(day => {
    day.meals.forEach(meal => {
      if (meal.items) {
        meal.items.forEach(item => itemSet.add(item.name));
      }
    });
  });

  const categories = {};
  itemSet.forEach(name => {
    const cat = categorize(name);
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(name);
  });

  Object.values(categories).forEach(items => items.sort((a, b) => a.localeCompare(b, 'it')));
  return categories;
}

function getChecked() {
  return JSON.parse(localStorage.getItem('gabgnam-checked') || '[]');
}

function saveChecked(arr) {
  localStorage.setItem('gabgnam-checked', JSON.stringify(arr));
}

function updateCounter() {
  const counter = document.getElementById('shop-counter');
  if (!counter) return;
  const checked = getChecked();
  const total = document.querySelectorAll('.shop-item').length;
  const done = checked.length;
  counter.textContent = `${done}/${total}`;
}

function renderShoppingList() {
  const categories = buildShoppingList();
  const checked = getChecked();

  let html = '<div class="shop-header"><h2>Lista della Spesa</h2>';
  html += '<span class="shop-counter" id="shop-counter"></span></div>';
  html += '<button class="shop-clear-btn" id="shop-clear">Deseleziona tutto</button>';

  SHOP_CAT_ORDER.forEach(({ key, icon }) => {
    if (!categories[key]) return;
    html += '<div class="shop-cat">';
    html += `<div class="shop-cat-title">${icon} ${key}</div>`;
    categories[key].forEach(name => {
      const isChecked = checked.includes(name);
      html += `<label class="shop-item${isChecked ? ' checked' : ''}">
        <input type="checkbox" ${isChecked ? 'checked' : ''} data-name="${name.replace(/"/g, '&quot;')}">
        <span class="shop-check"></span>
        <span class="shop-label">${name}</span>
      </label>`;
    });
    html += '</div>';
  });

  document.getElementById('modal-body').innerHTML = html;
  updateCounter();

  // Checkbox events
  document.querySelectorAll('.shop-item input').forEach(cb => {
    cb.addEventListener('change', () => {
      const name = cb.dataset.name;
      let arr = getChecked();
      if (cb.checked) {
        arr.push(name);
        cb.closest('.shop-item').classList.add('checked');
      } else {
        arr = arr.filter(n => n !== name);
        cb.closest('.shop-item').classList.remove('checked');
      }
      saveChecked(arr);
      updateCounter();
    });
  });

  // Clear button
  document.getElementById('shop-clear').addEventListener('click', () => {
    saveChecked([]);
    document.querySelectorAll('.shop-item input').forEach(cb => {
      cb.checked = false;
      cb.closest('.shop-item').classList.remove('checked');
    });
    updateCounter();
  });
}

function openShoppingList() {
  renderShoppingList();
  document.getElementById('modal-overlay').classList.remove('hidden');
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderDay();

  document.getElementById('btn-info').addEventListener('click', openModal);
  document.getElementById('btn-shop').addEventListener('click', openShoppingList);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) closeModal();
  });
  document.querySelector('.modal-close').addEventListener('click', closeModal);

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
});
