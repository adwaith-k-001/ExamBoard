# CST306 — Algorithm Analysis and Design PYQ Analysis
**Papers analyzed:** 4 (June 2022, June 2023, May 2024, April 2025)

> All 4 papers follow the 2019 scheme: Part A (10 × 3 marks) + Part B (5 modules × 14 marks, answer 1 of 2).

---

## All Questions Extracted

### QP-1 (April 2025)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Recurrence equation for binary search. Solve using Master's theorem | Master's Theorem | 3 | 1 |
| 2 | A | Is 2^(n+1) ∈ O(2^n)? Justify | Asymptotic Notations | 3 | 1 |
| 3 | A | Define strongly connected component of a directed graph. Give example | Strongly Connected Components | 3 | 2 |
| 4 | A | Draw linked list representation of UNION(2,6) for disjoint sets | Disjoint Sets / Union-Find | 3 | 2 |
| 5 | A | Compare time complexities of Strassen's vs ordinary matrix multiplication | Strassen's Algorithm | 3 | 3 |
| 6 | A | Control abstraction of greedy algorithm design strategy | Greedy Strategy | 3 | 3 |
| 7 | A | Characteristics of problems solvable using dynamic programming | Dynamic Programming | 3 | 4 |
| 8 | A | Recursive definition for minimum cost of matrix chain parenthesization A_i...A_j | Matrix Chain Multiplication | 3 | 4 |
| 9 | A | Define complexity classes P, NP and NP-Hard | P / NP / NP-Hard | 3 | 5 |
| 10 | A | Compare Las Vegas and Monte Carlo algorithms | Randomized Algorithms | 3 | 5 |
| 11a | B | Mathematical definition of any three asymptotic notations | Asymptotic Notations | 6 | 1 |
| 11b | B | Find time complexity using recursion tree method for T(n)=3T(n/4)+cn² | Recursion Tree Method | 8 | 1 |
| 12a | B | Solve using Master's theorem: T(n)=3T(n/2)+n², T(n)=T(2n/3)+1 | Master's Theorem | 8 | 1 |
| 12b | B | Solve by substitution method: T(n)=2T(⌊n/2⌋)+n | Substitution Method | 6 | 1 |
| 13a | B | BFS algorithm for graph traversal. Perform time complexity analysis | BFS Algorithm | 7 | 2 |
| 13b | B | Perform DFS traversal from node A. Classify edges into different categories | DFS Algorithm | 7 | 2 |
| 14a | B | Construct AVL tree with 50,20,60,10,8,15,32,46,11,48. Explain 4 cases of rotation | AVL Tree Operations | 9 | 2 |
| 14b | B | Give any topological ordering of the given graph | Topological Sort | 5 | 2 |
| 15a | B | Kruskal's greedy algorithm for MST. Time complexity justification | Kruskal's Algorithm | 7 | 3 |
| 15b | B | Fractional Knapsack — n=7, W=15, p=(10,5,15,7,6,18,3), w=(2,3,5,7,1,4,1) | Fractional Knapsack | 7 | 3 |
| 16a | B | Dijkstra's algorithm for single source shortest path. Time complexity justification | Dijkstra's Algorithm | 7 | 3 |
| 16b | B | Divide and conquer algorithm for 2-way merge sort. Calculate time complexity | Merge Sort | 7 | 3 |
| 17a | B | Matrix Chain Multiplication for A1<5×6>, A2<6×4>, A3<4×8>, A4<8×10> | Matrix Chain Multiplication | 9 | 4 |
| 17b | B | Floyd-Warshall algorithm for all pair shortest paths. Analyse complexity | Floyd-Warshall Algorithm | 5 | 4 |
| 18a | B | Find minimum TSP tour for given graph | TSP — Branch and Bound | 8 | 4 |
| 18b | B | Control abstraction of backtracking. Draw state space tree for 4-queens | N-Queens / Backtracking | 6 | 4 |
| 19a | B | Prove CLIQUE problem is NP-Complete | Clique NP-Completeness | 9 | 5 |
| 19b | B | Approximation ratio, polynomial time approximation scheme, fully polynomial TAS | Approximation Algorithms | 5 | 5 |
| 20a | B | Randomized quicksort algorithm and expected running time analysis | Randomized Quicksort | 9 | 5 |
| 20b | B | Define Bin Packing problem. Explain First Fit strategy for solving it | Bin Packing Algorithm | 5 | 5 |

