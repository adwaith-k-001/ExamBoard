// Detailed data for CST306 Algorithm Analysis & Design — Modules 1–5
// Papers: April 2025, June 2022, June 2023, May 2024

export const AAD_QPS = [
  { id: 'apr2025', label: 'Apr 2025' },
  { id: 'jun2022', label: 'Jun 2022' },
  { id: 'jun2023', label: 'Jun 2023' },
  { id: 'may2024', label: 'May 2024' },
];

export const AAD_MODULE_DATA = {

  /* ════════════════════════════════════════════════
     MODULE 1 — Introduction to Algorithm Analysis
  ════════════════════════════════════════════════ */
  1: {
    topics: [
      { id: 'aad1_3', name: 'Asymptotic Notations (Big-O / Ω / Θ — Definitions + Graphs)' },
      { id: 'aad1_1', name: 'Recursion Tree Method' },
      { id: 'aad1_2', name: 'Best / Worst / Average Case Complexity' },
      { id: 'aad1_4', name: "Master's Theorem" },
      { id: 'aad1_5', name: 'Substitution Method' },
      { id: 'aad1_6', name: 'Time Complexity of Code Segments' },
    ],
    topicWeightage: {
      aad1_3: 31, aad1_1: 30, aad1_2: 26, aad1_4: 23,
      aad1_5: 19, aad1_6: 7,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'aadq1_1',  qpId: 'apr2025', qNum: 'Q1 (Part A)',   text: "Recurrence equation for binary search. Solve using Master's theorem.",                                    topicId: 'aad1_4', marks: 3  },
      { id: 'aadq1_2',  qpId: 'apr2025', qNum: 'Q2 (Part A)',   text: 'Is 2^(n+1) ∈ O(2^n)? Justify.',                                                                          topicId: 'aad1_3', marks: 3  },
      { id: 'aadq1_3',  qpId: 'apr2025', qNum: 'Q11a (Part B)', text: 'Mathematical definition of any three asymptotic notations.',                                              topicId: 'aad1_3', marks: 6  },
      { id: 'aadq1_4',  qpId: 'apr2025', qNum: 'Q11b (Part B)', text: 'Find time complexity using recursion tree method for T(n)=3T(n/4)+cn².',                                 topicId: 'aad1_1', marks: 8  },
      { id: 'aadq1_5',  qpId: 'apr2025', qNum: 'Q12a (Part B)', text: "Solve using Master's theorem: T(n)=3T(n/2)+n², T(n)=T(2n/3)+1.",                                         topicId: 'aad1_4', marks: 8  },
      { id: 'aadq1_6',  qpId: 'apr2025', qNum: 'Q12b (Part B)', text: 'Solve by substitution method: T(n)=2T(⌊n/2⌋)+n.',                                                        topicId: 'aad1_5', marks: 6  },
      // ── Jun 2022 ──
      { id: 'aadq1_7',  qpId: 'jun2022', qNum: 'Q1 (Part A)',   text: 'f(n)=3n³+2n²+3, prove it is O(n³).',                                                                     topicId: 'aad1_3', marks: 3  },
      { id: 'aadq1_8',  qpId: 'jun2022', qNum: 'Q2 (Part A)',   text: "Solve T(n)=3T(n/4)+nlogn using Master theorem.",                                                          topicId: 'aad1_4', marks: 3  },
      { id: 'aadq1_9',  qpId: 'jun2022', qNum: 'Q11a (Part B)', text: 'Illustrate best, average and worst case complexity with insertion sort algorithm.',                       topicId: 'aad1_2', marks: 9  },
      { id: 'aadq1_10', qpId: 'jun2022', qNum: 'Q11b (Part B)', text: 'Substitution method for T(n)=2T(n/2)+n.',                                                                 topicId: 'aad1_5', marks: 5  },
      { id: 'aadq1_11', qpId: 'jun2022', qNum: 'Q12a (Part B)', text: 'Recursion tree for T(n)=T(n/3)+T(2n/3)+cn and T(n)=2T(n/2)+n.',                                          topicId: 'aad1_1', marks: 8  },
      { id: 'aadq1_12', qpId: 'jun2022', qNum: 'Q12b (Part B)', text: 'Define Big Oh, Big Omega, Big Theta. Illustrate graphically.',                                            topicId: 'aad1_3', marks: 6  },
      // ── Jun 2023 ──
      { id: 'aadq1_13', qpId: 'jun2023', qNum: 'Q1 (Part A)',   text: 'Show (n+a)^b = O(n^b) for real constants a, b > 0.',                                                     topicId: 'aad1_3', marks: 3  },
      { id: 'aadq1_14', qpId: 'jun2023', qNum: 'Q2 (Part A)',   text: "Solve T(n)=3T(n/2)+n², T(n)=2T(n/2)+nlogn using Master theorem.",                                        topicId: 'aad1_4', marks: 3  },
      { id: 'aadq1_15', qpId: 'jun2023', qNum: 'Q11a (Part B)', text: 'Define Big Oh, Big Omega, Big Theta notations. Illustrate graphically.',                                  topicId: 'aad1_3', marks: 7  },
      { id: 'aadq1_16', qpId: 'jun2023', qNum: 'Q11b (Part B)', text: 'Find time complexity of given code segments (two nested loop variants).',                                 topicId: 'aad1_6', marks: 7  },
      { id: 'aadq1_17', qpId: 'jun2023', qNum: 'Q12a (Part B)', text: 'Find best, worst and average case time complexity of binary search.',                                     topicId: 'aad1_2', marks: 7  },
      { id: 'aadq1_18', qpId: 'jun2023', qNum: 'Q12b (Part B)', text: 'Recursion tree for T(n)=2T(n/2)+n², T(n)=T(n/3)+T(2n/3)+n.',                                            topicId: 'aad1_1', marks: 7  },
      // ── May 2024 ──
      { id: 'aadq1_19', qpId: 'may2024', qNum: 'Q1 (Part A)',   text: 'Best case and worst case of a search operation in binary search tree.',                                   topicId: 'aad1_2', marks: 3  },
      { id: 'aadq1_20', qpId: 'may2024', qNum: 'Q2 (Part A)',   text: 'Is n² ∈ o(n²)? (Little-o). Justify.',                                                                    topicId: 'aad1_3', marks: 3  },
      { id: 'aadq1_21', qpId: 'may2024', qNum: 'Q11a (Part B)', text: 'Illustrate best, worst and average case of linear search with proper examples.',                          topicId: 'aad1_2', marks: 7  },
      { id: 'aadq1_22', qpId: 'may2024', qNum: 'Q11b (Part B)', text: 'Solve T(n)=2T(n/2)+1 using recursion tree method.',                                                       topicId: 'aad1_1', marks: 7  },
      { id: 'aadq1_23', qpId: 'may2024', qNum: 'Q12a (Part B)', text: 'Solve T(n)=3T(n/4)+cn² using substitution method.',                                                       topicId: 'aad1_5', marks: 8  },
      { id: 'aadq1_24', qpId: 'may2024', qNum: 'Q12b (Part B)', text: "Solve using Master's theorem: T(n)=2T(n/4)+1 and T(n)=2T(n/4)+√n.",                                      topicId: 'aad1_4', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════════════════════
     MODULE 2 — Advanced Data Structures and Graph Algorithms
  ════════════════════════════════════════════════════════ */
  2: {
    topics: [
      { id: 'aad2_2', name: 'DFS Algorithm + Complexity + Edge Classification' },
      { id: 'aad2_1', name: 'AVL Tree Construction (Insert + Rotations)' },
      { id: 'aad2_3', name: 'Disjoint Sets / Union-Find' },
      { id: 'aad2_4', name: 'Strongly Connected Components' },
      { id: 'aad2_5', name: 'BFS Algorithm + Complexity' },
      { id: 'aad2_6', name: 'Topological Sort' },
    ],
    topicWeightage: {
      aad2_2: 37, aad2_1: 36, aad2_3: 20, aad2_4: 15,
      aad2_5: 14, aad2_6: 14,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'aadq2_1',  qpId: 'apr2025', qNum: 'Q3 (Part A)',   text: 'Define strongly connected component of a directed graph. Give example.',                                  topicId: 'aad2_4', marks: 3  },
      { id: 'aadq2_2',  qpId: 'apr2025', qNum: 'Q4 (Part A)',   text: 'Draw linked list representation of UNION(2,6) for disjoint sets.',                                        topicId: 'aad2_3', marks: 3  },
      { id: 'aadq2_3',  qpId: 'apr2025', qNum: 'Q13a (Part B)', text: 'BFS algorithm for graph traversal. Perform time complexity analysis.',                                    topicId: 'aad2_5', marks: 7  },
      { id: 'aadq2_4',  qpId: 'apr2025', qNum: 'Q13b (Part B)', text: 'Perform DFS traversal from node A. Classify edges into different categories.',                            topicId: 'aad2_2', marks: 7  },
      { id: 'aadq2_5',  qpId: 'apr2025', qNum: 'Q14a (Part B)', text: 'Construct AVL tree with 50,20,60,10,8,15,32,46,11,48. Explain 4 cases of rotation.',                     topicId: 'aad2_1', marks: 9  },
      { id: 'aadq2_6',  qpId: 'apr2025', qNum: 'Q14b (Part B)', text: 'Give any topological ordering of the given graph.',                                                       topicId: 'aad2_6', marks: 5  },
      // ── Jun 2022 ──
      { id: 'aadq2_7',  qpId: 'jun2022', qNum: 'Q3 (Part A)',   text: 'Union by rank and path compression heuristics for disjoint sets.',                                        topicId: 'aad2_3', marks: 3  },
      { id: 'aadq2_8',  qpId: 'jun2022', qNum: 'Q4 (Part A)',   text: 'Find topological ordering of given DAG.',                                                                 topicId: 'aad2_6', marks: 3  },
      { id: 'aadq2_9',  qpId: 'jun2022', qNum: 'Q13a (Part B)', text: 'BFS algorithm and complexity analysis.',                                                                  topicId: 'aad2_5', marks: 7  },
      { id: 'aadq2_10', qpId: 'jun2022', qNum: 'Q13b (Part B)', text: 'Construct AVL tree inserting 44,17,32,78,50,88,48,62,54. Write rotation type at each insertion.',         topicId: 'aad2_1', marks: 7  },
      { id: 'aadq2_11', qpId: 'jun2022', qNum: 'Q14a (Part B)', text: 'DFS algorithm and time complexity analysis.',                                                             topicId: 'aad2_2', marks: 7  },
      { id: 'aadq2_12', qpId: 'jun2022', qNum: 'Q14b (Part B)', text: 'DFS traversal from node A on given graph. Classify edges into different categories.',                     topicId: 'aad2_2', marks: 7  },
      // ── Jun 2023 ──
      { id: 'aadq2_13', qpId: 'jun2023', qNum: 'Q3 (Part A)',   text: 'Define AVL tree. Explain rotations performed for insertion.',                                             topicId: 'aad2_1', marks: 3  },
      { id: 'aadq2_14', qpId: 'jun2023', qNum: 'Q4 (Part A)',   text: 'Find topological ordering of given graph.',                                                               topicId: 'aad2_6', marks: 3  },
      { id: 'aadq2_15', qpId: 'jun2023', qNum: 'Q13a (Part B)', text: 'Construct AVL tree inserting 21,26,30,9,4,14,28,18,15.',                                                  topicId: 'aad2_1', marks: 7  },
      { id: 'aadq2_16', qpId: 'jun2023', qNum: 'Q13b (Part B)', text: 'Explain union and find algorithms in disjoint datasets.',                                                 topicId: 'aad2_3', marks: 7  },
      { id: 'aadq2_17', qpId: 'jun2023', qNum: 'Q14a (Part B)', text: 'DFS algorithm for graph traversal. Also derive its time complexity.',                                     topicId: 'aad2_2', marks: 7  },
      { id: 'aadq2_18', qpId: 'jun2023', qNum: 'Q14b (Part B)', text: 'Find strongly connected components of given directed graph.',                                             topicId: 'aad2_4', marks: 7  },
      // ── May 2024 ──
      { id: 'aadq2_19', qpId: 'may2024', qNum: 'Q3 (Part A)',   text: 'Explain any two cases of rotations in AVL-Tree with examples.',                                           topicId: 'aad2_1', marks: 3  },
      { id: 'aadq2_20', qpId: 'may2024', qNum: 'Q4 (Part A)',   text: 'Obtain topological sort order of given graph G=(V,E).',                                                   topicId: 'aad2_6', marks: 3  },
      { id: 'aadq2_21', qpId: 'may2024', qNum: 'Q13a (Part B)', text: 'Create AVL tree by inserting values 1 to 8 in increasing order.',                                         topicId: 'aad2_1', marks: 7  },
      { id: 'aadq2_22', qpId: 'may2024', qNum: 'Q13b (Part B)', text: 'Algorithm for computing connected components using Disjoint Set operations. Apply on graph.',             topicId: 'aad2_3', marks: 7  },
      { id: 'aadq2_23', qpId: 'may2024', qNum: 'Q14a (Part B)', text: 'DFS algorithm for connected graph. Derive time complexity with justification.',                           topicId: 'aad2_2', marks: 9  },
      { id: 'aadq2_24', qpId: 'may2024', qNum: 'Q14b (Part B)', text: 'Strongly connected components of directed graph. Explain with example.',                                 topicId: 'aad2_4', marks: 5  },
    ],
  },

  /* ════════════════════════════════════════════════════
     MODULE 3 — Divide & Conquer and Greedy Strategy
  ════════════════════════════════════════════════════ */
  3: {
    topics: [
      { id: 'aad3_1', name: 'Fractional Knapsack Problem (Numerical)' },
      { id: 'aad3_2', name: "Kruskal's Algorithm (MST)" },
      { id: 'aad3_3', name: "Dijkstra's Algorithm (SSSP)" },
      { id: 'aad3_4', name: 'Merge Sort (2-way D&C + Complexity)' },
      { id: 'aad3_5', name: 'Greedy / D&C Control Abstraction' },
      { id: 'aad3_6', name: "Strassen's Matrix Multiplication" },
    ],
    topicWeightage: {
      aad3_1: 33, aad3_2: 29, aad3_3: 27, aad3_4: 21,
      aad3_5: 17, aad3_6: 9,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'aadq3_1',  qpId: 'apr2025', qNum: 'Q5 (Part A)',   text: "Compare time complexities of Strassen's vs ordinary matrix multiplication.",                             topicId: 'aad3_6', marks: 3  },
      { id: 'aadq3_2',  qpId: 'apr2025', qNum: 'Q6 (Part A)',   text: 'Control abstraction of greedy algorithm design strategy.',                                                topicId: 'aad3_5', marks: 3  },
      { id: 'aadq3_3',  qpId: 'apr2025', qNum: 'Q15a (Part B)', text: "Kruskal's greedy algorithm for MST. Time complexity justification.",                                      topicId: 'aad3_2', marks: 7  },
      { id: 'aadq3_4',  qpId: 'apr2025', qNum: 'Q15b (Part B)', text: 'Fractional Knapsack — n=7, W=15, p=(10,5,15,7,6,18,3), w=(2,3,5,7,1,4,1).',                             topicId: 'aad3_1', marks: 7  },
      { id: 'aadq3_5',  qpId: 'apr2025', qNum: 'Q16a (Part B)', text: "Dijkstra's algorithm for single source shortest path. Time complexity justification.",                    topicId: 'aad3_3', marks: 7  },
      { id: 'aadq3_6',  qpId: 'apr2025', qNum: 'Q16b (Part B)', text: 'Divide and conquer algorithm for 2-way merge sort. Calculate time complexity.',                          topicId: 'aad3_4', marks: 7  },
      // ── Jun 2022 ──
      { id: 'aadq3_7',  qpId: 'jun2022', qNum: 'Q5 (Part A)',   text: 'Control abstraction of Greedy strategy.',                                                                topicId: 'aad3_5', marks: 3  },
      { id: 'aadq3_8',  qpId: 'jun2022', qNum: 'Q6 (Part A)',   text: "Why Strassen's is better? Recurrence and time complexity.",                                               topicId: 'aad3_6', marks: 3  },
      { id: 'aadq3_9',  qpId: 'jun2022', qNum: 'Q15a (Part B)', text: '2-way merge sort for [15,12,14,17,11,13,12,16]. Recurrence and complexity.',                             topicId: 'aad3_4', marks: 7  },
      { id: 'aadq3_10', qpId: 'jun2022', qNum: 'Q15b (Part B)', text: "Dijkstra's algorithm — shortest path from source node A on given graph.",                                topicId: 'aad3_3', marks: 7  },
      { id: 'aadq3_11', qpId: 'jun2022', qNum: 'Q16a (Part B)', text: 'Fractional Knapsack with 3 objects, capacity=20: w=(18,15,10), p=(25,24,15).',                           topicId: 'aad3_1', marks: 7  },
      { id: 'aadq3_12', qpId: 'jun2022', qNum: 'Q16b (Part B)', text: "Kruskal's algorithm for minimum cost spanning tree on given graph.",                                      topicId: 'aad3_2', marks: 7  },
      // ── Jun 2023 ──
      { id: 'aadq3_13', qpId: 'jun2023', qNum: 'Q5 (Part A)',   text: 'Write control abstraction of divide and conquer strategy.',                                               topicId: 'aad3_5', marks: 3  },
      { id: 'aadq3_14', qpId: 'jun2023', qNum: 'Q6 (Part A)',   text: "Compare Strassen's matrix multiplication with ordinary matrix multiplication.",                           topicId: 'aad3_6', marks: 3  },
      { id: 'aadq3_15', qpId: 'jun2023', qNum: 'Q15a (Part B)', text: 'Explain 2-way merge sort algorithm with example. Derive time complexity.',                               topicId: 'aad3_4', marks: 7  },
      { id: 'aadq3_16', qpId: 'jun2023', qNum: 'Q15b (Part B)', text: 'Fractional Knapsack — n=7, sack=15, W={1,3,5,4,1,3,2}, P={10,15,7,8,9,4}.',                             topicId: 'aad3_1', marks: 7  },
      { id: 'aadq3_17', qpId: 'jun2023', qNum: 'Q16a (Part B)', text: "Kruskal's algorithm for minimum cost spanning tree on given graph.",                                      topicId: 'aad3_2', marks: 7  },
      { id: 'aadq3_18', qpId: 'jun2023', qNum: 'Q16b (Part B)', text: "Dijkstra's algorithm — shortest path from vertex A on given graph.",                                      topicId: 'aad3_3', marks: 7  },
      // ── May 2024 ──
      { id: 'aadq3_19', qpId: 'may2024', qNum: 'Q5 (Part A)',   text: 'Control abstraction of divide and conquer algorithm design strategy.',                                    topicId: 'aad3_5', marks: 3  },
      { id: 'aadq3_20', qpId: 'may2024', qNum: 'Q6 (Part A)',   text: 'Fractional knapsack: 3 objects, capacity=20Kg, p=(10,15,20), w=(8,10,20).',                              topicId: 'aad3_1', marks: 3  },
      { id: 'aadq3_21', qpId: 'may2024', qNum: 'Q15a (Part B)', text: "Apply Dijkstra's algorithm to find shortest path from vertex 1 on given graph.",                         topicId: 'aad3_3', marks: 6  },
      { id: 'aadq3_22', qpId: 'may2024', qNum: 'Q15b (Part B)', text: "Write Kruskal's algorithm for MST. Time complexity justification.",                                       topicId: 'aad3_2', marks: 8  },
      { id: 'aadq3_23', qpId: 'may2024', qNum: 'Q16a (Part B)', text: 'Fractional Knapsack — give algorithm, optimal solution, time complexity.',                                topicId: 'aad3_1', marks: 9  },
      { id: 'aadq3_24', qpId: 'may2024', qNum: 'Q16b (Part B)', text: 'Control abstraction of greedy algorithm design strategy.',                                                topicId: 'aad3_5', marks: 5  },
    ],
  },

  /* ════════════════════════════════════════════════════════════
     MODULE 4 — Dynamic Programming, Backtracking and Branch & Bound
  ════════════════════════════════════════════════════════════ */
  4: {
    topics: [
      { id: 'aad4_1', name: 'Matrix Chain Multiplication (DP Table, Numerical)' },
      { id: 'aad4_4', name: 'N-Queens Problem / Backtracking (State Space Tree)' },
      { id: 'aad4_2', name: 'Floyd-Warshall Algorithm (All Pairs Shortest Path)' },
      { id: 'aad4_3', name: 'TSP — Branch and Bound' },
      { id: 'aad4_5', name: 'Dynamic Programming — Elements / Principle of Optimality' },
      { id: 'aad4_6', name: 'Backtracking vs Branch and Bound' },
    ],
    topicWeightage: {
      aad4_1: 29, aad4_4: 29, aad4_2: 26, aad4_3: 26,
      aad4_5: 17, aad4_6: 9,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'aadq4_1',  qpId: 'apr2025', qNum: 'Q7 (Part A)',   text: 'Characteristics of problems solvable using dynamic programming.',                                         topicId: 'aad4_5', marks: 3  },
      { id: 'aadq4_2',  qpId: 'apr2025', qNum: 'Q8 (Part A)',   text: 'Recursive definition for minimum cost of matrix chain parenthesization A_i...A_j.',                      topicId: 'aad4_1', marks: 3  },
      { id: 'aadq4_3',  qpId: 'apr2025', qNum: 'Q17a (Part B)', text: 'Matrix Chain Multiplication for A1<5×6>, A2<6×4>, A3<4×8>, A4<8×10>.',                                   topicId: 'aad4_1', marks: 9  },
      { id: 'aadq4_4',  qpId: 'apr2025', qNum: 'Q17b (Part B)', text: 'Floyd-Warshall algorithm for all pair shortest paths. Analyse complexity.',                               topicId: 'aad4_2', marks: 5  },
      { id: 'aadq4_5',  qpId: 'apr2025', qNum: 'Q18a (Part B)', text: 'Find minimum TSP tour for given graph.',                                                                  topicId: 'aad4_3', marks: 8  },
      { id: 'aadq4_6',  qpId: 'apr2025', qNum: 'Q18b (Part B)', text: 'Control abstraction of backtracking. Draw state space tree for 4-queens.',                               topicId: 'aad4_4', marks: 6  },
      // ── Jun 2022 ──
      { id: 'aadq4_7',  qpId: 'jun2022', qNum: 'Q7 (Part A)',   text: 'Elements of dynamic programming with example.',                                                           topicId: 'aad4_5', marks: 3  },
      { id: 'aadq4_8',  qpId: 'jun2022', qNum: 'Q8 (Part A)',   text: 'Compare backtracking and branch-and-bound techniques.',                                                   topicId: 'aad4_6', marks: 3  },
      { id: 'aadq4_9',  qpId: 'jun2022', qNum: 'Q17a (Part B)', text: 'Floyd-Warshall for all pair shortest path. Solve given instance.',                                        topicId: 'aad4_2', marks: 8  },
      { id: 'aadq4_10', qpId: 'jun2022', qNum: 'Q17b (Part B)', text: 'Backtracking control abstraction. Draw state space tree for 4-queens.',                                  topicId: 'aad4_4', marks: 6  },
      { id: 'aadq4_11', qpId: 'jun2022', qNum: 'Q18a (Part B)', text: 'Dynamic programming — elements by considering matrix chain multiplication.',                              topicId: 'aad4_5', marks: 5  },
      { id: 'aadq4_12', qpId: 'jun2022', qNum: 'Q18b (Part B)', text: 'TSP — branch and bound for given graph, start from vertex A.',                                           topicId: 'aad4_3', marks: 9  },
      // ── Jun 2023 ──
      { id: 'aadq4_13', qpId: 'jun2023', qNum: 'Q7 (Part A)',   text: 'Differentiate backtracking technique from branch and bound technique.',                                   topicId: 'aad4_6', marks: 3  },
      { id: 'aadq4_14', qpId: 'jun2023', qNum: 'Q8 (Part A)',   text: 'What is Principle of Optimality?',                                                                        topicId: 'aad4_5', marks: 3  },
      { id: 'aadq4_15', qpId: 'jun2023', qNum: 'Q17a (Part B)', text: 'Matrix chain parenthesization for matrices 5×4, 4×6, 6×2, 2×7.',                                         topicId: 'aad4_1', marks: 8  },
      { id: 'aadq4_16', qpId: 'jun2023', qNum: 'Q17b (Part B)', text: 'Explain 4-queen problem. Draw state space tree.',                                                         topicId: 'aad4_4', marks: 6  },
      { id: 'aadq4_17', qpId: 'jun2023', qNum: 'Q18a (Part B)', text: 'TSP — branch and bound for given graph.',                                                                 topicId: 'aad4_3', marks: 9  },
      { id: 'aadq4_18', qpId: 'jun2023', qNum: 'Q18b (Part B)', text: 'Write Floyd-Warshall algorithm for all pairs shortest path.',                                             topicId: 'aad4_2', marks: 5  },
      // ── May 2024 ──
      { id: 'aadq4_19', qpId: 'may2024', qNum: 'Q7 (Part A)',   text: 'Main steps in solving a problem using Dynamic Programming strategy.',                                     topicId: 'aad4_5', marks: 3  },
      { id: 'aadq4_20', qpId: 'may2024', qNum: 'Q8 (Part A)',   text: 'List any three differences between Backtracking and Branch and Bound.',                                   topicId: 'aad4_6', marks: 3  },
      { id: 'aadq4_21', qpId: 'may2024', qNum: 'Q17a (Part B)', text: 'Matrix Chain Multiplication for A1<5×4>, A2<4×6>, A3<6×2>, A4<2×7>.',                                    topicId: 'aad4_1', marks: 9  },
      { id: 'aadq4_22', qpId: 'may2024', qNum: 'Q17b (Part B)', text: 'Define control abstraction for Backtracking.',                                                            topicId: 'aad4_4', marks: 5  },
      { id: 'aadq4_23', qpId: 'may2024', qNum: 'Q18a (Part B)', text: 'Floyd-Warshall algorithm on given weighted directed graph. Construct distance matrix.',                   topicId: 'aad4_2', marks: 8  },
      { id: 'aadq4_24', qpId: 'may2024', qNum: 'Q18b (Part B)', text: 'N-queens problem — draw state space diagram for 4-queens by backtracking.',                              topicId: 'aad4_4', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════════════
     MODULE 5 — Introduction to Complexity Theory
  ════════════════════════════════════════════════ */
  5: {
    topics: [
      { id: 'aad5_1', name: 'Randomized Quicksort + Expected Running Time' },
      { id: 'aad5_2', name: 'Clique Problem — NP-Completeness Proof' },
      { id: 'aad5_3', name: 'Las Vegas and Monte Carlo Algorithms' },
      { id: 'aad5_4', name: 'Bin Packing — First Fit Heuristic + Approximation Ratio' },
      { id: 'aad5_5', name: 'P, NP, NP-Hard, NP-Complete Definitions' },
      { id: 'aad5_6', name: 'Vertex Cover — NP-Hard Proof' },
      { id: 'aad5_7', name: 'Approximation Algorithms (PTAS / FPTAS)' },
    ],
    topicWeightage: {
      aad5_1: 32, aad5_2: 31, aad5_3: 26, aad5_4: 25,
      aad5_5: 12, aad5_6: 8,  aad5_7: 5,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'aadq5_1',  qpId: 'apr2025', qNum: 'Q9 (Part A)',   text: 'Define complexity classes P, NP and NP-Hard.',                                                            topicId: 'aad5_5', marks: 3  },
      { id: 'aadq5_2',  qpId: 'apr2025', qNum: 'Q10 (Part A)',  text: 'Compare Las Vegas and Monte Carlo algorithms.',                                                           topicId: 'aad5_3', marks: 3  },
      { id: 'aadq5_3',  qpId: 'apr2025', qNum: 'Q19a (Part B)', text: 'Prove CLIQUE problem is NP-Complete.',                                                                    topicId: 'aad5_2', marks: 9  },
      { id: 'aadq5_4',  qpId: 'apr2025', qNum: 'Q19b (Part B)', text: 'Approximation ratio, polynomial time approximation scheme, fully polynomial TAS.',                        topicId: 'aad5_7', marks: 5  },
      { id: 'aadq5_5',  qpId: 'apr2025', qNum: 'Q20a (Part B)', text: 'Randomized quicksort algorithm and expected running time analysis.',                                      topicId: 'aad5_1', marks: 9  },
      { id: 'aadq5_6',  qpId: 'apr2025', qNum: 'Q20b (Part B)', text: 'Define Bin Packing problem. Explain First Fit strategy for solving it.',                                  topicId: 'aad5_4', marks: 5  },
      // ── Jun 2022 ──
      { id: 'aadq5_7',  qpId: 'jun2022', qNum: 'Q9 (Part A)',   text: 'Define P, NP and NP-Complete domains.',                                                                   topicId: 'aad5_5', marks: 3  },
      { id: 'aadq5_8',  qpId: 'jun2022', qNum: 'Q10 (Part A)',  text: 'Compare Las Vegas and Monte Carlo algorithms.',                                                           topicId: 'aad5_3', marks: 3  },
      { id: 'aadq5_9',  qpId: 'jun2022', qNum: 'Q19a (Part B)', text: 'Prove CLIQUE problem is NP-Complete.',                                                                    topicId: 'aad5_2', marks: 7  },
      { id: 'aadq5_10', qpId: 'jun2022', qNum: 'Q19b (Part B)', text: 'Randomized quicksort algorithm + expected running time analysis.',                                        topicId: 'aad5_1', marks: 7  },
      { id: 'aadq5_11', qpId: 'jun2022', qNum: 'Q20a (Part B)', text: 'Approximation algorithm for bin packing using First Fit heuristic + approximation ratio.',               topicId: 'aad5_4', marks: 7  },
      { id: 'aadq5_12', qpId: 'jun2022', qNum: 'Q20b (Part B)', text: 'Las Vegas and Monte Carlo algorithms with suitable examples.',                                            topicId: 'aad5_3', marks: 7  },
      // ── Jun 2023 ──
      { id: 'aadq5_13', qpId: 'jun2023', qNum: 'Q9 (Part A)',   text: 'Differentiate P and NP problems. Give one example each.',                                                 topicId: 'aad5_5', marks: 3  },
      { id: 'aadq5_14', qpId: 'jun2023', qNum: 'Q10 (Part A)',  text: 'Define graph coloring problem.',                                                                          topicId: 'aad5_5', marks: 3  },
      { id: 'aadq5_15', qpId: 'jun2023', qNum: 'Q19a (Part B)', text: 'Explain first fit-decreasing strategy of bin packing algorithm.',                                         topicId: 'aad5_4', marks: 7  },
      { id: 'aadq5_16', qpId: 'jun2023', qNum: 'Q19b (Part B)', text: 'Prove Clique Decision problem is NP-complete.',                                                           topicId: 'aad5_2', marks: 7  },
      { id: 'aadq5_17', qpId: 'jun2023', qNum: 'Q20a (Part B)', text: 'Differentiate Las Vegas and Monte Carlo algorithms.',                                                     topicId: 'aad5_3', marks: 7  },
      { id: 'aadq5_18', qpId: 'jun2023', qNum: 'Q20b (Part B)', text: 'Explain randomized quicksort with suitable examples.',                                                    topicId: 'aad5_1', marks: 7  },
      // ── May 2024 ──
      { id: 'aadq5_19', qpId: 'may2024', qNum: 'Q9 (Part A)',   text: 'Define optimization and decision versions of CLIQUE problem.',                                            topicId: 'aad5_2', marks: 3  },
      { id: 'aadq5_20', qpId: 'may2024', qNum: 'Q10 (Part A)',  text: 'Compare Las Vegas Algorithm and Monte Carlo algorithms.',                                                  topicId: 'aad5_3', marks: 3  },
      { id: 'aadq5_21', qpId: 'may2024', qNum: 'Q19a (Part B)', text: 'Prove decision version of Clique problem belongs to complexity class NP.',                                topicId: 'aad5_2', marks: 5  },
      { id: 'aadq5_22', qpId: 'may2024', qNum: 'Q19b (Part B)', text: 'Randomized quicksort — prove expected O(nlog₂n) comparisons.',                                            topicId: 'aad5_1', marks: 9  },
      { id: 'aadq5_23', qpId: 'may2024', qNum: 'Q20a (Part B)', text: 'Vertex Cover — prove decision version is NP-Hard.',                                                       topicId: 'aad5_6', marks: 8  },
      { id: 'aadq5_24', qpId: 'may2024', qNum: 'Q20b (Part B)', text: 'Bin Packing problem — First Fit heuristic approximation + approximation ratio.',                         topicId: 'aad5_4', marks: 6  },
    ],
  },
};
