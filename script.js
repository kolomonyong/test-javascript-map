const products = [
    { name: 'Sepatu Sneakers', price: 500000, category: 'Fashion' },
    { name: 'Smartphone', price: 3000000, category: 'Elektronik' },
    { name: 'Buku Novel', price: 75000, category: 'Buku' },
    { name: 'Kacamata', price: 135000, category: 'Fashion'}

];

const productElements = products.map((product) => `
  <div class="product">
    <h3>${product.name}</h3>
    <p>Harga: Rp ${product.price.toLocaleString()}</p>
    <p>Kategori: ${product.category}</p>
  </div>
`);

const productListContainer = document.getElementById('product-list');
productListContainer.innerHTML = productElements.join('');
