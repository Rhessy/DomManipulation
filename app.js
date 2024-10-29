/* add in a <p> with red text that says “Hey I’m red!”  */

const body = document.querySelector("body");

/*  In order to create a new element and add it into the dom you first need to create a variable in js and set it equal to the element you want to create
    Then you will want to add the created element to the class list (if you want it to have a class or id,
    Next you will alter your element as desired, then append the element to the desired parent*/
const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey Im red!';
content.style.color = 'red';
body.appendChild(content);


const header = document.createElement('h3');
header.classList.add('header');
header.textContent = "Im a blue h3!";
header.style.color = 'blue';
body.appendChild(header);


const box = document.createElement('div');
box.classList.add('box');
box.style.border = '2px solid black';
box.style.backgroundColor = 'pink';


const h1 = document.createElement('h1');
h1.textContent = 'Im in a div';
box.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'Me Too!';
box.appendChild(p);

body.appendChild(box);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

btn2.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
})