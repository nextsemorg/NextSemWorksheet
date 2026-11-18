"use client";

import React from "react";
import { WorkbookPageData } from "@/types/workbook";
import { FlaskConical, Microscope, Eye, CheckSquare, Sparkles } from "lucide-react";

interface Props {
  page: WorkbookPageData;
  studentName?: string;
  classNameStr?: string;
  rollNo?: string;
}

export default function SciencePageSheet({
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
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-900 flex items-center gap-1.5">
              <span>NEXTSEM ACADEMY • SCIENCE LAB & EXPERIMENTAL WORKBOOK</span>
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-950 border border-emerald-800 rounded">
            PAGE {page.pageNumber}
          </div>
        </div>

        {/* Student metadata row */}
        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-300 text-xs font-mono">
          <div>
            <span className="font-bold">Student Name: </span>
            <span className="border-b border-black inline-block min-w-28 pb-0.5">{studentName}</span>
          </div>
          <div>
            <span className="font-bold">Roll No: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{rollNo}</span>
          </div>
          <div>
            <span className="font-bold">Grade/Sec: </span>
            <span className="border-b border-black inline-block min-w-16 pb-0.5">{classNameStr}</span>
          </div>
          <div>
            <span className="font-bold">Date: </span>
            <span className="border-b border-black inline-block min-w-20 pb-0.5">&nbsp;</span>
          </div>
        </div>
      </div>

      {/* 2. Chapter Title & Science Flashcard Banner */}
      <div className="mb-4 bg-emerald-50/70 border border-emerald-400 rounded-md p-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black tracking-tight text-slate-900 uppercase font-mono flex items-center gap-1.5">
            <Microscope size={15} className="text-emerald-700" />
            <span>{page.chapterTitle} — <span className="text-emerald-800">{page.topicTitle}</span></span>
          </h2>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
            NCERT Source P.{page.sourcePdfPage}
          </span>
        </div>

        {/* Key Concepts & Chemical Word Equations */}
        <div className="mt-1.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-800">
          <div>
            <span className="font-bold text-emerald-900 block mb-0.5">🔬 Scientific Principles:</span>
            <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
              {page.keyConcepts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {page.keyFormulas && page.keyFormulas.length > 0 && (
            <div className="bg-white/90 p-1.5 rounded border border-emerald-300">
              <span className="font-bold text-emerald-900 block mb-0.5">⚗️ Chemical & Word Reaction Equations:</span>
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
                <span className="bg-emerald-900 text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                  Q {q.questionNumber}
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
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

            {/* If Word Bank exists */}
            {q.givenDetails && (
              <div className="mb-3 text-[11px] font-mono bg-white p-2 rounded border border-emerald-200">
                <span className="font-bold text-emerald-800">Word Bank: </span>
                <span className="font-semibold text-slate-800">{q.givenDetails.join(' • ')}</span>
              </div>
            )}

            {/* Diagram Labeling Section */}
            {q.diagram && (
              <div className="border border-slate-300 rounded bg-white p-2 mb-3">
                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase mb-1 border-b pb-1 flex items-center justify-between">
                  <span>{q.diagram.title}</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded font-bold">SCIENTIFIC APPARATUS</span>
                </div>
                
                {/* SVG Container rendered directly */}
                <div
                  className="flex items-center justify-center py-2"
                  dangerouslySetInnerHTML={{ __html: q.diagram.svgContent || "" }}
                />

                {q.diagram.caption && (
                  <div className="text-[10px] font-mono text-center text-slate-500 mt-1 italic">
                    {q.diagram.caption}
                  </div>
                )}
              </div>
            )}

            {/* Lab Investigation / Observation Table Component */}
            {q.scienceExperiment && (
              <div className="space-y-2.5 my-3">
                
                {/* Aim & Materials Row */}
                <div className="bg-white p-2.5 rounded border border-slate-300 text-[11px] grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <span className="font-bold text-slate-700 block">Aim of Experiment:</span>
                    <span className="text-slate-900">{q.scienceExperiment.aim}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block">Apparatus / Reagents:</span>
                    <span className="text-slate-900">{q.scienceExperiment.materialsRequired.join(', ')}</span>
                  </div>
                </div>

                {/* Structured Observation Table */}
                {q.scienceExperiment.observationTable && (
                  <div className="border border-black overflow-hidden rounded">
                    <table className="w-full text-left border-collapse text-[10.5px]">
                      <thead>
                        <tr className="bg-slate-200 text-slate-900 font-bold border-b border-black font-mono">
                          {q.scienceExperiment.observationTable.headers.map((h, hi) => (
                            <th key={hi} className="p-2 border-r border-black last:border-r-0">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {q.scienceExperiment.observationTable.rows.map((r, ri) => (
                          <tr key={ri} className="border-b border-slate-300 last:border-b-0">
                            <td className="p-2 font-semibold text-slate-900 border-r border-black bg-slate-50/50">
                              {r.testSample}
                            </td>
                            <td className="p-2 text-slate-700 border-r border-black">
                              {r.reagentOrAction}
                            </td>
                            <td className="p-2 text-slate-500 font-mono border-r border-black">
                              {r.expectedColorOrChange}
                            </td>
                            <td className="p-2 text-slate-500 font-mono">
                              {r.inference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Follow-up / Reasoning Question */}
                {q.scienceExperiment.inferenceOrConclusion && (
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-800 block mb-1">
                      Reasoning Question: {q.scienceExperiment.inferenceOrConclusion}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Ruled lines for reasoning / written explanation */}
            {q.workingLinesCount && q.workingLinesCount > 0 && (
              <div className="my-2 space-y-4 pt-1">
                {Array.from({ length: q.workingLinesCount }).map((_, i) => (
                  <div key={i} className="border-b border-slate-300 h-4 flex items-end">
                    <span className="text-[9px] font-mono text-slate-300">Observation line {i + 1}: </span>
                  </div>
                ))}
              </div>
            )}

            {/* Final Answer Box */}
            {q.finalAnswerBox && (
              <div className="mt-3 bg-white border-2 border-black rounded p-2 flex items-center justify-between font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <CheckSquare size={14} className="text-emerald-600" />
                  Recorded Observation:
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
        <span>Lab Teacher Remarks: [ Verified Accurate / Check Test Conditions ]</span>
        <span>Examiner Sign: ______________________</span>
      </div>

    </div>
  );
}
