import { Dispatch, FC, SetStateAction, useState } from "react";
type MysteryBoxProps = {
  attempt: number;
  setAttempt: Dispatch<SetStateAction<number>>;
};
const MysteryBox: FC<MysteryBoxProps> = ({ attempt, setAttempt }) => {
  const [status, setStatus] = useState("?");
  return (
    <div
      className=" w-[100px] h-[100px] bg-[#f2f2f2] m-2 flex items-center justify-center shadow-md rounded-md  cursor-pointer transform hover:scale-105"
      onClick={() => {
        if (attempt < 3) {
          setAttempt((prev) => prev + 1);
          setStatus("open");
        } else {
          setStatus("?");
        }
      }}
    >
      <span className="text-3xl font-bold">{status}</span>
    </div>
  );
};

export default MysteryBox;
