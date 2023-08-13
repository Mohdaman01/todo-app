const checkboxs = document.querySelectorAll('.checkbox');
const deleteList = document.getElementById('delete');

let checkArray = [];

for(let checkbox of checkboxs){

    checkbox.addEventListener('click',()=>{

        if(checkbox.checked ===  true){

            checkArray.push(checkbox.value);

        }else{

             checkArray = checkArray.filter(e=>e!==checkbox.value);

        }
    })
}

const host  =  window.location.href;


deleteList.addEventListener('click',async ()=>{

    if(checkArray.length!==0){

       for(let checkbox of checkArray){

        await fetch(`${host}delete-list/?id=${checkbox}`);
        
    }
    location.reload();      
  }
   
})

