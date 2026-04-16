/* ─── Non-elective subjects (always present) ─── */
const BASE_SUBJECTS = [
  {
    id: 'CST302',
    code: 'CST302',
    name: 'Compiler Design',
    shortName: 'CD',
    examDate: '2026-04-24',
    credits: 4,
    priority: 'HIGH',
    color: '#6366f1', lightColor: '#3730A3',
    modules: [
      { id: 1, name: 'Introduction to Compilers & Lexical Analysis' },
      { id: 2, name: 'Syntax Analysis' },
      { id: 3, name: 'Bottom-Up Parsing' },
      { id: 4, name: 'Syntax Directed Translation & Intermediate Code Generation' },
      { id: 5, name: 'Code Optimization and Code Generation' },
    ],
  },
  {
    id: 'CST304',
    code: 'CST304',
    name: 'Computer Graphics',
    shortName: 'CG',
    examDate: '2026-04-28',
    credits: 4,
    priority: 'HIGH',
    color: '#8b5cf6', lightColor: '#5B21B6',
    links: {
      notesFolder:    'https://drive.google.com/drive/folders/1uFOE3CZPKGCPMxD5gcSPEG3vt81skONM?usp=sharing',
      notes: [
        { name: 'Module 1 Notes', fileId: '18vxFBh8rce-5n9nWEJmMmFy66VgyL8sE', moduleId: 1 },
      ],
      syllabusFolder: 'https://drive.google.com/drive/folders/1dt0ud-7kQK9wyB3Jq2fghL6VHnfdJwdg?usp=sharing',
      syllabus: [
        { name: 'CG Syllabus', fileId: '1dy9DXFTqtX1f7fQa8gqk5QrYlvOAZ08X' },
      ],
      pyqFolder: 'https://drive.google.com/drive/folders/1ER3zRwgF3gf7Jeb51G0n8GfLBXfXguXp?usp=sharing',
      pyq: [
        { name: 'April 2025',  fileId: '1teA8mqXKxQ_hjMwziJOKUZT5prxKCwRm' },
        { name: 'May 2024',    fileId: '1Onf2s2ivOxD2fOR758xvS4LBZfQBnt52' },
        { name: 'June 2023',   fileId: '1YodLAOE9Uwgbaa380Cne2-V4dNbxGYJ_' },
        { name: 'June 2022',   fileId: '1Kt3VrghIbPQxi08432QG3BPaZRARNkjZ' },
      ],
      videos: [
        {
          title: 'Computer Graphics — Full Lecture Series',
          desc: 'Complete playlist covering all 5 modules: CG basics, scan conversion, transformations, clipping, projections, and image processing.',
          url: 'https://www.youtube.com/playlist?list=PLpzddu_MrQ5arBI1m6DIO8qy20KpfKkDb',
        },
      ],
    },
    modules: [
      { id: 1, name: 'Basics of CG and Algorithms' },
      { id: 2, name: 'Filled Area Primitives and Transformations' },
      { id: 3, name: 'Clipping and Projections' },
      { id: 4, name: 'Fundamentals of Digital Image Processing' },
      { id: 5, name: 'Image Enhancement & Segmentation' },
    ],
  },
  {
    id: 'CST306',
    code: 'CST306',
    name: 'Algorithm Analysis & Design',
    shortName: 'AAD',
    examDate: '2026-05-02',
    credits: 4,
    priority: 'HIGH',
    color: '#ec4899', lightColor: '#9D174D',
    modules: [
      { id: 1, name: 'Introduction to Algorithm Analysis' },
      { id: 2, name: 'Advanced Data Structures and Graph Algorithms' },
      { id: 3, name: 'Divide & Conquer and Greedy Strategy' },
      { id: 4, name: 'Dynamic Programming, Backtracking and Branch & Bound' },
      { id: 5, name: 'Introduction to Complexity Theory' },
    ],
  },
  {
    id: 'HUT300',
    code: 'HUT300',
    name: 'Internet of Everything',
    shortName: 'IEFT',
    examDate: '2026-05-08',
    credits: 3,
    priority: 'MEDIUM',
    color: '#10b981', lightColor: '#047857',
    modules: [
      { id: 1, name: 'Introduction to IoT & IoE' },
      { id: 2, name: 'IoT Architecture & Protocols' },
      { id: 3, name: 'Sensors, Actuators & Connectivity' },
      { id: 4, name: 'Cloud & Fog Computing for IoT' },
      { id: 5, name: 'IoT Applications & Security' },
    ],
  },
  {
    id: 'CST308',
    code: 'CST308',
    name: 'Cloud Computing',
    shortName: 'CCW',
    examDate: '2026-05-12',
    credits: 3,
    priority: 'MEDIUM',
    color: '#06b6d4', lightColor: '#0E7490',
    modules: [
      { id: 1, name: 'Introduction to Cloud Computing' },
      { id: 2, name: 'Cloud Architecture & Service Models' },
      { id: 3, name: 'Virtualization' },
      { id: 4, name: 'Cloud Storage & Management' },
      { id: 5, name: 'Cloud Security & Applications' },
    ],
  },
];

