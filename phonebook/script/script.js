import {control} from './modules/control.js';
import {render} from './modules/render.js';
import {getStorage, setStorage, removeStorage } from './modules/serviceStorage.js';
 
 
// import modulCreate from './modules/control.js';
// import modulRender from './modules/control.js';
// import modulService from './modules/control.js';

// import renderPhoneBook from './modules/data.js';
// const data = [
// 	{
// 		name: 'Иван',
// 		surname: 'Петров',
// 		phone: '+79514545454',
// 	},
// 	{
// 		name: 'Игорь',
// 		surname: 'Семёнов',
// 		phone: '+79999999999',
// 	},
// 	{
// 		name: 'Семён',
// 		surname: 'Иванов',
// 		phone: '+79800252525',
// 	},
// 	{
// 		name: 'Мария',
// 		surname: 'Попова',
// 		phone: '+79876543210',
// 	},
// ];

const init = (selectorApp, title) => {
const app = document.querySelector(selectorApp);

const {list, logo, btnAdd, formOverlay, form, btnDel} = render.renderPhoneBook(
	app,
	title,
);

const phoneDataFromLS = getStorage('phoneData');
const allRow = render.renderContacts(list, phoneDataFromLS);

const {closeModal} = control.modalControl(btnAdd, formOverlay);
control.hoverRow(allRow, logo);

control.deleteControl(btnDel, list);
control.formControl(form, list, closeModal);
};
 

document.addEventListener("DOMContentLoaded", () => {
	init("#app", "Алексей");
});
