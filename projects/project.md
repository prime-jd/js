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
