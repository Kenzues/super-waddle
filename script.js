function addTask() {
    // Get the task input element
    var taskInput = document.getElementById("taskInput");

    // Get the value of the task input
    var taskValue = taskInput.value.trim();

    // If the task input is not empty
    if (taskValue !== "") {
        // Create a new list item element
        var listItem = document.createElement("li");

        // Set the text content of the list item
        listItem.textContent = taskValue;

        // Append the list item to the task list
        document.getElementById("taskList").appendChild(listItem);

        // Clear the task input
        taskInput.value = "";
    } else {
        // If the task input is empty, alert the user
        alert("Please enter a task.");
    }
}
// Function to add task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskValue;

        // Add click event listener to toggle completion
        listItem.addEventListener("click", function() {
            // Toggle the "completed" class
            this.classList.toggle("completed");
        });

        document.getElementById("taskList").appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