/* ─── Elective options (same exam slot, same date) ─── */
const PYTHON_SUBJECT = {
  id: 'CST362',
  code: 'CST362',
  name: 'Python Programming',
  shortName: 'Python',
  examDate: '2026-05-05',
  credits: 3,
  priority: 'MEDIUM',
  color: '#f59e0b', lightColor: '#B45309',
  elective: true,
  modules: [
    { id: 1, name: 'Python Basics & Data Types' },
    { id: 2, name: 'Control Flow & Functions' },
    { id: 3, name: 'OOP in Python' },
    { id: 4, name: 'File Handling & Exceptions' },
    { id: 5, name: 'Libraries & Applications' },
  ],
};

const DA_SUBJECT = {
  id: 'CST362DA',
  code: 'CST362',
  name: 'Data Analytics',
  shortName: 'DA',
  examDate: '2026-05-05',
  credits: 3,
  priority: 'MEDIUM',
  color: '#F97316', lightColor: '#C2410C',
  elective: true,
  modules: [
    { id: 1, name: 'Introduction to Data Analytics' },
    { id: 2, name: 'Data Preprocessing & Exploratory Analysis' },
    { id: 3, name: 'Statistical Learning & Regression' },
    { id: 4, name: 'Classification, Clustering & Association' },
    { id: 5, name: 'Data Visualization & Business Intelligence' },
  ],
};

/* ─── Elective registry ─── */
export const ELECTIVE_OPTIONS = [
  { key: 'python', label: 'Python Programming', subject: PYTHON_SUBJECT },
  { key: 'da',     label: 'Data Analytics',     subject: DA_SUBJECT     },
];

/** All subjects including both elective variants — use for .find() lookups. */
export const ALL_SUBJECTS = [...BASE_SUBJECTS, PYTHON_SUBJECT, DA_SUBJECT];

/** Active 6-subject list with chosen elective. Defaults to Python. */
export function getActiveSubjects(electiveKey = 'python') {
  const elective = ELECTIVE_OPTIONS.find(o => o.key === electiveKey)?.subject ?? PYTHON_SUBJECT;
  // Insert elective after AAD (index 3), before HUT300
  return [
    BASE_SUBJECTS[0], // CST302
    BASE_SUBJECTS[1], // CST304
    BASE_SUBJECTS[2], // CST306
    elective,
    BASE_SUBJECTS[3], // HUT300
    BASE_SUBJECTS[4], // CST308
  ];
}

/** Legacy default — Python elective. Import getActiveSubjects for dynamic use. */
export const SUBJECTS = getActiveSubjects('python');

export const EXAM_SCHEDULE = SUBJECTS.map((s) => ({
  code: s.code,
  name: s.name,
  date: s.examDate,
}));

/** Returns the accent color appropriate for the current theme mode. */
export function getSubjectColor(subject, mode) {
  return mode === 'light' ? (subject.lightColor || subject.color) : subject.color;
}

export function getNextExam(subjects = SUBJECTS) {
  const now = new Date();
  return subjects
    .filter((s) => new Date(s.examDate) >= now)
    .sort((a, b) => new Date(a.examDate) - new Date(b.examDate))[0] || null;
}
