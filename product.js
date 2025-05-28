document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch('products.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load product data.');
      return response.json();
    })
    .then(products => {
      if (!id || !products[id]) {
        document.getElementById('productDetails').innerHTML = `<p style="color:#ff4747; font-weight:700; text-align:center;">Product not found. Please check the link.</p>`;
        document.title = "ARZA Shop | Product Not Found";
        return;
      }

      const product = products[id];
      document.title = `ARZA Shop | ${product.name}`;

      const html = `
        <div class="product-header">
          <h1>${product.name}</h1>
          <p class="product-desc">${product.desc}</p>
        </div>
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-specs">
          <ul>
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
        </div>
        <div class="product-price">
          <strong>Starting at $${product.basePrice.toLocaleString()}</strong>
        </div>
      `;

      document.getElementById('productDetails').innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('productDetails').innerHTML = `<p style="color:#ff4747; font-weight:700; text-align:center;">Error loading product data. Try again later.</p>`;
    });
});
