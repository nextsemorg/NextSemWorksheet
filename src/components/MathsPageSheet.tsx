"use client";

import React from "react";
import { WorkbookPageData, QuestionData } from "@/types/workbook";
import { Ruler, Compass, Sparkles, CheckSquare } from "lucide-react";

interface Props {
  page: WorkbookPageData;
  studentName?: string;
  classNameStr?: string;
  rollNo?: string;
}

export default function MathsPageSheet({
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
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-800">
              NEXTSEM ACADEMY • MATHEMATICS WORKBOOK STUDIO
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold px-2 py-0.5 bg-slate-100 border border-black rounded">
            PAGE {page.pageNumber}
          </div>
        </div>

        {/* Student metadata filling row */}
        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-300 text-xs font-mono">
          <div>
            <span className="font-bold">Name: </span>
            <span className="border-b border-black inline-block min-w-28 pb-0.5">{studentName}</span>
          </div>
          <div>
            <span className="font-bold">Roll No: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{rollNo}</span>
          </div>
          <div>
            <span className="font-bold">Class: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{classNameStr}</span>
          </div>
          <div>
            <span className="font-bold">Date: </span>
            <span className="border-b border-black inline-block min-w-20 pb-0.5">&nbsp;</span>
          </div>
        </div>
      </div>

      {/* 2. Chapter Title & Key Concept Flashcard Banner */}
      <div className="mb-4 bg-amber-50/60 border border-amber-300 rounded-md p-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black tracking-tight text-slate-900 uppercase font-mono">
            {page.chapterTitle} — <span className="text-amber-800">{page.topicTitle}</span>
          </h2>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
            NCERT Source P.{page.sourcePdfPage}
          </span>
        </div>

        {/* Key Concepts bullets */}
        <div className="mt-1.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-800">
          <div>
            <span className="font-bold text-amber-900 block mb-0.5">📌 Core Concepts:</span>
            <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
              {page.keyConcepts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {page.keyFormulas && page.keyFormulas.length > 0 && (
            <div className="bg-white/80 p-1.5 rounded border border-amber-200">
              <span className="font-bold text-amber-900 block mb-0.5">📐 Formula & Theorem Reference:</span>
              <ul className="space-y-0.5 text-[10.5px] font-mono font-semibold text-slate-900">
                {page.keyFormulas.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 3. Questions Stack */}
      <div className="space-y-5">
        {page.questions.map((q) => (
          <div key={q.id} className="border border-slate-400 rounded-md p-3.5 bg-slate-50/30">
            
            {/* Question Header */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="bg-black text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                  Q {q.questionNumber}
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
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

            {/* Given & To Prove / Find pill bar */}
            {(q.givenDetails || q.toFindOrProve) && (
              <div className="mb-3 text-[11px] font-mono bg-white p-2 rounded border border-slate-300 flex flex-wrap gap-x-4 gap-y-1">
                {q.givenDetails && (
                  <div>
                    <span className="font-bold text-slate-600">Given: </span>
                    <span className="font-bold text-slate-900">{q.givenDetails.join(', ')}</span>
                  </div>
                )}
                {q.toFindOrProve && (
                  <div>
                    <span className="font-bold text-blue-700">To Find / Prove: </span>
                    <span className="font-bold text-slate-900">{q.toFindOrProve}</span>
                  </div>
                )}
              </div>
            )}

            {/* Split Diagram & Working Grid Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {/* Left Column: Clean SVG Geometric Vector */}
              {q.diagram && (
                <div className="border border-slate-300 rounded bg-white p-2 flex flex-col justify-between">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase mb-1 border-b pb-1 flex items-center justify-between">
                    <span>{q.diagram.title}</span>
                    <span className="text-[9px] bg-slate-100 px-1 rounded">VECTOR SVG</span>
                  </div>
                  
                  {/* SVG Container rendered directly */}
                  <div
                    className="flex items-center justify-center py-1"
                    dangerouslySetInnerHTML={{ __html: q.diagram.svgContent || "" }}
                  />

                  {q.diagram.caption && (
                    <div className="text-[10px] font-mono text-center text-slate-500 mt-1 italic">
                      {q.diagram.caption}
                    </div>
                  )}
                </div>
              )}

              {/* Right Column: 5mm Dot/Graph Grid for Drawing & Rough Work */}
              {q.gridWorkArea && (
                <div className="border-2 border-dashed border-slate-400 rounded bg-white p-2 flex flex-col justify-between min-h-[170px] relative overflow-hidden">
                  <div className="text-[10px] font-mono font-bold text-slate-600 uppercase mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Ruler size={12} /> Construction & Twin Work Area
                    </span>
                    <span className="text-[9px] text-slate-400">OneNote / Pen Grid</span>
                  </div>

                  {/* 5mm Math Dot/Line Pattern */}
                  <div 
                    className="w-full flex-grow rounded border border-slate-200" 
                    style={{
                      backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                      backgroundSize: '12px 12px',
                      minHeight: '140px'
                    }}
                  />
                  
                  <div className="text-[9px] font-mono text-slate-400 text-center mt-1">
                    (Use ruler & pencil / digital stylus to construct or calculate)
                  </div>
                </div>
              )}
            </div>

            {/* Ruled Step-by-Step Writing lines if requested */}
            {q.workingLinesCount && (
              <div className="my-2 space-y-4 pt-1">
                {Array.from({ length: q.workingLinesCount }).map((_, i) => (
                  <div key={i} className="border-b border-slate-300 h-4 flex items-end">
                    <span className="text-[9px] font-mono text-slate-300">Step {i + 1}: </span>
                  </div>
                ))}
              </div>
            )}

            {/* Final Answer Box */}
            {q.finalAnswerBox && (
              <div className="mt-3 bg-white border-2 border-black rounded p-2 flex items-center justify-between font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <CheckSquare size={14} className="text-emerald-600" />
                  Final Result:
                </span>
                <span className="font-bold tracking-wide text-slate-800">
                  {q.finalAnswerBox}
                </span>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* 4. Sheet Footer */}
      <div className="mt-6 pt-2 border-t border-slate-300 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>Teacher Feedback: [ Excellent / Needs Practice / Redo ]</span>
        <span>Signature / Stamp: ______________________</span>
      </div>

    </div>
  );
}
