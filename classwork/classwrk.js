let box = document.getElementById("box");
let image = document.getElementById("img");
let element = document.getElementById("card");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    element.innerHTML = data
      .map((item) => {
        return `<p id="box">${item.title}</p>
      <img src=${item.image} alt="tolanstore" id="img">`;
      })
      .join("");
  });

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => {
//     element.innerHTML = `<p id="box">${json.title}</p>
//         <img src=${json.image} alt="tolanstore" id="img">`;
//     // box.innerHTML = json.title;

//     // image.setAttribute("src", json.image);
//     // console.log(json);
//   });
