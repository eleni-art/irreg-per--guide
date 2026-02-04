
import React, { useState, useEffect, useRef } from 'react';
import MagazinePreview from './MagazinePreview';
import { PageType } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('PAGE_1');
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetWidth = 920; 

  useEffect(() => {
    const handleResize = () => {
      const availableWidth = window.innerWidth - 32; 
      const newScale = Math.min(1, availableWidth / targetWidth);
      setScale(newScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Use scrollHeight to ensure we capture the full content including sources
        setContentHeight(entry.target.scrollHeight);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA] overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#7A6E94]/10 px-10 py-5 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#5D5276] rounded-[12px] flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">W</div>
          <div>
            <h1 className="font-serif text-xl font-black text-[#5D5276] leading-none text-left tracking-tight italic">Wellness</h1>
            <p className="text-[10px] text-[#7A6E94] uppercase tracking-[0.4em] font-black mt-1.5 text-left opacity-70">Guide Edition</p>
          </div>
        </div>

        <nav className="flex gap-2 bg-[#F8F8FA] p-1.5 rounded-2xl border border-[#7A6E94]/10 shadow-inner">
          <button 
            onClick={() => setActivePage('PAGE_1')}
            className={`px-8 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activePage === 'PAGE_1' ? 'bg-white text-[#5D5276] shadow-lg border border-[#7A6E94]/10' : 'text-[#7A6E94] hover:bg-white/50'}`}
          >
            Page 1: The Guide
          </button>
          <button 
            onClick={() => setActivePage('PAGE_2')}
            className={`px-8 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activePage === 'PAGE_2' ? 'bg-white text-[#5D5276] shadow-lg border border-[#7A6E94]/10' : 'text-[#7A6E94] hover:bg-white/50'}`}
          >
            Page 2: The Tracker
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center py-16 px-8">
        <div 
          className="flex justify-center w-full"
          style={{ 
            height: `${contentHeight * scale}px`,
            transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div 
            ref={contentRef}
            className="animate-in fade-in zoom-in-95 duration-700 ease-out"
            style={{ 
              width: `${targetWidth}px`,
              transform: `scale(${scale})`, 
              transformOrigin: 'top center',
              flexShrink: 0
            }}
          >
            <MagazinePreview page={activePage} />
          </div>
        </div>
      </main>

      <footer className="py-16 px-10 text-center border-t border-[#7A6E94]/10 bg-white">
        <p className="text-[#7A6E94] text-[11px] font-black uppercase tracking-[0.5em] mb-4 opacity-40 italic">
          Wellness Magazine Workspace &copy; 2024
        </p>
      </footer>
    </div>
  );
};

export default App;




