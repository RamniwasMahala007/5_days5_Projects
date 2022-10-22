# 2- QR Code Generator

[Demo Here](https://ramniwasmahala007.github.io/5_days5_Projects/2-QR_Code_Generator/)

## Things I learned :--

> ### In CSS:

- ```css

    #input::placeholder{
    color: red;
     }

  ```
   The `::placeholder` selector selects form elements with placeholder text, and let you style the placeholder text.

- An `animation` lets an element gradually change from one style to another.
  - ```cs
       @keyframes loading{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
       }
     }

    ```
    When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.
- for different design of loading please visit on this site [animation_loading](https://blog.hubspot.com/website/css-loading-animation)


> ### In JavaScript:

- ```js
      loader.style.display = "block";
   ```
   Where the `display:none` in the loading id in the css style, convert in the `display:block`.

 - `let qrValue = qrInput.value;`  Here,The `value` property contains the default value OR the value a user types in (or a value set by a script). 

- `let api = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;` here API is used to generate QR Code.



