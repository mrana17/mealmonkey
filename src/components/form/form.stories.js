import "./form.css";
import { createRegisterForm } from "./register-form";
import { createVerifyForm } from "./verify-form";

export default {
  title: "Components/form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
