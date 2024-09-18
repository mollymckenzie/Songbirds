import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Import each image properly so Webpack processes them correctly
import birdpic1 from "./images/NorthernParula.PNG";
import birdpic2 from "./images/pw.PNG";
import birdpic3 from "./images/AmericanRobin.PNG";
import birdpic4 from "./images/BlueJay.PNG";
import birdpic5 from "./images/NorthernCardinal.PNG";
import birdpic6 from "./images/sp.PNG";
import birdpic7 from "./images/a.PNG";
import birdpic8 from "./images/RedWingedBlackbird.PNG";
import birdpic9 from "./images/EasternPhoebe.PNG";
import birdpic10 from "./images/SongSparrow.PNG";
import birdpic11 from "./images/IndigoBunting.PNG";
import birdpic12 from "./images/YellowRumpedWarbler.PNG";
import birdpic13 from "./images/BarnSwallow.PNG";
import birdpic14 from "./images/CedarWaxwing.PNG";
import birdpic15 from "./images/EasternKingbird.PNG";
import birdpic16 from "./images/DarkEyedJunco.PNG";
import birdpic17 from "./images/NorthernMockingbird.PNG";
import birdpic18 from "https://imgur.com/a/Wqj0QUB";
import birdpic19 from "./images/TennesseeWarbler.PNG";
import birdpic20 from "./images/SummerTanger.PNG";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const buttonData = [
  { id: 1, imageSrc: birdpic1, text: "Northern Parula" },
  { id: 2, imageSrc: birdpic2, text: "Prothonotary Warbler" },
  { id: 3, imageSrc: birdpic3, text: "American Robin" },
  { id: 4, imageSrc: birdpic4, text: "Blue Jay" },
  { id: 5, imageSrc: birdpic5, text: "Northern Cardinal" },
  { id: 6, imageSrc: birdpic6, text: "Savannah Sparrow" },
  { id: 7, imageSrc: birdpic7, text: "American Goldfinch" },
  { id: 8, imageSrc: birdpic8, text: "Red-winged Blackbird" },
  { id: 9, imageSrc: birdpic9, text: "Eastern Phoebe" },
  { id: 10, imageSrc: birdpic10, text: "Song Sparrow" },
  { id: 11, imageSrc: birdpic11, text: "Indigo Bunting" },
  { id: 12, imageSrc: birdpic12, text: "Yellow Rumped Warbler" },
  { id: 13, imageSrc: birdpic13, text: "Barn Swallow" },
  { id: 14, imageSrc: birdpic14, text: "Cedar Waxwing" },
  { id: 15, imageSrc: birdpic15, text: "Eastern Kingbird" },
  { id: 16, imageSrc: birdpic16, text: "Dark-eyed Junco" },
  { id: 17, imageSrc: birdpic17, text: "Northern Mockingbird" },
  { id: 18, imageSrc: "https://imgur.com/a/Wqj0QUB", text: "Eastern Bluebird" },
  { id: 19, imageSrc: birdpic19, text: "Tennessee Warbler" },
  { id: 20, imageSrc: birdpic20, text: "Summer Tanger" },
];

export function MyButtonGrid() {
  const [visibleButtonId, setVisibleButtonId] = useState(null);
  const [wigglingButtonId, setWigglingButtonId] = useState(null);

  const handleClick = (id) => {
    setVisibleButtonId(visibleButtonId === id ? null : id);
    setWigglingButtonId(id);

    setTimeout(() => setWigglingButtonId(null), 500);
  };

  return (
    <div className="button-grid">
      {buttonData.map(({ id, imageSrc, text }) => (
        <div key={id}>
          <button
            className={`image-button ${
              wigglingButtonId === id ? "wiggle" : ""
            }`}
            onClick={() => handleClick(id)}
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></button>

          <div
            className={`pulldown-text ${visibleButtonId === id ? "show" : ""}`}
          >
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

