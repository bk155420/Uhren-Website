function openModal() {
  const modal = document.getElementById('manage-products-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('manage-products-modal');
  modal.style.display = 'none';
}

const manageProductsBtn = document.getElementById('manage-products-btn');
manageProductsBtn.addEventListener('click', openModal);

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);


const addProductForm = document.getElementById('add-product-form');
addProductForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const productImage = document.getElementById('product-image').files[0];
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;

  const productCard = document.createElement('div');
  productCard.classList.add('product');
  productCard.innerHTML = `
    <img src="${URL.createObjectURL(productImage)}" alt="${productName}">
    <h3>${productName}</h3>
    <p>$${productPrice}</p>
    <button class="add-to-cart" data-price="${productPrice}">Add to Cart</button>
  `;


  const addToCartBtn = productCard.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', () => {
    const price = parseInt(addToCartBtn.getAttribute('data-price'));

  });

  const productsSection = document.querySelector('.products');
  productsSection.appendChild(productCard);

  closeModal();
});
