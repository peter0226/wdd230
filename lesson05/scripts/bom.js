document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");

    button.addEventListener("click", () => {
      if (input.value !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", function () {
          list.removeChild(li);
          input.focus();
        });
        input.value = "";
        input.focus();
      } else {
        const errorText = document.createElement("p");
        errorText.textContent = "Please enter a book and a chapter.";
        list.append(errorText);
        setTimeout(() => {
          list.removeChild(errorText);
        }, 2000);
        input.focus();
      }
    });
  });