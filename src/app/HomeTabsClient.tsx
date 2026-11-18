"use client";

import React, { useState } from "react";
import AttendanceRegisterStudio from "@/components/AttendanceRegisterStudio";
import UniversalWorkbookStudio from "@/components/UniversalWorkbookStudio";
import WorksheetStudio from "@/components/WorksheetStudio";
import { ClipboardList, Sparkles, BookOpen } from "lucide-react";

export default function HomeTabsClient() {
  const [activeTab, setActiveTab] = useState<"universal" | "maths-ncert" | "attendance">("universal");

  return (
    <div>
      {/* Top Global Navigation Bar */}
      <nav className="bg-neutral-900 text-white border-b border-neutral-800 px-4 py-2 print:hidden sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-black tracking-wider text-neutral-300">
            NEXTSEM STUDIO
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setActiveTab("universal")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "universal"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            <Sparkles size={14} className="text-yellow-300" />
            <span>AI Workbook Generator (Any Subject)</span>
          </button>

          <button
            onClick={() => setActiveTab("maths-ncert")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "maths-ncert"
                ? "bg-gradient-to-r from-[#e05688] to-[#c73e70] text-white shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            <BookOpen size={14} />
            <span>NCERT Split Studio</span>
          </button>

          <button
            onClick={() => setActiveTab("attendance")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "attendance"
                ? "bg-white text-black shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            <ClipboardList size={14} />
            <span>Attendance Register</span>
          </button>
        </div>

        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          Port 3005 • OneNote / Printable A4
        </div>
      </nav>

      {/* Render Active View */}
      {activeTab === "universal" ? (
        <UniversalWorkbookStudio />
      ) : activeTab === "maths-ncert" ? (
        <WorksheetStudio />
      ) : (
        <AttendanceRegisterStudio />
      )}
    </div>
  );
}
