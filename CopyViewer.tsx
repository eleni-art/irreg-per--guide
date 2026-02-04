
import React, { useState } from 'react';

const CopyViewer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullMarkdown = `
# Irregular Periods: Quick Clarity Guide + Tracker
### A calm, big-sister overview of common reasons your cycle might feel off — and what info to track before you spiral.

“Irregular periods are super common, and there are a bunch of overlapping reasons they can happen. This guide won’t diagnose you — it’ll help you notice patterns, track what matters, and know when to get checked.”

--- PAGE 1 ---

**DISCLAIMER:** This guide is for general education only and is not medical advice, diagnosis, or treatment. If you’re worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.

## What counts as an irregular period?
If you’re wondering ‘does this count?’ here are the common signs:
* Periods that come fewer than 21 days apart or more than 35 days apart.
* Missing three or more periods in a row.
* Bleeding that’s much heavier or lighter than your usual.
* Periods that last longer than seven days.
* Cycle length that changes a lot month-to-month (for example: 28 days, then 37 days, then 29 days).
* Periods with severe pain/cramping, nausea, or vomiting.
* Spotting/bleeding between periods, after sex, or after menopause.
* Soaking through one or more tampons or pads in an hour.

*“One weird cycle happens. Patterns are what matter.”*

## 8 Common Reasons

**1. Menarche**
*Simple phrase: “Your cycle is basically learning the routine.”*
*Why:* In the first few years, ovulation and hormones can be inconsistent while the body matures.
*Notice:* unpredictable timing, skipped months, lighter or heavier flow.
*Track:* cycle dates, bleeding days, heaviness.

**2. Perimenopause / menopause transition**
*Simple phrase: “Your hormones are shifting — and your calendar gets messy.”*
*Why:* Ovulation becomes less consistent as estrogen/progesterone fluctuate.
*Notice:* cycles get shorter or longer, skipped periods, heavier or lighter bleeding, new spotting.
*Track:* cycle length, bleeding pattern changes, any new bleeding after sex.

**3. Stress**
*Simple phrase: “Stress can mess with your ovulation signals.”*
*Why:* Stress hormones can disrupt the brain–ovary communication that supports regular ovulation.
*Notice:* delayed periods, skipped cycles, spotting, PMS changes.
*Track:* sleep, major life events, illness/travel, mood shifts.

**4. Significant weight change (loss or gain)**
*Simple phrase: “Your cycle notices big body changes.”*
*Why:* Sudden changes in energy availability and body fat can shift reproductive hormones.
*Notice:* missed periods, longer cycles, lighter bleeding.
*Track:* timing of weight change vs cycle change, appetite, stress, training load.

**5. Thyroid issues**
*Simple phrase: “The thyroid is like the body’s tempo-setter.”*
*Why:* Thyroid hormones influence metabolism and can affect reproductive hormones and bleeding patterns.
*Notice:* unusual fatigue, heat/cold intolerance, hair/skin changes, heart rate changes, constipation/diarrhea, anxiety/restlessness.
*Track:* cycle changes + any of the above symptoms; note if they’re new.

**6. Birth control (starting, stopping, or switching)**
*Simple phrase: “Your lining + ovulation may change depending on the method.”*
*Why:* Some methods thin the uterine lining, affect ovulation, or change bleeding patterns during adjustment.
*Notice:* spotting, lighter bleeding, missed withdrawal bleeds, changes after stopping.
*Track:* method, start/stop dates, spotting days, heaviness, pain.

**7. Intense exercise / low energy availability**
*Simple phrase: “If training goes up and fuel/recovery don’t match, cycles can disappear.”*
*Why:* High training + low fuel can reduce the hormone signals needed for regular ovulation.
*Notice:* longer cycles, missed periods, fatigue, more injuries.
*Track:* training volume, rest days, recovery, nutrition consistency, injury patterns.

**8. PCOS (polycystic ovary syndrome)**
*Simple phrase: “PCOS is usually about irregular ovulation + hormone patterns — not just ‘cysts.’”*
*Accurate explanation:* PCOS is typically diagnosed when a clinician finds at least two of these three (after ruling out other causes): (1) irregular ovulation/cycles, (2) signs or labs of higher androgens (like acne or excess hair growth), and/or (3) polycystic-appearing ovaries on ultrasound.
*Notice:* long cycles or skipped periods, acne, excess facial/body hair growth, scalp hair thinning, weight changes, difficulty predicting ovulation.
*Track:* cycle length, acne/hair changes, weight shifts, any prior lab/ultrasound notes.

*“Many of these overlap. Tracking helps you and your clinician connect the dots faster.”*

> **QUICK NEXT STEP:** If this has been going on for 3+ months, or your bleeding is intense, it’s worth checking in. You deserve peace of mind.

--- PAGE 2 ---

## 3-Month Cycle Tracker (bring this to an appointment)

| Cycle start date | Cycle length (days) | Bleeding days | Flow (light/med/heavy) | Spotting? (Y/N) | Pain (0–10) | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

*“Even messy notes are helpful — perfection not required.”*

## What to bring / know
* The last 3 cycle start dates (or best estimate)
* How many days you bleed
* If you’re soaking pads/tampons quickly
* Any spotting between periods or after sex
* Any new/worsening pain, nausea, vomiting
* Recent stress, illness, travel, weight change, training changes
* Birth control start/stop/switch dates
* Pregnancy possibility (if relevant)

## Questions to ask
* “Could pregnancy be a factor here?”
* “Does my pattern suggest I’m not ovulating regularly?”
* “Would it make sense to consider thyroid screening?”
* “Are there other causes we should rule out based on my symptoms?”
* “If PCOS is a possibility, what criteria are you using to assess it?”
* “Would labs be helpful in my case?”
* “Would an ultrasound be useful, and what would it tell us?”
* “Should we check for anemia if my bleeding is heavy?”
* “What symptoms would mean I should follow up sooner?”
* “What’s a reasonable timeline for reassessing if this continues?”

## SAFETY CHECK

**BOOK AN APPOINTMENT IF:**
* You’ve missed 3 periods in a row (and pregnancy isn’t the reason)
* Your cycle stays <21 days or >35 days for multiple cycles
* Bleeding lasts longer than 7 days often
* You have spotting between periods or after sex repeatedly
* Pain is severe or getting worse
* Your bleeding is much heavier than your normal or you feel lightheaded/weak

**SEEK URGENT CARE NOW IF:**
* You might be pregnant and have heavy bleeding or severe one-sided pain
* You’re soaking through 1 pad or tampon per hour for several hours
* You faint, feel chest pain, or feel too weak to stand
* You have fever + pelvic pain, or feel suddenly very unwell

## Learn more (reputable sources)
* American College of Obstetricians and Gynecologists (irregular bleeding / abnormal uterine bleeding)
* Mayo Clinic (irregular periods overview)
* NHS (heavy menstrual bleeding)
* CDC (PCOS overview)
* Office on Women’s Health (PCOS + menstrual irregularity)
* Endocrine Society (thyroid + menstrual changes / PCOS resources)
* Cleveland Clinic (irregular periods / PCOS)
* WHO (menstrual health overview)

**FOOTER DISCLAIMER:** This guide is for general education only and is not medical advice, diagnosis, or treatment. If you’re worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.
Educational info only — not medical advice.

---
**INSTAGRAM CTA:** Comment ‘GUIDE’ and I’ll send it.
**CAPTION DISCLAIMER:** Educational info only — not medical advice. If symptoms are severe or persistent, talk to a healthcare professional.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#F8F8FA] border border-[#7A6E94]/20 rounded-3xl p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl text-[#5D5276]">Final Markdown Copy</h2>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            copied ? 'bg-[#98DDC8] text-[#5D5276]' : 'bg-[#7A6E94] text-[#F8F8FA] hover:bg-[#5D5276]'
          }`}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
      <pre className="bg-white p-6 rounded-2xl overflow-auto max-h-[600px] text-xs leading-relaxed text-[#5D5276] border border-[#7A6E94]/10">
        {fullMarkdown.trim()}
      </pre>
    </div>
  );
};

export default CopyViewer;
