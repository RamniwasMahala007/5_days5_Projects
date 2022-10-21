const dragarea = document.querySelector('.drag-area');
const dragtext = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = function()
{
  input.click();
}
//when browse
input.addEventListener('change',function(){
 file = this.files[0];
 dragarea.classList.add('active');
 displayfile();
});

// function defination
function draginside(event)
{
    event.preventDefault();
   //console.log('file inside the drag area');
   dragtext.textContent = "Release to Upload";
   dragarea.classList.add('active');
}

function dragleft(event)
{
  //console.log('file leave the drag area');
  dragtext.textContent = "Drag & Drop";
  dragarea.classList.remove('active');
}

function filedrop(event)
{
  // console.log('file is dropped in the drag area')
    event.preventDefault();
    file = event.dataTransfer.files[0];//here it contains file instead of multiple files.
    //console.log(file);
    displayfile();

};

function displayfile()
{
  let filetype = file.type;
    //console.log(file.type);
   let validextensions = ['image/jpeg', 'image/jpg', 'image/png'];

   if(validextensions.includes(filetype)){

        let filereader = new FileReader();

        filereader.onload = function(){
            let fileURL = filereader.result;
            //console.log(fileURL);

            let imgTag = `<img src="${fileURL}" alt="" />`;
            dragarea.innerHTML = imgTag;
       };
          filereader.readAsDataURL(file);
      }else{
        alert('Please Upload an Image File'); 
        dragarea.classList.remove('active');
      }
};


//when file inside the drag area

dragarea.addEventListener('dragover',draginside);

//   --------------- OR --------------------

//dragarea.addEventListener('dragover',(event)=>{console.log('file over the drag area')})



//now when file leaves the dragarea
dragarea.addEventListener('dragleave',dragleft);

//dragarea.addEventListener('dragleave',(event)=>{console.log('file leave the drag area')})

// when the file is dropped in the drag area

dragarea.addEventListener('drop',filedrop);