# CST302 — Compiler Design PYQ Analysis
**Papers analyzed:** 5 (July 2021 CS304, June 2022, June 2023, May 2024, April 2025)

> **Note:** July 2021 paper (CS304) uses an older multi-part format ("answer any 2"). The 4 CST302 papers (2022–2025) follow the 2019 scheme: Part A (10 × 3 marks) + Part B (5 modules × 14 marks). Frequency counts prioritize the 4 CST302 papers.

---

## All Questions Extracted

### QP-1 (April 2025)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Define token and lexeme with examples | Token/Lexeme/Pattern | 3 | 1 |
| 2 | A | Different error recovery strategies in lexical phase | Error Recovery (Lexical) | 3 | 1 |
| 3 | A | Derive string aab using leftmost and rightmost derivation for S→AB, A→aaA\|ε, B→Bb\|ε | Derivations / Parse Tree | 3 | 2 |
| 4 | A | What is ambiguous grammar? Give example | Ambiguity | 3 | 2 |
| 5 | A | Write algorithm to compute FIRST(X) and FOLLOW(X) | FIRST and FOLLOW | 3 | 2 |
| 6 | A | What is an operator grammar? Give example | Operator Grammar | 3 | 3 |
| 7 | A | Write SDT to evaluate arithmetic expressions for E→E+T\|T, T→F, F→num | SDT / SDD | 3 | 4 |
| 8 | A | Translate a[i]=b*c-b*d into quadruple | Three-Address Code / Quadruples | 3 | 4 |
| 9 | A | Three characteristics of peephole optimization | Peephole Optimization | 3 | 5 |
| 10 | A | Source language issues in code generation phase | Issues in Code Generator | 3 | 5 |
| 11a | B | Explain different phases of compiler with neat diagram. Illustrate output for p:=i+r*10 | Phases of Compiler | 10 | 1 |
| 11b | B | List any four compiler writing tools | Compiler Writing Tools | 4 | 1 |
| 12a | B | Explain front-end and back-end model of compiler | Front-end / Back-end Model | 5 | 1 |
| 12b | B | Recognizing tokens using transition diagrams for relational operators, identifiers, digits | Transition Diagrams / Token Recognition | 9 | 1 |
| 13a | B | Define Ambiguity. Show S→aSbS\|bSaS\|ε is ambiguous | Ambiguity | 4 | 2 |
| 13b | B | Explain LL(1) parsing table construction. Construct LL(1) table for S→(S)S\|ε | LL(1) / Predictive Parsing Table | 10 | 2 |
| 14a | B | S→(L)\|a, L→L,S\|S: remove left recursion, construct predictive table, justify LL(1) | Predictive Parsing (LL1) | 8 | 2 |
| 14b | B | Recursive descent parsing — definition, drawbacks, procedure for nonterminal | Recursive Descent Parsing | 6 | 2 |
| 15a | B | Construct LR(0) items for S→L=R, S→R, L→*R\|id, R→L | LR(0) / Canonical Collection | 7 | 3 |
| 15b | B | Explain conflicts in LR(0) parsing with example | LR Parsing Conflicts | 7 | 3 |
| 16a | B | Check if S→XX, X→aX\|b is CLR or not | CLR / Canonical LR Table | 7 | 3 |
| 16b | B | Construct SLR parsing table for E→E+n\|n | SLR Parsing Table | 7 | 3 |
| 17a | B | Differentiate synthesized and inherited attributes with example | Synthesized vs Inherited Attributes | 5 | 4 |
| 17b | B | SDD for desk calculator, annotated parse tree, bottom-up evaluation for (4*5)–2 | SDD — Desk Calculator | 9 | 4 |
| 18a | B | Construct 3-address code and DAG for s=(a-b)*(b+c)+(a-b) | Three-Address Code / DAG | 6 | 4 |
| 18b | B | Explain static allocation and heap allocation strategies | Storage Allocation Strategies | 8 | 4 |
| 19a | B | What are the needs for optimization phase in compiler? | Optimization — Purpose | 4 | 5 |
| 19b | B | Explain about the principal sources of optimization | Principal Sources of Optimization | 10 | 5 |
| 20a | B | Explain about issues in design of a code generator | Issues in Code Generator | 8 | 5 |
| 20b | B | Explain about register and address descriptors | Register & Address Descriptors | 6 | 5 |

