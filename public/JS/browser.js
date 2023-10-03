const f_name = document.getElementById("f_name");
const s_name = document.getElementById("s_name");
const birth = document.getElementById("birth");
const email = document.getElementById("email");

document.getElementById("create-item").addEventListener("submit", (event) => {
  event.preventDefault();
  axios
    .post("/academy-students", {
      f_name: f_name.value,
      s_name: s_name.value,
      birth: birth.value,
      email: email.value,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      alert("Qayta urinib ko'rin");
    });
  [f_name, s_name, birth, email].forEach((inputValue) => {
    inputValue.value = "";
  });
  f_name.focus();
});
