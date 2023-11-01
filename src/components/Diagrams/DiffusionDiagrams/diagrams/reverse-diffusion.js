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
  `x_{t-1} = \\frac{1}{\\sqrt{a_t}} (x_t - \\frac{\\beta_t}{\\sqrt{1-\\hat\\alpha}} \\epsilon_\\theta(x_t,t))`
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

const descriptionStep4 = `<span style="padding: 0 10px 0 10px">
Output from the <b>t</b> timestep becomes an input in <b>t-1</b>.
</span>
`;

const descriptionStep6 = `<span style="padding: 0 10px 0 10px">
Generate entire noise once again, <b>this time take more of that noise and subtract it</b> from the input (because beta increases).

</span>
`;

const descriptionStep30 = `<span style="padding: 0 10px 0 10px">
Generate entire noise once again, <b>this time take more of that noise and subtract it</b> from the input (because beta increases).

</span>
`;

const outputFormula = `<span style="padding: 0 10px 0 10px">
Output value<br/>
${formula1}
</span>
`;

const outputFormula2 = `<span style="padding: 0 10px 0 10px">
<strong>Notice!</strong><br/>
Last step doesn't add noise at the end of the forumla (${katex.renderToString(
  `\\sqrt{\\beta_t}\\epsilon`
)})<br/><br/>

Output value<br/>
${formula2}
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
            ${katex.renderToString(`x_{t}`)}
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
              step2.noise.items[0].position[0],
              step2.noise.items[0].position[1] + posBoxSize - 4,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3 + circleR,
              topRowPosition * animationHeight + posBoxSize * 1.5,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step2.output.items[0].position[0] + posBoxSize,
              step2.output.items[0].position[1] + posBoxSize - 4,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 3 - circleR,
              topRowPosition * animationHeight + posBoxSize * 1.5,
            ],
            orientation: 'horizontal',
          },
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
            ${katex.renderToString(`x_{t-1}`)}
          </span>
        `,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2.5,
          topRowPosition * animationHeight + posBoxSize * 2,
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
      },
    ],
  },
};

