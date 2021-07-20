let upload_container = document.querySelector('#upload_container');
let selects_container = document.querySelector('#selects_container');
let submit = document.querySelector('#submit');
let showURL = document.querySelector('#showURL');
let pole = [];
let firstSpan = document.querySelector("#first");
let secondSpan = document.querySelector("#second");
let thirdSpan = document.querySelector("#third");

//CREATE UPLOAD BUTTON AND SELECT

const createSelect = () => {

let input = document.createElement('input');
input.type = 'file';
upload_container.appendChild(input);

let select = document.createElement('select');
selects_container.appendChild(select);


//upload function: upload file and create options from data
const upload = e => { 
    
    let file = e.target.files[0]; 
    let reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        let content = readerEvent.target.result; 
        let arr = content.replace('\r', '').split('\n');
        arr.forEach(it => {
            const option = document.createElement('option');
            option.setAttribute('value', it);
            option.innerText = it;       
            select.appendChild(option);      
                     
        });
     
    }

}
submit.addEventListener('click', () => {
    let selected = select.options[select.selectedIndex].text; 
    console.log(selected); 
    pole.push(selected);
    console.log(pole);
    firstSpan.innerHTML = pole[0];
    secondSpan.innerHTML = pole[1];
    thirdSpan.innerHTML = pole[2];
    showURL.href = `https://codebook-${pole[0]}-cpr.apps.ocd.cc.corp/codebooks/${pole[1]}/entries?systemId=${pole[2]}`;

    if (pole.length > 2) {
        pole.splice(-3);
               
    }

  })

input.addEventListener('change', upload);  

}


//call createSelect function - create 3 upload buttons with 3 selects
createSelect();
createSelect();
createSelect();










