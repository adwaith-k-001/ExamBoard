// Detailed data for HUT300 Industrial Economics & Foreign Trade — Modules 1–5
// Papers: April 2025, June 2022, June 2023, May 2024

export const IEFT_QPS = [
  { id: 'apr2025', label: 'Apr 2025' },
  { id: 'jun2022', label: 'Jun 2022' },
  { id: 'jun2023', label: 'Jun 2023' },
  { id: 'may2024', label: 'May 2024' },
];

export const IEFT_MODULE_DATA = {

  /* ══════════════════════════════════════════════════════════
     MODULE 1 — Basic Concepts and Demand & Supply Analysis
  ══════════════════════════════════════════════════════════ */
  1: {
    topics: [
      { id: 'ieft1_1', name: 'Law of Demand/Supply, Determinants & Equilibrium Price' },
      { id: 'ieft1_2', name: 'Production Possibility Curve (PPC) & Scarcity/Choice' },
      { id: 'ieft1_3', name: 'Elasticity of Demand (Price, Income, Cross)' },
      { id: 'ieft1_4', name: 'Utility & Law of Diminishing Marginal Utility (MU-TU)' },
      { id: 'ieft1_5', name: 'Types of Firms (Proprietorship, Joint Stock, Cooperative)' },
      { id: 'ieft1_6', name: 'Consumer/Producer Surplus, Taxation & Deadweight Loss' },
      { id: 'ieft1_7', name: 'Basic Economic Concepts (Scarcity, Opportunity Cost, Factors of Production)' },
    ],
    topicWeightage: {
      ieft1_1: 30, ieft1_2: 28, ieft1_3: 27, ieft1_4: 23,
      ieft1_5: 15, ieft1_6: 13, ieft1_7: 9,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'ieftq1_1',  qpId: 'apr2025', qNum: 'Q1 (Part A)',   text: 'What is proprietorship? Point out any two advantages of proprietorship.',                                           topicId: 'ieft1_5', marks: 3  },
      { id: 'ieftq1_2',  qpId: 'apr2025', qNum: 'Q2 (Part A)',   text: 'Prepare a demand schedule and explain the law of demand.',                                                           topicId: 'ieft1_1', marks: 3  },
      { id: 'ieftq1_3',  qpId: 'apr2025', qNum: 'Q11a (Part B)', text: 'What is marginal utility? Draw MU and TU curves and derive the relations between MU and TU.',                        topicId: 'ieft1_4', marks: 8  },
      { id: 'ieftq1_4',  qpId: 'apr2025', qNum: 'Q11b (Part B)', text: 'What is a cooperative society? State any three demerits of co-operative society.',                                   topicId: 'ieft1_5', marks: 6  },
      { id: 'ieftq1_5',  qpId: 'apr2025', qNum: 'Q12a (Part B)', text: 'How is the equilibrium price of a commodity determined? Explain the effect of an increase in demand on equilibrium price and quantity with a diagram.', topicId: 'ieft1_1', marks: 8  },
      { id: 'ieftq1_6',  qpId: 'apr2025', qNum: 'Q12b (Part B)', text: 'Monthly income Rs.50000 → 10 units. Income rises to Rs.60000 → 8 units. Estimate income elasticity and interpret. What type of commodity?',          topicId: 'ieft1_3', marks: 6  },
      // ── Jun 2022 ──
      { id: 'ieftq1_7',  qpId: 'jun2022', qNum: 'Q1 (Part A)',   text: 'Describe factors of production.',                                                                                    topicId: 'ieft1_7', marks: 3  },
      { id: 'ieftq1_8',  qpId: 'jun2022', qNum: 'Q2 (Part A)',   text: 'What should be the percentage change in price if sales are to be increased by 50% and price elasticity of demand is 2?', topicId: 'ieft1_3', marks: 3  },
      { id: 'ieftq1_9',  qpId: 'jun2022', qNum: 'Q3 (Part A)',   text: 'What is the economic significance of opportunity cost?',                                                               topicId: 'ieft1_7', marks: 3  },
      { id: 'ieftq1_10', qpId: 'jun2022', qNum: 'Q4 (Part A)',   text: 'Define marginal utility.',                                                                                            topicId: 'ieft1_4', marks: 3  },
      { id: 'ieftq1_11', qpId: 'jun2022', qNum: 'Q11a (Part B)', text: 'What is a production possibility curve? Using a PPC, explain (1) Under-utilization of resources (2) Full employment of resources.', topicId: 'ieft1_2', marks: 8  },
      { id: 'ieftq1_12', qpId: 'jun2022', qNum: 'Q11b (Part B)', text: 'What are the components of demand? State the law of demand.',                                                         topicId: 'ieft1_1', marks: 6  },
      { id: 'ieftq1_13', qpId: 'jun2022', qNum: 'Q12a (Part B)', text: 'Explain the law of diminishing marginal utility with a diagram.',                                                     topicId: 'ieft1_4', marks: 8  },
      { id: 'ieftq1_14', qpId: 'jun2022', qNum: 'Q12b (Part B)', text: 'State the law of supply and explain the determinants of supply.',                                                     topicId: 'ieft1_1', marks: 6  },
      // ── Jun 2023 ──
      { id: 'ieftq1_15', qpId: 'jun2023', qNum: 'Q1 (Part A)',   text: 'Describe about opportunity cost with an example.',                                                                    topicId: 'ieft1_7', marks: 3  },
      { id: 'ieftq1_16', qpId: 'jun2023', qNum: 'Q2 (Part A)',   text: 'List out the advantages and disadvantages of Joint Stock Company.',                                                   topicId: 'ieft1_5', marks: 3  },
      { id: 'ieftq1_17', qpId: 'jun2023', qNum: 'Q4 (Part A)',   text: 'Explain how equilibrium price of a commodity is determined.',                                                         topicId: 'ieft1_1', marks: 3  },
      { id: 'ieftq1_18', qpId: 'jun2023', qNum: 'Q11a (Part B)', text: 'What is a production possibility curve? Using a PPC, explain (i) Trade Off (ii) Why PPC is concave to the origin.',  topicId: 'ieft1_2', marks: 10 },
      { id: 'ieftq1_19', qpId: 'jun2023', qNum: 'Q11b (Part B)', text: 'Calculate the marginal utility from TU data: X=1–8, TU=11,19,26,31,34,36,36,30.',                                   topicId: 'ieft1_4', marks: 4  },
      { id: 'ieftq1_20', qpId: 'jun2023', qNum: 'Q12a (Part B)', text: 'With a diagram explain deadweight loss and how it relates to taxation. Explain how a tax affects consumer and producer surplus.', topicId: 'ieft1_6', marks: 10 },
      { id: 'ieftq1_21', qpId: 'jun2023', qNum: 'Q12b (Part B)', text: 'Price of coffee rises from Rs.4.50 to Rs.5 per 100g; demand for tea rises from 60 to 70. Find cross elasticity of demand.', topicId: 'ieft1_3', marks: 4  },
      // ── May 2024 ──
      { id: 'ieftq1_22', qpId: 'may2024', qNum: 'Q1 (Part A)',   text: 'Point out any three advantages of proprietorship.',                                                                   topicId: 'ieft1_5', marks: 3  },
      { id: 'ieftq1_23', qpId: 'may2024', qNum: 'Q2 (Part A)',   text: 'What is consumer surplus? Draw a diagram to represent consumer surplus.',                                             topicId: 'ieft1_6', marks: 3  },
      { id: 'ieftq1_24', qpId: 'may2024', qNum: 'Q11a (Part B)', text: 'What is a production possibility curve? How will you use a PPC to explain underutilisation, full employment and scarcity of resources?', topicId: 'ieft1_2', marks: 10 },
      { id: 'ieftq1_25', qpId: 'may2024', qNum: 'Q11b (Part B)', text: 'What is elasticity of demand? Explain at least two of its applications.',                                             topicId: 'ieft1_3', marks: 4  },
      { id: 'ieftq1_26', qpId: 'may2024', qNum: 'Q12a (Part B)', text: 'Draw demand curves for ep=0, ep=1, ep>1, ep<1. Price Rs.10 → 100 units; price Rs.8 → 120 units. Calculate price elasticity.', topicId: 'ieft1_3', marks: 10 },
      { id: 'ieftq1_27', qpId: 'may2024', qNum: 'Q12b (Part B)', text: 'Explain any four determinants of demand.',                                                                            topicId: 'ieft1_1', marks: 4  },
    ],
  },

  /* ══════════════════════════
     MODULE 2 — Production and Cost
  ══════════════════════════ */
  2: {
    topics: [
      { id: 'ieft2_1', name: 'Law of Variable Proportions (3 Stages of Production)' },
      { id: 'ieft2_2', name: 'Break-even Analysis & Break-even Point (Numerical)' },
      { id: 'ieft2_3', name: 'Production Function & Cobb-Douglas (Numericals)' },
      { id: 'ieft2_4', name: 'Cost Concepts & Short-run / Long-run Cost Curves' },
      { id: 'ieft2_5', name: 'Economies of Scale & Internal Economies' },
      { id: 'ieft2_6', name: 'Isoquants, Isocost & Producer Equilibrium' },
      { id: 'ieft2_7', name: 'Returns to Scale (Constant, Increasing, Decreasing)' },
      { id: 'ieft2_8', name: 'Shutdown Point & Revenue Concepts' },
    ],
    topicWeightage: {
      ieft2_1: 26, ieft2_2: 26, ieft2_3: 21, ieft2_4: 21,
      ieft2_5: 12, ieft2_6: 9,  ieft2_7: 8,  ieft2_8: 4,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'ieftq2_1',  qpId: 'apr2025', qNum: 'Q3 (Part A)',   text: 'What is social cost?',                                                                                                topicId: 'ieft2_4', marks: 3  },
      { id: 'ieftq2_2',  qpId: 'apr2025', qNum: 'Q4 (Part A)',   text: 'Cobb-Douglas production function represents constant returns to scale. Why?',                                         topicId: 'ieft2_3', marks: 3  },
      { id: 'ieftq2_3',  qpId: 'apr2025', qNum: 'Q13a (Part B)', text: 'What is returns to scale? How will you represent different returns to scale with isoquants?',                         topicId: 'ieft2_7', marks: 8  },
      { id: 'ieftq2_4',  qpId: 'apr2025', qNum: 'Q13b (Part B)', text: 'Complete the cost schedule: Units 1–4, given TFC=100 for unit 1, TC=180 for unit 2, AVC=30 for unit 3, MC=6 for unit 4.', topicId: 'ieft2_4', marks: 6  },
      { id: 'ieftq2_5',  qpId: 'apr2025', qNum: 'Q14a (Part B)', text: 'What do you mean by economies of scale? Explain any four types of internal economies.',                               topicId: 'ieft2_5', marks: 8  },
      { id: 'ieftq2_6',  qpId: 'apr2025', qNum: 'Q14b (Part B)', text: 'Fixed cost Rs.20000, TVC Rs.15000, monthly sales Rs.30000. Estimate break-even sales. For a profit of Rs.10000, what should be the sales?', topicId: 'ieft2_2', marks: 6  },
      // ── Jun 2022 ──
      { id: 'ieftq2_7',  qpId: 'jun2022', qNum: 'Q13a (Part B)', text: 'Discuss the cost-output relationship in the short-run and long-run.',                                                 topicId: 'ieft2_4', marks: 8  },
      { id: 'ieftq2_8',  qpId: 'jun2022', qNum: 'Q13b (Part B)', text: 'What are isoquant curves? State their properties.',                                                                   topicId: 'ieft2_6', marks: 6  },
      { id: 'ieftq2_9',  qpId: 'jun2022', qNum: 'Q14a (Part B)', text: 'Production function Q=2L^(1/2)K^(1/2), L=36: (1) How many units of capital to produce 60 units? (2) Q=2L^(1/2)K^(1/2): percentage increase in output if L increases by 10%, K constant.', topicId: 'ieft2_3', marks: 8  },
      { id: 'ieftq2_10', qpId: 'jun2022', qNum: 'Q14b (Part B)', text: 'Explain the law of variable proportions.',                                                                            topicId: 'ieft2_1', marks: 6  },
      // ── Jun 2023 ──
      { id: 'ieftq2_11', qpId: 'jun2023', qNum: 'Q3 (Part A)',   text: 'Production function Q=2K^0.25 L^0.75, L=5 units, K=5 units. Calculate output. If L reduces by 10%, how much K must increase to keep same output?', topicId: 'ieft2_3', marks: 3  },
      { id: 'ieftq2_12', qpId: 'jun2023', qNum: 'Q13a (Part B)', text: '(i) Explain break-even analysis with a diagram. (ii) Sales Rs.80000, Fixed Cost Rs.15000, Variable cost Rs.35000. Find: (a) Breakeven Sales (b) Contribution (c) Margin of Safety (d) Profit.', topicId: 'ieft2_2', marks: 10 },
      { id: 'ieftq2_13', qpId: 'jun2023', qNum: 'Q13b (Part B)', text: 'If AVC < P < AC, will the firm shutdown or continue to produce in the short run? Explain with a diagram.',          topicId: 'ieft2_8', marks: 4  },
      { id: 'ieftq2_14', qpId: 'jun2023', qNum: 'Q14a (Part B)', text: 'Diagrammatically explain the law of variable proportions.',                                                           topicId: 'ieft2_1', marks: 10 },
      { id: 'ieftq2_15', qpId: 'jun2023', qNum: 'Q14b (Part B)', text: "TC = 4500 + 10Q + 25Q². Write expressions for (a) AFC (b) AVC (c) AC (d) MC.",                                     topicId: 'ieft2_4', marks: 4  },
      // ── May 2024 ──
      { id: 'ieftq2_16', qpId: 'may2024', qNum: 'Q3 (Part A)',   text: 'Describe production function.',                                                                                       topicId: 'ieft2_3', marks: 3  },
      { id: 'ieftq2_17', qpId: 'may2024', qNum: 'Q4 (Part A)',   text: 'State any three properties of an isoquant.',                                                                          topicId: 'ieft2_6', marks: 3  },
      { id: 'ieftq2_18', qpId: 'may2024', qNum: 'Q13a (Part B)', text: 'State the law of variable proportion. Examine its three stages of production with the help of a diagram.',            topicId: 'ieft2_1', marks: 10 },
      { id: 'ieftq2_19', qpId: 'may2024', qNum: 'Q13b (Part B)', text: 'Briefly explain any four types of internal economies from large scale production.',                                   topicId: 'ieft2_5', marks: 4  },
      { id: 'ieftq2_20', qpId: 'may2024', qNum: 'Q14a (Part B)', text: 'Draw a break-even chart and explain break-even point. FC=Rs.50000, price=Rs.100/unit, AVC=Rs.50. Estimate break-even output. If 1500 units sold, find profit and margin of safety.', topicId: 'ieft2_2', marks: 10 },
      { id: 'ieftq2_21', qpId: 'may2024', qNum: 'Q14b (Part B)', text: 'Q=AK^0.5 L^0.5, K=100 units, L=64 units, A=2. Calculate total product and marginal product of capital.',            topicId: 'ieft2_3', marks: 4  },
    ],
  },

  /* ══════════════════════════
     MODULE 3 — Market Structure
  ══════════════════════════ */
  3: {
    topics: [
      { id: 'ieft3_2', name: 'Market Structure Comparison (PC vs Monopoly vs MC vs Oligopoly)' },
      { id: 'ieft3_1', name: 'Pricing Methods (Cost-plus, Skimming, Penetration, Predatory, Going Rate)' },
      { id: 'ieft3_3', name: 'Oligopoly (Kinked Demand Curve, Collusive Oligopoly, Non-price Competition)' },
      { id: 'ieft3_4', name: 'Perfect Competition (Features, Equilibrium, Profit/Loss with Diagrams)' },
      { id: 'ieft3_5', name: 'Monopolistic Competition (Features, Equilibrium, Supernormal Profit)' },
    ],
    topicWeightage: {
      ieft3_2: 39, ieft3_1: 35, ieft3_3: 29, ieft3_4: 22, ieft3_5: 11,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'ieftq3_1',  qpId: 'apr2025', qNum: 'Q5 (Part A)',   text: 'What are the conditions of equilibrium of a firm under the MC, MR approach?',                                        topicId: 'ieft3_4', marks: 3  },
      { id: 'ieftq3_2',  qpId: 'apr2025', qNum: 'Q6 (Part A)',   text: 'What is selling price?',                                                                                              topicId: 'ieft3_1', marks: 3  },
      { id: 'ieftq3_3',  qpId: 'apr2025', qNum: 'Q15a (Part B)', text: 'Suppose a firm under monopolistic competition is earning supernormal profit when in equilibrium. Explain with a diagram.', topicId: 'ieft3_5', marks: 8  },
      { id: 'ieftq3_4',  qpId: 'apr2025', qNum: 'Q15b (Part B)', text: 'Examine the features of perfect competition.',                                                                        topicId: 'ieft3_4', marks: 6  },
      { id: 'ieftq3_5',  qpId: 'apr2025', qNum: 'Q16a (Part B)', text: 'Make a comparison between the demand curve of a monopolist and a firm under monopolistic competition. How are monopolies regulated?', topicId: 'ieft3_2', marks: 8  },
      { id: 'ieftq3_6',  qpId: 'apr2025', qNum: 'Q16b (Part B)', text: 'What are the features of oligopoly?',                                                                                 topicId: 'ieft3_3', marks: 6  },
      // ── Jun 2022 ──
      { id: 'ieftq3_7',  qpId: 'jun2022', qNum: 'Q5 (Part A)',   text: 'What are the features of perfect competition?',                                                                       topicId: 'ieft3_4', marks: 3  },
      { id: 'ieftq3_8',  qpId: 'jun2022', qNum: 'Q6 (Part A)',   text: 'Define market structure.',                                                                                             topicId: 'ieft3_2', marks: 3  },
      { id: 'ieftq3_9',  qpId: 'jun2022', qNum: 'Q15a (Part B)', text: 'Compare the market situation of perfect competition with monopoly.',                                                  topicId: 'ieft3_2', marks: 8  },
      { id: 'ieftq3_10', qpId: 'jun2022', qNum: 'Q15b (Part B)', text: 'What is collusive oligopoly?',                                                                                        topicId: 'ieft3_3', marks: 6  },
      { id: 'ieftq3_11', qpId: 'jun2022', qNum: 'Q16a (Part B)', text: 'What is pricing and what are the different methods used for pricing?',                                                topicId: 'ieft3_1', marks: 8  },
      { id: 'ieftq3_12', qpId: 'jun2022', qNum: 'Q16b (Part B)', text: 'Explain kinked demand curve.',                                                                                        topicId: 'ieft3_3', marks: 6  },
      // ── Jun 2023 ──
      { id: 'ieftq3_13', qpId: 'jun2023', qNum: 'Q5 (Part A)',   text: 'Elucidate the features of monopolistic competition.',                                                                 topicId: 'ieft3_5', marks: 3  },
      { id: 'ieftq3_14', qpId: 'jun2023', qNum: 'Q6 (Part A)',   text: 'Explain cost-plus pricing.',                                                                                          topicId: 'ieft3_1', marks: 3  },
      { id: 'ieftq3_15', qpId: 'jun2023', qNum: 'Q15a (Part B)', text: 'Compare the market structures: perfect competition, monopoly and oligopoly.',                                         topicId: 'ieft3_2', marks: 10 },
      { id: 'ieftq3_16', qpId: 'jun2023', qNum: 'Q15b (Part B)', text: 'What is price skimming?',                                                                                             topicId: 'ieft3_1', marks: 4  },
      { id: 'ieftq3_17', qpId: 'jun2023', qNum: 'Q16a (Part B)', text: 'Describe product pricing and explain the different methods used for pricing.',                                        topicId: 'ieft3_1', marks: 10 },
      { id: 'ieftq3_18', qpId: 'jun2023', qNum: 'Q16b (Part B)', text: 'Explain kinked demand curve.',                                                                                        topicId: 'ieft3_3', marks: 4  },
      // ── May 2024 ──
      { id: 'ieftq3_19', qpId: 'may2024', qNum: 'Q5 (Part A)',   text: 'List out any six non-price competition methods followed in oligopoly.',                                               topicId: 'ieft3_3', marks: 3  },
      { id: 'ieftq3_20', qpId: 'may2024', qNum: 'Q6 (Part A)',   text: 'What is price skimming?',                                                                                             topicId: 'ieft3_1', marks: 3  },
      { id: 'ieftq3_21', qpId: 'may2024', qNum: 'Q15a (Part B)', text: 'What is perfect competition? Examine the situations of loss, normal profit and super normal profit under perfect competition with diagrams.', topicId: 'ieft3_4', marks: 10 },
      { id: 'ieftq3_22', qpId: 'may2024', qNum: 'Q15b (Part B)', text: 'What is collusive oligopoly?',                                                                                        topicId: 'ieft3_3', marks: 4  },
      { id: 'ieftq3_23', qpId: 'may2024', qNum: 'Q16a (Part B)', text: 'Point out any four differences between monopoly and monopolistic competition. Draw and compare the demand curves.',   topicId: 'ieft3_2', marks: 10 },
      { id: 'ieftq3_24', qpId: 'may2024', qNum: 'Q16b (Part B)', text: 'Distinguish between predatory pricing and penetration pricing.',                                                      topicId: 'ieft3_1', marks: 4  },
    ],
  },

  /* ══════════════════════════════
     MODULE 4 — Macroeconomic Concepts
  ══════════════════════════════ */
  4: {
    topics: [
      { id: 'ieft4_1', name: 'Inflation (Demand Pull, Cost Push, Monetary & Fiscal Policy Measures)' },
      { id: 'ieft4_2', name: 'National Income — Methods (Expenditure, Income, Product)' },
      { id: 'ieft4_5', name: 'Business Financing (Bonds, Shares, Demat Account, Stock Market)' },
      { id: 'ieft4_3', name: 'National Income Calculations (GDP, GNP, NDP, NNP Numericals)' },
      { id: 'ieft4_4', name: 'Circular Flow of Income (Two-sector & Four-sector Models)' },
      { id: 'ieft4_6', name: 'GDP/GNP Concepts (Stocks & Flows, Three Sectors of Economy)' },
      { id: 'ieft4_7', name: 'Difficulties in Measurement of National Income' },
    ],
    topicWeightage: {
      ieft4_1: 44, ieft4_2: 29, ieft4_5: 16, ieft4_3: 14,
      ieft4_4: 14, ieft4_6: 13, ieft4_7: 6,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'ieftq4_1',  qpId: 'apr2025', qNum: 'Q7 (Part A)',   text: 'How will you overcome the difficulty of double counting in GDP estimation under the product method?',                 topicId: 'ieft4_2', marks: 3  },
      { id: 'ieftq4_2',  qpId: 'apr2025', qNum: 'Q8 (Part A)',   text: 'Distinguish between trading account and demat account.',                                                              topicId: 'ieft4_5', marks: 3  },
      { id: 'ieftq4_3',  qpId: 'apr2025', qNum: 'Q17a (Part B)', text: 'Explain the expenditure method of measuring national income.',                                                        topicId: 'ieft4_2', marks: 8  },
      { id: 'ieftq4_4',  qpId: 'apr2025', qNum: 'Q17b (Part B)', text: 'Estimate NDPmp, NNPmp, NNPfc and GNPmp from: GDPmp=8000, Depreciation=2000, NFIA=(-500), Indirect taxes=1000, Subsidy=500, Net Export=500 (all in crores).', topicId: 'ieft4_3', marks: 6  },
      { id: 'ieftq4_5',  qpId: 'apr2025', qNum: 'Q18a (Part B)', text: 'Explain demand pull and cost push inflation with the help of diagrams.',                                              topicId: 'ieft4_1', marks: 10 },
      { id: 'ieftq4_6',  qpId: 'apr2025', qNum: 'Q18b (Part B)', text: 'Estimate NDPfc and National Income: Wages=3000, Rent=1000, Interest=500, Profit=1000, NFIA=(-500), Depreciation=1000, Net indirect taxes=200.', topicId: 'ieft4_3', marks: 4  },
      // ── Jun 2022 ──
      { id: 'ieftq4_7',  qpId: 'jun2022', qNum: 'Q7 (Part A)',   text: 'Differentiate between GDP and GNP.',                                                                                  topicId: 'ieft4_6', marks: 3  },
      { id: 'ieftq4_8',  qpId: 'jun2022', qNum: 'Q8 (Part A)',   text: 'What is money market? Define its functions.',                                                                         topicId: 'ieft4_5', marks: 3  },
      { id: 'ieftq4_9',  qpId: 'jun2022', qNum: 'Q17a (Part B)', text: 'Explain the methods of national income calculation.',                                                                 topicId: 'ieft4_2', marks: 8  },
      { id: 'ieftq4_10', qpId: 'jun2022', qNum: 'Q17b (Part B)', text: 'What are the difficulties in the measurement of national income?',                                                    topicId: 'ieft4_7', marks: 6  },
      { id: 'ieftq4_11', qpId: 'jun2022', qNum: 'Q18a (Part B)', text: 'What is inflation and what are the fiscal policy measures to control inflation?',                                     topicId: 'ieft4_1', marks: 8  },
      { id: 'ieftq4_12', qpId: 'jun2022', qNum: 'Q18b (Part B)', text: 'What is repo rate and how does it control inflation?',                                                                topicId: 'ieft4_1', marks: 6  },
      // ── Jun 2023 ──
      { id: 'ieftq4_13', qpId: 'jun2023', qNum: 'Q7 (Part A)',   text: 'Differentiate between GDP and GNP.',                                                                                  topicId: 'ieft4_6', marks: 3  },
      { id: 'ieftq4_14', qpId: 'jun2023', qNum: 'Q8 (Part A)',   text: 'Write a note on stock indices in India.',                                                                              topicId: 'ieft4_5', marks: 3  },
      { id: 'ieftq4_15', qpId: 'jun2023', qNum: 'Q17a (Part B)', text: 'Explain in detail the circular flow of income in a four sector model with a neat diagram.',                           topicId: 'ieft4_4', marks: 10 },
      { id: 'ieftq4_16', qpId: 'jun2023', qNum: 'Q17b (Part B)', text: 'Estimate GDPmp, GNPmp and National Income: Private consumption=2000, Govt consumption=500, NFIA=(-300), Investment=800, Net exports=700, Depreciation=400, Net indirect tax=300 (000 crores).', topicId: 'ieft4_3', marks: 4  },
      { id: 'ieftq4_17', qpId: 'jun2023', qNum: 'Q18a (Part B)', text: 'Define inflation and explain cost push and demand pull inflation. Are monetary or fiscal measures more effective in controlling inflation?', topicId: 'ieft4_1', marks: 10 },
      { id: 'ieftq4_18', qpId: 'jun2023', qNum: 'Q18b (Part B)', text: 'Write notes on: (i) Bonds and Shares (ii) Demat Account.',                                                           topicId: 'ieft4_5', marks: 4  },
      // ── May 2024 ──
      { id: 'ieftq4_19', qpId: 'may2024', qNum: 'Q7 (Part A)',   text: 'What are stocks and flows in an economy?',                                                                            topicId: 'ieft4_6', marks: 3  },
      { id: 'ieftq4_20', qpId: 'may2024', qNum: 'Q8 (Part A)',   text: 'Distinguish between a bond and a share.',                                                                             topicId: 'ieft4_5', marks: 3  },
      { id: 'ieftq4_21', qpId: 'may2024', qNum: 'Q17a (Part B)', text: 'Calculate national income using both expenditure and income methods: Consumption=500, Investment=400, Govt expenditure=200, Net exports=50, Wages=600, Rent=100, Interest=150, Profits=200, NFIA=(-50), Depreciation=50, Net Indirect tax=50 (Rs. Crores).', topicId: 'ieft4_2', marks: 10 },
      { id: 'ieftq4_22', qpId: 'may2024', qNum: 'Q17b (Part B)', text: 'List out any four activities coming under Primary and Tertiary sectors.',                                             topicId: 'ieft4_6', marks: 4  },
      { id: 'ieftq4_23', qpId: 'may2024', qNum: 'Q18a (Part B)', text: 'Diagrammatically explain demand pull inflation. What are the quantitative measures taken by a central bank to control inflation?', topicId: 'ieft4_1', marks: 10 },
      { id: 'ieftq4_24', qpId: 'may2024', qNum: 'Q18b (Part B)', text: 'Examine the circular flow of economic activities in a two sector model with saving and investment.',                  topicId: 'ieft4_4', marks: 4  },
    ],
  },

  /* ══════════════════════════
     MODULE 5 — International Trade
  ══════════════════════════ */
  5: {
    topics: [
      { id: 'ieft5_3', name: 'Free Trade vs Protectionism & Advantages/Disadvantages of Foreign Trade' },
      { id: 'ieft5_2', name: 'Comparative Advantage Theory (Absolute vs Comparative, Numericals)' },
      { id: 'ieft5_1', name: 'Balance of Payments (Components, Current Account, BOP vs BOT)' },
      { id: 'ieft5_4', name: 'BOP Deficit & Devaluation (Measures, Marshall-Lerner Condition)' },
      { id: 'ieft5_5', name: 'Heckscher-Ohlin Theory of International Trade' },
      { id: 'ieft5_6', name: 'Trade Policy (Tariffs, Quotas, Non-tariff Barriers)' },
    ],
    topicWeightage: {
      ieft5_3: 45, ieft5_2: 28, ieft5_1: 24, ieft5_4: 21, ieft5_5: 11, ieft5_6: 7,
    },
    pyqQuestions: [
      // ── Apr 2025 ──
      { id: 'ieftq5_1',  qpId: 'apr2025', qNum: 'Q9 (Part A)',   text: 'State any three disadvantages of foreign trade.',                                                                     topicId: 'ieft5_3', marks: 3  },
      { id: 'ieftq5_2',  qpId: 'apr2025', qNum: 'Q10 (Part A)',  text: 'Differentiate between import quotas and tariffs.',                                                                    topicId: 'ieft5_6', marks: 3  },
      { id: 'ieftq5_3',  qpId: 'apr2025', qNum: 'Q19a (Part B)', text: 'Examine the comparative cost theory with a numerical example.',                                                       topicId: 'ieft5_2', marks: 8  },
      { id: 'ieftq5_4',  qpId: 'apr2025', qNum: 'Q19b (Part B)', text: 'Point out any five advantages and disadvantages of foreign trade.',                                                   topicId: 'ieft5_3', marks: 6  },
      { id: 'ieftq5_5',  qpId: 'apr2025', qNum: 'Q20a (Part B)', text: 'Distinguish between balance of payments and balance of trade. Explain the components of balance of payments.',       topicId: 'ieft5_1', marks: 8  },
      { id: 'ieftq5_6',  qpId: 'apr2025', qNum: 'Q20b (Part B)', text: 'State the case for and against free trade.',                                                                         topicId: 'ieft5_3', marks: 6  },
      // ── Jun 2022 ──
      { id: 'ieftq5_7',  qpId: 'jun2022', qNum: 'Q9 (Part A)',   text: 'What do you mean by BOP?',                                                                                           topicId: 'ieft5_1', marks: 3  },
      { id: 'ieftq5_8',  qpId: 'jun2022', qNum: 'Q10 (Part A)',  text: 'What is free trade and what are its advantages?',                                                                    topicId: 'ieft5_3', marks: 3  },
      { id: 'ieftq5_9',  qpId: 'jun2022', qNum: 'Q19a (Part B)', text: 'State and explain the Heckscher-Ohlin theory of international trade.',                                               topicId: 'ieft5_5', marks: 8  },
      { id: 'ieftq5_10', qpId: 'jun2022', qNum: 'Q19b (Part B)', text: 'What do you mean by devaluation? Explain the conditions for its success.',                                           topicId: 'ieft5_4', marks: 6  },
      { id: 'ieftq5_11', qpId: 'jun2022', qNum: 'Q20a (Part B)', text: 'Explain any four measures to solve the problem of deficit in the balance of payments.',                               topicId: 'ieft5_4', marks: 8  },
      { id: 'ieftq5_12', qpId: 'jun2022', qNum: 'Q20b (Part B)', text: 'List any six arguments in support of protectionism.',                                                                 topicId: 'ieft5_3', marks: 6  },
      // ── Jun 2023 ──
      { id: 'ieftq5_13', qpId: 'jun2023', qNum: 'Q9 (Part A)',   text: 'Explain Heckscher-Ohlin theory.',                                                                                    topicId: 'ieft5_5', marks: 3  },
      { id: 'ieftq5_14', qpId: 'jun2023', qNum: 'Q10 (Part A)',  text: 'Summarize on Balance of Invisibles.',                                                                                topicId: 'ieft5_1', marks: 3  },
      { id: 'ieftq5_15', qpId: 'jun2023', qNum: 'Q19a (Part B)', text: 'Compare the theory of absolute advantage and the theory of comparative advantage with examples.',                    topicId: 'ieft5_2', marks: 10 },
      { id: 'ieftq5_16', qpId: 'jun2023', qNum: 'Q19b (Part B)', text: 'Examine any two effects of tariff in international trade.',                                                          topicId: 'ieft5_6', marks: 4  },
      { id: 'ieftq5_17', qpId: 'jun2023', qNum: 'Q20a (Part B)', text: 'Differentiate between free trade and protectionism. Also discuss on the current account component of balance of payments.', topicId: 'ieft5_3', marks: 10 },
      { id: 'ieftq5_18', qpId: 'jun2023', qNum: 'Q20b (Part B)', text: 'What do you mean by devaluation? Explain the conditions for its success.',                                           topicId: 'ieft5_4', marks: 4  },
      // ── May 2024 ──
      { id: 'ieftq5_19', qpId: 'may2024', qNum: 'Q9 (Part A)',   text: 'Point out any three advantages and disadvantages of foreign trade.',                                                  topicId: 'ieft5_3', marks: 3  },
      { id: 'ieftq5_20', qpId: 'may2024', qNum: 'Q10 (Part A)',  text: 'What is Marshall-Lerner condition?',                                                                                 topicId: 'ieft5_4', marks: 3  },
      { id: 'ieftq5_21', qpId: 'may2024', qNum: 'Q19a (Part B)', text: 'What is balance of payments? Briefly explain the components of balance of payments.',                                topicId: 'ieft5_1', marks: 10 },
      { id: 'ieftq5_22', qpId: 'may2024', qNum: 'Q19b (Part B)', text: 'Point out any four arguments in favour of protection.',                                                               topicId: 'ieft5_3', marks: 4  },
      { id: 'ieftq5_23', qpId: 'may2024', qNum: 'Q20a (Part B)', text: 'Examine comparative cost theory with the help of a numerical example.',                                              topicId: 'ieft5_2', marks: 10 },
      { id: 'ieftq5_24', qpId: 'may2024', qNum: 'Q20b (Part B)', text: 'What is free trade? Point out any three arguments in favour of free trade.',                                         topicId: 'ieft5_3', marks: 4  },
    ],
  },
};
