export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productsWidget: '#template-products-widget',
    contactWidget: '#template-contact-widget',
  },

  containerOf: {
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
    pages: '#pages',
  },

  nav: {
    links: '.main__nav a'
  },
};

export const classNames = {
  nav: '.active',
  pages: '.active',
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    contact: 'contact',
  },
};

export const templates = {
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  productsWidget: Handlebars.compile(document.querySelector(select.templateOf.productsWidget).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
};

export default settings;