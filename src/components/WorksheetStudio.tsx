"use client";

import React, { useState } from "react";
import { chapter1WorksheetData } from "@/data/chapter1WorksheetData";
import { 
  BookOpen, CheckCircle2, XCircle, HelpCircle, ChevronRight, ChevronLeft, 
  Printer, Sparkles, Award, ExternalLink, RefreshCw, Columns, Download
} from "lucide-react";

export default function WorksheetStudio() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [showPdfViewer, setShowPdfViewer] = useState(true);
  const [printAllPages, setPrintAllPages] = useState(false);

  const currentPage = chapter1WorksheetData.pages[activePageIndex];
  const pdfUrl = `/pdf/gegp201.pdf#page=${currentPage.pageNumber}&toolbar=1&navpanes=0`;

  const handleSelectOption = (qId: string, opt: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const handleTextAnswer = (qId: string, text: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const toggleCheck = (qId: string) => {
    setSubmittedQuestions((prev) => ({ ...prev, [qId]: true }));
  };

  const toggleHint = (qId: string) => {
    setShowHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const resetPage = () => {
    setUserAnswers({});
    setSubmittedQuestions({});
    setShowHints({});
  };

  const handlePrintCurrent = () => {
    setPrintAllPages(false);
    setTimeout(() => window.print(), 100);
  };

  const handlePrintAll = () => {
    setPrintAllPages(true);
    setTimeout(() => window.print(), 100);
  };

  // Score calculation for current page
  const totalQuestions = currentPage.questions.length;
  const correctCount = currentPage.questions.filter((q) => {
    if (!submittedQuestions[q.id]) return false;
    const userAns = (userAnswers[q.id] || "").trim().toLowerCase();
    const correctAns = q.answer.trim().toLowerCase();
    return userAns === correctAns;
  }).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* =========================================================================
          SCREEN INTERACTIVE VIEW (Hidden completely during Print)
          ========================================================================= */}
      <div className="print:hidden flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-md sticky top-0 z-30 px-3 py-2.5 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-emerald-500/20">
              WS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                  NCERT Class 7 Maths
                </span>
                <span className="text-xs text-slate-400 font-medium hidden md:inline">
                  Ganita Prakash Part-II
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-extrabold text-white tracking-tight flex items-center gap-2">
                Ch-1: Geometric Twins <span className="text-xs font-normal text-slate-400">(Parallel Studio)</span>
              </h1>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Toggle PDF Split View */}
            <button
              onClick={() => setShowPdfViewer((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                showPdfViewer 
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300" 
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
              }`}
              title="Toggle Split-Screen PDF View"
            >
              <Columns size={14} className={showPdfViewer ? "text-emerald-400" : ""} />
              <span className="hidden sm:inline">{showPdfViewer ? "Hide PDF" : "Show PDF"}</span>
            </button>

            {/* Print Current Page (Laser High-Contrast) */}
            <button
              onClick={handlePrintCurrent}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
              title="Print high-contrast laser worksheet for Page #{currentPage.pageNumber}"
            >
              <Printer size={14} />
              <span>Print Page #{currentPage.pageNumber}</span>
            </button>

            {/* Print Complete Workbook */}
            <button
              onClick={handlePrintAll}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
              title="Print complete 7-page laser test workbook"
            >
              <Download size={14} className="text-emerald-400" />
              <span>Full Workbook</span>
            </button>

            {/* Open Raw PDF Link */}
            <a
              href={`/pdf/gegp201.pdf#page=${currentPage.pageNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all"
              title="Open original textbook PDF in new tab"
            >
              <ExternalLink size={14} className="text-blue-400" />
            </a>

            {/* Reset Page */}
            <button
              onClick={resetPage}
              className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
              title="Reset answers on this page"
            >
              <RefreshCw size={13} />
            </button>
          </div>
        </header>

        {/* Main Dual-Pane Parallel Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* LEFT PANE: Actual Textbook PDF Viewer */}
          {showPdfViewer && (
            <aside className="w-full lg:w-1/2 border-r border-slate-800 bg-slate-900 flex flex-col h-[calc(100vh-57px)]">
              <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-slate-200">Official NCERT Textbook PDF</span>
                  <span className="text-[11px] text-slate-400">(Synced to Page #{currentPage.pageNumber})</span>
                </div>
                <a 
                  href={`/pdf/gegp201.pdf#page=${currentPage.pageNumber}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Fullscreen</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              <div className="flex-1 w-full bg-slate-950">
                <iframe
                  key={`pdf-frame-page-${currentPage.pageNumber}`}
                  src={pdfUrl}
                  className="w-full h-full border-0"
                  title={`NCERT Class 7 Maths Page ${currentPage.pageNumber}`}
                />
              </div>
            </aside>
          )}

          {/* RIGHT PANE: Interactive Worksheet & Questions */}
          <main className={`flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 space-y-6 h-[calc(100vh-57px)] ${
            showPdfViewer ? "w-full lg:w-1/2" : "w-full max-w-5xl mx-auto"
          }`}>
            {/* Page Directory Carousel */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">Quick Page Switcher:</span>
                <span className="font-semibold text-emerald-400">
                  Page #{currentPage.pageNumber} / {chapter1WorksheetData.pages.length}
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {chapter1WorksheetData.pages.map((p, idx) => (
                  <button
                    key={p.pageNumber}
                    onClick={() => setActivePageIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 cursor-pointer border ${
                      idx === activePageIndex 
                        ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20" 
                        : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span>P.{p.pageNumber}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Page Header & Score */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-900/30 flex items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-emerald-400 mb-0.5">
                  Interactive Worksheet • Page #{currentPage.pageNumber}
                </div>
                <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                  {currentPage.topicTitle}
                </h2>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold shrink-0">
                <Award size={15} className="text-amber-400" />
                <span>Score:</span>
                <span className="text-emerald-400 text-sm font-black">{correctCount}</span>
                <span className="text-slate-500">/ {totalQuestions}</span>
              </div>
            </div>

            {/* Key Concepts from this Page */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={13} className="text-emerald-400" />
                Core Concepts from Page #{currentPage.pageNumber}:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                {currentPage.coreConcepts.map((c, i) => (
                  <li key={i} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {currentPage.questions.map((q, qIndex) => {
                const isChecked = submittedQuestions[q.id];
                const userAns = (userAnswers[q.id] || "").trim().toLowerCase();
                const correctAns = q.answer.trim().toLowerCase();
                const isCorrect = isChecked && (userAns === correctAns);
                const isWrong = isChecked && (userAns !== correctAns);

                return (
                  <div 
                    key={q.id}
                    className={`p-4 sm:p-5 rounded-2xl bg-slate-900 border transition-all ${
                      isCorrect 
                        ? "border-emerald-500/50 bg-emerald-950/10" 
                        : isWrong 
                        ? "border-rose-500/40 bg-rose-950/10" 
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-slate-800 text-emerald-400 font-black text-xs flex items-center justify-center">
                          Q{qIndex + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                          {q.type === "mcq" ? "Multiple Choice" : q.type === "fill" ? "Fill in the Blank" : "True / False"}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleHint(q.id)}
                        className="text-xs text-amber-400/90 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                      >
                        <HelpCircle size={13} />
                        <span>{showHints[q.id] ? "Hide Hint" : "Hint"}</span>
                      </button>
                    </div>

                    {/* Question Prompt */}
                    <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed mb-3">
                      {q.question}
                    </p>

                    {/* Hint */}
                    {showHints[q.id] && (
                      <div className="mb-3 p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-200 text-xs leading-relaxed flex items-start gap-2">
                        <Sparkles size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{q.hint}</span>
                      </div>
                    )}

                    {/* Options */}
                    {q.type === "mcq" && q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = userAnswers[q.id] === opt;
                          const isThisCorrect = isChecked && opt.toLowerCase() === correctAns;
                          const isThisWrongSelected = isChecked && isSelected && !isThisCorrect;

                          return (
                            <button
                              key={optIndex}
                              disabled={isChecked}
                              onClick={() => handleSelectOption(q.id, opt)}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                                isThisCorrect 
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold" 
                                : isThisWrongSelected 
                                ? "bg-rose-500/20 border-rose-500 text-rose-200" 
                                : isSelected 
                                ? "bg-emerald-500/15 border-emerald-500/50 text-white font-semibold" 
                                : "bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300"
                              }`}
                            >
                              <span>{opt}</span>
                              {isThisCorrect && <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />}
                              {isThisWrongSelected && <XCircle size={15} className="text-rose-400 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {q.type === "true_false" && q.options && (
                      <div className="flex gap-2.5 mb-3">
                        {q.options.map((opt) => {
                          const isSelected = userAnswers[q.id] === opt;
                          const isThisCorrect = isChecked && opt.toLowerCase() === correctAns;
                          const isThisWrongSelected = isChecked && isSelected && !isThisCorrect;

                          return (
                            <button
                              key={opt}
                              disabled={isChecked}
                              onClick={() => handleSelectOption(q.id, opt)}
                              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                                isThisCorrect
                                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-200"
                                  : isThisWrongSelected
                                  ? "bg-rose-500/20 border-rose-500 text-rose-200"
                                  : isSelected
                                  ? "bg-emerald-500/15 border-emerald-500/50 text-white"
                                  : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {q.type === "fill" && (
                      <div className="mb-3">
                        <input
                          type="text"
                          disabled={isChecked}
                          value={userAnswers[q.id] || ""}
                          onChange={(e) => handleTextAnswer(q.id, e.target.value)}
                          placeholder="Type answer here..."
                          className="w-full sm:w-72 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white text-xs outline-none"
                        />
                      </div>
                    )}

                    {/* Check Answer */}
                    {!isChecked ? (
                      <button
                        onClick={() => toggleCheck(q.id)}
                        disabled={!userAnswers[q.id]}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 size={13} /> Correct!
                            </span>
                          ) : (
                            <span className="text-rose-400 flex items-center gap-1">
                              <XCircle size={13} /> Correct Answer: <u className="font-mono text-white ml-1">{q.answer}</u>
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setActivePageIndex((prev) => Math.max(0, prev - 1))}
                disabled={activePageIndex === 0}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 border border-slate-800 text-xs font-bold text-slate-200 transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
                <span>Previous Page</span>
              </button>

              <span className="text-xs font-semibold text-slate-400">
                Page #{currentPage.pageNumber} of {chapter1WorksheetData.pages.length}
              </span>

              <button
                onClick={() => setActivePageIndex((prev) => Math.min(chapter1WorksheetData.pages.length - 1, prev + 1))}
                disabled={activePageIndex === chapter1WorksheetData.pages.length - 1}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
              >
                <span>Next Page</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* =========================================================================
          LASER PRINTER HIGH-CONTRAST WORKSHEET (Strict Black & White for Sharp Print)
          Active ONLY during Ctrl+P or Print Button Click
          ========================================================================= */}
      <div className="hidden print:block bg-white text-black font-sans w-full p-0 m-0">
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            @page {
              size: A4 portrait;
              margin: 12mm 15mm 15mm 15mm;
            }
            body {
              background: #ffffff !important;
              color: #000000 !important;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .laser-box {
              border: 1.8pt solid #000000 !important;
              background: #ffffff !important;
            }
            .laser-divider {
              border-bottom: 1.5pt solid #000000 !important;
            }
            .laser-dashed {
              border-bottom: 1pt dashed #000000 !important;
            }
            .avoid-break {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            .page-break {
              page-break-before: always !important;
              break-before: page !important;
            }
          }
        ` }} />

        {(printAllPages ? chapter1WorksheetData.pages : [currentPage]).map((pageData, pIdx) => (
          <div key={pageData.pageNumber} className={pIdx > 0 ? "page-break pt-4" : ""}>
            {/* High-Contrast Laser Header Box */}
            <div className="laser-box p-3.5 rounded-lg mb-4">
              {/* Institution Title */}
              <div className="flex items-center justify-between laser-divider pb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-black rounded flex items-center justify-center font-black text-xl text-black">
                    NS
                  </div>
                  <div>
                    <h1 className="text-base font-black tracking-wider uppercase text-black">
                      NEXTSEM ACADEMY • SCHOOL WORKSHEET
                    </h1>
                    <p className="text-[11px] font-bold text-black uppercase tracking-tight">
                      NCERT Assessment Series • Class 7 Mathematics
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block border-2 border-black px-2 py-0.5 rounded text-[11px] font-black uppercase text-black">
                    Part-II Textbook
                  </span>
                  <div className="text-[11px] font-extrabold text-black mt-1">
                    Book Page #{pageData.pageNumber}
                  </div>
                </div>
              </div>

              {/* Chapter & Topic Bar */}
              <div className="mt-2.5 flex items-center justify-between text-xs font-bold text-black">
                <div>
                  <span className="font-black text-black">CHAPTER 1: </span>
                  <span className="font-extrabold underline text-black">GEOMETRIC TWINS (CONGRUENCE)</span>
                </div>
                <div className="font-bold text-[11px] text-black">
                  Topic: {pageData.topicTitle}
                </div>
              </div>

              {/* Student Identification High-Contrast Fill Lines */}
              <div className="mt-3 pt-2.5 border-t border-black grid grid-cols-3 gap-4 text-xs font-black text-black">
                <div>NAME: <span className="font-normal">___________________________</span></div>
                <div>ROLL NO: <span className="font-normal">______________</span></div>
                <div>DATE: <span className="font-normal">______________</span></div>
              </div>
            </div>

            {/* High-Contrast Core Concept Highlights */}
            <div className="border border-black p-2.5 rounded-md mb-4 text-xs bg-white avoid-break">
              <div className="font-black uppercase tracking-wide text-black mb-1">
                KEY CONCEPTS FROM TEXTBOOK PAGE #{pageData.pageNumber}:
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-black font-semibold text-[11px]">
                {pageData.coreConcepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Questions Container */}
            <div className="space-y-4">
              <div className="border-b-2 border-black pb-1 mb-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-black">
                  PRACTICE EXERCISES & ASSESSMENT
                </span>
                <span className="text-[10px] font-bold text-black uppercase">
                  Total Questions: {pageData.questions.length} | Marks: {pageData.questions.length}
                </span>
              </div>

              {pageData.questions.map((q, qNum) => (
                <div key={q.id} className="avoid-break pb-3 border-b border-black text-xs">
                  {/* Question Title & Mark */}
                  <div className="font-black text-black leading-snug flex items-start gap-1.5 text-xs">
                    <span className="font-black">Q{qNum + 1}.</span>
                    <span className="font-extrabold flex-1">{q.question}</span>
                    <span className="text-[10px] font-black border border-black px-1.5 py-0.2 rounded shrink-0">
                      [1 Mark]
                    </span>
                  </div>

                  {/* High-Contrast MCQ Circles for Laser Printing */}
                  {q.type === "mcq" && q.options && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-2.5 pl-4 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2">
                          {/* Laser crisp hollow circle */}
                          <span className="w-4 h-4 rounded-full border-2 border-black inline-block shrink-0" />
                          <span className="font-bold text-black">
                            ({String.fromCharCode(65 + optIdx)}) {opt}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* High-Contrast True / False Boxes */}
                  {q.type === "true_false" && (
                    <div className="flex gap-10 mt-2.5 pl-4 text-xs font-black text-black">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black inline-block" />
                        <span>[ ] TRUE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black inline-block" />
                        <span>[ ] FALSE</span>
                      </div>
                    </div>
                  )}

                  {/* High-Contrast Fill with Solid Line */}
                  {q.type === "fill" && (
                    <div className="mt-3 pl-4 text-xs font-bold text-black">
                      ANSWER: __________________________________________________________________
                    </div>
                  )}

                  {/* Dedicated Rough Work Area */}
                  <div className="mt-2.5 text-[9px] font-bold text-black border-t border-dashed border-gray-400 pt-1 flex justify-between">
                    <span>Working / Rough space:</span>
                    <span className="italic">Verification required</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Laser Teacher Evaluation & Answer Key Footnote */}
            <div className="avoid-break mt-4 pt-3 border-t-2 border-black text-xs font-bold text-black">
              <div className="flex items-center justify-between pb-2 border-b border-black">
                <div>TEACHER'S SIGNATURE: _______________________</div>
                <div>MARKS OBTAINED: ______ / {pageData.questions.length}</div>
              </div>

              {/* High Contrast Compact Answer Strip for Quick Grading */}
              <div className="mt-2 text-[10px] font-bold text-black flex items-center gap-2 flex-wrap">
                <span className="border border-black px-1.5 py-0.5 rounded font-black uppercase">
                  Grading Key:
                </span>
                {pageData.questions.map((q, i) => (
                  <span key={q.id} className="mr-3">
                    <strong>Q{i + 1}:</strong> {q.answer}
                  </span>
                ))}
              </div>

              <div className="mt-2 text-[9px] text-center font-bold uppercase text-black">
                NextSem Academy (nextsem.online) • Generated from NCERT Ganita Prakash Part-II (gegp201.pdf)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
