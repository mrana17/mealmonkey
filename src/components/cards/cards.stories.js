import "./cards.css";
import cardOffers from "./card-offers.html";
import cardItalian from "./card-italian.html";
import cardSrilankan from "./card-srilankan.html";
import cardContainer from "./card-container.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const offers = () => cardOffers;
export const italian = () => cardItalian;
export const srilankan = () => cardSrilankan;
export const container = () => cardContainer;
container.parameters = { layout: "fullscreen"};