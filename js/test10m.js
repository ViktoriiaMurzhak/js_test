const BASE_URL = 'https://swapi.dev/api';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

const getData = (url, options = {}) => {
  return fetch(`${BASE_URL}/${url}`, options).then((response) => {
    console.dir(response);
    if (!response.ok) {
      throw new Error('no Data loaded!!!!!!');
    }
    return response.json();
  });
};

// getData('people/').then((data) => console.log(data));
getData('films/')
  .then((data) => console.log(data))
  .catch((err) => {
    alert(err);
  });
