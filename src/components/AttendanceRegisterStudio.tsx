"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Printer, Download, FileSpreadsheet, Sparkles, RefreshCw, 
  CheckCircle2, XCircle, Calendar, Users, Eye, Edit3, 
  ChevronLeft, ChevronRight, HelpCircle, ArrowLeft, BookmarkCheck,
  Check, Layers, Award
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"spiral" | "print" | "compact">("spiral");
  const [pageSlice, setPageSlice] = useState<"all" | "1-25" | "26-50" | "51-75" | "76-100">("1-25");
  const [blankTemplateMode, setBlankTemplateMode] = useState<boolean>(true);
  const [activeDateForQuickMark, setActiveDateForQuickMark] = useState<number>(1);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Number of days in selected month and year
  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [month, year]);

  // Weekday for each day of the month (0 = Sun, 1 = Mon, ..., 6 = Sat)
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

  // Filtered & Paginated Students
  const displayedStudents = useMemo(() => {
    let list = students;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(q) || s.rollNo.toString().includes(q)
      );
    }
    if (pageSlice === "1-25") return list.slice(0, 25);
    if (pageSlice === "26-50") return list.slice(25, 50);
    if (pageSlice === "51-75") return list.slice(50, 75);
    if (pageSlice === "76-100") return list.slice(75, 100);
    return list;
  }, [students, searchQuery, pageSlice]);

  // Toggle single cell attendance
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

  // Mark all students Present for chosen date
  const markAllPresentForDate = (day: number) => {
    setStudents((prev) =>
      prev.map((s) => ({
        ...s,
        attendance: { ...s.attendance, [day]: "P" },
      }))
    );
  };

  // Auto-mark Sundays as Holiday
  const markSundaysAsHoliday = () => {
    setStudents((prev) =>
      prev.map((s) => {
        const updated = { ...s.attendance };
        for (let d = 1; d <= daysInMonth; d++) {
          if (dayWeekdays[d]?.isSunday) {
            updated[d] = "H";
          }
        }
        return { ...s, attendance: updated };
      })
    );
  };

  // Populate sample attendance
  const fillSampleData = () => {
    setBlankTemplateMode(false);
    setStudents(generate100Students(true));
  };

  // Clear all attendance (Blank register)
  const clearAllAttendance = () => {
    setStudents(generate100Students(false));
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
  const dailyTotals = useMemo(() => {
    const presentCount: Record<number, number> = {};
    const absentCount: Record<number, number> = {};
    for (let d = 1; d <= daysInMonth; d++) {
      presentCount[d] = 0;
      absentCount[d] = 0;
      students.forEach((s) => {
        if (s.attendance[d] === "P") presentCount[d]++;
        if (s.attendance[d] === "A") absentCount[d]++;
      });
    }
    return { presentCount, absentCount };
  }, [students, daysInMonth]);

  // Export to CSV
  const exportToCSV = () => {
    const headers = [
      "Roll No", "Student Name", "Class",
      ...Array.from({ length: daysInMonth }, (_, i) => `Day ${i + 1}`),
      "Total Present", "Total Absent", "Total Leave", "Percentage"
    ];

    const rows = students.map((s) => {
      const stats = getStudentStats(s.attendance);
      const days = Array.from({ length: daysInMonth }, (_, i) => s.attendance[i + 1] || "");
      return [
        s.rollNo,
        `"${s.name}"`,
        `"${s.className}"`,
        ...days,
        stats.p,
        stats.a,
        stats.l,
        `${stats.pct}%`
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Attendance_Register_100_Students_${MONTH_NAMES[month]}_${year}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = (printAll: boolean) => {
    if (printAll) {
      setPageSlice("all");
    }
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-[#111827] font-sans pb-20 selection:bg-black selection:text-white">
      
      {/* =========================================================================
          TOP CONTROL BAR (Hidden during Print)
          ========================================================================= */}
      <header className="bg-white border-b-2 border-black sticky top-0 z-30 px-3 sm:px-6 py-2.5 shadow-sm print:hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-lg border border-black hover:bg-black hover:text-white transition-colors"
              title="Back to Worksheet Studio"
            >
              <ArrowLeft size={16} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-black text-white rounded">
                  Official Register Standard
                </span>
                <span className="text-xs font-mono font-bold text-slate-600">
                  100 Students • 1 Month Grid
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-black font-mono tracking-tight text-black flex items-center gap-2">
                ATTENDANCE REGISTER OF 100 STUDENTS
              </h1>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Blank Template Toggle (Replicates image precisely) */}
            <button
              onClick={() => setBlankTemplateMode(!blankTemplateMode)}
              className={`px-3 py-1.5 rounded border-2 border-black font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                blankTemplateMode ? "bg-black text-white" : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              <Edit3 size={13} />
              <span>{blankTemplateMode ? "Mode: Blank Notebook" : "Mode: Digital Marking"}</span>
            </button>

            {/* Print Current Page PDF */}
            <button
              onClick={() => handlePrint(false)}
              className="px-3 py-1.5 rounded border-2 border-black bg-black text-white hover:bg-neutral-800 font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Print current 25-student page"
            >
              <Printer size={13} />
              <span>Print Page ({pageSlice})</span>
            </button>

            {/* Print All 100 Students PDF */}
            <button
              onClick={() => handlePrint(true)}
              className="px-3 py-1.5 rounded border-2 border-black bg-emerald-700 text-white hover:bg-emerald-800 font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Print complete 100-student register across 4 neat A4 sheets"
            >
              <Layers size={13} />
              <span>Print All 100 (4 Pages)</span>
            </button>

            {/* Export CSV */}
            <button
              onClick={exportToCSV}
              className="px-3 py-1.5 rounded border-2 border-black bg-white hover:bg-slate-100 text-black font-mono text-xs font-black transition-all cursor-pointer flex items-center gap-1.5"
            >
              <FileSpreadsheet size={13} />
              <span>Export .csv</span>
            </button>
          </div>
        </div>

        {/* Second Row: Register Configuration Controls */}
        <div className="max-w-[1600px] mx-auto pt-2.5 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          {/* Month & Year Selectors */}
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
              className="px-2 py-1 rounded border border-black bg-white text-black font-mono text-xs w-36"
              placeholder="e.g. Class 7-A"
            />
          </div>

          {/* Student Page Slices */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-600">Students:</span>
            {(["1-25", "26-50", "51-75", "76-100", "all"] as const).map((slice) => (
              <button
                key={slice}
                onClick={() => setPageSlice(slice)}
                className={`px-2 py-0.5 rounded text-xs font-bold border transition-all cursor-pointer ${
                  pageSlice === slice
                    ? "bg-black text-white border-black"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                }`}
              >
                {slice === "all" ? "All 100" : `Roll ${slice}`}
              </button>
            ))}
          </div>

          {/* Quick Mark Shortcuts */}
          {!blankTemplateMode && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={markSundaysAsHoliday}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-400 text-[11px] font-bold text-slate-800"
                title="Mark all Sundays as Holiday (H)"
              >
                Auto-mark Sundays (H)
              </button>
              <button
                onClick={fillSampleData}
                className="px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 border border-blue-400 text-[11px] font-bold text-blue-800"
              >
                Sample Data
              </button>
              <button
                onClick={clearAllAttendance}
                className="px-2 py-1 rounded bg-rose-50 hover:bg-rose-100 border border-rose-400 text-[11px] font-bold text-rose-800"
              >
                Clear Marks
              </button>
            </div>
          )}
        </div>
      </header>

      {/* =========================================================================
          THE PHYSICAL ATTENDANCE REGISTER NOTEBOOK
          (Replicates Image 1 & Image 2 with Spiral-Bound Holes & Typewriter Font)
          ========================================================================= */}
      <main className="max-w-[1600px] mx-auto p-2 sm:p-6 print:p-0 print:max-w-none">
        
        {/* Spiral Notebook Outer Card */}
        <div className="bg-white border-2 border-black rounded-xl sm:rounded-2xl shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none">
          
          {/* Top Spiral Binding Strip (Visible on Screen, Replicating Physical Spiral Binding) */}
          <div className="bg-[#E4E4E7] border-b-2 border-black px-4 py-2 flex items-center justify-between print:hidden overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3">
              {/* Spiral wire ring representations */}
              <div className="flex gap-2 shrink-0">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-2.5 h-4 rounded-full border-2 border-slate-600 bg-white shadow-inner" />
                  </div>
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">
                SPIRAL BOUND ATTENDANCE REGISTER • STANDARD A4 GRID
              </span>
            </div>

            <div className="text-[11px] font-mono text-slate-600 flex items-center gap-3">
              <span>Marking: Click cell to cycle <strong className="text-emerald-700">P</strong> &gt; <strong className="text-rose-700">A</strong> &gt; <strong className="text-amber-700">L</strong> &gt; <strong className="text-slate-500">H</strong></span>
            </div>
          </div>

          {/* Actual Register Page Content */}
          <div className="p-4 sm:p-8 font-mono text-black print:p-2">
            
            {/* Header: Attendance Register of _____________________ (Exact copy of image) */}
            <div className="mb-4 pb-3 border-b-2 border-black">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2 flex-grow">
                  <h2 className="text-base sm:text-xl font-bold tracking-tight uppercase whitespace-nowrap">
                    Attendance Register of
                  </h2>
                  <div className="border-b-2 border-black flex-grow pb-0.5 px-2 font-bold text-sm sm:text-base uppercase tracking-wider text-slate-800">
                    {institutionName}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm font-bold shrink-0">
                  <div>
                    <span>Class/Sec: </span>
                    <span className="border-b border-black px-1.5 pb-0.5">{classNameInput}</span>
                  </div>
                  <div>
                    <span>Month: </span>
                    <span className="border-b border-black px-1.5 pb-0.5 uppercase">{MONTH_NAMES[month]} {year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register Grid Table */}
            <div className="overflow-x-auto border-2 border-black">
              <table className="w-full text-center border-collapse text-[10px] sm:text-xs">
                
                {/* 1. Header Rows (Matching notebook headers) */}
                <thead>
                  {/* Days of Week Row (Mo, Tu, We...) */}
                  <tr className="border-b border-black bg-slate-50">
                    <th 
                      rowSpan={2} 
                      className="border-r border-black p-1 w-9 text-center font-bold font-mono uppercase bg-white sticky left-0 z-20"
                    >
                      #.
                    </th>
                    <th 
                      rowSpan={2} 
                      className="border-r border-black p-1.5 w-44 sm:w-56 text-left font-bold font-mono bg-white sticky left-9 z-20 shadow-[2px_0_4px_rgba(0,0,0,0.06)]"
                    >
                      <div className="text-[11px] leading-tight font-black">Name-</div>
                      <div className="text-[10px] font-normal text-slate-600">Class</div>
                    </th>

                    {/* Day Weekday Headers */}
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const dayNum = i + 1;
                      const info = dayWeekdays[dayNum];
                      return (
                        <th
                          key={`wd-${dayNum}`}
                          className={`border-r border-black p-0.5 w-6 sm:w-7 font-bold text-[9px] ${
                            info?.isSunday ? "bg-rose-100 text-rose-800 font-black" : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {info?.dayName}
                        </th>
                      );
                    })}

                    {/* Summary Column Headers */}
                    <th colSpan={4} className="border-r border-black p-1 bg-slate-100 font-bold text-[10px] uppercase">
                      Monthly Summary
                    </th>
                    <th rowSpan={2} className="p-1 w-20 bg-slate-50 font-bold text-[10px] uppercase">
                      Remarks
                    </th>
                  </tr>

                  {/* Day Date Numbers Row (1, 2, 3... 31) */}
                  <tr className="border-b-2 border-black bg-white">
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const dayNum = i + 1;
                      const info = dayWeekdays[dayNum];
                      return (
                        <th
                          key={`d-${dayNum}`}
                          className={`border-r border-black p-1 font-mono font-bold text-[10px] sm:text-xs ${
                            info?.isSunday ? "bg-rose-50 text-rose-800" : ""
                          }`}
                        >
                          {dayNum}
                        </th>
                      );
                    })}

                    {/* Summary Columns */}
                    <th className="border-r border-black p-1 w-8 font-bold text-emerald-800 bg-emerald-50 text-[10px]">P</th>
                    <th className="border-r border-black p-1 w-8 font-bold text-rose-800 bg-rose-50 text-[10px]">A</th>
                    <th className="border-r border-black p-1 w-8 font-bold text-amber-800 bg-amber-50 text-[10px]">L</th>
                    <th className="border-r border-black p-1 w-11 font-bold bg-slate-50 text-[10px]">%</th>
                  </tr>
                </thead>

                {/* 2. Students Rows (1 to 100) */}
                <tbody className="divide-y divide-black font-mono">
                  {displayedStudents.map((student) => {
                    const stats = getStudentStats(student.attendance);

                    return (
                      <tr 
                        key={student.rollNo}
                        className="hover:bg-amber-50/40 transition-colors h-7 sm:h-8"
                      >
                        {/* Roll Number Column (Sticky Left) */}
                        <td className="border-r border-black p-1 text-center font-bold bg-white sticky left-0 z-10">
                          {student.rollNo}
                        </td>

                        {/* Name and Class Column (Sticky Left) */}
                        <td className="border-r border-black p-1.5 text-left font-bold bg-white sticky left-9 z-10 shadow-[2px_0_4px_rgba(0,0,0,0.06)] truncate max-w-[180px] sm:max-w-none">
                          {blankTemplateMode ? (
                            <div className="h-6 w-full"></div>
                          ) : (
                            <>
                              <div className="truncate text-slate-900 font-semibold">{student.name}</div>
                              <div className="text-[9px] font-normal text-slate-500 truncate">{student.className}</div>
                            </>
                          )}
                        </td>

                        {/* 31 Attendance Day Cells */}
                        {Array.from({ length: daysInMonth }, (_, i) => {
                          const dayNum = i + 1;
                          const isSunday = dayWeekdays[dayNum]?.isSunday;
                          const mark = student.attendance[dayNum] || "";

                          return (
                            <td
                              key={`cell-${student.rollNo}-${dayNum}`}
                              onClick={() => toggleAttendance(student.rollNo, dayNum)}
                              className={`border-r border-black p-0 text-center font-black cursor-pointer select-none transition-colors ${
                                isSunday
                                  ? "bg-rose-50/50"
                                  : mark === "P"
                                  ? "bg-emerald-50/80 text-emerald-800"
                                  : mark === "A"
                                  ? "bg-rose-50/80 text-rose-800 font-black"
                                  : mark === "L"
                                  ? "bg-amber-50/80 text-amber-800"
                                  : mark === "H"
                                  ? "bg-slate-100 text-slate-500"
                                  : "bg-white hover:bg-slate-100"
                              }`}
                              title={blankTemplateMode ? "" : `Roll ${student.rollNo}: Day ${dayNum} - Click to toggle mark`}
                            >
                              {!blankTemplateMode && (
                                <span className={
                                  mark === "P" ? "text-emerald-700" :
                                  mark === "A" ? "text-rose-700 font-black" :
                                  mark === "L" ? "text-amber-700" :
                                  mark === "H" ? "text-slate-400 text-[9px]" : ""
                                }>
                                  {mark}
                                </span>
                              )}
                            </td>
                          );
                        })}

                        {/* Monthly Summary Computed Columns */}
                        <td className="border-r border-black p-1 font-bold text-emerald-800 bg-emerald-50/30">
                          {!blankTemplateMode ? stats.p : ""}
                        </td>
                        <td className="border-r border-black p-1 font-bold text-rose-800 bg-rose-50/30">
                          {!blankTemplateMode ? stats.a : ""}
                        </td>
                        <td className="border-r border-black p-1 font-bold text-amber-800 bg-amber-50/30">
                          {!blankTemplateMode ? stats.l : ""}
                        </td>
                        <td className={`border-r border-black p-1 font-bold text-[10px] ${
                          stats.pct >= 75 ? "text-emerald-800" : stats.pct > 0 ? "text-rose-700 font-black" : ""
                        }`}>
                          {!blankTemplateMode && stats.workingDays > 0 ? `${stats.pct}%` : ""}
                        </td>
                        <td className="p-1 text-slate-400 text-[9px] text-left">
                          {!blankTemplateMode && stats.pct < 75 && stats.workingDays > 5 ? (
                            <span className="text-rose-600 font-bold">Short Attend.</span>
                          ) : ""}
                        </td>
                      </tr>
                    );
                  })}

                  {/* 3. Daily Summary Rows at the Bottom of Register */}
                  <tr className="border-t-2 border-black bg-slate-100 font-bold h-7">
                    <td className="border-r border-black p-1 text-center sticky left-0 bg-slate-100 z-10">
                      Σ
                    </td>
                    <td className="border-r border-black p-1.5 text-left uppercase text-[10px] sticky left-9 bg-slate-100 z-10 shadow-[2px_0_4px_rgba(0,0,0,0.06)]">
                      Total Present
                    </td>
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const dayNum = i + 1;
                      const count = dailyTotals.presentCount[dayNum];
                      return (
                        <td key={`tot-p-${dayNum}`} className="border-r border-black p-0 text-center font-bold text-emerald-800 text-[10px]">
                          {!blankTemplateMode && count > 0 ? count : ""}
                        </td>
                      );
                    })}
                    <td colSpan={5} className="bg-slate-100"></td>
                  </tr>

                  <tr className="border-t border-black bg-slate-100 font-bold h-7">
                    <td className="border-r border-black p-1 text-center sticky left-0 bg-slate-100 z-10">
                      Σ
                    </td>
                    <td className="border-r border-black p-1.5 text-left uppercase text-[10px] sticky left-9 bg-slate-100 z-10 shadow-[2px_0_4px_rgba(0,0,0,0.06)]">
                      Total Absent
                    </td>
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const dayNum = i + 1;
                      const count = dailyTotals.absentCount[dayNum];
                      return (
                        <td key={`tot-a-${dayNum}`} className="border-r border-black p-0 text-center font-bold text-rose-800 text-[10px]">
                          {!blankTemplateMode && count > 0 ? count : ""}
                        </td>
                      );
                    })}
                    <td colSpan={5} className="bg-slate-100"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Signatures Block (Matching notebook footer) */}
            <div className="mt-8 pt-4 border-t-2 border-black flex flex-col sm:flex-row items-end justify-between gap-6 text-xs font-mono font-bold">
              <div className="space-y-1">
                <div>Total Enrolled Students: <strong>100</strong></div>
                <div>Displayed on this Sheet: <strong>{displayedStudents.length} Students</strong></div>
              </div>

              <div className="flex items-center gap-8 text-center">
                <div className="space-y-1">
                  <div className="w-40 border-b border-black"></div>
                  <div className="text-[11px] uppercase">Class Teacher Signature</div>
                </div>

                <div className="space-y-1">
                  <div className="w-40 border-b border-black"></div>
                  <div className="text-[11px] uppercase">Principal / HOD Signature</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Informational Guidance for Digital Pens & OneNote */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-slate-300 shadow-sm print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <BookmarkCheck size={18} className="text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-slate-900">OneNote &amp; Digital Stylus Pad Ready:</span>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Switch to <strong>Mode: Blank Notebook</strong> and click <strong>Print Page</strong> or <strong>Print All 100</strong> to export crisp A4 vector PDFs that open directly in OneNote, GoodNotes, or Drawboard PDF for digital pen writing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold transition-all text-xs"
            >
              Class 7 Maths Worksheet
            </Link>
          </div>
        </div>

      </main>

      {/* Print CSS Specific Rules for Landscape High-Contrast */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 6mm 6mm 6mm 6mm;
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
