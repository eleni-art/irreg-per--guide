
import React, { useState } from 'react';

const CopyViewer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullMarkdown = `
# Irregular Periods
## Quick Clarity Guide + Tracker

Irregular periods are super common and there are a bunch of overlapping reasons they can happen. The goal of this guide is to help you notice patterns, track what matters, and know when to get checked. It is not to diagnose you.

--- PAGE 1 ---

**DISCLAIMER:** This guide is for general education only and is not medical advice, diagnosis, or treatment. 

## What counts as an irregular period?
* Periods fewer than 21 or more than 35 days apart.
* Missing three or more periods in a row.
* Bleeding much heavier or lighter than usual.
* Periods lasting longer than seven days.
* Cycle length changing significantly month to month.

## 4 Common Reasons
1. **Stress**: Can mess with your ovulation signals.
2. **PCOS**: Hormonal patterns affecting ovulation.
3. **Thyroid**: Tempo setter for the metabolic body.
4. **Weight Shift**: Body fat changes shift energy signals.

--- PAGE 2 ---

## 3 Month Cycle Tracker
(Space for: Date, Length, Flow, Spotting, Pain, Notes)

## Appointment Checklist
* Last 3 cycle start dates
* Average bleeding duration
* New pain or nausea
* Recent weight/stress changes
* Birth control history
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border border-[#7A6E94]/20 rounded-3xl p-8 shadow-sm">
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
      <pre className="bg-[#F8F8FA] p-6 rounded-2xl overflow-auto max-h-[600px] text-xs leading-relaxed text-[#5D5276] border border-[#7A6E94]/10">
        {fullMarkdown.trim()}
      </pre>
    </div>
  );
};

export default CopyViewer;

