console.log(document);

const myMessage = document.querySelector('.myMessage');
myMessage.innerText = 'This is a message in the DOM!'
console.log(myMessage);

setTimeout(function(){
    var myMessage = document.querySelector('.myMessage');
    myMessage.innerText = "This Message DOM is constructed By Khanyi, it's expected to vanish in 2 seconds.";

    setTimeout(function(){
        myMessage.innerText = '';
    }, 3000);

    setTimeout(function(){
        myMessage.innerText = 'I had to show up in three seconds so I dominant the div, Bye (: '
    }, 3000)

}, 3000);

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    // alert("button clicked!")
    theMessageButton.innerHTML = "Thank you to explore the click event. If you see me, means you have clicked the button!"
});

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const removeButton = document.querySelector('.removeText');
removeButton.addEventListener('click', function() {
    myMessage.innerHTML = '';
    removeButton.innerHTML = "Thank you for clearing the text. If you see me, means you have clicked the removal button!"
})

const inputBox = document.querySelector('.theInputValue');

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value;

    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
    else
    {
        alert("Field Required.");
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector(".fruits");

for(let i=0; i<fruits.length; i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}


// Adding the fruit value from user to the array list
const fruitInput = document.querySelector('.fruitValue');
const AddFruitBtn = document.querySelector('.AddFruitBtn');
const FruiltListHTML = document.querySelector('.fruits');

AddFruitBtn.addEventListener('click', function() {
    const FruitValue = fruitInput.value.trim();
    
    if(FruitValue) {
        fruits.push(FruitValue);

        const li = document.createElement('li');
        li.innerText = FruitValue;
        FruiltListHTML.appendChild(li);

        fruitInput.value = '';
    }
    else
    {
        alert('Add fruit field is empty!');
    }
})