---

### QP-2 (June 2022)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | f(n)=3n³+2n²+3, prove it is O(n³) | Asymptotic Notations | 3 | 1 |
| 2 | A | Solve T(n)=3T(n/4)+nlogn using Master theorem | Master's Theorem | 3 | 1 |
| 3 | A | Union by rank and path compression heuristics for disjoint sets | Disjoint Sets / Union-Find | 3 | 2 |
| 4 | A | Find topological ordering of given DAG | Topological Sort | 3 | 2 |
| 5 | A | Control abstraction of Greedy strategy | Greedy Strategy | 3 | 3 |
| 6 | A | Why Strassen's is better? Recurrence and time complexity | Strassen's Algorithm | 3 | 3 |
| 7 | A | Elements of dynamic programming with example | Dynamic Programming | 3 | 4 |
| 8 | A | Compare backtracking and branch-and-bound techniques | Backtracking vs B&B | 3 | 4 |
| 9 | A | Define P, NP and NP-Complete domains | P / NP / NP-Hard | 3 | 5 |
| 10 | A | Compare Las Vegas and Monte Carlo algorithms | Randomized Algorithms | 3 | 5 |
| 11a | B | Illustrate best, average and worst case complexity with insertion sort algorithm | Best/Worst/Average Case | 9 | 1 |
| 11b | B | Substitution method for T(n)=2T(n/2)+n | Substitution Method | 5 | 1 |
| 12a | B | Recursion tree for T(n)=T(n/3)+T(2n/3)+cn and T(n)=2T(n/2)+n | Recursion Tree Method | 8 | 1 |
| 12b | B | Define Big Oh, Big Omega, Big Theta. Illustrate graphically | Asymptotic Notations | 6 | 1 |
| 13a | B | BFS algorithm and complexity analysis | BFS Algorithm | 7 | 2 |
| 13b | B | Construct AVL tree inserting 44,17,32,78,50,88,48,62,54. Write rotation type at each insertion | AVL Tree Operations | 7 | 2 |
| 14a | B | DFS algorithm and time complexity analysis | DFS Algorithm | 7 | 2 |
| 14b | B | DFS traversal from node A on given graph. Classify edges into different categories | DFS Algorithm | 7 | 2 |
| 15a | B | 2-way merge sort for [15,12,14,17,11,13,12,16]. Recurrence and complexity | Merge Sort | 7 | 3 |
| 15b | B | Dijkstra's algorithm — shortest path from source node A on given graph | Dijkstra's Algorithm | 7 | 3 |
| 16a | B | Fractional Knapsack with 3 objects, capacity=20: w=(18,15,10), p=(25,24,15) | Fractional Knapsack | 7 | 3 |
| 16b | B | Kruskal's algorithm for minimum cost spanning tree on given graph | Kruskal's Algorithm | 7 | 3 |
| 17a | B | Floyd-Warshall for all pair shortest path. Solve given instance | Floyd-Warshall Algorithm | 8 | 4 |
| 17b | B | Backtracking control abstraction. Draw state space tree for 4-queens | N-Queens / Backtracking | 6 | 4 |
| 18a | B | Dynamic programming — elements by considering matrix chain multiplication | Dynamic Programming | 5 | 4 |
| 18b | B | TSP — branch and bound for given graph, start from vertex A | TSP — Branch and Bound | 9 | 4 |
| 19a | B | Prove CLIQUE problem is NP-Complete | Clique NP-Completeness | 7 | 5 |
| 19b | B | Randomized quicksort algorithm + expected running time analysis | Randomized Quicksort | 7 | 5 |
| 20a | B | Approximation algorithm for bin packing using First Fit heuristic + approximation ratio | Bin Packing Algorithm | 7 | 5 |
| 20b | B | Las Vegas and Monte Carlo algorithms with suitable examples | Randomized Algorithms | 7 | 5 |

