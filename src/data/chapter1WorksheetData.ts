export interface Question {
  id: string;
  type: "mcq" | "fill" | "true_false" | "short";
  question: string;
  options?: string[]; // for MCQ
  answer: string;
  hint: string;
  explanation: string;
}

export interface PageWorksheet {
  pageNumber: number;
  topicTitle: string;
  coreConcepts: string[];
  keyTerms: { term: string; definition: string }[];
  questions: Question[];
}

export interface ChapterWorksheetData {
  book: string;
  chapterTitle: string;
  chapterNumber: number;
  totalPages: number;
  pages: PageWorksheet[];
}

export const chapter1WorksheetData: ChapterWorksheetData = {
  book: "Ganita Prakash Grade 7 | Part-II (NEW NCERT)",
  chapterTitle: "Geometric Twins (Congruence & Correspondence)",
  chapterNumber: 1,
  totalPages: 23,
  pages: [
    {
      pageNumber: 1,
      topicTitle: "Introduction to Geometric Twins & Recreating Figures",
      coreConcepts: [
        "What are Geometric Twins (Identical / Congruent figures)",
        "Limitations of tracing paper for large geometric symbols",
        "Role of exact measurements (side lengths and angles) in recreating shapes"
      ],
      keyTerms: [
        { term: "Geometric Twins", definition: "Figures that have exactly the same shape and size." },
        { term: "Tracing Method", definition: "Recreating a figure by tracing outlines, suitable only for small figures." }
      ],
      questions: [
        {
          id: "p1-q1",
          type: "mcq",
          question: "When two geometric figures have the exact same shape and exact same size, they are referred to as:",
          options: ["Similar figures", "Geometric Twins (Congruent)", "Parallel figures", "Equivalent polygons"],
          answer: "Geometric Twins (Congruent)",
          hint: "Think about the chapter title: twins that are identical in both shape and dimensions.",
          explanation: "In NCERT Grade 7, 'Geometric Twins' is the intuitive concept introducing Congruence, where two figures superimpose perfectly."
        },
        {
          id: "p1-q2",
          type: "fill",
          question: "Tracing paper is effective for small drawings, but for large signboards, we need exact ________ to recreate the figure.",
          answer: "measurements",
          hint: "Think of dimensions like lengths and angles.",
          explanation: "Exact measurements (lengths of arms and angles between them) allow precise mathematical reproduction without tracing."
        },
        {
          id: "p1-q3",
          type: "true_false",
          question: "Knowing only the lengths of the arms of a symbol is always sufficient to recreate its exact identical twin.",
          options: ["True", "False"],
          answer: "False",
          hint: "Can the angle between the two arms change even if their lengths remain 4 cm and 8 cm?",
          explanation: "False! If the angle between the arms changes, the resulting figure will have a completely different shape even with identical arm lengths."
        }
      ]
    },
    {
      pageNumber: 2,
      topicTitle: "Arm Lengths & Shape Variation (Why Length Alone Isn't Enough)",
      coreConcepts: [
        "Constructing multiple non-congruent figures with same side lengths",
        "Role of included angle in determining orientation and spread",
        "Measurements of arms AB = 4 cm, BC = 8 cm"
      ],
      keyTerms: [
        { term: "Arm Length", definition: "The measure of a line segment connecting two consecutive vertices." },
        { term: "Included Angle", definition: "The angle formed between two specific connected line segments." }
      ],
      questions: [
        {
          id: "p2-q1",
          type: "mcq",
          question: "If arm AB = 4 cm and arm BC = 8 cm, how many different shapes can be formed if the angle at B is not fixed?",
          options: ["Exactly 1", "Only 2", "Infinitely many", "Zero"],
          answer: "Infinitely many",
          hint: "The angle at B can open from 1° to nearly 180°.",
          explanation: "Without fixing the angle ∠B, arms AB and BC can rotate relative to each other forming infinitely many different figures."
        },
        {
          id: "p2-q2",
          type: "fill",
          question: "Fixing the ________ between two arms of given lengths fixes the exact shape and size of the figure.",
          answer: "angle",
          hint: "It is measured in degrees using a protractor.",
          explanation: "When both the side lengths and the included angle are fixed, the figure becomes unique and reproducible."
        }
      ]
    },
    {
      pageNumber: 3,
      topicTitle: "Defining Congruence & Verification Conditions",
      coreConcepts: [
        "Superposition criterion: Perfect overlap",
        "Two figures are congruent if they match in both arm lengths AND angles",
        "Verifying congruence without cutting or tracing"
      ],
      keyTerms: [
        { term: "Congruence (≅)", definition: "Relation between two figures that coincide completely when placed one over another." },
        { term: "Superposition", definition: "The method of placing one figure directly on top of another to test congruence." }
      ],
      questions: [
        {
          id: "p3-q1",
          type: "mcq",
          question: "Two geometric figures with arm lengths AB = 4 cm, BC = 8 cm are guaranteed to be congruent if:",
          options: [
            "Their colors are the same",
            "Both arm lengths and the angle ∠B between them are equal",
            "Only arm AB is equal",
            "They are drawn on the same sheet"
          ],
          answer: "Both arm lengths and the angle ∠B between them are equal",
          hint: "Both size (lengths) and shape (angle) must be locked.",
          explanation: "Fixing both lengths and the included angle ensures complete superposition and congruence."
        },
        {
          id: "p3-q2",
          type: "true_false",
          question: "If two figures look identical from a distance, they are mathematically proven to be congruent.",
          options: ["True", "False"],
          answer: "False",
          hint: "Look can be deceiving; mathematical congruence requires precise measurement.",
          explanation: "Visual similarity does not guarantee congruence; side lengths and angles must be verified through exact measurements."
        }
      ]
    },
    {
      pageNumber: 4,
      topicTitle: "Congruence in Circles, Squares & Rectangles",
      coreConcepts: [
        "Condition for Congruent Circles: Equal Radii",
        "Condition for Congruent Squares: Equal Side Lengths",
        "Condition for Congruent Rectangles: Equal Length AND Breadth"
      ],
      keyTerms: [
        { term: "Radius (r)", definition: "Distance from center to any point on circle; single parameter that determines circle size." },
        { term: "Rectangle Dimensions", definition: "Length (l) and Breadth (b) which together govern rectangular congruence." }
      ],
      questions: [
        {
          id: "p4-q1",
          type: "mcq",
          question: "Two circles are congruent if and only if they have the same:",
          options: ["Center point", "Radius", "Orientation", "Chord length"],
          answer: "Radius",
          hint: "If two coins of 5 rupees overlap completely, what measurement is identical?",
          explanation: "Since a circle's shape is always circular, having equal radii guarantees they will superimpose exactly."
        },
        {
          id: "p4-q2",
          type: "fill",
          question: "Two rectangles are congruent if their corresponding ________ and ________ are equal.",
          answer: "length and breadth",
          hint: "The two dimensions defining a rectangle.",
          explanation: "A rectangle has 90° angles; thus if both length and breadth match, all 4 sides and angles are identical."
        },
        {
          id: "p4-q3",
          type: "mcq",
          question: "To verify whether two squares are congruent, how many side measurements do we need to check?",
          options: ["All 4 sides", "Only 1 side of each", "Diagonal only", "Perimeter only"],
          answer: "Only 1 side of each",
          hint: "All 4 sides of a square are always equal and all angles are 90°.",
          explanation: "Because every square has 4 equal sides and 90° corners, equal side length guarantees 100% congruence."
        }
      ]
    },
    {
      pageNumber: 5,
      topicTitle: "Triangle Congruence: The 3 Sidelengths Exploration",
      coreConcepts: [
        "Triangle as a rigid polygon",
        "Measuring 3 sides with tape / scale",
        "Does matching 3 sides lock the triangle completely? (Introduction to SSS)"
      ],
      keyTerms: [
        { term: "Triangle Rigidity", definition: "A triangle is a rigid structure; once its 3 side lengths are fixed, its shape cannot be altered." },
        { term: "Side-Side-Side (SSS)", definition: "If three sides of one triangle equal three sides of another triangle, the triangles are congruent." }
      ],
      questions: [
        {
          id: "p5-q1",
          type: "mcq",
          question: "Why are triangular frameworks widely used in bridges and electrical towers?",
          options: ["They are cheaper", "Triangles are rigid structures whose angles cannot deform once sides are fixed", "They look modern", "They are lighter than squares"],
          answer: "Triangles are rigid structures whose angles cannot deform once sides are fixed",
          hint: "Think about why a 3-legged stool never wobbles compared to a 4-legged chair.",
          explanation: "Unlike quadrilaterals, a triangle's shape is completely locked when its three side lengths are fixed."
        },
        {
          id: "p5-q2",
          type: "fill",
          question: "If all three sides of ∆ABC are equal in length to all three sides of ∆PQR, the triangles are congruent by the ________ criterion.",
          answer: "SSS",
          hint: "Three letters representing 'Side'.",
          explanation: "The SSS (Side-Side-Side) congruence criterion states that 3 equal side pairs ensure congruent triangles."
        }
      ]
    },
    {
      pageNumber: 6,
      topicTitle: "Correspondence of Vertices, Sides & Angles (∆ABC ≅ ∆XYZ)",
      coreConcepts: [
        "One-to-one correspondence of vertices: A ↔ X, B ↔ Y, C ↔ Z",
        "Corresponding sides: AB = XY, BC = YZ, CA = ZX",
        "Corresponding angles: ∠A = ∠X, ∠B = ∠Y, ∠C = ∠Z",
        "Order of letters in congruence notation matters!"
      ],
      keyTerms: [
        { term: "Correspondence (↔)", definition: "Matching each vertex, side, and angle of one figure directly to its twin counterpart." },
        { term: "Symbol '≅'", definition: "Symbol denoting 'is congruent to', showing both equality of size and equivalence of shape." }
      ],
      questions: [
        {
          id: "p6-q1",
          type: "mcq",
          question: "If ∆ABC ≅ ∆RPQ, which side corresponds to side BC?",
          options: ["PQ", "RP", "RQ", "QR"],
          answer: "PQ",
          hint: "Look at the letter positions: A(1) B(2) C(3) corresponds to R(1) P(2) Q(3). So positions 2-3 are BC and PQ.",
          explanation: "In symbolic notation, vertex order gives the correspondence: B ↔ P and C ↔ Q, so side BC corresponds to side PQ."
        },
        {
          id: "p6-q2",
          type: "true_false",
          question: "Writing ∆ABC ≅ ∆XYZ means exactly the same thing as writing ∆ABC ≅ ∠ZYX.",
          options: ["True", "False"],
          answer: "False",
          hint: "Does changing letter order change which vertex matches which?",
          explanation: "False! In congruence statements, the order of vertices is strictly binding. ∆ABC ≅ ∆XYZ means A↔X, whereas ∆ABC ≅ ∆ZYX would mean A↔Z."
        },
        {
          id: "p6-q3",
          type: "fill",
          question: "In two congruent triangles, matching parts that overlap perfectly are called ________ parts.",
          answer: "corresponding",
          hint: "Often abbreviated as CPCTC (Corresponding Parts of Congruent Triangles are Congruent).",
          explanation: "Corresponding parts refer to matching pairs of vertices, sides, and angles between congruent figures."
        }
      ]
    },
    {
      pageNumber: 7,
      topicTitle: "SAS Criterion (Side-Angle-Side) & The Included Angle Rule",
      coreConcepts: [
        "Definition of Included Angle (angle between two known sides)",
        "Why non-included angle can create two different triangles (SSA ambiguity)",
        "SAS Congruence Rule statement and application"
      ],
      keyTerms: [
        { term: "SAS Criterion", definition: "Two sides and the included angle of one triangle must equal two sides and the included angle of another." },
        { term: "Included Angle", definition: "The angle trapped between two known sides, e.g., in ∆ABC, ∠B is included between AB and BC." }
      ],
      questions: [
        {
          id: "p7-q1",
          type: "mcq",
          question: "In ∆PQR, which angle is the 'included angle' between side PQ and side PR?",
          options: ["∠Q", "∠R", "∠P", "∠PQR"],
          answer: "∠P",
          hint: "Which vertex is common to both segments PQ and PR?",
          explanation: "The vertex P is common to sides PQ and PR; therefore, the angle formed at P (∠QPR or ∠P) is the included angle."
        },
        {
          id: "p7-q2",
          type: "true_false",
          question: "If two sides and ANY angle (not necessarily included) are equal in two triangles, they are always congruent.",
          options: ["True", "False"],
          answer: "False",
          hint: "Remember the angle must be strictly 'INCLUDED' between the two sides.",
          explanation: "False! SSA (Side-Side-Angle) is not a valid general congruence criterion; the angle MUST be strictly included (SAS)."
        }
      ]
    }
  ]
};
