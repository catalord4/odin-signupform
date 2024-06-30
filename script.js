let pass_field = document.querySelector("#password");
let pass_confirm_field = document.querySelector("#pass-confirm");

let button = document.querySelector(".roboto-medium");
let pass_text = document.querySelector("#pass-notmatch");

button.addEventListener("click", (event) => {
  if (pass_field.value === pass_confirm_field.value) {
    pass_text.textContent = "";
    console.log("goodd");

    document.form1.submit();
  } else {
    pass_text.textContent = "*Password's don't match";
  }
});
