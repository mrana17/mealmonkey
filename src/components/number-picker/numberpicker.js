import { createElement } from "../../utils/createElement";

export function createNumberPickerForm() {
  const addButton = createElement("button", {
    innerText: "+",
    onclick: function () {
      numberInput.value = +numberInput.value + 1;
    },
  });
  const numberInput = createElement("input", {
    type: "number",
    value: "1",
  });
  const substractButton = createElement("button", {
    innerText: "-",
    onclick: function () {
      if (numberInput.value >= 1) {
        numberInput.value = +numberInput.value - 1;
      }
    },
  });
  return createElement("div", {
    className: "numberPicker",
    children: [
      createElement("p", {
        innerText: "Number of Portions",
      }),
      substractButton,
      numberInput,
      addButton,
    ],
  });
}
