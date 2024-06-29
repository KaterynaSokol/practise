import './styles/normalize.css';
import './styles/index.css';

import { getAllProducts } from './requests/products';
import { productsTemplate } from './services/markupService';

const gallery = document.querySelector('#allProducts');

const allProducts = await getAllProducts();

console.log(allProducts);

gallery.innerHTML = productsTemplate(allProducts.products);
