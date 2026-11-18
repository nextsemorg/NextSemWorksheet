export type SubjectType = 'maths' | 'science' | 'sst' | 'english';

export interface DiagramData {
  title: string;
  type: 
    | 'svg' 
    | 'coordinate-graph' 
    | 'label-figure' 
    | 'construction' 
    | 'science-apparatus' 
    | 'historical-timeline' 
    | 'map-tagging'
    | 'reading-passage'
    | 'vocab-mindmap';
  svgContent?: string;
  labelsToFill?: string[];
  caption?: string;
}

export interface ObservationTableRow {
  testSample: string;
  reagentOrAction: string;
  expectedColorOrChange: string;
  inference: string;
}

export interface ScienceExperimentData {
  aim: string;
  materialsRequired: string[];
  procedureSteps: string[];
  observationTable?: {
    headers: string[];
    rows: ObservationTableRow[];
  };
  inferenceOrConclusion: string;
}

export interface TimelineMilestone {
  yearOrEra: string;
  eventTitle: string;
  rulerOrSignificance: string;
}

export interface MapTagItem {
  id: string;
  locationName: string;
  historicalSignificance: string;
}

export interface ReadingPassageData {
  passageTitle: string;
  authorOrSource?: string;
  paragraphs: string[];
  wordBankGlossary?: { word: string; meaning: string; partOfSpeech: string }[];
}

export interface QuestionData {
  id: string;
  type: 
    | 'numerical' 
    | 'proof-construction' 
    | 'fill-blank' 
    | 'diagram-analysis' 
    | 'short-answer'
    | 'science-experiment'
    | 'diagram-labeling'
    | 'cause-effect'
    | 'timeline-chronology'
    | 'map-analysis'
    | 'reading-comprehension'
    | 'vocab-grammar'
    | 'creative-writing';
  questionNumber: string;
  marks?: number;
  prompt: string;
  formulaHint?: string;
  givenDetails?: string[];
  toFindOrProve?: string;
  diagram?: DiagramData;
  workingLinesCount?: number;
  gridWorkArea?: boolean;
  finalAnswerBox?: string;
  sampleSolution?: string;
  // Science extensions
  scienceExperiment?: ScienceExperimentData;
  // SST extensions
  timelineMilestones?: TimelineMilestone[];
  mapTags?: MapTagItem[];
  // English extensions
  readingPassage?: ReadingPassageData;
}

export interface WorkbookPageData {
  pageNumber: number;
  sourcePdfPage: number;
  chapterTitle: string;
  topicTitle: string;
  keyConcepts: string[];
  keyFormulas?: string[]; // Formulas or Grammar Rules & Poetic Devices
  questions: QuestionData[];
}

export interface GeneratedWorkbook {
  id: string;
  title: string;
  subject: SubjectType;
  classGrade: string;
  sourceFileName: string;
  pages: WorkbookPageData[];
  createdTimestamp: number;
}
