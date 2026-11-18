import { GeneratedWorkbook } from '@/types/workbook';

export const sampleMathsWorkbook: GeneratedWorkbook = {
  id: 'maths-ch1-geometric-twins',
  title: 'Geometric Twins (Congruence & Construction)',
  subject: 'maths',
  classGrade: 'Class 7',
  sourceFileName: 'gegp201.pdf',
  createdTimestamp: Date.now(),
  pages: [
    {
      pageNumber: 1,
      sourcePdfPage: 1,
      chapterTitle: 'Chapter 1: Geometric Twins',
      topicTitle: 'Recreating Shapes & Concept of Congruence',
      keyConcepts: [
        'Two plane figures are congruent (geometric twins) if superimposing one over another covers it exactly.',
        'Arm lengths alone are insufficient to duplicate angular figures without knowing the angle between them.',
      ],
      keyFormulas: [
        'Congruence Notation: △ABC ≅ △DEF',
        'Corresponding Parts: AB = DE, BC = EF, ∠B = ∠E'
      ],
      questions: [
        {
          id: 'q1-1',
          questionNumber: '1.1',
          type: 'diagram-analysis',
          marks: 3,
          prompt: 'Observe the given outdoor sign-post symbol △ABC. The length of AB is 6 cm and BC is 8 cm with ∠ABC = 70°. In the box on the right, draw its exact twin figure using your ruler and protractor.',
          givenDetails: ['AB = 6 cm', 'BC = 8 cm', '∠ABC = 70°'],
          toFindOrProve: 'Construct twin △PQR such that △PQR ≅ △ABC',
          diagram: {
            title: 'Given Symbol △ABC',
            type: 'svg',
            caption: 'Original Signboard Vector',
            svgContent: `<svg viewBox="0 0 240 160" class="w-full h-36">
              <!-- Grid background hint -->
              <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="240" height="160" fill="url(#smallGrid)" stroke="#cbd5e1" stroke-width="1"/>
              
              <!-- Triangle ABC -->
              <polygon points="40,130 180,130 110,35" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
              
              <!-- Angle arc at B -->
              <path d="M 65,130 A 25,25 0 0,0 52,112" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
              <text x="58" y="122" font-size="11" font-family="monospace" font-weight="bold" fill="#c2410c">70°</text>
              
              <!-- Vertex Labels -->
              <circle cx="110" cy="35" r="3.5" fill="#0f172a"/>
              <text x="105" y="24" font-family="monospace" font-weight="bold" font-size="13">A</text>
              
              <circle cx="40" cy="130" r="3.5" fill="#0f172a"/>
              <text x="24" y="142" font-family="monospace" font-weight="bold" font-size="13">B</text>
              
              <circle cx="180" cy="130" r="3.5" fill="#0f172a"/>
              <text x="186" y="142" font-family="monospace" font-weight="bold" font-size="13">C</text>
              
              <!-- Dimension markers -->
              <text x="60" y="75" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">6 cm</text>
              <text x="100" y="148" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">8 cm</text>
            </svg>`
          },
          gridWorkArea: true,
          finalAnswerBox: 'Length of third side AC = [          cm ]'
        },
        {
          id: 'q1-2',
          questionNumber: '1.2',
          type: 'proof-construction',
          marks: 4,
          prompt: 'State whether two rectangles with the same perimeter must always be geometric twins (congruent). Justify with two counter-example dimensions.',
          givenDetails: ['Perimeter of both rectangles = 24 cm'],
          toFindOrProve: 'Are they congruent? (Yes / No + Proof)',
          workingLinesCount: 4,
          finalAnswerBox: 'Conclusion: Rectangles with equal perimeters are [ Congruent / Not necessarily congruent ]'
        }
      ]
    },
    {
      pageNumber: 2,
      sourcePdfPage: 2,
      chapterTitle: 'Chapter 1: Geometric Twins',
      topicTitle: 'Criteria for Congruence of Triangles (SAS & SSS)',
      keyConcepts: [
        'SSS Criterion: If 3 sides of one triangle equal 3 sides of another triangle, they are congruent.',
        'SAS Criterion: Two sides and the INCLUDED angle between them must be equal.',
      ],
      keyFormulas: [
        'SSS: AB=DE, BC=EF, CA=FD ⟹ △ABC ≅ △DEF',
        'SAS: AB=PQ, ∠B=∠Q, BC=QR ⟹ △ABC ≅ △PQR'
      ],
      questions: [
        {
          id: 'q2-1',
          questionNumber: '2.1',
          type: 'diagram-analysis',
          marks: 4,
          prompt: 'In the figure below, AB = AC and D is the midpoint of BC. Prove that △ABD ≅ △ACD. Which congruence criterion applies?',
          givenDetails: ['AB = AC', 'D is midpoint of BC (BD = DC)'],
          toFindOrProve: 'Prove △ABD ≅ △ACD and find ∠ADB',
          diagram: {
            title: 'Isosceles Triangle with Median AD',
            type: 'svg',
            caption: 'Triangle with common median arm AD',
            svgContent: `<svg viewBox="0 0 240 160" class="w-full h-36">
              <polygon points="120,25 40,135 200,135" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
              <line x1="120" y1="25" x2="120" y2="135" stroke="#0f172a" stroke-width="2" stroke-dasharray="4 2"/>
              
              <!-- Vertices -->
              <text x="115" y="16" font-family="monospace" font-weight="bold" font-size="13">A</text>
              <text x="24" y="145" font-family="monospace" font-weight="bold" font-size="13">B</text>
              <text x="116" y="152" font-family="monospace" font-weight="bold" font-size="13">D</text>
              <text x="206" y="145" font-family="monospace" font-weight="bold" font-size="13">C</text>
              
              <!-- Tick marks on AB and AC -->
              <line x1="75" y1="78" x2="85" y2="82" stroke="#dc2626" stroke-width="2"/>
              <line x1="155" y1="82" x2="165" y2="78" stroke="#dc2626" stroke-width="2"/>
              
              <!-- Tick marks on BD and DC -->
              <line x1="78" y1="131" x2="82" y2="139" stroke="#2563eb" stroke-width="2"/>
              <line x1="158" y1="131" x2="162" y2="139" stroke="#2563eb" stroke-width="2"/>
            </svg>`
          },
          gridWorkArea: true,
          finalAnswerBox: 'Criterion used: [ SSS / SAS / ASA ]   |   ∠ADB = [          ° ]'
        }
      ]
    }
  ]
};
