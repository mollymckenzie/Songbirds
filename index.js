// Image data with descriptions
const buttonData = [
  {
    id: 1,
    imageSrc: "./images/NorthernParula.PNG",
    text: "Northern Parula",
    desc: "A small warbler that lives in North America and Canada. ",
  },
  {
    id: 2,
    imageSrc: "./images/pw.PNG",
    text: "Prothonotary Warbler",
    desc: "A bright yellow warbler that is named after the robes worn by the papal clerks in the Roman Catholic Church.",
  },
  {
    id: 3,
    imageSrc: "./images/AmericanRobin.PNG",
    text: "American Robin",
    desc: "One of the most common species of bird in North America and is easily recognizable due to its bright orange chest.",
  },
  {
    id: 4,
    imageSrc: "./images/BlueJay.PNG",
    text: "Blue Jay",
    desc: "Native to eastern and central United States and are known for their intelligence and tight family bonds.",
  },
  {
    id: 5,
    imageSrc: "./images/NorthernCardinal.PNG",
    text: "Northern Cardinal",
    desc: "Known for their bright red color, and like to live in pine and spruce trees.",
  },
  {
    id: 6,
    imageSrc: "./images/sp.PNG",
    text: "Savannah Sparrow",
    desc: "A small bird that is the only member of its genus, and is found in grasslands of North America.",
  },
  {
    id: 7,
    imageSrc: "./images/a.PNG",
    text: "American Goldfinch",
    desc: "A small finch that lives from Canada to Mexico, and is bright yellow.",
  },
  {
    id: 8,
    imageSrc: "./images/RedWingedBlackbird.PNG",
    text: "Red-winged Blackbird",
    desc: "A black bird with bright red shoulder patches that is commonly found in marshes.",
  },
  {
    id: 9,
    imageSrc: "./images/EasternPhoebe.PNG",
    text: "Eastern Phoebe",
    desc: "A small grayish brown flycatcher that is close in relation to kingfishers.",
  },
  {
    id: 10,
    imageSrc: "./images/SongSparrow.PNG",
    text: "Song Sparrow",
    desc: "A small brown bird with stripes that is known for for its songs and adaptability",
  },
  {
    id: 11,
    imageSrc: "./images/IndigoBunting.PNG",
    text: "Indigo Bunting",
    desc: "A bright solid blue bird in the cardinal family.",
  },
  {
    id: 12,
    imageSrc: "./images/YellowRumpedWarbler.PNG",
    text: "Yellow-rumped Warbler",
    desc: "A common warbler that has bold black, white, and yellow patches. They can be found in almost any habitat.",
  },
  {
    id: 13,
    imageSrc: "./images/BarnSwallow.PNG",
    text: "Barn Swallow",
    desc: "An orange and dark blue bird commonly found around barns. They can be helpful with managing insect pests.",
  },
  {
    id: 14,
    imageSrc: "./images/CedarWaxwing.PNG",
    text: "Cedar Waxwing",
    desc: "A brown, gray and yellow bird that can be identified by the black mask around its eyes.",
  },
  {
    id: 15,
    imageSrc: "./images/EasternKingbird.PNG",
    text: "Eastern Kingbird",
    desc: "Large flycathcers that are known for being aggresive to predator birds.",
  },
  {
    id: 16,
    imageSrc: "./images/DarkEyedJunco.PNG",
    text: "Dark-eyed Junco",
    desc: "A small brown and gray bird who can be found well into the Artic Circle.",
  },
  {
    id: 17,
    imageSrc: "./images/NorthernMockingbird.PNG",
    text: "Northern Mockingbird",
    desc: "Known for their ability to mimic everything, and will also dive bomb humans if they get too close to their nests.",
  },
  {
    id: 18,
    imageSrc: "./images/EasternBluebird.PNG",
    text: "Eastern Bluebird",
    desc: "A bright blue and orange bird that can be found from Canada to Nicaragua.",
  },
  {
    id: 19,
    imageSrc: "./images/TennesseeWarbler.PNG",
    text: "Tennessee Warbler",
    desc: "The Tennesse Warbler got its name from being discovered while migrating through Tennessee.",
  },
  {
    id: 20,
    imageSrc: "./images/SummerTanger.PNG",
    text: "Summer Tanager",
    desc: "A bright red bird in the cardinal family that migrates to South America each winter.",
  },
];

const buttonGrid = document.querySelector(".button-grid");

// Function to create buttons 
buttonData.forEach(({ id, imageSrc, text, desc }) => {
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
  textContainer.innerHTML = `<p><strong>${text}</strong></p><p>${desc}</p>`;
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
