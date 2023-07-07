function filterPokemon() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var type = document.getElementById('type').value;

    var filterParams = {
        id: id,
        name: name,
        type: type
    };

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            var filteredPokemon = data.filter(pokemon =>
                (id === '' || pokemon.id.toString() === id) &&
                (name === '' || pokemon.name.toLowerCase().includes(name.toLowerCase())) &&
                (type === '' || pokemon.type.includes(type))
            );

            displayResults(filteredPokemon);
        })
        .catch(error => console.log(error));
}

function displayResults(pokemonList) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (pokemonList.length > 0) {
        pokemonList.forEach(pokemon => {
            var pokemonDiv = document.createElement('div');
            pokemonDiv.textContent = pokemon.name;
            resultsDiv.appendChild(pokemonDiv);
        });
    } else {
        var noResultsDiv = document.createElement('div');
        noResultsDiv.textContent = 'Aucun Pokémon ne correspond aux critères de filtrage.';
        resultsDiv.appendChild(noResultsDiv);
    }
}