---

### QP-3 (June 2023)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Show (n+a)^b = O(n^b) for real constants a, b > 0 | Asymptotic Notations | 3 | 1 |
| 2 | A | Solve T(n)=3T(n/2)+n², T(n)=2T(n/2)+nlogn using Master theorem | Master's Theorem | 3 | 1 |
| 3 | A | Define AVL tree. Explain rotations performed for insertion | AVL Tree Operations | 3 | 2 |
| 4 | A | Find topological ordering of given graph | Topological Sort | 3 | 2 |
| 5 | A | Write control abstraction of divide and conquer strategy | D&C Strategy | 3 | 3 |
| 6 | A | Compare Strassen's matrix multiplication with ordinary matrix multiplication | Strassen's Algorithm | 3 | 3 |
| 7 | A | Differentiate backtracking technique from branch and bound technique | Backtracking vs B&B | 3 | 4 |
| 8 | A | What is Principle of Optimality? | Dynamic Programming | 3 | 4 |
| 9 | A | Differentiate P and NP problems. Give one example each | P / NP / NP-Hard | 3 | 5 |
| 10 | A | Define graph coloring problem | Graph Coloring | 3 | 5 |
| 11a | B | Define Big Oh, Big Omega, Big Theta notations. Illustrate graphically | Asymptotic Notations | 7 | 1 |
| 11b | B | Find time complexity of given code segments (two nested loop variants) | Complexity Calculation | 7 | 1 |
| 12a | B | Find best, worst and average case time complexity of binary search | Best/Worst/Average Case | 7 | 1 |
| 12b | B | Recursion tree for T(n)=2T(n/2)+n², T(n)=T(n/3)+T(2n/3)+n | Recursion Tree Method | 7 | 1 |
| 13a | B | Construct AVL tree inserting 21,26,30,9,4,14,28,18,15 | AVL Tree Operations | 7 | 2 |
| 13b | B | Explain union and find algorithms in disjoint datasets | Disjoint Sets / Union-Find | 7 | 2 |
| 14a | B | DFS algorithm for graph traversal. Also derive its time complexity | DFS Algorithm | 7 | 2 |
| 14b | B | Find strongly connected components of given directed graph | Strongly Connected Components | 7 | 2 |
| 15a | B | Explain 2-way merge sort algorithm with example. Derive time complexity | Merge Sort | 7 | 3 |
| 15b | B | Fractional Knapsack — n=7, sack=15, W={1,3,5,4,1,3,2}, P={10,15,7,8,9,4} | Fractional Knapsack | 7 | 3 |
| 16a | B | Kruskal's algorithm for minimum cost spanning tree on given graph | Kruskal's Algorithm | 7 | 3 |
| 16b | B | Dijkstra's algorithm — shortest path from vertex A on given graph | Dijkstra's Algorithm | 7 | 3 |
| 17a | B | Matrix chain parenthesization for matrices 5×4, 4×6, 6×2, 2×7 | Matrix Chain Multiplication | 8 | 4 |
| 17b | B | Explain 4-queen problem. Draw state space tree | N-Queens / Backtracking | 6 | 4 |
| 18a | B | TSP — branch and bound for given graph | TSP — Branch and Bound | 9 | 4 |
| 18b | B | Write Floyd-Warshall algorithm for all pairs shortest path | Floyd-Warshall Algorithm | 5 | 4 |
| 19a | B | Explain first fit-decreasing strategy of bin packing algorithm | Bin Packing Algorithm | 7 | 5 |
| 19b | B | Prove Clique Decision problem is NP-complete | Clique NP-Completeness | 7 | 5 |
| 20a | B | Differentiate Las Vegas and Monte Carlo algorithms | Randomized Algorithms | 7 | 5 |
| 20b | B | Explain randomized quicksort with suitable examples | Randomized Quicksort | 7 | 5 |

