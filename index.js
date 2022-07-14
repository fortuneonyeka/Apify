const ul = document.getElementById("products")
const productList = document.createDocumentFragment();
const url = 'https://api.ecommerce.com/products';


fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let products = data.sort((minPrice,maxPrice)=>parseInt(minPrice.price) < parseInt(maxPrice.price) ? -1: 1).slice(0,900);

      products.map((product)=>{
        let li = document.createElement('li');
        let productName = document.createElement('h2');
        let productCount = document.createElement('p');
        let total = document.createElement('p');

        productName.textContent = `${product.products.name}`
        productCount.textContent = `${product.count}`
        total.textContent = `${product.total}`

        li.appendChild(productName);
        li.appendChild(productCount);
        li.appendChild(total);
        list.appendChild(li);
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    ul.appendChild(list);
