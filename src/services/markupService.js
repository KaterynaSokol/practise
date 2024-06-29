export function productsTemplate(products) {
  return products
    .map(({ thumbnail, price, description, brand }) => {
      return `<li>
      <img src= ${thumbnail} />
      <ul>
        <li class="description">${description}</li>
        <li class="price">${price}</li>
        <li class="brand">${brand}</li>
      </ul>
    </li>`;
    })
    .join('');
}
