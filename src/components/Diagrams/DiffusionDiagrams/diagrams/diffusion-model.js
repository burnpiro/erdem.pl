import React from 'react';
import sinSVG from './sinusoid.svg';
const katex = require(`katex`);

const animationWidth = 1600;
const chartSize = 150;
const chartWidth = 600;
const animationHeight = (chartSize + 20) * 4;
const circleR = 12;
const posBoxSize = 30;
const posBoxSizeX = posBoxSize * 2;

const firstRowPosition = 0.15;
const boxPadding = 0.07;
const bottomRowPosition = 0.8;
const topRowPosition = 0.1;

const posSinText = katex.renderToString(
  `PE_{(pos,2i)} = sin(\\frac{pos}{10000^{2i/d_{\\text{model}}}})`
);

const COLORS = {
  embedding: '#da0000',
  conv: '#e885fc',
  input: '#000000',
  downsample: '#005fa3',
  attention: '#e78200',
  upsample: '#00a36a',
}

const legend = `<span style="font-size: 16px; line-height: 20px">
<strong>Input</strong><br/>
<span style="color: ${COLORS.conv}; font-weight: bold">Conv Block</span><br/>
<span style="color: ${COLORS.downsample}; font-weight: bold">Downsample Block</span><br/>
<span style="color: ${COLORS.attention}; font-weight: bold">Self-Attention Block</span><br/>
<span style="color: ${COLORS.upsample}; font-weight: bold">Upsample Block</span><br/>
<span style="color: ${COLORS.embedding}; font-weight: bold">Embedding vector</span><br/>
</span>
`;

const descriptionStep1 = `<span style="font-size: 16px; padding: 8px;">
We start with the modified <b>U-Net architecture</b>. Basic ResNet Blocks were replaced by either Self-Attention blocks or modified ResNet blocks. 
</span>`;

const descriptionStep2 = `<span style="font-size: 16px; padding: 8px;">
To prevent information lose, we're adding <b>skip connections to the upsampling blocks</b>. Notice where those connections are coming from.
</span>`;

const descriptionStep3 = `<span style="font-size: 16px; padding: 8px;">
Next step is to add information about the current timestep <b>t</b>. To do that we're using <b>sinusoidal embedding</b> and that information is added to <b>all downsample and upsample</b> blocks.
</span>`;

const descriptionStep4 = `<span style="font-size: 16px; padding: 8px;">
To make the network conditional (dependent on the external input), we're adding <b>text embedder</b>. It will create embedding for given text and <b>add output vector to the timestep embedding</b>. 
</span>`;

const operation1Desc = `<span>
    Tuple of:<br/>
<span style="color: ${COLORS.conv}; font-weight: bold">Conv Block</span> (256, 8, 8)<br/>
<span style="color: ${COLORS.attention}; font-weight: bold">Self-Attention Block</span> (256, 16, 16)<br/>
<span style="color: ${COLORS.embedding}; font-weight: bold">Timestep sinusoidal embedding</span> (256)<br/>
</span>`;

const operation2Desc = `<span>
    Tuple of:<br/>
<span style="color: ${COLORS.attention}; font-weight: bold">Self-Attention Block</span> (128, 16, 16)<br/>
<span style="color: ${COLORS.attention}; font-weight: bold">Self-Attention Block</span> (128, 32, 32)<br/>
<span style="color: ${COLORS.embedding}; font-weight: bold">Timestep sinusoidal embedding</span> (256)<br/>
</span>`;

const operation3Desc = `<span>
    Tuple of:<br/>
<span style="color: ${COLORS.attention}; font-weight: bold">Self-Attention Block</span> (64, 32, 32)<br/>
<span style="color: ${COLORS.conv}; font-weight: bold">Conv Block</span> (64, 64, 64)<br/>
<span style="color: ${COLORS.embedding}; font-weight: bold">Timestep sinusoidal embedding</span> (256)<br/>
</span>`;

const skipConnectionColor = '#696969';