---

### QP-4 (May 2024)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Best case and worst case of a search operation in binary search tree | Best/Worst/Average Case | 3 | 1 |
| 2 | A | Is n² ∈ o(n²)? Little-o. Justify your answer | Asymptotic Notations | 3 | 1 |
| 3 | A | Explain any two cases of rotations in AVL-Tree with examples | AVL Tree Operations | 3 | 2 |
| 4 | A | Obtain topological sort order of given graph G=(V,E) | Topological Sort | 3 | 2 |
| 5 | A | Control abstraction of divide and conquer algorithm design strategy | D&C Strategy | 3 | 3 |
| 6 | A | Fractional knapsack: 3 objects, capacity=20Kg, p=(10,15,20), w=(8,10,20) | Fractional Knapsack | 3 | 3 |
| 7 | A | Main steps in solving a problem using Dynamic Programming strategy | Dynamic Programming | 3 | 4 |
| 8 | A | List any three differences between Backtracking and Branch and Bound | Backtracking vs B&B | 3 | 4 |
| 9 | A | Define optimization and decision versions of CLIQUE problem | P / NP / NP-Hard | 3 | 5 |
| 10 | A | Compare Las Vegas Algorithm and Monte Carlo algorithms | Randomized Algorithms | 3 | 5 |
| 11a | B | Illustrate best, worst and average case of linear search with proper examples | Best/Worst/Average Case | 7 | 1 |
| 11b | B | Solve T(n)=2T(n/2)+1 using recursion tree method | Recursion Tree Method | 7 | 1 |
| 12a | B | Solve T(n)=3T(n/4)+cn² using substitution method | Substitution Method | 8 | 1 |
| 12b | B | Solve using Master's theorem: T(n)=2T(n/4)+1 and T(n)=2T(n/4)+√n | Master's Theorem | 6 | 1 |
| 13a | B | Create AVL tree by inserting values 1 to 8 in increasing order | AVL Tree Operations | 7 | 2 |
| 13b | B | Algorithm for computing connected components using Disjoint Set operations. Apply on graph | Disjoint Sets / Union-Find | 7 | 2 |
| 14a | B | DFS algorithm for connected graph. Derive time complexity with justification | DFS Algorithm | 9 | 2 |
| 14b | B | Strongly connected components of directed graph. Explain with example | Strongly Connected Components | 5 | 2 |
| 15a | B | Apply Dijkstra's algorithm to find shortest path from vertex 1 on given graph | Dijkstra's Algorithm | 6 | 3 |
| 15b | B | Write Kruskal's algorithm for MST. Time complexity justification | Kruskal's Algorithm | 8 | 3 |
| 16a | B | Fractional Knapsack — give algorithm, optimal solution, time complexity | Fractional Knapsack | 9 | 3 |
| 16b | B | Control abstraction of greedy algorithm design strategy | Greedy Strategy | 5 | 3 |
| 17a | B | Matrix Chain Multiplication for A1<5×4>, A2<4×6>, A3<6×2>, A4<2×7> | Matrix Chain Multiplication | 9 | 4 |
| 17b | B | Define control abstraction for Backtracking | N-Queens / Backtracking | 5 | 4 |
| 18a | B | Floyd-Warshall algorithm on given weighted directed graph. Construct distance matrix | Floyd-Warshall Algorithm | 8 | 4 |
| 18b | B | N-queens problem — draw state space diagram for 4-queens by backtracking | N-Queens / Backtracking | 6 | 4 |
| 19a | B | Prove decision version of Clique problem belongs to complexity class NP | Clique NP-Completeness | 5 | 5 |
| 19b | B | Randomized quicksort — prove expected O(nlog₂n) comparisons | Randomized Quicksort | 9 | 5 |
| 20a | B | Vertex Cover — prove decision version is NP-Hard | Vertex Cover NP-Hard | 8 | 5 |
| 20b | B | Bin Packing problem — First Fit heuristic approximation + approximation ratio | Bin Packing Algorithm | 6 | 5 |

