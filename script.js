let count = 1; // Start the count at 1

function addTodo() {
  const inputel = document.getElementById("input");
  const value = inputel.value.trim(); // Trim whitespace

  if (value === "") {
    console.log("no value");
    return;
  }

  // Create new elements for the todo item
  const newDiv = document.createElement("div");
  const newTodo = document.createElement("h3");
  const newBtn = document.createElement("button");
  const newCheckbox = document.createElement("input");

  newCheckbox.type = "checkbox";

  // Set class and id attributes
  newDiv.className = "todo";
  newDiv.id = `todo-${count}`;
  newTodo.id = `todo-text-${count}`;
  newCheckbox.id = `checkbox-${count}`; // Changed id to avoid conflicts
  newBtn.className = "clear";
  newBtn.textContent = "X";
  newBtn.setAttribute("onclick", `clearr(${count})`);
  newCheckbox.setAttribute("onclick", `checkboxClicked(${count})`);
  newCheckbox.className = "checkbox";

  // Add the todo item text and append elements to the container
  newTodo.textContent = `${count}) ${value}`;
  newDiv.appendChild(newCheckbox);
  newDiv.appendChild(newTodo);
  newDiv.appendChild(newBtn);

  const container = document.getElementById("todo-list");
  container.appendChild(newDiv);

  // Clear the input field and increment count
  inputel.value = "";
  count++;
}

function clearr(id) {
  const todoItem = document.getElementById(`todo-${id}`);

  if (todoItem) {
    todoItem.remove();
    updateNumbers(); // Update the numbers of the remaining todo items
  } else {
    console.log(`Todo item with ID todo-${id} not found.`);
  }
}

function updateNumbers() {
  const todoItems = document.querySelectorAll(".todo");
  console.log(todoItems);
  let newCount = 1; // Start with 1 for the first item

  todoItems.forEach((item) => {
    const h3 = item.querySelector("h3");
    const value = h3.textContent.split(") ")[1]; // Get the text without the number part
    h3.textContent = `${newCount}) ${value}`; // Update the number and text
    item.id = `todo-${newCount}`; // Update the div id

    const button = item.querySelector("button");
    button.setAttribute("onclick", `clearr(${newCount})`); // Update the button's onclick function
    const checkbox = item.querySelector("input[type='checkbox']");
    checkbox.setAttribute("onclick", `checkboxClicked(${newCount})`); // Update the checkbox's onclick function
    checkbox.id = `checkbox-${newCount}`;
    h3.id = `todo-text-${newCount}`;
    newCount++;
  });

  // Update the global count to be equal to the number of remaining items plus 1
  count = newCount;
}

// Event listener for adding todos on Enter key press
document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo(); // Call addTodo() when Enter is pressed
  }
});

// set interval that keeps on checking the ids

// Function for checkbox clicked
const checkboxClicked = (id) => {
  const checkbox = document.getElementById(`checkbox-${id}`); // Use checkbox id
  const h2Val = document.getElementById(`todo-text-${id}`);
  console.log(h2Val);
  if (checkbox.checked) {
    if (h2Val) {
      h2Val.style.textDecoration = "line-through";
    }
  } else {
    if (h2Val) {
      h2Val.style.textDecoration = "none";
    }
  }
};
