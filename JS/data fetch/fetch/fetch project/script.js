const cardGrid = document.getElementById("cardGrid");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((users) => {
    users.slice(1, 10).forEach((user) => {
      // Data destacture
      const { name, email, phone, username, address } = user;
      cardGrid.innerHTML += `<div class="col-6 col-md-4 mb-4">
      <div class="card" style="width: 18rem;">
  <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>   
    <ul>
    <li> <b> Email: </b> ${email}</li>
    <li><b> Phone: </b> ${phone}</li>
    <li><b> Username: </b> ${username}</li>
    <li><b> City: </b> ${address.city}</li>
    </ul>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>`;
    });
  });