---

### QP-2 (June 2022)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Find lexemes in sum=a*(b-10); define tokens and patterns | Token/Lexeme/Pattern | 3 | 1 |
| 2 | A | Importance of sentinels in input buffering in lexical analysis | Input Buffering / Sentinels | 3 | 1 |
| 3 | A | Steps to remove left recursion with example | Left Recursion Elimination | 3 | 2 |
| 4 | A | Find FIRST and FOLLOW for E→EAE\|(E)\|-E\|id, A→+\|* | FIRST and FOLLOW | 3 | 2 |
| 5 | A | What are viable prefixes? | Viable Prefixes | 3 | 3 |
| 6 | A | Different parsing conflicts in SLR parsing table | LR Parsing Conflicts | 3 | 3 |
| 7 | A | Differentiate synthesized and inherited attributes with example | Synthesized vs Inherited Attributes | 3 | 4 |
| 8 | A | Role of activation record in compiler design | Activation Record | 3 | 4 |
| 9 | A | Code motion with example | Code Motion / Loop Optimization | 3 | 5 |
| 10 | A | Algorithm for partitioning three-address instructions into basic blocks | Basic Blocks | 3 | 5 |
| 11a | B | Working of different phases of compiler. Illustrate with source language statement | Phases of Compiler | 8 | 1 |
| 11b | B | Explain different compiler construction tools | Compiler Writing Tools | 6 | 1 |
| 12a | B | Role of transition diagrams in recognition of tokens | Transition Diagrams / Token Recognition | 7 | 1 |
| 12b | B | Explain bootstrapping with example | Bootstrapping | 7 | 1 |
| 13a | B | Show S→iCtSeS\|iCtS\|b, C→a is ambiguous. Eliminate ambiguity | Ambiguity | 6 | 2 |
| 13b | B | Construct Recursive Descent Parser for Arithmetic Expressions | Recursive Descent Parsing | 8 | 2 |
| 14a | B | Write Non-recursive predictive parsing algorithm | Predictive Parsing (LL1) | 6 | 2 |
| 14b | B | Prove S→iEtSS'\|a, S'→eS\|ε, E→b is not LL(1) | LL(1) Grammar | 8 | 2 |
| 15a | B | Construct canonical LR(0) for S→L=R\|R, L→*R\|id, R→L. Prove not SLR(1) | LR(0) / Canonical Collection | 9 | 3 |
| 15b | B | Handle pruning — indicate handles in reduction of aaabbb | Handle Pruning | 5 | 3 |
| 16a | B | Derive LR(1) parsing table for S→Aa\|bAc\|Bc\|bBa, A→d, B→d | LR(1) / CLR Table | 9 | 3 |
| 16b | B | Write all moves by LR parser for parsing 'bdc' | LR Parsing — Trace | 5 | 3 |
| 17a | B | Write SDD for type declaration. Draw annotated parse tree for float a,b,c | SDD — Type Declaration | 7 | 4 |
| 17b | B | SDD for desk calculator — bottom-up evaluation for (3*5)–2 | SDD — Desk Calculator | 7 | 4 |
| 18a | B | Explain static allocation and heap allocation strategies | Storage Allocation Strategies | 7 | 4 |
| 18b | B | Construct DAG and 3-address code for a+a*(b-c)+b*(b-c)+b | Three-Address Code / DAG | 7 | 4 |
| 19a | B | Explain loop optimization techniques with examples | Loop Optimization | 7 | 5 |
| 19b | B | Explain code-improving transformations of a basic block | Basic Blocks — Transformations | 7 | 5 |
| 20a | B | Explain issues in design of a code generator | Issues in Code Generator | 6 | 5 |
| 20b | B | Write code generation algorithm. Generate code for x=(a-b)+(a+c)+(a+c) | Code Generation Algorithm | 8 | 5 |

---

