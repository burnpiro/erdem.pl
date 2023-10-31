import React from 'react';
const katex = require(`katex`);

const animationWidth = 1200;
const chartSize = 150;
const chartWidth = 600;
const animationHeight = (chartSize + 20) * 4;
const circleR = 16;
const posBoxSize = 200;
const posBoxSizeX = posBoxSize * 2;

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const topRowPosition = 0.1;

const posSinText = katex.renderToString(
  `PE_{(pos,2i)} = sin(\\frac{pos}{10000^{2i/d_{\\text{model}}}})`
);

const descriptionStep2 = `<span>
<span style="font-size: 14px">Generate noise for current step <strong>t</strong></span><br/>
</span>
`;

const descriptionStep3 = `<span>
<span style="font-size: 14px">Add noise to the input image using linear scheduler</span><br/>
</span>
`;

const descriptionStep4 = `<span>
<span style="font-size: 14px">Output from the step <strong>t</strong> becomes input in the <strong>t+1</strong> step</span><br/>
</span>
`;

const descriptionStep6 = `<span>
<span style="font-size: 14px">Add noise to the new input image using linear scheduler</span><br/>
</span>
`;

const descriptionStep7 = `<span>
<span style="font-size: 14px">Output from the step <strong>t</strong> becomes input again and the whole process repeats</span><br/>
</span>
`;

const informationDestruction = `<span>
<strong>Notice!</strong><br/>
Using <strong>linear scheduler</strong>, the information is lost pretty quickly. 
We're at <strong>t=6</strong> and the output image is already very close to pure noise.
</span>
`;

const sumTooltipText = `<span>
Add noise
</span>`;

const step1 = {
  inputImg: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#A35A00',
    size: `${posBoxSize}px`,
    blockName: 'inputs',
    blockType: 'rect',
    items: [
      {
        id: 'xtn',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised00.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=0
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize,
          (bottomRowPosition - 0.3) * animationHeight,
        ],
      },
    ],
  },
  noiseImg: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#A35A00',
    size: `${posBoxSize}px`,
    blockName: 'noises',
    blockType: 'rect',
    items: [],
  },
  noisedImg: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#A35A00',
    size: `${posBoxSize}px`,
    blockName: 'noisedImages',
    blockType: 'rect',
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
  text: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: `300px`,
    sizeY: `50px`,
    blockName: 'text',
    blockType: 'text',
    items: [
      {
        id: 'generate-noise',
        val: `<strong>t=0</strong>`,
        sizeX: `50px`,
        sizeY: `30px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 1.3,
          topRowPosition * animationHeight + posBoxSize * 0.2,
        ],
      },
    ],
  },
};

const step2 = {
  ...step1,
  noiseImg: {
    ...step1.noiseImg,
    items: [
      {
        id: 'noisetn',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Noise at t=0
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2,
          topRowPosition * animationHeight,
        ],
      },
    ],
  },
  text: {
    ...step1.text,
    items: [
      step1.text.items[0],
      {
        id: 'generate-noise',
        val: descriptionStep2,
        sizeX: `250px`,
        sizeY: `100px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3.5,
          topRowPosition * animationHeight + posBoxSize * 0.2,
        ],
      },
    ],
  },
};

