
import {createElement} from './createElements.js';

const renderPhoneBook = (app, title) => {
  const header = createElement.createHeader();
  const logo = createElement.createLogo(title);
  const main = createElement.createMain();
  const buttonGroup = createElement.createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createElement.createTable();
  const {form, overlay} = createElement.createForm();
  const footer = createElement.createFooter();
  const copyright = createElement.createCopyright(title);
  footer.append(copyright);

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);
  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, data) => {
  const allRow = data.map(el => createElement.createRow(el));
  elem.append(...allRow);
  return allRow;
};

export const render = {
  renderPhoneBook,
  renderContacts,
};
