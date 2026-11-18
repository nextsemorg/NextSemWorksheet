"use client";

import React from "react";
import { WorkbookPageData } from "@/types/workbook";
import { BookOpen, PenTool, Quote, CheckSquare, Sparkles } from "lucide-react";

interface Props {
  page: WorkbookPageData;
  studentName?: string;
  classNameStr?: string;
  rollNo?: string;
}

export default function EnglishPageSheet({
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
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-950 flex items-center gap-1.5">
              <span>NEXTSEM ACADEMY • LANGUAGE, LITERATURE & WRITING STUDIO</span>
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold px-2 py-0.5 bg-purple-100 text-purple-950 border border-purple-800 rounded">
            PAGE {page.pageNumber}
          </div>
        </div>

        {/* Student metadata row */}
        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-slate-300 text-xs font-mono">
          <div>
            <span className="font-bold">Author/Student: </span>
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

      {/* 2. Chapter Title & Literary Device Banner */}
      <div className="mb-4 bg-purple-50/70 border border-purple-300 rounded-md p-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black tracking-tight text-purple-950 uppercase font-mono flex items-center gap-1.5">
            <BookOpen size={15} className="text-purple-700" />
            <span>{page.chapterTitle} — <span className="text-purple-900">{page.topicTitle}</span></span>
          </h2>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
            NCERT Source P.{page.sourcePdfPage}
          </span>
        </div>

        {/* Core Themes & Grammar Rules */}
        <div className="mt-1.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-800">
          <div>
            <span className="font-bold text-purple-950 block mb-0.5">📖 Thematic Summary & Moral Insights:</span>
            <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
              {page.keyConcepts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {page.keyFormulas && page.keyFormulas.length > 0 && (
            <div className="bg-white/90 p-1.5 rounded border border-purple-200">
              <span className="font-bold text-purple-950 block mb-0.5">✒️ Grammar Rules & Poetic Devices:</span>
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
                <span className="bg-purple-950 text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                  Q {q.questionNumber}
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-950 border border-purple-300">
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

            {/* Reading Comprehension Card */}
            {q.readingPassage && (
              <div className="mb-3 border-l-4 border-purple-600 bg-purple-50/50 p-3 rounded-r-md">
                <div className="flex items-center justify-between text-xs font-bold font-mono text-purple-900 mb-1 border-b border-purple-200 pb-1">
                  <span className="flex items-center gap-1.5">
                    <Quote size={13} />
                    {q.readingPassage.passageTitle}
                  </span>
                  {q.readingPassage.authorOrSource && (
                    <span className="text-[10px] text-purple-700 italic font-normal">
                      {q.readingPassage.authorOrSource}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-[11px] leading-relaxed text-slate-800 italic font-serif">
                  {q.readingPassage.paragraphs.map((p, pi) => (
                    <p key={pi}>"{p}"</p>
                  ))}
                </div>

                {/* Vocabulary Glossary tags */}
                {q.readingPassage.wordBankGlossary && (
                  <div className="mt-2 pt-2 border-t border-purple-200 flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="font-bold text-purple-950">Glossary:</span>
                    {q.readingPassage.wordBankGlossary.map((g, gi) => (
                      <span key={gi} className="bg-white border border-purple-200 px-1.5 py-0.5 rounded text-purple-900">
                        <strong>{g.word}</strong> ({g.partOfSpeech}): {g.meaning}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* If Word Pool / Details exist */}
            {q.givenDetails && (
              <div className="mb-3 text-[11px] font-mono bg-white p-2 rounded border border-purple-200">
                <span className="font-bold text-purple-900">Grammar Context / Clues: </span>
                <span className="font-semibold text-slate-800">{q.givenDetails.join(' • ')}</span>
              </div>
            )}

            {/* Ruled lines for handwritten answering */}
            {q.workingLinesCount && q.workingLinesCount > 0 && (
              <div className="my-2 space-y-4 pt-1">
                {Array.from({ length: q.workingLinesCount }).map((_, i) => (
                  <div key={i} className="border-b border-slate-300 h-4 flex items-end">
                    <span className="text-[9px] font-mono text-slate-300">Line {i + 1}: </span>
                  </div>
                ))}
              </div>
            )}

            {/* Final Answer Box */}
            {q.finalAnswerBox && (
              <div className="mt-3 bg-white border-2 border-black rounded p-2 flex items-center justify-between font-mono text-xs">
                <span className="font-bold flex items-center gap-1.5 text-purple-950">
                  <CheckSquare size={14} className="text-purple-700" />
                  Key Finding / Transformation:
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
        <span>Literary & Grammar Review: [ Fluent & Accurate / Vocabulary Enriched ]</span>
        <span>Faculty Signature: ______________________</span>
      </div>

    </div>
  );
}
