const palette = document.getElementById("palette");
const addButton = document.getElementById("addColor");
const subtractButton = document.getElementById("subtractColor");
const generateButton = document.getElementById("regenerate");

function randomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

function createColorCard(color) {
  const card = document.createElement("div");
  card.className = "color-block";

  const display = document.createElement("div");
  display.className = "color-display";
  display.style.backgroundColor = color;

  const code = document.createElement("div");
  code.className = "color-code";
  code.textContent = color;

  card.append(display, code);

  // Insert BEFORE the + button
  palette.appendChild(card, addButton);
}
function regenerateColors(){
   const colorCards = palette.querySelectorAll(".color-block");
    for (const card of colorCards) {
        const newHex = randomColor(); 
        const display = card.querySelector(".color-display");
        display.style.backgroundColor = newHex;
        const code = card.querySelector(".color-code");
        code.textContent = newHex;    
    }
}
function removeColorCard(){
     const colorCards = palette.querySelectorAll(".color-block");

    if (colorCards.length > 0) {
        const lastCard = colorCards[colorCards.length - 1];
        palette.removeChild(lastCard);
    }
}

addButton.addEventListener("click", () => {
  createColorCard(randomColor());
});
subtractButton.addEventListener("click", () => {
  removeColorCard();
});
generateButton.addEventListener("click", () =>{
    regenerateColors();
});
