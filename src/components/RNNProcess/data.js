import React from 'react';

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const animationWidth = 1200;
const animationHeight = 500;
const boxSize = 50;
const step1 = {
  inputs: {
    color: '#FFD199',
    borderColor: '#A35A00',
    size: `${boxSize}px`,
    blockName: 'inputs',
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
  hidden: {
    color: '#9BF6FF',
    borderColor: '#00838F',
    size: `${boxSize}px`,
    blockName: 'hidden',
    items: [],
  },
  state: {
    color: '#FDFFB6',
    borderColor: '#636600',
    size: `${boxSize}px`,
    blockName: 'state',
    items: [],
  },
  context: {
    color: '#FFADAD',
    borderColor: '#660000',
    size: `${boxSize}px`,
    blockName: 'context',
    items: [],
  },
  output: {
    color: '#CAFFBF',
    borderColor: '#147A00',
    size: `${boxSize}px`,
    blockName: 'output',
    items: [],
  },
};

const step2 = {
  ...step1,
  hidden: {
    ...step1.hidden,
    items: [
      {
        id: 'h1',
        val: `<span>
          h<sub>1</sub>
        </span>`,
        position: [
          firstRowPosition * animationWidth,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step1.inputs.items[0].position[0] + boxSize / 2,
              step1.inputs.items[0].position[1],
            ],
            to: [
              firstRowPosition * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
};

const step3 = {
  ...step2,
  hidden: {
    ...step2.hidden,
    items: [
      ...step2.hidden.items,
      {
        id: 'h2',
        val: `<span>
          h<sub>2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step2.inputs.items[1].position[0] + boxSize / 2,
              step2.inputs.items[1].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              step2.hidden.items[0].position[0] + boxSize,
              step2.hidden.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
    ],
  },
};

const step4 = {
  ...step3,
  hidden: {
    ...step3.hidden,
    items: [
      ...step3.hidden.items,
      {
        id: 'h3',
        val: `<span>
          h<sub>3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 2,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step3.inputs.items[2].position[0] + boxSize / 2,
              step3.inputs.items[2].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              step3.hidden.items[1].position[0] + boxSize,
              step3.hidden.items[1].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
          },
        ],
      },
    ],
  },
};

const step5 = {
  ...step4,
  hidden: {
    ...step4.hidden,
    items: [
      ...step4.hidden.items,
      {
        id: 'h4',
        val: `<span>
          h<sub>4</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 3,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step4.inputs.items[3].position[0] + boxSize / 2,
              step4.inputs.items[3].position[1],
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 3 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
          {
            from: [
              step4.hidden.items[2].position[0] + boxSize,
              step4.hidden.items[2].position[1] + boxSize / 2,
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
};

const step6 = {
  ...step5,
  state: {
    ...step5.state,
    items: [
      ...step5.state.items,
      {
        id: 's0',
        val: `<span>
          s<sub>0</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.hidden.items[3].position[0] + boxSize,
              step5.hidden.items[3].position[1] + boxSize / 2,
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
    ...step5.context,
    items: [
      ...step5.context.items,
      {
        id: 'c',
        val: `<span>
          c
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 5,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step5.hidden.items[3].position[0] + boxSize,
              step5.hidden.items[3].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 5,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
};

const step7 = {
  ...step6,
  state: {
    ...step6.state,
    items: [
      ...step6.state.items,
      {
        id: 's1',
        val: `<span>
          s<sub>1</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step6.state.items[0].position[0] + boxSize,
              step6.state.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step6.context.items[0].position[0] + boxSize,
              step6.context.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
            // orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 7 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step6.output,
    items: [
      ...step6.output.items,
      {
        id: 'y0',
        val: `<span>
          y<sub>0</sub>
        </span>`,
        name: '[START]',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 7,
          bottomRowPosition * animationHeight,
        ],
      },
    ],
  },
};

const step8 = {
  ...step7,
  output: {
    ...step7.output,
    items: [
      ...step7.output.items,
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
              step7.state.items[1].position[0] + boxSize / 2,
              step7.state.items[1].position[1],
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
};

const step9 = {
  ...step8,
  state: {
    ...step8.state,
    items: [
      ...step8.state.items,
      {
        id: 's2',
        val: `<span>
          s<sub>2</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step8.state.items[0].position[0] + boxSize,
              step8.state.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step8.context.items[0].position[0] + boxSize,
              step8.context.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
            // orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step8.output,
    items: [
      ...step8.output.items,
      {
        id: 'y1',
        val: `<span>
          y<sub>1</sub>
        </span>`,
        name: 'uczymy',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 8,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step8.output.items[1].position[0] + boxSize,
              step8.output.items[1].position[1] + boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
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
          (firstRowPosition + boxPadding) * animationWidth * 8,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 8 +
                boxSize / 2,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
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
        id: 's3',
        val: `<span>
          s<sub>3</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step9.state.items[1].position[0] + boxSize,
              step9.state.items[1].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step9.context.items[0].position[0] + boxSize,
              step9.context.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
            // orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
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
        id: 'y2',
        val: `<span>
          y<sub>2</sub>
        </span>`,
        name: 'się',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 9,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step9.output.items[3].position[0] + boxSize,
              step9.output.items[3].position[1] + boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
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
          (firstRowPosition + boxPadding) * animationWidth * 9,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 9 +
                boxSize / 2,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
};

const step11 = {
  ...step10,
  state: {
    ...step10.state,
    items: [
      ...step10.state.items,
      {
        id: 's4',
        val: `<span>
          s<sub>4</sub>
        </span>`,
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 10,
          (bottomRowPosition - 0.2) * animationHeight,
        ],
        lines: [
          {
            from: [
              step10.state.items[2].position[0] + boxSize,
              step10.state.items[2].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10,
              (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step10.context.items[0].position[0] + boxSize,
              step10.context.items[0].position[1] + boxSize / 2,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10 +
                boxSize / 6,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
            // orientation: 'horizontal',
          },
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 10 +
                boxSize / 2,
              bottomRowPosition * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight + boxSize,
            ],
          },
        ],
      },
    ],
  },
  output: {
    ...step10.output,
    items: [
      ...step10.output.items,
      {
        id: 'y3',
        val: `<span>
          y<sub>3</sub>
        </span>`,
        name: 'uwagi',
        position: [
          (firstRowPosition + boxPadding) * animationWidth * 10,
          bottomRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              step10.output.items[5].position[0] + boxSize,
              step10.output.items[5].position[1] + boxSize,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10,
              bottomRowPosition * animationHeight + boxSize / 2,
            ],
            orientation: 'horizontal',
          },
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
          (firstRowPosition + boxPadding) * animationWidth * 10,
          (bottomRowPosition - 0.4) * animationHeight,
        ],
        lines: [
          {
            from: [
              (firstRowPosition + boxPadding) * animationWidth * 10 +
                boxSize / 2,
              (bottomRowPosition - 0.2) * animationHeight,
            ],
            to: [
              (firstRowPosition + boxPadding) * animationWidth * 10 +
                boxSize / 2,
              (bottomRowPosition - 0.4) * animationHeight + boxSize,
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
};

export { steps, animationWidth, animationHeight };
