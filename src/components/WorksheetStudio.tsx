"use client";

import React, { useState } from "react";
import { 
  Printer, Download, ExternalLink, RefreshCw, Columns, 
  HelpCircle, Eye, EyeOff, CheckCircle2, ChevronRight, ChevronLeft, Flower2
} from "lucide-react";

interface DiagramQuestion {
  id: string;
  qNum: number;
  title: string;
  marks: number;
  question: string;
  ncertRef: string;
  diagramSvg: React.ReactNode;
  hint: string;
  modelAnswer: string;
}

const diagramQuestions: DiagramQuestion[] = [
  {
    id: "q1",
    qNum: 1,
    title: "Signboard Symbol Replication & Need for Angle",
    marks: 2,
    question: "A signboard has corner points A, B, and C with measured arms AB = 4 cm and BC = 8 cm. Explain why knowing the arm lengths alone is not enough to recreate this symbol on another board, and state what third measurement is required to make an exact identical replica.",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 1 & 2",
    diagramSvg: (
      <svg width="220" height="130" viewBox="0 0 220 130" className="mx-auto">
        <line x1="40" y1="100" x2="190" y2="100" stroke="#000" strokeWidth="3" />
        <line x1="40" y1="100" x2="65" y2="25" stroke="#000" strokeWidth="3" />
        <line x1="40" y1="100" x2="90" y2="35" stroke="#777" strokeWidth="1.5" strokeDasharray="4" />
        <line x1="40" y1="100" x2="110" y2="55" stroke="#999" strokeWidth="1.5" strokeDasharray="4" />
        <circle cx="40" cy="100" r="4" fill="#000" />
        <circle cx="65" cy="25" r="4" fill="#000" />
        <circle cx="190" cy="100" r="4" fill="#000" />
        <text x="25" y="112" fontSize="12" fontWeight="bold">B</text>
        <text x="60" y="18" fontSize="12" fontWeight="bold">A</text>
        <text x="195" y="105" fontSize="12" fontWeight="bold">C</text>
        <text x="45" y="58" fontSize="10" fontWeight="bold">4 cm</text>
        <text x="110" y="116" fontSize="10" fontWeight="bold">8 cm</text>
        <path d="M 55 100 A 15 15 0 0 0 46 86" fill="none" stroke="#000" strokeWidth="1.5" />
        <text x="58" y="88" fontSize="9" fontWeight="bold">80°</text>
      </svg>
    ),
    hint: "Think about whether you can rotate arm AB relative to BC without changing their individual lengths.",
    modelAnswer: "1. Knowing only arm lengths AB = 4 cm and BC = 8 cm is not enough because the angle between them can vary, producing infinitely many different shapes.\n2. The third required measurement is the measure of the included angle ∠ABC (e.g., ∠ABC = 80°), which completely fixes both the shape and size."
  },
  {
    id: "q2",
    qNum: 2,
    title: "Congruence of Circles & Rectangular Parameters",
    marks: 2,
    question: "(a) Circle C₁ has radius r₁ = 3.5 cm and Circle C₂ has diameter d₂ = 7.0 cm. Prove whether they are congruent.\n(b) What two parameters are necessary and sufficient to determine if two rectangles are congruent?",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 3",
    diagramSvg: (
      <svg width="220" height="100" viewBox="0 0 220 100" className="mx-auto">
        <circle cx="55" cy="50" r="35" fill="none" stroke="#000" strokeWidth="2" />
        <line x1="55" y1="50" x2="90" y2="50" stroke="#000" strokeWidth="1.5" />
        <circle cx="55" cy="50" r="2.5" fill="#000" />
        <text x="60" y="45" fontSize="9" fontWeight="bold">r=3.5</text>
        <text x="45" y="94" fontSize="10" fontWeight="bold">Circle C₁</text>
        <circle cx="160" cy="50" r="35" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3" />
        <line x1="125" y1="50" x2="195" y2="50" stroke="#000" strokeWidth="1.5" />
        <circle cx="160" cy="50" r="2.5" fill="#000" />
        <text x="145" y="45" fontSize="9" fontWeight="bold">d=7.0</text>
        <text x="148" y="94" fontSize="10" fontWeight="bold">Circle C₂</text>
      </svg>
    ),
    hint: "What is the relation between diameter and radius? What are the two dimensions of a rectangle?",
    modelAnswer: "(a) Radius of C₂ = d₂ / 2 = 7.0 / 2 = 3.5 cm. Since r₁ = r₂ = 3.5 cm, both circles superimpose exactly and are congruent.\n(b) The two necessary parameters for rectangles are length (l) and breadth (b)."
  },
  {
    id: "q3",
    qNum: 3,
    title: "Rabia & Meera's Triangular Frame (Compass Arc & SSS Proof)",
    marks: 3,
    question: "Rabia constructs base segment AB = 6 cm and strikes circles of radii 4 cm and 8 cm from endpoints A and B. The circles intersect at points E and F. Prove why ∆ABE and ∆ABF are congruent, and explain which line acts as the line of symmetry.",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 5 & 6",
    diagramSvg: (
      <svg width="220" height="140" viewBox="0 0 220 140" className="mx-auto">
        <line x1="45" y1="70" x2="165" y2="70" stroke="#000" strokeWidth="2.5" />
        <line x1="45" y1="70" x2="105" y2="15" stroke="#000" strokeWidth="2" />
        <line x1="165" y1="70" x2="105" y2="15" stroke="#000" strokeWidth="2" />
        <line x1="45" y1="70" x2="105" y2="125" stroke="#000" strokeWidth="2" />
        <line x1="165" y1="70" x2="105" y2="125" stroke="#000" strokeWidth="2" />
        <path d="M 95 10 A 50 50 0 0 1 115 25" stroke="#888" strokeDasharray="3" fill="none" />
        <path d="M 95 130 A 50 50 0 0 0 115 115" stroke="#888" strokeDasharray="3" fill="none" />
        <circle cx="45" cy="70" r="3.5" fill="#000" />
        <circle cx="165" cy="70" r="3.5" fill="#000" />
        <circle cx="105" cy="15" r="3.5" fill="#000" />
        <circle cx="105" cy="125" r="3.5" fill="#000" />
        <text x="30" y="74" fontSize="12" fontWeight="bold">A</text>
        <text x="172" y="74" fontSize="12" fontWeight="bold">B</text>
        <text x="103" y="10" fontSize="12" fontWeight="bold">E</text>
        <text x="103" y="137" fontSize="12" fontWeight="bold">F</text>
        <text x="95" y="83" fontSize="9" fontWeight="bold">AB = 6 cm</text>
        <text x="60" y="38" fontSize="8" fontWeight="bold">4 cm</text>
        <text x="140" y="38" fontSize="8" fontWeight="bold">8 cm</text>
      </svg>
    ),
    hint: "Compare all three sides: AE with AF, BE with BF, and the shared common base AB.",
    modelAnswer: "1. In ∆ABE and ∆ABF: AE = AF = 4 cm (radii of circle at A), BE = BF = 8 cm (radii of circle at B), and AB = AB (common side).\n2. By SSS (Side-Side-Side) criterion, ∆ABE ≅ ∆ABF.\n3. The base segment AB acts as the line of reflection symmetry."
  },
  {
    id: "q4",
    qNum: 4,
    title: "Side Matching & Strict Vertex Correspondence Notation",
    marks: 2,
    question: "In the figure below, triangle RED has sides RE = 3.5 cm, ED = 5 cm, DR = 6 cm and triangle JAM has JA = 3.5 cm, AM = 5 cm, MJ = 6 cm. Determine if they are congruent by SSS, state the 1-to-1 vertex correspondence, and write the symbolic congruence statement.",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 7 & 8",
    diagramSvg: (
      <svg width="220" height="120" viewBox="0 0 220 120" className="mx-auto">
        <polygon points="20,100 80,100 45,25" fill="none" stroke="#000" strokeWidth="2" />
        <text x="10" y="105" fontSize="11" fontWeight="bold">R</text>
        <text x="85" y="105" fontSize="11" fontWeight="bold">E</text>
        <text x="42" y="18" fontSize="11" fontWeight="bold">D</text>
        <text x="42" y="112" fontSize="9">3.5 cm</text>
        <text x="18" y="60" fontSize="9">6 cm</text>
        <text x="68" y="60" fontSize="9">5 cm</text>
        <polygon points="135,100 195,100 160,25" fill="none" stroke="#000" strokeWidth="2" />
        <text x="125" y="105" fontSize="11" fontWeight="bold">J</text>
        <text x="200" y="105" fontSize="11" fontWeight="bold">A</text>
        <text x="157" y="18" fontSize="11" fontWeight="bold">M</text>
        <text x="155" y="112" fontSize="9">3.5 cm</text>
        <text x="133" y="60" fontSize="9">6 cm</text>
        <text x="183" y="60" fontSize="9">5 cm</text>
      </svg>
    ),
    hint: "Match sides of equal lengths: RE=JA, ED=AM, DR=MJ. Then write vertices in order.",
    modelAnswer: "1. Yes, the triangles are congruent by SSS because RE = JA = 3.5 cm, ED = AM = 5 cm, and DR = MJ = 6 cm.\n2. Correspondence: R ↔ J, E ↔ A, D ↔ M.\n3. Congruence statement: ∆RED ≅ ∆JAM (or ∆EDR ≅ ∆AMJ, etc.)."
  },
  {
    id: "q5",
    qNum: 5,
    title: "Kite Quadrilateral SSS & Angle Bisector Proof",
    marks: 3,
    question: "In Kite ABCD shown below, AB = AD and CB = CD. Using the SSS congruence criterion, prove that ∆ABC ≅ ∆ADC. Hence, explain why diagonal AC divides ∠BAD and ∠BCD into two equal parts.",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 9",
    diagramSvg: (
      <svg width="220" height="150" viewBox="0 0 220 150" className="mx-auto">
        <polygon points="110,15 185,60 110,135 35,60" fill="none" stroke="#000" strokeWidth="2" />
        <line x1="110" y1="15" x2="110" y2="135" stroke="#000" strokeWidth="2" strokeDasharray="4" />
        <line x1="68" y1="36" x2="74" y2="40" stroke="#000" strokeWidth="1.5" />
        <line x1="146" y1="36" x2="152" y2="40" stroke="#000" strokeWidth="1.5" />
        <line x1="68" y1="96" x2="74" y2="100" stroke="#000" strokeWidth="1.5" />
        <line x1="71" y1="99" x2="77" y2="103" stroke="#000" strokeWidth="1.5" />
        <line x1="146" y1="96" x2="152" y2="100" stroke="#000" strokeWidth="1.5" />
        <line x1="143" y1="99" x2="149" y2="103" stroke="#000" strokeWidth="1.5" />
        <text x="106" y="10" fontSize="11" fontWeight="bold">A</text>
        <text x="20" y="64" fontSize="11" fontWeight="bold">B</text>
        <text x="106" y="146" fontSize="11" fontWeight="bold">C</text>
        <text x="190" y="64" fontSize="11" fontWeight="bold">D</text>
      </svg>
    ),
    hint: "Identify the shared common side between ∆ABC and ∆ADC. Then use CPCTC (Corresponding Parts of Congruent Triangles).",
    modelAnswer: "1. In ∆ABC and ∆ADC: AB = AD (given), CB = CD (given), and AC = AC (common side).\n2. By SSS, ∆ABC ≅ ∆ADC.\n3. Since corresponding angles of congruent triangles are equal, ∠BAC = ∠DAC and ∠BCA = ∠DCA. Therefore, diagonal AC bisects ∠BAD and ∠BCD."
  },
  {
    id: "q6",
    qNum: 6,
    title: "SAS Criterion vs The Failure of AAA Condition",
    marks: 2,
    question: "(a) Why does AAA (equal angles 30°, 70°, 80°) fail to guarantee congruence between two triangles?\n(b) In ∆ABC with AB = 6 cm and AC = 5 cm, why must the 30° angle be strictly at vertex A (Included) for SAS congruence to hold?",
    ncertRef: "NCERT Class 7 Maths | Ganita Prakash Part-II, Page 10",
    diagramSvg: (
      <svg width="220" height="110" viewBox="0 0 220 110" className="mx-auto">
        <polygon points="30,90 190,90 70,25" fill="none" stroke="#000" strokeWidth="2" />
        <text x="18" y="94" fontSize="11" fontWeight="bold">A</text>
        <text x="195" y="94" fontSize="11" fontWeight="bold">B</text>
        <text x="66" y="18" fontSize="11" fontWeight="bold">C</text>
        <text x="105" y="103" fontSize="9" fontWeight="bold">AB = 6 cm</text>
        <text x="32" y="52" fontSize="9" fontWeight="bold">AC = 5 cm</text>
        <path d="M 45 90 A 15 15 0 0 0 38 78" fill="none" stroke="#000" strokeWidth="1.5" />
        <text x="46" y="82" fontSize="9" fontWeight="bold">30°</text>
      </svg>
    ),
    hint: "Does knowing only angles fix the size? What happens if the angle is not between the two known sides?",
    modelAnswer: "(a) AAA guarantees same shape (similarity), but not same size. Infinitely many magnified/reduced triangles can have the same angles.\n(b) If the angle is non-included (SSA case), the opposite side can swing and intersect at two different positions, creating two non-congruent triangles. Only locking the included angle locks the triangle uniquely."
  }
];

