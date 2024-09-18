// Image data
const buttonData = [
  { id: 1, imageSrc: "./images/NorthernParula.PNG", text: "Northern Parula" },
  { id: 2, imageSrc: "./images/pw.PNG", text: "Prothonotary Warbler" },
  { id: 3, imageSrc: "./images/AmericanRobin.PNG", text: "American Robin" },
  { id: 4, imageSrc: "./images/BlueJay.PNG", text: "Blue Jay" },
  {
    id: 5,
    imageSrc: "./images/NorthernCardinal.PNG",
    text: "Northern Cardinal",
  },
  { id: 6, imageSrc: "./images/sp.PNG", text: "Savannah Sparrow" },
  { id: 7, imageSrc: "./images/a.PNG", text: "American Goldfinch" },
  {
    id: 8,
    imageSrc: "./images/RedWingedBlackbird.PNG",
    text: "Red-winged Blackbird",
  },
  { id: 9, imageSrc: "./images/EasternPhoebe.PNG", text: "Eastern Phoebe" },
  { id: 10, imageSrc: "./images/SongSparrow.PNG", text: "Song Sparrow" },
  { id: 11, imageSrc: "./images/IndigoBunting.PNG", text: "Indigo Bunting" },
  {
    id: 12,
    imageSrc: "./images/YellowRumpedWarbler.PNG",
    text: "Yellow Rumped Warbler",
  },
  { id: 13, imageSrc: "./images/BarnSwallow.PNG", text: "Barn Swallow" },
  { id: 14, imageSrc: "./images/CedarWaxwing.PNG", text: "Cedar Waxwing" },
  {
    id: 15,
    imageSrc: "./images/EasternKingbird.PNG",
    text: "Eastern Kingbird",
  },
  { id: 16, imageSrc: "./images/DarkEyedJunco.PNG", text: "Dark-eyed Junco" },
  {
    id: 17,
    imageSrc: "./images/NorthernMockingbird.PNG",
    text: "Northern Mockingbird",
  },
  {
    id: 18,
    imageSrc: "https://imgur.com/a/Wqj0QUB",
    text: "Eastern Bluebird",
  },
  {
    id: 19,
    imageSrc: "./images/TennesseeWarbler.PNG",
    text: "Tennessee Warbler",
  },
  { id: 20, imageSrc: "./images/SummerTanger.PNG", text: "Summer Tanager" },
];

const buttonGrid = document.querySelector(".button-grid");
let visibleButtonId = null;
let wigglingButtonId = null;

// Function to create buttons dynamically
buttonData.forEach(({ id, imageSrc, text }) => {
  const buttonContainer = document.createElement("div");

  // Create the image button
  const button = document.createElement("button");
  button.classList.add("image-button");
  button.style.backgroundImage = `url(${imageSrc})`;

  // Handle button click
  button.addEventListener("click", () => handleClick(id));

  // Create the text container
  const textContainer = document.createElement("div");
  textContainer.classList.add("pulldown-text");
  textContainer.innerHTML = `<p>${text}</p>`;

  buttonContainer.appendChild(button);
  buttonContainer.appendChild(textContainer);
  buttonGrid.appendChild(buttonContainer);
});

function handleClick(id) {
  const currentText = document.querySelectorAll(".pulldown-text");

  currentText.forEach((element, index) => {
    // Toggle the visibility of the text for the clicked button
    if (buttonData[index].id === id) {
      element.classList.toggle("show");
    } else {
      element.classList.remove("show");
    }
  });

  const buttons = document.querySelectorAll(".image-button");

  // Add wiggle effect to the clicked button
  buttons.forEach((btn, index) => {
    if (buttonData[index].id === id) {
      btn.classList.add("wiggle");
    } else {
      btn.classList.remove("wiggle");
    }
  });

  // Remove wiggle effect after 500ms
  setTimeout(() => {
    buttons.forEach((btn) => btn.classList.remove("wiggle"));
  }, 500);
}
