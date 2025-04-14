document.addEventListener("DOMContentLoaded", () => {


//grab text input
const form = document.querySelector("#create-task-form");
const input = document.querySelector('#new-task-description');

//submit form
form.addEventListener('submit', function(e) {
 e.preventDefault(); //prevent default refresh when clicking submit
 addToDo(input.value) //call function to add list item using input text input
 form.reset(); //reset form after adding li
});

//add items
function addToDo(newTask) {
  let li = document.createElement('li'); //create li
  li.textContent = `${newTask} `; //set li text

  let btn = document.createElement('button'); //create button 
  btn.textContent = 'x' //set button text

  li.appendChild(btn); //append button to li
  document.querySelector('#tasks').appendChild(li) //append li to ul using id

  btn.addEventListener('click', (e) => e.target.parentNode.remove()); //delete button and li

}


});

/*
A delete function that will remove tasks from your list
A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
An additional input field (e.g. user, duration, date due)
Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/
