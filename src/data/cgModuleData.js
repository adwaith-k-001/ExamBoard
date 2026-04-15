// Detailed data for CG Modules 1–5
// Topics ordered by descending mark weightage (most important first)

export const CG_QPS = [
  { id: 'apr2025', label: 'Apr 2025' },
  { id: 'jun2023', label: 'Jun 2023' },
  { id: 'may2024', label: 'May 2024' },
  { id: 'jun2022', label: 'Jun 2022' },
];

export const CG_MODULE_DATA = {

  /* ══════════════════════════════════════════
     MODULE 1 — Basics of CG and Algorithms
  ══════════════════════════════════════════ */
  1: {
    topics: [
      { id: 't1_3', name: 'Raster Scan Displays and Systems' },
      { id: 't1_6', name: "Line Drawing — Bresenham's" },
      { id: 't1_5', name: 'Line Drawing — DDA' },
      { id: 't1_4', name: 'Random Scan Displays and Systems' },
      { id: 't1_1', name: 'Basics of CG and Applications' },
      { id: 't1_7', name: 'Circle Drawing — Midpoint Circle' },
      { id: 't1_8', name: "Circle Drawing — Bresenham's Circle" },
      { id: 't1_2', name: 'Video Display Devices — Refresh CRT' },
    ],
    topicWeightage: {
      t1_3: 30, t1_6: 27, t1_5: 27, t1_4: 14,
      t1_1: 13, t1_7: 11, t1_8: 7,  t1_2: 7,
    },
    pyqQuestions: [
      { id: 'q1_1',  qpId: 'apr2025', qNum: 'Q1 (Part A)',  text: 'Explain the pixel, resolution and aspect ratio of a display screen.',                                                                                          topicId: 't1_3', marks: 3 },
      { id: 'q1_2',  qpId: 'apr2025', qNum: 'Q2 (Part A)',  text: 'Describe the beam-penetration technique in CRT displays. How does it contribute to color generation?',                                                          topicId: 't1_2', marks: 3 },
      { id: 'q1_3',  qpId: 'apr2025', qNum: 'Q11a (Part B)', text: 'Describe the raster scan display system. How does it generate images on the screen, and what role does refresh rate play in its functioning?',                 topicId: 't1_3', marks: 8 },
      { id: 'q1_4',  qpId: 'apr2025', qNum: 'Q11b (Part B)', text: "Plot a line using Bresenham's Line Drawing Algorithm for coordinates (2, 3) to (10, 8). Show step-by-step calculations.",                                     topicId: 't1_6', marks: 6 },
      { id: 'q1_5',  qpId: 'apr2025', qNum: 'Q12a (Part B)', text: 'Apply the DDA Algorithm to draw a line between (2,4) and (7,8). Show step-by-step calculations.',                                                             topicId: 't1_5', marks: 6 },
      { id: 'q1_6',  qpId: 'apr2025', qNum: 'Q12b (Part B)', text: 'Explain the Random Scan Display System in detail. How does it differ from the Raster Scan Display System?',                                                   topicId: 't1_4', marks: 8 },
      { id: 'q1_7',  qpId: 'jun2022', qNum: 'Q1 (Part A)',  text: 'How many bits are required for 1024×1024 raster with each pixel being represented by 24 bits?',                                                               topicId: 't1_3', marks: 3 },
      { id: 'q1_8',  qpId: 'jun2022', qNum: 'Q2 (Part A)',  text: 'Derive the initial decision parameter of Midpoint Circle drawing algorithm.',                                                                                   topicId: 't1_7', marks: 3 },
      { id: 'q1_9',  qpId: 'jun2022', qNum: 'Q11a (Part B)', text: "Compute intermediate points to rasterize a line segment from (1,7) to (5,9) using Bresenham's algorithm.",                                                    topicId: 't1_6', marks: 6 },
      { id: 'q1_10', qpId: 'jun2022', qNum: 'Q11b (Part B)', text: 'Use the Midpoint circle drawing algorithm to plot a circle with radius 8 and centre at (6,5).',                                                               topicId: 't1_7', marks: 8 },
      { id: 'q1_11', qpId: 'jun2022', qNum: 'Q12a (Part B)', text: 'Explain the working of the random scan display system and draw its architecture diagram.',                                                                     topicId: 't1_4', marks: 6 },
      { id: 'q1_12', qpId: 'jun2022', qNum: 'Q12b (Part B)', text: 'Apply the DDA line drawing algorithm to rasterize a line from (2,8) to (12,18).',                                                                            topicId: 't1_5', marks: 8 },
      { id: 'q1_13', qpId: 'jun2023', qNum: 'Q1 (Part A)',  text: 'Differentiate the aspect ratio and resolution of a raster scan display.',                                                                                      topicId: 't1_3', marks: 3 },
      { id: 'q1_14', qpId: 'jun2023', qNum: 'Q2 (Part A)',  text: 'List out the applications of computer graphics.',                                                                                                               topicId: 't1_1', marks: 3 },
      { id: 'q1_15', qpId: 'jun2023', qNum: 'Q11a (Part B)', text: 'Explain the architecture of raster scan system with suitable diagrams.',                                                                                       topicId: 't1_3', marks: 6 },
      { id: 'q1_16', qpId: 'jun2023', qNum: 'Q11b (Part B)', text: "Rasterize the line from (1, 1) to (8, 5) using Bresenham's line drawing algorithm.",                                                                          topicId: 't1_6', marks: 8 },
      { id: 'q1_17', qpId: 'jun2023', qNum: 'Q12a (Part B)', text: 'Scan convert the line from (0,0) to (10,5) using DDA algorithm. Discuss its advantages and disadvantages.',                                                   topicId: 't1_5', marks: 10 },
      { id: 'q1_18', qpId: 'jun2023', qNum: 'Q12b (Part B)', text: 'Describe the working of a beam penetration CRT.',                                                                                                             topicId: 't1_2', marks: 4 },
      { id: 'q1_19', qpId: 'may2024', qNum: 'Q1 (Part A)',  text: 'Write any three applications of computer graphics.',                                                                                                           topicId: 't1_1', marks: 3 },
      { id: 'q1_20', qpId: 'may2024', qNum: 'Q2 (Part A)',  text: 'Find the points in the line from (5, 6) to (8, 12) using the DDA algorithm.',                                                                                 topicId: 't1_5', marks: 3 },
      { id: 'q1_21', qpId: 'may2024', qNum: 'Q11a (Part B)', text: 'Explain any seven applications of computer graphics.',                                                                                                        topicId: 't1_1', marks: 7 },
      { id: 'q1_22', qpId: 'may2024', qNum: 'Q11b (Part B)', text: "Write Bresenham's circle drawing algorithm. Find points in first quadrant with centre (0,0) and radius 8.",                                                   topicId: 't1_8', marks: 7 },
      { id: 'q1_23', qpId: 'may2024', qNum: 'Q12a (Part B)', text: 'Explain the working of the raster scan system with suitable figures.',                                                                                        topicId: 't1_3', marks: 7 },
      { id: 'q1_24', qpId: 'may2024', qNum: 'Q12b (Part B)', text: "Explain Bresenham's line drawing algorithm with the help of an example.",                                                                                    topicId: 't1_6', marks: 7 },
    ],
  },

  /* ══════════════════════════════════════════════════════
     MODULE 2 — Filled Area Primitives and Transformations
  ══════════════════════════════════════════════════════ */
  2: {
    topics: [
      { id: 't2_9',  name: 'Composite Transformations & Homogeneous Coordinates' },
      { id: 't2_1',  name: 'Filled Area — Scan Line Polygon Filling' },
      { id: 't2_5',  name: '2D Transformations — Rotation' },
      { id: 't2_2',  name: 'Filled Area — Boundary Filling' },
      { id: 't2_10', name: 'Basic 3D Transformations' },
      { id: 't2_7',  name: '2D Transformations — Reflection' },
      { id: 't2_3',  name: 'Filled Area — Flood Filling' },
      { id: 't2_6',  name: '2D Transformations — Scaling' },
      { id: 't2_4',  name: '2D Transformations — Translation' },
      { id: 't2_8',  name: '2D Transformations — Shearing' },
    ],
    topicWeightage: {
      t2_9: 38, t2_1: 29, t2_5: 21, t2_2: 18, t2_10: 18,
      t2_7: 13, t2_3: 10, t2_6: 3,  t2_4: 0,  t2_8: 0,
    },
    pyqQuestions: [
      { id: 'q2_1',  qpId: 'apr2025', qNum: 'Q3 (Part A)',  text: 'List the fundamental types of 3D transformations in computer graphics.',                                                                                        topicId: 't2_10', marks: 3 },
      { id: 'q2_2',  qpId: 'apr2025', qNum: 'Q4 (Part A)',  text: 'A triangle A(2, 3), B(5, 4), C(4, 1) is rotated counter clockwise by 45° about the origin. Determine the new coordinates.',                                    topicId: 't2_5',  marks: 3 },
      { id: 'q2_3',  qpId: 'apr2025', qNum: 'Q13a (Part B)', text: 'Explain the Boundary Fill Algorithm, its working principle, and step-by-step process. Compare 4-connected and 8-connected approaches.',                       topicId: 't2_2',  marks: 8 },
      { id: 'q2_4',  qpId: 'apr2025', qNum: 'Q13b (Part B)', text: 'Triangle A(2,2) B(5,2) C(3,4): i) Translate by (4,3). ii) Scale by (1.5, 0.75). Determine final coordinates.',                                               topicId: 't2_9',  marks: 6 },
      { id: 'q2_5',  qpId: 'apr2025', qNum: 'Q14a (Part B)', text: 'Compare the Scan Line Algorithm and the Flood Fill Algorithm. Discuss their working principles, advantages, and limitations.',                                 topicId: 't2_1',  marks: 7 },
      { id: 'q2_6',  qpId: 'apr2025', qNum: 'Q14b (Part B)', text: 'Prove that two successive 2D rotations are additive and two successive 2D scalings are multiplicative. Derive transformation matrices.',                       topicId: 't2_9',  marks: 7 },
      { id: 'q2_7',  qpId: 'jun2022', qNum: 'Q3 (Part A)',  text: 'Explain the non-zero winding number rule to identify the interior regions of a polygon.',                                                                       topicId: 't2_1',  marks: 3 },
      { id: 'q2_8',  qpId: 'jun2022', qNum: 'Q4 (Part A)',  text: 'Write the boundary fill algorithm for filling a polygon using four connected approach.',                                                                        topicId: 't2_2',  marks: 3 },
      { id: 'q2_9',  qpId: 'jun2022', qNum: 'Q13a (Part B)', text: 'Perform 60° CCW rotation of triangle A(4,4) B(12,4) C(4,10) about origin. Draw original and resultant triangles.',                                             topicId: 't2_5',  marks: 8 },
      { id: 'q2_10', qpId: 'jun2022', qNum: 'Q13b (Part B)', text: 'Explain steps in scaling a 3D object wrt fixed point (x,y,z). Derive the composite transformation matrix.',                                                   topicId: 't2_10', marks: 6 },
      { id: 'q2_11', qpId: 'jun2022', qNum: 'Q14a (Part B)', text: 'Perform on line A(3,5) B(6,9): i) Translate 2 in x and 3 in y. ii) Rotate 45° CCW about origin.',                                                            topicId: 't2_9',  marks: 8 },
      { id: 'q2_12', qpId: 'jun2022', qNum: 'Q14b (Part B)', text: '3D reflection about zy, xy and xz planes. Give the transformation matrices.',                                                                                 topicId: 't2_10', marks: 6 },
      { id: 'q2_13', qpId: 'jun2023', qNum: 'Q3 (Part A)',  text: 'Write down the 4-neighbour Flood-filling algorithm.',                                                                                                           topicId: 't2_3',  marks: 3 },
      { id: 'q2_14', qpId: 'jun2023', qNum: 'Q4 (Part A)',  text: 'Describe the basic 3-Dimension transformations.',                                                                                                               topicId: 't2_10', marks: 3 },
      { id: 'q2_15', qpId: 'jun2023', qNum: 'Q13a (Part B)', text: 'Compare purpose of flood-fill and boundary-fill. Discuss data structures used for scan-line polygon filling.',                                                 topicId: 't2_1',  marks: 8 },
      { id: 'q2_16', qpId: 'jun2023', qNum: 'Q13b (Part B)', text: 'Triangle A(20,10) B(80,20) C(50,70): find coordinates after (a) Reflection about x=y, (b) Reflection about y=−x.',                                           topicId: 't2_7',  marks: 6 },
      { id: 'q2_17', qpId: 'jun2023', qNum: 'Q14a (Part B)', text: 'Triangle (2,2)(10,2)(2,10): i) Scale wrt (2,2) by (2,2). ii) Rotate 90° CCW. Find resultant vertices.',                                                       topicId: 't2_9',  marks: 10 },
      { id: 'q2_18', qpId: 'jun2023', qNum: 'Q14b (Part B)', text: 'Discuss the techniques used to identify inside and outside points of a polygon.',                                                                              topicId: 't2_1',  marks: 4 },
      { id: 'q2_19', qpId: 'may2024', qNum: 'Q3 (Part A)',  text: 'Triangle (10,20)(10,10)(20,10): find coordinates after Scaling with Sx=2, Sy=1.5 wrt origin.',                                                                topicId: 't2_6',  marks: 3 },
      { id: 'q2_20', qpId: 'may2024', qNum: 'Q4 (Part A)',  text: 'List the steps for general pivot point rotation.',                                                                                                              topicId: 't2_5',  marks: 3 },
      { id: 'q2_21', qpId: 'may2024', qNum: 'Q13a (Part B)', text: 'Explain scan line polygon fill algorithm. What problem occurs when a scan line passes through a vertex?',                                                      topicId: 't2_1',  marks: 7 },
      { id: 'q2_22', qpId: 'may2024', qNum: 'Q13b (Part B)', text: 'Triangle A(0,0) B(1,0) C(1,1): i) Rotate 90° anticlockwise. ii) Reflection about x-axis. Find new coordinates.',                                             topicId: 't2_5',  marks: 7 },
      { id: 'q2_23', qpId: 'may2024', qNum: 'Q14a (Part B)', text: 'Explain Boundary fill algorithm. Differentiate Boundary fill and Flood fill algorithms.',                                                                     topicId: 't2_2',  marks: 7 },
      { id: 'q2_24', qpId: 'may2024', qNum: 'Q14b (Part B)', text: 'Prove multiplication of transformation matrices is commutative for: i) Any two successive translations. ii) Any two successive scalings.',                    topicId: 't2_9',  marks: 7 },
    ],
  },

  /* ══════════════════════════════════════════
     MODULE 3 — Clipping and Projections
  ══════════════════════════════════════════ */
  3: {
    topics: [
      { id: 't3_7', name: 'Visible Surface Detection — Depth Buffer Algorithm' },
      { id: 't3_2', name: 'Cohen-Sutherland Line Clipping Algorithm' },
      { id: 't3_8', name: 'Visible Surface Detection — Scan Line Algorithm' },
      { id: 't3_6', name: 'Projections — Perspective' },
      { id: 't3_3', name: 'Sutherland-Hodgeman Polygon Clipping' },
      { id: 't3_5', name: 'Projections — Parallel (Orthographic, Oblique, Axonometric)' },
      { id: 't3_1', name: 'Window to Viewport Transformation' },
      { id: 't3_4', name: 'Three-Dimensional Viewing Pipeline' },
    ],
    topicWeightage: {
      t3_7: 35, t3_2: 24, t3_8: 23, t3_6: 16,
      t3_3: 14, t3_5: 12, t3_1: 9,  t3_4: 3,
    },
    pyqQuestions: [
      { id: 'q3_1',  qpId: 'apr2025', qNum: 'Q5 (Part A)',  text: 'List the steps involved in the Three-Dimensional Viewing Pipeline in computer graphics.',                                                                       topicId: 't3_4', marks: 3 },
      { id: 'q3_2',  qpId: 'apr2025', qNum: 'Q6 (Part A)',  text: 'Define Perspective Projection and describe its characteristics. How does it differ from Parallel Projection?',                                                  topicId: 't3_6', marks: 3 },
      { id: 'q3_3',  qpId: 'apr2025', qNum: 'Q15a (Part B)', text: 'Explain the Scan Line Visible Surface Detection Algorithm. Describe its working principle and provide a suitable example.',                                    topicId: 't3_8', marks: 8 },
      { id: 'q3_4',  qpId: 'apr2025', qNum: 'Q15b (Part B)', text: 'Apply the Sutherland-Hodgeman Polygon clipping algorithm to clip polygon ABCD wrt a given clipping rectangle. Explain step by step.',                        topicId: 't3_3', marks: 6 },
      { id: 'q3_5',  qpId: 'apr2025', qNum: 'Q16a (Part B)', text: 'Window (2,2)–(8,6), line P1(1,5) P2(7,8). Using Cohen-Sutherland, determine if line is inside/outside/partial. If partial, compute clipped coordinates.',     topicId: 't3_2', marks: 6 },
      { id: 'q3_6',  qpId: 'apr2025', qNum: 'Q16b (Part B)', text: 'Explain the Depth Buffer Algorithm for hidden surface removal. Discuss its operational mechanism and benefits.',                                               topicId: 't3_7', marks: 8 },
      { id: 'q3_7',  qpId: 'jun2022', qNum: 'Q5 (Part A)',  text: 'Explain the window to viewport coordinate transformation.',                                                                                                     topicId: 't3_1', marks: 3 },
      { id: 'q3_8',  qpId: 'jun2022', qNum: 'Q6 (Part A)',  text: 'Explain the Cohen Sutherland line clipping algorithm with a suitable diagram.',                                                                                 topicId: 't3_2', marks: 3 },
      { id: 'q3_9',  qpId: 'jun2022', qNum: 'Q15a (Part B)', text: 'Explain the Depth Buffer method for visible surface detection.',                                                                                               topicId: 't3_7', marks: 6 },
      { id: 'q3_10', qpId: 'jun2022', qNum: 'Q15b (Part B)', text: 'Explain in detail the scan line algorithm for visible surface detection by listing the tables used in this algorithm.',                                        topicId: 't3_8', marks: 8 },
      { id: 'q3_11', qpId: 'jun2022', qNum: 'Q16a (Part B)', text: 'Explain the Sutherland-Hodgeman Polygon clipping algorithm with an example.',                                                                                  topicId: 't3_3', marks: 8 },
      { id: 'q3_12', qpId: 'jun2022', qNum: 'Q16b (Part B)', text: 'Distinguish between parallel and perspective projections. What is the principal vanishing point?',                                                             topicId: 't3_6', marks: 6 },
      { id: 'q3_13', qpId: 'jun2023', qNum: 'Q5 (Part A)',  text: 'Discuss the steps involved in window to viewport coordinate transformation in 2D.',                                                                             topicId: 't3_1', marks: 3 },
      { id: 'q3_14', qpId: 'jun2023', qNum: 'Q6 (Part A)',  text: 'Illustrate the Oblique Projections.',                                                                                                                           topicId: 't3_5', marks: 3 },
      { id: 'q3_15', qpId: 'jun2023', qNum: 'Q15a (Part B)', text: 'Write Cohen Sutherland Algorithm and illustrate the region and region code.',                                                                                  topicId: 't3_2', marks: 8 },
      { id: 'q3_16', qpId: 'jun2023', qNum: 'Q15b (Part B)', text: 'Summarize multi view and axonometric projections. Write the equation for projection coordinates of P(x,y,z) if the view plane is along z-axis.',              topicId: 't3_5', marks: 6 },
      { id: 'q3_17', qpId: 'jun2023', qNum: 'Q16a (Part B)', text: 'Describe the Depth buffer algorithm used for visible surface detection.',                                                                                      topicId: 't3_7', marks: 8 },
      { id: 'q3_18', qpId: 'jun2023', qNum: 'Q16b (Part B)', text: 'List out the applications of visible surface detection algorithms.',                                                                                           topicId: 't3_7', marks: 6 },
      { id: 'q3_19', qpId: 'may2024', qNum: 'Q5 (Part A)',  text: 'Differentiate parallel and perspective projections.',                                                                                                           topicId: 't3_5', marks: 3 },
      { id: 'q3_20', qpId: 'may2024', qNum: 'Q6 (Part A)',  text: 'Window (0,0)–(100,100), viewport (5,5)–(20,20). Perform window to viewport transformation for point (20,15).',                                                 topicId: 't3_1', marks: 3 },
      { id: 'q3_21', qpId: 'may2024', qNum: 'Q15a (Part B)', text: 'Explain Cohen Sutherland line clipping algorithm with an example.',                                                                                            topicId: 't3_2', marks: 7 },
      { id: 'q3_22', qpId: 'may2024', qNum: 'Q15b (Part B)', text: 'Explain the Scan line method for visible surface detection.',                                                                                                  topicId: 't3_8', marks: 7 },
      { id: 'q3_23', qpId: 'may2024', qNum: 'Q16a (Part B)', text: 'Explain Depth buffer algorithm for visible surface detection. Write any two disadvantages.',                                                                   topicId: 't3_7', marks: 7 },
      { id: 'q3_24', qpId: 'may2024', qNum: 'Q16b (Part B)', text: 'Describe perspective projection. Derive transformation matrix for perspective projection.',                                                                    topicId: 't3_6', marks: 7 },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     MODULE 4 — Fundamentals of Digital Image Processing
  ══════════════════════════════════════════════════════════ */
  4: {
    topics: [
      { id: 't4_8', name: 'Convolution Operation' },
      { id: 't4_7', name: 'Basic Relationships between Pixels (Neighbourhood, Adjacency, Connectivity)' },
      { id: 't4_3', name: 'Fundamental Steps in Image Processing' },
      { id: 't4_4', name: 'Components of Image Processing System' },
      { id: 't4_1', name: 'Introduction to Image Processing and Applications' },
      { id: 't4_6', name: 'Sampling and Quantization' },
      { id: 't4_2', name: 'Image as 2D Data — Representation (Grayscale, Binary, Colour)' },
      { id: 't4_5', name: 'Spatial and Gray Level Resolution' },
    ],
    topicWeightage: {
      t4_8: 29, t4_7: 25, t4_3: 20, t4_4: 19,
      t4_1: 18, t4_6: 10, t4_2: 9,  t4_5: 6,
    },
    pyqQuestions: [
      { id: 'q4_1',  qpId: 'apr2025', qNum: 'Q7 (Part A)',  text: 'List and explain any three applications of image processing.',                                                                                                   topicId: 't4_1', marks: 3 },
      { id: 'q4_2',  qpId: 'apr2025', qNum: 'Q8 (Part A)',  text: 'Differentiate between Spatial Resolution and Gray Level Resolution in image processing with examples.',                                                         topicId: 't4_5', marks: 3 },
      { id: 'q4_3',  qpId: 'apr2025', qNum: 'Q17a (Part B)', text: 'Explain the components of an Image Processing System. Describe each component in detail and illustrate with a diagram.',                                       topicId: 't4_4', marks: 8 },
      { id: 'q4_4',  qpId: 'apr2025', qNum: 'Q17b (Part B)', text: 'Given a 2D image data f(x) and a mask w(x), perform convolution to compute the output. [5×5 image matrix with 3×3 mask]',                                    topicId: 't4_8', marks: 6 },
      { id: 'q4_5',  qpId: 'apr2025', qNum: 'Q18a (Part B)', text: 'Explain the basic relationships between pixels — neighbourhood, adjacency, connectivity and distance measures. Illustrate with examples.',                     topicId: 't4_7', marks: 7 },
      { id: 'q4_6',  qpId: 'apr2025', qNum: 'Q18b (Part B)', text: 'Explain the fundamental steps in image processing with a detailed description of each step. Illustrate with a block diagram.',                                 topicId: 't4_3', marks: 7 },
      { id: 'q4_7',  qpId: 'jun2022', qNum: 'Q7 (Part A)',  text: 'Explain sampling and quantization.',                                                                                                                            topicId: 't4_6', marks: 3 },
      { id: 'q4_8',  qpId: 'jun2022', qNum: 'Q8 (Part A)',  text: 'What are the components of the image processing system?',                                                                                                       topicId: 't4_4', marks: 3 },
      { id: 'q4_9',  qpId: 'jun2022', qNum: 'Q17a (Part B)', text: 'Explain any three applications of digital image processing.',                                                                                                  topicId: 't4_1', marks: 6 },
      { id: 'q4_10', qpId: 'jun2022', qNum: 'Q17b (Part B)', text: 'Define 4-adjacency, 8-adjacency and m-adjacency. Explain using an example for each.',                                                                         topicId: 't4_7', marks: 8 },
      { id: 'q4_11', qpId: 'jun2022', qNum: 'Q18a (Part B)', text: 'Explain the process of convolution with an example.',                                                                                                         topicId: 't4_8', marks: 8 },
      { id: 'q4_12', qpId: 'jun2022', qNum: 'Q18b (Part B)', text: 'With a neat diagram, explain the fundamental steps in Digital Image Processing.',                                                                              topicId: 't4_3', marks: 6 },
      { id: 'q4_13', qpId: 'jun2023', qNum: 'Q7 (Part A)',  text: 'Define pixel terms: i) Neighbours ii) Boundary iii) Path.',                                                                                                    topicId: 't4_7', marks: 3 },
      { id: 'q4_14', qpId: 'jun2023', qNum: 'Q8 (Part A)',  text: 'Differentiate gray scale image and a colour image.',                                                                                                            topicId: 't4_2', marks: 3 },
      { id: 'q4_15', qpId: 'jun2023', qNum: 'Q17a (Part B)', text: 'Write short notes on (i) Illumination (ii) Reflectance.',                                                                                                    topicId: 't4_2', marks: 6 },
      { id: 'q4_16', qpId: 'jun2023', qNum: 'Q17b (Part B)', text: 'Describe the components of an image processing system with necessary diagram.',                                                                               topicId: 't4_4', marks: 8 },
      { id: 'q4_17', qpId: 'jun2023', qNum: 'Q18a (Part B)', text: 'Define convolution. List properties. Illustrate the steps involved in convolving an image with a mask.',                                                      topicId: 't4_8', marks: 8 },
      { id: 'q4_18', qpId: 'jun2023', qNum: 'Q18b (Part B)', text: 'List out the applications of image processing in the Medical field.',                                                                                         topicId: 't4_1', marks: 6 },
      { id: 'q4_19', qpId: 'may2024', qNum: 'Q7 (Part A)',  text: 'List any three applications of digital image processing.',                                                                                                     topicId: 't4_1', marks: 3 },
      { id: 'q4_20', qpId: 'may2024', qNum: 'Q8 (Part A)',  text: 'Spatial resolution is 128×128, represented by 256 gray levels. Find storage requirement.',                                                                    topicId: 't4_5', marks: 3 },
      { id: 'q4_21', qpId: 'may2024', qNum: 'Q17a (Part B)', text: 'With the help of a block diagram, describe in detail the fundamental steps in image processing.',                                                             topicId: 't4_3', marks: 7 },
      { id: 'q4_22', qpId: 'may2024', qNum: 'Q17b (Part B)', text: 'What is image convolution? Explain various steps involved in image convolution with the help of an example.',                                                 topicId: 't4_8', marks: 7 },
      { id: 'q4_23', qpId: 'may2024', qNum: 'Q18a (Part B)', text: 'Explain the basic relationships between pixels.',                                                                                                             topicId: 't4_7', marks: 7 },
      { id: 'q4_24', qpId: 'may2024', qNum: 'Q18b (Part B)', text: 'Explain the concept of image sampling and quantization.',                                                                                                     topicId: 't4_6', marks: 7 },
    ],
  },

  /* ══════════════════════════════════════════════════
     MODULE 5 — Image Enhancement & Segmentation
  ══════════════════════════════════════════════════ */
  5: {
    topics: [
      { id: 't5_2', name: 'Histogram Equalization' },
      { id: 't5_6', name: 'Image Segmentation — Region-Based (Growing, Splitting, Merging)' },
      { id: 't5_7', name: 'Image Segmentation — Edge Detection (Sobel, Prewitt)' },
      { id: 't5_1', name: 'Gray Level Transformation Functions (Log, Power-Law, Contrast Stretching)' },
      { id: 't5_4', name: 'Spatial Filtering — Sharpening (Gradient, Laplacian)' },
      { id: 't5_3', name: 'Spatial Filtering — Smoothing (Linear and Nonlinear)' },
      { id: 't5_5', name: 'Image Segmentation — Thresholding (Intensity, Global)' },
    ],
    topicWeightage: {
      t5_2: 32, t5_6: 30, t5_7: 26, t5_1: 19,
      t5_4: 14, t5_3: 9,  t5_5: 6,
    },
    pyqQuestions: [
      { id: 'q5_1',  qpId: 'apr2025', qNum: 'Q9 (Part A)',  text: 'What is Power-Law Transformation in image processing? Explain its significance with an example.',                                                               topicId: 't5_1', marks: 3 },
      { id: 'q5_2',  qpId: 'apr2025', qNum: 'Q10 (Part A)', text: 'What is Contrast Stretching in image processing? Explain its importance.',                                                                                     topicId: 't5_1', marks: 3 },
      { id: 'q5_3',  qpId: 'apr2025', qNum: 'Q19a (Part B)', text: 'Explain Histogram Equalization. Perform Histogram Equalization for the given image. [4×4 matrix provided]',                                                  topicId: 't5_2', marks: 6 },
      { id: 'q5_4',  qpId: 'apr2025', qNum: 'Q19b (Part B)', text: 'Explain Sharpening Spatial Filtering. Discuss Gradient filter mask and Laplacian filter mask techniques.',                                                    topicId: 't5_4', marks: 8 },
      { id: 'q5_5',  qpId: 'apr2025', qNum: 'Q20a (Part B)', text: 'Explain Edge Detection in image processing. Discuss Sobel and Prewitt edge detectors.',                                                                       topicId: 't5_7', marks: 7 },
      { id: 'q5_6',  qpId: 'apr2025', qNum: 'Q20b (Part B)', text: 'Explain the Region-Based Approach in image segmentation. Discuss Region Growing, Region Splitting, and Merging.',                                             topicId: 't5_6', marks: 7 },
      { id: 'q5_7',  qpId: 'jun2022', qNum: 'Q9 (Part A)',  text: 'What are the applications of the nonlinear spatial filter?',                                                                                                    topicId: 't5_3', marks: 3 },
      { id: 'q5_8',  qpId: 'jun2022', qNum: 'Q10 (Part A)', text: 'What is the histogram of an image? Explain the significance of the histogram.',                                                                                topicId: 't5_2', marks: 3 },
      { id: 'q5_9',  qpId: 'jun2022', qNum: 'Q19a (Part B)', text: 'Explain Region Growing and Region Splitting and Merging segmentation methods.',                                                                               topicId: 't5_6', marks: 8 },
      { id: 'q5_10', qpId: 'jun2022', qNum: 'Q19b (Part B)', text: 'Explain the Prewitt and Sobel edge detectors.',                                                                                                               topicId: 't5_7', marks: 6 },
      { id: 'q5_11', qpId: 'jun2022', qNum: 'Q20a (Part B)', text: 'Explain grey level transformation functions: i) Image negatives ii) Gamma Transformation.',                                                                   topicId: 't5_1', marks: 6 },
      { id: 'q5_12', qpId: 'jun2022', qNum: 'Q20b (Part B)', text: 'What is histogram equalization? Apply the histogram equalization method on the given 3-bit image. [4×4 matrix provided]',                                    topicId: 't5_2', marks: 8 },
      { id: 'q5_13', qpId: 'jun2023', qNum: 'Q9 (Part A)',  text: 'Write the algorithm for basic Global thresholding.',                                                                                                            topicId: 't5_5', marks: 3 },
      { id: 'q5_14', qpId: 'jun2023', qNum: 'Q10 (Part A)', text: 'Compare Smoothening and Sharpening techniques in image processing.',                                                                                           topicId: 't5_3', marks: 3 },
      { id: 'q5_15', qpId: 'jun2023', qNum: 'Q19a (Part B)', text: 'Compute the histogram equalized image for the given 3-bit 4×5 matrix.',                                                                                      topicId: 't5_2', marks: 8 },
      { id: 'q5_16', qpId: 'jun2023', qNum: 'Q19b (Part B)', text: 'Define edges in an image. Discuss any two edge filters.',                                                                                                     topicId: 't5_7', marks: 6 },
      { id: 'q5_17', qpId: 'jun2023', qNum: 'Q20a (Part B)', text: 'Discuss region based approaches used for segmentation.',                                                                                                      topicId: 't5_6', marks: 8 },
      { id: 'q5_18', qpId: 'jun2023', qNum: 'Q20b (Part B)', text: 'Describe the Laplacian filter masks used for image processing.',                                                                                              topicId: 't5_4', marks: 6 },
      { id: 'q5_19', qpId: 'may2024', qNum: 'Q9 (Part A)',  text: 'Explain the terms (i) Smoothing (ii) Sharpening.',                                                                                                             topicId: 't5_3', marks: 3 },
      { id: 'q5_20', qpId: 'may2024', qNum: 'Q10 (Part A)', text: 'Explain any two thresholding techniques used in image segmentation.',                                                                                          topicId: 't5_5', marks: 3 },
      { id: 'q5_21', qpId: 'may2024', qNum: 'Q19a (Part B)', text: 'What is image segmentation? Explain edge and region based segmentation technique.',                                                                           topicId: 't5_7', marks: 7 },
      { id: 'q5_22', qpId: 'may2024', qNum: 'Q19b (Part B)', text: 'Explain histogram equalization method of image enhancement.',                                                                                                 topicId: 't5_2', marks: 7 },
      { id: 'q5_23', qpId: 'may2024', qNum: 'Q20a (Part B)', text: 'Explain any two gray level transformation functions.',                                                                                                        topicId: 't5_1', marks: 7 },
      { id: 'q5_24', qpId: 'may2024', qNum: 'Q20b (Part B)', text: 'Describe how an image is segmented using split and merge technique in association with the region adjacency graph.',                                          topicId: 't5_6', marks: 7 },
    ],
  },
};

// All CG modules now have detailed data
export const DETAILED_MODULES = {
  CST304: [1, 2, 3, 4, 5],
};

export function hasModuleDetail(subjectId, moduleId) {
  return !!(DETAILED_MODULES[subjectId]?.includes(Number(moduleId)));
}

export function getTopicPriority(marks, maxMarks) {
  const pct = marks / maxMarks;
  if (pct >= 0.2)  return 'Critical';
  if (pct >= 0.12) return 'High';
  if (pct >= 0.07) return 'Medium';
  return 'Low';
}
