const users = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      users.innerHTML += `<li> ${element.name} / Email: ${element.email} </li> `;
    });

    console.log(data);
  });
