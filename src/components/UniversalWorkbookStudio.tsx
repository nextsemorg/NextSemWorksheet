"use client";

import React, { useState } from "react";
import { Upload, CheckCircle2, Sparkles, Printer, Key, ShieldCheck, RefreshCw } from "lucide-react";
import { SubjectType, GeneratedWorkbook } from "@/types/workbook";
import { sampleMathsWorkbook } from "@/data/sampleMathsWorkbook";
import { sampleScienceWorkbook } from "@/data/sampleScienceWorkbook";
import { sampleSstWorkbook } from "@/data/sampleSstWorkbook";
import { sampleEnglishWorkbook } from "@/data/sampleEnglishWorkbook";

import MathsPageSheet from "@/components/MathsPageSheet";
import SciencePageSheet from "@/components/SciencePageSheet";
import SstPageSheet from "@/components/SstPageSheet";
import EnglishPageSheet from "@/components/EnglishPageSheet";

export default function UniversalWorkbookStudio() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>("english");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [geminiApiKey, setGeminiApiKey] = useState<string>("");
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [workbook, setWorkbook] = useState<GeneratedWorkbook>(sampleEnglishWorkbook);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("Student Name");
  const [classNameInput, setClassNameInput] = useState<string>("Class 7-A");
  const [rollNoInput, setRollNoInput] = useState<string>("01");
  const [statusMsg, setStatusMsg] = useState<string>("");

  const subjects: { id: SubjectType; label: string; icon: string; desc: string; color: string }[] = [
    {
      id: "maths",
      label: "Mathematics",
      icon: "📐",
      desc: "Geometric SVG vectors, step-by-step proofs, 5mm dot-grid construction pads",
      color: "border-blue-500",
    },
    {
      id: "science",
      label: "Science",
      icon: "🔬",
      desc: "Observation frames, diagram labeling, cause-effect hypothesis flowcharts",
      color: "border-emerald-500",
    },
    {
      id: "sst",
      label: "Social Studies",
      icon: "🌍",
      desc: "Historical chronological timelines, map tagging frames, reasoned subjective lines",
      color: "border-amber-500",
    },
    {
      id: "english",
      label: "Language & Literature",
      icon: "📖",
      desc: "Unseen reading passages, vocabulary drill cards, ruled handwriting margins",
      color: "border-purple-500",
    },
  ];

  const handleSelectSubject = (sub: SubjectType) => {
    setSelectedSubject(sub);
    setActivePageIndex(0);
    if (sub === "maths") setWorkbook(sampleMathsWorkbook);
    if (sub === "science") setWorkbook(sampleScienceWorkbook);
    if (sub === "sst") setWorkbook(sampleSstWorkbook);
    if (sub === "english") setWorkbook(sampleEnglishWorkbook);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setIsProcessing(true);
      setStatusMsg("Uploading & extracting page structures with scalable vectors...");

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("subject", selectedSubject);
        if (geminiApiKey) formData.append("apiKey", geminiApiKey);

        const res = await fetch("/api/generate-workbook", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.success && data.workbook) {
          setWorkbook(data.workbook);
          setStatusMsg(data.mode === "gemini-live" ? "✨ Synthesized with Gemini Vision" : "✅ Formatted with Subject Vector Engine");
        }
      } catch (err) {
        console.error("Upload error:", err);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handlePrintAll = () => {
    window.print();
  };

  // Helper to render subject sheet
  const renderSheet = (pageData: typeof workbook.pages[0]) => {
    if (selectedSubject === "science") {
      return (
        <SciencePageSheet
          page={pageData}
          studentName={studentName}
          classNameStr={classNameInput}
          rollNo={rollNoInput}
        />
      );
    }
    if (selectedSubject === "sst") {
      return (
        <SstPageSheet
          page={pageData}
          studentName={studentName}
          classNameStr={classNameInput}
          rollNo={rollNoInput}
        />
      );
    }
    if (selectedSubject === "english") {
      return (
        <EnglishPageSheet
          page={pageData}
          studentName={studentName}
          classNameStr={classNameInput}
          rollNo={rollNoInput}
        />
      );
    }
    return (
      <MathsPageSheet
        page={pageData}
        studentName={studentName}
        classNameStr={classNameInput}
        rollNo={rollNoInput}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-16">
      
      {/* Top Banner & Subject Selector (Hidden in Print) */}
      <div className="print:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono uppercase bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full font-bold">
                  NextSem Universal Workbook Studio
                </span>
                <span className="text-xs text-slate-400">PDF to Subject-Specific A4 Workbooks</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                AI Workbook Generator with Scalable Vectors
              </h1>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowKeyInput((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-mono text-xs font-bold border border-slate-700 cursor-pointer transition-all"
                title="Optional Gemini API Key"
              >
                <Key size={14} className="text-amber-400" />
                <span>{geminiApiKey ? "API Key Connected" : "Custom Gemini Key"}</span>
              </button>

              <button
                onClick={handlePrintAll}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-mono text-xs font-bold shadow-md cursor-pointer transition-all"
              >
                <Printer size={15} />
                <span>Print A4 Workbook</span>
              </button>
            </div>
          </div>

          {/* Optional Gemini Key Input Dropdown */}
          {showKeyInput && (
            <div className="mb-4 p-3 bg-slate-900 border border-slate-700 rounded-xl flex items-center gap-3">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <input
                type="password"
                placeholder="Paste Gemini API Key (Optional for live custom PDF AI processing)"
                value={geminiApiKey}
                onChange={(e) => setGeminiApiKey(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-xs text-white flex-grow font-mono focus:outline-none focus:border-purple-500"
              />
              <span className="text-[11px] text-slate-400 font-mono">
                {geminiApiKey ? "Live Gemini Vision Active" : "Default High-Res Vector Templates Active"}
              </span>
            </div>
          )}

          {/* Subject Switcher Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {subjects.map((sub) => {
              const isActive = selectedSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => handleSelectSubject(sub.id)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? `bg-slate-800 ${sub.color} shadow-md ring-2 ring-purple-500/30`
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="text-2xl mb-1">{sub.icon}</div>
                  <div className="font-bold text-xs text-white flex items-center justify-between">
                    <span>{sub.label}</span>
                    {isActive && <CheckCircle2 size={14} className="text-purple-400" />}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                    {sub.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Drag & Drop Upload Zone + Student Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
            {/* File Upload Button */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <label className="border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-lg p-3 text-center cursor-pointer transition-all flex items-center justify-center gap-3 bg-slate-950/50">
                <Upload size={20} className="text-purple-400" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{uploadedFile ? uploadedFile.name : `Upload ${selectedSubject.toUpperCase()} Textbook or Chapter PDF`}</span>
                    {isProcessing && <RefreshCw size={12} className="animate-spin text-purple-400" />}
                  </div>
                  <div className="text-[10.5px] text-slate-400">
                    {statusMsg || "Supports NCERT, State Board, or Custom Question Papers"}
                  </div>
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Student Customization Form */}
            <div className="flex flex-col justify-center gap-1.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 w-16">Name:</span>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white flex-grow focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 w-16">Class:</span>
                <input
                  type="text"
                  value={classNameInput}
                  onChange={(e) => setClassNameInput(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white flex-grow focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Quick Page Navigator */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800 font-mono text-xs">
            <span className="text-slate-400 font-bold">Quick Page Switcher:</span>
            {workbook.pages.map((p, idx) => (
              <button
                key={p.pageNumber}
                onClick={() => setActivePageIndex(idx)}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  activePageIndex === idx
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Page {p.pageNumber}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Main Worksheet Canvas */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        
        {/* Screen: Active Page */}
        <div className="print:hidden">
          {workbook.pages[activePageIndex] ? (
            renderSheet(workbook.pages[activePageIndex])
          ) : (
            <div className="text-center p-12 text-slate-400">No pages found</div>
          )}
        </div>

        {/* Print Only: All Pages in Sequence */}
        <div className="hidden print:block">
          {workbook.pages.map((p) => (
            <div key={p.pageNumber} className="page-break-after-always">
              {renderSheet(p)}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
