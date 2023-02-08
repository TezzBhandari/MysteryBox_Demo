import useMysterBoxStore from "@/store";
import { useRouter } from "next/router";

export interface ModalProps {
  success: boolean;
}

const Modal = ({ success }: ModalProps) => {
  const { setOpenModal } = useMysterBoxStore();
  const router = useRouter();
  return (
    <div className="overlay absolute inset-0 z-40 flex items-center justify-center bg-[rgba(55,53,53,0.6)]">
      <div className="z-50 w-96 h-96 rounded-md bg-[#f3f3f3] shadow-3xl">
        {success ? (
          <div>
            <h1>Congratulations</h1>
            <p>You got 80% on coin indicator</p>
            <button onClick={() => router.replace("/share")}>ok</button>
          </div>
        ) : (
          <div>
            <h1>Unlucky</h1>
            <p>You have 3 chances. Try Again</p>
            <button onClick={setOpenModal}>ok</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
