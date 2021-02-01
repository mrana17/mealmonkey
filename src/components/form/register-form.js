// export function createRegisterForm() {
//     return `
//     <form class="form">
//         <h2> Reset Password <h2>
//         <p> Please enter your email to receive a link to create a new Password via email</p>
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

    function register() {
        alert("Registered")
    }
    
    button.addEventListener("click", register);

    const title = document.createElement("h2");
    title.innerText = "Reset Password";

    const passwordField = document.createElement("input")
    passwordField.setAttribute("type","password");
    passwordField.setAttribute("name","password");
    passwordField.setAttribute("placeholder","Password");
    

    form.append(title, passwordField, button)
    // document.getElementsByClassName("form")[0]
    // form.append(passwordField)

    return form
}