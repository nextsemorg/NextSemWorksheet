"use client";

import React from "react";
import { WorkbookPageData } from "@/types/workbook";
import { Globe, Compass, Calendar, CheckSquare, Milestone } from "lucide-react";

interface Props {
  page: WorkbookPageData;
  studentName?: string;
  classNameStr?: string;
  rollNo?: string;
}

export default function SstPageSheet({
  page,
  studentName = "",
  classNameStr = "Class 7",
  rollNo = "",
}: Props) {
  return (
    <div className="a4-sheet bg-white text-black font-sans border-2 border-black p-6 sm:p-8 shadow-xl max-w-[850px] mx-auto my-6 print:my-0 print:border-none print:shadow-none print:p-6 print:max-w-none">
      
      {/* 1. Header Band (NextSem Academy Official Branding) */}
      <div className="border-b-2 border-black pb-2 mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nextsem_logo.png"
              alt="NextSem Logo"
              className="h-7 w-auto object-contain"
            />
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-amber-950 flex items-center gap-1.5">
              <span>NEXTSEM ACADEMY • SOCIAL SCIENCE & HISTORICAL GEOGRAPHY STUDIO</span>
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-950 border border-amber-800 rounded">
            PAGE {page.pageNumber}
          </div>
        </div>

        {/* Student metadata row */}
        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-300 text-xs font-mono">
          <div>
            <span className="font-bold">Scholar Name: </span>
            <span className="border-b border-black inline-block min-w-28 pb-0.5">{studentName}</span>
          </div>
          <div>
            <span className="font-bold">Roll No: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{rollNo}</span>
          </div>
          <div>
            <span className="font-bold">Class/Sec: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{classNameStr}</span>
          </div>
          <div>
            <span className="font-bold">Date: </span>
            <span className="border-b border-black inline-block min-w-20 pb-0.5">&nbsp;</span>
          </div>
        </div>
      </div>

      {/* 2. Chapter Title & Historical Facts Banner */}
      <div className="mb-4 bg-amber-50/70 border border-amber-400 rounded-md p-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black tracking-tight text-amber-950 uppercase font-mono flex items-center gap-1.5">
            <Globe size={15} className="text-amber-800" />
            <span>{page.chapterTitle} — <span className="text-amber-900">{page.topicTitle}</span></span>
          </h2>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
            NCERT Source P.{page.sourcePdfPage}
          </span>
        </div>

        {/* Historical Principles & Key Administrative Terms */}
        <div className="mt-1.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-800">
          <div>
            <span className="font-bold text-amber-950 block mb-0.5">📜 Historical Context & Dynastic Developments:</span>
            <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
              {page.keyConcepts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {page.keyFormulas && page.keyFormulas.length > 0 && (
            <div className="bg-white/90 p-1.5 rounded border border-amber-300">
              <span className="font-bold text-amber-950 block mb-0.5">🏛️ Administrative Terms & Chronology:</span>
              <ul className="space-y-1 text-[10.5px] font-mono font-semibold text-slate-900">
                {page.keyFormulas.map((f, i) => (
                  <li key={i} className="leading-tight">• {f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 3. Questions Stack */}
      <div className="space-y-5">
        {page.questions.map((q) => (
          <div key={q.id} className="border border-slate-400 rounded-md p-3.5 bg-slate-50/40">
            
            {/* Question Header */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="bg-amber-950 text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                  Q {q.questionNumber}
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300">
                  {q.type.replace('-', ' ')}
                </span>
              </div>
              {q.marks && (
                <span className="text-xs font-mono font-bold text-slate-700">
                  [{q.marks} Marks]
                </span>
              )}
            </div>

            {/* Prompt */}
            <p className="text-xs font-semibold leading-relaxed text-slate-900 mb-3">
              {q.prompt}
            </p>

            {/* If Word Pool / Details exist */}
            {q.givenDetails && (
              <div className="mb-3 text-[11px] font-mono bg-white p-2 rounded border border-amber-200">
                <span className="font-bold text-amber-900">Reference / Word Pool: </span>
                <span className="font-semibold text-slate-800">{q.givenDetails.join(' • ')}</span>
              </div>
            )}

            {/* Timeline or Map Vector Frame */}
            {q.diagram && (
              <div className="border border-slate-300 rounded bg-white p-2 mb-3">
                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase mb-1 border-b pb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Milestone size={12} className="text-amber-700" />
                    {q.diagram.title}
                  </span>
                  <span className="text-[9px] bg-amber-100 text-amber-900 px-1 rounded font-bold uppercase">
                    {q.diagram.type}
                  </span>
                </div>
                
                {/* SVG Container rendered directly */}
                <div
                  className="flex items-center justify-center py-2 overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: q.diagram.svgContent || "" }}
                />

                {q.diagram.caption && (
                  <div className="text-[10px] font-mono text-center text-slate-500 mt-1 italic">
                    {q.diagram.caption}
                  </div>
                )}
              </div>
            )}

            {/* Historical Milestone Context Cards if timeline */}
            {q.timelineMilestones && q.timelineMilestones.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 text-[10.5px]">
                {q.timelineMilestones.map((m, mi) => (
                  <div key={mi} className="bg-amber-50/50 p-2 rounded border border-amber-200">
                    <span className="font-bold text-amber-900 block font-mono">📅 {m.yearOrEra} — {m.eventTitle}</span>
                    <span className="text-slate-700 mt-0.5 block leading-tight">{m.rulerOrSignificance}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Ruled lines for reasoned subjective answering */}
            {q.workingLinesCount && q.workingLinesCount > 0 && (
              <div className="my-2 space-y-4 pt-1">
                {Array.from({ length: q.workingLinesCount }).map((_, i) => (
                  <div key={i} className="border-b border-slate-300 h-4 flex items-end">
                    <span className="text-[9px] font-mono text-slate-300">Answer line {i + 1}: </span>
                  </div>
                ))}
              </div>
            )}

            {/* Final Answer Box */}
            {q.finalAnswerBox && (
              <div className="mt-3 bg-white border-2 border-black rounded p-2 flex items-center justify-between font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <CheckSquare size={14} className="text-amber-700" />
                  Historical Conclusion:
                </span>
                <span className="font-bold tracking-wide text-slate-900">
                  {q.finalAnswerBox}
                </span>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* 4. Sheet Footer */}
      <div className="mt-6 pt-2 border-t border-slate-300 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>Instructor Assessment: [ Well Analyzed / Historical Accuracy Verified ]</span>
        <span>Teacher Signature: ______________________</span>
      </div>

    </div>
  );
}
