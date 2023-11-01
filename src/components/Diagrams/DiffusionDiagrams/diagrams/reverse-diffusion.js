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

const formula1 = katex.renderToString(
  `x_{t-1} = \\frac{1}{\\sqrt{a_t}} (x_t - \\frac{\\beta_t}{\\sqrt{1-\\hat\\alpha}} \\epsilon_\\theta(x_t,t)) + \\sqrt{\\beta_t}\\epsilon`
);
const formula2 = katex.renderToString(
    `PE_{(pos,2i)} = sin(\\frac{pos}{10000^{2i/d_{\\text{model}}}})`
);

const descriptionStep2 = `<span style="padding: 0 10px 0 10px">
<strong>Notice!</strong><br/>
Output of the model is an <b>entire noise</b> that model predicted to be removed from the input. This noise is later scaled base on schedule to be subtracted from the input.
</span>
`;

const descriptionStep3 = `<span style="padding: 0 10px 0 10px">
Take <b>part of the predicted noise</b> and subtract it from the input. Subtraction amount is defined by the schedule. 
First step subtracts only small part of the predicted noise, later steps subtract more and more of the predicted noise.
</span>
`;


const outputFormula = `<span style="padding: 0 10px 0 10px">
Output value<br/>
${formula1}
</span>
`;

const subTooltipText = `<span>
Remove predicted noise from the input
</span>`;

const step1 = {
  output: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#A35A00',
    size: `${posBoxSize}px`,
    blockName: 'output',
    blockType: 'rect',
    items: [],
  },
  model: {
    color: 'rgb(152,152,255)',
    borderColor: '#0021a3',
    blockName: 'model',
    blockType: 'polygon',
    items: [
      {
        id: 'xtn',
        val: `Diffusion model`,
        points: [
          [
            firstRowPosition * animationWidth + posBoxSize * 2,
            topRowPosition * animationHeight,
          ],
          [
            firstRowPosition * animationWidth + posBoxSize * 3,
            topRowPosition * animationHeight + posBoxSize / 4,
          ],
          [
            firstRowPosition * animationWidth + posBoxSize * 4,
            topRowPosition * animationHeight,
          ],
          [
            firstRowPosition * animationWidth + posBoxSize * 4,
            topRowPosition * animationHeight + posBoxSize,
          ],
          [
            firstRowPosition * animationWidth + posBoxSize * 3,
            topRowPosition * animationHeight + (posBoxSize / 4) * 3,
          ],
          [
            firstRowPosition * animationWidth + posBoxSize * 2,
            topRowPosition * animationHeight + posBoxSize,
          ],
        ],
      },
    ],
  },
  noise: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#ffffff',
    size: `${posBoxSize}px`,
    blockName: 'noise',
    blockType: 'rect',
    items: [
      {
        id: 'xtn',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised10.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Random noise
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 4.5,
          topRowPosition * animationHeight,
        ],
      },
    ],
  },
  denoised: {
    color: 'rgba(255,209,153,0)',
    borderColor: '#ffffff',
    size: `${posBoxSize}px`,
    blockName: 'denoised',
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
        val: `<strong>t=10</strong>`,
        tooltipValue: `
          <span>
            This is a simplification, actual step number should be 100x larger.
          </span>
        `,
        sizeX: `50px`,
        sizeY: `30px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2.87,
          topRowPosition * animationHeight,
        ],
      },
    ],
  },
};

const step2 = {
  ...step1,
  noise: {
    ...step1.noise,
    items: [
      {
        ...step1.noise.items[0],
        lines: [
          {
            from: [
              step1.noise.items[0].position[0],
              step1.noise.items[0].position[1] + posBoxSize * 0.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 4,
              step1.noise.items[0].position[1] + posBoxSize * 0.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  output: {
    ...step1.output,
    items: [
      {
        id: 'out1',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Predicted entire noise
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 0.5,
          topRowPosition * animationHeight,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 2,
              topRowPosition * animationHeight + posBoxSize * 0.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 1.5,
              topRowPosition * animationHeight + posBoxSize * 0.5,
            ],
            orientation: 'horizontal',
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
        id: 'description-noise',
        val: descriptionStep2,
        sizeX: `340px`,
        sizeY: `180px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 0.5,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
      },
    ],
  },
};

const step3 = {
  ...step2,
  operations: {
    ...step2.operations,
    items: [
      ...step2.operations.items,
      {
        id: 'subtraction',
        val: `<span>
          <strong>-</strong>
        </span>`,
        tooltipValue: subTooltipText,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              step2.noise.items[0].position[0] + posBoxSize * 0.5,
              step2.noise.items[0].position[1] + posBoxSize,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3 + circleR,
              topRowPosition * animationHeight + posBoxSize * 1.5,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step2.output.items[0].position[0] + posBoxSize / 2,
              step2.output.items[0].position[1] + posBoxSize,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3 - circleR,
              topRowPosition * animationHeight + posBoxSize * 1.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  denoised: {
    ...step2.denoised,
    items: [
      ...step2.denoised.items,
      {
        id: 'denoise1',
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised09.jpg" alt="x(t)">
        </span>`,
        tooltipValue: `
          <span>
            Denoised output
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2.5,
          topRowPosition * animationHeight + posBoxSize * 2,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 3,
              topRowPosition * animationHeight + posBoxSize * 1.5 + circleR,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3,
              topRowPosition * animationHeight + posBoxSize * 2,
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
        step2.text.items[0],
      {
        ...step2.text.items[1],
        val: descriptionStep3,
        sizeX: `320px`,
        sizeY: `250px`,
      },
      {
        id: 'description-formula',
        val: outputFormula,
        sizeX: `400px`,
        sizeY: `120px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3.8,
          topRowPosition * animationHeight + posBoxSize * 2.2,
        ],
      }
    ],
  },
};

const steps = {
  step1,
  step2,
  step3,
};

export { steps, animationWidth, animationHeight };
