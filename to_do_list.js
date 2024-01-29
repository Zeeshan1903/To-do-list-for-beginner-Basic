let add_btn = document.getElementById('add');
let clear_btn = document.getElementById('clear');

let a = add_btn.addEventListener('click',create);
let b = clear_btn.addEventListener('click',clear);

let input = document.getElementById('input');
// let c = document.getElementById('content');


// let sentence = "";



function create(){
    
    let date = new Date();



    let texttag = document.createElement('li');
    let textNode = document.createTextNode('Hi');
    texttag.appendChild(textNode);


 

    let delete_btn = document.createElement('button');
    texttag.appendChild(delete_btn);
    delete_btn.setAttribute('id','delete');
    delete_btn.innerHTML += 'Delete';



    let date_btn = document.createElement('p');
    texttag.appendChild(date_btn);
    date_btn.setAttribute('id','date');
    date_btn.innerHTML += (date.toDateString()+" " +date.getHours()+":"+date.getMinutes());



    textNode.textContent = input.value ;
   
    input.value = " ";

    let para = document.getElementById('p');
    para.appendChild(texttag);
    

    para.innerHTML+='<br>';

}


function clear(){
    let para = document.getElementById('p');
    
    para.innerHTML = '';
}

// let circle = document.getElementById('animation');
// for(let i =0; i<4; i++){
//     const tag = document.createElement('div');
//     circle.appendChild(tag);
//     tag.setAttribute('class','circles');
// }