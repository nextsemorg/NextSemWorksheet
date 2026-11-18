import { GeneratedWorkbook } from '@/types/workbook';

export const sampleEnglishWorkbook: GeneratedWorkbook = {
  id: 'eng-ch1-three-questions',
  title: 'Three Questions (Leo Tolstoy) & Direct-Indirect Speech',
  subject: 'english',
  classGrade: 'Class 7',
  sourceFileName: 'geen101.pdf',
  createdTimestamp: Date.now(),
  pages: [
    {
      pageNumber: 1,
      sourcePdfPage: 1,
      chapterTitle: 'Unit 1: Prose — Three Questions',
      topicTitle: 'Reading Comprehension, Vocabulary & Moral Philosophy',
      keyConcepts: [
        'Central Theme: The most important time is NOW, the most important person is who you are with, and the most important business is to do good.',
        'Character Analysis: The King seeking wisdom vs. The Hermit living in humble forest isolation.',
      ],
      keyFormulas: [
        'Grammar Rule (Indirect Speech): "I will help you," said the King ➔ The King said that he would help him.',
        'Literary Devices: Parable, Moral allegory, Irony of the wounded enemy.'
      ],
      questions: [
        {
          id: 'eng-1',
          questionNumber: '1.1',
          type: 'reading-comprehension',
          marks: 5,
          prompt: 'Read the extracted passage below carefully. Analyze the Hermit’s response to the King’s queries and answer the analytical questions in complete sentences.',
          readingPassage: {
            passageTitle: 'The Encounter with the Wise Hermit',
            authorOrSource: 'Adapted from Leo Tolstoy',
            paragraphs: [
              'The king went up to the hermit and said: "I have come to you, wise hermit, to ask you to answer three questions: How can I learn to do the right thing at the right time? Who are the people I most need? And what affairs are the most important?"',
              'The hermit listened to the king, but answered nothing. He just spat on his hand and recommenced digging. "You are tired," said the king, "let me take the spade and work a while for you." "Thanks," said the hermit, giving the king the spade, and sat down on the ground.'
            ],
            wordBankGlossary: [
              { word: 'Recommenced', meaning: 'Started or began again', partOfSpeech: 'Verb' },
              { word: 'Spade', meaning: 'A tool with a sharp-edged rectangular metal blade', partOfSpeech: 'Noun' },
              { word: 'Hermit', meaning: 'A person living in solitude as a religious discipline', partOfSpeech: 'Noun' }
            ]
          },
          workingLinesCount: 4,
          finalAnswerBox: 'What quality does the King demonstrate by offering to dig for the Hermit? [ Empathy & Humility / Impatience ]'
        },
        {
          id: 'eng-2',
          questionNumber: '1.2',
          type: 'vocab-grammar',
          marks: 4,
          prompt: 'Grammar & Vocabulary Workshop: Convert the dialogue into Indirect (Reported) Speech and provide antonyms from the text.',
          givenDetails: [
            'Direct: "You are tired," said the King to the Hermit.',
            'Word to match: "Commenced" ➔ Opposite: ____________'
          ],
          workingLinesCount: 3,
          finalAnswerBox: 'Reported Speech: The King told the Hermit that [                                                       ].'
        }
      ]
    }
  ]
};
