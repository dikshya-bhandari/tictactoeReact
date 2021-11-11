import React, { useState } from "react";

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

  const onButtonClick = (count) => {
    if (count == 1) {
      setColor1(nextColor);
    } else if (count == 2) {
      setColor2(nextColor);
    } else if (count == 3) {
      setColor3(nextColor);
    } else if (count == 4) {
      setColor4(nextColor);
    } else if (count == 5) {
      setColor5(nextColor);
    } else if (count == 6) {
      setColor6(nextColor);
    } else if (count == 7) {
      setColor6(nextColor);
    } else if (count == 8) {
      setColor8(nextColor);
    } else if (count == 9) {
      setColor9(nextColor);
    }

    if (nextColor == "#000") setNextColor("#0f0");
    else setNextColor("#000");
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
            onCLick={() => onButtonClick(3)}
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
