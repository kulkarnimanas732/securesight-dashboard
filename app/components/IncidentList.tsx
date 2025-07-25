'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import AlertImage from '../../public/ErrorAlert.png';
import Door from '../../public/Door.png';
import CCTV from '../../public/CCTV.png';
import Time from '../../public/Time.png';
import Arrow from '../../public/Arrow.png';
import DoorBadge from '../../public/DoorBadge.png';
import AddBadge from '../../public/AddBadge.png';
import UserSearchBadge from '../../public/UserSearchBadge.png';

type Incident = {
  id: number;
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  camera: {
    name: string;
    location: string;
  };
};

const IncidentList = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('/api/incidents?resolved=false')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIncidents(data);
  //       setLoading(false);
  //     });
  // }, []);
useEffect(() => {
  fetch('/api/incidents?resolved=false')
    .then(async (res) => {
      const text = await res.text();
      console.log("📦 Raw response:", text); // check this in browser console

      if (!text) {
        console.error('❌ Empty response!');
        throw new Error('Empty response');
      }

      try {
        const data = JSON.parse(text);
        if (Array.isArray(data)) {
          setIncidents(data);
        } else {
          console.error('❌ Not an array:', data);
          setIncidents([]);
        }
      } catch (err) {
        console.error('❌ JSON parse failed:', err);
        throw err;
      }
    })
    .catch((err) => {
      console.error('Fetch error:', err);
      setIncidents([]);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);



const handleResolve = async (id: number) => {
  try {
    await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' });

    const updated = await fetch('/api/incidents?resolved=false');

    const text = await updated.text(); // get raw text first

    if (!text) {
      console.error('Empty response from API');
      setIncidents([]);
      return;
    }

    const data = JSON.parse(text);
    if (Array.isArray(data)) {
      setIncidents(data);
    } else {
      console.error('Unexpected data format:', data);
      setIncidents([]);
    }
  } catch (err) {
    console.error('Error in handleResolve:', err);
    alert('Something went wrong. Please try again.');
  }
};

  // const handleResolve = async (id: number) => {
  //   try {
  //     await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' });
  //     const updated = await fetch('/api/incidents?resolved=false');
  //     const data = await updated.json();
  //     setIncidents(data);
  //   } catch (err) {
  //     console.error(err);
  //     alert('Something went wrong. Please try again.');
  //   }
  // };

  if (loading) return <p className="text-white">Loading incidents...</p>;

  return (
    <div className="w-full max-w-[572px] h-[450px] bg-[#131313] p-4 rounded-xl text-white overflow-y-auto overflow-x-hidden">
   
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex items-center gap-2">
          <Image src={AlertImage} alt="Alert" width={24} height={24} />
          <h2 className="text-[18px] font-semibold text-[#FAFAFA]">
            {incidents.length} Unresolved Incidents
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <Image src={DoorBadge} alt="door badge" width={20} height={20} />
            <Image src={AddBadge} alt="add badge" width={20} height={20} />
            <Image src={UserSearchBadge} alt="user badge" width={20} height={20} />
          </div>
          <div className="px-3 py-1 bg-[#0B0B0B] border border-[#404040] rounded-full text-xs text-[#D4D4D4] font-medium">
            ✅ Resolved supported
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center gap-4 px-3 py-2 bg-[#131313] rounded-[6px] w-full"
          >
          
            <div className="w-[120px] h-[67.2px] border border-white/25 rounded-[6px] overflow-hidden shrink-0">
              <Image
                src={incident.thumbnailUrl}
                alt="Thumbnail"
                width={120}
                height={67}
                className="object-cover w-full h-full"
              />
            </div>

         
            <div className="flex flex-col justify-between h-[67px] flex-grow overflow-hidden">
            
              <div className="flex items-center gap-1 text-white text-xs font-bold truncate">
                <Image src={Door} alt="Type Icon" width={12} height={12} />
                <span>{incident.type}</span>
              </div>

             
              <div className="flex items-center gap-1 text-white text-[10px] truncate">
                <Image src={CCTV} alt="Location Icon" width={10} height={10} />
                <span>{incident.camera.location}</span>
              </div>

        
              <div className="flex items-center gap-1 text-white text-[10px] font-bold truncate">
                <Image src={Time} alt="Time Icon" width={9} height={10} />
                <span>
                  {new Date(incident.tsStart).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  -{' '}
                  {new Date(incident.tsEnd).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  on {new Date(incident.tsStart).toLocaleDateString()}
                </span>
              </div>
            </div>

         
            <button
              onClick={() => handleResolve(incident.id)}
              className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-[#FFCC00] whitespace-nowrap"
            >
              Resolve
              <Image src={Arrow} alt="arrow" width={8} height={8} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentList;
