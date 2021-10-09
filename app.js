let colors = ['black','blue','yellow','brown','orange','pink','purpal'];

let button = document.getElementById('button');

button.addEventListener('click',function(){
    var randamColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
     let container = document.getElementById('container');

     container.style.background = randamColor;
})