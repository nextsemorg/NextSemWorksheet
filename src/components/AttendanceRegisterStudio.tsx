"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Printer, Download, FileSpreadsheet, Sparkles, RefreshCw, 
  CheckCircle2, XCircle, Calendar, Users, Eye, Edit3, 
  ChevronLeft, ChevronRight, HelpCircle, ArrowLeft, BookmarkCheck,
  Check, Layers, Award, BookOpen
} from "lucide-react";
import { 
  generate100Students, StudentAttendance, MONTH_NAMES, DAYS_OF_WEEK 
} from "@/data/attendanceData";

export default function AttendanceRegisterStudio() {
  const [month, setMonth] = useState<number>(10); // 10 = November (0-indexed)
  const [year, setYear] = useState<number>(2026);
  const [institutionName, setInstitutionName] = useState<string>("NextSem Academy / Class 7");
  const [classNameInput, setClassNameInput] = useState<string>("Class 7-A (Maths)");
  const [students, setStudents] = useState<StudentAttendance[]>(() => generate100Students(false));
  
  // Default to Portrait 2-Page Spread Standard
  // Page 1: Students 1–50 (Days 1–15)
  // Page 2: Students 1–50 (Days 16–31 + Summary: Present, Absent, Remarks)
  // Page 3: Students 51–100 (Days 1–15)
  // Page 4: Students 51–100 (Days 16–31 + Summary: Present, Absent, Remarks)
  const [activeSpreadSheet, setActiveSpreadSheet] = useState<"batch1-left" | "batch1-right" | "batch2-left" | "batch2-right" | "all-4-pages">("batch1-left");
  const [blankTemplateMode, setBlankTemplateMode] = useState<boolean>(true);

  // Number of days in selected month and year
  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [month, year]);

  // Weekdays map
  const dayWeekdays = useMemo(() => {
    const map: Record<number, { dayName: string; isSunday: boolean }> = {};
    for (let d = 1; d <= daysInMonth; d++) {
      const dayOfWeek = new Date(year, month, d).getDay();
      map[d] = {
        dayName: DAYS_OF_WEEK[dayOfWeek],
        isSunday: dayOfWeek === 0,
      };
    }
    return map;
  }, [month, year, daysInMonth]);

  // Batches
  const batch1 = useMemo(() => students.slice(0, 50), [students]);
  const batch2 = useMemo(() => students.slice(50, 100), [students]);

  // Single cell attendance toggle
  const toggleAttendance = (rollNo: number, day: number) => {
    if (blankTemplateMode) return;
    setStudents((prev) =>
      prev.map((s) => {
        if (s.rollNo !== rollNo) return s;
        const current = s.attendance[day] || "";
        let next: "P" | "A" | "L" | "H" | "" = "P";
        if (current === "P") next = "A";
        else if (current === "A") next = "L";
        else if (current === "L") next = "H";
        else if (current === "H") next = "";
        else next = "P";

        return {
          ...s,
          attendance: { ...s.attendance, [day]: next },
        };
      })
    );
  };

  // Student summary calculation
  const getStudentStats = (attendance: Record<number, "P" | "A" | "L" | "H" | "">) => {
    let p = 0, a = 0, l = 0, h = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const val = attendance[d];
      if (val === "P") p++;
      else if (val === "A") a++;
      else if (val === "L") l++;
      else if (val === "H") h++;
    }
    const workingDays = p + a + l;
    const pct = workingDays > 0 ? Math.round((p / workingDays) * 100) : 0;
    return { p, a, l, h, pct, workingDays };
  };

  // Daily totals for bottom rows
  const getBatchDailyTotals = (studentList: StudentAttendance[]) => {
    const presentCount: Record<number, number> = {};
    const absentCount: Record<number, number> = {};
    for (let d = 1; d <= daysInMonth; d++) {
      presentCount[d] = 0;
      absentCount[d] = 0;
      studentList.forEach((s) => {
        if (s.attendance[d] === "P") presentCount[d]++;
        if (s.attendance[d] === "A") absentCount[d]++;
      });
    }
    return { presentCount, absentCount };
  };

  const handlePrint = (allPages: boolean) => {
    if (allPages) {
      setActiveSpreadSheet("all-4-pages");
    }
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Reusable Page Component (50 Students per A4 Portrait Page)
  const renderRegisterPage = (
    studentList: StudentAttendance[],
    dayStart: number,
    dayEnd: number,
    isRightPage: boolean,
    batchTitle: string,
    pageNumber: number
  ) => {
    const totals = getBatchDailyTotals(studentList);
    const dayCount = dayEnd - dayStart + 1;

    return (
      <div key={`page-${pageNumber}`} className="a4-portrait-page bg-white border-2 border-black p-3 sm:p-5 font-mono text-black shadow-md rounded-none mb-8 page-break-after-always">
        
        {/* Header: Attendance Register of _____________________ (Exact copy of image) */}
        <div className="mb-2 pb-1.5 border-b-2 border-black">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2 flex-grow">
              <h2 className="text-sm sm:text-base font-bold tracking-tight uppercase whitespace-nowrap">
                Attendance Register of
              </h2>
              <div className="border-b border-black flex-grow pb-0.5 px-2 font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-800 truncate">
                {institutionName}
              </div>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-bold shrink-0">
              <div>
                <span>Class: </span>
                <span className="border-b border-black px-1 pb-0.5">{classNameInput}</span>
              </div>
              <div>
                <span>Month: </span>
                <span className="border-b border-black px-1 pb-0.5 uppercase">{MONTH_NAMES[month]} {year}</span>
              </div>
              <div className="text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                {batchTitle} • {isRightPage ? `Days ${dayStart}-${dayEnd} + Summary` : `Days ${dayStart}-${dayEnd}`}
              </div>
            </div>
          </div>
        </div>

        {/* Table Grid (50 Students) */}
        <div className="border border-black overflow-hidden">
          <table className="w-full text-center border-collapse text-[9.5px]">
            
            {/* Table Header */}
            <thead>
              {/* Row 1: Weekday names */}
              <tr className="border-b border-black bg-slate-50">
                <th rowSpan={2} className="border-r border-black p-0.5 w-7 text-center font-bold uppercase bg-white">
                  Sr.No
                </th>
                <th rowSpan={2} className="border-r border-black p-0.5 w-32 sm:w-36 text-left font-bold bg-white">
                  <div className="text-[10px] leading-tight font-black">Name</div>
                </th>
                <th rowSpan={2} className="border-r border-black p-0.5 w-16 sm:w-20 text-center font-bold bg-white">
                  <div className="text-[10px] leading-tight font-black">Class</div>
                </th>

                {/* Day Weekdays (Mo, Tu, We...) */}
                {Array.from({ length: dayCount }, (_, idx) => {
                  const dayNum = dayStart + idx;
                  const info = dayWeekdays[dayNum];
                  return (
                    <th
                      key={`wd-${dayNum}`}
                      className={`border-r border-black p-0 text-[8px] font-bold ${
                        info?.isSunday ? "bg-rose-100 text-rose-800 font-black" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {info?.dayName}
                    </th>
                  );
                })}

                {/* If Right Page: Summary Headers (Present, Absent, Remarks) */}
                {isRightPage && (
                  <>
                    <th rowSpan={2} className="border-r border-black p-0.5 w-8 font-bold text-emerald-800 bg-emerald-50 text-[9px] uppercase">
                      P
                    </th>
                    <th rowSpan={2} className="border-r border-black p-0.5 w-8 font-bold text-rose-800 bg-rose-50 text-[9px] uppercase">
                      A
                    </th>
                    <th rowSpan={2} className="p-0.5 w-16 bg-slate-50 font-bold text-[9px] uppercase">
                      Remark
                    </th>
                  </>
                )}
              </tr>

              {/* Row 2: Day Date Numbers (1 to 15 or 16 to 31) */}
              <tr className="border-b-2 border-black bg-white">
                {Array.from({ length: dayCount }, (_, idx) => {
                  const dayNum = dayStart + idx;
                  const info = dayWeekdays[dayNum];
                  return (
                    <th
                      key={`d-${dayNum}`}
                      className={`border-r border-black p-0.5 font-mono font-bold text-[9px] sm:text-[10px] ${
                        info?.isSunday ? "bg-rose-50 text-rose-800" : ""
                      }`}
                    >
                      {dayNum}
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body (50 Records) */}
            <tbody className="divide-y divide-black font-mono">
              {studentList.map((student) => {
                const stats = getStudentStats(student.attendance);

                return (
                  <tr 
                    key={student.rollNo}
                    className="h-[14.8px] leading-none hover:bg-slate-50 transition-colors"
                  >
                    {/* Sr.No */}
                    <td className="border-r border-black p-0 text-center font-bold bg-white text-[9px]">
                      {student.rollNo}
                    </td>

                    {/* Name (Blank space for handwritten entry) */}
                    <td className="border-r border-black p-0.5 text-left font-bold bg-white truncate">
                      {!blankTemplateMode && student.name ? (
                        <span className="truncate text-slate-900">{student.name}</span>
                      ) : (
                        <div className="h-3 w-full"></div>
                      )}
                    </td>

                    {/* Class (Blank space or class entry) */}
                    <td className="border-r border-black p-0.5 text-center bg-white truncate text-[8.5px] text-slate-600">
                      {!blankTemplateMode && student.className ? (
                        <span className="truncate">{student.className}</span>
                      ) : (
                        <div className="h-3 w-full"></div>
                      )}
                    </td>

                    {/* Days Attendance Grid */}
                    {Array.from({ length: dayCount }, (_, idx) => {
                      const dayNum = dayStart + idx;
                      const isSunday = dayWeekdays[dayNum]?.isSunday;
                      const mark = student.attendance[dayNum] || "";

                      return (
                        <td
                          key={`c-${student.rollNo}-${dayNum}`}
                          onClick={() => toggleAttendance(student.rollNo, dayNum)}
                          className={`border-r border-black p-0 text-center font-bold cursor-pointer select-none ${
                            isSunday
                              ? "bg-rose-50/50"
                              : mark === "P"
                              ? "bg-emerald-50 text-emerald-800"
                              : mark === "A"
                              ? "bg-rose-50 text-rose-800 font-black"
                              : "bg-white"
                          }`}
                        >
                          {!blankTemplateMode && (
                            <span className={mark === "P" ? "text-emerald-700" : mark === "A" ? "text-rose-700" : ""}>
                              {mark}
                            </span>
                          )}
                        </td>
                      );
                    })}

                    {/* Right Page: Present, Absent, Remarks */}
                    {isRightPage && (
                      <>
                        <td className="border-r border-black p-0 font-bold text-emerald-800 bg-emerald-50/30 text-[9px]">
                          {!blankTemplateMode && stats.p > 0 ? stats.p : ""}
                        </td>
                        <td className="border-r border-black p-0 font-bold text-rose-800 bg-rose-50/30 text-[9px]">
                          {!blankTemplateMode && stats.a > 0 ? stats.a : ""}
                        </td>
                        <td className="p-0 text-[8px] text-slate-500 text-left px-1">
                          {!blankTemplateMode && stats.pct < 75 && stats.workingDays > 5 ? (
                            <span className="text-rose-700 font-bold">Defaulter</span>
                          ) : ""}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}

              {/* Daily Summary Rows: Total Present & Total Absent */}
              <tr className="border-t-2 border-black bg-slate-100 font-bold text-[8.5px] h-4">
                <td colSpan={3} className="border-r border-black p-0.5 text-right uppercase px-2">
                  Total Present:
                </td>
                {Array.from({ length: dayCount }, (_, idx) => {
                  const dayNum = dayStart + idx;
                  const count = totals.presentCount[dayNum];
                  return (
                    <td key={`tot-p-${dayNum}`} className="border-r border-black p-0 text-center text-emerald-800 font-bold">
                      {!blankTemplateMode && count > 0 ? count : ""}
                    </td>
                  );
                })}
                {isRightPage && <td colSpan={3} className="bg-slate-100"></td>}
              </tr>

              <tr className="border-t border-black bg-slate-100 font-bold text-[8.5px] h-4">
                <td colSpan={3} className="border-r border-black p-0.5 text-right uppercase px-2">
                  Total Absent:
                </td>
                {Array.from({ length: dayCount }, (_, idx) => {
                  const dayNum = dayStart + idx;
                  const count = totals.absentCount[dayNum];
                  return (
                    <td key={`tot-a-${dayNum}`} className="border-r border-black p-0 text-center text-rose-800 font-bold">
                      {!blankTemplateMode && count > 0 ? count : ""}
                    </td>
                  );
                })}
                {isRightPage && <td colSpan={3} className="bg-slate-100"></td>}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Page Footer Signatures */}
        <div className="mt-2 pt-1 border-t border-black flex items-center justify-between text-[9px] font-bold">
          <div>
            Page {pageNumber} of 4 • {batchTitle}
          </div>
          <div className="flex items-center gap-6">
            <span>Teacher Signature: __________________</span>
            <span>Principal Signature: __________________</span>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-[#111827] font-sans pb-20 selection:bg-black selection:text-white">
      
      {/* =========================================================================
          CONTROL BAR (Hidden during Print)
          ========================================================================= */}
      <header className="bg-white border-b-2 border-black sticky top-0 z-30 px-3 sm:px-6 py-2.5 shadow-sm print:hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-lg border border-black hover:bg-black hover:text-white transition-colors"
              title="Worksheet Studio"
            >
              <ArrowLeft size={16} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-black text-white rounded">
                  A4 Portrait Standard
                </span>
                <span className="text-xs font-mono font-bold text-slate-600">
                  50 Records / Page • Days 1-15 (P1) &amp; Days 16-31 + Summary (P2)
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-black font-mono tracking-tight text-black">
                ATTENDANCE REGISTER (100 STUDENTS • PORTRAIT SPREAD)
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Blank Space Toggle */}
            <button
              onClick={() => setBlankTemplateMode(!blankTemplateMode)}
              className={`px-3 py-1.5 rounded border-2 border-black font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                blankTemplateMode ? "bg-black text-white" : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              <Edit3 size={13} />
              <span>{blankTemplateMode ? "Mode: Blank Spaces" : "Mode: Sample Names"}</span>
            </button>

            {/* Print Current Selected Page */}
            <button
              onClick={() => handlePrint(false)}
              className="px-3 py-1.5 rounded border-2 border-black bg-black text-white hover:bg-neutral-800 font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Print active portrait sheet"
            >
              <Printer size={13} />
              <span>Print Active Sheet</span>
            </button>

            {/* Print All 4 Portrait Pages */}
            <button
              onClick={() => handlePrint(true)}
              className="px-3 py-1.5 rounded border-2 border-black bg-emerald-700 text-white hover:bg-emerald-800 font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Print all 4 portrait pages for 100 students"
            >
              <Layers size={13} />
              <span>Print All 4 Pages (A4 Portrait)</span>
            </button>
          </div>
        </div>

        {/* View Switcher: Page 1 (1-50, Days 1-15), Page 2 (1-50, Days 16-31), Page 3 (51-100, Days 1-15), Page 4 (51-100, Days 16-31) */}
        <div className="max-w-[1400px] mx-auto pt-2.5 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold">Month:</span>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="px-2 py-1 rounded border border-black bg-white text-black font-mono font-bold"
            >
              {MONTH_NAMES.map((name, idx) => (
                <option key={name} value={idx}>{name}</option>
              ))}
            </select>

            <span className="font-bold ml-1">Year:</span>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="px-2 py-1 rounded border border-black bg-white text-black font-mono font-bold"
            >
              {[2026, 2027, 2028].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            <span className="font-bold ml-2">Class:</span>
            <input
              type="text"
              value={classNameInput}
              onChange={(e) => setClassNameInput(e.target.value)}
              className="px-2 py-1 rounded border border-black bg-white text-black font-mono text-xs w-32"
            />
          </div>

          {/* Quick Page Spread Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-600">Select Sheet:</span>
            
            <button
              onClick={() => setActiveSpreadSheet("batch1-left")}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                activeSpreadSheet === "batch1-left"
                  ? "bg-black text-white border-black"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              Roll 1–50 (Days 1–15)
            </button>

            <button
              onClick={() => setActiveSpreadSheet("batch1-right")}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                activeSpreadSheet === "batch1-right"
                  ? "bg-black text-white border-black"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              Roll 1–50 (Days 16–31 + Summary)
            </button>

            <button
              onClick={() => setActiveSpreadSheet("batch2-left")}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                activeSpreadSheet === "batch2-left"
                  ? "bg-black text-white border-black"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              Roll 51–100 (Days 1–15)
            </button>

            <button
              onClick={() => setActiveSpreadSheet("batch2-right")}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                activeSpreadSheet === "batch2-right"
                  ? "bg-black text-white border-black"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              Roll 51–100 (Days 16–31 + Summary)
            </button>

            <button
              onClick={() => setActiveSpreadSheet("all-4-pages")}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
                activeSpreadSheet === "all-4-pages"
                  ? "bg-emerald-800 text-white border-emerald-800"
                  : "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100"
              }`}
            >
              View All 4 Sheets
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          REGISTER PORTRAIT SHEETS
          ========================================================================= */}
      <main className="max-w-[1100px] mx-auto p-2 sm:p-6 print:p-0 print:max-w-none">
        
        {/* Page 1: Batch 1 (Roll 1–50), Days 1 to 15 */}
        {(activeSpreadSheet === "batch1-left" || activeSpreadSheet === "all-4-pages") && (
          renderRegisterPage(batch1, 1, 15, false, "Students 1 to 50", 1)
        )}

        {/* Page 2: Batch 1 (Roll 1–50), Days 16 to 31 + Present, Absent, Remark */}
        {(activeSpreadSheet === "batch1-right" || activeSpreadSheet === "all-4-pages") && (
          renderRegisterPage(batch1, 16, daysInMonth, true, "Students 1 to 50", 2)
        )}

        {/* Page 3: Batch 2 (Roll 51–100), Days 1 to 15 */}
        {(activeSpreadSheet === "batch2-left" || activeSpreadSheet === "all-4-pages") && (
          renderRegisterPage(batch2, 1, 15, false, "Students 51 to 100", 3)
        )}

        {/* Page 4: Batch 2 (Roll 51–100), Days 16 to 31 + Present, Absent, Remark */}
        {(activeSpreadSheet === "batch2-right" || activeSpreadSheet === "all-4-pages") && (
          renderRegisterPage(batch2, 16, daysInMonth, true, "Students 51 to 100", 4)
        )}

      </main>

      {/* Print CSS Specific Rules for Exact A4 Portrait Output */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 5mm 5mm 5mm 5mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .page-break-after-always {
            page-break-after: always !important;
            break-after: page !important;
            margin-bottom: 0 !important;
            border: 2px solid #000000 !important;
            box-shadow: none !important;
          }
          table {
            page-break-inside: auto;
          }
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
        }
      `}</style>

    </div>
  );
}
