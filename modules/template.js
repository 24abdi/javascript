import { createStatsSection, stats } from "./stats.js";

export function createPlayerCard(player) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = player.image;
  img.alt = player.name;

  const name = document.createElement("h2");
  name.textContent = player.name;

  const position = document.createElement("h3");
  position.textContent = `${player.position} - ${player.club}`;

  const desc = document.createElement("p");
  desc.textContent = player.description;

  const statsSection = createStatsSection(stats);

  card.append(img, name, position, desc, statsSection);
  return card;
}
