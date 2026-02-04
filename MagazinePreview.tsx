
import React from 'react';
import { PageType } from '../types';

interface MagazinePreviewProps {
  page: PageType;
}

const MagazinePreview: React.FC<MagazinePreviewProps> = ({ page }) => {
  const disclaimer = "This guide is for general education only and is not medical advice, diagnosis, or treatment. If you’re worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.";

  if (page === 'PAGE_1') {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-12 md:p-20 relative">
        {/* Top Disclaimer */}
        <div className="mb-12 text-center italic text-[#7A6E94]/60 text-xs">
          {disclaimer}
        </div>

        {/* Title Section */}
        <header className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#5D5276] leading-tight mb-4">
            Irregular Periods: Quick Clarity Guide + Tracker
          </h1>
          <p className="text-[#7A6E94] text-lg font-medium italic max-w-2xl mx-auto">
            A calm, big-sister overview of common reasons your cycle might feel off — and what info to track before you spiral.
          </p>
        </header>

        {/* Intro Section */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <p className="text-xl text-[#5D5276] leading-relaxed">
            “Irregular periods are super common, and there are a bunch of overlapping reasons they can happen. This guide won’t diagnose you — it’ll help you notice patterns, track what matters, and know when to get checked.”
          </p>
        </div>

        {/* What Counts Section */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl text-[#5D5276] mb-6 text-center">What counts as an irregular period?</h2>
          <p className="text-center mb-10 text-[#7A6E94]">If you’re wondering ‘does this count?’ here are the common signs.</p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Periods that come fewer than 21 days apart or more than 35 days apart.",
              "Missing three or more periods in a row.",
              "Bleeding that’s much heavier or lighter than your usual.",
              "Periods that last longer than seven days.",
              "Cycle length that changes a lot month-to-month.",
              "Periods with severe pain/cramping, nausea, or vomiting.",
              "Spotting/bleeding between periods, after sex, or after menopause.",
              "Soaking through one or more tampons or pads in an hour."
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#5D5276]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#98DDC8] shrink-0 mt-1.5" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-center mt-10 text-xs font-semibold uppercase tracking-widest text-[#98DDC8]">
            “One weird cycle happens. Patterns are what matter.”
          </p>
        </section>

        {/* 8 Common Reasons Grid */}
        <section>
          <h2 className="font-serif text-3xl text-[#5D5276] mb-12 text-center">Common Patterns & Reasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReasonCard 
              title="Menarche" 
              phrase="Your cycle is basically learning the routine."
              why="In the first few years, ovulation and hormones can be inconsistent while the body matures."
              notice={["Unpredictable timing", "Skipped months", "Lighter or heavier flow"]}
              track={["Cycle dates", "Bleeding days", "Heaviness"]}
            />
            <ReasonCard 
              title="Perimenopause" 
              phrase="Your hormones are shifting — and your calendar gets messy."
              why="Ovulation becomes less consistent as estrogen/progesterone fluctuate."
              notice={["Cycles get shorter or longer", "Skipped periods", "New spotting"]}
              track={["Cycle length", "Bleeding pattern changes", "Bleeding after sex"]}
            />
            <ReasonCard 
              title="Stress" 
              phrase="Stress can mess with your ovulation signals."
              why="Stress hormones can disrupt the brain–ovary communication that supports regular ovulation."
              notice={["Delayed periods", "Skipped cycles", "Mood shifts"]}
              track={["Sleep", "Major life events", "Mood shifts"]}
            />
            <ReasonCard 
              title="Weight Change" 
              phrase="Your cycle notices big body changes."
              why="Sudden changes in energy availability and body fat can shift reproductive hormones."
              notice={["Missed periods", "Longer cycles", "Lighter bleeding"]}
              track={["Timing of weight change", "Appetite", "Training load"]}
            />
            <ReasonCard 
              title="Thyroid Issues" 
              phrase="The thyroid is like the body’s tempo-setter."
              why="Thyroid hormones influence metabolism and can affect reproductive hormones and bleeding patterns."
              notice={["Unusual fatigue", "Heat/cold intolerance", "Hair/skin changes", "Anxiety"]}
              track={["Cycle changes", "New energy symptoms"]}
            />
            <ReasonCard 
              title="Birth Control" 
              phrase="Your lining + ovulation may change depending on the method."
              why="Some methods thin the uterine lining, affect ovulation, or change bleeding patterns during adjustment."
              notice={["Spotting", "Lighter bleeding", "Missed withdrawal bleeds"]}
              track={["Method", "Start/stop dates", "Spotting days"]}
            />
            <ReasonCard 
              title="Intense Exercise" 
              phrase="If training goes up and fuel don't match, cycles can disappear."
              why="High training + low fuel can reduce the hormone signals needed for regular ovulation."
              notice={["Longer cycles", "Missed periods", "More injuries"]}
              track={["Training volume", "Rest days", "Nutrition consistency"]}
            />
            <ReasonCard 
              title="PCOS" 
              phrase="PCOS is usually about patterns — not just 'cysts.'"
              why="Typically diagnosed with 2 of 3: irregular cycles, higher androgens (acne/hair), or polycystic ovaries on ultrasound."
              notice={["Long cycles", "Acne", "Excess hair growth", "Scalp hair thinning"]}
              track={["Cycle length", "Acne/hair changes", "Prior lab notes"]}
            />
          </div>
          
          <p className="text-center mt-12 text-[#7A6E94] italic text-sm">
            “Many of these overlap. Tracking helps you and your clinician connect the dots faster.”
          </p>

          <div className="mt-12 bg-[#98DDC8]/20 border border-[#98DDC8] rounded-2xl p-6 text-center">
            <h4 className="font-bold text-[#5D5276] uppercase tracking-widest text-xs mb-2">Quick Next Step</h4>
            <p className="text-[#5D5276]">If this has been going on for 3+ months, or your bleeding is intense, it’s worth checking in. You deserve peace of mind.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-12 md:p-20">
      <h2 className="font-serif text-3xl text-[#5D5276] mb-8">3-Month Cycle Tracker</h2>
      <p className="text-[#7A6E94] mb-6">Bring this to your appointment for clearer communication.</p>
      
      {/* Tracker Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#7A6E94]/20 text-[#7A6E94] font-semibold uppercase tracking-tighter">
              <th className="py-3 px-2">Start Date</th>
              <th className="py-3 px-2">Length</th>
              <th className="py-3 px-2">Flow</th>
              <th className="py-3 px-2">Spot?</th>
              <th className="py-3 px-2">Pain (0-10)</th>
              <th className="py-3 px-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(row => (
              <tr key={row} className="border-b border-[#7A6E94]/5 h-16">
                <td className="py-3 px-2" />
                <td className="py-3 px-2" />
                <td className="py-3 px-2" />
                <td className="py-3 px-2" />
                <td className="py-3 px-2" />
                <td className="py-3 px-2" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-[#7A6E94] italic text-xs mb-16">“Even messy notes are helpful — perfection not required.”</p>

      {/* Appointment Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl text-[#5D5276] mb-6">What to bring / know</h3>
          <ul className="space-y-3">
            {[
              "Last 3 cycle start dates",
              "Days you bleed",
              "If you're soaking pads/tampons quickly",
              "Spotting between periods",
              "Any new pain/vomiting",
              "Recent stress/illness/weight change",
              "Birth control start/stop dates",
              "Pregnancy possibility"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-[#5D5276]">
                <div className="w-4 h-4 rounded border border-[#7A6E94]/30" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#5D5276] mb-6">Questions to ask</h3>
          <ul className="space-y-2 text-xs text-[#5D5276] leading-relaxed">
            <li>• "Could pregnancy be a factor here?"</li>
            <li>• "Does my pattern suggest I'm not ovulating?"</li>
            <li>• "Should we consider thyroid screening?"</li>
            <li>• "Are there other causes to rule out?"</li>
            <li>• "Criteria used to assess PCOS if it's a possibility?"</li>
            <li>• "Would labs be helpful in my case?"</li>
            <li>• "What symptoms mean I follow up sooner?"</li>
          </ul>
        </div>
      </div>

      {/* Safety Boxes */}
      <div className="space-y-6 mb-16">
        <div className="bg-[#98DDC8]/20 border border-[#98DDC8] rounded-2xl p-6">
          <h4 className="font-bold text-[#5D5276] mb-4">Book an appointment if...</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#5D5276]">
            <li>• Missed 3 periods in a row</li>
            <li>• Cycle stays &lt;21 or &gt;35 days</li>
            <li>• Bleeding &gt;7 days often</li>
            <li>• Severe or worsening pain</li>
          </ul>
        </div>
        <div className="bg-[#7A6E94]/10 border border-[#7A6E94] rounded-2xl p-6">
          <h4 className="font-bold text-[#5D5276] mb-4">Seek urgent care now if...</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#5D5276]">
            <li>• Soaking 1 pad/hr for several hours</li>
            <li>• Faint, chest pain, or too weak to stand</li>
            <li>• Fever + pelvic pain</li>
            <li>• Pregnancy possibility + heavy bleeding</li>
          </ul>
        </div>
      </div>

      {/* Citations */}
      <footer className="pt-12 border-t border-[#7A6E94]/10">
        <h4 className="font-bold text-xs uppercase tracking-widest text-[#7A6E94] mb-6">Reputable Sources</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] text-[#7A6E94]/80">
          <p>ACOG (irregular bleeding)</p>
          <p>Mayo Clinic (irregular periods overview)</p>
          <p>NHS (heavy menstrual bleeding)</p>
          <p>CDC (PCOS overview)</p>
          <p>Office on Women’s Health (PCOS)</p>
          <p>Endocrine Society (thyroid / PCOS)</p>
          <p>Cleveland Clinic (menstrual health)</p>
          <p>WHO (menstrual health overview)</p>
        </div>
        <div className="mt-12 text-center italic text-[#7A6E94]/60 text-[10px]">
          {disclaimer}
        </div>
      </footer>
    </div>
  );
};

const ReasonCard: React.FC<{
  title: string;
  phrase: string;
  why: string;
  notice: string[];
  track: string[];
}> = ({ title, phrase, why, notice, track }) => (
  <div className="bg-[#F8F8FA] rounded-3xl p-6 border border-[#7A6E94]/5 hover:shadow-lg transition-shadow">
    <h3 className="font-serif text-xl text-[#5D5276] mb-1">{title}</h3>
    <p className="text-[#98DDC8] text-xs font-bold uppercase tracking-widest mb-4">{phrase}</p>
    <div className="space-y-3">
      <div>
        <h4 className="text-[10px] uppercase font-bold text-[#7A6E94]">Why it happens</h4>
        <p className="text-sm text-[#5D5276] leading-snug">{why}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-[10px] uppercase font-bold text-[#7A6E94]">Notice</h4>
          <ul className="text-[10px] text-[#5D5276] space-y-1">
            {notice.map((n, idx) => <li key={idx}>• {n}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase font-bold text-[#7A6E94]">Track</h4>
          <ul className="text-[10px] text-[#5D5276] space-y-1">
            {track.map((t, idx) => <li key={idx}>• {t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MagazinePreview;
