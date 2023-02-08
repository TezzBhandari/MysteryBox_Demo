import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Share = () => {
  const [coinIndicator, setCoinIndicator] = useState(0);
  const router = useRouter();
  const shareHandler = async () => {
    if (navigator.share) {
      navigator
        .share({
          url: "https://www.youtube.com/",
          title: "Youtube share",
        })
        .then(() => {
          localStorage.setItem(
            "session",
            JSON.stringify({ progress: coinIndicator + 10 })
          );
          setCoinIndicator((prev) => prev + 10);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Share is not suported in your browser");
    }
  };

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session !== null) {
      const data: { progress: number } = JSON.parse(session);
      setCoinIndicator(data.progress);
    } else {
      router.replace("/");
    }
  }, [router]);

  return (
    <main>
      <div className="h-20 flex items-center justify-center">
        <h1 className="font-bold text-4xl text-emerald-500">7-Eleven</h1>
      </div>
      <div className="min-h-[calc(100vh_-_80px)] flex flex-col items-center justify-center space-y-9">
        <div className="w-96 flex items-center justify-between">
          <div
            className="w-full h-4  bg-gray-300 rounded-full"
            role="progressbar"
          >
            <div
              className={`w-[${coinIndicator}%] h-full rounded-full bg-blue-500`}
            />
          </div>
          <span className="ml-2 text-blue-500 font-medium">
            {coinIndicator}%
          </span>
        </div>
        <button
          className="outline-none px-4 py-2 rounded-md bg-emerald-600 shadow-md mt-2 hover:bg-emerald-400 focus:scale-105 text-2xl font-semibold text-neutral-900 "
          onClick={shareHandler}
        >
          share
        </button>
      </div>
    </main>
  );
};

export default Share;