### QP-3 (June 2023)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Relevance of input buffering in lexical analysis | Input Buffering / Sentinels | 3 | 1 |
| 2 | A | Draw transition diagram to represent relational operators | Transition Diagrams / Token Recognition | 3 | 1 |
| 3 | A | Steps to remove left recursion | Left Recursion Elimination | 3 | 2 |
| 4 | A | Left factoring — left factor E→E+T\|T, T→float\|float*T\|(E) | Left Factoring | 3 | 2 |
| 5 | A | Differentiate CLR and LALR parsers | CLR vs LALR | 3 | 3 |
| 6 | A | Possible actions of a shift-reduce parser | Shift-Reduce Actions | 3 | 3 |
| 7 | A | Convert a=b*-c+b*-c to quadruple | Three-Address Code / Quadruples | 3 | 4 |
| 8 | A | Define SDD with example | SDD / SDT | 3 | 4 |
| 9 | A | Common subexpression elimination with example | Code Optimization — CSE | 3 | 5 |
| 10 | A | Peephole optimization role in compilation | Peephole Optimization | 3 | 5 |
| 11a | B | Various phases of compiler for "position:=initial+rate*60" | Phases of Compiler | 8 | 1 |
| 11b | B | Differentiate tokens, patterns, lexemes with example | Token/Lexeme/Pattern | 6 | 1 |
| 12a | B | Short notes on compiler construction tools | Compiler Writing Tools | 6 | 1 |
| 12b | B | Explain in detail buffer pairs and sentinels | Input Buffering / Sentinels | 8 | 1 |
| 13a | B | Find FIRST and FOLLOW for S→aBDh\|bBc, B→eC, C→bC\|ε, D→EF, E→g\|ε, F→f\|ε | FIRST and FOLLOW | 6 | 2 |
| 13b | B | Explain error recovery strategies in parsing | Error Recovery in Parsing | 8 | 2 |
| 14a | B | Show E→E+E\|E-E\|E*E etc. is ambiguous. Eliminate ambiguity (given precedence order) | Ambiguity | 7 | 2 |
| 14b | B | Construct non-recursive predictive parsing table for S→(L)\|a, L→L,S\|S | Predictive Parsing (LL1) | 7 | 2 |
| 15a | B | Shift-reduce parser — explain all conflicts in detail | LR Parsing Conflicts | 8 | 3 |
| 15b | B | Construct canonical LR(1) collection for S→CC, C→aC\|d | LR(1) / CLR Table | 6 | 3 |
| 16 | B | Construct LALR table for S→Aa\|bAc\|dc\|bda, A→d. Verify "bdc" accepted | LALR Parsing Table | 14 | 3 |
| 17a | B | Define three-address code, triples, quadruples with examples | Three-Address Code / Quadruples | 6 | 4 |
| 17b | B | Static and heap allocation strategies | Storage Allocation Strategies | 8 | 4 |
| 18a | B | Construct SDD for assignment statement. Annotated parse tree for 6*8+5 | SDD — Assignment / SDT | 7 | 4 |
| 18b | B | Generate intermediate code for if(a>b) x=a+b else x=a-b | Intermediate Code Generation | 7 | 4 |
| 19a | B | Explain different code optimization techniques | Principal Sources of Optimization | 8 | 5 |
| 19b | B | Generate code sequence for d=(a-b)+(a-c)+(a-c) | Code Generation — Numerical | 6 | 5 |
| 20a | B | Explain design issues of a code generator | Issues in Code Generator | 7 | 5 |
| 20b | B | Illustrate optimization of basic blocks with examples | Basic Blocks — Transformations | 7 | 5 |

---

