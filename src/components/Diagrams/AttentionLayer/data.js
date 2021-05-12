import React from 'react';
const katex = require(`katex`);

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const topRowPosition = 0.1;
const animationWidth = 1200;
const animationHeight = 700;
const boxSize = 50;
const circleR = 16;

const ETooltip = `
<span>
E<sub>i,j</sub> = <strong style="color: #FFADAD;">Q<sub>i</sub></strong><strong style="color: #9BF6FF;">X<sub>j</sub></strong> / sqrt(D<sub>Q</sub>
</span>
`;

const ATooltip = `
  <span>
  A = softmax(E, dim=1)
  </span>
`;

const State1Text = `<div style="text-align: left; margin: 10px 0; width: 95%; height: 95%">
<div style="text-align: center; font-weight: bold;">Attention Layer</div>
<b>Input vectors</b>: <strong style="color: limegreen;">X</strong> (shape ${katex.renderToString(
  'N_X \\times D_X'
)})<br/>
<b>Query vectors</b>: <strong style="color: mediumpurple;">Q</strong> (Shape ${katex.renderToString(
  'N_Q \\times D_Q'
)})<br/><br/>
<b>Similarity function</b>: <i>scaled dot product</i><br/>
<b>Similarities</b>: ${katex.renderToString(
  'E = \\textcolor{mediumpurple}{Q}\\textcolor{limegreen}{X^T}'
)} (shape ${katex.renderToString('N_Q \\times N_X')}), ${katex.renderToString(
  'E_{i,j} = \\textcolor{mediumpurple}{Q_i} \\cdot \\textcolor{limegreen}{X_j} / \\sqrt{D_Q}'
)}<br/>
<b>Attention weights</b>: ${katex.renderToString(
  'A = \\text{softmax}(E, dim=1)'
)} (shape ${katex.renderToString('N_Q \\times N_X')})<br/>
<b>Output</b>: ${katex.renderToString(
  '\\textcolor{hotpink}{Y} = A\\textcolor{limegreen}{X}'
)} (shape ${katex.renderToString(
  'N_Q \\times D_X'
)}) where ${katex.renderToString(
  '\\textcolor{hotpink}{Y_i} = \\sum_j(A_{i,j},\\textcolor{limegreen}{X_j})'
)}<br/>
</div>`;

const State2Text = `<div style="text-align: left; margin: 10px 0; width: 95%; height: 95%">
<div style="text-align: center; font-weight: bold;">Attention Layer</div>
<b>Input vectors</b>: <strong style="color: limegreen;">X</strong> (shape ${katex.renderToString(
  'N_X \\times D_X'
)})<br/>
<b>Query vectors</b>: <strong style="color: mediumpurple;">Q</strong> (Shape ${katex.renderToString(
  'N_Q \\times D_Q'
)})<br/>
<b>Key matrix</b>: <strong style="color: darkorange;">W<sub>K</sub></strong> (Shape ${katex.renderToString(
  'D_X \\times D_Q'
)})<br/>
<b>Value matrix</b>: <strong style="color: royalblue;">W<sub>V</sub></strong> (Shape ${katex.renderToString(
  'D_X \\times D_V'
)})<br/><br/>
<b>Key vectors</b>: ${katex.renderToString(
  '\\textcolor{darkorange}{K} = \\textcolor{limegreen}{X}\\textcolor{darkorange}{W_K}'
)} (Shape ${katex.renderToString('N_X \\times D_Q')})<br/>
<b>Value vectors</b>: ${katex.renderToString(
  '\\textcolor{royalblue}{V} = \\textcolor{limegreen}{X}\\textcolor{royalblue}{W_V}'
)} (Shape ${katex.renderToString('N_X \\times D_V')})<br/>
<b>Similarity function</b>: <i>scaled dot product</i><br/>
<b>Similarities</b>: ${katex.renderToString(
  'E = \\textcolor{mediumpurple}{Q}\\textcolor{darkorange}{K^T}'
)} (shape ${katex.renderToString('N_Q \\times N_X')}), ${katex.renderToString(
  'E_{i,j} = \\textcolor{mediumpurple}{Q_i} \\cdot \\textcolor{darkorange}{K_j} / \\sqrt{D_Q}'
)}<br/>
<b>Attention weights</b>: ${katex.renderToString(
  'A = \\text{softmax}(E, dim=1)'
)} (shape ${katex.renderToString('N_Q \\times N_X')})<br/>
<b>Output</b>: ${katex.renderToString(
  '\\textcolor{hotpink}{Y} = A\\textcolor{royalblue}{V}'
)} (shape ${katex.renderToString(
  'N_Q \\times D_V'
)}) where ${katex.renderToString(
  '\\textcolor{hotpink}{Y_i} = \\sum_j(A_{i,j},\\textcolor{royalblue}{V_j})'
)}<br/>
</div>`;

