import { button, addAll, removeContent, div } from "./elements";
import menuInfo from "./menu.js";
import contactInfo from "./contact.js";
import mainContent from "./home.js";
import './styles.css';

const content = document.getElementById('content')


let buttonOne = button('Home')
let buttonTwo = button('Menu')
let buttonThree = button('Contact')
const buttons = div(buttonOne, buttonTwo, buttonThree);
content.appendChild(buttons)
content.appendChild(mainContent)
let domBtns = [buttonOne, buttonTwo, buttonThree];



domBtns.forEach( btn => {
    btn.addEventListener('click', ()=> {
        removeContent(content);
        if(btn.textContent == 'Home') {
            content.appendChild(mainContent)
        }
        else if(btn.textContent == 'Menu') {
            content.appendChild(menuInfo)
        }
        else {
            content.appendChild(contactInfo)
        }
    })
})










export default content;