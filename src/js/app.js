import {select, classNames} from './settings.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import settings from './settings.js';

const app = {
  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId) {
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(
        classNames.pages.active,
        page.id == pageId
      );
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initHome(){
    const thisApp = this;

    const homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeContainer);
  },

  initProducts(){
    const thisApp = this;

    const productsContainer = document.querySelector(select.containerOf.products);
    thisApp.Products = new Products(productsContainer);
  },

  initContact(){
    const thisApp = this;

    const contactContainer = document.querySelector(select.containerOf.contacts);
    thisApp.Contact = new Contact(contactContainer);
  },

  // initMenu: function(){
  //   const thisApp = this;
  //   //console.log('thisApp.data', thisApp.data);

  //   for(let productData in thisApp.data.products){
  //     new Product(thisApp.data.products[productData].id,thisApp.data.products[productData]);
  //   }
  //   //const testProduct = new Product();
  //   //console.log('testProduct', testProduct);
  // },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){

        thisApp.data.products = parsedResponse;
        // thisApp.initMenu();
      });
  },

  init: function(){
    const thisApp = this;
    
    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();

export default app;