const step4 = {
  ...step3,
  operations: {
    ...step1.operations,
  },
  output: {
    ...step1.output,
  },
  noise: {
    ...step3.noise,
    items: [
      {
        ...step3.noise.items[0],
        lines: [
          {
            from: [
              step3.denoised.items[0].position[0] + posBoxSize,
              step3.denoised.items[0].position[1],
            ],
            to: [
              step3.noise.items[0].position[0] + posBoxSize * 0.5,
              step3.noise.items[0].position[1] + posBoxSize,
            ],
            orientation: 'vertical',
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
        sizeX: `320px`,
        sizeY: `120px`,
      },
      step3.text.items[2],
    ],
  },
};

const step5 = {
  ...step4,
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step1.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised09.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step4.text,
    items: [
      {
        ...step4.text.items[0],
        val: `<b>t=9</b>`,
      },
    ],
  },
};

const step6 = {
  ...step5,
  noise: {
    ...step5.noise,
    items: [
      {
        ...step5.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step5.text,
    items: [
      ...step5.text.items,
      {
        ...step2.text.items[1],
        val: descriptionStep6,
      },
    ],
  },
};

const step7 = {
  ...step6,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised08.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step6.noise,
    items: [
      {
        ...step6.noise.items[0],
        lines: [...step6.noise.items[0].lines, ...step4.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step6.text,
    items: [
      ...step6.text.items,
      {
        ...step4.text.items[2],
      },
    ],
  },
};

const step8 = {
  ...step7,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised08.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step7.text,
    items: [
      {
        ...step7.text.items[0],
        val: `<b>t=8</b>`,
      },
    ],
  },
};

const step9 = {
  ...step8,
  noise: {
    ...step8.noise,
    items: [
      {
        ...step8.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step8.text,
    items: [step8.text.items[0], step6.text.items[1]],
  },
};

const step10 = {
  ...step9,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised07.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step9.noise,
    items: [
      {
        ...step9.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step9.text,
    items: [...step9.text.items, step7.text.items[2]],
  },
};

const step11 = {
  ...step10,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised07.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step10.text,
    items: [
      {
        ...step10.text.items[0],
        val: `<b>t=7</b>`,
      },
    ],
  },
};

const step12 = {
  ...step11,
  noise: {
    ...step11.noise,
    items: [
      {
        ...step11.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step11.text,
    items: [step11.text.items[0], step6.text.items[1]],
  },
};

const step13 = {
  ...step12,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised06.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step12.noise,
    items: [
      {
        ...step12.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step12.text,
    items: [...step12.text.items, step7.text.items[2]],
  },
};

const step14 = {
  ...step13,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised06.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step13.text,
    items: [
      {
        ...step13.text.items[0],
        val: `<b>t=6</b>`,
      },
    ],
  },
};

const step15 = {
  ...step14,
  noise: {
    ...step14.noise,
    items: [
      {
        ...step14.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step14.text,
    items: [step14.text.items[0], step6.text.items[1]],
  },
};

const step16 = {
  ...step15,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised05.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step15.noise,
    items: [
      {
        ...step15.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step15.text,
    items: [...step15.text.items, step7.text.items[2]],
  },
};

const step17 = {
  ...step16,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised05.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step16.text,
    items: [
      {
        ...step16.text.items[0],
        val: `<b>t=5</b>`,
      },
    ],
  },
};

const step18 = {
  ...step17,
  noise: {
    ...step17.noise,
    items: [
      {
        ...step17.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step17.text,
    items: [step17.text.items[0], step6.text.items[1]],
  },
};

const step19 = {
  ...step18,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised04.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step18.noise,
    items: [
      {
        ...step18.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step18.text,
    items: [...step18.text.items, step7.text.items[2]],
  },
};

const step20 = {
  ...step19,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised04.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step19.text,
    items: [
      {
        ...step19.text.items[0],
        val: `<b>t=4</b>`,
      },
    ],
  },
};

const step21 = {
  ...step20,
  noise: {
    ...step20.noise,
    items: [
      {
        ...step20.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step20.text,
    items: [step20.text.items[0], step6.text.items[1]],
  },
};

const step22 = {
  ...step21,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step21.noise,
    items: [
      {
        ...step21.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step21.text,
    items: [...step21.text.items, step7.text.items[2]],
  },
};

const step23 = {
  ...step22,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised03.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step22.text,
    items: [
      {
        ...step22.text.items[0],
        val: `<b>t=3</b>`,
      },
    ],
  },
};

const step24 = {
  ...step23,
  noise: {
    ...step23.noise,
    items: [
      {
        ...step23.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step23.text,
    items: [step23.text.items[0], step6.text.items[1]],
  },
};

const step25 = {
  ...step24,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised02.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step24.noise,
    items: [
      {
        ...step24.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step24.text,
    items: [...step24.text.items, step7.text.items[2]],
  },
};

const step26 = {
  ...step25,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised02.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step25.text,
    items: [
      {
        ...step25.text.items[0],
        val: `<b>t=2</b>`,
      },
    ],
  },
};

const step27 = {
  ...step26,
  noise: {
    ...step26.noise,
    items: [
      {
        ...step26.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step26.text,
    items: [step26.text.items[0], step6.text.items[1]],
  },
};

const step28 = {
  ...step27,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised01.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  noise: {
    ...step27.noise,
    items: [
      {
        ...step27.noise.items[0],
        lines: [...step7.noise.items[0].lines],
      },
    ],
  },
  text: {
    ...step27.text,
    items: [...step27.text.items, step7.text.items[2]],
  },
};

const step29 = {
  ...step28,
  operations: {
    ...step1.operations,
  },
  denoised: {
    ...step1.denoised,
  },
  noise: {
    ...step1.noise,
    items: [
      {
        ...step6.noise.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised01.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step28.text,
    items: [
      {
        ...step28.text.items[0],
        val: `<b>t=1</b>`,
      },
    ],
  },
};

const step30 = {
  ...step29,
  noise: {
    ...step29.noise,
    items: [
      {
        ...step29.noise.items[0],
        lines: [...step2.noise.items[0].lines],
      },
    ],
  },
  output: {
    ...step2.output,
    items: [
      {
        ...step2.output.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noise00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step29.text,
    items: [
      step29.text.items[0],
      {
        ...step6.text.items[1],
        val: descriptionStep30,
      },
    ],
  },
};

const step31 = {
  ...step30,
  operations: {
    ...step3.operations,
  },
  denoised: {
    ...step4.denoised,
    items: [
      {
        ...step4.denoised.items[0],
        val: `<span>
          <img src="/media/diagrams/diffusion/forward/noised00.jpg" alt="x(t)">
        </span>`,
      },
    ],
  },
  text: {
    ...step30.text,
    items: [
      ...step30.text.items,
      {
        ...step7.text.items[2],
        val: outputFormula2,
        sizeY: `200px`,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 3.8,
          topRowPosition * animationHeight + posBoxSize * 1.8,
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
  step19,
  step20,
  step21,
  step22,
  step23,
  step24,
  step25,
  step26,
  step27,
  step28,
  step29,
  step30,
  step31,
};

export { steps, animationWidth, animationHeight };
