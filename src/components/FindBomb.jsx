import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  var girdSize = 5;
  //total tiles
  var totalTiles = girdSize * girdSize; //25
  const [clickedTiles, setclickedTiles] = useState([]); //[0]
  const [isGameOver, setisGameOver] = useState(false);
  const [message, setmessage] = useState("find Bomb");

  const bombPosition = useMemo(() => {
    return Math.floor(Math.random() * totalTiles);
  }, []);
  console.log(bombPosition);

  const clickHandler = (index) => {
    console.log("clicked tiles", clickedTiles);
    setclickedTiles([...clickedTiles, index]); //[].[].[0]
    if (bombPosition == index) {
      setisGameOver(true);
      setmessage("Game Over..");
      //reset here...
    }
  };
  console.log(clickedTiles);

  //   const bombPosition  = Math.floor(Math.random()* totalTiles)
  //   console.log("bomb position....",bombPosition)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${girdSize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((tile, index) => {
          return (
            <div
              onClick={() => clickHandler(index)}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //backgroundColor: "white",
                backgroundColor: clickedTiles.includes(index)
                  ? "grey"
                  : "white",
                cursor: "pointer",
              }}
            >
              {isGameOver && index == bombPosition ? "💣" : index}
            </div>
          );
        })}
      </div>
      {
        isGameOver &&  <h1>SCORE = {clickedTiles.length-1}</h1>
      }
      
    </div>
  );
};
