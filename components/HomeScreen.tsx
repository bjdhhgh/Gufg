import React from 'react';
import { Search, Bell, Coins, CircleDot } from 'lucide-react';
import { GAMES, LIVE_STREAMS } from '../constants';
import { BottomNav } from './BottomNav';

export const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <header className="pt-10 pb-4 px-4 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center font-bold text-lg">
             N
           </div>
           <h1 className="text-xl font-bold tracking-tight">Neon<span className="text-orange-500">Stream</span></h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Search size={22} className="text-gray-300" />
          <div className="relative">
            <Bell size={22} className="text-gray-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-black"></span>
          </div>
          <div className="flex items-center gap-1 bg-neutral-800 rounded-full px-2 py-1 border border-neutral-700">
            <div className="bg-yellow-500 rounded-full p-0.5">
               <Coins size={12} className="text-black" />
            </div>
            <span className="text-xs font-bold text-yellow-400">500</span>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        
        {/* Hero Carousel */}
        <div className="px-4 mb-6">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg shadow-purple-900/20 group">
             <img src="https://picsum.photos/seed/tournament/800/400" alt="Tournament" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
             <div className="absolute bottom-4 left-4">
               <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase mb-2 inline-block">Featured</span>
               <h2 className="text-2xl font-bold leading-tight">Pro League <br/> Championship</h2>
               <p className="text-gray-300 text-xs mt-1">Watch Top Teams Battle for $1M</p>
             </div>
          </div>
        </div>

        {/* Game Categories */}
        <div className="mb-8">
           <div className="flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
             {GAMES.map((game, idx) => (
               <div key={game.id} className="flex flex-col items-center gap-2 min-w-[64px]">
                 <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 ${idx === 0 ? 'border-orange-500 bg-neutral-800' : 'border-neutral-800 bg-neutral-900'}`}>
                   {game.icon}
                 </div>
                 <span className={`text-[10px] font-medium ${idx === 0 ? 'text-white' : 'text-gray-500'}`}>{game.name}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Top Live Streams */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-lg">Top Live Streams</h3>
             <span className="text-orange-500 text-xs font-semibold">View All</span>
          </div>

          <div className="flex flex-col gap-6">
            {LIVE_STREAMS.map((stream) => (
              <div key={stream.id} className="group">
                <div className="relative rounded-xl overflow-hidden mb-3">
                  <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white">
                    {stream.viewers} watching
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <img src={stream.avatar} alt={stream.streamer} className="w-10 h-10 rounded-full border border-neutral-700" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm leading-snug line-clamp-2 mb-1">{stream.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{stream.streamer}</span>
                      <CircleDot size={4} fill="currentColor" />
                      <span className="text-purple-400">{stream.game}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
};