import {templates} from '/js/settings.js';

class Contacts {
  constructor(element){
    const thisContacts = this;

    thisContacts.render(element);
  }

  render(element){
    const thisContacts = this;
    
    const generatedHTML = templates.contactsWidget();

    thisContacts.dom = {};
    thisContacts.dom.wrapper = element;
    thisContacts.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contacts;