---

## Topic Frequency Analysis

### MODULE 1 — Introduction to Algorithm Analysis

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-----------:|:--------:|
| Asymptotic Notations (Big-O/Ω/Θ definitions, proofs, graphs) | 3 Part A | **4/4 papers** Part B | 7 | 6+6+7+3 = 22+ | 🔴 CRITICAL |
| Recursion Tree Method | 1 Part A | **4/4 papers** Part B | 5 | 8+8+7+7 = 30 | 🔴 CRITICAL |
| Master's Theorem (apply + solve) | 3 Part A | 3/4 papers Part B | 6 | 3+3+8+6 = 20+ | 🔴 CRITICAL |
| Substitution Method | 0 | 3/4 papers Part B | 3 | 5+8+6 = 19 | 🔴 HIGH |
| Best / Worst / Average Case Complexity | 1 Part A | 3/4 papers Part B | 4 | 9+7+7 = 23 | 🔴 HIGH |
| Time Complexity Calculation (code segments) | 0 | 1/4 papers Part B | 1 | 7 | 🟢 LOW |

### MODULE 2 — Advanced Data Structures and Graph Algorithms

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-----------:|:--------:|
| AVL Tree Construction (insert + rotations, write rotation type) | 2 Part A | **4/4 papers** Part B | 6 | 7+7+7+9 = 30 | 🔴 CRITICAL |
| DFS Algorithm + Complexity + Edge Classification | 0 | **4/4 papers** Part B | 4 | 7+7+7+9 = 30 | 🔴 CRITICAL |
| BFS Algorithm + Complexity | 0 | 2/4 papers Part B | 2 | 7+7 = 14 | 🟠 HIGH |
| Topological Sort | 4 Part A | 0 Part B | 4 | 12 (Part A) | 🟠 HIGH |
| Disjoint Sets / Union-Find | 2 Part A | 2/4 papers Part B | 4 | 3+3+7+7 = 20 | 🟠 HIGH |
| Strongly Connected Components | 2 Part A | 2/4 papers Part B | 4 | 3+7+5 = 15 | 🟠 HIGH |

### MODULE 3 — Divide & Conquer and Greedy Strategy

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-----------:|:--------:|
| Kruskal's Algorithm (MST) | 0 | **4/4 papers** Part B | 4 | 7+7+7+8 = 29 | 🔴 CRITICAL |
| Dijkstra's Algorithm (SSSP) | 0 | **4/4 papers** Part B | 4 | 7+7+7+6 = 27 | 🔴 CRITICAL |
| Fractional Knapsack Problem (numerical) | 1 Part A | **4/4 papers** Part B | 5 | 3+7+7+7+9 = 33 | 🔴 CRITICAL |
| Merge Sort (2-way D&C + complexity) | 0 | 3/4 papers Part B | 3 | 7+7+7 = 21 | 🔴 HIGH |
| Control Abstraction of Greedy / D&C | 3 Part A | 2 Part B | 5 | 9+5 = 14 | 🟠 HIGH |
| Strassen's Matrix Multiplication | 3 Part A | 0 Part B | 3 | 9 (Part A) | 🟡 MEDIUM |

