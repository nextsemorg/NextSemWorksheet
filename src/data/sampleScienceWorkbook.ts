import { GeneratedWorkbook } from '@/types/workbook';

export const sampleScienceWorkbook: GeneratedWorkbook = {
  id: 'science-ch1-nutrition-plants',
  title: 'Nutrition in Plants & Photosynthesis',
  subject: 'science',
  classGrade: 'Class 7',
  sourceFileName: 'gesc101.pdf',
  createdTimestamp: Date.now(),
  pages: [
    {
      pageNumber: 1,
      sourcePdfPage: 1,
      chapterTitle: 'Chapter 1: Nutrition in Plants',
      topicTitle: 'Photosynthesis & Stomatal Gas Exchange',
      keyConcepts: [
        'Autotrophic Nutrition: Green plants synthesize food from CO₂ and H₂O using solar energy absorbed by chlorophyll.',
        'Stomata are microscopic pores guarded by bean-shaped guard cells that regulate transpiration and gas intake.',
      ],
      keyFormulas: [
        'Word Equation: Carbon dioxide + Water ──(Sunlight / Chlorophyll)──> Carbohydrate (Glucose) + Oxygen',
        'Chemical Test: Starch + Iodine Solution ──> Intense Blue-Black Color'
      ],
      questions: [
        {
          id: 'sci-1',
          questionNumber: '1.1',
          type: 'diagram-labeling',
          marks: 4,
          prompt: 'Identify and label the microscopic structures of the plant Stoma shown below. Use the Word Bank provided to fill in boxes [A], [B], and [C].',
          givenDetails: ['Word Bank: Guard Cell, Stomatal Pore, Chloroplast, Epidermal Cell'],
          diagram: {
            title: 'Cross-Section of Stomatal Apparatus',
            type: 'science-apparatus',
            caption: 'Fig 1.1: High-magnification leaf epidermis stoma',
            svgContent: `<svg viewBox="0 0 280 180" class="w-full h-44">
              <!-- Background epidermis cells -->
              <rect x="10" y="10" width="260" height="160" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
              
              <!-- Surrounding wavy epidermal cells -->
              <path d="M 20,40 Q 50,20 80,40 Q 110,25 140,40 Q 180,20 220,40 Q 250,30 260,50" fill="none" stroke="#22c55e" stroke-width="1" stroke-dasharray="3 2"/>
              <path d="M 20,140 Q 60,155 100,140 Q 140,150 180,140 Q 220,155 260,140" fill="none" stroke="#22c55e" stroke-width="1" stroke-dasharray="3 2"/>
              
              <!-- Left Guard Cell (Bean Shaped) -->
              <path d="M 125,45 C 80,55 75,125 125,135 C 105,115 105,65 125,45 Z" fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"/>
              <!-- Chloroplast dots inside left guard cell -->
              <circle cx="102" cy="70" r="3" fill="#166534"/>
              <circle cx="95" cy="90" r="3.5" fill="#166534"/>
              <circle cx="104" cy="110" r="3" fill="#166534"/>
              
              <!-- Right Guard Cell (Bean Shaped) -->
              <path d="M 155,45 C 200,55 205,125 155,135 C 175,115 175,65 155,45 Z" fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"/>
              <!-- Chloroplast dots inside right guard cell -->
              <circle cx="178" cy="70" r="3" fill="#166534"/>
              <circle cx="185" cy="90" r="3.5" fill="#166534"/>
              <circle cx="176" cy="110" r="3" fill="#166534"/>
              
              <!-- Central Stomatal Pore Aperture -->
              <ellipse cx="140" cy="90" rx="14" ry="38" fill="#14532d"/>
              
              <!-- Pointer lines and Label Tags -->
              <!-- Pointer A: Chloroplast -->
              <line x1="95" y1="90" x2="40" y2="90" stroke="#000" stroke-width="1.5"/>
              <rect x="25" y="80" width="20" height="20" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
              <text x="31" y="94" font-family="monospace" font-weight="bold" font-size="12">A</text>
              
              <!-- Pointer B: Stomatal Pore -->
              <line x1="140" y1="80" x2="140" y2="28" stroke="#000" stroke-width="1.5"/>
              <rect x="130" y="16" width="20" height="20" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
              <text x="136" y="30" font-family="monospace" font-weight="bold" font-size="12">B</text>
              
              <!-- Pointer C: Guard Cell -->
              <line x1="185" y1="90" x2="235" y2="90" stroke="#000" stroke-width="1.5"/>
              <rect x="235" y="80" width="20" height="20" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
              <text x="241" y="94" font-family="monospace" font-weight="bold" font-size="12">C</text>
            </svg>`
          },
          gridWorkArea: false,
          workingLinesCount: 0,
          finalAnswerBox: 'A = [                       ]  |  B = [                       ]  |  C = [                       ]'
        },
        {
          id: 'sci-2',
          questionNumber: '1.2',
          type: 'science-experiment',
          marks: 5,
          prompt: 'Lab Investigation: Testing a variegated leaf for the necessity of Sunlight and Chlorophyll in Starch synthesis.',
          scienceExperiment: {
            aim: 'To demonstrate that light and chlorophyll are essential for photosynthesis using Iodine reagent.',
            materialsRequired: ['Potted Croton plant (variegated)', 'Ethanol (spirit)', 'Boiling water bath', 'Iodine Solution', 'Petri dish'],
            procedureSteps: [
              'Step 1: Keep the plant in dark for 72 hours (destarching).',
              'Step 2: Expose to bright sunlight for 6 hours with a black paper strip clipped on part of leaf.',
              'Step 3: Boil in water, then decolorize in alcohol bath, and flood with Iodine.'
            ],
            observationTable: {
              headers: ['Leaf Region', 'Condition / Treatment', 'Observation (Color after Iodine)', 'Scientific Inference'],
              rows: [
                {
                  testSample: 'Green Portion (Uncovered)',
                  reagentOrAction: 'Treated with Iodine',
                  expectedColorOrChange: '____________________',
                  inference: '____________________'
                },
                {
                  testSample: 'White / Non-Green Edge',
                  reagentOrAction: 'Treated with Iodine',
                  expectedColorOrChange: '____________________',
                  inference: '____________________'
                },
                {
                  testSample: 'Black Paper Covered Strip',
                  reagentOrAction: 'Deprived of Sunlight',
                  expectedColorOrChange: '____________________',
                  inference: '____________________'
                }
              ]
            },
            inferenceOrConclusion: 'Why does the leaf need to be boiled in alcohol before testing with iodine?'
          },
          workingLinesCount: 3,
          finalAnswerBox: 'Conclusion: Photosynthesis occurs ONLY in parts that contain [                    ] and receive [                    ].'
        }
      ]
    }
  ]
};