### QP-4 (May 2024)
| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Define lexeme, tokens and patterns using while(a>b){result=a+b;} | Token/Lexeme/Pattern | 3 | 1 |
| 2 | A | Bootstrapping in compiler design using diagrams | Bootstrapping | 3 | 1 |
| 3 | A | Remove left recursion from E→E0E0S\|00, S→S11\|1 | Left Recursion Elimination | 3 | 2 |
| 4 | A | Left factoring algorithm — S→abAA\|ab, A→abA\|ab | Left Factoring | 3 | 2 |
| 5 | A | Define operator grammar. Construct operator precedence table for E→E+E\|E*E\|id | Operator Grammar / Precedence | 3 | 3 |
| 6 | A | Operations in shift reduce parser | Shift-Reduce Actions | 3 | 3 |
| 7 | A | Structure of activation record | Activation Record | 3 | 4 |
| 8 | A | Compare L-attributed and S-attributed SDDs | Synthesized vs Inherited Attributes | 3 | 4 |
| 9 | A | Construct syntax tree and DAG for d+a*(b-c)+(b-c)*d | Three-Address Code / DAG | 3 | 4 |
| 10 | A | Induction variable elimination for loop optimization | Loop Optimization | 3 | 5 |
| 11a | B | Explain different phases of compiler for c=sum-row*10 | Phases of Compiler | 8 | 1 |
| 11b | B | Transition diagrams for relational operators and identifiers | Transition Diagrams / Token Recognition | 6 | 1 |
| 12a | B | Input buffering — two buffer system and sentinels. Advantages | Input Buffering / Sentinels | 8 | 1 |
| 12b | B | Explain any four compiler construction tools | Compiler Writing Tools | 6 | 1 |
| 13a | B | S→(L)\|a, L→L,S\|S — remove left recursion, predictive table, justify LL(1) | Predictive Parsing (LL1) | 8 | 2 |
| 13b | B | Recursive descent parsing procedure for S→iCtS'\|a, S'→eS\|ε, C→b | Recursive Descent Parsing | 6 | 2 |
| 14a | B | Algorithms for FIRST and FOLLOW; their role in predictive parser | FIRST and FOLLOW | 8 | 2 |
| 14b | B | Compute FIRST and FOLLOW for S→ADB\|DbB\|Ba, A→da\|BD, B→g\|ε, D→h\|ε | FIRST and FOLLOW | 6 | 2 |
| 15a | B | Construct SLR parsing table for E→T+E\|T, F→id. Check if grammar is SLR | SLR Parsing Table | 8 | 3 |
| 15b | B | Handle pruning — indicate handles to reduce bbaaab to start symbol | Handle Pruning | 6 | 3 |
| 16a | B | Construct CLR parsing table for S→L=R\|R, L→*R\|id, R→L. Justify | CLR / Canonical LR Table | 8 | 3 |
| 16b | B | Different conflicts in shift reduce parser | LR Parsing Conflicts | 6 | 3 |
| 17a | B | SDD of desk calculator — evaluate (3+5/2)*(2+4/3), draw annotated parse tree | SDD — Desk Calculator | 8 | 4 |
| 17b | B | SDD for type declaration — evaluate inherited attributes for int a,b,c | SDD — Type Declaration | 6 | 4 |
| 18a | B | Stack, heap, and static allocation strategies | Storage Allocation Strategies | 8 | 4 |
| 18b | B | Three address code representations of (a+b)*(b+c)*(a+b+c) | Three-Address Code / Quadruples | 6 | 4 |
| 19a | B | Explain any four principal sources of optimization | Principal Sources of Optimization | 8 | 5 |
| 19b | B | Basic block — structure-preserving transformations | Basic Blocks — Transformations | 6 | 5 |
| 20a | B | Peephole optimization techniques with example | Peephole Optimization | 8 | 5 |
| 20b | B | Three issues in design of a code generator | Issues in Code Generator | 6 | 5 |

---

### QP-5 (July 2021 — CS304, Old Scheme)
> **Note:** Older format with multi-part "answer any N" structure. Included for topic reference only.

