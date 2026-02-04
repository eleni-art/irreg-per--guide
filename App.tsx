
import React, { useState } from 'react';
import MagazinePreview from './components/MagazinePreview';
import CopyViewer from './components/CopyViewer';
import VeoStudio from './components/VeoStudio';
import { PageType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'layout' | 'copy' | 'veo'>('layout');
  const [activePage, setActivePage] = useState<PageType>('PAGE_1');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#F8F8FA]/80 backdrop-blur-md border-b border-[#7A6E94]/20 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7A6E94] rounded-full flex items-center justify-center text-[#F8F8FA]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-[#5D5276]">Wellness Studio</h1>
            <p className="text-xs text-[#7A6E94] uppercase tracking-widest">Layout + Copy Assistant</p>
          </div>
        </div>

        <nav className="flex bg-[#F8F8FA] p-1 rounded-xl shadow-inner border border-[#7A6E94]/10">
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'layout' ? 'bg-[#7A6E94] text-[#F8F8FA] shadow-sm' : 'text-[#7A6E94] hover:bg-[#7A6E94]/10'
            }`}
          >
            Magazine Preview
          </button>
          <button
            onClick={() => setActiveTab('copy')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'copy' ? 'bg-[#7A6E94] text-[#F8F8FA] shadow-sm' : 'text-[#7A6E94] hover:bg-[#7A6E94]/10'
            }`}
          >
            Markdown Copy
          </button>
          <button
            onClick={() => setActiveTab('veo')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'veo' ? 'bg-[#98DDC8] text-[#5D5276] shadow-sm' : 'text-[#7A6E94] hover:bg-[#98DDC8]/20'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Veo Animate
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 md:px-12">
        {activeTab === 'layout' && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setActivePage('PAGE_1')}
                className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-tighter border transition-all ${activePage === 'PAGE_1' ? 'bg-[#7A6E94] text-[#F8F8FA] border-[#7A6E94]' : 'border-[#7A6E94]/30 text-[#7A6E94]'}`}
              >
                Page 1: Overview
              </button>
              <button 
                onClick={() => setActivePage('PAGE_2')}
                className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-tighter border transition-all ${activePage === 'PAGE_2' ? 'bg-[#7A6E94] text-[#F8F8FA] border-[#7A6E94]' : 'border-[#7A6E94]/30 text-[#7A6E94]'}`}
              >
                Page 2: Tools & Safety
              </button>
            </div>
            <MagazinePreview page={activePage} />
          </div>
        )}

        {activeTab === 'copy' && <CopyViewer />}
        
        {activeTab === 'veo' && <VeoStudio />}
      </main>

      <footer className="py-8 px-6 text-center border-t border-[#7A6E94]/10">
        <p className="text-[#7A6E94] text-xs font-medium uppercase tracking-widest">
          Educational info only — not medical advice.
        </p>
      </footer>
    </div>
  );
};

export default App;
