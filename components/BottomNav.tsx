import React from 'react';
import { Home, PlaySquare, Plus, Trophy, User } from 'lucide-react';

export const BottomNav: React.FC<{ activeTab?: string }> = ({ activeTab = 'home' }) => {
  const getIconColor = (tabName: string) => 
    activeTab === tabName ? 'text-orange-500' : 'text-gray-500';

  return (
    <div className="absolute bottom-0 w-full h-20 bg-neutral-900/95 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-2 pb-2">
      <button className={`flex flex-col items-center gap-1 ${getIconColor('home')}`}>
        <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      
      <button className={`flex flex-col items-center gap-1 ${getIconColor('clips')}`}>
        <PlaySquare size={24} strokeWidth={activeTab === 'clips' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Clips</span>
      </button>

      {/* Center Action Button */}
      <button className="relative -top-4 bg-gradient-to-tr from-orange-500 to-purple-600 p-4 rounded-full shadow-lg shadow-orange-500/30 border-4 border-black">
        <Plus size={28} color="white" strokeWidth={3} />
      </button>

      <button className={`flex flex-col items-center gap-1 ${getIconColor('rewards')}`}>
        <Trophy size={24} strokeWidth={activeTab === 'rewards' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Rewards</span>
      </button>

      <button className={`flex flex-col items-center gap-1 ${getIconColor('profile')}`}>
        <User size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </div>
  );
};