| Q# | Part | Question | Topic | Marks | Module |
|----|------|----------|-------|-------|--------|
| 1 | A | Regular expression for strings with even a's and odd b's | Regular Expressions | 3 | 1 |
| 2 | A | Distinguish front end and back end of compiler | Front-end / Back-end Model | 3 | 1 |
| 3 | A | Show S→iCtS\|iCtSeS\|a, C→b is ambiguous | Ambiguity | 3 | 2 |
| 4 | A | Explain backtracking in parsing with example | Backtracking in Parsing | 3 | 2 |
| 5a | B | Eliminate left recursion from S→Aa\|b, A→Ac\|Sd\|h | Left Recursion Elimination | 4 | 2 |
| 5b | B | Construct recursive descent parser for E→TE', E'→+TE'\|ε, T→FT', F→(E)\|id | Recursive Descent Parsing | 5 | 2 |
| 6 | B | Explain phases of compiler for x=2*a+b | Phases of Compiler | 9 | 1 |
| 7a | B | Check LL(1) for S→(L)\|a, L→SL', L'→,SL'\|ε | LL(1) Grammar | 5 | 2 |
| 7b | B | Explain bootstrapping | Bootstrapping | 4 | 1 |
| 8 | C | FIRST and FOLLOW for S→AA, A→aA\|b | FIRST and FOLLOW | 3 | 2 |
| 9 | C | Define operator grammar. Give example | Operator Grammar | 3 | 3 |
| 10 | C | Distinguish S-attributed and L-attributed definitions | Synthesized vs Inherited Attributes | 3 | 4 |
| 11 | C | What is type checking? What are its two types? | Type Checking | 3 | 4 |
| 12 | D | Construct SLR(1) parsing table for E→T+E\|T, T→id | SLR Parsing Table | 9 | 3 |
| 13a | D | Write SDT for simple desk calculator | SDD — Desk Calculator | 3 | 4 |
| 13b | D | Moves by bottom-up parser on 23*5+4 using SDT | LR Parsing — Trace | 6 | 3 |
| 14a | D | S→a\|(T), T→T,S\|S — construct parse tree using shift reduce | Shift-Reduce Parsing | 6 | 3 |
| 14b | D | Bottom-up evaluation of S-attributed definitions | S-Attributed Definitions | 3 | 4 |
| 15a | E | Heap allocation strategy | Storage Allocation Strategies | 3 | 4 |
| 15b | E | Activation record structure with figure | Activation Record | 7 | 4 |
| 16 | E | Write quadruples, triples and indirect tuples for (a+b)*(b+c)+(a+b+c) | Three-Address Code / Quadruples | 10 | 4 |
| 17a | E | SDT for three-address code for Boolean expressions | Intermediate Code Generation | 7 | 4 |
| 17b | E | Distinguish static and dynamic storage allocation | Storage Allocation Strategies | 3 | 4 |
| 18a | E | Algorithm for identifying basic blocks from 3-address code | Basic Blocks | 5 | 5 |
| 18b | E | Construct DAG for D:=B*C, E:=A+B, B:=B*C, A:=E-D | Three-Address Code / DAG | 5 | 5 |
| 19 | E | Write 3-address code for X:=A-B+C-D+E-F. Convert to machine code | Code Generation — Numerical | 10 | 5 |
| 20a | E | How algebraic laws help in optimizing basic blocks | Code Optimization | 4 | 5 |
| 20b | E | Write code generation algorithm | Code Generation Algorithm | 6 | 5 |

---

## Topic Frequency Analysis

### MODULE 1 — Introduction to Compilers and Lexical Analysis

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks (CST302) | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-------------------:|:--------:|
| Phases of a Compiler (with running example) | 0 | **4/4 papers** | 4 | 8+8+8+10 = 34 | 🔴 CRITICAL |
| Compiler Writing Tools / Construction Tools | 0 | **4/4 papers** | 4 | 4+6+6+6 = 22 | 🔴 CRITICAL |
| Token / Lexeme / Pattern | 3 Part A + 1 Part B | | 4 | 3+3+6+3 = 15 | 🔴 CRITICAL |
| Transition Diagrams / Token Recognition | 1 Part A + 3 Part B | | 4 | 3+7+6+9 = 25 | 🔴 CRITICAL |
| Input Buffering / Sentinels / Buffer Pairs | 2 Part A + 3 Part B | | 5 | 3+3+8+8 = 22 | 🔴 HIGH |
| Bootstrapping | 1 Part A + 1 Part B | | 2 | 3+7 = 10 | 🟠 HIGH |
| Front-end / Back-end Model | 0 Part A + 1 Part B | | 1 | 5 | 🟢 LOW |

### MODULE 2 — Introduction to Syntax Analysis

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks (CST302) | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-------------------:|:--------:|
| Predictive Parsing / LL(1) Table Construction | 0 | **4/4 papers** | 4 | 10+8+7+8 = 33 | 🔴 CRITICAL |
| Ambiguity — Detection & Elimination | 2 Part A + 3 Part B | | 5 | 4+6+7+3 = 20+ | 🔴 CRITICAL |
| FIRST and FOLLOW Computation | 1 Part A + 3 Part B | | 4 | 3+6+8+6 = 23 | 🔴 CRITICAL |
| Recursive Descent Parsing | 0 + 3 Part B | | 3 | 8+6+6 = 20 | 🔴 HIGH |
| Left Recursion Elimination | 3 Part A | | 3 | 9 (Part A) | 🟠 HIGH |
| Left Factoring | 2 Part A | | 2 | 6 (Part A) | 🟡 MEDIUM |
| Error Recovery in Parsing | 0 + 1 Part B | | 1 | 8 | 🟡 MEDIUM |