const defaultStep = {
  input: {
    color: '#6c6c6c',
    borderColor: COLORS.input,
    size: `${posBoxSize}px`,
    blockName: 'inout',
    blockType: 'rect',
    items: [
      {
        id: 'in',
        tooltipValue: `
          <span>
            Input layer out: (3, 64, 64)
          </span>
        `,
        sizeY: posBoxSize * 8,
        sizeX: posBoxSize / 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 1.25,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
      },
    ],
  },
  embedding: {
    color: '#c58c8c',
    borderColor: COLORS.embedding,
    size: `${circleR * 3}px`,
    blockName: 'embedding',
    blockType: 'circle',
    items: [],
  },
  downsample: {
    color: '#99d8ff',
    borderColor: COLORS.downsample,
    size: `${posBoxSize}px`,
    blockName: 'down',
    blockType: 'rect',
    items: [
      {
        id: 'ds1',
        tooltipValue: `
          <span>
            Downsample layer out: (128, 32, 32)
          </span>
        `,
        sizeY: posBoxSize * 8,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 4.5,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 3.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 4.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'ds2',
        tooltipValue: `
          <span>
            Downsample layer out: (256, 16, 16)
          </span>
        `,
        sizeY: posBoxSize * 6,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 8,
          topRowPosition * animationHeight + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 7,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 7.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'ds3',
        tooltipValue: `
          <span>
            Downsample layer out: (256, 8, 8)
          </span>
        `,
        sizeY: posBoxSize * 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 11.5,
          topRowPosition * animationHeight + posBoxSize * 3.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 10.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 11.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  attention: {
    color: '#FFD199',
    borderColor: COLORS.attention,
    size: `${posBoxSize}px`,
    blockName: 'attention',
    blockType: 'rect',
    items: [
      {
        id: 'sa1',
        tooltipValue: `
          <span>
            SelfAttention layer out: (128, 32, 32)
          </span>
        `,
        sizeY: posBoxSize * 6,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 6,
          topRowPosition * animationHeight + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 5.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 5.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sa2',
        tooltipValue: `
          <span>
            SelfAttention layer out: (256, 16, 16)
          </span>
        `,
        sizeY: posBoxSize * 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 9.5,
          topRowPosition * animationHeight + posBoxSize * 3.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 9,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 9.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sa3',
        tooltipValue: `
          <span>
            SelfAttention layer out: (256, 8, 8)
          </span>
        `,
        sizeY: posBoxSize * 2,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 13,
          topRowPosition * animationHeight + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 12.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 12.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sa4',
        tooltipValue: `
          <span>
            SelfAttention layer out: (128, 16, 16)
          </span>
        `,
        sizeY: posBoxSize * 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 21.5,
          topRowPosition * animationHeight + posBoxSize * 3.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 21,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 21.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sa5',
        tooltipValue: `
          <span>
            SelfAttention layer out: (64, 32, 32)
          </span>
        `,
        sizeY: posBoxSize * 6,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 25,
          topRowPosition * animationHeight + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 24.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 24.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'sa6',
        tooltipValue: `
          <span>
            SelfAttention layer out: (64, 64, 64)
          </span>
        `,
        sizeY: posBoxSize * 8,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 28.5,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 28,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 28.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  upsample: {
    color: '#99ffbd',
    borderColor: COLORS.upsample,
    size: `${posBoxSize}px`,
    blockName: 'up',
    blockType: 'rect',
    items: [
      {
        id: 'us1',
        tooltipValue: `
          <span>
            Upsample layer out: (128, 16, 16)
          </span>
        `,
        sizeY: posBoxSize * 2,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 20,
          topRowPosition * animationHeight + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 18.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 19.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'us2',
        tooltipValue: `
          <span>
            Upsample layer out: (64, 32, 32)
          </span>
        `,
        sizeY: posBoxSize * 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 23.5,
          topRowPosition * animationHeight + posBoxSize * 3.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 22.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 23.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'us3',
        tooltipValue: `
          <span>
            Upsample layer out: (64, 64, 64)
          </span>
        `,
        sizeY: posBoxSize * 6,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 27,
          topRowPosition * animationHeight + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 26.0,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 26.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  conv: {
    color: '#f8bcff',
    borderColor: COLORS.conv,
    size: `${posBoxSize}px`,
    blockName: 'convBlock',
    blockType: 'rect',
    items: [
      {
        id: 'conv1',
        tooltipValue: `
          <span>
            DoubleConv layer out: (64, 64, 64)
          </span>
        `,
        sizeY: posBoxSize * 8,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 2.25,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 1.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 2,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'conv2',
        tooltipValue: `
          <span>
            DoubleConv layer out: (512, 8, 8)
          </span>
        `,
        sizeY: posBoxSize * 2,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 15,
          topRowPosition * animationHeight + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 14.0,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 14.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'conv3',
        tooltipValue: `
          <span>
            DoubleConv layer out: (512, 8, 8)
          </span>
        `,
        sizeY: posBoxSize * 2,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 16.5,
          topRowPosition * animationHeight + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 16.0,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 16.25,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'conv4',
        tooltipValue: `
          <span>
            DoubleConv layer out: (256, 8, 8)
          </span>
        `,
        sizeY: posBoxSize * 2,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 18,
          topRowPosition * animationHeight + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 17.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 17.75,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'conv5',
        tooltipValue: `
          <span>
            Conv2D layer out: (3, 64, 64)
          </span>
        `,
        sizeY: posBoxSize * 8,
        sizeX: posBoxSize / 4,
        position: [
          firstRowPosition * animationWidth + posBoxSize * 30.25,
          topRowPosition * animationHeight + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              firstRowPosition * animationWidth + posBoxSize * 29.5,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            to: [
              firstRowPosition * animationWidth + posBoxSize * 30,
              topRowPosition * animationHeight + posBoxSize * 5.5,
            ],
            orientation: 'horizontal',
          },
        ],
      },
    ],
  },
  text: {
    color: '#CAFFBF',
    borderColor: '#333',
    sizeX: `30px`,
    sizeY: `50px`,
    blockName: 'text',
    blockType: 'text',
    items: [
      {
        id: 'legend',
        val: legend,
        sizeX: `200px`,
        sizeY: `130px`,
        position: [posBoxSize * 2.87, bottomRowPosition * animationHeight],
      },
      {
        id: 'stepDesc',
        val: descriptionStep1,
        sizeX: `370px`,
        sizeY: `150px`,
        position: [
          animationWidth - 900,
          bottomRowPosition * animationHeight - 100,
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
  doubleconvblock: {
    color: 'rgba(108,108,108,0.16)',
    borderColor: 'rgba(0,0,0,0.65)',
    size: `${circleR * 3}px`,
    blockName: 'doubleconvblock',
    blockType: 'rect',
    items: [],
  },
};

const step1 = {
  ...defaultStep,
};

const step2 = {
  ...step1,
  upsample: {
    ...step1.upsample,
    items: step1.upsample.items.map((el, idx) => ({
      ...el,
      position: [
        el.position[0] + posBoxSize * (((idx % 3) + 1) * 1.5),
        el.position[1],
      ],
      lines: [],
    })),
  },
  attention: {
    ...step1.attention,
    items: step1.attention.items.map((el, idx) =>
      idx < 3
        ? el
        : {
            ...el,
            position: [
              el.position[0] + posBoxSize * (((idx % 3) + 1) * 1.5),
              el.position[1],
            ],
            lines: el.lines.map(line => ({
              ...line,
              from: [
                line.from[0] + posBoxSize * (((idx % 3) + 1) * 1.5),
                line.from[1],
              ],
              to: [
                line.to[0] + posBoxSize * (((idx % 3) + 1) * 1.5),
                line.to[1],
              ],
            })),
          }
    ),
  },
  conv: {
    ...step1.conv,
    items: step1.conv.items.map((el, idx) =>
      idx !== step1.conv.items.length - 1
        ? el
        : {
            ...el,
            position: [el.position[0] + posBoxSize * 4.5, el.position[1]],
            lines: el.lines.map(line => ({
              ...line,
              from: [line.from[0] + posBoxSize * 4.5, line.from[1]],
              to: [line.to[0] + posBoxSize * 4.5, line.to[1]],
            })),
          }
    ),
  },
  operations: {
    ...step1.operations,
    items: [
      ...step1.operations.items,
      {
        id: 'concat_up1',
        val: `<span>
          <strong>{}</strong>
        </span>`,
        position: [
          step1.upsample.items[0].position[0] + circleR,
          step1.upsample.items[0].position[1] + posBoxSize,
        ],
        lines: [
          {
            color: skipConnectionColor,
            from: [
              step1.attention.items[1].position[0] + posBoxSize / 2,
              step1.attention.items[1].position[1],
            ],
            points: [
              [
                step1.attention.items[1].position[0] + posBoxSize / 2,
                step1.attention.items[1].position[1] - posBoxSize,
              ],
              [
                step1.upsample.items[0].position[0] + circleR,
                step1.attention.items[1].position[1] - posBoxSize,
              ],
            ],
            to: [
              step1.upsample.items[0].position[0] + circleR,
              step1.upsample.items[0].position[1] + posBoxSize - circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.conv.items[3].position[0] + posBoxSize,
              step1.conv.items[3].position[1] + posBoxSize,
            ],
            to: [
              step1.upsample.items[0].position[0] - circleR / 2,
              step1.upsample.items[0].position[1] + posBoxSize,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step1.upsample.items[0].position[0] + circleR * 2,
              step1.upsample.items[0].position[1] + posBoxSize,
            ],
            to: [
              step1.upsample.items[0].position[0] + posBoxSize + circleR,
              step1.upsample.items[0].position[1] + posBoxSize,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'concat_up2',
        val: `<span>
          <strong>{}</strong>
        </span>`,
        position: [
          step1.upsample.items[1].position[0] + posBoxSize * 1.5 + circleR / 2,
          step1.upsample.items[1].position[1] + posBoxSize * 2,
        ],
        lines: [
          {
            color: skipConnectionColor,
            from: [
              step1.attention.items[0].position[0] + posBoxSize / 2,
              step1.attention.items[0].position[1],
            ],
            points: [
              [
                step1.attention.items[0].position[0] + posBoxSize / 2,
                step1.attention.items[0].position[1] - posBoxSize,
              ],
              [
                step1.upsample.items[1].position[0] +
                  posBoxSize * 1.5 +
                  circleR / 2,
                step1.attention.items[0].position[1] - posBoxSize,
              ],
            ],
            to: [
              step1.upsample.items[1].position[0] +
                posBoxSize * 1.5 +
                circleR / 2,
              step1.upsample.items[1].position[1] +
                posBoxSize * 2 -
                circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.upsample.items[1].position[0] + posBoxSize * 0.5,
              step1.upsample.items[1].position[1] + posBoxSize * 2,
            ],
            to: [
              step1.upsample.items[1].position[0] + posBoxSize * 1.5 - circleR,
              step1.upsample.items[1].position[1] + posBoxSize * 2,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step1.upsample.items[1].position[0] +
                posBoxSize * 1.5 +
                circleR * 1.5,
              step1.upsample.items[1].position[1] + posBoxSize * 2,
            ],
            to: [
              step1.upsample.items[1].position[0] + posBoxSize * 2.5 + circleR,
              step1.upsample.items[1].position[1] + posBoxSize * 2,
            ],
            orientation: 'horizontal',
          },
        ],
      },
      {
        id: 'concat_up3',
        val: `<span>
          <strong>{}</strong>
        </span>`,
        position: [
          step1.upsample.items[2].position[0] + posBoxSize * 3 + circleR / 2,
          step1.upsample.items[2].position[1] + posBoxSize * 3,
        ],
        lines: [
          {
            color: skipConnectionColor,
            from: [
              step1.conv.items[0].position[0] + posBoxSize / 2,
              step1.conv.items[0].position[1],
            ],
            points: [
              [
                step1.conv.items[0].position[0] + posBoxSize / 2,
                step1.conv.items[0].position[1] - posBoxSize,
              ],
              [
                step1.upsample.items[2].position[0] +
                  posBoxSize * 3 +
                  circleR / 2,
                step1.conv.items[0].position[1] - posBoxSize,
              ],
            ],
            to: [
              step1.upsample.items[2].position[0] +
                posBoxSize * 3 +
                circleR / 2,
              step1.upsample.items[2].position[1] +
                posBoxSize * 3 -
                circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step1.upsample.items[2].position[0] + posBoxSize * 2,
              step1.upsample.items[2].position[1] + posBoxSize * 3,
            ],
            to: [
              step1.upsample.items[2].position[0] + posBoxSize * 3 - circleR,
              step1.upsample.items[2].position[1] + posBoxSize * 3,
            ],
            orientation: 'horizontal',
          },
          {
            from: [
              step1.upsample.items[2].position[0] +
                posBoxSize * 3 +
                circleR * 1.5,
              step1.upsample.items[2].position[1] + posBoxSize * 3,
            ],
            to: [
              step1.upsample.items[2].position[0] + posBoxSize * 4 + circleR,
              step1.upsample.items[2].position[1] + posBoxSize * 3,
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
      step1.text.items[0],
      {
        ...step1.text.items[1],
        val: descriptionStep2,
      },
    ],
  },
};

const step3 = {
  ...step2,
  embedding: {
    ...step2.embedding,
    items: [
      ...step2.embedding.items,
      {
        id: 'timestep_emb',
        val: `<img style="width: ${circleR * 5}px" src="${sinSVG}"/>`,
        tooltipValue: `
          <span>
            Sinusoidal encoding of <b>t</b> at given position
          </span>
        `,
        position: [
          step2.conv.items[2].position[0],
          topRowPosition * animationHeight + posBoxSize * 12.5,
        ],
        lines: [
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.downsample.items[0].position[0] + posBoxSize / 2,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.downsample.items[0].position[0] + posBoxSize / 2,
              step2.downsample.items[0].position[1] +
                step2.downsample.items[0].sizeY,
            ],
            orientation: 'multi-squared',
          },
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.downsample.items[1].position[0] + posBoxSize / 2,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.downsample.items[1].position[0] + posBoxSize / 2,
              step2.downsample.items[1].position[1] +
                step2.downsample.items[1].sizeY,
            ],
            orientation: 'multi-squared',
          },
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.downsample.items[2].position[0] + posBoxSize / 2,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.downsample.items[2].position[0] + posBoxSize / 2,
              step2.downsample.items[2].position[1] +
                step2.downsample.items[2].sizeY,
            ],
            orientation: 'multi-squared',
          },
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.operations.items[0].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.operations.items[0].position[0],
              step2.operations.items[0].position[1] + circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.operations.items[1].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.operations.items[1].position[0],
              step2.operations.items[1].position[1] + circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
          {
            color: step2.embedding.borderColor,
            from: [
              step2.conv.items[2].position[0],
              topRowPosition * animationHeight + posBoxSize * 11.5,
            ],
            points: [
              [
                step2.conv.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.operations.items[2].position[0],
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step2.operations.items[2].position[0],
              step2.operations.items[2].position[1] + circleR * 1.5,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  operations: {
    ...step2.operations,
    items: [
      {
        ...step2.operations.items[0],
        tooltipValue: operation1Desc,
      },
      {
        ...step2.operations.items[1],
        tooltipValue: operation2Desc,
      },
      {
        ...step2.operations.items[2],
        tooltipValue: operation3Desc,
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
        position: [
          step2.text.items[1].position[0],
          step2.text.items[1].position[1] + posBoxSize * 2,
        ],
      },
    ],
  },
};

const step4 = {
  ...step3,
  input: {
    ...step3.input,
    items: [
      ...step3.input.items,
      {
        id: 'text_emb',
        val: `<span style="font-size: 14px; color: white; transform: rotate(-90deg); ">Embedder</span>`,
        sizeX: posBoxSize * 1.5,
        sizeY: posBoxSize * 3,
        tooltipValue: `
          <span>
            Text embedder. Any text embedder will work, but the better the embedding, the better the model result.
          </span>
        `,
        position: [
          step3.embedding.items[0].position[0] + circleR * 3,
          step3.embedding.items[0].position[1] - circleR * 3,
        ],
        lines: [
          {
            from: [
              step3.embedding.items[0].position[0] + posBoxSize * 4,
              step3.embedding.items[0].position[1] + circleR,
            ],
            to: [
              step3.embedding.items[0].position[0] + circleR * 7.5,
              step3.embedding.items[0].position[1] + circleR,
            ],
          },
        ],
      },
    ],
  },
  embedding: {
    ...step3.embedding,
    items: [
      {
        ...step3.embedding.items[0],
        position: [
          step3.embedding.items[0].position[0] - circleR * 6,
          step3.embedding.items[0].position[1] + circleR,
        ],
      },
    ],
  },
  operations: {
    ...step3.operations,
    items: [
      ...step3.operations.items,
      {
        id: 'concat_emb',

        val: `<strong>+</strong>`,
        tooltipValue: `
          <span>
            Add timestep and text embedding vectors
          </span>
        `,
        position: [
          step3.embedding.items[0].position[0],
          step3.embedding.items[0].position[1] - circleR * 1.5,
        ],
        lines: [
          {
            from: [
              step3.embedding.items[0].position[0] + circleR * 3,
              step3.embedding.items[0].position[1] + circleR,
            ],
            points: [
              [
                step3.embedding.items[0].position[0],
                step3.embedding.items[0].position[1] + circleR,
              ],
            ],
            to: [
              step3.embedding.items[0].position[0],
              step3.embedding.items[0].position[1],
            ],
            orientation: 'multi-squared',
          },
          {
            color: step3.embedding.borderColor,
            from: [
              step3.embedding.items[0].position[0] - circleR * 3,
              step3.embedding.items[0].position[1] + circleR,
            ],
            points: [
              [
                step3.embedding.items[0].position[0],
                step3.embedding.items[0].position[1] + circleR,
              ],
            ],
            to: [
              step3.embedding.items[0].position[0],
              step3.embedding.items[0].position[1],
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
        id: 'text_input',
        val:
          '<span style="font-size: 12px; line-height: 14px; padding: 8px">"trees in front of the building"</span>',
        sizeX: `110px`,
        sizeY: `40px`,
        position: [
          step3.embedding.items[0].position[0] + posBoxSize * 4,
          step3.embedding.items[0].position[1] - 8,
        ],
      },
      {
        ...step3.text.items[1],
        val: descriptionStep4,
      },
    ],
  },
};

const step5 = {
  ...step4,
  input: {
    ...step4.input,
    items: [
      {
        ...step4.input.items[0],
        position: [
          step4.input.items[0].position[0] - posBoxSize * 6,
          step4.input.items[0].position[1],
        ],
      },
      step4.input.items[1],
    ],
  },
  conv: {
    ...step4.conv,
    items: [
      {
        ...step4.conv.items[0],
        sizeX: posBoxSize * 7,
        tooltipValue: undefined,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 6,
          step4.conv.items[0].position[1],
        ],
        lines: [
          {
            ...step4.conv.items[0].lines[0],
            from: [
              step4.conv.items[0].lines[0].from[0] - posBoxSize * 6,
              step4.conv.items[0].lines[0].from[1],
            ],
            to: [
              step4.conv.items[0].lines[0].to[0] - posBoxSize * 6,
              step4.conv.items[0].lines[0].to[1],
            ],
          },
        ],
      },
      step4.conv.items[1],
      step4.conv.items[2],
      step4.conv.items[3],
      step4.conv.items[4],
    ],
  },
  doubleconvblock: {
    ...step4.doubleconvblock,
    items: [
      {
        id: 'conv2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_in_size, out = block_out_size, kernel_size=3, padding=1)',
        sizeY: posBoxSize,
        sizeX: posBoxSize * 6,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 5.5,
          step4.conv.items[0].position[1] + posBoxSize * 0.5,
        ],
      },
      {
        id: 'groupnorm',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize,
        sizeX: posBoxSize * 6,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 5.5,
          step4.conv.items[0].position[1] + posBoxSize * 2,
        ],
      },
      {
        id: 'gelu',
        val: '<span style="font-size: 12px">GELU</span>',
        tooltipValue: 'Gaussian Error Linear Units',
        sizeY: posBoxSize,
        sizeX: posBoxSize * 6,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 5.5,
          step4.conv.items[0].position[1] + posBoxSize * 3.5,
        ],
      },
      {
        id: 'conv2_2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_out_size, out = block_out_size, kernel_size=3, padding=1). Yes, in and out has the same num of channels.',
        sizeY: posBoxSize,
        sizeX: posBoxSize * 6,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 5.5,
          step4.conv.items[0].position[1] + posBoxSize * 5,
        ],
      },
      {
        id: 'groupnorm2',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize,
        sizeX: posBoxSize * 6,
        position: [
          step4.conv.items[0].position[0] - posBoxSize * 5.5,
          step4.conv.items[0].position[1] + posBoxSize * 6.5,
        ],
      },
    ],
  },
  text: {
    ...step4.text,
    items: [step4.text.items[0], step4.text.items[1]],
  },
};

const step6 = {
  ...step5,
  conv: {
    ...step5.conv,
    items: [
      {
        ...step5.conv.items[0],
        sizeX: posBoxSize,
      },
      step5.conv.items[1],
      step5.conv.items[2],
      step5.conv.items[3],
      step4.conv.items[4],
    ],
  },
  downsample: {
    ...step5.downsample,
    items: [
      {
        ...step5.downsample.items[0],
        sizeX: posBoxSize * 7,
        sizeY: posBoxSize * 9,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 6,
          step5.downsample.items[0].position[1],
        ],
        lines: [
          {
            ...step5.downsample.items[0].lines[0],
            from: [
              step5.downsample.items[0].lines[0].from[0] - posBoxSize * 6,
              step5.downsample.items[0].lines[0].from[1],
            ],
            to: [
              step5.downsample.items[0].lines[0].to[0] - posBoxSize * 6,
              step5.downsample.items[0].lines[0].to[1],
            ],
          },
        ],
      },
      step5.downsample.items[1],
      step5.downsample.items[2],
    ],
  },
  doubleconvblock: {
    ...step5.doubleconvblock,
    items: [
      {
        id: 'maxpool',
        val: '<span style="font-size: 12px">MaxPool2d</span>',
        tooltipValue: '2D max pooling (kernel_size=2, padding=0)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 0.5,
        ],
      },
      {
        id: 'conv2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_in_size, out = block_out_size, kernel_size=3, padding=1)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 2,
        ],
        lines: [
          {
            from: [
              step5.downsample.items[0].position[0] - posBoxSize * 4,
              step5.downsample.items[0].position[1] + posBoxSize,
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize * 4,
              step5.downsample.items[0].position[1] + posBoxSize * 1.75,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'groupnorm',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 2.5,
        ],
      },
      {
        id: 'gelu',
        val: '<span style="font-size: 12px">GELU</span>',
        tooltipValue: 'Gaussian Error Linear Units',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 3,
        ],
      },
      {
        id: 'conv2_2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_out_size, out = block_out_size, kernel_size=3, padding=1). Yes, in and out has the same num of channels.',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 3.5,
        ],
      },
      {
        id: 'groupnorm2',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 4,
        ],
      },
      {
        id: 'conv2_3',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_in_size, out = block_out_size, kernel_size=3, padding=1)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 5.5,
        ],
        lines: [
          {
            from: [
              step5.downsample.items[0].position[0] - posBoxSize * 4,
              step5.downsample.items[0].position[1] + posBoxSize * 4.5,
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize * 4,
              step5.downsample.items[0].position[1] + posBoxSize * 5.25,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'groupnorm_3',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 6,
        ],
      },
      {
        id: 'gelu_2',
        val: '<span style="font-size: 12px">GELU</span>',
        tooltipValue: 'Gaussian Error Linear Units',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 6.5,
        ],
      },
      {
        id: 'conv2_4',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
          '2D convolution (in = block_out_size, out = block_out_size, kernel_size=3, padding=1). Yes, in and out has the same num of channels.',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 7,
        ],
      },
      {
        id: 'groupnorm_4',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
          'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 7.5,
        ],
      },
      {
        id: 'silu',
        val: '<span style="font-size: 12px">SILU</span>',
        tooltipValue: 'Sigmoid Linear Unit',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 2,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              step5.downsample.items[0].position[0] - posBoxSize * 0.5,
              step2.downsample.items[0].position[1] +
                step2.downsample.items[0].sizeY +
                posBoxSize * 2,
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize * 0.5,
              step5.downsample.items[0].position[1] + posBoxSize * 5.25,
            ],
            color: step5.embedding.borderColor,
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'linear',
        val: '<span style="font-size: 12px">Linear</span>',
        tooltipValue:
          'Linear layer (in = embedding vector length, out = block out channels)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 2,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 4,
        ],
      },
      {
        id: 'sum',
        val: '<b style="font-size: 16px">+</b>',
        tooltipValue:
          'Sum transformed embedding vector and output from the 2nd conv block. This is the output from the entire Downsample block',
        sizeY: circleR * 2,
        sizeX: circleR * 2,
        position: [
          step5.downsample.items[0].position[0] - posBoxSize,
          step5.downsample.items[0].position[1] + posBoxSize,
        ],
        lines: [
          {
            from: [
              step5.downsample.items[0].position[0] - posBoxSize + circleR,
              step5.downsample.items[0].position[1] + posBoxSize * 4,
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize + circleR,
              step5.downsample.items[0].position[1] + posBoxSize * 2,
            ],
            orientation: 'vertical',
          },
          {
            from: [
              step5.downsample.items[0].position[0] - posBoxSize * 2.5,
              step5.downsample.items[0].position[1] + posBoxSize * 7.75,
            ],
            points: [
              [
                step5.downsample.items[0].position[0] - posBoxSize * 2,
                step5.downsample.items[0].position[1] + posBoxSize * 7.75,
              ],
              [
                step5.downsample.items[0].position[0] - posBoxSize * 2,
                step5.downsample.items[0].position[1] + posBoxSize * 1.5,
              ],
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize - circleR / 2,
              step5.downsample.items[0].position[1] + posBoxSize * 1.5,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ],
  },
  operations: {
    ...step5.operations,
    items: [
      step5.operations.items[0],
      step5.operations.items[1],
      {
        ...step5.operations.items[2],
        lines: [
          {
            ...step5.operations.items[2].lines[0],
            from: [
              step5.conv.items[0].position[0] + posBoxSize / 2,
              step5.conv.items[0].position[1],
            ],
            points: [
              [
                step5.conv.items[0].position[0] + posBoxSize / 2,
                step5.operations.items[2].lines[0].points[0][1],
              ],
              step5.operations.items[2].lines[0].points[1],
            ],
          },
          step5.operations.items[2].lines[1],
          step5.operations.items[2].lines[2],
        ],
      },
      step5.operations.items[3],
    ],
  },
  embedding: {
    ...step5.embedding,
    items: [
      {
        ...step5.embedding.items[0],
        lines: [
          {
            ...step5.embedding.items[0].lines[0],
            points: [
              step5.embedding.items[0].lines[0].points[0],
              [
                step2.downsample.items[1].position[0] + posBoxSize / 2,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
              [
                step2.downsample.items[1].position[0] + posBoxSize / 2,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize * 2,
              ],
              [
                step5.downsample.items[0].position[0] - posBoxSize * 0.5,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize * 2,
              ],
              [
                step5.downsample.items[0].position[0] - posBoxSize * 0.5,
                step2.downsample.items[0].position[1] +
                  step2.downsample.items[0].sizeY +
                  posBoxSize,
              ],
            ],
            to: [
              step5.downsample.items[0].position[0] - posBoxSize * 1.5,
              step5.downsample.items[0].position[1] + posBoxSize * 3.5,
            ],
          },
          step5.embedding.items[0].lines[1],
          step5.embedding.items[0].lines[2],
          step5.embedding.items[0].lines[3],
          step5.embedding.items[0].lines[4],
          step5.embedding.items[0].lines[5],
        ],
      },
    ],
  },
};

const step7 = {
  ...step4,
  conv: {
    ...step4.conv,
    items: [
      step4.conv.items[0],
      step4.conv.items[1],
      step4.conv.items[2],
      step4.conv.items[3],
      {
        ...step4.conv.items[4],
        position: [
          step4.conv.items[4].position[0] + posBoxSize * 8,
          step4.conv.items[4].position[1],
        ],
        lines: [
          {
            ...step4.conv.items[4].lines[0],
            from: [
              step4.conv.items[4].lines[0].from[0] + posBoxSize * 8,
              step4.conv.items[4].lines[0].from[1],
            ],
            to: [
              step4.conv.items[4].lines[0].to[0] + posBoxSize * 8,
              step4.conv.items[4].lines[0].to[1],
            ],
          },
        ],
      },
    ],
  },
  attention: {
    ...step4.attention,
    items: [
      step4.attention.items[0],
      step4.attention.items[1],
      step4.attention.items[2],
      step4.attention.items[3],
      step4.attention.items[4],
      {
        ...step4.attention.items[5],
        position: [
          step4.attention.items[5].position[0] + posBoxSize * 8,
          step4.attention.items[5].position[1],
        ],
        lines: [
          {
            ...step4.attention.items[5].lines[0],
            from: [
              step4.attention.items[5].lines[0].from[0] + posBoxSize * 8,
              step4.attention.items[5].lines[0].from[1],
            ],
            to: [
              step4.attention.items[5].lines[0].to[0] + posBoxSize * 8,
              step4.attention.items[5].lines[0].to[1],
            ],
          },
        ],
      },
    ],
  },
  upsample: {
    ...step4.upsample,
    items: [
      step4.upsample.items[0],
      step4.upsample.items[1],
      {
        ...step4.upsample.items[2],
        sizeX: posBoxSize * 9,
        sizeY: posBoxSize * 11.5,
        position: [
          step4.upsample.items[2].position[0],
          step4.upsample.items[2].position[1] - posBoxSize ,
        ],
      },
    ],
  },
  doubleconvblock: {
    ...step5.doubleconvblock,
    items: [
      {
        id: 'att_out',
        val: `<div style="font-size: 12px; background-color: ${COLORS.attention}; height: 100%; width: 100%"></div>`,
        tooltipValue: 'Output from the previous block (in this case 5th Self-Attention block)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize ,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 2.5,
          step5.downsample.items[0].position[1] + posBoxSize * 0.5,
        ],
      },
      {
        id: 'maxpool',
        val: '<span style="font-size: 12px">Upsample</span>',
        tooltipValue: 'Upsample (scale_factor=2, mode="bilinear", align_corners=True)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 1.5,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 1.25,
            ]
          },
        ]
      },
      {
        id: 'skip',
        val: `<div style="font-size: 12px; background-color: ${COLORS.conv}; height: 100%; width: 100%"></div>`,
        tooltipValue: 'Output from the previous block (in this case 5th Self-Attention block)',
        sizeY: posBoxSize,
        sizeX: posBoxSize / 2 ,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 0.5,
          step5.downsample.items[0].position[1] + posBoxSize * 2.5,
        ],
      },
      {
        id: 'concat',
        val: '<span style="font-size: 20px">| |</span>',
        tooltipValue: 'Concatenate upsampled input and skip connection',
        sizeY: posBoxSize,
        sizeX: posBoxSize,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 2.5,
          step5.downsample.items[0].position[1] + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 2,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 2.25,
            ]
          },
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize ,
              step5.downsample.items[0].position[1] + posBoxSize * 3,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 2.25,
              step5.downsample.items[0].position[1] + posBoxSize * 3,
            ],
            orientation: 'horizontal'
          }
        ]
      },
      {
        id: 'conv2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
            '2D convolution (in = block_in_size, out = block_out_size, kernel_size=3, padding=1)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 4.5,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 3.5,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 4.25,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'groupnorm',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
            'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 5,
        ],
      },
      {
        id: 'gelu',
        val: '<span style="font-size: 12px">GELU</span>',
        tooltipValue: 'Gaussian Error Linear Units',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 5.5,
        ],
      },
      {
        id: 'conv2_2',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
            '2D convolution (in = block_out_size, out = block_out_size, kernel_size=3, padding=1). Yes, in and out has the same num of channels.',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 6,
        ],
      },
      {
        id: 'conv2_3',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
            '2D convolution (in = block_in_size, out = block_out_size, kernel_size=3, padding=1)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 7.5,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 6.5,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 7.26,
            ],
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'groupnorm_2',
        val: '<span style="font-size: 12px">GroupNorm</span>',
        tooltipValue:
            'Group Normalization (groups = 1, channels = block_out_size)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 8,
        ],
      },
      {
        id: 'gelu_2',
        val: '<span style="font-size: 12px">GELU</span>',
        tooltipValue: 'Gaussian Error Linear Units',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 8.5,
        ],
      },
      {
        id: 'conv2_4',
        val: '<span style="font-size: 12px">Conv2d</span>',
        tooltipValue:
            '2D convolution (in = block_out_size, out = block_out_size, kernel_size=3, padding=1). Yes, in and out has the same num of channels.',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 1.5,
          step5.downsample.items[0].position[1] + posBoxSize * 9,
        ],
      },

      {
        id: 'embedding',
        val: `<div style="font-size: 12px; background-color: ${COLORS.embedding}; height: 100%; width: 100%"></div>`,
        tooltipValue: 'Embedding vector',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 6.5,
          step5.downsample.items[0].position[1] + posBoxSize * 0.5,
        ],
      },
      {
        id: 'silu',
        val: '<span style="font-size: 12px">SILU</span>',
        tooltipValue: 'Sigmoid Linear Unit',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 2.5,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 7,
              step5.downsample.items[0].position[1] + posBoxSize,
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 7,
              step5.downsample.items[0].position[1] + posBoxSize * 2.25,
            ],
            color: step5.embedding.borderColor,
            orientation: 'vertical',
          },
        ],
      },
      {
        id: 'linear',
        val: '<span style="font-size: 12px">Linear</span>',
        tooltipValue:
            'Linear layer (in = embedding vector length, out = block out channels)',
        sizeY: posBoxSize / 2,
        sizeX: posBoxSize * 3,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 5.5,
          step5.downsample.items[0].position[1] + posBoxSize * 3,
        ],
      },
      {
        id: 'sum',
        val: '<b style="font-size: 16px">+</b>',
        tooltipValue:
            'Sum transformed embedding vector and output from the 2nd conv block. This is the output from the entire Upsample block',
        sizeY: circleR * 2,
        sizeX: circleR * 2,
        position: [
          step4.upsample.items[2].position[0] + posBoxSize * 4.25,
          step5.downsample.items[0].position[1] + posBoxSize * 10,
        ],
        lines: [
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 3,
              step5.downsample.items[0].position[1] + posBoxSize * 9.5,
            ],
            points: [
              [
                step4.upsample.items[2].position[0] + posBoxSize * 3,
                step5.downsample.items[0].position[1] + posBoxSize * 10.5,
              ],
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 4,
              step5.downsample.items[0].position[1] + posBoxSize * 10.5,
            ],
            orientation: 'multi-squared',
          },
          {
            from: [
              step4.upsample.items[2].position[0] + posBoxSize * 7,
              step5.downsample.items[0].position[1] + posBoxSize * 3.5,
            ],
            points: [
              [
                step4.upsample.items[2].position[0] + posBoxSize * 7,
                step5.downsample.items[0].position[1] + posBoxSize * 10.5,
              ],
            ],
            to: [
              step4.upsample.items[2].position[0] + posBoxSize * 5.25,
              step5.downsample.items[0].position[1] + posBoxSize * 10.5,
            ],
            orientation: 'multi-squared',
          },
        ],
      },
    ]
  },
  test: {
    ...step6.text,
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
};

export { steps, animationWidth, animationHeight };