const State3Text = `<div style="text-align: left; margin: 10px 0; width: 95%; height: 95%">
<div style="text-align: center; font-weight: bold;">Self-Attention Layer</div>
<b>Input vectors</b>: <strong style="color: limegreen;">X</strong> (shape ${katex.renderToString(
  'N_X \\times D_X'
)})<br/>
<b>Key matrix</b>: <strong style="color: darkorange;">W<sub>K</sub></strong> (Shape ${katex.renderToString(
  'D_X \\times D_Q'
)})<br/>
<b>Value matrix</b>: <strong style="color: royalblue;">W<sub>V</sub></strong> (Shape ${katex.renderToString(
  'D_X \\times D_V'
)})<br/>
<b>Query matrix</b>: <strong style="color: mediumpurple;">W<sub>Q</sub></strong> (Shape ${katex.renderToString(
  'D_X \\times D_Q'
)})<br/><br/>
<b>Query vectors</b>: ${katex.renderToString(
  '\\textcolor{mediumpurple}{Q} = \\textcolor{limegreen}{X}\\textcolor{mediumpurple}{W_Q}'
)} (Shape ${katex.renderToString('N_X \\times D_Q')})<br/>
<b>Key vectors</b>: ${katex.renderToString(
  '\\textcolor{darkorange}{K} = \\textcolor{limegreen}{X}\\textcolor{darkorange}{W_K}'
)} (Shape ${katex.renderToString('N_X \\times D_Q')})<br/>
<b>Value vectors</b>: ${katex.renderToString(
  '\\textcolor{royalblue}{V} = \\textcolor{limegreen}{X}\\textcolor{royalblue}{W_V}'
)} (Shape ${katex.renderToString('N_X \\times D_V')})<br/>
<b>Similarity function</b>: <i>scaled dot product</i><br/>
<b>Similarities</b>: ${katex.renderToString(
  'E = \\textcolor{mediumpurple}{Q}\\textcolor{darkorange}{K^T}'
)} (shape ${katex.renderToString('N_X \\times N_X')}), ${katex.renderToString(
  'E_{i,j} = \\textcolor{mediumpurple}{Q_i} \\cdot \\textcolor{darkorange}{K_j} / \\sqrt{D_Q}'
)}<br/>
<b>Attention weights</b>: ${katex.renderToString(
  'A = \\text{softmax}(E, dim=1)'
)} (shape ${katex.renderToString('N_X \\times N_X')})<br/>
<b>Output</b>: ${katex.renderToString(
  '\\textcolor{hotpink}{Y} = A\\textcolor{royalblue}{V}'
)} (shape ${katex.renderToString(
  'N_X \\times D_V'
)}) where ${katex.renderToString(
  '\\textcolor{hotpink}{Y_i} = \\sum_j(A_{i,j},\\textcolor{royalblue}{V_j})'
)}<br/>
</div>`;

