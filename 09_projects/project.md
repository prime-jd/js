# Projects

## Project link

[Click here](https://stackblitz.com/edit/stackblitz-starters-agcxnz?file=index.html)

# solution code

## project1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```

## project2

```javascript
const d = document.querySelector('form')
d.addEventListener("submit", function(e)
{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height<=0 || height== '' ||  isNaN(height) ){
    result.innerHTML = "provide valid height"
    }else if(weight<0 || weight== '' ||  isNaN(weight) ){
    result.innerHTML = "provide valid weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML =`${bmi}`;
    }
});
```
## project3

```javascript
const change_col = function(){
    const hex  = '0123456789ABCDEF';
    let col = '#';
    for (let i = 0; i < 6; i++) {
        col += hex[Math.floor(Math.random()*16)]    
    }
    return col;
}
console.log(change_col());
let interval;
const startChangeColor = function(){
     interval = setInterval(changeBgCol, 1000);
    function changeBgCol() {
        document.body.style.backgroundColor = change_col(); 
    } 
};
const stopChangeColor = function(){
    clearInterval(interval);
}

document.querySelector('#start').addEventListener('click', startChangeColor)
document.querySelector('#stop').addEventListener('click', stopChangeColor)
```