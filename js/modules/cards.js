function renderCards(pokemonList) {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <span class="type">${pokemon.type}</span>
        `;
        
        cardGrid.appendChild(card);
    });
}