document.addEventListener('DOMContentLoaded', () => {
    loadPokemonCards();

  
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
});

function loadPokemonCards() {
    // use sample data for now to avoid fetch requests issues
    const samplePokemon = [
        {
            name: "Pikachu",
            type: "Electric",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        {
            name: "Charmander",
            type: "Fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            name: "Bulbasaur",
            type: "Grass",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            name: "Squirtle",
            type: "Water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            name: "Jigglypuff",
            type: "Fairy",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
        },
        {
            name: "Mewtwo",
            type: "Psychic",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        }
    ];

    renderCards(samplePokemon);
}