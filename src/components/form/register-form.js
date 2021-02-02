// export function createRegisterForm() {
//     return `
//     <form class="form">
//         <h2> Reset Email <h2>
//         <p> Please enter your email to receive a link to create a new Email via email</p>
//         <input placeholder="email" />
//         <input type="submit" />
//     </form>
//     `
// }

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = "btn";

  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const text = document.createElement("p");
  text.innerText =
    "Please enter your email to receive a link to create a new password via email";

  const emailField = document.createElement("input");
  emailField.setAttribute("type", "email");
  emailField.setAttribute("name", "email");
  emailField.setAttribute("placeholder", "Email");
  emailField.className = "input";

  form.append(title, text, emailField, button);
  // document.getElementsByClassName("form")[0]
  // form.append(emailField)

  return form;
}
