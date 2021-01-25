import "./button.css";
import buttonBorder from "./button-Border.html";
import buttonFilled from "./button-Filled.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const filled = () => buttonBorder;
export const border = () => buttonFilled;