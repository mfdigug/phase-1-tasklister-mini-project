document.addEventListener("DOMContentLoaded", () => {

//prevent default refresh when clicking submit

const input = document.querySelector('#new-task-description');

document.querySelector('#create-task-form').addEventListener('submit', function(e) {
 e.preventDefault();
 console.log(input.value)
});

})

/*
function addToDo(newTask) {
  let li = document.createElement('li')
  li.textContent = newTask
  document.querySelector('#tasks').appendChild(li)
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