### MODULE 3 — Bottom-Up Parsing

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks (CST302) | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-------------------:|:--------:|
| LR Parsing Conflicts (Shift-Reduce / Reduce-Reduce) | 2 Part A + 3 Part B | | 5 | 6+7+8+6 = 27 | 🔴 CRITICAL |
| LR(0) Items / Canonical LR(0) Collection | 0 + 3 Part B | | 3 | 7+9+6 = 22 | 🔴 CRITICAL |
| SLR Parsing Table Construction | 0 + 3 Part B | | 3 | 7+8+9 = 24 | 🔴 CRITICAL |
| CLR / Canonical LR(1) Table | 0 + 3 Part B | | 3 | 7+8+6 = 21 | 🔴 HIGH |
| LALR Parsing Table | 0 + 2 Part B | | 2 | 9+14 = 23 | 🟠 HIGH |
| LR(1) Items Construction | 0 + 2 Part B | | 2 | 9+6 = 15 | 🟠 HIGH |
| Handle Pruning | 0 + 2 Part B | | 2 | 5+6 = 11 | 🟡 MEDIUM |
| Shift-Reduce Actions (Part A) | 2 Part A | | 2 | 6 (Part A) | 🟡 MEDIUM |
| Operator Precedence Parsing | 1 Part A | | 1 | 3 | 🟢 LOW |

### MODULE 4 — Syntax Directed Translation and Intermediate Code Generation

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks (CST302) | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-------------------:|:--------:|
| Storage Allocation Strategies (Static / Stack / Heap) | 0 | **4/4 papers** | 4 | 7+8+8+8 = 31 | 🔴 CRITICAL |
| Three-Address Code / Quadruples / Triples | 2 Part A + 2 Part B | | 5 | 3+3+6+7+6 = 25 | 🔴 CRITICAL |
| Synthesized vs Inherited Attributes | 3 Part A + 1 Part B | | 4 | 3+3+3+5 = 14 | 🔴 CRITICAL |
| SDD — Desk Calculator (annotated parse tree + eval) | 0 + 3–4 Part B | | 4 | 7+7+8+9 = 31 | 🔴 CRITICAL |
| DAG Construction | 1 Part A + 2 Part B | | 3 | 3+7+6 = 16 | 🟠 HIGH |
| SDD — Type Declaration | 0 + 2 Part B | | 2 | 7+6 = 13 | 🟡 MEDIUM |
| Activation Record / Structure | 2 Part A | | 2 | 6 (Part A) | 🟡 MEDIUM |
| Intermediate Code for if-else | 0 + 1 Part B | | 1 | 7 | 🟢 LOW |

### MODULE 5 — Code Optimization and Generation

| Topic | Part A Count | Part B Count | Total Appearances | Total Marks (CST302) | Priority |
|-------|:-----------:|:------------:|:-----------------:|:-------------------:|:--------:|
| Principal Sources of Optimization | 0 | **4/4 papers** | 4 | 7+8+8+10 = 33 | 🔴 CRITICAL |
| Issues in Design of Code Generator | 1 Part A + 3 Part B | | 4 | 6+7+8+6 = 27 | 🔴 CRITICAL |
| Basic Blocks — Transformations / Optimization | 2 Part A + 3 Part B | | 5 | 3+3+7+7+6 = 26 | 🔴 CRITICAL |
| Peephole Optimization | 2 Part A + 1 Part B | | 3 | 3+3+8 = 14 | 🟠 HIGH |
| Code Generation Algorithm (getreg / target code) | 0 + 2 Part B | | 2 | 8+6 = 14 | 🟡 MEDIUM |
| Loop Optimization (code motion / induction variable) | 2 Part A + 1 Part B | | 3 | 3+3+7 = 13 | 🟡 MEDIUM |
| Common Subexpression Elimination | 1 Part A | | 1 | 3 | 🟢 LOW |

---

## Overall Priority Ranking (All Modules)

