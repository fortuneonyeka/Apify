const ul = document.getElementById("products")
const productList = document.createDocumentFragment();
const url = 'https://api.ecommerce.com/products';




const fetchData = async () => {
  const response = await fetch("https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles")
  const data = await response.json()
  setVehicles(data.sort((v1,v2)=>parseInt(v1.price) < parseInt(v2.price) ? -1: 1))
}

fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let products = data.sort((mainPrice,maxPrice)=>parseInt(mainPrice.price) < parseInt(maxPrice.price) ? -1: 1);

      products.map((product)=>{
        let li = document.createElement('li');
        let productName = document.createElement('h2');
        let productCount = document.createElement('span');
        let total = document.createElement('span');

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
