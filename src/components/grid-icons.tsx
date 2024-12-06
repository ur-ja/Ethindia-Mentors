import React from "react";
import Image from "next/image";
import Dice from "../../public/dice.svg";
import Flower from "../../public/flower.svg";
import Ladder from "../../public/ladder.svg";
import Snake from "../../public/snake.svg";

function GridIcons() {
  return (
    <div className="absolute inset-0">
      <Image src={Dice} alt="Dice" className="absolute top-[20%] left-[20%]" />
      <Image src={Dice} alt="Dice" className="absolute top-[40%] right-[30%]" />
      <Image
        src={Dice}
        alt="Dice"
        className="absolute bottom-[30%] left-[25%]"
      />
      <Image
        src={Snake}
        alt="Snake"
        className="absolute top-[30%] right-[15%]"
      />
      <Image
        src={Snake}
        alt="Snake"
        className="absolute bottom-[20%] right-[20%]"
      />
      <Image
        src={Ladder}
        alt="Ladder"
        className="absolute top-[50%] left-[15%]"
      />
      <Image
        src={Ladder}
        alt="Ladder"
        className="absolute bottom-[15%] right-[10%]"
      />
      <Image
        src={Flower}
        alt="Flower"
        className="absolute top-[5%] left-[10%]"
      />
      <Image
        src={Flower}
        alt="Flower"
        className="absolute top-[5%] right-[10%]"
      />
      <Image
        src={Flower}
        alt="Flower"
        className="absolute bottom-[10%] left-[10%]"
      />
    </div>
  );
}

export default GridIcons;
