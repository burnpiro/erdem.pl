import React from 'react';

const firstRowPosition = 0.01;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const animationWidth = 1200;
const animationHeight = 500;
const boxSize = 50;
const step1 = {
  inputs: [
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
  hidden: [],
};

const step2 = {
  inputs: [...step1.inputs],
  hidden: [
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
            step1.inputs[0].position[0] + boxSize / 2,
            step1.inputs[0].position[1],
          ],
          to: [
            firstRowPosition * animationWidth + boxSize / 2,
            (bottomRowPosition - 0.2) * animationHeight + boxSize,
          ],
        },
      ],
    },
  ],
};

const step3 = {
  inputs: [...step2.inputs],
  hidden: [
    ...step2.hidden,
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
            step2.inputs[1].position[0] + boxSize / 2,
            step2.inputs[1].position[1],
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth + boxSize / 2,
            (bottomRowPosition - 0.2) * animationHeight + boxSize,
          ],
        },
        {
          from: [
            step2.hidden[0].position[0] + boxSize,
            step2.hidden[0].position[1] + boxSize / 2,
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth,
            (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
          ],
        },
      ],
    },
  ],
};

const step4 = {
  inputs: [...step3.inputs],
  hidden: [
    ...step3.hidden,
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
            step3.inputs[2].position[0] + boxSize / 2,
            step3.inputs[2].position[1],
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth * 2 + boxSize / 2,
            (bottomRowPosition - 0.2) * animationHeight + boxSize,
          ],
        },
        {
          from: [
            step3.hidden[1].position[0] + boxSize,
            step3.hidden[1].position[1] + boxSize / 2,
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth * 2,
            (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
          ],
        },
      ],
    },
  ],
};

const step5 = {
  inputs: [...step4.inputs],
  hidden: [
    ...step4.hidden,
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
            step4.inputs[3].position[0] + boxSize / 2,
            step4.inputs[3].position[1],
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth * 3 + boxSize / 2,
            (bottomRowPosition - 0.2) * animationHeight + boxSize,
          ],
        },
        {
          from: [
            step4.hidden[2].position[0] + boxSize,
            step4.hidden[2].position[1] + boxSize / 2,
          ],
          to: [
            (firstRowPosition + boxPadding) * animationWidth * 3,
            (bottomRowPosition - 0.2) * animationHeight + boxSize / 2,
          ],
        },
      ],
    },
  ],
};

const steps = { step1, step2, step3, step4, step5 };

export { steps, animationWidth, animationHeight };