### MODULE 4 — Dynamic Programming, Backtracking and Branch & Bound

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-----------:|:--------:|
| N-Queens Problem / Backtracking (state space tree) | 0 | **4/4 papers** Part B | 4 | 6+6+6+6 = 24 | 🔴 CRITICAL |
| Floyd-Warshall Algorithm (all pairs shortest path) | 0 | **4/4 papers** Part B | 4 | 8+5+5+8 = 26 | 🔴 CRITICAL |
| Matrix Chain Multiplication (full DP table, numerical) | 1 Part A | 3/4 papers Part B | 4 | 3+8+9+9 = 29 | 🔴 CRITICAL |
| TSP — Branch and Bound | 0 | 3/4 papers Part B | 3 | 9+9+8 = 26 | 🔴 HIGH |
| Dynamic Programming — Elements / Principle of Optimality | 3 Part A | 1/4 papers Part B | 4 | 9+5 = 14 | 🟠 HIGH |
| Backtracking vs Branch and Bound | 3 Part A | 0 Part B | 3 | 9 (Part A) | 🟡 MEDIUM |

### MODULE 5 — Introduction to Complexity Theory

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-----------:|:--------:|
| P, NP, NP-Hard, NP-Complete Definitions | 4 Part A | 0 Part B | 4 | 12 (Part A) | 🔴 CRITICAL |
| Clique Problem — NP-Completeness Proof | 0 | **4/4 papers** Part B | 4 | 7+7+5+9 = 28 | 🔴 CRITICAL |
| Randomized Quicksort + Expected Running Time | 0 | **4/4 papers** Part B | 4 | 7+7+9+9 = 32 | 🔴 CRITICAL |
| Bin Packing — First Fit Heuristic + Approximation Ratio | 0 | **4/4 papers** Part B | 4 | 7+7+6+5 = 25 | 🔴 CRITICAL |
| Las Vegas and Monte Carlo Algorithms | 4 Part A | 2/4 papers Part B | 6 | 12+7+7 = 26 | 🔴 CRITICAL |
| Vertex Cover — NP-Hard Proof | 0 | 1/4 papers Part B | 1 | 8 | 🟡 MEDIUM |
| Graph Coloring | 1 Part A | 0 Part B | 1 | 3 | 🟢 LOW |
| Approximation Algorithms (general PTAS/FPTAS) | 0 | 1/4 papers Part B | 1 | 5 | 🟢 LOW |

---

## Overall Priority Ranking (All Modules)

| Rank | Topic | Module | Papers | Notes |
|------|-------|--------|--------|-------|
| 1 | **Clique Problem NP-Completeness Proof** | 5 | 4/4 | Always Part B 7–9 marks. Full proof required every year. |
| 2 | **Randomized Quicksort + Expected O(nlogn)** | 5 | 4/4 | Part B 7–9 marks. Full algorithm + expected time analysis. |
| 3 | **Bin Packing — First Fit Heuristic** | 5 | 4/4 | Part B 5–7 marks. Algorithm + approximation ratio every year. |
| 4 | **Kruskal's Algorithm (MST)** | 3 | 4/4 | Part B 7–8 marks. Always numerical — apply on given weighted graph. |
| 5 | **Dijkstra's Algorithm (SSSP)** | 3 | 4/4 | Part B 6–7 marks. Always numerical — apply on given graph. |
| 6 | **N-Queens / Backtracking (state space tree)** | 4 | 4/4 | Part B 6 marks every single year. Draw full state space tree. |
| 7 | **Floyd-Warshall Algorithm** | 4 | 4/4 | Part B 5–8 marks. Apply on given graph, show intermediate matrices. |
| 8 | **AVL Tree Construction + Rotations** | 2 | 4/4 | Part B 7–9 marks. Insert given sequence + state rotation type at each step. |
| 9 | **DFS Algorithm + Complexity + Edge Classification** | 2 | 4/4 | Part B 7–9 marks. Algorithm + apply on graph + classify tree/back/forward/cross edges. |
| 10 | **Fractional Knapsack (numerical)** | 3 | 4/4 | Part A + Part B both. Numerical: compute profit/weight ratio, greedy selection. |
| 11 | **Recursion Tree Method** | 1 | 4/4 | Part B 7–8 marks. Solve given T(n) — draw tree and sum cost per level. |
| 12 | **Asymptotic Notations (formal definitions + graphs)** | 1 | 4/4 | Part A (3m) + Part B (6–7m). Formal math definitions + graphical illustration. |
| 13 | **Matrix Chain Multiplication (numerical DP)** | 4 | 3–4/4 | Part B 8–9 marks. Fill full DP table for given matrix chain dimensions. |
| 14 | **TSP — Branch and Bound** | 4 | 3/4 | Part B 8–9 marks. Apply B&B with state space tree on given graph. |
| 15 | **Master's Theorem** | 1 | 3–4/4 | Part A + Part B. Apply all three cases — know when not applicable. |
| 16 | **P, NP, NP-Hard Definitions** | 5 | 4/4 | Always Part A (3m). Concise definitions + class relationships. |
| 17 | **Las Vegas and Monte Carlo Algorithms** | 5 | 4/4 | Part A (3m) + Part B (7m). Comparison + examples for both. |
| 18 | **Merge Sort (2-way D&C + complexity)** | 3 | 3/4 | Part B 7 marks. Algorithm + trace on given array + derive T(n) = 2T(n/2) + n. |
| 19 | **Best/Worst/Average Case Complexity** | 1 | 3/4 | Part B 7–9 marks. Apply to specific algorithm (insertion sort / linear search / binary search). |
| 20 | **Topological Sort** | 2 | 4/4 | Always Part A (3m). Apply on given DAG — never a standalone Part B question. |

