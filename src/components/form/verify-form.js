// import { createElement } from "../../utils/createElement";

// function createOTPInputElement() {
//   const passwordField = createElement("input", {
//     className: "input",
//     placeholder: "*",
//     type: "password",
//     maxLength: "1",
//   });

//   return passwordField;
// }

// function createTitleElement() {
//   const title = document.createElement("h2");
//   title.innerText = "We have sent an OPT to your Mobile";
//   return title;
// }

// function createNumberCheckElement() {
//   const numberCheck = document.createElement("p");
//   numberCheck.innerText =
//     "Please check your mobile number 017*******48 continue to reset your password";

//   return numberCheck;
// }
// function createNextButton() {
//   const nextButton = document.createElement("button");
//   nextButton.innerText = "Next";
//   nextButton.className = "btn";

//   return nextButton;
// }

// export function createVerifyForm() {
//   const form = document.createElement("form");
//   form.className = "form";

//   const title = createTitleElement();

//   const numberCheck = createNumberCheckElement();

//   const passwordField1 = createOTPInputElement();
//   const passwordField2 = createOTPInputElement();
//   const passwordField3 = createOTPInputElement();
//   const passwordField4 = createOTPInputElement();
//   const passwordContainer = createElement("div", {
//     className: "form__otp",
//     children: [passwordField1, passwordField2, passwordField3, passwordField4],
//   });

//   const nextButton = createNextButton();

//   const fail = document.createElement("p");
//   fail.innerText = "Didn't Receive?";
//   fail.className = "form__fail";

//   const clickHere = document.createElement("a");
//   clickHere.innerText = "Click Here";
//   clickHere.href = "#";

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const secretPassword = "3217";

//     alert(
//       `Your Password - ${passwordField1.value}${passwordField2.value}${passwordField3.value}${passwordField4.value}- is correct`
//     );
//   });

//   fail.append(clickHere);

//   form.append(title, numberCheck, passwordContainer, nextButton, fail);

//   return form;
// }

import { createElement } from "../../utils/createElement";

function createOTPInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLength: "1",
    min: 0,
    max: 9,
  });
}
export function createVerifyForm() {
  const passwordField1 = createOTPInputElement();
  const passwordField2 = createOTPInputElement();
  const passwordField3 = createOTPInputElement();
  const passwordField4 = createOTPInputElement();

  const messageElement = createElement("p", {
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 071*****12 continue to reset your password",
      }),
      messageElement,
      createElement("div", {
        className: "form__otp",
        children: [
          passwordField1,
          passwordField2,
          passwordField3,
          passwordField4,
        ],
      }),
      createElement("input", {
        type: "submit",
        value: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't Reveice?",
        className: "form__fail",
        children: [
          createElement("a", {
            innerText: "Click Here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        passwordField1.value +
        passwordField2.value +
        passwordField3.value +
        passwordField4.value;
      const secretPassword = "3217";

      if (password === secretPassword) {
        messageElement.innerText = "Correct Password!";
      } else {
        messageElement.innerText = "Wrong Password!";
      }
    },
  });
}
