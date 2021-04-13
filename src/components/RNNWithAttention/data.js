import React from 'react';

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const topRowPosition = 0.1;
const animationWidth = 1200;
const animationHeight = 500;
const boxSize = 50;
const circleR = 16;

const alignmentScoreText = `<span>
e<sub>t,i</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i</sub>)
</span>
`;
const hiddentStateText = `<span>
h<sub>t</sub> = f<sub>W</sub>(x<sub>t</sub>, h<sub>t-1</sub>)
</span>`;

const contextText = `<span>
c<sub>t</sub> = <span style="font-size: 26px">∑<sub>i</sub></span> a<sub>t,i</sub>h<sub>i</sub>
</span>`;

const stateText = `<span>
s<sub>t</sub> = g<sub>U</sub>(y<sub>t-1</sub>, s<sub>t-1</sub>, c<sub>t</sub>)
</span>`;

const alignScoresText = `<span>
<strong>Alignment scores</strong><br/>
e<sub>t,i</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i</sub>) [scalar]<br/>
f<sub>att</sub> is a MLP
</span>
`;
const alignScoresTextShort = `<span>
<strong>Alignment scores</strong>
</span>
`;
const attentionWeightsText = `<span>
<strong>Attention weights</strong><br/>
<span style="font-size: 14px" >Normalized alignment socres with softmax funtion</span><br/>
0 < a<sub>t,i,j</sub> < 1 &nbsp; &nbsp; ∑<sub>i,j</sub>a<sub>t,i,j</sub> = 1<br/>
</span>
`;
const attentionWeightsTextShort = `<span>
<strong>Attention weights</strong>
</span>
`;
const mulText = `<span  style="font-size: 14px; line-height: 16px; padding-left: 5px;">Multiply attention weight and corresponding hidden state
</span>
`;
const sumText = `<span>
Compute <strong>context vector</strong><br/>
c<sub>t</sub> = <span style="font-size: 26px">∑</span><sub>i</sub> a<sub>t,i</sub>h<sub>i</sub>
</span>
`;
const attentionDesc = `<span>
<strong>Intuition!</strong><br/>
<strong>Context c<sub>t</sub></strong> <u>attends</u> to the part of the input relevant to state:<br/>
"we are learning" ~ "uczymy" (it's complicated in polish)<br/>
proposed weights: 
a<sub>1,1</sub> = 0.4; a<sub>1,2</sub> = 0.19; a<sub>1,3</sub> = 0.4; a<sub>1,4</sub> = 0.01;  
</span>
`;
const attentionDesc2 = `<span>
<strong>Intuition!</strong><br/>
<strong>Context c<sub>t</sub></strong> <u>attends</u> to the part of the input relevant to state:<br/>
"we are learning" ~ "się" (like i've said, it's complicated)<br/>
proposed weights: 
a<sub>1,1</sub> = 0.35; a<sub>1,2</sub> = 0.35; a<sub>1,3</sub> = 0.29; a<sub>1,4</sub> = 0.01;  
</span>
`;
const attentionDesc3 = `<span>
<strong>Intuition!</strong><br/>
<strong>Context c<sub>t</sub></strong> <u>attends</u> to the part of the input relevant to state:<br/>
"attention" ~ "uwagi"<br/>
proposed weights: 
a<sub>1,1</sub> = 0.05; a<sub>1,2</sub> = 0.01; a<sub>1,3</sub> = 0.05; a<sub>1,4</sub> = 0.89;  
</span>
`;
const step1 = {
  inputs: {
    color: '#FFD199',
    borderColor: '#A35A00',
    size: `${boxSize}px`,
    blockName: 'inputs',
    blockType: 'rect',
    items: [
      {
        id: 'x1',
        val: `<span>
          x<sub>1</sub>
        </span>`,
        name: 'We',
        position: [
          firstRowPosition * animationWidth,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'x2',
        val: `<span>
          x<sub>2</sub>
        </span>`,
        name: 'are',
        position: [
          (firstRowPosition + boxPadding) * animationWidth,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'x3',
        val: `<span>
          x<sub>3</sub>
        </span>`,
        name: 'learning',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'x4',
        val: `<span>
          x<sub>4</sub>
        </span>`,
        name: 'attention',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
  attention: {
    color: '#E2CFC4',
    borderColor: '#523828',
    size: `${boxSize}px`,
    blockName: 'attention',
    blockType: 'rect',
    items: [],
  },
  hidden: {
    color: '#9BF6FF',
    borderColor: '#00838F',
    size: `${boxSize}px`,
    blockName: 'hidden',
    blockType: 'rect',
    items: [
      {
        id: 'h1',
        val: `<span>
          h<sub>1</sub>
        </span>`,
        tooltipValue: hiddentStateText,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              firstRowPosition * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'h2',
        val: `<span>
          h<sub>2</sub>
        </span>`,
        tooltipValue: hiddentStateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              firstRowPosition * animationWidth + boxSize,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
      {
        id: 'h3',
        val: `<span>
          h<sub>3</sub>
        </span>`,
        tooltipValue: hiddentStateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
      {
        id: 'h4',
        val: `<span>
          h<sub>4</sub>
        </span>`,
        tooltipValue: hiddentStateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
    ],
  },
  state: {
    color: '#FDFFB6',
    borderColor: '#636600',
    size: `${boxSize}px`,
    blockName: 'state',
    blockType: 'rect',
    items: [
      {
        id: 's0',
        val: `<span>
          s<sub>0</sub>
        </span>`,
        tooltipValue: `
          <span>
          <strong>Initial decoder state</strong>
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  context: {
    color: '#FFADAD',
    borderColor: '#660000',
    size: `${boxSize}px`,
    blockName: 'context',
    blockType: 'rect',
    items: [],
  },
  output: {
    color: '#CAFFBF',
    borderColor: '#147A00',
    size: `${boxSize}px`,
    blockName: 'output',
    blockType: 'rect',
    items: [],
  },
  text: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: `300px`,
    sizeY: `50px`,
    blockName: 'text',
    blockType: 'text',
    items: [],
  },
  softmax: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: boxSize * 2 + boxPadding * 3 * animationWidth,
    sizeY: `25px`,
    blockName: 'softmax',
    blockType: 'text',
    items: [],
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
  attention: {
    ...step1.attention,
    items: [
      ...step1.attention.items,
      {
        id: 'e11',
        val: `<span>
          e<sub>1,1</sub>
        </span>`,
        tooltipValue: alignmentScoreText,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              step1.state.items[0].position[0] + boxSize / 2,
              step1.state.items[0].position[1],
            ],
            points: [
              [
                step1.state.items[0].position[0] + boxSize / 2,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
              [
                firstRowPosition * animationWidth + (boxSize * 2) / 3,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
            ],
            to: [
              firstRowPosition * animationWidth + (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.hidden.items[0].position[0] + boxSize / 2,
              step1.hidden.items[0].position[1],
            ],
            to: [
              firstRowPosition * animationWidth + boxSize / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'e12',
        val: `<span>
          e<sub>1,2</sub>
        </span>`,
        tooltipValue: alignmentScoreText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              step1.state.items[0].position[0] + boxSize / 2,
              step1.state.items[0].position[1],
            ],
            points: [
              [
                step1.state.items[0].position[0] + boxSize / 2,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth +
                  (boxSize * 2) / 3,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.hidden.items[1].position[0] + boxSize / 2,
              step1.hidden.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'e13',
        val: `<span>
          e<sub>1,3</sub>
        </span>`,
        tooltipValue: alignmentScoreText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              step1.state.items[0].position[0] + boxSize / 2,
              step1.state.items[0].position[1],
            ],
            points: [
              [
                step1.state.items[0].position[0] + boxSize / 2,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 +
                  (boxSize * 2) / 3,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.hidden.items[2].position[0] + boxSize / 2,
              step1.hidden.items[2].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'e14',
        val: `<span>
          e<sub>1,4</sub>
        </span>`,
        tooltipValue: alignmentScoreText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              step1.state.items[0].position[0] + boxSize / 2,
              step1.state.items[0].position[1],
            ],
            points: [
              [
                step1.state.items[0].position[0] + boxSize / 2,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 +
                  (boxSize * 2) / 3,
                step1.state.items[0].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.hidden.items[3].position[0] + boxSize / 2,
              step1.hidden.items[3].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  text: {
    ...step1.text,
    items: [
      ...step1.text.items,
      {
        id: 'alignment-scores',
        val: alignScoresText,
        sizeX: `250px`,
        sizeY: `100px`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 4,
          (bottomRowPosition - 0.6) * animationHeight + boxSize * 1.2,
        ],
      },
    ],
  },
};

const step3 = {
  ...step2,
  softmax: {
    ...step2.softmax,
    items: [
      ...step2.softmax.items,
      {
        id: 'softmax-layer',
        val: `<span>
          softmax
        </span>`,
        position: [0, (bottomRowPosition - 0.5) * animationHeight],
        lines: [
          {
            from: [
              step2.attention.items[0].position[0] + boxSize / 2,
              step2.attention.items[0].position[1],
            ],
            to: [
              step2.attention.items[0].position[0] + boxSize / 2,
              (bottomRowPosition - 0.5) * animationHeight + 25,
            ],
          },
          {
            from: [
              step2.attention.items[1].position[0] + boxSize / 2,
              step2.attention.items[1].position[1],
            ],
            to: [
              step2.attention.items[1].position[0] + boxSize / 2,
              (bottomRowPosition - 0.5) * animationHeight + 25,
            ],
          },
          {
            from: [
              step2.attention.items[2].position[0] + boxSize / 2,
              step2.attention.items[2].position[1],
            ],
            to: [
              step2.attention.items[2].position[0] + boxSize / 2,
              (bottomRowPosition - 0.5) * animationHeight + 25,
            ],
          },
          {
            from: [
              step2.attention.items[3].position[0] + boxSize / 2,
              step2.attention.items[3].position[1],
            ],
            to: [
              step2.attention.items[3].position[0] + boxSize / 2,
              (bottomRowPosition - 0.5) * animationHeight + 25,
            ],
          },
        ],
      },
    ],
  },
};

const step4 = {
  ...step3,
  attention: {
    ...step3.attention,
    items: [
      ...step3.attention.items,
      {
        id: 'a11',
        val: `<span>
          a<sub>1,1</sub>
        </span>`,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.65) * animationHeight,
        ],
        lines: [
          {
            from: [
              step3.softmax.items[0].position[0] + boxSize * 0.75,
              step3.softmax.items[0].position[1],
            ],
            to: [
              firstRowPosition * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.65) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'a12',
        val: `<span>
          a<sub>1,2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth,
          (bottomRowPosition - 0.65) * animationHeight,
        ],
        lines: [
          {
            from: [
              step3.softmax.items[0].position[0] +
                boxSize * 0.75 +
                boxPadding * animationWidth,
              step3.softmax.items[0].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.65) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'a13',
        val: `<span>
          a<sub>1,3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.65) * animationHeight,
        ],
        lines: [
          {
            from: [
              step3.softmax.items[0].position[0] +
                boxSize +
                boxPadding * 2 * animationWidth,
              step3.softmax.items[0].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 2,
              (bottomRowPosition - 0.65) * animationHeight + boxSize,
            ],
          },
        ],
      },
      {
        id: 'a14',
        val: `<span>
          a<sub>1,4</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.65) * animationHeight,
        ],
        lines: [
          {
            from: [
              step3.softmax.items[0].position[0] +
                boxSize * 1.2 +
                boxPadding * 3 * animationWidth,
              step3.softmax.items[0].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.65) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  text: {
    ...step3.text,
    items: [
      ...step3.text.items,
      {
        id: 'attention-weights',
        val: attentionWeightsText,
        sizeX: `350px`,
        sizeY: `100px`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 4,
          (bottomRowPosition - 0.6) * animationHeight - boxSize * 1.1,
        ],
      },
    ],
  },
};

const step5 = {
  ...step4,
  operations: {
    ...step4.operations,
    items: [
      ...step4.operations.items,
      {
        id: 'mul11',
        val: `<span>
          <strong>X</strong>
        </span>`,
        position: [
          firstRowPosition * animationWidth + boxSize / 2,
          (bottomRowPosition - 0.75) * animationHeight,
        ],
        lines: [
          {
            from: [
              step4.attention.items[4].position[0] + boxSize / 2,
              step4.attention.items[4].position[1],
            ],
            to: [
              firstRowPosition * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.75) * animationHeight + circleR,
            ],
          },
          {
            from: [
              step4.hidden.items[0].position[0],
              step4.hidden.items[0].position[1] + boxSize / 6,
            ],
            points: [
              [2, (bottomRowPosition - 0.3) * animationHeight + circleR],
              [2, (bottomRowPosition - 0.7) * animationHeight + circleR],
            ],
            to: [
              firstRowPosition * animationWidth + circleR / 2,
              (bottomRowPosition - 0.75) * animationHeight,
            ],
            orientation: 'multi-curved',
          },
        ],
      },
    ],
  },
  text: {
    ...step4.text,
    items: [
      ...step4.text.items,
      {
        id: 'mul-text',
        val: mulText,
        sizeX: `220px`,
        sizeY: `50px`,
        position: [
          step4.attention.items[5].position[0] - 30,
          step4.attention.items[5].position[1] - boxSize * 1.5,
        ],
      },
    ],
  },
};

const step6 = {
  ...step5,
  operations: {
    ...step5.operations,
    items: [
      ...step5.operations.items,
      {
        id: 'mul12',
        val: `<span>
          <strong>X</strong>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
          (bottomRowPosition - 0.75) * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.attention.items[5].position[0] + boxSize / 2,
              step5.attention.items[5].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.75) * animationHeight + circleR,
            ],
          },
          {
            from: [
              step5.hidden.items[1].position[0],
              step5.hidden.items[1].position[1] + boxSize / 6,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth - circleR,
                (bottomRowPosition - 0.3) * animationHeight + circleR,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth - circleR,
                (bottomRowPosition - 0.7) * animationHeight + circleR,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + circleR / 2,
              (bottomRowPosition - 0.75) * animationHeight,
            ],
            orientation: 'multi-curved',
          },
        ],
      },
      {
        id: 'mul13',
        val: `<span>
          <strong>X</strong>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize / 2,
          (bottomRowPosition - 0.75) * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.attention.items[6].position[0] + boxSize / 2,
              step5.attention.items[6].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 2,
              (bottomRowPosition - 0.75) * animationHeight + circleR,
            ],
          },
          {
            from: [
              step5.hidden.items[2].position[0],
              step5.hidden.items[2].position[1] + boxSize / 6,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 - circleR,
                (bottomRowPosition - 0.3) * animationHeight + circleR,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 - circleR,
                (bottomRowPosition - 0.7) * animationHeight + circleR,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                circleR / 2,
              (bottomRowPosition - 0.75) * animationHeight,
            ],
            orientation: 'multi-curved',
          },
        ],
      },
      {
        id: 'mul14',
        val: `<span>
          <strong>X</strong>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize / 2,
          (bottomRowPosition - 0.75) * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.attention.items[7].position[0] + boxSize / 2,
              step5.attention.items[7].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.75) * animationHeight + circleR,
            ],
          },
          {
            from: [
              step5.hidden.items[3].position[0],
              step5.hidden.items[3].position[1] + boxSize / 6,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 - circleR,
                (bottomRowPosition - 0.3) * animationHeight + circleR,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 - circleR,
                (bottomRowPosition - 0.7) * animationHeight + circleR,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                circleR / 2,
              (bottomRowPosition - 0.75) * animationHeight,
            ],
            orientation: 'multi-curved',
          },
        ],
      },
    ],
  },
  text: {
    ...step4.text,
    items: [step4.text.items[0], step4.text.items[1]],
  },
};

const step7 = {
  ...step6,
  operations: {
    ...step6.operations,
    items: [
      ...step6.operations.items,
      {
        id: 'sum',
        val: `<span>
          <strong>+</strong>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 6,
          (bottomRowPosition - 0.55) * animationHeight,
        ],
        lines: [
          {
            from: [
              step6.operations.items[0].position[0],
              step6.operations.items[0].position[1] - circleR,
            ],
            points: [
              [
                step6.operations.items[0].position[0],
                step6.operations.items[0].position[1] - circleR - 5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                step6.operations.items[0].position[1] - circleR - 5,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6,
              (bottomRowPosition - 0.55) * animationHeight - circleR,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step6.operations.items[1].position[0],
              step6.operations.items[1].position[1] - circleR,
            ],
            points: [
              [
                step6.operations.items[1].position[0],
                step6.operations.items[1].position[1] - circleR - 5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                step6.operations.items[0].position[1] - circleR - 5,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6,
              (bottomRowPosition - 0.55) * animationHeight - circleR,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step6.operations.items[2].position[0],
              step6.operations.items[2].position[1] - circleR,
            ],
            points: [
              [
                step6.operations.items[2].position[0],
                step6.operations.items[2].position[1] - circleR - 5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                step6.operations.items[0].position[1] - circleR - 5,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6,
              (bottomRowPosition - 0.55) * animationHeight - circleR,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step6.operations.items[3].position[0],
              step6.operations.items[3].position[1] - circleR,
            ],
            points: [
              [
                step6.operations.items[3].position[0],
                step6.operations.items[3].position[1] - circleR - 5,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                step6.operations.items[0].position[1] - circleR - 5,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6,
              (bottomRowPosition - 0.55) * animationHeight - circleR,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  text: {
    ...step4.text,
    items: [
      {
        ...step4.text.items[0],
        sizeX: `170px`,
        sizeY: `40px`,
        val: alignScoresTextShort,
        position: [
          step4.text.items[0].position[0] - 10,
          step4.text.items[0].position[1] + 40,
        ],
      },
      {
        ...step4.text.items[1],
        sizeX: `170px`,
        sizeY: `40px`,
        val: attentionWeightsTextShort,
        position: [
          step4.text.items[1].position[0] - 10,
          step4.text.items[1].position[1] + 40,
        ],
      },
      {
        id: 'sum-text',
        sizeX: `300px`,
        sizeY: `100px`,
        val: sumText,
        position: [
          step4.text.items[1].position[0] + boxSize * 5,
          step4.text.items[1].position[1],
        ],
      },
    ],
  },
};

const step8 = {
  ...step7,
  state: {
    ...step7.state,
    items: [
      ...step7.state.items,
      {
        id: 's1',
        val: `<span>
          s<sub>1</sub>
        </span>`,
        tooltipValue: stateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step7.state.items[0].position[0] + boxSize,
              step7.state.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 7 -
                boxSize / 3,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 7 + boxSize,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  context: {
    ...step7.context,
    items: [
      ...step7.context.items,
      {
        id: 'c1',
        val: `<span>
          c<sub>1</sub>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7 - boxSize,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step7.operations.items[4].position[0],
              step7.operations.items[4].position[1] + circleR,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 -
                (boxSize * 2) / 3,
              bottomRowPosition * animationHeight,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  output: {
    ...step7.output,
    items: [
      ...step7.output.items,
      {
        id: 'y0',
        val: `<span>
          y<sub>0</sub>
        </span>`,
        name: '[START]',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7 + boxSize / 2,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
};

const step9 = {
  ...step8,
  output: {
    ...step8.output,
    items: [
      ...step8.output.items,
      {
        id: 'y1-o',
        val: `<span>
          y<sub>1</sub>
        </span>`,
        name: 'uczymy',
        namePosition: 'top',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              step8.state.items[1].position[0] + boxSize / 2,
              step8.state.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                boxSize / 2,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  text: {
    ...step8.text,
    items: [
      step8.text.items[0],
      step8.text.items[1],
      {
        ...step8.text.items[2],
        val: attentionDesc,
        sizeX: '550',
        sizeY: '150',
        position: [
          step8.text.items[2].position[0],
          step8.text.items[2].position[1] - boxSize + 10,
        ],
      },
    ],
  },
};

const step10 = {
  ...step9,
  context: {
    ...step9.context,
    items: [
      {
        id: 'c1',
        val: `<span>
          c<sub>1</sub>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7 - boxSize,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
  attention: {
    ...step9.attention,
    items: [
      {
        ...step9.attention.items[0],
        val: `<span>
          e<sub>2,1</sub>
        </span>`,
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize / 3,
              step9.state.items[1].position[1],
            ],
            points: [
              [
                step9.state.items[1].position[0] + boxSize / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
              [
                firstRowPosition * animationWidth + (boxSize * 2) / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
            ],
            to: [
              firstRowPosition * animationWidth + (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step9.attention.items[0].lines[1],
        ],
      },
      {
        ...step9.attention.items[1],
        val: `<span>
          e<sub>2,2</sub>
        </span>`,
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize / 3,
              step9.state.items[1].position[1],
            ],
            points: [
              [
                step9.state.items[1].position[0] + boxSize / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth +
                  (boxSize * 2) / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step9.attention.items[1].lines[1],
        ],
      },
      {
        ...step9.attention.items[2],
        val: `<span>
          e<sub>2,3</sub>
        </span>`,
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize / 3,
              step9.state.items[1].position[1],
            ],
            points: [
              [
                step9.state.items[1].position[0] + boxSize / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 +
                  (boxSize * 2) / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step9.attention.items[2].lines[1],
        ],
      },
      {
        ...step9.attention.items[3],
        val: `<span>
          e<sub>2,4</sub>
        </span>`,
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize / 3,
              step9.state.items[1].position[1],
            ],
            points: [
              [
                step9.state.items[1].position[0] + boxSize / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 +
                  (boxSize * 2) / 3,
                step9.state.items[1].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step9.attention.items[3].lines[1],
        ],
      },
      {
        ...step9.attention.items[4],
        val: `<span>
          a<sub>2,1</sub>
        </span>`,
      },
      {
        ...step9.attention.items[5],
        val: `<span>
          a<sub>2,2</sub>
        </span>`,
      },
      {
        ...step9.attention.items[6],
        val: `<span>
          a<sub>2,3</sub>
        </span>`,
      },
      {
        ...step9.attention.items[7],
        val: `<span>
          a<sub>2,4</sub>
        </span>`,
      },
    ],
  },
  text: {
    ...step9.text,
    items: [
      step9.text.items[0],
      step9.text.items[1],
      {
        ...step9.text.items[2],
        val: `<span>Calculate new attention weights for given state <strong>s<sub>1</sub></strong> (t = 2)</span>`,
        sizeX: '550',
        sizeY: '50',
        position: [
          step9.text.items[2].position[0],
          step9.text.items[2].position[1] + boxSize,
        ],
      },
    ],
  },
};

const step11 = {
  ...step10,
  context: {
    ...step10.context,
    items: [
      ...step10.context.items,
      {
        id: 'c2',
        val: `<span>
          c<sub>2</sub>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step7.operations.items[4].position[0],
              step7.operations.items[4].position[1] + circleR,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 8 +
                  boxSize / 2,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  text: {
    ...step10.text,
    items: [
      step10.text.items[0],
      step10.text.items[1],
      {
        ...step10.text.items[2],
        val: attentionDesc2,
        sizeX: '550',
        sizeY: '150',
        position: [
          step10.text.items[2].position[0],
          step10.text.items[2].position[1] - boxSize,
        ],
      },
    ],
  },
};

const step12 = {
  ...step11,
  state: {
    ...step11.state,
    items: [
      ...step11.state.items,
      {
        id: 's2',
        val: `<span>
          s<sub>2</sub>
        </span>`,
        tooltipValue: stateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize / 2,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step11.state.items[1].position[0] + boxSize,
              step11.state.items[1].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step11.context.items[1].position[0] + boxSize / 2,
              step11.context.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 4 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize * 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                (boxSize * 2) / 3 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step11.output,
    items: [
      ...step11.output.items,
      {
        id: 'y1',
        val: `<span>
          y<sub>1</sub>
        </span>`,
        name: 'uczymy',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize * 1.5,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'y2-o',
        val: `<span>
          y<sub>2</sub>
        </span>`,
        name: 'się',
        namePosition: 'top',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize / 2,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
};

const step13 = {
  ...step12,
  context: {
    ...step12.context,
    items: [
      step12.context.items[0],
      {
        ...step12.context.items[1],
        lines: [],
      },
    ],
  },
  attention: {
    ...step12.attention,
    items: [
      {
        ...step12.attention.items[0],
        val: `<span>
            e<sub>3,1</sub>
          </span>`,
        lines: [
          {
            from: [
              step12.state.items[2].position[0] + boxSize / 3,
              step12.state.items[2].position[1],
            ],
            points: [
              [
                step12.state.items[2].position[0] + boxSize / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
              [
                firstRowPosition * animationWidth + (boxSize * 2) / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
            ],
            to: [
              firstRowPosition * animationWidth + (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step12.attention.items[0].lines[1],
        ],
      },
      {
        ...step12.attention.items[1],
        val: `<span>
              e<sub>3,2</sub>
            </span>`,
        lines: [
          {
            from: [
              step12.state.items[2].position[0] + boxSize / 3,
              step12.state.items[2].position[1],
            ],
            points: [
              [
                step12.state.items[2].position[0] + boxSize / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth +
                  (boxSize * 2) / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step12.attention.items[1].lines[1],
        ],
      },
      {
        ...step12.attention.items[2],
        val: `<span>
              e<sub>3,3</sub>
            </span>`,
        lines: [
          {
            from: [
              step12.state.items[2].position[0] + boxSize / 3,
              step12.state.items[2].position[1],
            ],
            points: [
              [
                step12.state.items[2].position[0] + boxSize / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 +
                  (boxSize * 2) / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step12.attention.items[2].lines[1],
        ],
      },
      {
        ...step12.attention.items[3],
        val: `<span>
              e<sub>3,4</sub>
            </span>`,
        lines: [
          {
            from: [
              step12.state.items[2].position[0] + boxSize / 3,
              step12.state.items[2].position[1],
            ],
            points: [
              [
                step12.state.items[2].position[0] + boxSize / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 +
                  (boxSize * 2) / 3,
                step12.state.items[2].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step12.attention.items[3].lines[1],
        ],
      },
      {
        ...step12.attention.items[4],
        val: `<span>
          a<sub>3,1</sub>
        </span>`,
      },
      {
        ...step12.attention.items[5],
        val: `<span>
              a<sub>3,2</sub>
            </span>`,
      },
      {
        ...step12.attention.items[6],
        val: `<span>
              a<sub>3,3</sub>
            </span>`,
      },
      {
        ...step12.attention.items[7],
        val: `<span>
              a<sub>3,4</sub>
            </span>`,
      },
    ],
  },
  text: {
    ...step12.text,
    items: [
      step12.text.items[0],
      step12.text.items[1],
      {
        ...step12.text.items[2],
        val: `<span>Calculate new attention weights for given state <strong>s<sub>2</sub></strong> (t = 3)</span>`,
        sizeX: '550',
        sizeY: '50',
        position: [
          step12.text.items[2].position[0],
          step12.text.items[2].position[1] + boxSize,
        ],
      },
    ],
  },
};

const step14 = {
  ...step13,
  context: {
    ...step13.context,
    items: [
      ...step13.context.items,
      {
        id: 'c3',
        val: `<span>
          c<sub>3</sub>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 10 - boxSize,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step13.operations.items[4].position[0],
              step13.operations.items[4].position[1] + circleR,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 10 -
                  boxSize / 2,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10 -
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  text: {
    ...step13.text,
    items: [
      step13.text.items[0],
      step13.text.items[1],
      {
        ...step13.text.items[2],
        val: attentionDesc3,
        sizeX: '550',
        sizeY: '150',
        position: [
          step13.text.items[2].position[0],
          step13.text.items[2].position[1] - boxSize,
        ],
      },
    ],
  },
};

const step15 = {
  ...step14,
  state: {
    ...step14.state,
    items: [
      ...step14.state.items,
      {
        id: 's3',
        val: `<span>
          s<sub>3</sub>
        </span>`,
        tooltipValue: stateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize * 1.5,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step14.state.items[2].position[0] + boxSize,
              step14.state.items[2].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize * 1.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step14.context.items[2].position[0] + boxSize / 2,
              step14.context.items[2].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 4 +
                boxSize * 1.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize * 3,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                (boxSize * 2) / 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step14.output,
    items: [
      ...step14.output.items,
      {
        id: 'y2',
        val: `<span>
          y<sub>2</sub>
        </span>`,
        name: 'się',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize * 2.5,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'y3-o',
        val: `<span>
          y<sub>3</sub>
        </span>`,
        name: 'uwagi',
        namePosition: 'top',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize * 1.5,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize * 2,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize * 2,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
};

const step16 = {
  ...step15,
  context: {
    ...step15.context,
    items: [
      step15.context.items[0],
      step15.context.items[1],
      {
        ...step15.context.items[2],
        lines: [],
      },
    ],
  },
  attention: {
    ...step15.attention,
    items: [
      {
        ...step15.attention.items[0],
        val: `<span>
            e<sub>4,1</sub>
          </span>`,
        lines: [
          {
            from: [
              step15.state.items[3].position[0] + boxSize / 3,
              step15.state.items[3].position[1],
            ],
            points: [
              [
                step15.state.items[3].position[0] + boxSize / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
              [
                firstRowPosition * animationWidth + (boxSize * 2) / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
            ],
            to: [
              firstRowPosition * animationWidth + (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step15.attention.items[0].lines[1],
        ],
      },
      {
        ...step15.attention.items[1],
        val: `<span>
              e<sub>4,2</sub>
            </span>`,
        lines: [
          {
            from: [
              step15.state.items[3].position[0] + boxSize / 3,
              step15.state.items[3].position[1],
            ],
            points: [
              [
                step15.state.items[3].position[0] + boxSize / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth +
                  (boxSize * 2) / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step15.attention.items[1].lines[1],
        ],
      },
      {
        ...step15.attention.items[2],
        val: `<span>
              e<sub>4,3</sub>
            </span>`,
        lines: [
          {
            from: [
              step15.state.items[3].position[0] + boxSize / 3,
              step15.state.items[3].position[1],
            ],
            points: [
              [
                step15.state.items[3].position[0] + boxSize / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 2 +
                  (boxSize * 2) / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step15.attention.items[2].lines[1],
        ],
      },
      {
        ...step15.attention.items[3],
        val: `<span>
              e<sub>4,4</sub>
            </span>`,
        lines: [
          {
            from: [
              step15.state.items[3].position[0] + boxSize / 3,
              step15.state.items[3].position[1],
            ],
            points: [
              [
                step15.state.items[3].position[0] + boxSize / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 3 +
                  (boxSize * 2) / 3,
                step15.state.items[3].position[1] - boxSize / 2,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
          step15.attention.items[3].lines[1],
        ],
      },
      {
        ...step15.attention.items[4],
        val: `<span>
          a<sub>4,1</sub>
        </span>`,
      },
      {
        ...step15.attention.items[5],
        val: `<span>
              a<sub>4,2</sub>
            </span>`,
      },
      {
        ...step15.attention.items[6],
        val: `<span>
              a<sub>4,3</sub>
            </span>`,
      },
      {
        ...step15.attention.items[7],
        val: `<span>
              a<sub>4,4</sub>
            </span>`,
      },
    ],
  },
  text: {
    ...step15.text,
    items: [
      step15.text.items[0],
      step15.text.items[1],
      {
        ...step15.text.items[2],
        val: `<span>Calculate new attention weights for given state <strong>s<sub>3</sub></strong> (t = 4)</span>`,
        sizeX: '550',
        sizeY: '50',
        position: [
          step15.text.items[2].position[0],
          step15.text.items[2].position[1] + boxSize,
        ],
      },
    ],
  },
};

const step17 = {
  ...step16,
  context: {
    ...step16.context,
    items: [
      ...step16.context.items,
      {
        id: 'c4',
        val: `<span>
          c<sub>4</sub>
        </span>`,
        tooltipValue: contextText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 11,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step16.operations.items[4].position[0],
              step16.operations.items[4].position[1] + circleR,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 6,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 11 +
                  boxSize / 2,
                bottomRowPosition * animationHeight + boxSize + 35,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 11 +
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
};

const step18 = {
  ...step17,
  state: {
    ...step17.state,
    items: [
      ...step17.state.items,
      {
        id: 's4',
        val: `<span>
          s<sub>4</sub>
        </span>`,
        tooltipValue: stateText,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 11 + boxSize * 0.5,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step17.state.items[3].position[0] + boxSize,
              step17.state.items[3].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 11 +
                boxSize * 0.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step17.context.items[3].position[0] + boxSize / 2,
              step17.context.items[3].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 11 +
                boxSize / 4 +
                boxSize * 0.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 11 +
                boxSize * 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 11 +
                (boxSize * 2) / 3 +
                boxSize * 0.5,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step17.output,
    items: [
      ...step17.output.items,
      {
        id: 'y3',
        val: `<span>
          y<sub>3</sub>
        </span>`,
        name: 'uwagi',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 11 + boxSize * 1.5,
          bottomRowPosition * animationHeight,
        ],
      },
      {
        id: 'y4-o',
        val: `<span>
          y<sub>4</sub>
        </span>`,
        name: '[STOP]',
        namePosition: 'top',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 11 + boxSize * 0.5,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 11 + boxSize,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 11 + boxSize,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  text: {
    ...step17.text,
    items: [
      step17.text.items[0],
      step15.text.items[1],
      {
        ...step17.text.items[2],
        val: `<span style="padding: 0 10px">We're not using the fact that <b><i>h</i></b> vector is an ordered sequence. It is used as unordered set instead. To solve this we have to add a <strong>positional embedding</strong> to each element</span>`,
        sizeX: '550',
        sizeY: '120',
        position: [
          step17.text.items[2].position[0],
          step17.text.items[2].position[1] - boxSize,
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
  step5,
  step6,
  step7,
  step8,
  step9,
  step10,
  step11,
  step12,
  step13,
  step14,
  step15,
  step16,
  step17,
  step18,
};

export { steps, animationWidth, animationHeight };
