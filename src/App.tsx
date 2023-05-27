import React from "react";
import Field from "./components/field/Field";
import { players, fields } from "./data/data";
import "./css/grid.css";
import Dice from "react-dice-roll";

function App() {
  return (
    <div className="gameGrid">
      {fields.map((field, index) => {
        return (
          <Field
            key={index}
            fieldData={fields[index]}
            playerData={players[0]}
          />
        );
      })}
      <div className="flex flex-col items-center justify-center text-white font-extrabold text-6xl drop-shadow-xl">
        FIFIPOLY v2
        <div className="flex">
          <div className="w-[100px] h-[100px] m-5">
            <Dice
              size={100}
              triggers={["Enter", "click"]}
              onRoll={(value) => console.log(value)}
            />
          </div>
          <div className="w-[100px] h-[100px] m-5">
            <Dice
              size={100}
              triggers={["Enter", "click"]}
              onRoll={(value) => console.log(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
