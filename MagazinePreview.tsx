
import React, { useState } from 'react';
import { PageType } from './types';

interface MagazinePreviewProps {
  page: PageType;
}

const MagazinePreview: React.FC<MagazinePreviewProps> = ({ page }) => {
  const [countsChecked, setCountsChecked] = useState<number[]>([]);
  const [bringChecked, setBringChecked] = useState<number[]>([]);
  const [trackerData, setTrackerData] = useState<string[][]>(
    Array(3).fill(null).map(() => Array(6).fill(''))
  );

  const toggleCounts = (idx: number) => {
    setCountsChecked(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const toggleBring = (idx: number) => {
    setBringChecked(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const updateTracker = (rowIdx: number, colIdx: number, val: string) => {
    const newData = [...trackerData];
    newData[rowIdx][colIdx] = val;
    setTrackerData(newData);
  };

  const disclaimer = "This guide is for general education only and is not medical advice, diagnosis, or treatment. If you are worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.";

  const containerClass = "w-[896px] mx-auto bg-white shadow-[0_40px_80px_-20px_rgba(93,82,118,0.12)] rounded-[3rem] overflow-hidden border border-[#7A6E94]/10 p-20 relative flex flex-col";

  const FooterSources = () => (
    <footer className="mt-20 pt-16 border-t border-[#7A6E94]/20 w-full">
      <h4 className="font-bold text-[12px] uppercase tracking-[0.5em] text-[#5D5276] mb-10 text-center">Reference & Support Sources</h4>
      <div className="grid grid-cols-4 gap-y-8 gap-x-6 text-[10px] text-[#7A6E94] font-black text-center uppercase tracking-widest px-4">
        <p className="bg-[#F8F8FA] py-2 rounded-lg">ACOG Guidelines</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">Mayo Clinic Editorial</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">NHS Clinical Support</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">CDC Women's Health</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">Endocrine Society</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">Office on Women’s Health</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">Cleveland Clinic</p>
        <p className="bg-[#F8F8FA] py-2 rounded-lg">WHO Framework</p>
      </div>
      <div className="mt-16 text-center italic text-[#7A6E94]/60 text-[11px] max-w-lg mx-auto leading-relaxed border-t border-[#7A6E94]/10 pt-8">
        {disclaimer}
      </div>
    </footer>
  );

  const ReasonCard: React.FC<{
    title: string;
    phrase: string;
    why: string;
  }> = ({ title, phrase, why }) => (
    <div className="bg-[#F8F8FA] rounded-[2.5rem] p-10 border border-[#7A6E94]/10 hover:bg-white hover:shadow-2xl hover:border-[#98DDC8]/40 transition-all duration-500 group flex flex-col h-full">
      <h3 className="font-serif text-3xl text-[#5D5276] mb-1 group-hover:text-[#7A6E94] transition-colors">{title}</h3>
      <p className="text-[#98DDC8] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{phrase}</p>
      <div className="flex-grow">
        <h4 className="text-[10px] uppercase font-black tracking-[0.15em] text-[#7A6E94]/50 mb-3">Mechanism</h4>
        <p className="text-[14px] text-[#5D5276] leading-relaxed font-medium">{why}</p>
      </div>
    </div>
  );

  if (page === 'PAGE_1') {
    return (
      <div className={containerClass}>
        <div className="mb-16 text-center italic text-[#7A6E94]/60 text-[11px] tracking-wide max-w-lg mx-auto leading-relaxed border border-[#7A6E94]/10 p-4 rounded-2xl bg-[#F8F8FA]/50">
          {disclaimer}
        </div>

        <header className="text-center mb-28">
          <h1 className="font-serif text-[#5D5276] leading-none mb-10">
            <span className="block text-8xl mb-6 tracking-tighter">Irregular Periods</span>
            <span className="block text-3xl text-[#7A6E94]/80 italic font-light tracking-tight">Clarity Guide + Patterns</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#98DDC8] mx-auto mb-10 rounded-full"></div>
          <p className="text-[#7A6E94] text-2xl font-medium italic max-w-2xl mx-auto leading-relaxed px-10">
            Understand exactly why your cycle might feel off—and notice the common signs of health.
          </p>
        </header>

        <section className="mb-32">
          <h2 className="font-serif text-5xl text-[#5D5276] mb-16 text-center">Is your period irregular?</h2>
          <ul className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Periods fewer than 21 or more than 35 days apart.",
              "Missing three or more periods in a row.",
              "Bleeding much heavier or lighter than usual.",
              "Periods lasting longer than seven days.",
              "Cycle length changing significantly month to month.",
              "Severe pain, cramping, nausea, or vomiting.",
              "Spotting between periods or after sex.",
              "Soaking through a pad or tampon in under an hour."
            ].map((bullet, idx) => (
              <li 
                key={idx} 
                onClick={() => toggleCounts(idx)}
                className={`flex items-start gap-5 text-[15px] p-7 rounded-[1.5rem] border transition-all duration-300 cursor-pointer select-none ${
                  countsChecked.includes(idx) 
                    ? 'bg-[#98DDC8]/10 border-[#98DDC8] shadow-sm' 
                    : 'bg-[#F8F8FA] border-[#7A6E94]/5 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className={`w-6 h-6 rounded-full shrink-0 mt-0.5 border-2 flex items-center justify-center transition-all ${
                  countsChecked.includes(idx) ? 'bg-[#98DDC8] border-[#98DDC8]' : 'border-[#7A6E94]/20 bg-white'
                }`}>
                  {countsChecked.includes(idx) && (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  )}
                </div>
                <span className="font-bold leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="font-serif text-5xl text-[#5D5276] mb-20 text-center">Common Patterns</h2>
          <div className="grid grid-cols-2 gap-10">
            <ReasonCard 
              title="Stress" 
              phrase="Brain-Body interference"
              why="Stress hormones can disrupt the communication between the brain and ovaries that supports regular ovulation."
            />
            <ReasonCard 
              title="PCOS" 
              phrase="Androgen Patterns"
              why="Usually characterized by irregular ovulation, signs of high androgens (acne, hair growth), or polycystic appearance on ultrasound."
            />
            <ReasonCard 
              title="Thyroid" 
              phrase="The Internal Tempo"
              why="Thyroid hormones set the metabolic pace. If they are too high or low, reproductive signals often get silenced or delayed."
            />
            <ReasonCard 
              title="Weight Shift" 
              phrase="Energy Availability"
              why="Sudden changes in body fat or energy availability shift the hormonal balance needed for regular cycles."
            />
            <ReasonCard 
              title="Menarche" 
              phrase="Learning the Routine"
              why="In the first few years of having a period, the reproductive system is maturing and ovulation can be inconsistent."
            />
            <ReasonCard 
              title="Perimenopause" 
              phrase="The Transition Phase"
              why="As reproductive hormones naturally fluctuate with age, cycle length and bleeding volume often shift significantly."
            />
            <ReasonCard 
              title="Birth Control" 
              phrase="Synthetic Adjustment"
              why="Methods like the pill or IUD can thin the uterine lining or suppress ovulation, leading to lighter or skipped bleeds."
            />
            <ReasonCard 
              title="Training Load" 
              phrase="Fuel vs. Recovery"
              why="Extremely high physical activity without matching nutrition can cause the body to pause non-essential systems like reproduction."
            />
          </div>
        </section>

        <FooterSources />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <header className="mb-20">
        <h2 className="font-serif text-6xl text-[#5D5276] mb-6">3-Month Tracker</h2>
        <div className="h-1.5 w-20 bg-[#98DDC8] mb-8 rounded-full"></div>
        <p className="text-[#7A6E94] text-xl max-w-lg italic leading-relaxed">
          Record your cycle history below. These inputs are fully interactive—click any field to type.
        </p>
      </header>
      
      <div className="bg-[#F8F8FA] rounded-[3rem] p-12 border border-[#7A6E94]/15 mb-20 shadow-inner">
        <div className="grid grid-cols-6 gap-6 text-[11px] font-black text-[#7A6E94] uppercase tracking-[0.2em] mb-10 border-b border-[#7A6E94]/20 pb-6 px-4">
          <div>Start Date</div>
          <div>Length</div>
          <div>Flow</div>
          <div>Spotting</div>
          <div>Pain</div>
          <div>Notes</div>
        </div>
        
        <div className="space-y-6">
          {[0, 1, 2].map(rowIdx => (
            <div key={rowIdx} className="grid grid-cols-6 gap-6">
              {[0, 1, 2, 3, 4, 5].map(colIdx => (
                <div key={colIdx} className="relative group">
                   <input 
                    type="text"
                    placeholder="..."
                    value={trackerData[rowIdx][colIdx]}
                    onChange={(e) => updateTracker(rowIdx, colIdx, e.target.value)}
                    className="w-full h-16 bg-white rounded-2xl border-2 border-[#7A6E94]/10 shadow-sm px-5 text-[15px] font-bold text-[#5D5276] focus:outline-none focus:border-[#98DDC8] focus:ring-4 focus:ring-[#98DDC8]/10 transition-all placeholder:text-[#7A6E94]/30 text-center"
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none group-hover:border-[#98DDC8]/30 transition-colors"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 mb-20">
        <div className="space-y-12">
          <h3 className="font-serif text-4xl text-[#5D5276]">Appointment Checklist</h3>
          <ul className="space-y-5">
            {[
              "Last 3 cycle start dates",
              "Average bleeding duration",
              "Soaking pads frequency",
              "New pain or nausea",
              "Birth control history"
            ].map((item, idx) => (
              <li 
                key={idx} 
                onClick={() => toggleBring(idx)}
                className={`flex items-center gap-5 text-base font-bold p-6 rounded-[1.5rem] cursor-pointer border-2 transition-all ${
                  bringChecked.includes(idx) ? 'bg-[#98DDC8]/10 border-[#98DDC8] text-[#5D5276] shadow-sm' : 'bg-white border-[#F8F8FA] text-[#7A6E94] hover:border-[#7A6E94]/10 hover:shadow-md'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                  bringChecked.includes(idx) ? 'bg-[#98DDC8] border-[#98DDC8]' : 'border-[#7A6E94]/20 bg-white'
                }`}>
                  {bringChecked.includes(idx) && (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  )}
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-12">
          <h3 className="font-serif text-4xl text-[#5D5276]">Clinician Questions</h3>
          <div className="bg-[#5D5276]/5 rounded-[2.5rem] p-12 space-y-8 border border-[#5D5276]/10">
            {[
              "Could this be related to my thyroid function?",
              "What criteria are used to evaluate PCOS here?",
              "Would a pelvic ultrasound be appropriate now?",
              "What symptoms mean I should follow up sooner?"
            ].map((q, idx) => (
              <div key={idx} className="flex gap-5 border-b border-[#5D5276]/10 pb-6 last:border-0 last:pb-0 items-start">
                <span className="text-[#98DDC8] font-black text-xs uppercase tracking-tighter mt-1">Ask</span>
                <p className="text-[16px] font-bold text-[#5D5276] italic leading-snug">
                  "{q}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterSources />
    </div>
  );
};

export default MagazinePreview;

