import React, { useState, useEffect } from "react";

const Game = () => {
  const [nextColor, setNextColor] = useState("#000");
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const [color4, setColor4] = useState(null);
  const [color5, setColor5] = useState(null);
  const [color6, setColor6] = useState(null);
  const [color7, setColor7] = useState(null);
  const [color8, setColor8] = useState(null);
  const [color9, setColor9] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [nextColor]);

  const checkWinner = () => {
    console.log({ color1, color2, color3 });
    if (color1 && color1 == color2 && color2 == color3) {
      alert("Game winner");
      window.location.reload();
    } else if (color4 && color4 == color5 && color5 == color6) {
      alert("Game winner");
      window.location.reload();
    } else if (color7 && color7 == color8 && color8 == color9) {
      alert("Game winner");
      window.location.reload();
    } else if (color1 && color1 == color4 && color4 == color7) {
      alert("Game winner");
      window.location.reload();
    } else if (color2 && color2 == color5 && color5 == color8) {
      alert("Game winner");
      window.location.reload();
    } else if (color3 && color3 == color6 && color6 == color9) {
      alert("Game winner");
      window.location.reload();
    } else if (color1 && color1 == color5 && color5 == color9) {
      alert("Game winner");
      window.location.reload();
    } else if (color3 && color3 == color5 && color5 == color7) {
      alert("Game winner");
      window.location.reload();
    } else if (
      color1 &&
      color2 &&
      color3 &&
      color4 &&
      color5 &&
      color6 &&
      color7 &&
      color8 &&
      color9
    ) {
      alert("Game draw");
      window.location.reload();
    }
  };

  const onButtonClick = (count) => {
    if (count == 1 && !color1) {
      setColor1(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 2 && !color2) {
      setColor2(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 3 && !color3) {
      setColor3(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 4 && !color4) {
      setColor4(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 5 && !color5) {
      setColor5(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 6 && !color6) {
      setColor6(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 7 && !color7) {
      setColor7(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 8 && !color8) {
      setColor8(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    } else if (count == 9 && !color9) {
      setColor9(nextColor);
      if (nextColor == "#000") setNextColor("#0f0");
      else setNextColor("#000");
    }
  };

  return (
    <>
      <div className="container">
        <div className="firstRow">
          <div
            className={
              (color1 == "#000" && "firstColumnBlack") ||
              (color1 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(1)}
          ></div>
          <div
            className={
              (color2 == "#000" && "firstColumnBlack") ||
              (color2 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(2)}
          ></div>
          <div
            className={
              (color3 == "#000" && "firstColumnBlack") ||
              (color3 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(3)}
          ></div>
        </div>
        <div className="firstRow">
          <div
            className={
              (color4 == "#000" && "firstColumnBlack") ||
              (color4 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(4)}
          ></div>
          <div
            className={
              (color5 == "#000" && "firstColumnBlack") ||
              (color5 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(5)}
          ></div>
          <div
            className={
              (color6 == "#000" && "firstColumnBlack") ||
              (color6 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(6)}
          ></div>
        </div>
        <div className="firstRow">
          <div
            className={
              (color7 == "#000" && "firstColumnBlack") ||
              (color7 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(7)}
          ></div>
          <div
            className={
              (color8 == "#000" && "firstColumnBlack") ||
              (color8 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(8)}
          ></div>
          <div
            className={
              (color9 == "#000" && "firstColumnBlack") ||
              (color9 == "#0f0" && "firstColumnGreen") ||
              "firstColumn"
            }
            onClick={() => onButtonClick(9)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Game;
