'use client';

import Image from 'next/image';

const cameras = [
  { name: 'Camera - 01', events: [] },
  { name: 'Camera - 02', events: [] },
  { name: 'Camera - 03', events: [] },
];

const TimelineWidget = () => {
  return (
    <div className="w-full h-[246px] flex rounded-md overflow-hidden border border-neutral-800 bg-[#131313]">
      {/* Sidebar */}
      <div className="w-[180px] h-full bg-[#1E1E1E] text-white flex flex-col">
        {/* Header */}
        <div className="h-[48px] flex items-center px-2 py-[14px] bg-[#131313] text-white text-lg font-semibold border-neutral-700">
          Camera List
        </div>

        {/* Camera List Items */}
        {cameras.map((camera, idx) => (
          <div
            key={idx}
            className={`w-full h-[66px] flex items-center gap-3 px-4 text-sm ${
              idx === 0 ? 'bg-[#232323]' : 'bg-[#131313]'
            } border-b border-[#2A2A2A]`}
          >
            <Image
              src="/timeline/camera.png"
              alt="Camera Icon"
              width={16}
              height={16}
              className="opacity-100"
            />
            <span>{camera.name}</span>
          </div>
        ))}
      </div>

      {/* Timeline section */}
      <div className="w-full h-full flex flex-col">
        {/* Timeline Bar */}
        <div className="h-[48px] w-full flex items-center px-2 py-[14px] border-neutral-700">
          <div className="w-full h-[20px] flex items-center gap-[6px]">
            <Image
              src="/timeline/Timeline.png"
              alt="Timeline"
              width={1196}
              height={20}
              className="object-contain"
            />
          </div>
        </div>

        {/* Camera Rows */}
        {cameras.map((camera, idx) => (
          <div
            key={idx}
            className={`w-full h-[66px] flex items-center px-4 text-white text-sm ${
              idx === 0 ? 'bg-[#232323]' : 'bg-[#131313]'
            } ${idx !== cameras.length - 1 ? 'border-b border-neutral-800' : ''}`}
          >
            {camera.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineWidget;
