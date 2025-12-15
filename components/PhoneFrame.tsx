import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  title: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-xl font-bold text-gray-400 uppercase tracking-widest text-xs">{title}</h2>
      <div className="relative w-[360px] h-[780px] bg-black border-[12px] border-neutral-800 rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-neutral-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-neutral-900 rounded-b-2xl z-50 flex items-center justify-center space-x-2">
           <div className="w-10 h-1 bg-neutral-800 rounded-full"></div>
           <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
        </div>
        
        {/* Status Bar Mock */}
        <div className="absolute top-1 left-0 w-full px-6 flex justify-between text-[10px] font-bold text-white z-40">
          <span>9:41</span>
          <div className="flex space-x-1">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-black text-white overflow-hidden relative">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
      </div>
    </div>
  );
};