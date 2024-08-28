const names = document.getElementById("names");

const clickToShow = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/99")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      names.innerHTML += `<li>${json.title}</li>`;
    });
};


/* TODO:
    1. Onclick in inside the HTML
    2. Calling data by id 
    ========Should know========= 
    1. When call all the data. Than response will be data set / array []
    2. When call the data by id. Than show the data inside the object 
*/