export interface Question {
  id: string;
  type: "mcq" | "fill" | "true_false";
  question: string;
  options?: string[]; // exactly 4 options for MCQ, exactly 2 for True/False
  answer: string;
  hint: string;
  explanation: string;
  ncertReference: string; // Exact NCERT quote/page context
}

export interface PageWorksheet {
  pageNumber: number;
  topicTitle: string;
  sectionCode: string;
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
  chapterTitle: "Geometric Twins (Congruence of Triangles & Figures)",
  chapterNumber: 1,
  totalPages: 10,
  pages: [
    {
      pageNumber: 1,
      sectionCode: "1.1",
      topicTitle: "Geometric Twins: Recreating Figures on Signboards",
      coreConcepts: [
        "Recreating symbols on large signboards cannot rely on tracing paper.",
        "Identifying corner points and vertices (A, B, C) on geometric symbols.",
        "Why arm lengths AB and BC alone are NOT sufficient to replicate a shape."
      ],
      keyTerms: [
        { term: "Geometric Twins", definition: "Figures that have both the identical shape and identical size." },
        { term: "Arm Lengths", definition: "Linear measurements connecting consecutive corner vertices (AB, BC)." },
        { term: "Superposition", definition: "Placing one figure over another to check if they coincide completely." }
      ],
      questions: [
        {
          id: "p1-q1",
          type: "mcq",
          question: "When trying to recreate a large symbol from a signboard without tracing paper, why are the arm lengths AB and BC alone NOT sufficient?",
          options: [
            "Because arm lengths can change with temperature",
            "Because the angle between the two arms can be varied widely, altering the shape",
            "Because a signboard is made of metal and cannot be measured with a ruler",
            "Because arm lengths can only be measured in inches"
          ],
          answer: "Because the angle between the two arms can be varied widely, altering the shape",
          hint: "Think about opening a pair of scissors: arm lengths stay fixed, but the shape changes as they open.",
          explanation: "As explained on NCERT Page 1-2, two arms AB and BC can be rotated relative to each other. Without fixing the angle ∠ABC, an infinite number of different shapes can be formed.",
          ncertReference: "Page 1: 'Are the arm lengths AB and BC sufficient to exactly recreate this figure?'"
        },
        {
          id: "p1-q2",
          type: "fill",
          question: "Two geometric figures that have exactly the same shape and the exact same size are called geometric ________.",
          answer: "twins",
          hint: "Siblings born together with identical features.",
          explanation: "In NCERT Grade 7, identical figures with the same shape and size are introduced as 'Geometric Twins' (mathematically termed congruent figures).",
          ncertReference: "Page 1: Section 1.1 'Geometric Twins'"
        },
        {
          id: "p1-q3",
          type: "true_false",
          question: "Tracing paper is an efficient and practical method for duplicating massive outdoor highway signboards.",
          options: ["True", "False"],
          answer: "False",
          hint: "Can you hold tracing paper over a 10-foot tall metal signboard?",
          explanation: "False! NCERT states: 'One way is to trace the outline on tracing paper... But this is difficult for big symbols. Can we take some measurements instead?'",
          ncertReference: "Page 1: 'One way is to trace... But this is difficult for big symbols.'"
        },
        {
          id: "p1-q4",
          type: "mcq",
          question: "What minimum mathematical tools are required to duplicate an angular symbol from corner points A, B, and C?",
          options: [
            "Only a thermometer",
            "A measuring tape (for arm lengths AB, BC) and a protractor (for ∠ABC)",
            "A compass for drawing circles only",
            "A weighing scale"
          ],
          answer: "A measuring tape (for arm lengths AB, BC) and a protractor (for ∠ABC)",
          hint: "You need to fix both the distance of arms and the spread between them.",
          explanation: "Fixing lengths AB and BC with a measuring tape and the angle ∠ABC with a protractor ensures exact duplication without tracing.",
          ncertReference: "Page 1-2: Measuring arm lengths AB, BC and angle ∠ABC."
        }
      ]
    },
    {
      pageNumber: 2,
      sectionCode: "1.1",
      topicTitle: "Conditions for Exact Replica: Arms, Included Angle & Congruence",
      coreConcepts: [
        "Given AB = 4 cm, BC = 8 cm, several non-identical symbols can be formed.",
        "Fixing ∠ABC = 80° guarantees a unique, exact replica.",
        "Definition of Congruence: Exact copies having same shape and size.",
        "Rotation and reflection/flip invariance in congruence testing."
      ],
      keyTerms: [
        { term: "Congruent (≅)", definition: "Figures that can be superimposed exactly one over the other." },
        { term: "Rotation & Flip Invariance", definition: "A figure may be rotated or flipped before superimposing; it remains congruent." },
        { term: "Included Angle", definition: "The specific corner angle ∠ABC locked between arm AB and arm BC." }
      ],
      questions: [
        {
          id: "p2-q1",
          type: "mcq",
          question: "According to NCERT Page 2, which set of three measurements locks the symbol into a unique exact replica?",
          options: [
            "AB = 4 cm, BC = 8 cm, and ∠ABC = 80°",
            "AB = 4 cm, BC = 4 cm, and perimeter = 20 cm",
            "AB = 8 cm, BC = 8 cm, and color = Green",
            "Only ∠ABC = 80° without measuring any lengths"
          ],
          answer: "AB = 4 cm, BC = 8 cm, and ∠ABC = 80°",
          hint: "You need two lengths and the corner angle between them.",
          explanation: "NCERT Page 2 explicitly states: 'The measure of ∠ABC, along with the two arm lengths AB and BC, fix the shape and size of this figure... AB = 4 cm, BC = 8 cm, and ∠ABC = 80°'.",
          ncertReference: "Page 2: 'Can you draw the symbol if AB = 4 cm, BC = 8 cm, and ∠ABC = 80°?'"
        },
        {
          id: "p2-q2",
          type: "true_false",
          question: "While checking for congruence, a figure is allowed to be rotated or flipped before superimposing it on another figure.",
          options: ["True", "False"],
          answer: "True",
          hint: "If you flip a cutout over, does its size or shape change?",
          explanation: "True! NCERT Page 2 notes: 'Note that while checking for congruence, a figure can be rotated or flipped before superimposing it on the other figure.'",
          ncertReference: "Page 2: 'a figure can be rotated or flipped before superimposing it on the other figure.'"
        },
        {
          id: "p2-q3",
          type: "fill",
          question: "Figures that are exact copies of each other, having the same shape and same size, are said to be ________.",
          answer: "congruent",
          hint: "The formal mathematical term starting with letter C.",
          explanation: "Figures that can be superimposed exactly one over another are called congruent figures.",
          ncertReference: "Page 2: 'Figures that are exact copies of each other... are said to be congruent.'"
        },
        {
          id: "p2-q4",
          type: "mcq",
          question: "If two figures have the same shape but different sizes (like a small photo and its enlargement), are they congruent?",
          options: [
            "Yes, always congruent",
            "No, because congruence requires BOTH same shape AND same size",
            "Yes, if they are rotated 90°",
            "Yes, if they have identical colors"
          ],
          answer: "No, because congruence requires BOTH same shape AND same size",
          hint: "A 5-rupee coin and a 1-rupee coin are both round circles, but do they fit over each other?",
          explanation: "Congruence strictly demands both identical shape AND identical size. Same shape with different size is called similarity, not congruence.",
          ncertReference: "Page 2: 'Figures that have the same shape and size are said to be congruent.'"
        }
      ]
    },
    {
      pageNumber: 3,
      sectionCode: "1.1",
      topicTitle: "Verifying Congruence in Circles & Rectangles",
      coreConcepts: [
        "Verifying whether two figures are congruent using measurements rather than superposition.",
        "Condition for Congruent Circles: Single parameter (Radius).",
        "Condition for Congruent Rectangles: Two parameters (Length and Breadth)."
      ],
      keyTerms: [
        { term: "Circle Congruence", definition: "Two circles are congruent if and only if their radii (r) are equal." },
        { term: "Rectangle Congruence", definition: "Two rectangles are congruent if their length and breadth match respectively." }
      ],
      questions: [
        {
          id: "p3-q1",
          type: "mcq",
          question: "What single measurement is required to create a circle congruent to a given circle?",
          options: [
            "The coordinates of its center point",
            "Its radius (or diameter)",
            "The thickness of the drawn line",
            "The area of the paper on which it is drawn"
          ],
          answer: "Its radius (or diameter)",
          hint: "All circles have the exact same round shape; only their size depends on distance from center.",
          explanation: "Since all circles have the same shape, matching their radii ensures that both shape and size are identical, making them congruent.",
          ncertReference: "Page 3: Figure it Out Q3(a) 'What measurements would you take to create a figure congruent to a given Circle?'"
        },
        {
          id: "p3-q2",
          type: "fill",
          question: "To create a rectangle congruent to a given rectangle, we must measure its ________ and ________.",
          answer: "length and breadth",
          hint: "The two perpendicular linear dimensions of a 4-sided rectangular box.",
          explanation: "All rectangles have four 90° angles; hence, knowing the length and breadth uniquely fixes the rectangle's size and shape.",
          ncertReference: "Page 3: Figure it Out Q3(b) 'What measurements would you take to create a figure congruent to a given Rectangle?'"
        },
        {
          id: "p3-q3",
          type: "true_false",
          question: "Two rectangles having the same perimeter are always congruent.",
          options: ["True", "False"],
          answer: "False",
          hint: "A rectangle of 2×6 has perimeter 16 cm; a rectangle of 4×4 has perimeter 16 cm. Are they identical?",
          explanation: "False! Rectangles with length 6 cm, breadth 2 cm (Perimeter = 16) and length 5 cm, breadth 3 cm (Perimeter = 16) have different shapes and are NOT congruent.",
          ncertReference: "Page 3-4: Checking congruence of rectangles by matching both side dimensions."
        },
        {
          id: "p3-q4",
          type: "mcq",
          question: "If Circle C₁ has radius 5 cm and Circle C₂ has diameter 10 cm, what can we conclude?",
          options: [
            "C₁ is smaller than C₂",
            "C₁ and C₂ are congruent",
            "C₁ is twice the size of C₂",
            "They cannot be compared without knowing center coordinates"
          ],
          answer: "C₁ and C₂ are congruent",
          hint: "Diameter is twice the radius: 10 / 2 = ?",
          explanation: "Since diameter 10 cm means radius = 5 cm, both circles have equal radii (r = 5 cm) and are therefore 100% congruent.",
          ncertReference: "Page 3: Concept of equal radius for circle congruence."
        }
      ]
    },
    {
      pageNumber: 4,
      sectionCode: "1.2",
      topicTitle: "Congruence of Triangles: The Cardboard Triangular Frame Problem",
      coreConcepts: [
        "Meera and Rabia's school task: Making an identical cutout of a triangular frame.",
        "Large triangular frames cannot be easily traced on paper.",
        "Transition from general polygon congruence to triangular congruence."
      ],
      keyTerms: [
        { term: "Triangular Frame", definition: "A rigid 3-sided polygon whose vertices determine its shape." },
        { term: "Triangle Congruence", definition: "When two triangles coincide completely in all 3 sides and 3 angles." }
      ],
      questions: [
        {
          id: "p4-q1",
          type: "mcq",
          question: "In NCERT Section 1.2, what real-world problem are students Meera and Rabia tasked with solving?",
          options: [
            "Calculating the cost of painting a classroom wall",
            "Making an identical cardboard cutout of a large triangular frame in their school",
            "Measuring the height of an electrical transmission pole",
            "Drawing a circle using a piece of string"
          ],
          answer: "Making an identical cardboard cutout of a large triangular frame in their school",
          hint: "Look at the introductory story of Section 1.2 on Page 4.",
          explanation: "NCERT Section 1.2 begins with: 'Meera and Rabia have been asked to make a cardboard cutout identical to a triangular frame they have in school.'",
          ncertReference: "Page 4: 'Meera and Rabia have been asked to make a cardboard cutout identical to a triangular frame...'"
        },
        {
          id: "p4-q2",
          type: "fill",
          question: "The school triangular frame is too big to be ________ on paper, requiring mathematical measurements to replicate.",
          answer: "traced",
          hint: "Placing paper over an object and drawing along its outline.",
          explanation: "Because tracing large physical objects is cumbersome and imprecise, geometry relies on measuring minimum required parameters.",
          ncertReference: "Page 4: 'They see that the frame is too big to be traced on a paper and replicated.'"
        },
        {
          id: "p4-q3",
          type: "true_false",
          question: "Checking whether two complex shapes are congruent requires checking that every point of the first figure matches the second figure.",
          options: ["True", "False"],
          answer: "True",
          hint: "By definition, congruence means exact overlap of the whole figure.",
          explanation: "True! Congruence fundamentally means complete superposition where every boundary line and interior point coincides.",
          ncertReference: "Page 4: 'Use this to identify whether each of the following pairs are congruent.'"
        }
      ]
    },
    {
      pageNumber: 5,
      sectionCode: "1.2",
      topicTitle: "Measuring Sidelengths: Rabia vs Meera's Protractor Debate",
      coreConcepts: [
        "Girls measure triangle sides to be 40 cm, 60 cm, and 80 cm (scaled to 4 cm, 6 cm, 8 cm).",
        "Rabia tries to measure angles with a protractor, but Meera stops her.",
        "Meera's claim: 'The angles are not required! With the 3 side lengths, we can create a congruent triangle.'",
        "Rabia's circle construction: Circles with radii 4 cm and 8 cm intersect at TWO points (forming ∆ABE and ∆ABF)."
      ],
      keyTerms: [
        { term: "Triangle Rigidity", definition: "Three fixed side lengths determine the triangle's angles automatically." },
        { term: "Circle Intersection", definition: "Arcs drawn from endpoints of a base segment intersect at two symmetric points above and below the line." }
      ],
      questions: [
        {
          id: "p5-q1",
          type: "mcq",
          question: "When Rabia brings out her protractor to measure the angles of the 40 cm, 60 cm, and 80 cm triangular frame, why does Meera stop her?",
          options: [
            "Because the protractor is broken",
            "Because Meera claims that measuring the three side lengths alone is sufficient to construct an exact congruent triangle",
            "Because angles of triangles cannot be measured in school",
            "Because triangles do not have angles"
          ],
          answer: "Because Meera claims that measuring the three side lengths alone is sufficient to construct an exact congruent triangle",
          hint: "Meera said: 'The angles of the triangle are not required! With the side lengths... we can create a triangle congruent to this one.'",
          explanation: "Meera realizes the fundamental property of triangles: locking the three side lengths automatically locks all three internal angles.",
          ncertReference: "Page 5: 'Meera: The angles of the triangle are not required! With the side lengths we have measured, we can create a triangle congruent to this one.'"
        },
        {
          id: "p5-q2",
          type: "mcq",
          question: "When Rabia draws base AB = 6 cm and draws arcs of radii 4 cm and 8 cm from A and B, at how many points do the circles intersect?",
          options: [
            "Only 1 point",
            "At 2 points (E above AB and F below AB), forming ∆ABE and ∆ABF",
            "At 3 points",
            "They do not intersect at all"
          ],
          answer: "At 2 points (E above AB and F below AB), forming ∆ABE and ∆ABF",
          hint: "Two circles in a plane that overlap intersect in two points across the center line.",
          explanation: "As illustrated on Page 5, the two circles intersect at point E (above AB) and point F (below AB), producing two mirror triangles ∆ABE and ∆ABF.",
          ncertReference: "Page 5: 'the circles would intersect at two points, forming two triangles: ∆ABE and ∆ABF.'"
        },
        {
          id: "p5-q3",
          type: "fill",
          question: "Rabia constructs base segment AB = 6 cm and uses circle radii of ________ cm and ________ cm to find the third vertex.",
          answer: "4 and 8",
          hint: "The other two scaled side lengths from 40 cm and 80 cm.",
          explanation: "Scaling down 40 cm, 60 cm, and 80 cm by a factor of 10 gives convenient workbook lengths of 4 cm, 6 cm, and 8 cm.",
          ncertReference: "Page 5: 'lengths had been 4 cm, 6 cm, 8 cm... draw circles from end points with radii 4 cm and 8 cm.'"
        },
        {
          id: "p5-q4",
          type: "true_false",
          question: "Rabia wondered whether ∆ABE and ∆ABF are different shapes or identical congruent twins.",
          options: ["True", "False"],
          answer: "True",
          hint: "Rabia asks: 'Do these two triangles have the same shape and size?'",
          explanation: "True! Rabia was concerned that the two intersection points might produce non-congruent triangles.",
          ncertReference: "Page 5: 'Rabia: Do these two triangles have the same shape and size?'"
        }
      ]
    },
    {
      pageNumber: 6,
      sectionCode: "1.2",
      topicTitle: "The SSS Congruence Criterion & Matching Corresponding Parts",
      coreConcepts: [
        "∆ABE and ∆ABF are congruent because AB acts as a line of symmetry (reflection).",
        "Formal SSS (Side-Side-Side) Condition: If two triangles have the same 3 sidelengths, they are congruent.",
        "Conventions to Express Congruence: Overlapping Vertex A over X, B over Y, C over Z.",
        "Corresponding Angles: ∠A = ∠X, ∠B = ∠Y, ∠C = ∠Z."
      ],
      keyTerms: [
        { term: "SSS Condition", definition: "Side-Side-Side: If three sides of one triangle are equal to three sides of another triangle, the triangles are congruent." },
        { term: "Line of Symmetry", definition: "A line across which a figure reflects onto an identical congruent image." },
        { term: "Corresponding Vertices", definition: "Vertices that match and superimpose directly onto one another (A↔X, B↔Y, C↔Z)." }
      ],
      questions: [
        {
          id: "p6-q1",
          type: "mcq",
          question: "Why are the two triangles ∆ABE and ∆ABF formed above and below line AB proven to be congruent?",
          options: [
            "Because they were drawn with the same pen",
            "Because line AB acts as a line of symmetry due to identical acts of construction above and below it",
            "Because all triangles on paper are congruent",
            "Because their angles sum up to 360°"
          ],
          answer: "Because line AB acts as a line of symmetry due to identical acts of construction above and below it",
          hint: "If you fold the paper along line AB, point E falls exactly onto point F.",
          explanation: "NCERT Page 6 highlights that line AB acts as an axis of symmetry, confirming that ∆ABE and ∆ABF superimpose perfectly upon folding.",
          ncertReference: "Page 6: 'observing that AB acts as a line of symmetry due to the sameness of the act of construction...'"
        },
        {
          id: "p6-q2",
          type: "fill",
          question: "The criterion stating that 'If two triangles have the same three sidelengths, then they are congruent' is called the ________ condition.",
          answer: "SSS",
          hint: "Three letters representing Side-Side-Side.",
          explanation: "SSS stands for Side-Side-Side, the first primary congruence criterion in Euclidean geometry.",
          ncertReference: "Page 6: 'We call this the SSS (Side Side Side) condition for congruence.'"
        },
        {
          id: "p6-q3",
          type: "true_false",
          question: "If two triangles are congruent by SSS, their corresponding internal angles are guaranteed to be equal.",
          options: ["True", "False"],
          answer: "True",
          hint: "If two shapes fit exactly over each other, do their corner angles match?",
          explanation: "True! NCERT Page 6 states: 'The fact that these triangles are congruent shows that their respective angles are equal: ∠A = ∠X, ∠B = ∠Y and ∠C = ∠Z.'",
          ncertReference: "Page 6: 'The fact that these triangles are congruent shows that their respective angles are equal...'"
        },
        {
          id: "p6-q4",
          type: "mcq",
          question: "When overlapping ∆ABC and ∆XYZ to demonstrate congruence, how must the vertices be matched?",
          options: [
            "Any vertex can be placed on any vertex randomly",
            "Vertex A on X, B on Y, and C on Z so that equal corresponding sides overlap",
            "Always align the largest angle to the smallest angle",
            "Vertices cannot be overlapped once drawn"
          ],
          answer: "Vertex A on X, B on Y, and C on Z so that equal corresponding sides overlap",
          hint: "Equal sides must lie directly on top of each other.",
          explanation: "Congruence requires corresponding vertices to match so that side AB matches XY, BC matches YZ, and AC matches XZ.",
          ncertReference: "Page 6: 'Overlapping Vertex A over Vertex X, B over Y and C over Z will ensure that equal sides overlap...'"
        }
      ]
    },
    {
      pageNumber: 7,
      sectionCode: "1.2",
      topicTitle: "Strict Notation Conventions: ∆ABC ≅ ∆XYZ & Rectangle Diagonal Proof",
      coreConcepts: [
        "In the notation ∆ABC ≅ ∆XYZ, vertex order is strictly binding (1st↔1st, 2nd↔2nd, 3rd↔3rd).",
        "Why writing ∆ACB ≅ ∆XYZ is mathematically INCORRECT when A↔X, B↔Y, C↔Z.",
        "Alternative correct representation: ∆ACB ≅ ∆XZY.",
        "Proving congruence in rectangle ABCD divided by diagonal BD (∆ABD and ∆CDB)."
      ],
      keyTerms: [
        { term: "Congruence Notation", definition: "Writing ∆ABC ≅ ∆XYZ where the order of letters directly declares the vertex correspondence." },
        { term: "Common Side", definition: "A shared side (like diagonal BD) that has identical length in both triangles." }
      ],
      questions: [
        {
          id: "p7-q1",
          type: "mcq",
          question: "If ∆ABC ≅ ∆XYZ with A↔X, B↔Y, C↔Z, which of the following alternative statements is mathematically CORRECT?",
          options: [
            "∆ACB ≅ ∆XYZ",
            "∆ACB ≅ ∆XZY",
            "∆BCA ≅ ∆XZY",
            "∆CAB ≅ ∆YZX"
          ],
          answer: "∆ACB ≅ ∆XZY",
          hint: "Match the order: A matches X (1st), C matches Z (2nd), B matches Y (3rd).",
          explanation: "NCERT Page 7 explicitly explains: 'it is incorrect to write that ∆ACB ≅ ∆XYZ. However, another correct way of saying it is ∆ACB ≅ ∆XZY.'",
          ncertReference: "Page 7: 'it is incorrect to write... that ∆ACB ≅ ∆XYZ. However, another correct way is ∆ACB ≅ ∆XZY.'"
        },
        {
          id: "p7-q2",
          type: "true_false",
          question: "In a rectangle ABCD, diagonal BD divides the rectangle into two triangles ∆ABD and ∆CDB which are congruent by SSS.",
          options: ["True", "False"],
          answer: "True",
          hint: "Opposite sides of a rectangle are equal (AB=CD, AD=CB), and BD is common to both.",
          explanation: "True! In rectangle ABCD: AB = CD, AD = CB, and BD = BD (common side). Thus, all three side pairs are equal, proving congruence by SSS.",
          ncertReference: "Page 7: 'Since ABCD is a rectangle, we have AB = CD, AD = CB... remaining side is BD... SSS holds.'"
        },
        {
          id: "p7-q3",
          type: "fill",
          question: "In the notation ∆ABC ≅ ∆PQR, the side of ∆PQR that corresponds to side AC is side ________.",
          answer: "PR",
          hint: "First and third letters of ∆ABC match first and third letters of ∆PQR.",
          explanation: "A corresponds to P, and C corresponds to R; therefore, segment AC corresponds directly to segment PR.",
          ncertReference: "Page 7: 'the first vertex in the name of ∆ABC corresponds to the first vertex in ∆XYZ...'"
        },
        {
          id: "p7-q4",
          type: "mcq",
          question: "Why is it invalid to write ∆ABD ≅ ∆CBD for the two halves of a rectangle ABCD?",
          options: [
            "Because rectangles do not have triangles",
            "Because this correspondence would lay side AB over side CB, which are generally not equal in a rectangle",
            "Because diagonal BD has two different lengths",
            "Because letter D cannot appear in both names"
          ],
          answer: "Because this correspondence would lay side AB over side CB, which are generally not equal in a rectangle",
          hint: "In a non-square rectangle, length is not equal to breadth (AB ≠ CB).",
          explanation: "NCERT Page 8 explains that ∆ABD ≅ ∆CDB is the correct correspondence, because matching AB with CB would fail since length ≠ breadth in a rectangle.",
          ncertReference: "Page 8: 'This correspondence lays AB over CB. But these sides need not be equal... superimposition will not establish congruence.'"
        }
      ]
    },
    {
      pageNumber: 8,
      sectionCode: "1.2",
      topicTitle: "Exercise Breakdown: Figure it Out (Triangle Matching Problems)",
      coreConcepts: [
        "Exercise 1: If ∆HEN ≅ ∆BIG, list all 5 other valid permutations of vertex orders.",
        "Exercise 2: Evaluating triangle pair RED (sides 3.5, 5, 6 cm) and JAM (sides 3.5, 5, 6 cm).",
        "Determining correct vertex correspondence in numerical triangles."
      ],
      keyTerms: [
        { term: "Permutations of Congruence", definition: "A single congruence relationship can be written in 6 valid identical vertex orderings." },
        { term: "Numerical Triangle SSS", definition: "Matching explicit side measurements (e.g. 3.5 cm, 5 cm, 6 cm) between two triangles." }
      ],
      questions: [
        {
          id: "p8-q1",
          type: "mcq",
          question: "If ∆HEN ≅ ∆BIG, which of the following is a VALID equivalent congruence statement?",
          options: [
            "∆EHN ≅ ∆IBG",
            "∆NEH ≅ ∆GBI",
            "∆HNE ≅ ∆BGI",
            "∆ENH ≅ ∆BGI"
          ],
          answer: "∆EHN ≅ ∆IBG",
          hint: "H↔B, E↔I, N↔G. If you write E(2nd) H(1st) N(3rd), the right side must be I(2nd) B(1st) G(3rd).",
          explanation: "Since H↔B, E↔I, and N↔G, swapping H and E to make ∆EHN must correspond to swapping B and I to make ∆IBG.",
          ncertReference: "Page 8: Figure it Out Q1 'Suppose ∆HEN is congruent to ∆BIG. List all the other correct ways...'"
        },
        {
          id: "p8-q2",
          type: "fill",
          question: "If ∆RED has sides RE = 3.5 cm, ED = 5 cm, DR = 6 cm and ∆JAM has JA = 3.5 cm, AM = 5 cm, MJ = 6 cm, then ∆RED is congruent to ∆________.",
          answer: "JAM",
          hint: "Match RE=3.5 with JA=3.5, ED=5 with AM=5, and DR=6 with MJ=6.",
          explanation: "R↔J, E↔A, and D↔M because RE=JA=3.5, ED=AM=5, and DR=MJ=6. Thus ∆RED ≅ ∆JAM.",
          ncertReference: "Page 8: Figure it Out Q2 'Determine whether the triangles are congruent... RED and JAM.'"
        },
        {
          id: "p8-q3",
          type: "true_false",
          question: "There are exactly six different ways to correctly write the congruence between two congruent triangles.",
          options: ["True", "False"],
          answer: "True",
          hint: "A triangle has 3 vertices; how many permutations can you arrange 3 items? 3 × 2 × 1 = ?",
          explanation: "True! There are 3! = 6 possible orderings of 3 vertices, and matching each with the identical counterpart yields 6 valid representations.",
          ncertReference: "Page 8: Listing all equivalent ways of expressing congruence."
        }
      ]
    },
    {
      pageNumber: 9,
      sectionCode: "1.2",
      topicTitle: "Kite Quadrilateral Proof & Angle-Angle-Angle (AAA) Failure",
      coreConcepts: [
        "In kite ABCD where AB = AD and CB = CD: Proving ∆ABC ≅ ∆ADC by SSS with common side AC.",
        "AC divides ∠BAD and ∠BCD into two equal parts (bisects angles).",
        "Investigating AAA (Angle-Angle-Angle): If angles are 30°, 70°, and 80°, can we recreate the frame?",
        "Failure of AAA: Infinite non-congruent triangles exist with same 3 angles (same shape, different sizes)."
      ],
      keyTerms: [
        { term: "Common Segment (AC)", definition: "Shared backbone dividing kite into two symmetric triangles." },
        { term: "Angle Bisector", definition: "A ray/segment that splits an angle into two equal halves." },
        { term: "AAA (Angle-Angle-Angle)", definition: "Condition of 3 equal angles; does NOT guarantee congruence, only similarity." }
      ],
      questions: [
        {
          id: "p9-q1",
          type: "mcq",
          question: "In the kite quadrilateral figure with AB = AD and CB = CD, why does diagonal AC divide ∠BAD into two equal halves?",
          options: [
            "Because AC is horizontal",
            "Because ∆ABC ≅ ∆ADC by SSS, making corresponding angles ∠BAC and ∠DAC equal",
            "Because angles are always 45 degrees",
            "Because AC is shorter than BD"
          ],
          answer: "Because ∆ABC ≅ ∆ADC by SSS, making corresponding angles ∠BAC and ∠DAC equal",
          hint: "Corresponding Parts of Congruent Triangles (CPCTC) are equal.",
          explanation: "In ∆ABC and ∆ADC: AB = AD, CB = CD, and AC = AC (common). By SSS, ∆ABC ≅ ∆ADC, so corresponding angle ∠BAC = ∠DAC, meaning AC bisects ∠BAD.",
          ncertReference: "Page 9: Figure it Out Q3 'Does AC divide ∠BAD and ∠BCD into two equal parts? Give reasons.'"
        },
        {
          id: "p9-q2",
          type: "true_false",
          question: "If two triangles have the exact same three angles (e.g. 30°, 70°, and 80°), they are guaranteed to be congruent.",
          options: ["True", "False"],
          answer: "False",
          hint: "Think of an equilateral triangle drawn on a coin vs an equilateral triangle drawn on a football field. Are they congruent?",
          explanation: "False! NCERT Page 9-10 states: 'We can draw many triangles with these measurements that are not congruent... They have the same shape, but not the same size. Hence AAA does not imply congruence.'",
          ncertReference: "Page 9-10: 'two triangles that have the same set of angles need not be congruent.'"
        },
        {
          id: "p9-q3",
          type: "fill",
          question: "Two triangles having identical sets of angles have the same ________, but not necessarily the same size.",
          answer: "shape",
          hint: "Geometry attribute distinguishing a circle from a triangle, independent of scale.",
          explanation: "Identical angles preserve proportionality (same shape/similar), but without at least one fixed side length, size can vary infinitely.",
          ncertReference: "Page 10: 'These triangles are seen to have the same shape, but not the same size.'"
        }
      ]
    },
    {
      pageNumber: 10,
      sectionCode: "1.2",
      topicTitle: "SAS Criterion (Side-Angle-Side) vs Non-Included Angle (SSA)",
      coreConcepts: [
        "Two sides and the INCLUDED angle: AB = XY = 6 cm, AC = XZ = 5 cm, and included ∠A = ∠X = 30°.",
        "The SAS (Side-Angle-Side) Congruence Criterion statement.",
        "Critical danger of Non-Included Angle (SSA): If ∠B = ∠Y = 30° (non-included), two different non-congruent triangles can be constructed!"
      ],
      keyTerms: [
        { term: "SAS Condition", definition: "When two sides and the included angle of one triangle are equal to two sides and included angle of another, the triangles are congruent." },
        { term: "Non-Included Angle", definition: "An angle opposite one of the given sides; does NOT guarantee congruence (ambiguous case)." }
      ],
      questions: [
        {
          id: "p10-q1",
          type: "mcq",
          question: "Under the SAS (Side-Angle-Side) criterion, why is it strictly necessary that the angle be the 'INCLUDED' angle?",
          options: [
            "Because mathematicians prefer the letter A in the middle of S-A-S",
            "Because if the angle is non-included, two different non-congruent triangles can be constructed with the same side lengths",
            "Because non-included angles cannot be measured with a protractor",
            "Because triangles only have one internal angle"
          ],
          answer: "Because if the angle is non-included, two different non-congruent triangles can be constructed with the same side lengths",
          hint: "See the bottom of Page 10: 'Measuring Two Sides and a Non-included Angle... Can there exist non-congruent triangles? Construct and find out.'",
          explanation: "A swinging side of fixed length can intersect the base ray at two different positions, producing two completely different triangles unless the angle is locked between the two known sides (Included Angle).",
          ncertReference: "Page 10: 'What if two sides and a non-included angle are equal?... Can there exist non-congruent triangles having these measurements?'"
        },
        {
          id: "p10-q2",
          type: "fill",
          question: "In ∆ABC, the included angle between side AB and side BC is angle ________.",
          answer: "B",
          hint: "The common letter shared by both sides AB and BC.",
          explanation: "Vertex B connects segment AB to segment BC; therefore, the angle formed at vertex B (∠ABC or ∠B) is the included angle.",
          ncertReference: "Page 10: Concept of Included Angle in SAS."
        },
        {
          id: "p10-q3",
          type: "true_false",
          question: "If AB = XY = 6 cm, AC = XZ = 5 cm, and ∠A = ∠X = 30°, then ∆ABC ≅ ∆XYZ is guaranteed by the SAS criterion.",
          options: ["True", "False"],
          answer: "True",
          hint: "Is ∠A included between sides AB and AC?",
          explanation: "True! Sides AB and AC have vertex A in common, so ∠A is the included angle. Since two sides and included angle are equal, SAS holds.",
          ncertReference: "Page 10: 'when two sides and the included angle... are equal, the two triangles are congruent. This is referred to as SAS.'"
        },
        {
          id: "p10-q4",
          type: "mcq",
          question: "Which of the following conditions is NOT a universally valid congruence criterion for triangles?",
          options: [
            "SSS (Side-Side-Side)",
            "SAS (Side-Angle-Side)",
            "AAA (Angle-Angle-Angle)",
            "RHS (Right-Hypotenuse-Side)"
          ],
          answer: "AAA (Angle-Angle-Angle)",
          hint: "Equal angles give the same shape, but can have any size (like zoom levels).",
          explanation: "AAA only guarantees similarity (same shape), never congruence (same shape AND same size).",
          ncertReference: "Page 10: 'Hence, two triangles that have the same set of angles need not be congruent.'"
        }
      ]
    }
  ]
};
