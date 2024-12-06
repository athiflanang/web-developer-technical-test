import { LockIcon, Crown } from "lucide-react";

export default function LevelCard() {
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-black">Your Level</h3>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
          >
            LEARN MORE
          </a>
        </div>
        <div className="flex items-center justify-items-center justify-center mb-4">
          <div className="flex items-center text-center justify-items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <Crown className="w-6 h-6 text-gray-600" />
                <div className="badge badge-lg badge-success absolute -bottom-1 right-0 text-white w-4 h-4 p-0 flex items-center justify-center rounded-full">
                  ✓
                </div>
              </div>
              <span className="text-sm text-gray-600">Silver</span>
            </div>
            <div className="flex-1 mx-2 h-[4px] w-[80px] bg-gray-200" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <LockIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-sm text-gray-600">Gold</span>
            </div>
            <div className="flex-1 mx-2 h-[4px] w-[80px] bg-gray-200" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <LockIcon className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-sm text-gray-400">Platinum</span>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-4 flex flex-col items-start">
          <progress
            className="progress w-100 h-2 mb-2"
            value="40"
            max="100"
          ></progress>
          <div className="text-left">
            Spend <span className="font-semibold">3,500,001</span> by{" "}
            <span className="font-semibold">23 Nov 2024</span> to reach{" "}
            <span className="font-semibold">Gold</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="space-y-1">
            <h4 className="font-semibold">Bakmi GM Points</h4>
            <p className="text-sm text-gray-500">
              40 will expire on{" "}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                22 Feb 2024. See Details
              </a>
            </p>
          </div>
          <span className="text-2xl font-bold text-indigo-600">40</span>
        </div>
      </div>
    </>
  );
}
