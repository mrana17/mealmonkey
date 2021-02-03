function createOTPInputElement() {
  const passwordField = document.createElement("input");
  passwordField.setAttribute("type", "password");
  passwordField.setAttribute("placeholder", "*");
  passwordField.setAttribute("pattern", "[0-9]{1}[0-9]{3}");
  passwordField.setAttribute("maxlength", "1");
  passwordField.className = "input";

  return passwordField;
}

function createTitleElement() {
  const title = document.createElement("h2");
  title.innerText = "We have sent an OPT to your Mobile";
  return title;
}

function createNumberCheckElement() {
  const numberCheck = document.createElement("p");
  numberCheck.innerText =
    "Please check your mobile number 017*******48 continue to reset your password";

  return numberCheck;
}
function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.className = "btn";

  return nextButton;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = createTitleElement();

  const numberCheck = createNumberCheckElement();

  const passwordField1 = createOTPInputElement();
  const passwordField2 = createOTPInputElement();
  const passwordField3 = createOTPInputElement();
  const passwordField4 = createOTPInputElement();

  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__otp";
  passwordContainer.append(
    passwordField1,
    passwordField2,
    passwordField3,
    passwordField4
  );
  const nextButton = createNextButton();

  const fail = document.createElement("p");
  fail.innerText = "Didn't Receive?";
  fail.className = "form__fail";

  const clickHere = document.createElement("a");
  clickHere.innerText = "Click Here";
  clickHere.href = "#";

  fail.append(clickHere);

  form.append(title, numberCheck, passwordContainer, nextButton, fail);

  return form;
}
