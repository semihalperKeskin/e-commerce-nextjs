
function Fetch(productArr) {

  return fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => productArr(res))
}

export default Fetch