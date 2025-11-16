import { player } from "./player.js";
import { createPlayerCard } from "./template.js";

const container = document.getElementById("cardContainer");
const card = createPlayerCard(player);
container.appendChild(card);
