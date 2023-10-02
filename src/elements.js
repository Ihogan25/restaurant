



const button = (name) => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = name;
    return btn;
}


const title = (titleName) => {
    let h1 = document.createElement('h1');
    h1.classList.add('title')
    h1.textContent = titleName;
    return h1;

}

const subTitle = (titleName) => {
    let h2 = document.createElement('h2');
    h2.classList.add('subTitle')
    h2.textContent = titleName;
    return h2;
}


const card = (head, para) => {
    let div = document.createElement('div');
    div.classList.add('card')
    div.appendChild(head)
    div.appendChild(para);
    return div;
}



const p = (info) => {
    let p = document.createElement('p');
    p.textContent = info;
    return p
}


const div = (...elements) => {
    let div = document.createElement('div');
    div.classList.add('contaier')
    let elmns = [...elements];
    for(let i = 0; i < elmns.length; i++) {
        div.appendChild(elmns[i])
    }
    return div

}

const addAll = (parent ,arr) => {
    for(let i = 0; i < arr.length; i++) {
        parent.appendChild(arr[i]);
    }
}


const removeContent = (parent) => {
    if(parent.children.length > 1) {
        parent.removeChild(parent.lastChild)
    } 
}




export {p, title, subTitle, card, button, addAll, removeContent, div}