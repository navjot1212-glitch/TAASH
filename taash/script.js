const sectionsContainer = document.getElementById('sections');

const suits = [
  { name: 'Hearts', symbol: '♥', class: 'red' },
  { name: 'Spades', symbol: '♠', class: 'black-suit' },
  { name: 'Clubs', symbol: '♣', class: 'black-suit' },
  { name: 'Diamonds', symbol: '♦', class: 'red' }
];

const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

suits.forEach(suit => {
  const section = document.createElement('div');
  section.className = 'section';

  section.innerHTML = `<div class="section-title">${suit.symbol} ${suit.name}</div>`;
  const grid = document.createElement('div');
  grid.className = 'card-grid';

  ranks.forEach(rank => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.state = 0;

    card.innerHTML = `
      <div class="rank ${suit.class}">${rank}</div>
      <div class="center ${suit.class}">${suit.symbol}</div>
    `;

    card.addEventListener('click', () => {
      let state = Number(card.dataset.state);
      state = (state + 1) % 3;
      card.dataset.state = state;

      card.classList.remove('green', 'black');

      if (state === 1) card.classList.add('green');
      if (state === 2) card.classList.add('black');
    });

    grid.appendChild(card);
  });

  section.appendChild(grid);
  sectionsContainer.appendChild(section);
});
