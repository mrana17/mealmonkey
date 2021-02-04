import "./numberpicker.css";
import { createNumberPickerForm } from "./numberpicker";

export default {
  title: "Components/number-picker",
  parameters: { layout: "centered" },
};

export const numberPicker = () => createNumberPickerForm();
