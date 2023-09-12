const priceInfo = document
  .querySelector('.wsc-center-section-price')
  .innerText.split('R$');
const buttonCartBuy = document.querySelector('.wsc-cart-button');

if (priceInfo.length == 2) {
  buttonCartBuy.innerHTML += ' - R$' + priceInfo[1];
} else if (priceInfo.length == 3) {
  buttonCartBuy.innerHTML +=
    ' - <span style="text-decoration: line-through;">R$' +
    priceInfo[1] +
    '</span> R$' +
    priceInfo[2];
}

try {
  const priceInfo = document
    .querySelector('.wsc-center-section-price')
    .innerText.split('R$');
  const buttonCartBuy = document.querySelector('.wsc-cart-button');

  if (priceInfo.length == 2) {
    buttonCartBuy.innerHTML += ' - R$' + priceInfo[1];
  } else if (priceInfo.length == 3) {
    buttonCartBuy.innerHTML +=
      ' - <span style="text-decoration: line-through;">R$' +
      priceInfo[1] +
      '</span> R$' +
      priceInfo[2];
  }
} catch (error) {}
