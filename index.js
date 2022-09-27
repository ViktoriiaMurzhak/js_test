import './css/style.css';

function fetchCocktails() {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`).then((response) => {
    if (!response.ok) {
      throw new Error('no data loaded!');
    }
    return response.json();
  });
}

fetchCocktails();
console.log(fetchCocktails());
