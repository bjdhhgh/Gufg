import React, { useState } from 'react';
import { UserPlus, Users, Share2, Send, Gift, Heart, X } from 'lucide-react';
import { CHAT_MESSAGES } from '../constants';

export const LiveScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'info'>('chat');

  return (
    <div className="flex flex-col h-full bg-black relative">
      {/* Video Player Area */}
      <div className="h-[45%] w-full relative bg-neutral-900">
         <img src="https://picsum.photos/seed/livegame/400/600" alt="Live Gameplay" className="w-full h-full object-cover opacity-80" />
         
         {/* Top Overlay */}
         <div className="absolute top-10 left-0 w-full px-4 flex justify-between items-start z-10">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md p-1 pr-3 rounded-full">
               <img src="https://picsum.photos/seed/mortal/50" alt="Streamer" className="w-8 h-8 rounded-full" />
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold leading-tight">Mortal Gaming</span>
                 <span className="text-[8px] text-gray-300">1.2M Followers</span>
               </div>
               <button className="ml-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                 <UserPlus size={10} /> Follow
               </button>
            </div>
            
            <div className="flex gap-2">
               <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-full text-xs font-bold">
                 <Users size={12} className="text-white" />
                 25K
               </div>
               <button className="w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                 <X size={16} className="text-white" />
               </button>
            </div>
         </div>

         {/* Share / Overlay Actions (Right Side) */}
         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="flex flex-col items-center gap-1">
               <div className="w-10 h-10 bg-neutral-800/80 backdrop-blur rounded-full flex items-center justify-center">
                  <Share2 size={18} />
               </div>
               <span className="text-[10px] font-medium shadow-black drop-shadow-md">Share</span>
            </button>
            <button className="flex flex-col items-center gap-1">
               <div className="w-10 h-10 bg-neutral-800/80 backdrop-blur rounded-full flex items-center justify-center text-red-500">
                  <Heart size={18} fill="currentColor" />
               </div>
               <span className="text-[10px] font-medium shadow-black drop-shadow-md">1.5M</span>
            </button>
         </div>

         {/* Bottom Overlay Gradient */}
         <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 bg-black">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex-1 py-3 text-sm font-bold relative ${activeTab === 'chat' ? 'text-white' : 'text-gray-500'}`}
        >
          Live Chat
          {activeTab === 'chat' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('info')}
          className={`flex-1 py-3 text-sm font-bold relative ${activeTab === 'info' ? 'text-white' : 'text-gray-500'}`}
        >
          Info & Squad
          {activeTab === 'info' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full"></div>}
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 relative bg-black overflow-hidden flex flex-col">
         {/* Messages */}
         <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 no-scrollbar mask-image-gradient">
            <div className="h-4"></div> {/* Spacer */}
            {CHAT_MESSAGES.map((msg) => (
              <div key={msg.id} className="flex items-start gap-2 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                <span className={`font-bold text-xs whitespace-nowrap ${msg.color}`}>{msg.user}:</span>
                <span className={`text-white/90 text-xs leading-relaxed ${msg.isSystem ? 'text-yellow-300 font-semibold' : ''}`}>{msg.text}</span>
              </div>
            ))}
            <div className="h-4"></div> {/* Spacer */}
         </div>

         {/* Input Area */}
         <div className="p-3 bg-neutral-900 border-t border-white/5 flex items-center gap-3">
            <button className="text-yellow-400 p-2 bg-yellow-400/10 rounded-full hover:bg-yellow-400/20 transition">
              <Gift size={20} />
            </button>
            <div className="flex-1 bg-black rounded-full h-10 flex items-center px-4 border border-neutral-800 focus-within:border-purple-500 transition-colors">
              <input 
                type="text" 
                placeholder="Send message..." 
                className="bg-transparent border-none outline-none text-xs text-white placeholder-gray-500 w-full"
              />
            </div>
            <button className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Send size={16} className="ml-0.5" />
            </button>
         </div>
      </div>
    </div>
  );
};