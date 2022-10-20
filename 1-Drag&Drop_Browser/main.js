const dragarea = document.querySelector('.drag-area');


// function defination
function draginside(event)
{
    event.preventDefault();
   console.log('file inside the drag area');
}

function dragleft(event)
{
  console.log('file leave the drag area');
}

function filedrop(event)
{
    event.preventDefault();
    console.log('file is dropped in the drag area')
}


//when file inside the drag area

dragarea.addEventListener('dragover',draginside);

//   --------------- OR --------------------

//dragarea.addEventListener('dragover',(event)=>{console.log('file over the drag area')})



//now when file leaves the dragarea
dragarea.addEventListener('dragleave',dragleft);

//dragarea.addEventListener('dragleave',(event)=>{console.log('file leave the drag area')})

// when the file is dropped in the drag area

dragarea.addEventListener('drop',filedrop);