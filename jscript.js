document.addEventListener("DOMContentLoaded", function() {
    
    var submit = document.getElementById("submit");
    var newTask = document.getElementById("new-task");

    submit.disabled = true;

    newTask.addEventListener("input", function() {
        
        if (newTask.value.trim() !== "") {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    });

    document.getElementById("task-form").addEventListener("submit", function(event) {
        
        event.preventDefault();

        var task = newTask.value.trim();

        var listItem = document.createElement("li");
        listItem.textContent = task;

        document.getElementById("tasks").appendChild(listItem);

        newTask.value = "";
        submit.disabled = true;
    });
    
    return false;
});
