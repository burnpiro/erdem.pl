import React from 'react';

import personImg from './person_smile.jpg';

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const topRowPosition = 0.1;
const animationWidth = 1200;
const animationHeight = 500;
const boxSize = 50;
const circleR = 16;

const step1 = {
  inputs: {
    color: '#FFD199',
    borderColor: '#A35A00',
    size: `${boxSize * 3}px`,
    blockName: 'inputs',
    blockType: 'rect',
    items: [
      {
        id: 'x1',
        val: `<span>
          <img src="${personImg}">
        </span>`,
        tooltipValue: `
          <span>
            Image source: <i>WIDER FACE</i> dataset
          </span>
        `,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
    ],
  },
  cnn: {
    color: '#bdbdbd',
    borderColor: '#636363',
    sizeX: `${boxSize}px`,
    sizeY: `${boxSize * 2}px`,
    blockName: 'cnn',
    blockType: 'rect',
    items: [
      {
        id: 'cnn',
        val: `<span>
          CNN
        </span>`,
        tooltipValue: `
          <span>
            <strong>CNN</strong> is used to produce a grid of features. Architecture doesn't matter.
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + boxSize * 3.75,
          (bottomRowPosition - 0.3) * animationHeight + boxSize / 2,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + boxSize * 3,
              (bottomRowPosition - 0.3) * animationHeight + boxSize * 1.5,
            ],
            to: [
              firstRowPosition * animationWidth + boxSize * 3.75,
              (bottomRowPosition - 0.3) * animationHeight +
                boxSize / 2 +
                boxSize,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              firstRowPosition * animationWidth + boxSize * 4.75,
              (bottomRowPosition - 0.3) * animationHeight +
                boxSize / 2 +
                boxSize,
            ],
            to: [
              firstRowPosition * animationWidth + boxSize * 5.5,
              (bottomRowPosition - 0.3) * animationHeight +
                boxSize / 2 +
                boxSize,
            ],
            orientation: 'horizontal',
          },
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
        id: 'h11',
        val: `<span>
          h<sub>1,1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'h12',
        val: `<span>
          h<sub>1,2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'h13',
        val: `<span>
          h<sub>1,3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
      {
        id: 'h21',
        val: `<span>
          h<sub>2,1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'h22',
        val: `<span>
          h<sub>2,2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'h23',
        val: `<span>
          h<sub>2,3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize,
        ],
      },
      {
        id: 'h31',
        val: `<span>
          h<sub>3,1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'h32',
        val: `<span>
          h<sub>3,2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'h33',
        val: `<span>
          h<sub>3,3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.3) * animationHeight + boxSize * 2,
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
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 3,
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
    sizeX: `200px`,
    sizeY: `50px`,
    blockName: 'text',
    blockType: 'text',
    items: [],
  },
  softmax: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: boxSize / 2,
    sizeY: boxSize * 3,
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
          e<sub>1,1,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'e12',
        val: `<span>
          e<sub>1,1,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'e13',
        val: `<span>
          e<sub>1,1,3</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'e21',
        val: `<span>
          e<sub>1,2,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e22',
        val: `<span>
          e<sub>1,2,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e23',
        val: `<span>
          e<sub>1,2,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
      },
      {
        id: 'e31',
        val: `<span>
          e<sub>1,3,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'e32',
        val: `<span>
          e<sub>1,3,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'e33',
        val: `<span>
          e<sub>1,3,3</sub>
        </span>`,
        tooltipValue: `
          <span>
          e<sub>t,i,j</sub> = f<sub>att</sub>(s<sub>t-1</sub>, h<sub>i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
        ],
      },
    ],
  },
  state: {
    ...step1.state,
    items: [
      {
        ...step1.state.items[0],
        lines: [
          step1.state.items[0].lines[0],
          {
            from: [
              step1.state.items[0].position[0] + boxSize / 2,
              step1.state.items[0].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 3,
              (bottomRowPosition - 0.7) * animationHeight + boxSize * 3,
            ],
          },
          {
            from: [
              step1.hidden.items[1].position[0] + boxSize / 2,
              step1.hidden.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize * 1.5,
              (bottomRowPosition - 0.7) * animationHeight + boxSize * 3,
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
        val: `<span style="text-align: center; margin: 10px 0">
          <strong>Alignment scores</strong><br/>
          for all hidden features (h<sub>i,j</sub>)
        </span>`,
        sizeX: `250px`,
        sizeY: `80px`,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.6) * animationHeight,
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
        val: `<span style="transform: rotate(-90deg);">
          softmax
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
        lines: [
          {
            from: [
              step2.attention.items[5].position[0] + boxSize,
              step2.attention.items[5].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 5,
              (bottomRowPosition - 0.7) * animationHeight + boxSize * 1.5,
            ],
            orientation: 'horizontal',
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
          a<sub>1,1,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'a12',
        val: `<span>
          a<sub>1,1,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'a13',
        val: `<span>
          a<sub>1,1,3</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 3,
          (bottomRowPosition - 0.7) * animationHeight,
        ],
      },
      {
        id: 'a21',
        val: `<span>
          a<sub>1,2,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
        lines: [
          {
            from: [
              step3.softmax.items[0].position[0] + boxSize / 2,
              step3.softmax.items[0].position[1] + boxSize * 1.5,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize,
              (bottomRowPosition - 0.7) * animationHeight +
                boxSize +
                boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'a22',
        val: `<span>
          a<sub>1,2,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
      },
      {
        id: 'a23',
        val: `<span>
          a<sub>1,2,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 3,
          (bottomRowPosition - 0.7) * animationHeight + boxSize,
        ],
      },
      {
        id: 'a31',
        val: `<span>
          a<sub>1,3,1</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'a32',
        val: `<span>
          a<sub>1,3,2</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 2,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
        ],
      },
      {
        id: 'a33',
        val: `<span>
          a<sub>1,3,3</sub>
        </span>`,
        tooltipValue: `
          <span>
          a<sub>t,i,j</sub> = softmax(e<sub>t,i,j</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5 + boxSize * 3,
          (bottomRowPosition - 0.7) * animationHeight + boxSize * 2,
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
        val: `<span style="text-align: center; margin: 10px 0">
          <strong>Attention weights</strong><br/>
          0 < a<sub>t,i,j</sub> < 1 <br/> ∑<sub>i,j</sub>a<sub>t,i,j</sub> = 1
        </span>`,
        sizeX: `250px`,
        sizeY: `100px`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7 + boxSize,
          (bottomRowPosition - 0.65) * animationHeight,
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
        id: 'mul',
        val: `<span>
          <strong style="font-size: 25px">o</strong>
        </span>`,
        tooltipValue: `<span>
          Element-Wise multiplication <br/>
          ∀<sub>i,j</sub>&nbsp; a<sub>t,i,j</sub> * h<sub>i,j</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 6 + boxSize / 2,
          bottomRowPosition * animationHeight - boxSize / 2,
        ],
        lines: [
          {
            from: [
              step4.attention.items[16].position[0] + boxSize / 2,
              step4.attention.items[16].position[1] + boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6 +
                boxSize / 2,
              bottomRowPosition * animationHeight - circleR * 3,
            ],
          },
          {
            from: [
              step4.hidden.items[8].position[0] + boxSize,
              step4.hidden.items[8].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6,
              bottomRowPosition * animationHeight - boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sum',
        val: `<span>
          <strong style="font-size: 25px">+</strong>
        </span>`,
        tooltipValue: `<span>
          c<sub>t</sub> = <span style="font-size: 26px">∑</span><sub>i,j</sub> a<sub>t,i,j</sub>h<sub>i,j</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 6 + boxSize / 2,
          bottomRowPosition * animationHeight + boxSize,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 6 +
                boxSize / 2,
              bottomRowPosition * animationHeight - circleR / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 6 +
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
    ],
  },
  context: {
    ...step4.context,
    items: [
      ...step4.context.items,
      {
        id: 'c1',
        val: `<span>
          c<sub>1</sub>
        </span>`,
        tooltipValue: `<span>
          c<sub>t</sub> = <span style="font-size: 26px">∑</span><sub>i,j</sub> a<sub>t,i,j</sub>h<sub>i,j</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 6 +
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
};

const step6 = {
  ...step5,
  state: {
    ...step5.state,
    items: [
      ...step5.state.items,
      {
        id: 's1',
        val: `<span>
          s<sub>1</sub>
        </span>`,
        tooltipValue: `
          <span>
           s<sub>t</sub> = g<sub>U</sub>(y<sub>t-1</sub>, s<sub>t-1</sub>, c<sub>t</sub>)
          </span>
        `,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 - boxSize,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.state.items[0].position[0] + boxSize,
              step5.state.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 - boxSize,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step5.context.items[0].position[0] + boxSize / 2,
              step5.context.items[0].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 -
                boxSize +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 8,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 -
                boxSize +
                (boxSize * 2) / 3,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step5.output,
    items: [
      ...step5.output.items,
      {
        id: 'y0',
        val: `<span>
          y<sub>0</sub>
        </span>`,
        name: '[START]',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 - boxSize / 2,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
};

const step7 = {
  ...step6,
  output: {
    ...step6.output,
    items: [
      ...step6.output.items,
      {
        id: 'y1-o',
        val: `<span>
          y<sub>1</sub>
        </span>`,
        name: 'smiling',
        namePosition: 'top',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 - boxSize,
          (bottomRowPosition - 0.35) * animationHeight,
        ],
        lines: [
          {
            from: [
              step6.state.items[1].position[0] + boxSize / 2,
              step6.state.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 -
                boxSize +
                boxSize / 2,
              (bottomRowPosition - 0.35) * animationHeight + boxSize,
            ],
          },
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
      {
        ...step7.state.items[0],
        lines: [step7.state.items[0].lines[0], step7.state.items[0].lines[2]],
      },
      {
        ...step7.state.items[1],
        lines: [
          ...step7.state.items[1].lines,
          {
            from: [
              step7.state.items[1].position[0],
              step7.state.items[1].position[1],
            ],
            to: [
              step7.attention.items[8].position[0] + boxSize,
              step7.attention.items[8].position[1] + boxSize,
            ],
          },
        ],
      },
    ],
  },
  context: {
    ...step7.context,
    items: [
      {
        ...step7.context.items[0],
        lines: [],
      },
    ],
  },
  operations: {
    ...step7.operations,
    items: [],
  },
  attention: {
    ...step7.attention,
    items: step7.attention.items.map((item, idx) => {
      const isScore = idx < 9;
      const col = (idx % 3) + 1;
      const row = Number.parseInt(idx / 3, 10) - (isScore ? -1 : 2);
      return {
        ...item,
        val: `<span>
          ${isScore ? 'e' : 'a'}<sub>2,${row},${col}</sub>
        </span>`,
      };
    }),
  },
};

const step9 = {
  ...step8,
  operations: {
    ...step7.operations,
  },
  context: {
    ...step8.context,
    items: [
      ...step8.context.items,
      {
        id: 'c2',
        val: `<span>
          c<sub>2</sub>
        </span>`,
        tooltipValue: `<span>
          c<sub>t</sub> = <span style="font-size: 26px">∑</span><sub>i,j</sub> a<sub>t,i,j</sub>h<sub>i,j</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8 + boxSize,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 6 +
                boxSize / 2,
              bottomRowPosition * animationHeight + boxSize,
            ],
            points: [
              [
                (firstRowPosition + boxPadding) * animationWidth * 6 +
                  boxSize * 1.5,
                bottomRowPosition * animationHeight + boxSize,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 6 +
                  boxSize * 1.5,
                0.99 * animationHeight,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 8 +
                  boxSize * 1.5,
                0.99 * animationHeight,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize * 1.5,
              bottomRowPosition * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
};

const step10 = {
  ...step9,
  state: {
    ...step9.state,
    items: [
      ...step9.state.items,
      {
        id: 's2',
        val: `<span>
          s<sub>2</sub>
        </span>`,
        tooltipValue: `
          <span>
           s<sub>t</sub> = g<sub>U</sub>(y<sub>t-1</sub>, s<sub>t-1</sub>, c<sub>t</sub>)
          </span>
        `,
        position: [
          step9.state.items[1].position[0] + boxSize * 2.5,
          step9.state.items[1].position[1],
        ],
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize,
              step9.state.items[1].position[1] + boxSize / 2,
            ],
            to: [
              step9.state.items[1].position[0] + boxSize * 2.5,
              step9.state.items[1].position[1] + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step9.context.items[1].position[0] + boxSize / 2,
              step9.context.items[1].position[1],
            ],
            to: [
              step9.state.items[1].position[0] + boxSize * 2.8,
              step9.state.items[1].position[1] + boxSize,
            ],
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize,
              bottomRowPosition * animationHeight,
            ],
            to: [
              step9.state.items[1].position[0] + boxSize * 3.1,
              step9.state.items[1].position[1] + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step9.output,
    items: [
      ...step9.output.items,
      {
        id: 'y1',
        val: `<span>
          y<sub>1</sub>
        </span>`,
        name: 'smiling',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize / 2,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
};

const step11 = {
  ...step10,
  output: {
    ...step10.output,
    items: [
      ...step10.output.items,
      {
        id: 'y2-o',
        val: `<span>
          y<sub>2</sub>
        </span>`,
        name: 'man',
        namePosition: 'top',
        position: [
          step10.state.items[2].position[0],
          step10.state.items[2].position[1] - boxSize * 1.5,
        ],
        lines: [
          {
            from: [
              step10.state.items[2].position[0] + boxSize / 2,
              step10.state.items[2].position[1],
            ],
            to: [
              step10.state.items[2].position[0] + boxSize / 2,
              step10.state.items[2].position[1] - boxSize / 2,
            ],
          },
        ],
      },
    ],
  },
};

const step12 = {
  ...step11,
  operations: {
    ...step8.operations,
  },
  context: {
    ...step11.context,
    items: [
      step11.context.items[0],
      {
        ...step11.context.items[1],
        lines: [],
      },
    ],
  },
  state: {
    ...step11.state,
    items: [
      step11.state.items[0],
      {
        ...step11.state.items[1],
        lines: [
          step11.state.items[1].lines[0],
          step11.state.items[1].lines[1],
          step11.state.items[1].lines[2],
        ],
      },
      {
        ...step11.state.items[2],
        lines: [
          ...step11.state.items[2].lines,
          {
            from: [
              step11.state.items[2].position[0],
              step11.state.items[2].position[1],
            ],
            points: [
              [
                step11.state.items[2].position[0],
                step11.state.items[2].position[1] - 10,
              ],
              [
                step11.attention.items[8].position[0] + boxSize * 3,
                step11.state.items[2].position[1] - 10,
              ],
            ],
            to: [
              step11.attention.items[8].position[0] + boxSize,
              step11.attention.items[8].position[1] + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  attention: {
    ...step11.attention,
    items: step11.attention.items.map((item, idx) => {
      const isScore = idx < 9;
      const col = (idx % 3) + 1;
      const row = Number.parseInt(idx / 3, 10) - (isScore ? -1 : 2);
      return {
        ...item,
        val: `<span>
           ${isScore ? 'e' : 'a'}<sub>3,${row},${col}</sub>
        </span>`,
      };
    }),
  },
};

const step13 = {
  ...step12,
  operations: {
    ...step11.operations,
  },
  context: {
    ...step12.context,
    items: [
      ...step12.context.items,
      {
        id: 'c3',
        val: `<span>
          c<sub>3</sub>
        </span>`,
        tooltipValue: `<span>
          c<sub>t</sub> = <span style="font-size: 26px">∑</span><sub>i,j</sub> a<sub>t,i,j</sub>h<sub>i,j</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9 + boxSize * 2,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step11.operations.items[1].position[0],
              step11.operations.items[1].position[1],
            ],
            points: [
              [
                step11.operations.items[1].position[0] + boxSize,
                step11.operations.items[1].position[1],
              ],
              [
                step11.operations.items[1].position[0] + boxSize,
                0.99 * animationHeight,
              ],
              [
                (firstRowPosition + boxPadding) * animationWidth * 9 +
                  boxSize * 2.5,
                0.99 * animationHeight,
              ],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize * 2.5,
              bottomRowPosition * animationHeight + boxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
};

const step14 = {
  ...step13,
  output: {
    ...step13.output,
    items: [
      ...step13.output.items,
      {
        id: 'y2',
        val: `<span>
          y<sub>2</sub>
        </span>`,
        name: 'man',
        position: [
          step13.context.items[2].position[0] + boxSize * 1.5,
          step13.context.items[2].position[1],
        ],
      },
    ],
  },
  state: {
    ...step13.state,
    items: [
      ...step13.state.items,
      {
        id: 's3',
        val: `<span>
          s<sub>3</sub>
        </span>`,
        tooltipValue: `
          <span>
           s<sub>t</sub> = g<sub>U</sub>(y<sub>t-1</sub>, s<sub>t-1</sub>, c<sub>t</sub>)
          </span>
        `,
        position: [
          step13.state.items[2].position[0] + boxSize * 3,
          step13.state.items[2].position[1],
        ],
        lines: [
          {
            from: [
              step13.state.items[2].position[0] + boxSize,
              step13.state.items[2].position[1] + boxSize / 2,
            ],
            to: [
              step13.state.items[2].position[0] + boxSize * 3,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step13.context.items[2].position[0] + boxSize / 2,
              step13.context.items[2].position[1],
            ],
            to: [
              step13.state.items[2].position[0] + boxSize * 3.2,
              step13.state.items[2].position[1] + boxSize,
            ],
          },
          {
            from: [
              step13.context.items[2].position[0] + boxSize * 2,
              step13.context.items[2].position[1],
            ],
            to: [
              step13.state.items[2].position[0] + boxSize * 3.7,
              step13.state.items[2].position[1] + boxSize,
            ],
          },
        ],
      },
    ],
  },
};

const step15 = {
  ...step14,
  output: {
    ...step14.output,
    items: [
      ...step14.output.items,
      {
        id: 'y3-o',
        val: `<span>
          y<sub>3</sub>
        </span>`,
        name: '[STOP]',
        namePosition: 'top',
        position: [
          step14.output.items[3].position[0] + boxSize * 3,
          step14.output.items[3].position[1],
        ],
        lines: [
          {
            from: [
              step14.state.items[3].position[0] + boxSize / 2,
              step14.state.items[3].position[1],
            ],
            to: [
              step14.output.items[3].position[0] + boxSize * 3.5,
              step14.output.items[3].position[1] + boxSize,
            ],
          },
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
};

export { steps, animationWidth, animationHeight };
