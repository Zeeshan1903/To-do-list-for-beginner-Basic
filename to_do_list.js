let create_entry = document.getElementById('add');
create_entry.addEventListener('click', create);

let clear_btn = document.getElementById('clear');
clear_btn.addEventListener('click', clear);

function create() {
    let value = document.getElementById('input');

    let date = new Date();

    let content = input.value;
    console.log(content);

    localStorage.setItem('todo', JSON.stringify([content]));

    let show = document.getElementById('p');

    let texttag = document.createElement('p');
    let textNode = document.createTextNode('hi');
    texttag.setAttribute('id', 'list_itmes');

    textNode.textContent = JSON.parse(localStorage.getItem('todo'));

    texttag.appendChild(textNode);

    let delete_btn = document.createElement('button');
    texttag.appendChild(delete_btn);
    delete_btn.setAttribute('id', 'delete');
    delete_btn.innerHTML += 'Delete';

    let happens = false;
    delete_btn.addEventListener('click',del);
    function del(){
        happens = true;
        textNode.textContent = (localStorage.removeItem('todo'));
        texttag.innerHTML = ' ';
    }

    
    
    let date_btn = document.createElement('p');
    texttag.appendChild(date_btn);
    date_btn.setAttribute('id', 'date');
    date_btn.innerHTML += (date.toDateString() + " " + date.getHours() + ":" + date.getMinutes());


    show.appendChild(texttag);

    input.value = ' ';
}





function clear() {
    let data = document.getElementById('p');
    data.innerHTML = ' ';
}