| Rank | Topic | Module | Papers | Notes |
|------|-------|--------|--------|-------|
| 1 | **Phases of a Compiler** | 1 | 4/4 | Always Part B 8–10 marks. Running example mandatory — show output at each phase. |
| 2 | **Predictive Parsing / LL(1) Table** | 2 | 4/4 | Heavy Part B 7–10 marks. Given grammar — must apply the algorithm step by step. |
| 3 | **Principal Sources of Optimization** | 5 | 4/4 | Always Part B 7–10 marks. List and explain all sources with examples. |
| 4 | **Storage Allocation Strategies** | 4 | 4/4 | Part B 7–8 marks every paper. Cover static, stack, and heap allocation. |
| 5 | **SDD — Desk Calculator** | 4 | 3–4/4 | Part B 7–9 marks. Annotated parse tree + bottom-up evaluation always expected. |
| 6 | **Three-Address Code / Quadruples** | 4 | 4/4 | Part A (3m) + Part B (6–7m). Numerical translations asked every year. |
| 7 | **LR Parsing Conflicts** | 3 | 4/4 | Part A + Part B both. Shift-reduce and reduce-reduce conflicts — always examined. |
| 8 | **Compiler Construction Tools** | 1 | 4/4 | Part B 4–6 marks every paper. List and explain at least four tools. |
| 9 | **Issues in Design of Code Generator** | 5 | 4/4 | Part A + Part B. 6–8 marks in Part B. |
| 10 | **LR(0) Items / SLR Parsing Table** | 3 | 3/4 | Part B 7–9 marks. Canonical collection construction with given grammar. |
| 11 | **FIRST and FOLLOW** | 2 | 4/4 | Part A + Part B. Always applied to a given grammar — computation, not just definition. |
| 12 | **Ambiguity — Detection + Elimination** | 2 | 4/4 | Part A (3m) + Part B (4–7m). Show ambiguity + eliminate with precedence/associativity. |
| 13 | **Token / Lexeme / Pattern** | 1 | 4/4 | Always Part A (3m). Definitions with a concrete example statement. |
| 14 | **Transition Diagrams / Token Recognition** | 1 | 3/4 | Part B 6–9 marks. Draw diagrams for identifiers, relational operators, digits. |
| 15 | **Recursive Descent Parsing** | 2 | 3/4 | Part B 6–8 marks. Write procedure for given grammar. |
| 16 | **CLR / Canonical LR Table** | 3 | 3/4 | Part B 7–8 marks. Construction + verification of CLR property. |
| 17 | **Basic Blocks — Optimization** | 5 | 3/4 | Part B 6–7 marks. Code-improving and structure-preserving transformations. |
| 18 | **Input Buffering / Sentinels** | 1 | 3/4 | Part A (3m) + Part B (7–8m). Two-buffer scheme + sentinel role + advantages. |
| 19 | **Left Recursion Elimination** | 2 | 3/4 | Always Part A (3m). Algorithm + apply on given grammar. |
| 20 | **Synthesized vs Inherited Attributes** | 4 | 4/4 | Always Part A (3m). Definitions + examples — never a standalone Part B question. |

---

## Key Observations

1. **All 5 modules are equally tested** — unlike CG, CD has full 5-module coverage every year in both Part A and Part B.
2. **Phases of Compiler, LL(1) table, and Principal Sources of Optimization** appear in Part B every single year — guaranteed high-value questions (8–10 marks each).
3. **Module 4 is the heaviest mark contributor** — Storage Allocation + SDD Desk Calculator + Three-Address Code can collectively yield 20–25 marks if all are asked.
4. **LR parsing dominates Module 3** — SLR, CLR, and LALR all appear regularly. Know all three construction algorithms cold. Conflicts question appears every year in both Part A and Part B.
5. **Module 2 has a recurring grammar** — S→(L)|a, L→L,S|S appears in 3/4 papers for predictive parsing. Master this one grammar completely.
6. **Numerical questions are increasing** — Code generation trace, 3-address code with DAG, peephole examples all expected with step-by-step working.
7. **Peephole optimization** rose from Part A (3m) in 2022–2023 to a full Part B question (8m) in 2024 — elevating in importance.
8. **Bootstrapping** appeared in Part B (7m) in 2022 and Part A (3m) in 2024 — know the T-diagram approach.

---

## ⚠️ Recurring Grammar Warning
The grammar **S→(L)|a, L→L,S|S** appears in 3 out of 4 papers for predictive parsing exercises. Master this grammar end-to-end: compute FIRST/FOLLOW, eliminate left recursion, construct the LL(1) table, and verify the LL(1) property.
