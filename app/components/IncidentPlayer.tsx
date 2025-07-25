'use client';

import Image from 'next/image';

const IncidentPlayer = () => {
  return (
    <div className="relative w-full md:w-[796px] h-[300px] md:h-[449px] bg-black rounded-xl overflow-hidden">
  
  <Image
    src="/Screenshot 2025-07-10 at 7.09.09 PM 1.png"
    alt="Incident Footage"
    fill
    className="object-cover rounded-xl"
    priority
  />


  <div className="absolute top-2 left-2 w-[80%] md:w-auto">
    <Image
      src="/badge/Badge.png"
      alt="Timestamp"
      width={141}
      height={20}
      className="w-full md:w-auto h-auto"
    />
  </div>

 
  <div className="absolute bottom-2 left-2 w-[50%] md:w-auto">
    <Image
      src="/badge/Badge (1).png"
      alt="Camera Badge"
      width={120}
      height={28}
      className="w-full md:w-auto h-auto"
    />
  </div>

  
  <div className="absolute bottom-2 right-2 flex gap-2">
    <div className="relative w-[100px] md:w-[120px] h-[70px] md:h-[84px] rounded overflow-hidden">
      <Image
        src="/badge/Camera overlay.png"
        alt="Thumbnail 1"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-[100px] md:w-[120px] h-[70px] md:h-[84px] rounded overflow-hidden">
      <Image
        src="/badge/Camera overlay (1).png"
        alt="Thumbnail 2"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

    
  );
};

export default IncidentPlayer;