const step1 = {
  attention: {
    color: '#E2CFC4',
    borderColor: '#523828',
    size: `${boxSize}px`,
    blockName: 'attention',
    blockType: 'rect',
    items: [
      {
        id: 'e11',
        val: `<span>
          E<sub>1,1</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'e12',
        val: `<span>
          E<sub>2,1</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'e13',
        val: `<span>
          E<sub>3,1</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'e21',
        val: `<span>
          E<sub>1,2</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e22',
        val: `<span>
          E<sub>2,2</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e23',
        val: `<span>
          E<sub>3,2</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e31',
        val: `<span>
          E<sub>1,3</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'e32',
        val: `<span>
          E<sub>2,3</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'e33',
        val: `<span>
          E<sub>3,3</sub>
        </span>`,
        tooltipValue: ETooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'a11',
        val: `<span>
          A<sub>1,1</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 4 - 25,
        ],
      },
      {
        id: 'a12',
        val: `<span>
          A<sub>2,1</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 4 - 25,
        ],
      },
      {
        id: 'a13',
        val: `<span>
          A<sub>3,1</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 4 - 25,
        ],
      },
      {
        id: 'a21',
        val: `<span>
          A<sub>1,2</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 3 - 25,
        ],
      },
      {
        id: 'a22',
        val: `<span>
          A<sub>2,2</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 3 - 25,
        ],
      },
      {
        id: 'a23',
        val: `<span>
          A<sub>3,2</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 3 - 25,
        ],
      },
      {
        id: 'a31',
        val: `<span>
          A<sub>1,3</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 2 - 25,
        ],
      },
      {
        id: 'a32',
        val: `<span>
          A<sub>2,3</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 2 - 25,
        ],
      },
      {
        id: 'a33',
        val: `<span>
          A<sub>3,3</sub>
        </span>`,
        tooltipValue: ATooltip,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight - boxSize * 2 - 25,
        ],
      },
    ],
  },
  inputs: {
    color: '#CAFFBF',
    borderColor: '#147A00',
    size: `${boxSize}px`,
    blockName: 'inputs',
    blockType: 'rect',
    items: [
      {
        id: 'X1',
        val: `<span>
          X<sub>1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize,
              (bottomRowPosition - 0.3) * animationHeight + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2,
              (bottomRowPosition - 0.3) * animationHeight + boxSize / 2,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2,
                (bottomRowPosition - 0.3) * animationHeight + boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2,
                (bottomRowPosition - 0.3) * animationHeight - boxSize * 4,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight - boxSize * 4,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
      {
        id: 'X2',
        val: `<span>
          X<sub>2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 1.5,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 1.5,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 1.5,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2 -
                  25,
                (bottomRowPosition - 0.3) * animationHeight + boxSize * 1.5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2 -
                  25,
                (bottomRowPosition - 0.3) * animationHeight - boxSize * 3,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight - boxSize * 3,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
      {
        id: 'X3',
        val: `<span>
          X<sub>3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 2.5,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 2.5,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 2.5,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2 -
                  50,
                (bottomRowPosition - 0.3) * animationHeight + boxSize * 2.5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 -
                  boxSize / 2 -
                  50,
                (bottomRowPosition - 0.3) * animationHeight - boxSize * 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.3) * animationHeight - boxSize * 2,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  query: {
    color: '#DCD6FF',
    borderColor: '#6347FF',
    size: `${boxSize}px`,
    blockName: 'query',
    blockType: 'rect',
    items: [
      {
        id: 'Q1',
        val: `<span>
          Q<sub>1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 3,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'Q2',
        val: `<span>
          Q<sub>2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize +
                boxSize / 2,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 3,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'Q3',
        val: `<span>
          Q<sub>3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 2.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize * 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 2.5,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 3,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  queryWeights: {
    color: '#EEEBFF',
    borderColor: '#A899FF',
    size: `${boxSize}px`,
    blockName: 'query-weights',
    blockType: 'rect',
    items: [],
  },
  queVal: {
    color: '#DCD6FF',
    borderColor: '#6347FF',
    blockName: 'que-vectors',
    size: `${boxSize / 2}px`,
    blockType: 'rect',
    items: [],
  },
  values: {
    color: '#9BF6FF',
    borderColor: '#00838F',
    size: `${boxSize}px`,
    blockName: 'values',
    blockType: 'rect',
    items: [],
  },
  valuesWeights: {
    color: '#C2FAFF',
    borderColor: '#5CF1FF',
    size: `${boxSize}px`,
    blockName: 'values-weights',
    blockType: 'rect',
    items: [],
  },
  ilVal: {
    color: '#9BF6FF',
    borderColor: '#00838F',
    blockName: 'val-vectors',
    size: `${boxSize / 2}px`,
    blockType: 'rect',
    items: [],
  },
  keys: {
    color: '#FFD199',
    borderColor: '#A35A00',
    size: `${boxSize}px`,
    blockName: 'keys',
    blockType: 'rect',
    items: [],
  },
  keysWeights: {
    color: '#FFEDD6',
    borderColor: '#FFAF47',
    size: `${boxSize}px`,
    blockName: 'keys-weights',
    blockType: 'rect',
    items: [],
  },
  keyVal: {
    color: '#FFD199',
    borderColor: '#A35A00',
    blockName: 'key-vectors',
    size: `${boxSize / 2}px`,
    blockType: 'rect',
    items: [],
  },
  zVal: {
    color: '#FFEBFF',
    borderColor: '#FF47FF',
    blockName: 'z-vectors',
    size: `${boxSize / 2}px`,
    blockType: 'rect',
    items: [],
  },
  output: {
    color: '#FFEBFF',
    borderColor: '#FF47FF',
    size: `${boxSize}px`,
    blockName: 'output',
    blockType: 'rect',
    items: [
      {
        id: 'Y1',
        val: `<span>
          Y<sub>1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              boxSize * 2 + 25,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              boxSize * 2,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'Y2',
        val: `<span>
          Y<sub>2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              boxSize * 2 + 25,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              boxSize * 2,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'Y3',
        val: `<span>
          Y<sub>3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 2.5,
              boxSize * 2 + 25,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 2.5,
              boxSize * 2,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  text: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: `300px`,
    sizeY: `50px`,
    blockName: 'text',
    blockType: 'text',
    items: [
      {
        id: 'initial-state',
        val: State1Text,
        sizeX: `650px`,
        sizeY: `250px`,
        position: [0.4 * animationWidth, 0.01 * animationHeight],
      },
    ],
  },
  softmax: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: boxSize * 3,
    sizeY: `25px`,
    blockName: 'softmax',
    blockType: 'text',
    items: [
      {
        id: 'softmax-layer',
        val: `<span>
          softmax
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight - boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.3) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.3) * animationHeight - boxSize + 25,
            ],
            orientation: 'vertical',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.3) * animationHeight - boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.3) * animationHeight - boxSize - 25,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  operations: {
    color: '#E2E2DF',
    borderColor: '#40403A',
    size: `${circleR}px`,
    blockName: 'operations',
    blockType: 'circle',
    items: [],
  },
};

const step2 = {
  ...step1,
  text: {
    ...step1.text,
    items: step1.text.items.map(el => ({
      ...el,
      sizeY: `380px`,
      val: State2Text,
    })),
  },
  inputs: {
    ...step1.inputs,
    items: step1.inputs.items.map((el, idx) => {
      return {
        ...el,
        position: [el.position[0] - boxSize * 3.5, el.position[1]],
        lines: [
          {
            from: [
              el.position[0] - boxSize * 2.5,
              el.position[1] + boxSize / 2,
            ],
            points: [
              [
                el.position[0] - boxSize * 2.5 + (idx + 1) * 10 + 5,
                el.position[1] + boxSize / 2,
              ],
              [
                el.position[0] - boxSize * 2.5 + (idx + 1) * 10 + 5,
                step1.attention.items[9].position[1] +
                  idx * boxSize +
                  boxSize / 2,
              ],
            ],
            to: [
              el.position[0] - boxSize * 1.5,
              step1.attention.items[9].position[1] +
                idx * boxSize +
                boxSize / 2,
            ],
            color: step1.valuesWeights.borderColor,
            orientation: 'multi-squared',
          },
          {
            from: [
              el.position[0] - boxSize * 2.5,
              el.position[1] + boxSize / 2,
            ],
            to: [el.position[0] - boxSize * 1.5, el.position[1] + boxSize / 2],
          },
        ],
      };
    }),
  },
  keys: {
    ...step1.keys,
    items: [
      ...step1.inputs.items.map((el, idx) => {
        return {
          ...el,
          id: `K${idx + 1}`,
          val: `<span>
            K<sub>${idx + 1}</sub>
          </span>`,
          lines: [el.lines[0]],
        };
      }),
    ],
  },
  keysWeights: {
    ...step1.keysWeights,
    items: [
      ...step1.inputs.items.map((el, idx) => {
        return {
          ...el,
          id: `Wk${idx + 1}`,
          val: `<span>
            W<sub>K${idx + 1}</sub>
          </span>`,
          position: [el.position[0] - boxSize * 1.5, el.position[1]],
          lines: [
            {
              from: [el.lines[0].from[0] - boxSize * 1.5, el.lines[0].from[1]],
              to: [el.lines[0].to[0] - boxSize * 2, el.lines[0].from[1]],
              orientation: 'horizontal',
            },
          ],
        };
      }),
    ],
  },
  values: {
    ...step1.values,
    items: step1.inputs.items.map((el, idx) => {
      return {
        ...el,
        id: `V${idx + 1}`,
        val: `<span>
          V<sub>${idx + 1}</sub>
        </span>`,
        position: [
          el.position[0],
          step1.attention.items[9].position[1] + idx * boxSize,
        ],
        lines: [
          {
            from: [
              el.lines[0].from[0],
              step1.attention.items[9].position[1] +
                idx * boxSize +
                boxSize / 2,
            ],
            to: [
              el.lines[0].to[0],
              step1.attention.items[9].position[1] +
                idx * boxSize +
                boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      };
    }),
  },
  valuesWeights: {
    ...step1.valuesWeights,
    items: step1.inputs.items.map((el, idx) => {
      return {
        ...el,
        id: `Wv${idx + 1}`,
        val: `<span>
          W<sub>V${idx + 1}</sub>
        </span>`,
        position: [
          el.position[0] - boxSize * 1.5,
          step1.attention.items[9].position[1] + idx * boxSize,
        ],
        lines: [
          {
            from: [
              el.lines[0].from[0] - boxSize * 1.5,
              step1.attention.items[9].position[1] +
                idx * boxSize +
                boxSize / 2,
            ],
            to: [
              el.lines[0].to[0] - boxSize * 2,
              step1.attention.items[9].position[1] +
                idx * boxSize +
                boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      };
    }),
  },
};

const step3 = {
  ...step2,
  text: {
    ...step2.text,
    items: step2.text.items.map(el => ({
      ...el,
      sizeY: `430px`,
      val: State3Text,
    })),
  },
  queryWeights: {
    ...step2.queryWeights,
    items: step2.query.items.map((el, idx) => {
      return {
        ...el,
        id: `Wq${idx + 1}`,
        val: `<span>
          W<sub>Q${idx + 1}</sub>
        </span>`,
        position: [el.position[0], el.position[1] + boxSize * 1.5],
        lines: [
          {
            from: [el.lines[0].from[0], el.lines[0].from[1] + boxSize * 1.5],
            to: [el.lines[0].to[0], el.lines[0].to[1] + boxSize * 1.5],
            orientation: 'vertical',
          },
          {
            from: [
              step2.inputs.items[0].position[0] + boxSize + (idx + 1) * 10,
              step2.inputs.items[0].position[1] + boxSize * (idx + 0.5),
            ],
            points: [
              [
                step2.inputs.items[0].position[0] + boxSize + (idx + 1) * 10,
                el.lines[0].from[1] + boxSize * 2.5 + (idx + 1) * 10,
              ],
              [
                el.lines[0].from[0],
                el.lines[0].from[1] + boxSize * 2.5 + (idx + 1) * 10,
              ],
            ],
            to: [el.lines[0].from[0], el.lines[0].from[1] + boxSize * 2.5],
            color: step1.queryWeights.borderColor,
            orientation: 'multi-squared',
          },
        ],
      };
    }),
  },
};

const step4 = {
  ...step3,
  zVal: {
    ...step3.zVal,
    items: [
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 10.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        name: `Z`,
        namePosition: 'top',
        position: [
          step3.text.items[0].position[0] + boxSize * 11,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 11.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 10.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 11,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 11.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
    ],
  },
  ilVal: {
    ...step3.ilVal,
    items: [
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 8,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        name: `V`,
        namePosition: 'top',
        position: [
          step3.text.items[0].position[0] + boxSize * 8.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 9,
          (bottomRowPosition - 0.04) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 8,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 8.5,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 9,
          (bottomRowPosition - 0.04) * animationHeight + boxSize * 1.5,
        ],
      },
    ],
  },
  queVal: {
    ...step3.queVal,
    items: [
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 3.5,
          (bottomRowPosition - 0.08) * animationHeight + boxSize,
        ],
      },
      {
        name: `Q`,
        namePosition: 'top',
        position: [
          step3.text.items[0].position[0] + boxSize * 4,
          (bottomRowPosition - 0.08) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 4.5,
          (bottomRowPosition - 0.08) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 3.5,
          (bottomRowPosition - 0.08) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 4,
          (bottomRowPosition - 0.08) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 4.5,
          (bottomRowPosition - 0.08) * animationHeight + boxSize * 1.5,
        ],
      },
    ],
  },
  keyVal: {
    ...step3.keyVal,
    items: [
      {
        name: `K^T`,
        namePosition: 'top',
        position: [
          step3.text.items[0].position[0] + boxSize * 6,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 0.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 6.5,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 0.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 6,
          (bottomRowPosition - 0.06) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 6.5,
          (bottomRowPosition - 0.06) * animationHeight + boxSize,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 6,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        position: [
          step3.text.items[0].position[0] + boxSize * 6.5,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 1.5,
        ],
      },
    ],
  },
  text: {
    ...step3.text,
    items: [
      ...step3.text.items,
      {
        id: 'softmax',
        val: `<span style="font-size: 24px">softmax</span>`,
        sizeX: `100px`,
        sizeY: `25px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize / 2,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        id: 'left-bracket',
        val: `<span style="font-size: 100px">(</span>`,
        sizeX: `20px`,
        sizeY: `100px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize * 2.75,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 0.5,
        ],
      },
      {
        id: 'right-bracket',
        val: `<span style="font-size: 100px">)</span>`,
        sizeX: `20px`,
        sizeY: `100px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize * 7.25,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 0.5,
        ],
      },
      {
        id: 'divider-bracket',
        val: `<div style=" width: 100%;"><div style="text-align: center; font-size: 20px; padding-top: 10px; width: 100%; border-top: 5px solid black;">${katex.renderToString(
          '\\sqrt{d_k}'
        )}</div></div>`,
        sizeX: `180px`,
        sizeY: `38px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize * 3.35,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 2.25,
        ],
      },
      {
        id: 'equal',
        val: `<span style="font-size: 36px">=</span>`,
        sizeX: `30px`,
        sizeY: `25px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize * 9.75,
          (bottomRowPosition - 0.06) * animationHeight + boxSize * 1.5,
        ],
      },
      {
        id: 'title',
        val: `<span style="font-size: 18px">Self-attention calculation in matrix form, Source: Illustrated Transformer</span>`,
        sizeX: `600px`,
        sizeY: `25px`,
        borderColor: 'transparent',
        position: [
          step3.text.items[0].position[0] + boxSize / 2,
          (bottomRowPosition - 0.12) * animationHeight,
        ],
      },
    ],
  },
};

const steps = {
  step1,
  step2,
  step3,
  step4,
};

export { steps, animationWidth, animationHeight };
