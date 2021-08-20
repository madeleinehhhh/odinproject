// your javascript file

// Hint for this one: after creating the div with createElement,
  // append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”
const pRed = document.createElement('p');
pRed.classList.add('red');
pRed.textContent = 'Hey, I\'m red!';
container.appendChild(pRed);

// an <h3> with blue text that says “I’m a blue h3!”
const h3Blue = document.createElement('h3');
h3Blue.classList.add('blue')
h3Blue.textContent = 'I am a blue h3!'
container.appendChild(h3Blue)

// a <div> with a black border and pink background color
const divBlackPink = document.createElement('div')
divBlackPink.classList.add('blackPink')
  // with the following elements inside of it:
// another <h1> that says “I’m in a div”
const h1Div = document.createElement('h1')
h1Div.textContent = 'I am in a div.'
divBlackPink.appendChild(h1Div)
// a <p> that says “ME TOO!”
const pDiv = document.createElement('p')
pDiv.textContent = 'ME TOO!'
divBlackPink.appendChild(pDiv)

container.appendChild(divBlackPink)


// method02 for events
// const btnMethod02 = document.querySelector('#btnMethod02')
// btnMethod02.onclick = () => alert('Hello World, again')

// method03 for events
// const btnMethod03 = document.querySelector('#btnMethod03')
// function alertFunction() {
//   alert("YAY! YOU DID IT!")
// }
// btnMethod03.addEventListener('click', alertFunction)

// method04 for events, which is method #2 but with the callback from the addEventListener
// const btnMethod04 = document.querySelector('#btnMethod04')
// btnMethod04.addEventListener('click', function(e) {
//   alert("you clicked it!")
//   e.target.style.background = 'blue'
// })


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});