---

## Key Observations

1. **Module 5 is the most predictable module** — Clique NP-completeness, Randomized Quicksort, and Bin Packing appear in ALL 4 papers with 7–9 marks each. Master these three and you are guaranteed ~20 marks from Module 5.
2. **Module 3 is entirely numerical** — Kruskal's and Dijkstra's always come with a given graph to solve step-by-step. No theory-only questions in Part B. Practice applying both algorithms.
3. **Module 4 has three "always asked" topics** — Floyd-Warshall, N-Queens (backtracking), and Matrix Chain Multiplication all appeared in 4/4 papers. Know all three cold.
4. **Module 2 is split between AVL trees and Graph algorithms** — AVL insertion always comes with a specific sequence. DFS always includes edge classification (tree, back, forward, cross).
5. **Module 1 tests all three recurrence methods** — Recursion Tree, Master's Theorem, and Substitution Method are all tested across Part A and Part B. Know when Master's Theorem does NOT apply.
6. **Topological Sort only appears in Part A** — Has never been asked in Part B across all 4 papers. Treat as a quick 3-marker preparation, not a heavy topic.
7. **BFS appears less than DFS** — DFS appears in all 4 Part B papers; BFS only in 2. But BFS still comes in Part B with full analysis, so know both algorithms.
8. **TSP and Matrix Chain share Module 4** — The OR structure means if TSP is in Q17/18, Matrix Chain is in the other. In 3/4 papers both appear — know both.
9. **Las Vegas and Monte Carlo always Part A** — Appeared as a Part A 3-mark question in all 4 papers. A concise comparison table is enough for Part A.

---

## ⚠️ Numerical Practice Warning
Unlike theoretical subjects, AAD requires numerical computation in most Part B questions:
- **Kruskal's / Dijkstra's**: Always a specific graph — practice step-by-step execution with tables
- **Fractional Knapsack**: Compute profit/weight ratios, greedy selection order
- **Matrix Chain Multiplication**: Fill the entire m[i][j] DP table for given dimensions
- **Floyd-Warshall**: Apply matrix iterations D⁰ → D¹ → D² → ... → Dⁿ
- **Randomized Quicksort**: Know the expected running time proof using indicator random variables
- **N-Queens**: Draw complete state space tree with pruning for 4-queens