export default function WorksheetStudio() {
  const [activeTab, setActiveTab] = useState<"all" | string>("all");
  const [showPdfViewer, setShowPdfViewer] = useState(true);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});

  const handleAnswerChange = (qId: string, val: string) => {
    setStudentAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const toggleSolution = (qId: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleHint = (qId: string) => {
    setRevealedHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const resetAll = () => {
    setStudentAnswers({});
    setRevealedSolutions({});
    setRevealedHints({});
  };

  const filteredQuestions = activeTab === "all" 
    ? diagramQuestions 
    : diagramQuestions.filter((q) => q.id === activeTab);

  return (
    <div className="min-h-screen bg-[#130d14] text-[#f7eef3] flex flex-col font-sans selection:bg-[#e05688] selection:text-white">
      {/* =========================================================================
          SCREEN INTERACTIVE VIEW (Cosmos Theme)
          ========================================================================= */}
      <div className="print:hidden flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="border-b border-[#3d2433] bg-[#1d121c]/95 backdrop-blur-md sticky top-0 z-30 px-3 py-2.5 sm:px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
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
                Ch-1: Geometric Twins <span className="text-xs font-normal text-[#c7a4b6]">(Subjective Diagram Studio)</span>
              </h1>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            {/* Toggle Split PDF */}
            <button
              onClick={() => setShowPdfViewer((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                showPdfViewer 
                  ? "bg-[#e05688]/20 border-[#e05688]/50 text-[#ff80ab]" 
                  : "bg-[#271725] border-[#442639] text-[#e0cfd8] hover:bg-[#341e31]"
              }`}
              title="Toggle Parallel Textbook PDF"
            >
              <Columns size={14} className={showPdfViewer ? "text-[#ff80ab]" : ""} />
              <span className="hidden sm:inline">{showPdfViewer ? "Hide PDF" : "Show PDF"}</span>
            </button>

            {/* Print Full Laser Sheet */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#e05688] to-[#c73e70] hover:from-[#e96796] hover:to-[#d84b7f] text-xs font-bold text-white transition-all cursor-pointer shadow-md shadow-[#e05688]/20"
              title="Print high-contrast laser worksheet for classroom/test"
            >
              <Printer size={14} />
              <span>Print Worksheet</span>
            </button>

            {/* Direct PDF Link */}
            <a
              href="/class7-maths-ch1-worksheet-onenote.pdf"
              target="_blank"
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#271725] hover:bg-[#382035] border border-[#49273d] text-xs font-semibold text-[#f0dfe7] transition-all cursor-pointer"
              title="Download compiled PDF file for OneNote teaching"
            >
              <Download size={14} className="text-[#ff80ab]" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Reset */}
            <button
              onClick={resetAll}
              className="p-1.5 rounded-lg bg-[#271725] hover:bg-[#382035] border border-[#49273d] text-[#c9a7b9] hover:text-white transition-all cursor-pointer"
              title="Clear all digital answers"
            >
              <RefreshCw size={13} />
            </button>
          </div>
        </header>

        {/* Dual-Pane Parallel Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* LEFT PANE: Live NCERT Textbook Reference */}
          {showPdfViewer && (
            <aside className="w-full lg:w-1/2 border-r border-[#382030] bg-[#160f17] flex flex-col h-[calc(100vh-57px)]">
              <div className="px-4 py-2 bg-[#1b121c] border-b border-[#382030] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff80ab] animate-pulse" />
                  <span className="font-bold text-[#f2e6ed]">Official NCERT Textbook PDF (Ganita Prakash)</span>
                </div>
                <a 
                  href="/pdf/gegp201.pdf" 
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
                  src="/pdf/gegp201.pdf#toolbar=1&navpanes=0"
                  className="w-full h-full border-0"
                  title="NCERT Class 7 Maths Part-II"
                />
              </div>
            </aside>
          )}

          {/* RIGHT PANE: Interactive Subjective Worksheet (No MCQs, Full Diagrams & Working Space) */}
          <main className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 h-[calc(100vh-57px)] ${
            showPdfViewer ? "w-full lg:w-1/2" : "w-full max-w-5xl mx-auto"
          }`}>
            {/* Filter Tabs */}
            <div className="p-3 rounded-2xl bg-[#1e141f] border border-[#3b2333] flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs font-bold scrollbar-thin">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 border ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-[#e05688] to-[#c73e70] border-[#ff80ab] text-white shadow-sm font-black"
                      : "bg-[#160e17] border-[#382030] text-[#d8bfcd] hover:border-[#6b3a56]"
                  }`}
                >
                  All Questions ({diagramQuestions.length})
                </button>
                {diagramQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveTab(q.id)}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 border ${
                      activeTab === q.id
                        ? "bg-gradient-to-r from-[#e05688] to-[#c73e70] border-[#ff80ab] text-white shadow-sm font-black"
                        : "bg-[#160e17] border-[#382030] text-[#d8bfcd] hover:border-[#6b3a56]"
                    }`}
                  >
                    Q{q.qNum}
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-bold text-[#ff80ab] shrink-0 hidden sm:block">
                No MCQs • Proof & Step-by-Step Solving
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {filteredQuestions.map((q) => (
                <div 
                  key={q.id}
                  className="p-5 rounded-2xl bg-[#1c121d] border border-[#3a2233] space-y-4 shadow-sm hover:border-[#522a46] transition-colors"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3 border-b border-[#31192b] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#e05688] to-[#913054] text-white font-black text-xs flex items-center justify-center shadow-xs">
                        Q{q.qNum}
                      </span>
                      <div>
                        <h2 className="text-sm font-extrabold text-white tracking-tight">
                          {q.title}
                        </h2>
                        <span className="text-[10px] text-[#b895a7] font-medium">{q.ncertRef}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="border border-[#e05688]/40 bg-[#3a1525] px-2 py-0.5 rounded text-[10px] font-black text-[#ff80ab]">
                        [{q.marks} Marks]
                      </span>
                      <button
                        onClick={() => toggleHint(q.id)}
                        className="text-xs text-[#f5c044] hover:text-[#ffd666] flex items-center gap-1 cursor-pointer font-bold ml-1"
                      >
                        <HelpCircle size={13} />
                        <span>{revealedHints[q.id] ? "Hide Hint" : "Hint"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <p className="text-xs sm:text-sm font-semibold text-[#f5ebf1] leading-relaxed whitespace-pre-line">
                    {q.question}
                  </p>

                  {/* Hint Banner */}
                  {revealedHints[q.id] && (
                    <div className="p-3 rounded-xl bg-[#2e1d0d]/70 border border-[#b48227]/50 text-[#ffd580] text-xs leading-relaxed flex items-start gap-2">
                      <span className="font-bold text-[#f5c044] shrink-0">💡 Concept Hint:</span>
                      <span>{q.hint}</span>
                    </div>
                  )}

                  {/* Diagram & Teacher Solving / Student Working Area Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch pt-1">
                    {/* Visual Diagram Box */}
                    <div className="md:col-span-5 border border-white/20 rounded-xl p-3 bg-white text-black flex flex-col justify-center items-center shadow-inner">
                      <div className="text-[9px] font-extrabold text-black uppercase tracking-wider mb-2 border-b border-black pb-0.5 w-full text-center">
                        NCERT Geometric Figure
                      </div>
                      <div className="py-2">
                        {q.diagramSvg}
                      </div>
                    </div>

                    {/* Dedicated Subjective Answer Typing / Stylus Notes Area */}
                    <div className="md:col-span-7 flex flex-col">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#cfb0c0] mb-1.5">
                        <span className="flex items-center gap-1">
                          <span>✍️ Step-by-Step Solution & Working Space:</span>
                        </span>
                        <span className="text-[10px] text-[#8e6e80]">
                          (Type answer here or write with stylus on tablet)
                        </span>
                      </div>
                      <textarea
                        value={studentAnswers[q.id] || ""}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        placeholder="Write your mathematical proof, reasoning, and final statement step-by-step..."
                        className="w-full flex-1 min-h-[140px] p-3 rounded-xl bg-[#140b15] border border-[#3b2333] focus:border-[#e05688] text-white text-xs leading-relaxed outline-none resize-y placeholder-[#69485b]"
                      />
                    </div>
                  </div>

                  {/* Model Solution Toggle */}
                  <div className="pt-2 border-t border-[#31192b] flex items-center justify-between">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#ff80ab] hover:text-[#ffa3c2] cursor-pointer"
                    >
                      {revealedSolutions[q.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                      <span>{revealedSolutions[q.id] ? "Hide Model Answer & Key" : "View Step-by-Step Model Solution"}</span>
                    </button>

                    {studentAnswers[q.id] && (
                      <span className="text-[11px] text-[#4ade80] flex items-center gap-1 font-bold">
                        <CheckCircle2 size={13} /> Draft Saved
                      </span>
                    )}
                  </div>

                  {/* Model Solution Box */}
                  {revealedSolutions[q.id] && (
                    <div className="p-3.5 rounded-xl bg-[#111f18] border border-[#22573a] text-xs text-[#dcfce7] space-y-1.5">
                      <div className="font-black text-[#4ade80] uppercase tracking-wider text-[11px]">
                        Teacher's Complete Model Solution:
                      </div>
                      <p className="whitespace-pre-line leading-relaxed font-mono text-[11.5px] text-[#bbf7d0]">
                        {q.modelAnswer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* =========================================================================
          PRINTABLE WORKSHEET VIEW (Strict High-Contrast Laser Printer A4 Format)
          Active ONLY during Ctrl+P or Print Button Click
          ========================================================================= */}
      <div className="hidden print:block bg-white text-black font-sans w-full p-0 m-0">
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm 14mm 12mm 14mm;
            }
            body {
              background: #ffffff !important;
              color: #000000 !important;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .avoid-break {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            .page-break {
              page-break-before: always !important;
              break-before: page !important;
            }
            .ruled-writing-box {
              background-image: repeating-linear-gradient(transparent, transparent 23px, #000000 24px) !important;
              border: 1.5pt solid #000000 !important;
            }
          }
        ` }} />

        {/* Page 1 of Printed Test Paper (Q1, Q2) */}
        <div className="min-h-[265mm] flex flex-col justify-between">
          <div>
            {/* Header Box */}
            <div className="border-2 border-black p-3.5 rounded-lg mb-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-black rounded flex items-center justify-center font-black text-xl">
                    NS
                  </div>
                  <div>
                    <h1 className="text-base font-black tracking-wider uppercase">
                      NEXTSEM ACADEMY • SCHOOL WORKSHEET
                    </h1>
                    <p className="text-[10px] font-bold uppercase text-gray-800">
                      NCERT Assessment Series • Class 7 Mathematics (Ganita Prakash Part-II)
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block border-2 border-black px-2 py-0.5 rounded text-[11px] font-black uppercase">
                    Subjective Paper
                  </span>
                  <div className="text-[10px] font-bold mt-1">Total Marks: 14</div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs font-bold">
                <div>
                  <span className="font-black">CHAPTER 1: </span>
                  <span className="font-black underline">GEOMETRIC TWINS (CONGRUENCE)</span>
                </div>
                <div className="font-mono text-[11px]">Pages 1 - 10 In-depth Assessment</div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-black grid grid-cols-3 gap-4 text-xs font-black">
                <div>NAME: <span className="font-normal">___________________________</span></div>
                <div>ROLL NO: <span className="font-normal">______________</span></div>
                <div>DATE: <span className="font-normal">______________</span></div>
              </div>
            </div>

            {/* Questions 1 and 2 */}
            <div className="space-y-4">
              {diagramQuestions.slice(0, 2).map((q) => (
                <div key={q.id} className="avoid-break border-2 border-black p-3 rounded-lg">
                  <div className="flex justify-between items-start font-black text-xs border-b border-black pb-1 mb-2">
                    <span>Q{q.qNum}. {q.title}</span>
                    <span className="border border-black px-1.5 rounded">[{q.marks} Marks]</span>
                  </div>
                  <p className="text-xs font-bold mb-2.5 leading-snug whitespace-pre-line">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-12 gap-3 items-stretch">
                    <div className="col-span-5 border border-black p-2 rounded text-center bg-white flex flex-col justify-center items-center">
                      <div className="text-[8px] font-black uppercase tracking-wider border-b border-black w-full pb-0.5 mb-1">
                        Given Diagram
                      </div>
                      {q.diagramSvg}
                    </div>
                    <div className="col-span-7 ruled-writing-box rounded p-2 min-h-[120px] flex flex-col justify-between">
                      <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">
                        Student Working / Proof Area:
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-black pt-1 flex justify-between text-[10px] font-bold">
            <div>NextSem Academy • Subjective Geometry Studio</div>
            <div>Page 1 of 3</div>
          </div>
        </div>

        {/* Page 2 of Printed Test Paper (Q3, Q4) */}
        <div className="page-break min-h-[265mm] flex flex-col justify-between pt-2">
          <div>
            <div className="border-b-2 border-black pb-1 mb-4 flex justify-between items-center text-xs font-black uppercase">
              <span>NextSem Academy • Class 7 Maths Ch-1 (Continued)</span>
              <span>Student Roll No: ___________</span>
            </div>

            <div className="space-y-4">
              {diagramQuestions.slice(2, 4).map((q) => (
                <div key={q.id} className="avoid-break border-2 border-black p-3 rounded-lg">
                  <div className="flex justify-between items-start font-black text-xs border-b border-black pb-1 mb-2">
                    <span>Q{q.qNum}. {q.title}</span>
                    <span className="border border-black px-1.5 rounded">[{q.marks} Marks]</span>
                  </div>
                  <p className="text-xs font-bold mb-2.5 leading-snug whitespace-pre-line">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-12 gap-3 items-stretch">
                    <div className="col-span-5 border border-black p-2 rounded text-center bg-white flex flex-col justify-center items-center">
                      <div className="text-[8px] font-black uppercase tracking-wider border-b border-black w-full pb-0.5 mb-1">
                        Given Diagram
                      </div>
                      {q.diagramSvg}
                    </div>
                    <div className="col-span-7 ruled-writing-box rounded p-2 min-h-[135px] flex flex-col justify-between">
                      <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">
                        Student Working / Proof Area:
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-black pt-1 flex justify-between text-[10px] font-bold">
            <div>NextSem Academy • Subjective Geometry Studio</div>
            <div>Page 2 of 3</div>
          </div>
        </div>

        {/* Page 3 of Printed Test Paper (Q5, Q6 + Teacher Evaluation) */}
        <div className="page-break min-h-[265mm] flex flex-col justify-between pt-2">
          <div>
            <div className="border-b-2 border-black pb-1 mb-4 flex justify-between items-center text-xs font-black uppercase">
              <span>NextSem Academy • Class 7 Maths Ch-1 (Section C & Proofs)</span>
              <span>Student Roll No: ___________</span>
            </div>

            <div className="space-y-4">
              {diagramQuestions.slice(4, 6).map((q) => (
                <div key={q.id} className="avoid-break border-2 border-black p-3 rounded-lg">
                  <div className="flex justify-between items-start font-black text-xs border-b border-black pb-1 mb-2">
                    <span>Q{q.qNum}. {q.title}</span>
                    <span className="border border-black px-1.5 rounded">[{q.marks} Marks]</span>
                  </div>
                  <p className="text-xs font-bold mb-2.5 leading-snug whitespace-pre-line">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-12 gap-3 items-stretch">
                    <div className="col-span-5 border border-black p-2 rounded text-center bg-white flex flex-col justify-center items-center">
                      <div className="text-[8px] font-black uppercase tracking-wider border-b border-black w-full pb-0.5 mb-1">
                        Given Diagram
                      </div>
                      {q.diagramSvg}
                    </div>
                    <div className="col-span-7 ruled-writing-box rounded p-2 min-h-[130px] flex flex-col justify-between">
                      <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">
                        Student Working / Proof Area:
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Teacher Evaluation & Grading Box */}
            <div className="avoid-break mt-5 border-2 border-black p-3 rounded-lg text-xs font-bold">
              <div className="flex items-center justify-between pb-2 border-b border-black">
                <div>TEACHER'S SIGNATURE: _______________________</div>
                <div>MARKS OBTAINED: ______ / 14</div>
              </div>
              <div className="mt-2 text-[10px] text-gray-700">
                Teacher Remarks: __________________________________________________________________________
              </div>
            </div>
          </div>

          <div className="border-t border-black pt-1 flex justify-between text-[10px] font-bold">
            <div>NextSem Academy • Subjective Geometry Studio</div>
            <div>Page 3 of 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
