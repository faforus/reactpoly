import React, { useState, Fragment } from "react";
import { players } from "../../data/data";

type Props = {
  player: string;
};

const Pawn = (props: Props) => {
  const { player: name } = props;

  const [isHovered, setIsHovered] = useState(false);

  const player = players.find((playerName) => {
    return playerName.name === name;
  });

  return (
    <div className="basis-[50%] flex items-center justify-center">
      <div
        className={`relative flex items-center justify-center w-[50px] h-[50px] rounded-2xl ${player?.color} text-2xl font-bold shadow-md cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {player?.prison !== 0 ? (
          <Fragment>
            <span className="absolute h-full w-[2px] bg-slate-800" />
            <span className="absolute ml-[20px] h-full w-[2px] bg-slate-800" />
            <span className="absolute mr-[20px] h-full w-[2px] bg-slate-800" />
          </Fragment>
        ) : (
          ""
        )}
        {player?.name.slice(0, 1)}
        {isHovered && (
          <div
            className={`absolute left-[110%] p-10 whitespace-nowrap flex flex-col items-center justify-center rounded-3xl z-10 ${player?.color} text-base font-normal`}
          >
            <ul>
              <li>{player?.name}</li>
              <li>${player?.money}</li>
              {player?.properties.length !== 0 ? (
                <Fragment>
                  <li>Properties:</li>
                  <li>
                    <ul className="list-inside list-disc">
                      {player?.properties.map((property, index) => {
                        return <li key={index}>{property}</li>;
                      })}
                    </ul>
                  </li>
                </Fragment>
              ) : (
                ""
              )}
              {player?.prison !== 0 ? (
                <li>Turns in prison: {player?.prison}</li>
              ) : (
                ""
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pawn;
