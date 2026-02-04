
import React, { useState, useEffect, useRef } from 'react';
import MagazinePreview from './MagazinePreview';
import VeoStudio from './VeoStudio';
import CopyViewer from './CopyViewer';
import { PageType } from './types';

type ViewMode = 'READER' | 'STUDIO' | 'COPY';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('READER');
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
        setContentHeight(entry.target.scrollHeight);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [viewMode, activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA] overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#7A6E94]/10 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#5D5276] rounded-lg flex items-center justify-center text-white font-serif font-bold">W</div>
          <div>
            <h1 className="font-serif text-lg font-bold text-[#5D5276] leading-none text-left">Wellness Studio</h1>
            <p className="text-[9px] text-[#7A6E94] uppercase tracking-[0.2em] font-black mt-1 text-left">Assistant Dashboard</p>
          </div>
        </div>

        <nav className="flex gap-1 bg-[#F8F8FA] p-1 rounded-xl border border-[#7A6E94]/10">
          <button 
            onClick={() => setViewMode('READER')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${viewMode === 'READER' ? 'bg-white text-[#5D5276] shadow-sm border border-[#7A6E94]/10' : 'text-[#7A6E94] hover:bg-white/50'}`}
          >
            Magazine
          </button>
          <button 
            onClick={() => setViewMode('STUDIO')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${viewMode === 'STUDIO' ? 'bg-white text-[#5D5276] shadow-sm border border-[#7A6E94]/10' : 'text-[#7A6E94] hover:bg-white/50'}`}
          >
            Veo Studio
          </button>
          <button 
            onClick={() => setViewMode('COPY')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${viewMode === 'COPY' ? 'bg-white text-[#5D5276] shadow-sm border border-[#7A6E94]/10' : 'text-[#7A6E94] hover:bg-white/50'}`}
          >
            Copy Export
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center py-12 px-6">
        {viewMode === 'READER' && (
          <div className="flex flex-col items-center">
             <nav className="flex justify-center gap-2 mb-12 bg-white/60 p-1.5 rounded-full border border-[#7A6E94]/10 shadow-sm backdrop-blur-sm">
                <button 
                  onClick={() => setActivePage('PAGE_1')}
                  className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activePage === 'PAGE_1' ? 'bg-[#7A6E94] text-white shadow-md' : 'text-[#7A6E94] hover:bg-[#7A6E94]/5'}`}
                >
                  Page 1: The Guide
                </button>
                <button 
                  onClick={() => setActivePage('PAGE_2')}
                  className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activePage === 'PAGE_2' ? 'bg-[#7A6E94] text-white shadow-md' : 'text-[#7A6E94] hover:bg-[#7A6E94]/5'}`}
                >
                  Page 2: The Tracker
                </button>
              </nav>

              <div 
                className="flex justify-center w-full"
                style={{ 
                  height: `${contentHeight * scale}px`,
                  transition: 'height 0.3s ease-out'
                }}
              >
                <div 
                  ref={contentRef}
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
          </div>
        )}

        {viewMode === 'STUDIO' && (
          <div className="w-full max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <VeoStudio />
          </div>
        )}

        {viewMode === 'COPY' && (
          <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CopyViewer />
          </div>
        )}
      </main>

      <footer className="py-12 px-8 text-center border-t border-[#7A6E94]/10 bg-white">
        <p className="text-[#7A6E94] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          Wellness Magazine Workspace &copy; 2024
        </p>
      </footer>
    </div>
  );
};

export default App;


