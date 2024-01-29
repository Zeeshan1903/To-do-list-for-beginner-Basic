let create_entry = document.getElementById('add');
create_entry.addEventListener('click', create);

let clear_btn = document.getElementById('clear');
clear_btn.addEventListener('click', clear);

function create() {
    let value = document.getElementById('input');

    let date = new Date();

    let content = input.value;


    //Setting the item in the local storage 
    localStorage.setItem('todo', JSON.stringify([content]));

    let show = document.getElementById('p');

    //Making a texttag element which will contain the date,delete option and our text node 
    //texttag is an element wiht textNode,date, delete as its children 
    let texttag = document.createElement('p');
    let textNode = document.createTextNode('hi');
    texttag.setAttribute('id', 'list_itmes');

    //Giving the value from the local storage to our textNode
    textNode.textContent = JSON.parse(localStorage.getItem('todo'));

    //Adding the textNode to our TextTag parent class
    texttag.appendChild(textNode);


    //Making a delete fn.
    let delete_btn = document.createElement('button');
    texttag.appendChild(delete_btn);
    delete_btn.setAttribute('id', 'delete');
    delete_btn.innerHTML += 'Delete';

    let happens = false;
    delete_btn.addEventListener('click',del);

    //adding addevet to delete fn 
    function del(){
        happens = true;

        //this will clear the local storage memeory
        textNode.textContent = (localStorage.removeItem('todo'));
        // this will clear the written text node and will remove all the child 
        texttag.innerHTML = ' ';
    }

    


    //Creating a  date node 
    let date_btn = document.createElement('p');
    texttag.appendChild(date_btn);
    date_btn.setAttribute('id', 'date');
    date_btn.innerHTML += (date.toDateString() + " " + date.getHours() + ":" + date.getMinutes());

    //Adding the texttag node to the main Paragraph
    show.appendChild(texttag);

    //Making the input clear after adding the text from input 
    input.value = ' ';
}


//Clear function 
function clear() {
    let data = document.getElementById('p');
    //this will delete the whole paragraph node not like delete fn single single texttag nodes 
    data.innerHTML = ' ';
}
