import {templates} from '/js/settings.js';

class Products {
  constructor(element){
    const thisProducts = this;

    thisProducts.render(element);
  }

  render(element){
    const thisProducts = this;
    
    const generatedHTML = templates.productsWidget();

    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;
    thisProducts.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Products;