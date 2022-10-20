# 1 - Drag and Drop Browser

[Demo Here](https://ramniwasmahala007.github.io/5_days5_Projects/1-Drag&Drop_Browser/)

## Things I learned :--
>In HTML:

- while adding the font awesome link, I used the class `<i class="fas fa-images"></i>` in which image icon generate.

>In CSS:

- In css `background: -webkit-linear-gradient(to right #cfdef3, #e0eafc);` is used for only chrome and safari.
  - The `linear-gradient()` CSS function creates an image consisting of a progressive transition between two   or more colors along a straight line.

- `cursor-pointer`  The cursor is a pointer that indicates a link. it is applied on browser text as class name button.

>In JavaScript:

- `dragover event` dragover event is fired when an element or text selection is being dragged over a valid drop target.(matlab jab bhi file drag area ke upar se drop kare to use dragover kahte hai).

- The `dragleave event` is fired when a dragged element or text selection leaves a valid drop target.

- The `drop event` is fired when an element or text selection is dropped on a valid drop target.

- The `preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.(matlab jab file ko dragarea par jakar leave karte hai to vha par store nahi hoti hai to vha drop karne ke liye event cancel hona chaiye isliye preventdefault vahi kaam karta hai).
