
"use client";

import Image from "next/image";

const ControlBar = () => {
  return (
    <div className="flex justify-start w-full h-[44px] px-4 py-1 bg-[#131313] rounded-[6px]">
      
      <div className="flex items-center gap-4 h-[36px]">
   
        <button className="flex items-center justify-center w-5 h-5 p-0.5 bg-[#2A2A2A] rounded-md">
          <Image src="/controlbar/Rewind.png" alt="Rewind" width={20} height={20} />
        </button>

        <button className="flex items-center justify-center w-5 h-5 p-0.5 bg-[#2A2A2A] rounded-md">
          <Image src="/controlbar/Previous.png" alt="Previous" width={20} height={20} />
        </button>

      
        <button className="flex items-center justify-center w-9 h-9 p-0.5 bg-[#2A2A2A] rounded-md">
          <Image src="/controlbar/Play.png" alt="Play" width={36} height={36} />
        </button>

      
        <button className="flex items-center justify-center w-4 h-4 p-0.5 bg-[#2A2A2A] rounded-none">
          <Image src="/controlbar/Forward.png" alt="Forward" width={16} height={16} />
        </button>

     
        <button className="flex items-center justify-center w-5 h-5 p-0.5 bg-[#2A2A2A] rounded-md">
          <Image src="/controlbar/Skip.png" alt="Skip" width={20} height={20} />
        </button>

      
        <div className="flex items-center justify-center gap-2 text-white text-xs">
          <Image src="/controlbar/Timestamp.png" alt="Timestamp" width={132} height={16} />
        </div>

       
        <div className="flex items-center gap-2">
          <span className="text-white text-xs font-sans font-normal">1x</span>
          <button className="flex items-center justify-center w-5 h-5 p-0.5 bg-[#2A2A2A] rounded-md">
            <Image src="/controlbar/Speed.png" alt="Speed" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
