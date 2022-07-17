function x(x) {
  return document.getElementById(x);
}

document.getElementById("abutton").addEventListener("click", function () {
  let Name = x("adname").value;
  let Price = x("adprice").value;
  let Image = x("adimage").value;
  let Description = x("adescription").value;
  class addproduct {
    constructor(name, price, description, image) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
  Name = Name.toLowerCase();

  let product = new addproduct(Name, Price, Description, Image);
  console.log(product);
  let url = "http://localhost:3000/api/products";
  let data = JSON.stringify(product);
  fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("ubutton").addEventListener("click", function () {
  let Name = x("udname").value;
  let Price = x("udprice").value;
  let Image = x("udimage").value;
  let Description = x("uddescription").value;
  class updateproduct {
    constructor(name, price, description, image) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }

  let product = new updateproduct(Name, Price, Description, Image);
  console.log(product);
  let url = "http://localhost:3000/api/products";
  let data = JSON.stringify(product);
  fetch(url, {
    method: "PATCH",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("dbutton").addEventListener("click", function () {
  let Id = x("did").value;
  let url = `http://localhost:3000/api/products/${Id}`;

  fetch(url, {
    method: "DELETE",
  });
});
