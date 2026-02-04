
import React, { useState } from 'react';
import { PageType } from './types';

interface MagazinePreviewProps {
  page: PageType;
}

const MagazinePreview: React.FC<MagazinePreviewProps> = ({ page }) => {
  const [countsChecked, setCountsChecked] = useState<number[]>([]);
  const [bringChecked, setBringChecked] = useState<number[]>([]);

  const toggleCounts = (idx: number) => {
    setCountsChecked(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const toggleBring = (idx: number) => {
    setBringChecked(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const disclaimer = "This guide is for general education only and is not medical advice, diagnosis, or treatment. If you are worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.";

  const containerClass = "w-[896px] mx-auto bg-white shadow-[0_32px_64px_-16px_rgba(93,82,118,0.15)] rounded-[2.5rem] overflow-hidden border border-[#7A6E94]/10 p-24 relative";

  if (page === 'PAGE_1') {
    return (
      <div className={containerClass}>
        <div className="mb-14 text-center italic text-[#7A6E94]/50 text-[11px] tracking-wide max-w-lg mx-auto leading-relaxed">
          {disclaimer}
        </div>

        <header className="text-center mb-20">
          <h1 className="font-serif text-[#5D5276] leading-none mb-6">
            <span className="block text-7xl mb-4 tracking-tight">Irregular Periods</span>
            <span className="block text-3xl text-[#7A6E94]/70 italic font-light tracking-normal">A Quick Clarity Guide + Tracker</span>
          </h1>
          <div className="h-px w-24 bg-[#98DDC8] mx-auto mb-8"></div>
          <p className="text-[#7A6E94] text-xl font-medium italic max-w-xl mx-auto leading-relaxed">
            Understanding common reasons your cycle might feel off—and exactly what to track before your next check-in.
          </p>
        </header>

        <section className="mb-24">
          <h2 className="font-serif text-4xl text-[#5D5276] mb-12 text-center">Is your period irregular?</h2>
          <ul className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
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
                className={`flex items-start gap-4 text-sm p-5 rounded-2xl border transition-all cursor-pointer ${
                  countsChecked.includes(idx) 
                    ? 'bg-[#98DDC8]/10 border-[#98DDC8]' 
                    : 'bg-[#F8F8FA] border-[#7A6E94]/5 hover:shadow-md'
                }`}
              >
                <div className={`w-5 h-5 rounded-full shrink-0 mt-0.5 border-2 flex items-center justify-center ${
                  countsChecked.includes(idx) ? 'bg-[#98DDC8] border-[#98DDC8]' : 'border-[#7A6E94]/20'
                }`}>
                  {countsChecked.includes(idx) && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="font-medium leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-4xl text-[#5D5276] mb-16 text-center">Common Patterns</h2>
          <div className="grid grid-cols-2 gap-10">
            {[
              { title: "Stress", phrase: "Brain-Body Interference", why: "Stress can disrupt the signals from the brain that tell your ovaries to release an egg." },
              { title: "PCOS", phrase: "Hormone Patterns", why: "Characterized by irregular ovulation or higher levels of androgens like testosterone." },
              { title: "Thyroid", phrase: "The Internal Tempo", why: "Thyroid hormones influence the pace of your metabolism and reproductive signals." },
              { title: "Weight Shift", phrase: "Energy Signals", why: "Sudden body fat changes can shift the hormonal balance needed for regular cycles." }
            ].map((reason, idx) => (
              <div key={idx} className="bg-[#F8F8FA] p-8 rounded-[2.5rem] border border-[#7A6E94]/5 hover:-translate-y-1 transition-transform">
                <h3 className="font-serif text-2xl text-[#5D5276] mb-1">{reason.title}</h3>
                <p className="text-[#98DDC8] text-[9px] font-black uppercase tracking-widest mb-6">{reason.phrase}</p>
                <p className="text-xs leading-relaxed text-[#7A6E94]">{reason.why}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <header className="mb-16">
        <h2 className="font-serif text-5xl text-[#5D5276] mb-4">3-Month Tracker</h2>
        <div className="h-1 w-16 bg-[#98DDC8] mb-6"></div>
        <p className="text-[#7A6E94] text-lg max-w-md italic leading-relaxed">Fill this out to give your clinician a clear picture of your recent history.</p>
      </header>
      
      <div className="bg-[#F8F8FA] rounded-[2.5rem] p-10 border border-[#7A6E94]/5 mb-16">
        <div className="grid grid-cols-6 gap-4 text-[9px] font-black text-[#7A6E94] uppercase tracking-widest mb-8 border-b border-[#7A6E94]/10 pb-4">
          <div>Start Date</div>
          <div>Length</div>
          <div>Flow</div>
          <div>Spotting</div>
          <div>Pain</div>
          <div>Notes</div>
        </div>
        {[1, 2, 3].map(row => (
          <div key={row} className="grid grid-cols-6 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6].map(col => (
              <div key={col} className="h-12 bg-white rounded-xl border border-[#7A6E94]/10 shadow-sm" />
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-10">
          <h3 className="font-serif text-3xl text-[#5D5276]">Appointment Checklist</h3>
          <ul className="space-y-4">
            {[
              "Last 3 cycle start dates",
              "Average bleeding duration",
              "New pain or nausea",
              "Recent weight/stress changes",
              "Birth control history"
            ].map((item, idx) => (
              <li 
                key={idx} 
                onClick={() => toggleBring(idx)}
                className={`flex items-center gap-4 text-sm font-medium p-4 rounded-2xl cursor-pointer border transition-all ${
                  bringChecked.includes(idx) ? 'bg-[#98DDC8]/10 border-[#98DDC8]' : 'bg-white border-[#7A6E94]/5'
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 transition-all ${
                  bringChecked.includes(idx) ? 'bg-[#98DDC8] border-[#98DDC8]' : 'border-[#7A6E94]/20'
                }`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <h3 className="font-serif text-3xl text-[#5D5276]">Clinician Questions</h3>
          <div className="bg-[#7A6E94]/5 rounded-[2.5rem] p-10 space-y-6">
            {[
              "Could this be related to my thyroid?",
              "What criteria are used to diagnose PCOS?",
              "Would a pelvic ultrasound be appropriate?",
              "When should I follow up if this persists?"
            ].map((q, idx) => (
              <p key={idx} className="text-sm font-medium text-[#5D5276] italic border-b border-[#7A6E94]/10 pb-4 last:border-0 last:pb-0">
                "{q}"
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePreview;

