import "./Input.css";
import inputMail from "./InputMail.html";
import inputPassword from "./InputPassword.html";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const eMail = () => inputMail;
export const Password = () => inputPassword;
