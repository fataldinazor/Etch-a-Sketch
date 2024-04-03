'use strict';

const changeBtn=document.querySelector('.changeBtn');
const referenceDiv=document.querySelector('.mainTitle');
const dummyContainer=document.querySelector('.dummyContainer');

let size=15;
function sizeOfBoard(size){
    const container=document.createElement('div');
    container.classList.add('container');
    // referenceDiv.insertAdjacentElement('afterend',container);
    dummyContainer.appendChild(container);

    for(let i=0;i<size;i++){
        const column=document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for(let j=0;j<size;j++){
            const row=document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
    }
}
sizeOfBoard(size);
// const container=document.querySelector('.container');

function reInitialise(){
    const container=document.querySelector('.container');
    dummyContainer.removeChild(container);
}

let getColor=function(){
    var letters='0123456789ABCDEF'
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    if (color==='#ffffff')
    color='#00008B';
return color;
}

function attachEventListeners(){
    const blocks=document.querySelectorAll('.row');
    blocks.forEach(function(block){
        block.addEventListener('mouseenter',function(e){
            e.target.style.backgroundColor=getColor();
        })
    })
}
const blockSize=document.querySelector('.blockSize');
changeBtn.addEventListener('click', function(){
    const inputValue=document.querySelector('.inputValue').value;
    if (inputValue<10||inputValue>100)
        alert("The number is not in the Range");
    else{
        reInitialise();
        sizeOfBoard(inputValue);
        attachEventListeners();
        blockSize.textContent=`${inputValue}x${inputValue} Block `;
    }
})

attachEventListeners();

