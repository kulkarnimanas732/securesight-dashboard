import Navbar from './components/Navbar';
import IncidentPlayer from './components/IncidentPlayer';
import IncidentList from './components/IncidentList';
import ControlBar from './components/ControlBar';
import TimelineWidget from './components/TimelineWidget';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="top-[76px] h-[820px] p-[24px] flex flex-col gap-[24px] bg-[#0E0E0E] max-w-[1368px] mx-auto">
       
        <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] w-full flex-1 overflow-hidden">
          <div className="w-full md:w-[796px] h-[300px] md:h-[449px]">
            <IncidentPlayer />
          </div>
          <div className="w-full md:w-[572px] h-[300px] md:h-[450px] overflow-auto md:overflow-visible">
            <IncidentList />
          </div>
        </div>

        <div className="w-full h-[298px] flex flex-col gap-[8px] justify-center items-center">
          <div className="h-[64px] w-full max-w-[1368px]">
            <ControlBar />
          </div>
          <div className="flex-1 w-full  overflow-hidden">
            <TimelineWidget />
          </div>
        </div>
      </main>
    </>
  );
}
