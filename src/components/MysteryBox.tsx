import useMysterBoxStore from "@/store";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal";

const MysteryBox = ({ value }: { value: number }) => {
  const [status, setStatus] = useState("?");
  const { attempt, increaseAttempt, setOpenModal, draw, openModal } =
    useMysterBoxStore();
  const router = useRouter();

  return (
    <>
      <div
        className=" w-[100px] h-[100px] bg-[#f2f2f2] m-2 flex items-center justify-center shadow-md rounded-md  cursor-pointer transform hover:scale-105"
        onClick={() => {
          console.log(attempt);
          if (attempt < 3) {
            increaseAttempt();
            setOpenModal();
            setStatus("open");
            if (attempt === 2) {
              router.replace("/");
            }
          } else {
            setStatus("?");
          }
        }}
      >
        <span className="text-3xl font-bold">{status}</span>
      </div>
      {openModal && value === 9 && <Modal success={draw.includes(value)} />}
    </>
  );
};

export default MysteryBox;