const step3 = {
  ...step2,
  noisedImg: {
    ...step2.noisedImg,
    items: [
      {
        id: 'xtn+1',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised01.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Noised input at t=0
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3,
          (bottomRowPosition - 0.3) * animationHeight,
        ],

        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 2.5,
              (bottomRowPosition - 0.3) * animationHeight + posBoxSize * 0.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3 ,
              (bottomRowPosition - 0.3) * animationHeight + posBoxSize * 0.5,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  operations: {
    ...step2.operations,
    items: [
      ...step2.operations.items,
      {
        id: 'sum',
        val: `<span>
          <strong>+</strong>
        </span>`,
        tooltipValue: sumTooltipText,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2.5,
          (bottomRowPosition - 0.3) * animationHeight + posBoxSize * 0.5,
        ],
        lines: [
          {
            from: [
              step2.inputImg.items[0].position[0] + posBoxSize,
              step2.inputImg.items[0].position[1] + posBoxSize * 0.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 2.5 - circleR,
              (bottomRowPosition - 0.3) * animationHeight + posBoxSize * 0.5,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step2.noiseImg.items[0].position[0] + posBoxSize / 2,
              step2.noiseImg.items[0].position[1] + posBoxSize,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 2.5,
              (bottomRowPosition - 0.3) * animationHeight +
                posBoxSize * 0.5 -
                circleR,
            ],
            orientation: 'vertical',
          },
        ],
      },
    ],
  },
  text: {
    ...step2.text,
    items: [
      step1.text.items[0],
      {
        ...step2.text.items[1],
        val: descriptionStep3,
        sizeX: `250px`,
        sizeY: `100px`,
      },
    ],
  },
};

const step4 = {
  ...step3,
  inputImg: {
    ...step3.inputImg,
    items: [
      {
        ...step3.inputImg.items[0],
        lines: [
          {
            from: [
              step3.noisedImg.items[0].position[0] + posBoxSize * 0.5,
              step3.noisedImg.items[0].position[1] + posBoxSize,
            ],
            points: [
              [
                step3.noisedImg.items[0].position[0] + posBoxSize * 0.5,
                step3.noisedImg.items[0].position[1] + posBoxSize * 1.2,
              ],
              [
                step3.inputImg.items[0].position[0] + posBoxSize * 0.5,
                step3.inputImg.items[0].position[1] + posBoxSize * 1.2,
              ],
            ],
            to: [
              step3.inputImg.items[0].position[0] + posBoxSize * 0.5,
              step3.inputImg.items[0].position[1] + posBoxSize,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  text: {
    ...step3.text,
    items: [
      step3.text.items[0],
      {
        ...step3.text.items[1],
        val: descriptionStep4,
        sizeX: `250px`,
        sizeY: `100px`,
      },
    ],
  },
};

const step5 = {
  ...step4,
  inputImg: {
    ...step4.inputImg,
    items: [
      {
        ...step4.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised01.jpg" alt="x(1)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=1
          </span>
        `,
        lines: [],
      },
    ],
  },
  operations: {
    ...step1.operations,
  },
  noiseImg: {
    ...step1.noiseImg,
  },
  noisedImg: {
    ...step1.noisedImg,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=1</strong>`,
      },
    ],
  },
};

const step6 = {
  ...step5,
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=1
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised02.jpg" alt="x(1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=1
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      step5.text.items[0],
      {
        ...step3.text.items[1],
        val: descriptionStep6,
      },
    ],
  },
};

const step7 = {
  ...step6,
  inputImg: {
    ...step6.inputImg,
    items: [
      {
        ...step6.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised02.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=2
          </span>
        `,
        lines: [],
      },
    ],
  },
  operations: {
    ...step1.operations,
  },
  noiseImg: {
    ...step1.noiseImg,
  },
  noisedImg: {
    ...step1.noisedImg,
  },
  text: {
    ...step6.text,
    items: [
      {
        ...step6.text.items[0],
        val: `<strong>t=2</strong>`,
      },
      {
        ...step6.text.items[1],
        val: descriptionStep7,
      },
    ],
  },
};

const step8 = {
  ...step7,
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=2
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=2
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [step7.text.items[0]],
  },
};

const step9 = {
  ...step8,
  inputImg: {
    ...step8.inputImg,
    items: [
      {
        ...step8.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=3
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=3
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=3
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step8.text,
    items: [
      {
        ...step8.text.items[0],
        val: `<strong>t=3</strong>`,
      },
    ],
  },
};

const step10 = {
  ...step9,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=4
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=4
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised04.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=4
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=4</strong>`,
      },
    ],
  },
};

const step11 = {
  ...step10,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised04.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=5
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=5
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised05.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=5
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=5</strong>`,
      },
    ],
  },
};

const step12 = {
  ...step11,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised05.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=6
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=6
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised06.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=6
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=6</strong>`,
      },
      {
        ...step2.text.items[1],
        sizeX: '450',
        sizeY: '200',
        val: informationDestruction,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3.2,
          topRowPosition * animationHeight ,
        ],
      },
    ],
  },
};

const step13 = {
  ...step12,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised06.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=7
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=7
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised07.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=7
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=7</strong>`,
      },
    ],
  },
};

const step14 = {
  ...step13,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised07.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=8
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=8
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised08.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=8
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=8</strong>`,
      },
    ],
  },
};

const step15 = {
  ...step14,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised08.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=9
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=9
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised09.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=9
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=9</strong>`,
      },
    ],
  },
};

const step16 = {
  ...step15,
  inputImg: {
    ...step1.inputImg,
    items: [
      {
        ...step1.inputImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised09.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Input at t=10
          </span>
        `,
        lines: [],
      },
    ],
  },
  noiseImg: {
    ...step3.noiseImg,
    items: [
      {
        ...step3.noiseImg.items[0],
        tooltipValue: `
          <span>
            Noise at t=10
          </span>
        `,
      },
    ],
  },
  noisedImg: {
    ...step3.noisedImg,
    items: [
      {
        ...step3.noisedImg.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised10.jpg" alt="x(t+1)">
        </span>`,
        tooltipValue: `
          <span>
            Output at t=10
          </span>
        `,
      },
    ],
  },
  operations: {
    ...step3.operations,
  },
  text: {
    ...step1.text,
    items: [
      {
        ...step1.text.items[0],
        val: `<strong>t=10</strong>`,
      },
      {
        ...step2.text.items[1],
        val: `Initial information is completely destroyed at the last step.`,
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
};

export { steps, animationWidth, animationHeight };
