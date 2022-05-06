Alphabet generator:
```javascript
let word = "but a trail of ultraviolet fading into the mist";

let letters = Array.from(word);

let elements = "";

letters.forEach(l => {
   if (l === ' ') {
    elements += ' ';
   } else {
     elements += "<Alphabet letter=\"" + l.toUpperCase() + "\"/>";
    }
});

console.log(elements);
```
