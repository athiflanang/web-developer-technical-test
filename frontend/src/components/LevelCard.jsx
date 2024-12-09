import { LockIcon, Crown } from "lucide-react";

export default function LevelCard() {
  return (
    <>
      <div>
        <div className="w-full max-w-md px-10 py-3 bg-white rounded-lg shadow-md mt-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-bold text-black">Your Level</h3>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-bold"
            >
              LEARN MORE
            </a>
          </div>
          <div className="flex items-center justify-items-center justify-center mb-4">
            <div className="flex items-center text-center justify-items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="relative w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                  <div className="badge badge-sm badge-success absolute -bottom-0.5 right-0 text-white w-3 h-3 p-0 flex items-center justify-center rounded-full">
                    ✓
                  </div>
                </div>
                <span className="text-xs text-black font-extrabold">
                  Silver
                </span>
              </div>
              <div className="flex-1 mx-1 h-[2px] w-[40px] bg-black rounded-md" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
                  <LockIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-gray-400 font-bold">Gold</span>
              </div>
              <div className="flex-1 mx-1 h-[2px] w-[40px] bg-black rounded-md" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <LockIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-gray-400 font-bold">
                  Platinum
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 flex flex-col items-center">
            <progress
              className="progress w-full h-2 mb-2"
              value="40"
              max="100"
            ></progress>
            <div className="text-center">
              Spend <span className="font-bold text-black">3,500,001</span> by{" "}
              <span className="font-bold text-black">23 Nov 2024</span> to reach{" "}
              <span className="font-bold text-black">Gold</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-black">Bakmi GM Points</h4>
              <p className="text-xs text-gray-400">
                <span className="font-bold">40</span> will expire on{" "}
                <a href="#" className="font-bold">
                  22 Feb 2024.{" "}
                </a>
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-600 underline font-bold"
                >
                  See Details
                </a>
              </p>
            </div>
            <span className="text-sm font-extrabold text-black">40</span>
          </div>
        </div>
      </div>
    </>
  );
}
