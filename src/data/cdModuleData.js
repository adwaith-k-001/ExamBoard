// Detailed data for CST302 Compiler Design — Modules 1–5
// Papers: April 2025, June 2022, June 2023, May 2024

export const CD_QPS = [
  { id: 'apr2025', label: 'Apr 2025' },
  { id: 'jun2022', label: 'Jun 2022' },
  { id: 'jun2023', label: 'Jun 2023' },
  { id: 'may2024', label: 'May 2024' },
];

export const CD_MODULE_DATA = {

  /* ══════════════════════════════════════════════════════
     MODULE 1 — Introduction to Compilers & Lexical Analysis
  ══════════════════════════════════════════════════════ */
  1: {
    topics: [
      { id: 'cd1_1', name: 'Phases of a Compiler (with running example)' },
      { id: 'cd1_2', name: 'Transition Diagrams / Token Recognition' },
      { id: 'cd1_3', name: 'Input Buffering / Sentinels / Buffer Pairs' },
      { id: 'cd1_4', name: 'Compiler Writing / Construction Tools' },
      { id: 'cd1_5', name: 'Token / Lexeme / Pattern' },
      { id: 'cd1_6', name: 'Bootstrapping (T-diagrams)' },
      { id: 'cd1_7', name: 'Front-end / Back-end Model' },
      { id: 'cd1_8', name: 'Lexical Error Recovery Strategies' },
    ],
    topicWeightage: {
      cd1_1: 34, cd1_2: 25, cd1_3: 22, cd1_4: 22,
      cd1_5: 15, cd1_6: 10, cd1_7: 5, cd1_8: 3,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'cdq1_1',  qpId: 'apr2025', qNum: 'Q1 (Part A)',   text: 'Define token and lexeme with examples.',                                                                   topicId: 'cd1_5', marks: 3  },
      { id: 'cdq1_2',  qpId: 'apr2025', qNum: 'Q2 (Part A)',   text: 'Different error recovery strategies in the lexical phase.',                                                topicId: 'cd1_8', marks: 3  },
      { id: 'cdq1_3',  qpId: 'apr2025', qNum: 'Q11a (Part B)', text: 'Explain different phases of compiler with neat diagram. Illustrate output at each phase for p:=i+r*10.',  topicId: 'cd1_1', marks: 10 },
      { id: 'cdq1_4',  qpId: 'apr2025', qNum: 'Q11b (Part B)', text: 'List any four compiler writing tools.',                                                                    topicId: 'cd1_4', marks: 4  },
      { id: 'cdq1_5',  qpId: 'apr2025', qNum: 'Q12a (Part B)', text: 'Explain front-end and back-end model of a compiler.',                                                      topicId: 'cd1_7', marks: 5  },
      { id: 'cdq1_6',  qpId: 'apr2025', qNum: 'Q12b (Part B)', text: 'Recognizing tokens using transition diagrams for relational operators, identifiers, and digits.',          topicId: 'cd1_2', marks: 9  },
      // ── Jun 2022 ──
      { id: 'cdq1_7',  qpId: 'jun2022', qNum: 'Q1 (Part A)',   text: 'Find lexemes in sum=a*(b-10); define tokens and patterns.',                                                topicId: 'cd1_5', marks: 3  },
      { id: 'cdq1_8',  qpId: 'jun2022', qNum: 'Q2 (Part A)',   text: 'Importance of sentinels in input buffering in lexical analysis.',                                          topicId: 'cd1_3', marks: 3  },
      { id: 'cdq1_9',  qpId: 'jun2022', qNum: 'Q11a (Part B)', text: 'Working of different phases of compiler. Illustrate with a source language statement.',                    topicId: 'cd1_1', marks: 8  },
      { id: 'cdq1_10', qpId: 'jun2022', qNum: 'Q11b (Part B)', text: 'Explain different compiler construction tools.',                                                           topicId: 'cd1_4', marks: 6  },
      { id: 'cdq1_11', qpId: 'jun2022', qNum: 'Q12a (Part B)', text: 'Role of transition diagrams in recognition of tokens.',                                                    topicId: 'cd1_2', marks: 7  },
      { id: 'cdq1_12', qpId: 'jun2022', qNum: 'Q12b (Part B)', text: 'Explain bootstrapping with T-diagram example.',                                                            topicId: 'cd1_6', marks: 7  },
      // ── Jun 2023 ──
      { id: 'cdq1_13', qpId: 'jun2023', qNum: 'Q1 (Part A)',   text: 'Relevance of input buffering in lexical analysis.',                                                        topicId: 'cd1_3', marks: 3  },
      { id: 'cdq1_14', qpId: 'jun2023', qNum: 'Q2 (Part A)',   text: 'Draw transition diagram to represent relational operators.',                                                topicId: 'cd1_2', marks: 3  },
      { id: 'cdq1_15', qpId: 'jun2023', qNum: 'Q11a (Part B)', text: 'Various phases of compiler for "position:=initial+rate*60".',                                              topicId: 'cd1_1', marks: 8  },
      { id: 'cdq1_16', qpId: 'jun2023', qNum: 'Q11b (Part B)', text: 'Differentiate tokens, patterns, and lexemes with example.',                                                topicId: 'cd1_5', marks: 6  },
      { id: 'cdq1_17', qpId: 'jun2023', qNum: 'Q12a (Part B)', text: 'Short notes on compiler construction tools.',                                                              topicId: 'cd1_4', marks: 6  },
      { id: 'cdq1_18', qpId: 'jun2023', qNum: 'Q12b (Part B)', text: 'Explain in detail buffer pairs and sentinels.',                                                            topicId: 'cd1_3', marks: 8  },
      // ── May 2024 ──
      { id: 'cdq1_19', qpId: 'may2024', qNum: 'Q1 (Part A)',   text: 'Define lexeme, tokens and patterns using while(a>b){result=a+b;}.',                                       topicId: 'cd1_5', marks: 3  },
      { id: 'cdq1_20', qpId: 'may2024', qNum: 'Q2 (Part A)',   text: 'Bootstrapping in compiler design using diagrams.',                                                         topicId: 'cd1_6', marks: 3  },
      { id: 'cdq1_21', qpId: 'may2024', qNum: 'Q11a (Part B)', text: 'Explain different phases of compiler for c=sum-row*10.',                                                   topicId: 'cd1_1', marks: 8  },
      { id: 'cdq1_22', qpId: 'may2024', qNum: 'Q11b (Part B)', text: 'Transition diagrams for relational operators and identifiers.',                                            topicId: 'cd1_2', marks: 6  },
      { id: 'cdq1_23', qpId: 'may2024', qNum: 'Q12a (Part B)', text: 'Input buffering — two buffer system and sentinels. Advantages.',                                           topicId: 'cd1_3', marks: 8  },
      { id: 'cdq1_24', qpId: 'may2024', qNum: 'Q12b (Part B)', text: 'Explain any four compiler construction tools.',                                                            topicId: 'cd1_4', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════
     MODULE 2 — Syntax Analysis
  ════════════════════════════════════════ */
  2: {
    topics: [
      { id: 'cd2_1', name: 'Predictive Parsing / LL(1) Table Construction' },
      { id: 'cd2_2', name: 'FIRST and FOLLOW Computation' },
      { id: 'cd2_3', name: 'Ambiguity — Detection and Elimination' },
      { id: 'cd2_4', name: 'Recursive Descent Parsing' },
      { id: 'cd2_5', name: 'Left Recursion Elimination' },
      { id: 'cd2_6', name: 'Error Recovery in Parsing' },
      { id: 'cd2_7', name: 'Left Factoring' },
      { id: 'cd2_8', name: 'Derivations and Parse Tree' },
    ],
    topicWeightage: {
      cd2_1: 47, cd2_2: 26, cd2_3: 20, cd2_4: 20,
      cd2_5: 9,  cd2_6: 8,  cd2_7: 6,  cd2_8: 3,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'cdq2_1',  qpId: 'apr2025', qNum: 'Q3 (Part A)',   text: 'Derive string aab using leftmost and rightmost derivation for S→AB, A→aaA|ε, B→Bb|ε.',                    topicId: 'cd2_8', marks: 3  },
      { id: 'cdq2_2',  qpId: 'apr2025', qNum: 'Q4 (Part A)',   text: 'What is ambiguous grammar? Give example.',                                                                 topicId: 'cd2_3', marks: 3  },
      { id: 'cdq2_3',  qpId: 'apr2025', qNum: 'Q5 (Part A)',   text: 'Write algorithm to compute FIRST(X) and FOLLOW(X).',                                                       topicId: 'cd2_2', marks: 3  },
      { id: 'cdq2_4',  qpId: 'apr2025', qNum: 'Q13a (Part B)', text: 'Define Ambiguity. Show S→aSbS|bSaS|ε is ambiguous.',                                                       topicId: 'cd2_3', marks: 4  },
      { id: 'cdq2_5',  qpId: 'apr2025', qNum: 'Q13b (Part B)', text: 'Explain LL(1) parsing table construction. Construct LL(1) table for S→(S)S|ε.',                           topicId: 'cd2_1', marks: 10 },
      { id: 'cdq2_6',  qpId: 'apr2025', qNum: 'Q14a (Part B)', text: 'S→(L)|a, L→L,S|S: remove left recursion, construct predictive table, justify LL(1).',                     topicId: 'cd2_1', marks: 8  },
      { id: 'cdq2_7',  qpId: 'apr2025', qNum: 'Q14b (Part B)', text: 'Recursive descent parsing — definition, drawbacks, and procedure for a nonterminal.',                      topicId: 'cd2_4', marks: 6  },
      // ── Jun 2022 ──
      { id: 'cdq2_8',  qpId: 'jun2022', qNum: 'Q3 (Part A)',   text: 'Steps to remove left recursion with example.',                                                             topicId: 'cd2_5', marks: 3  },
      { id: 'cdq2_9',  qpId: 'jun2022', qNum: 'Q4 (Part A)',   text: 'Find FIRST and FOLLOW for E→EAE|(E)|-E|id, A→+|*.',                                                        topicId: 'cd2_2', marks: 3  },
      { id: 'cdq2_10', qpId: 'jun2022', qNum: 'Q13a (Part B)', text: 'Show S→iCtSeS|iCtS|b, C→a is ambiguous. Eliminate ambiguity.',                                             topicId: 'cd2_3', marks: 6  },
      { id: 'cdq2_11', qpId: 'jun2022', qNum: 'Q13b (Part B)', text: 'Construct Recursive Descent Parser for arithmetic expressions.',                                           topicId: 'cd2_4', marks: 8  },
      { id: 'cdq2_12', qpId: 'jun2022', qNum: 'Q14a (Part B)', text: 'Write non-recursive predictive parsing algorithm.',                                                        topicId: 'cd2_1', marks: 6  },
      { id: 'cdq2_13', qpId: 'jun2022', qNum: 'Q14b (Part B)', text: "Prove S→iEtSS'|a, S'→eS|ε, E→b is not LL(1).",                                                            topicId: 'cd2_1', marks: 8  },
      // ── Jun 2023 ──
      { id: 'cdq2_14', qpId: 'jun2023', qNum: 'Q3 (Part A)',   text: 'Steps to remove left recursion.',                                                                          topicId: 'cd2_5', marks: 3  },
      { id: 'cdq2_15', qpId: 'jun2023', qNum: 'Q4 (Part A)',   text: 'Left factoring — left factor E→E+T|T, T→float|float*T|(E).',                                               topicId: 'cd2_7', marks: 3  },
      { id: 'cdq2_16', qpId: 'jun2023', qNum: 'Q13a (Part B)', text: 'Find FIRST and FOLLOW for S→aBDh|bBc, B→eC, C→bC|ε, D→EF, E→g|ε, F→f|ε.',                                topicId: 'cd2_2', marks: 6  },
      { id: 'cdq2_17', qpId: 'jun2023', qNum: 'Q13b (Part B)', text: 'Explain error recovery strategies in parsing.',                                                            topicId: 'cd2_6', marks: 8  },
      { id: 'cdq2_18', qpId: 'jun2023', qNum: 'Q14a (Part B)', text: 'Show E→E+E|E-E|E*E etc. is ambiguous. Eliminate using precedence and associativity.',                      topicId: 'cd2_3', marks: 7  },
      { id: 'cdq2_19', qpId: 'jun2023', qNum: 'Q14b (Part B)', text: 'Construct non-recursive predictive parsing table for S→(L)|a, L→L,S|S.',                                  topicId: 'cd2_1', marks: 7  },
      // ── May 2024 ──
      { id: 'cdq2_20', qpId: 'may2024', qNum: 'Q3 (Part A)',   text: 'Remove left recursion from E→E0E0S|00, S→S11|1.',                                                          topicId: 'cd2_5', marks: 3  },
      { id: 'cdq2_21', qpId: 'may2024', qNum: 'Q4 (Part A)',   text: 'Left factoring algorithm — S→abAA|ab, A→abA|ab.',                                                          topicId: 'cd2_7', marks: 3  },
      { id: 'cdq2_22', qpId: 'may2024', qNum: 'Q13a (Part B)', text: 'S→(L)|a, L→L,S|S — remove left recursion, build predictive table, justify LL(1).',                        topicId: 'cd2_1', marks: 8  },
      { id: 'cdq2_23', qpId: 'may2024', qNum: 'Q13b (Part B)', text: "Recursive descent parsing procedure for S→iCtS'|a, S'→eS|ε, C→b.",                                        topicId: 'cd2_4', marks: 6  },
      { id: 'cdq2_24', qpId: 'may2024', qNum: 'Q14a (Part B)', text: 'Algorithms for FIRST and FOLLOW; their role in predictive parser.',                                        topicId: 'cd2_2', marks: 8  },
      { id: 'cdq2_25', qpId: 'may2024', qNum: 'Q14b (Part B)', text: 'Compute FIRST and FOLLOW for S→ADB|DbB|Ba, A→da|BD, B→g|ε, D→h|ε.',                                       topicId: 'cd2_2', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════
     MODULE 3 — Bottom-Up Parsing
  ════════════════════════════════════════ */
  3: {
    topics: [
      { id: 'cd3_1', name: 'CLR / Canonical LR(1) Table' },
      { id: 'cd3_2', name: 'LR Parsing Conflicts (Shift-Reduce / Reduce-Reduce)' },
      { id: 'cd3_3', name: 'LR(0) Items / Canonical Collection' },
      { id: 'cd3_4', name: 'SLR Parsing Table' },
      { id: 'cd3_5', name: 'LALR Parsing Table' },
      { id: 'cd3_6', name: 'Handle Pruning' },
      { id: 'cd3_7', name: 'Shift-Reduce Actions' },
      { id: 'cd3_8', name: 'Operator Precedence Parsing' },
      { id: 'cd3_9', name: 'Viable Prefixes' },
    ],
    topicWeightage: {
      cd3_1: 38, cd3_2: 24, cd3_3: 16, cd3_4: 15,
      cd3_5: 14, cd3_6: 11, cd3_7: 6,  cd3_8: 6,  cd3_9: 3,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'cdq3_1',  qpId: 'apr2025', qNum: 'Q6 (Part A)',   text: 'What is an operator grammar? Give example.',                                                               topicId: 'cd3_8', marks: 3  },
      { id: 'cdq3_2',  qpId: 'apr2025', qNum: 'Q15a (Part B)', text: 'Construct LR(0) items for S→L=R, S→R, L→*R|id, R→L.',                                                     topicId: 'cd3_3', marks: 7  },
      { id: 'cdq3_3',  qpId: 'apr2025', qNum: 'Q15b (Part B)', text: 'Explain conflicts in LR(0) parsing with example.',                                                         topicId: 'cd3_2', marks: 7  },
      { id: 'cdq3_4',  qpId: 'apr2025', qNum: 'Q16a (Part B)', text: 'Check if S→XX, X→aX|b is CLR(1) or not. Construct CLR parsing table.',                                     topicId: 'cd3_1', marks: 7  },
      { id: 'cdq3_5',  qpId: 'apr2025', qNum: 'Q16b (Part B)', text: 'Construct SLR parsing table for E→E+n|n.',                                                                 topicId: 'cd3_4', marks: 7  },
      // ── Jun 2022 ──
      { id: 'cdq3_6',  qpId: 'jun2022', qNum: 'Q5 (Part A)',   text: 'What are viable prefixes?',                                                                                topicId: 'cd3_9', marks: 3  },
      { id: 'cdq3_7',  qpId: 'jun2022', qNum: 'Q6 (Part A)',   text: 'Different parsing conflicts in SLR parsing table.',                                                         topicId: 'cd3_2', marks: 3  },
      { id: 'cdq3_8',  qpId: 'jun2022', qNum: 'Q15a (Part B)', text: 'Construct canonical LR(0) for S→L=R|R, L→*R|id, R→L. Prove it is not SLR(1).',                            topicId: 'cd3_3', marks: 9  },
      { id: 'cdq3_9',  qpId: 'jun2022', qNum: 'Q15b (Part B)', text: 'Handle pruning — indicate handles in reduction of aaabbb.',                                                topicId: 'cd3_6', marks: 5  },
      { id: 'cdq3_10', qpId: 'jun2022', qNum: 'Q16a (Part B)', text: 'Derive LR(1) parsing table for S→Aa|bAc|Bc|bBa, A→d, B→d.',                                               topicId: 'cd3_1', marks: 9  },
      { id: 'cdq3_11', qpId: 'jun2022', qNum: 'Q16b (Part B)', text: "Write all moves by LR parser for parsing 'bdc'.",                                                          topicId: 'cd3_1', marks: 5  },
      // ── Jun 2023 ──
      { id: 'cdq3_12', qpId: 'jun2023', qNum: 'Q5 (Part A)',   text: 'Differentiate CLR and LALR parsers.',                                                                      topicId: 'cd3_1', marks: 3  },
      { id: 'cdq3_13', qpId: 'jun2023', qNum: 'Q6 (Part A)',   text: 'Possible actions of a shift-reduce parser.',                                                               topicId: 'cd3_7', marks: 3  },
      { id: 'cdq3_14', qpId: 'jun2023', qNum: 'Q15a (Part B)', text: 'Shift-reduce parser — explain all conflicts in detail.',                                                    topicId: 'cd3_2', marks: 8  },
      { id: 'cdq3_15', qpId: 'jun2023', qNum: 'Q15b (Part B)', text: 'Construct canonical LR(1) collection for S→CC, C→aC|d.',                                                   topicId: 'cd3_1', marks: 6  },
      { id: 'cdq3_16', qpId: 'jun2023', qNum: 'Q16 (Part B)',  text: "Construct LALR table for S→Aa|bAc|dc|bda, A→d. Verify 'bdc' is accepted.",                                topicId: 'cd3_5', marks: 14 },
      // ── May 2024 ──
      { id: 'cdq3_17', qpId: 'may2024', qNum: 'Q5 (Part A)',   text: 'Define operator grammar. Construct operator precedence table for E→E+E|E*E|id.',                           topicId: 'cd3_8', marks: 3  },
      { id: 'cdq3_18', qpId: 'may2024', qNum: 'Q6 (Part A)',   text: 'Operations in shift reduce parser.',                                                                       topicId: 'cd3_7', marks: 3  },
      { id: 'cdq3_19', qpId: 'may2024', qNum: 'Q15a (Part B)', text: 'Construct SLR parsing table for E→T+E|T, F→id. Check if grammar is SLR.',                                  topicId: 'cd3_4', marks: 8  },
      { id: 'cdq3_20', qpId: 'may2024', qNum: 'Q15b (Part B)', text: 'Handle pruning — indicate handles to reduce bbaaab to start symbol.',                                      topicId: 'cd3_6', marks: 6  },
      { id: 'cdq3_21', qpId: 'may2024', qNum: 'Q16a (Part B)', text: 'Construct CLR parsing table for S→L=R|R, L→*R|id, R→L. Justify.',                                         topicId: 'cd3_1', marks: 8  },
      { id: 'cdq3_22', qpId: 'may2024', qNum: 'Q16b (Part B)', text: 'Different conflicts in shift reduce parser.',                                                              topicId: 'cd3_2', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════════════════════
     MODULE 4 — Syntax Directed Translation & Intermediate Code Generation
  ════════════════════════════════════════════════════════ */
  4: {
    topics: [
      { id: 'cd4_1', name: 'SDD — Desk Calculator (Annotated Parse Tree + Evaluation)' },
      { id: 'cd4_2', name: 'Storage Allocation Strategies (Static / Stack / Heap)' },
      { id: 'cd4_3', name: 'Three-Address Code / Quadruples / Triples' },
      { id: 'cd4_6', name: 'SDD — Type Declaration (Inherited Attributes)' },
      { id: 'cd4_5', name: 'Synthesized vs Inherited Attributes' },
      { id: 'cd4_7', name: 'Intermediate Code Generation (if-else / Boolean)' },
      { id: 'cd4_8', name: 'Activation Record Structure' },
      { id: 'cd4_4', name: 'DAG Construction' },
    ],
    topicWeightage: {
      cd4_1: 37, cd4_2: 31, cd4_3: 31, cd4_6: 13,
      cd4_5: 11, cd4_7: 7,  cd4_8: 6,  cd4_4: 3,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'cdq4_1',  qpId: 'apr2025', qNum: 'Q7 (Part A)',   text: 'Write SDT to evaluate arithmetic expressions for E→E+T|T, T→F, F→num.',                                   topicId: 'cd4_1', marks: 3  },
      { id: 'cdq4_2',  qpId: 'apr2025', qNum: 'Q8 (Part A)',   text: 'Translate a[i]=b*c-b*d into quadruple representation.',                                                   topicId: 'cd4_3', marks: 3  },
      { id: 'cdq4_3',  qpId: 'apr2025', qNum: 'Q17a (Part B)', text: 'Differentiate synthesized and inherited attributes with example.',                                         topicId: 'cd4_5', marks: 5  },
      { id: 'cdq4_4',  qpId: 'apr2025', qNum: 'Q17b (Part B)', text: 'SDD for desk calculator — annotated parse tree and bottom-up evaluation for (4*5)–2.',                    topicId: 'cd4_1', marks: 9  },
      { id: 'cdq4_5',  qpId: 'apr2025', qNum: 'Q18a (Part B)', text: 'Construct 3-address code and DAG for s=(a-b)*(b+c)+(a-b).',                                                topicId: 'cd4_3', marks: 6  },
      { id: 'cdq4_6',  qpId: 'apr2025', qNum: 'Q18b (Part B)', text: 'Explain static allocation and heap allocation strategies.',                                                 topicId: 'cd4_2', marks: 8  },
      // ── Jun 2022 ──
      { id: 'cdq4_7',  qpId: 'jun2022', qNum: 'Q7 (Part A)',   text: 'Differentiate synthesized and inherited attributes with example.',                                         topicId: 'cd4_5', marks: 3  },
      { id: 'cdq4_8',  qpId: 'jun2022', qNum: 'Q8 (Part A)',   text: 'Role of activation record in compiler design.',                                                            topicId: 'cd4_8', marks: 3  },
      { id: 'cdq4_9',  qpId: 'jun2022', qNum: 'Q17a (Part B)', text: 'Write SDD for type declaration. Draw annotated parse tree for float a,b,c.',                              topicId: 'cd4_6', marks: 7  },
      { id: 'cdq4_10', qpId: 'jun2022', qNum: 'Q17b (Part B)', text: 'SDD for desk calculator — bottom-up evaluation for (3*5)–2.',                                             topicId: 'cd4_1', marks: 7  },
      { id: 'cdq4_11', qpId: 'jun2022', qNum: 'Q18a (Part B)', text: 'Explain static allocation and heap allocation strategies.',                                                 topicId: 'cd4_2', marks: 7  },
      { id: 'cdq4_12', qpId: 'jun2022', qNum: 'Q18b (Part B)', text: 'Construct DAG and 3-address code for a+a*(b-c)+b*(b-c)+b.',                                               topicId: 'cd4_3', marks: 7  },
      // ── Jun 2023 ──
      { id: 'cdq4_13', qpId: 'jun2023', qNum: 'Q7 (Part A)',   text: 'Convert a=b*-c+b*-c to quadruple representation.',                                                        topicId: 'cd4_3', marks: 3  },
      { id: 'cdq4_14', qpId: 'jun2023', qNum: 'Q8 (Part A)',   text: 'Define SDD with example.',                                                                                 topicId: 'cd4_1', marks: 3  },
      { id: 'cdq4_15', qpId: 'jun2023', qNum: 'Q17a (Part B)', text: 'Define three-address code, triples, and quadruples with examples.',                                        topicId: 'cd4_3', marks: 6  },
      { id: 'cdq4_16', qpId: 'jun2023', qNum: 'Q17b (Part B)', text: 'Static and heap allocation strategies.',                                                                   topicId: 'cd4_2', marks: 8  },
      { id: 'cdq4_17', qpId: 'jun2023', qNum: 'Q18a (Part B)', text: 'Construct SDD for assignment statement. Annotated parse tree for 6*8+5.',                                  topicId: 'cd4_1', marks: 7  },
      { id: 'cdq4_18', qpId: 'jun2023', qNum: 'Q18b (Part B)', text: 'Generate intermediate code for if(a>b) x=a+b else x=a-b.',                                                topicId: 'cd4_7', marks: 7  },
      // ── May 2024 ──
      { id: 'cdq4_19', qpId: 'may2024', qNum: 'Q7 (Part A)',   text: 'Structure of activation record.',                                                                          topicId: 'cd4_8', marks: 3  },
      { id: 'cdq4_20', qpId: 'may2024', qNum: 'Q8 (Part A)',   text: 'Compare L-attributed and S-attributed SDDs.',                                                              topicId: 'cd4_5', marks: 3  },
      { id: 'cdq4_21', qpId: 'may2024', qNum: 'Q9 (Part A)',   text: 'Construct syntax tree and DAG for d+a*(b-c)+(b-c)*d.',                                                     topicId: 'cd4_4', marks: 3  },
      { id: 'cdq4_22', qpId: 'may2024', qNum: 'Q17a (Part B)', text: 'SDD of desk calculator — evaluate (3+5/2)*(2+4/3), draw annotated parse tree.',                            topicId: 'cd4_1', marks: 8  },
      { id: 'cdq4_23', qpId: 'may2024', qNum: 'Q17b (Part B)', text: 'SDD for type declaration — evaluate inherited attributes for int a,b,c.',                                  topicId: 'cd4_6', marks: 6  },
      { id: 'cdq4_24', qpId: 'may2024', qNum: 'Q18a (Part B)', text: 'Stack, heap, and static allocation strategies.',                                                           topicId: 'cd4_2', marks: 8  },
      { id: 'cdq4_25', qpId: 'may2024', qNum: 'Q18b (Part B)', text: 'Three address code representations of (a+b)*(b+c)*(a+b+c).',                                               topicId: 'cd4_3', marks: 6  },
    ],
  },

  /* ════════════════════════════════════════════════
     MODULE 5 — Code Optimization and Code Generation
  ════════════════════════════════════════════════ */
  5: {
    topics: [
      { id: 'cd5_1', name: 'Principal Sources of Optimization' },
      { id: 'cd5_2', name: 'Issues in Design of Code Generator' },
      { id: 'cd5_3', name: 'Basic Blocks — Optimization and Transformations' },
      { id: 'cd5_4', name: 'Peephole Optimization' },
      { id: 'cd5_5', name: 'Code Generation Algorithm (getreg / target code)' },
      { id: 'cd5_6', name: 'Loop Optimization (Code Motion / Induction Variable)' },
      { id: 'cd5_7', name: 'Register and Address Descriptors' },
      { id: 'cd5_8', name: 'Common Subexpression Elimination' },
    ],
    topicWeightage: {
      cd5_1: 30, cd5_2: 30, cd5_3: 23, cd5_4: 14,
      cd5_5: 14, cd5_6: 13, cd5_7: 6,  cd5_8: 3,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'cdq5_1',  qpId: 'apr2025', qNum: 'Q9 (Part A)',   text: 'Three characteristics of peephole optimization.',                                                          topicId: 'cd5_4', marks: 3  },
      { id: 'cdq5_2',  qpId: 'apr2025', qNum: 'Q10 (Part A)',  text: 'Source language issues in code generation phase.',                                                         topicId: 'cd5_2', marks: 3  },
      { id: 'cdq5_3',  qpId: 'apr2025', qNum: 'Q19a (Part B)', text: 'What are the needs for the optimization phase in a compiler?',                                             topicId: 'cd5_1', marks: 4  },
      { id: 'cdq5_4',  qpId: 'apr2025', qNum: 'Q19b (Part B)', text: 'Explain about the principal sources of optimization.',                                                     topicId: 'cd5_1', marks: 10 },
      { id: 'cdq5_5',  qpId: 'apr2025', qNum: 'Q20a (Part B)', text: 'Explain about issues in design of a code generator.',                                                      topicId: 'cd5_2', marks: 8  },
      { id: 'cdq5_6',  qpId: 'apr2025', qNum: 'Q20b (Part B)', text: 'Explain about register and address descriptors.',                                                          topicId: 'cd5_7', marks: 6  },
      // ── Jun 2022 ──
      { id: 'cdq5_7',  qpId: 'jun2022', qNum: 'Q9 (Part A)',   text: 'Code motion with example.',                                                                                topicId: 'cd5_6', marks: 3  },
      { id: 'cdq5_8',  qpId: 'jun2022', qNum: 'Q10 (Part A)',  text: 'Algorithm for partitioning three-address instructions into basic blocks.',                                  topicId: 'cd5_3', marks: 3  },
      { id: 'cdq5_9',  qpId: 'jun2022', qNum: 'Q19a (Part B)', text: 'Explain loop optimization techniques with examples.',                                                       topicId: 'cd5_6', marks: 7  },
      { id: 'cdq5_10', qpId: 'jun2022', qNum: 'Q19b (Part B)', text: 'Explain code-improving transformations of a basic block.',                                                  topicId: 'cd5_3', marks: 7  },
      { id: 'cdq5_11', qpId: 'jun2022', qNum: 'Q20a (Part B)', text: 'Explain issues in design of a code generator.',                                                            topicId: 'cd5_2', marks: 6  },
      { id: 'cdq5_12', qpId: 'jun2022', qNum: 'Q20b (Part B)', text: 'Write code generation algorithm. Generate code for x=(a-b)+(a+c)+(a+c).',                                 topicId: 'cd5_5', marks: 8  },
      // ── Jun 2023 ──
      { id: 'cdq5_13', qpId: 'jun2023', qNum: 'Q9 (Part A)',   text: 'Common subexpression elimination with example.',                                                           topicId: 'cd5_8', marks: 3  },
      { id: 'cdq5_14', qpId: 'jun2023', qNum: 'Q10 (Part A)',  text: 'Peephole optimization role in compilation.',                                                               topicId: 'cd5_4', marks: 3  },
      { id: 'cdq5_15', qpId: 'jun2023', qNum: 'Q19a (Part B)', text: 'Explain different code optimization techniques.',                                                           topicId: 'cd5_1', marks: 8  },
      { id: 'cdq5_16', qpId: 'jun2023', qNum: 'Q19b (Part B)', text: 'Generate code sequence for d=(a-b)+(a-c)+(a-c).',                                                          topicId: 'cd5_5', marks: 6  },
      { id: 'cdq5_17', qpId: 'jun2023', qNum: 'Q20a (Part B)', text: 'Explain design issues of a code generator.',                                                               topicId: 'cd5_2', marks: 7  },
      { id: 'cdq5_18', qpId: 'jun2023', qNum: 'Q20b (Part B)', text: 'Illustrate optimization of basic blocks with examples.',                                                    topicId: 'cd5_3', marks: 7  },
      // ── May 2024 ──
      { id: 'cdq5_19', qpId: 'may2024', qNum: 'Q10 (Part A)',  text: 'Induction variable elimination for loop optimization.',                                                    topicId: 'cd5_6', marks: 3  },
      { id: 'cdq5_20', qpId: 'may2024', qNum: 'Q19a (Part B)', text: 'Explain any four principal sources of optimization.',                                                       topicId: 'cd5_1', marks: 8  },
      { id: 'cdq5_21', qpId: 'may2024', qNum: 'Q19b (Part B)', text: 'Basic block — structure-preserving transformations.',                                                       topicId: 'cd5_3', marks: 6  },
      { id: 'cdq5_22', qpId: 'may2024', qNum: 'Q20a (Part B)', text: 'Peephole optimization techniques with example.',                                                           topicId: 'cd5_4', marks: 8  },
      { id: 'cdq5_23', qpId: 'may2024', qNum: 'Q20b (Part B)', text: 'Three issues in design of a code generator.',                                                              topicId: 'cd5_2', marks: 6  },
    ],
  },
};
