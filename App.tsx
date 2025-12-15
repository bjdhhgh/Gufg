import React from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { HomeScreen } from './components/HomeScreen';
import { LiveScreen } from './components/LiveScreen';
import { RewardsScreen } from './components/RewardsScreen';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-20 px-4 overflow-x-auto">
      
      {/* Introduction / Header for the presentation */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">High Fidelity UI Design</span>
        <h1 className="text-5xl font-black mb-4 tracking-tight">Neon<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Stream</span> Platform</h1>
        <p className="text-gray-400">
          A next-generation immersive game streaming experience featuring dark aesthetics, 
          live interactions, and gamified rewards.
        </p>
      </div>

      {/* The Three Screens Container */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-16 lg:gap-12 w-full max-w-[1400px]">
        
        {/* Screen 1: Home Feed */}
        <div className="transform hover:-translate-y-2 transition duration-500 ease-out">
          <PhoneFrame title="Home Feed">
            <HomeScreen />
          </PhoneFrame>
        </div>

        {/* Screen 2: Live View */}
        <div className="transform lg:translate-y-12 hover:translate-y-10 transition duration-500 ease-out z-10">
          <PhoneFrame title="Live Viewing">
            <LiveScreen />
          </PhoneFrame>
        </div>

        {/* Screen 3: Rewards Hub */}
        <div className="transform hover:-translate-y-2 transition duration-500 ease-out">
          <PhoneFrame title="Contests & Rewards">
            <RewardsScreen />
          </PhoneFrame>
        </div>
      
      </div>

      {/* Footer Info */}
      <div className="mt-24 text-center text-gray-600 text-xs">
        <p>Designed with Tailwind CSS & React. Images via Picsum.</p>
      </div>
    </div>
  );
};

export default App;