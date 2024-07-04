

let text= "I am a programmer"; //a variable of data type string

let num = 8;       // a variable of data type number

let isActive = true;   // a variable of data type boolean



let num1 =10;
let num2 =2;

//function to add the two numbers
function add(){
    answer =num1+num2;
    console.log(answer);
}

//functiom to subtract the two numbers
function subtract(){
    answer= num1 -num2;
    console.log(answer);
}

//function to divide the two numbers
function divide(x,y){
    return x / y;
   
}

//function to multiply the two numbers
function multiply(a,b){
    return a * b;
}


//calling the functions
add()
subtract()
console.log(divide(20,5))
console.log(multiply(5,3))

//function to change text
function change(){
    document.getElementById('piece2').textContent="See I have changed!";
}

// change background color of the element
function bgcolor(){
    const color= document.getElementById("colour").value;
    document.body.style.backgroundColor=color;
}


//change the style of the <p> item
// const txt = document.getElementById('text');
// const styleit =document.getElementById('styleit');

// styleit.addEventListener('click',() =>{
//     txt.style.color = "blue";
//     txt.style.fontSize= "20px";
// });

//function to make text disappear
function disappear(){
    document.getElementById('piece1').style.visibility="hidden";
}


//add a chart.js
const ctx= document.getElementById("mychart");

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
            data: [12,19,3,5,2,3],
            borderWidth:1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
} )


