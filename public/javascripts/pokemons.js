// wrap code in IIFE
(function initiatePoke() {
  // fetch pokemon list from `/api/pokemons`
  fetch('/api/pokemons')
    .then((res) => res.json())
    .then((pokemons) => {
      // remove the placeholder in #pokemon-list
      const pokemonList = document.querySelector('#pokemon-list');
      pokemonList.innerHTML = '';

      /* For each pokemon,
      1. create a li element with class  */
      pokemons.forEach((p) => {
        const item = document.createElement('i');
        item.className =
          'col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200';
        /*2. the li element should have the following inner HTML: */
        item.innerHTML = `<div class="flex-1 flex flex-col p-8">
        <img
          class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
          src="${p.thumbnail}"
          alt=""
        />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">
          ${p.name.english}
        </h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dd class="text-gray-500 text-sm line-clamp-3">${p.description}</dd>
        </dl>
      </div>`;
        /* 3. append the li element to #pokemon-list */
        pokemonList.appendChild(item);
      });
    });
})();
