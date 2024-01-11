const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');
let total = 0;
let itemCount = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = parseInt(button.getAttribute('data-price'));
    total += price;
    cartTotal.innerText = total;

    itemCount++;
    document.getElementById('cart-count').innerText = itemCount;

    const productTitle = button.parentElement.querySelector('h2').innerText;
    const productImage = button.parentElement.querySelector('img').src;
    const div = document.createElement('div');
    div.innerHTML = `
      <div>
        <img src="${productImage}" alt="${productTitle}">
        <span>${productTitle} - €${price}</span>
      </div>
      <button class="remove-from-cart">Remove</button>`;
    cartItemsContainer.appendChild(div);

    // Add remove functionality
    const removeButton = div.querySelector('.remove-from-cart');
    removeButton.addEventListener('click', () => {
      total -= price;
      cartTotal.innerText = total;

      itemCount--;
      document.getElementById('cart-count').innerText = itemCount;

      div.remove();
    });
  });
});

cartIcon.addEventListener('click', () => {
  cartOverlay.style.display = 'flex';
  cartOverlay.style.zIndex = '99999';
});

checkoutButton.addEventListener('click', () => {
  alert(`Total: €${total}\nThank you for shopping!`);
});

cartOverlay.addEventListener('click', (event) => {
  if (event.target === cartOverlay) {
    cartOverlay.style.display = 'none';
  }
});
