# 1 - Drag and Drop Browser

[Demo Here](https://ramniwasmahala007.github.io/5_days5_Projects/1-Drag&Drop_Browser/)

## Things I learned :--
>In HTML:

- while adding the font awesome link, I used the class `<i class="fas fa-images"></i>` in which image icon generate.

>In CSS:

- In css `background: -webkit-linear-gradient(to right #cfdef3, #e0eafc);` is used for only chrome and safari.
  - The `linear-gradient()` CSS function creates an image consisting of a progressive transition between two   or more colors along a straight line.

- `cursor-pointer`  The cursor is a pointer that indicates a link. it is applied on browser text as class name button.

- ```css

    .drag-area.active{
    border: 3px solid #1683ff;}

  ```
  
 here `.active` class is used.

- The  `.active` refers to a simple css class that you (or your program) need to apply to the element. 

- The `:active` (the colon matters) refers to the active pseudo css class which is automatically set by the browser. 
  - To know more about this click on this link [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

- So, `.active` and `:active` both are different in working.

- ```css

      img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

  ``` 
  here `img` class is made in js variable `imgTag` file for fix image size is upload in dragarea after applying `inerHTML` element property.

>In JavaScript:

- `dragover event` dragover event is fired when an element or text selection is being dragged over a valid drop target.(matlab jab bhi file drag area ke upar se drop kare to use dragover kahte hai).

- The `dragleave event` is fired when a dragged element or text selection leaves a valid drop target.

- The `drop event` is fired when an element or text selection is dropped on a valid drop target.

- The `preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.(matlab jab file ko dragarea par jakar leave karte hai to vha par store nahi hoti hai to vha drop karne ke liye event cancel hona chaiye isliye preventdefault vahi kaam karta hai).
- ```js

  dragtext.textContent = "Release to Upload";

  ```
  here `textContent` is used to changing text of an element.

 - The `classList` property is read-only, but you can use the methods listed below, to add, toggle or remove CSS classes from the list.
   - The classList property returns a [DOMTokenList](https://www.w3schools.com/jsref/dom_obj_html_domtokenlist.asp).

-  ```js

   file = event.dataTransfer.files[0];

   ```
   here `dataTransfer.files` is Contains a list of all the local files available on the data transfer.

     - The `files property of DataTransfer` objects can only be accessed from within the `drop` event. For all other events, the files property will be empty — because its underlying data store will be in a protected mode.

     - The input may select multiple files, so `input.files` is an array-like object with them. Here we have only one file, so we just take `input.files[0]`.

     - To know more about dataTransfer API property click on the link [dataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)


- ```js

    let filetype = file.type;
    console.log(file.type);
   
  ```
  here The `file.type` property is an inbuilt function of File WebAPI which gives the media type (MIME) of the file represented by a file object.
   - For Example: “image/png” for PNG images.

- ```js

      let filetype = file.type;
      //console.log(file.type);
      let validextensions = ['image/jpeg', 'image/jpg', 'image/png'];

      if(validextensions.includes(filetype)){
    
      }

   ```
   Here, `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
    - For Example:--  
        1. [1, 2, 3].includes(2)         // true
        2. [1, 2, 3].includes(4)         // false

  - To understand it in a better way visit this link [array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

- `FileReader` is an object with the sole purpose of reading data from Blob (and hence File too) objects.
  -It delivers the data using events, as reading from disk may take time.
  - visit on the link to understand in better way [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) And also Visit on [FileReader](https://javascript.info/file).

- The `readAsDataURL` method is used to read the contents of the specified Blob or File. When the read operation is finished.
   - visit on this link for more knowledge [FileReader.readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)


- ```js
            let imgTag = `<img src="${fileURL}" alt="" />`;
            dragarea.innerHTML = imgTag;
       };   

  ```
  here `dragarea` content is changed by `innerHTML` into the `imgTag`.

- ```js
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

  ```
  so these code lines are added to displayfile functions.
