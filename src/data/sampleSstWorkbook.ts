import { GeneratedWorkbook } from '@/types/workbook';

export const sampleSstWorkbook: GeneratedWorkbook = {
  id: 'sst-ch3-delhi-sultans',
  title: 'The Delhi Sultans & Medieval Urbanization',
  subject: 'sst',
  classGrade: 'Class 7',
  sourceFileName: 'gess103.pdf',
  createdTimestamp: Date.now(),
  pages: [
    {
      pageNumber: 1,
      sourcePdfPage: 1,
      chapterTitle: 'History: The Delhi Sultans',
      topicTitle: 'Chronology of Dynasties & Garrison Towns to Empire',
      keyConcepts: [
        'Delhi first became a capital under the Tomara Rajputs, defeated by the Chauhans of Ajmer.',
        'Transformation from fortified garrison towns into a vast administrative empire under Alauddin Khalji and Muhammad Tughluq.',
      ],
      keyFormulas: [
        'Key Dynasties: Early Turkish (1206-1290) ➔ Khalji (1290-1320) ➔ Tughluq (1320-1414)',
        'Administrative Terms: Iqta (Land grant), Iqtadar/Muqti (Governor), Kharaj (Land tax ~50% of produce)'
      ],
      questions: [
        {
          id: 'sst-1',
          questionNumber: '1.1',
          type: 'timeline-chronology',
          marks: 4,
          prompt: 'Chronological Timeline Mapping: Examine the medieval rulers of Delhi from the 12th to the 14th century. Match each milestone node [A, B, C] with the correct ruler and reform.',
          givenDetails: ['Rulers Pool: Raziya Sultan (1236), Alauddin Khalji (1296), Qutbuddin Aybak (1206), Balban (1266)'],
          diagram: {
            title: 'Medieval Delhi Dynastic Chronology (1200 - 1350 CE)',
            type: 'historical-timeline',
            caption: 'Fig 1.1: Chronological succession from Slave Dynasty to Khaljis',
            svgContent: `<svg viewBox="0 0 520 130" class="w-full h-32">
              <!-- Central Timeline Spine Line -->
              <line x1="30" y1="65" x2="490" y2="65" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
              <polygon points="495,65 480,58 480,72" fill="#78350f"/>

              <!-- Node 1: 1206 CE -->
              <circle cx="60" cy="65" r="9" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
              <text x="60" y="42" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">1206 CE</text>
              <rect x="25" y="80" width="70" height="26" rx="4" fill="#fffbeb" stroke="#b45309" stroke-width="1"/>
              <text x="60" y="97" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" fill="#78350f">Qutbuddin</text>

              <!-- Node 2: 1236 CE -->
              <circle cx="180" cy="65" r="9" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
              <text x="180" y="42" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">1236 CE</text>
              <rect x="145" y="80" width="70" height="26" rx="4" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
              <text x="180" y="97" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">[Node A]</text>

              <!-- Node 3: 1266 CE -->
              <circle cx="300" cy="65" r="9" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
              <text x="300" y="42" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">1266 CE</text>
              <rect x="265" y="80" width="70" height="26" rx="4" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
              <text x="300" y="97" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">[Node B]</text>

              <!-- Node 4: 1296 CE -->
              <circle cx="420" cy="65" r="9" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
              <text x="420" y="42" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">1296 CE</text>
              <rect x="385" y="80" width="70" height="26" rx="4" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
              <text x="420" y="97" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">[Node C]</text>
            </svg>`
          },
          timelineMilestones: [
            {
              yearOrEra: '1236 CE',
              eventTitle: 'First Female Monarch of Delhi',
              rulerOrSignificance: 'Daughter of Sultan Iltutmish; recognized as more capable than her brothers by chronicler Minhaj-i Siraj.'
            },
            {
              yearOrEra: '1296-1316 CE',
              eventTitle: 'Price Control & Southern Military Expeditions',
              rulerOrSignificance: 'Military campaigns in south India led by Malik Kafur; severe revenue assessments.'
            }
          ],
          finalAnswerBox: 'Node [A] = [                         ]  |  Node [B] = [                         ]  |  Node [C] = [                         ]'
        },
        {
          id: 'sst-2',
          questionNumber: '1.2',
          type: 'map-analysis',
          marks: 4,
          prompt: 'Geographical Territory & Garrison Analysis: Look at the outline representation of the Sultanate military routes. Differentiate between Internal Frontier campaigns and External Frontier campaigns.',
          givenDetails: [
            'Internal Frontier: Consolidation of the hinterlands of the garrison towns along Ganga-Yamuna doab.',
            'External Frontier: Military expeditions into southern India starting during Alauddin Khalji’s reign.'
          ],
          diagram: {
            title: 'Military Campaigns under Alauddin Khalji & Muhammad Tughluq',
            type: 'map-tagging',
            caption: 'Outline route from Delhi southwards to Devagiri, Warangal, and Dvarasamudra',
            svgContent: `<svg viewBox="0 0 380 200" class="w-full h-44">
              <!-- Outline shape of Indian subcontinent central-south -->
              <path d="M 60,30 L 320,30 L 290,100 L 230,170 L 190,190 L 150,170 L 90,100 Z" fill="#fffbeb" stroke="#78350f" stroke-width="1.8"/>
              
              <!-- Delhi Hub Marker -->
              <circle cx="170" cy="50" r="5" fill="#dc2626"/>
              <text x="180" y="54" font-family="monospace" font-size="11" font-weight="bold" fill="#000">Delhi (Capital)</text>
              
              <!-- Campaign Arrows southward -->
              <path d="M 170,55 Q 160,90 145,115" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
              <circle cx="145" cy="115" r="4" fill="#b45309"/>
              <text x="80" y="118" font-family="monospace" font-size="10" font-weight="bold" fill="#78350f">[1] Devagiri</text>
              
              <path d="M 170,55 Q 210,100 230,130" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
              <circle cx="230" cy="130" r="4" fill="#b45309"/>
              <text x="240" y="133" font-family="monospace" font-size="10" font-weight="bold" fill="#78350f">[2] Warangal</text>
              
              <path d="M 145,115 Q 160,150 180,175" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
              <circle cx="180" cy="175" r="4" fill="#b45309"/>
              <text x="190" y="180" font-family="monospace" font-size="10" font-weight="bold" fill="#78350f">[3] Dvarasamudra</text>
            </svg>`
          },
          workingLinesCount: 3,
          finalAnswerBox: 'Primary objective of External Frontier raids: [ Plunder of precious metals & war elephants / Permanent annexation ]'
        }
      ]
    }
  ]
};
