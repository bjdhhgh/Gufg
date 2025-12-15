import React from 'react';
import { Trophy, Clock, CheckCircle2, Flame, Gift, ArrowRight } from 'lucide-react';
import { DAILY_TASKS, PREDICTIONS, REWARDS } from '../constants';
import { BottomNav } from './BottomNav';

export const RewardsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <header className="pt-12 pb-6 px-4 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="flex justify-between items-center mb-4">
           <div>
             <h1 className="text-2xl font-black italic tracking-wide text-white uppercase">Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">& Win</span></h1>
             <p className="text-gray-400 text-xs">Complete tasks & predict to win big!</p>
           </div>
           <div className="bg-neutral-800/80 border border-neutral-700 px-3 py-1.5 rounded-xl flex flex-col items-end">
             <span className="text-[10px] text-gray-400 font-medium">Your Balance</span>
             <span className="text-xl font-bold text-yellow-400 flex items-center gap-1">
                500 <Trophy size={14} fill="currentColor" />
             </span>
           </div>
        </div>
      </header>

      {/* Scroll Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 no-scrollbar">
        
        {/* Daily Tasks */}
        <section className="mb-8">
           <div className="flex items-center gap-2 mb-3">
             <CheckCircle2 size={18} className="text-green-400" />
             <h2 className="font-bold text-sm text-white">Daily Tasks</h2>
           </div>
           <div className="space-y-3">
             {DAILY_TASKS.map((task) => (
               <div key={task.id} className="bg-neutral-900 rounded-xl p-3 border border-neutral-800 flex items-center justify-between">
                 <div className="flex-1 mr-4">
                   <div className="flex justify-between mb-1">
                     <span className="text-xs font-semibold text-gray-200">{task.title}</span>
                     <span className="text-[10px] text-gray-400">{task.current}/{task.total}</span>
                   </div>
                   <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"
                        style={{ width: `${(task.current / task.total) * 100}%` }}
                     ></div>
                   </div>
                 </div>
                 <div className="flex items-center gap-1 bg-neutral-800 px-2 py-1 rounded text-xs font-bold text-yellow-400 border border-neutral-700">
                    +{task.reward} 
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Prediction Zone */}
        <section className="mb-8">
           <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-2">
               <Flame size={18} className="text-orange-500" />
               <h2 className="font-bold text-sm text-white">Prediction Zone</h2>
             </div>
             <span className="text-[10px] text-orange-500 font-bold">See All</span>
           </div>
           
           <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
             {PREDICTIONS.map((pred) => (
                <div key={pred.id} className="min-w-[240px] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-4 border border-neutral-700 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-2 bg-white/5 rounded-bl-xl text-[10px] font-bold text-purple-300">
                     {pred.reward}
                   </div>
                   <h3 className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wider">{pred.match}</h3>
                   <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 mb-1 mx-auto flex items-center justify-center text-[10px] font-bold">TS</div>
                        <span className="text-xs font-bold">{pred.teamA}</span>
                      </div>
                      <span className="text-gray-500 text-xs font-bold">VS</span>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 mb-1 mx-auto flex items-center justify-center text-[10px] font-bold">GL</div>
                        <span className="text-xs font-bold">{pred.teamB}</span>
                      </div>
                   </div>
                   <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white transition-colors border border-dashed border-gray-600 text-xs font-bold flex items-center justify-center gap-1">
                      Predict Now <ArrowRight size={12} />
                   </button>
                   <div className="mt-2 flex items-center gap-1 text-[9px] text-gray-500 justify-center">
                      <Clock size={10} /> {pred.time}
                   </div>
                </div>
             ))}
           </div>
        </section>

        {/* Redeem Store */}
        <section>
           <div className="flex items-center gap-2 mb-3">
             <Gift size={18} className="text-purple-500" />
             <h2 className="font-bold text-sm text-white">Redeem Store</h2>
           </div>
           <div className="grid grid-cols-2 gap-3">
              {REWARDS.map((item) => (
                <div key={item.id} className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-neutral-800">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <h4 className="text-xs font-bold truncate mb-1">{item.name}</h4>
                  <button className="w-full bg-neutral-800 py-1 rounded text-[10px] font-bold text-yellow-400 flex items-center justify-center gap-1 border border-neutral-700">
                    {item.cost} Coins
                  </button>
                </div>
              ))}
           </div>
        </section>

      </div>
      <BottomNav activeTab="rewards" />
    </div>
  );
};