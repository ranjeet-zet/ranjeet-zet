function x(x) {
  return document.getElementById(x);
}
document.getElementById("sb").addEventListener("click", function () {
  let Name = x("adname").value;

  Name = Name.toLowerCase();

  let url = `http://127.0.0.1:3000/api/products/?name=${Name}`;

  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then((ele) => {
      console.log(ele);
      display(ele);
    });
});

function display(data) {
  let output = "";
  data.forEach(function (ele) {
    output += `
        <div class="col-md-4">
        <div class="card">
        <img src="${ele.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${ele.name}</h5>
        <p class="card-text">${ele.description}</p>
        <p class="card-text">${ele.price}</p>
        <a href="#" class="btn btn-primary">Order Now</a>
        </div>
        </div>
        </div>
        `;
  });
  document.getElementById("append").innerHTML = output;
}
