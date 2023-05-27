import React from "react";
import Pawn from "../pawn/Pawn";
import { players } from "../../data/data";

type PlayerData = {
  id: number;
  color: string;
  name: string;
};

type FieldData = {
  id: number;
  streetName: string;
  color: string;
  buyoutPrice: number | null;
  startingPenalty: number | null;
  ownedBy?: string | null;
  occupied: string[];
  rank: number;
  set?: number;
  penalty?: number | undefined;
};

type Props = {
  fieldData: FieldData;
  playerData: PlayerData;
};

const Field = (props: Props) => {
  const { fieldData } = props;
  const { streetName, color, ownedBy, buyoutPrice, penalty, rank, occupied } =
    fieldData;

  const renderRank = () => {
    const rankDivs = [];
    for (let i = 0; i < rank; i++) {
      rankDivs.push(
        <div key={i} className="w-[14px] h-[14px] mx-1 bg-green-700"></div>,
      );
    }
    return rankDivs;
  };

  const player = players.find((playerName) => {
    return playerName.name === ownedBy;
  });

  return (
    <div className="relative flex flex-col items-center justify-between w-[250px] h-[250px] bg-slate-200 rounded-3xl shadow-lg">
      <div
        className={`w-full h-[50px] rounded-t-3xl text-2xl font-bold flex items-center justify-center ${color} text-white`}
      >
        <h1 className="drop-shadow-lg">{streetName}</h1>
      </div>
      <div className="flex flex-wrap items-center justify-evenly w-[55%] h-[55%]">
        {occupied.map((player, index) => {
          return <Pawn key={index} player={player} />;
        })}
      </div>
      {buyoutPrice === null ? (
        <div className="h-[54px]"></div>
      ) : (
        <div className="flex flex-col items-center justify-evenly w-full text-white ">
          {ownedBy !== "" ? (
            <div
              className={`flex items-center justify-center p-1 w-full ${player?.color}`}
            >
              <p className="text-black text-xs">
                Property of <span className="font-semibold">{ownedBy}</span>
              </p>
              {renderRank()}
              <div className="flex items-center justify-end">{}</div>
            </div>
          ) : (
            <div className="h-[30px]"></div>
          )}
          <div
            className={`flex flex-row items-center justify-evenly w-full h-[30px] capitalize font-semibold ${
              ownedBy !== "" ? "bg-red-400" : "bg-emerald-500"
            } rounded-b-3xl`}
          >
            {ownedBy !== "" ? null : <p>Buyout: ${buyoutPrice}</p>}
            <p>Penalty: ${penalty ? Math.floor(penalty) : null}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Field;
