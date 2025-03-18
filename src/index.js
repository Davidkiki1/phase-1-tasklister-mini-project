document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#new-task-description");
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;
    taskList.appendChild(li);
    
    input.value = ""; // Clear input field after submission
  });
});