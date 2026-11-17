"use client";

import React, { useState } from "react";
import { chapter1WorksheetData } from "@/data/chapter1WorksheetData";
import { 
  BookOpen, CheckCircle2, XCircle, HelpCircle, ChevronRight, ChevronLeft, 
  Printer, Sparkles, Award, ExternalLink, RefreshCw, Columns, Download, Flower2
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
    // Cosmos Night Theme Background with subtle warm petal glow
    <div className="min-h-screen bg-[#130d14] text-[#f7eef3] flex flex-col font-sans selection:bg-[#e05688] selection:text-white">
      {/* =========================================================================
          SCREEN INTERACTIVE VIEW (Cosmos Flower Botanical Theme)
          ========================================================================= */}
      <div className="print:hidden flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="border-b border-[#3d2433] bg-[#1d121c]/90 backdrop-blur-md sticky top-0 z-30 px-3 py-2.5 sm:px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            {/* Cosmos Botanical Avatar / Icon */}
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#e05688]/40 shadow-md shadow-[#e05688]/20 flex items-center justify-center bg-gradient-to-br from-[#e05688] to-[#913054]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/cosmos-flowers.avif" 
                alt="Cosmos Flower Logo" 
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform" 
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ff80ab] bg-[#3a1525]/80 border border-[#e05688]/40 px-2 py-0.5 rounded-full">
                  NCERT Class 7 Maths
                </span>
                <span className="text-xs text-[#d1b3c2] font-medium hidden md:inline">
                  Ganita Prakash Part-II
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-black text-white tracking-tight flex items-center gap-2">
                Ch-1: Geometric Twins <span className="text-xs font-normal text-[#c7a4b6]">(Cosmos Studio)</span>
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
                  ? "bg-[#e05688]/20 border-[#e05688]/50 text-[#ff80ab]" 
                  : "bg-[#271725] border-[#442639] text-[#e0cfd8] hover:bg-[#341e31]"
              }`}
              title="Toggle Split-Screen PDF View"
            >
              <Columns size={14} className={showPdfViewer ? "text-[#ff80ab]" : ""} />
              <span className="hidden sm:inline">{showPdfViewer ? "Hide PDF" : "Show PDF"}</span>
            </button>

            {/* Print Current Page */}
            <button
              onClick={handlePrintCurrent}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#e05688] to-[#c73e70] hover:from-[#e96796] hover:to-[#d84b7f] text-xs font-bold text-white transition-all cursor-pointer shadow-md shadow-[#e05688]/20"
              title="Print high-contrast laser worksheet for Page #{currentPage.pageNumber}"
            >
              <Printer size={14} />
              <span>Print Page #{currentPage.pageNumber}</span>
            </button>

            {/* Print Complete Workbook */}
            <button
              onClick={handlePrintAll}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#271725] hover:bg-[#382035] border border-[#49273d] text-xs font-semibold text-[#f0dfe7] transition-all cursor-pointer"
              title="Print complete 7-page laser test workbook"
            >
              <Download size={14} className="text-[#ff80ab]" />
              <span>Full Workbook</span>
            </button>

            {/* Open Raw PDF Link */}
            <a
              href={`/pdf/gegp201.pdf#page=${currentPage.pageNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#271725] hover:bg-[#382035] border border-[#49273d] text-xs font-semibold text-[#f0dfe7] transition-all"
              title="Open original textbook PDF in new tab"
            >
              <ExternalLink size={14} className="text-[#ff80ab]" />
            </a>

            {/* Reset Page */}
            <button
              onClick={resetPage}
              className="p-1.5 rounded-lg bg-[#271725] hover:bg-[#382035] border border-[#49273d] text-[#c9a7b9] hover:text-white transition-all cursor-pointer"
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
            <aside className="w-full lg:w-1/2 border-r border-[#382030] bg-[#160f17] flex flex-col h-[calc(100vh-57px)]">
              <div className="px-4 py-2 bg-[#1b121c] border-b border-[#382030] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff80ab] animate-pulse" />
                  <span className="font-bold text-[#f2e6ed]">Official NCERT Textbook PDF</span>
                  <span className="text-[11px] text-[#b895a7]">(Synced to Page #{currentPage.pageNumber})</span>
                </div>
                <a 
                  href={`/pdf/gegp201.pdf#page=${currentPage.pageNumber}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-[#ff80ab] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Fullscreen</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              <div className="flex-1 w-full bg-[#110b12]">
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
            <div className="p-3.5 rounded-2xl bg-[#1e141f] border border-[#3b2333] space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs text-[#cfb0c0]">
                <span className="font-bold text-[#f5ebf1]">Quick Page Switcher:</span>
                <span className="font-semibold text-[#ff80ab]">
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
                        ? "bg-gradient-to-r from-[#e05688] to-[#c73e70] border-[#ff80ab] text-white shadow-md shadow-[#e05688]/30 font-black" 
                        : "bg-[#160e17] border-[#382030] text-[#e0cfd8] hover:border-[#6b3a56]"
                    }`}
                  >
                    <span>P.{p.pageNumber}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Page Header & Score */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#311524] via-[#211420] to-[#1a1019] border border-[#52253e] flex items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-xs font-bold text-[#ff80ab] mb-0.5 flex items-center gap-1.5">
                  <Flower2 size={13} className="text-[#ff80ab]" />
                  <span>Worksheet • Textbook Page #{currentPage.pageNumber}</span>
                </div>
                <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                  {currentPage.topicTitle}
                </h2>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#180e18] border border-[#49273c] text-xs font-bold shrink-0">
                <Award size={15} className="text-[#f5c044]" />
                <span className="text-[#d8bfcd]">Score:</span>
                <span className="text-[#ff80ab] text-sm font-black">{correctCount}</span>
                <span className="text-[#8e6e80]">/ {totalQuestions}</span>
              </div>
            </div>

            {/* Key Concepts from this Page */}
            <div className="p-4 rounded-2xl bg-[#1c121d]/80 border border-[#3b2333]">
              <div className="text-xs font-extrabold text-[#f5c044] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#f5c044]" />
                Core Concepts from Page #{currentPage.pageNumber}:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#e8dbe2] list-disc list-inside">
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
                    className={`p-4 sm:p-5 rounded-2xl bg-[#1d131f] border transition-all ${
                      isCorrect 
                        ? "border-[#4ade80]/60 bg-[#14291e]/40 shadow-sm shadow-[#4ade80]/10" 
                        : isWrong 
                        ? "border-[#f43f5e]/50 bg-[#311119]/40" 
                        : "border-[#382232] hover:border-[#5a324d]"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#2b1727] text-[#ff80ab] font-black text-xs flex items-center justify-center border border-[#e05688]/30">
                          Q{qIndex + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#271524] text-[#cfb0c0] border border-[#3f2238]">
                          {q.type === "mcq" ? "Multiple Choice" : q.type === "fill" ? "Fill in the Blank" : "True / False"}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleHint(q.id)}
                        className="text-xs text-[#f5c044] hover:text-[#ffd666] flex items-center gap-1 cursor-pointer font-medium"
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
                      <div className="mb-3 p-2.5 rounded-xl bg-[#2e1d0d]/60 border border-[#b48227]/40 text-[#ffd580] text-xs leading-relaxed flex items-start gap-2">
                        <Sparkles size={14} className="text-[#f5c044] shrink-0 mt-0.5" />
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
                                ? "bg-[#4ade80]/20 border-[#4ade80] text-[#86efac] font-bold" 
                                : isThisWrongSelected 
                                ? "bg-[#f43f5e]/20 border-[#f43f5e] text-[#fca5a5]" 
                                : isSelected 
                                ? "bg-[#e05688]/20 border-[#ff80ab] text-white font-bold" 
                                : "bg-[#160d17] border-[#382030] hover:border-[#5f3350] text-[#e8dbe2]"
                              }`}
                            >
                              <span>{opt}</span>
                              {isThisCorrect && <CheckCircle2 size={15} className="text-[#4ade80] shrink-0" />}
                              {isThisWrongSelected && <XCircle size={15} className="text-[#f43f5e] shrink-0" />}
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
                                  ? "bg-[#4ade80]/20 border-[#4ade80] text-[#86efac]"
                                  : isThisWrongSelected
                                  ? "bg-[#f43f5e]/20 border-[#f43f5e] text-[#fca5a5]"
                                  : isSelected
                                  ? "bg-[#e05688]/20 border-[#ff80ab] text-white"
                                  : "bg-[#160d17] border-[#382030] text-[#e8dbe2] hover:border-[#5f3350]"
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
                          className="w-full sm:w-72 px-3 py-1.5 rounded-xl bg-[#160d17] border border-[#382030] focus:border-[#e05688] text-white text-xs outline-none"
                        />
                      </div>
                    )}

                    {/* Check Answer */}
                    {!isChecked ? (
                      <button
                        onClick={() => toggleCheck(q.id)}
                        disabled={!userAnswers[q.id]}
                        className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#e05688] to-[#c73e70] hover:from-[#e96796] hover:to-[#d84b7f] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-[#160d17]/90 border border-[#382030] text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <span className="text-[#4ade80] flex items-center gap-1">
                              <CheckCircle2 size={13} /> Correct!
                            </span>
                          ) : (
                            <span className="text-[#f43f5e] flex items-center gap-1">
                              <XCircle size={13} /> Correct Answer: <u className="font-mono text-white ml-1">{q.answer}</u>
                            </span>
                          )}
                        </div>
                        <p className="text-[#c9abbc] text-[11px] leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#382030]">
              <button
                onClick={() => setActivePageIndex((prev) => Math.max(0, prev - 1))}
                disabled={activePageIndex === 0}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#211420] hover:bg-[#2d1b2c] disabled:opacity-40 border border-[#3b2333] text-xs font-bold text-[#f2e6ed] transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
                <span>Previous Page</span>
              </button>

              <span className="text-xs font-semibold text-[#c7a4b6]">
                Page #{currentPage.pageNumber} of {chapter1WorksheetData.pages.length}
              </span>

              <button
                onClick={() => setActivePageIndex((prev) => Math.min(chapter1WorksheetData.pages.length - 1, prev + 1))}
                disabled={activePageIndex === chapter1WorksheetData.pages.length - 1}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#e05688] to-[#c73e70] hover:from-[#e96796] hover:to-[#d84b7f] disabled:opacity-40 text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
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
          Laser rule: Pure #000000 on #ffffff, 0% grey halftones
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
                  <div className="font-black text-black leading-snug flex items-start gap-1.5 text-xs">
                    <span className="font-black">Q{qNum + 1}.</span>
                    <span className="font-extrabold flex-1">{q.question}</span>
                    <span className="text-[10px] font-black border border-black px-1.5 py-0.2 rounded shrink-0">
                      [1 Mark]
                    </span>
                  </div>

                  {q.type === "mcq" && q.options && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-2.5 pl-4 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-black inline-block shrink-0" />
                          <span className="font-bold text-black">
                            ({String.fromCharCode(65 + optIdx)}) {opt}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

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

                  {q.type === "fill" && (
                    <div className="mt-3 pl-4 text-xs font-bold text-black">
                      ANSWER: __________________________________________________________________
                    </div>
                  )}

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
