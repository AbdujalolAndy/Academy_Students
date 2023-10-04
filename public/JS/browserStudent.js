document.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-me")) {
    const data = prompt(
      "Change the name of student",
      event.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML
    );
    axios
      .post("/update-item", {
        new_name: data,
        id: event.target.getAttribute("data-id"),
      })
      .then((response) => {
        event.target.parentElement.parentElement.querySelector(
          ".item-text"
        ).innerHTML = data;
      })
      .catch((err) => {
        alert("Try again");
      });
  }

  if (event.target.classList.contains("delete-me")) {
    if (confirm("Rostan ham o'chirishni hohlaysizmi")) {
      axios
        .post("/delete-item", { id: event.target.getAttribute("data-id") })
        .then((response) => {
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          alert("Try again");
        });
    }
  }
});
