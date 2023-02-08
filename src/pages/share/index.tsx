import { useState } from "react";

const Share = () => {
  const [progress, setProgress] = useState(100);
  const shareHandler = async () => {
    if (navigator.canShare()) {
      navigator
        .share({
          url: "https://www.youtube.com/",
          title: "Youtube share",
        })
        .then(() => {
          setProgress((prev) => prev + 10);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Share is not suported in your browser");
    }
  };

  return (
    <main>
      <div className="border border-emerald-400 h-20 flex items-center justify-center">
        <h1 className="font-bold text-4xl text-emerald-500">7-Eleven</h1>
      </div>
      <div className="min-h-[calc(100vh_-_80px)] flex items-center justify-center">
        <div className="w-96 border border-red-500 flex items-center justify-between">
          <div
            className="w-full h-4  bg-gray-300 rounded-full"
            role="progressbar"
          >
            <div
              className={`w-[${progress}%] h-full rounded-full bg-blue-500`}
            />
          </div>
          <span className="ml-2 text-blue-500 font-medium">{progress}%</span>
        </div>
        <button onClick={shareHandler}>share</button>
      </div>
    </main>
  );
};

export default Share;
