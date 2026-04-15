export const SUBJECTS = [
  {
    id: 'CST302',
    code: 'CST302',
    name: 'Compiler Design',
    shortName: 'CD',
    examDate: '2026-04-24',
    credits: 4,
    priority: 'HIGH',
    color: '#6366f1',
    modules: [
      { id: 1, name: 'Introduction to Compilers & Lexical Analysis' },
      { id: 2, name: 'Syntax Analysis' },
      { id: 3, name: 'Semantic Analysis & Intermediate Code Generation' },
      { id: 4, name: 'Code Optimization' },
      { id: 5, name: 'Code Generation & Runtime Environments' },
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
    color: '#8b5cf6',
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
    color: '#ec4899',
    modules: [
      { id: 1, name: 'Introduction & Divide and Conquer' },
      { id: 2, name: 'Greedy Algorithms' },
      { id: 3, name: 'Dynamic Programming' },
      { id: 4, name: 'Backtracking & Branch and Bound' },
      { id: 5, name: 'NP-Completeness' },
    ],
  },
  {
    id: 'CST362',
    code: 'CST362',
    name: 'Python Programming',
    shortName: 'Python',
    examDate: '2026-05-05',
    credits: 3,
    priority: 'MEDIUM',
    color: '#f59e0b',
    modules: [
      { id: 1, name: 'Python Basics & Data Types' },
      { id: 2, name: 'Control Flow & Functions' },
      { id: 3, name: 'OOP in Python' },
      { id: 4, name: 'File Handling & Exceptions' },
      { id: 5, name: 'Libraries & Applications' },
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
    color: '#10b981',
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
    color: '#06b6d4',
    modules: [
      { id: 1, name: 'Introduction to Cloud Computing' },
      { id: 2, name: 'Cloud Architecture & Service Models' },
      { id: 3, name: 'Virtualization' },
      { id: 4, name: 'Cloud Storage & Management' },
      { id: 5, name: 'Cloud Security & Applications' },
    ],
  },
];

export const EXAM_SCHEDULE = SUBJECTS.map((s) => ({
  code: s.code,
  name: s.name,
  date: s.examDate,
}));

export function getNextExam() {
  const now = new Date();
  const upcoming = SUBJECTS.filter((s) => new Date(s.examDate) >= now).sort(
    (a, b) => new Date(a.examDate) - new Date(b.examDate)
  );
  return upcoming[0] || null;
}
