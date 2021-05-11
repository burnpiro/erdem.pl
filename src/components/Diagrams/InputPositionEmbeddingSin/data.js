import React from 'react';
const katex = require(`katex`);

const animationWidth = 1200;
const chartSize = 150;
const chartWidth = 600;
const animationHeight = (chartSize + 20) * 4;
const circleR = 16;
const posBoxSize = 30;
const posBoxSizeX = posBoxSize * 2;

const posSinText = katex.renderToString(
  `PE_{(pos,2i)} = sin(\\frac{pos}{10000^{2i/d_{\\text{model}}}})`
);
const posCosText = katex.renderToString(
  `PE_{(pos,2i+1)} = cos(\\frac{pos}{10000^{2i/d_{\\text{model}}}})`
);
const sinLargeInd = katex.renderToString(
  `\\frac{pos}{10000^{48/50}} \\sim \\frac{pos}{10000}`
);

const positionalEncodingEq = `<span>
<strong>Positional Encoding</strong><br/>
${posSinText}<br/><br/>
${posCosText}<br/>
</span>
`;

const currentSettingDesc1 = `<span>
<strong>Settings</strong>: d = 50<br/>
The value of each positional encoding depends on the <i>position</i> (<i>pos</i>) and <i>dimension</i> (<i>d</i>). We calculate result for every <i>index</i> (<i>i</i>) to get the whole vector.
</span>
`;
const currentSettingDesc2 = `<span>
<strong>Settings</strong>: d = 20<br/>
Even if the dimension (<i>d</i>) has changed, values for <strong>i=0</strong> and <strong>i=1</strong> haven't. That's because <strong>PE</strong> formula has a divisor equal to <strong>1</strong> in both cases, despite the value of <i>d</i>.
</span>
`;
const currentSettingDesc3 = `<span>
<strong>Settings</strong>: d = 50<br/>
Now we've changed indexes (<b>i</b>) to show differences between further indexes. Function's period increases with increasing <strong>i</strong> value.
</span>
`;
const currentSettingDesc4 = `<span>
<strong>Settings</strong>: d = 50<br/>
Sin and Cos periods at even further indexes are very large because ${sinLargeInd}. That gives us a period of <strong>20000𝛱</strong> which is way beyond our value of <i>pos</i>. Most values are going to be close to 0 or 1.
</span>
`;

const defaultListOfElements = {
  color: '#CAFFBF',
  borderColor: '#147A00',
  blockType: 'rect',
  size: posBoxSize,
  sizeX: posBoxSizeX,
  items: [
    {
      id: 'top_name',
      name: 'p0',
      sizeX: 0,
      sizeY: 0,
      namePosition: 'top',
      position: [chartWidth + 80, 50],
    },
    {
      id: 'i0',
      val: `<span style="font-size: 14px">
          $1
        </span>`,
      valVars: ['pos0,i0'],
      selectValue: 0,
      position: [chartWidth + 80, 50],
    },
    {
      id: 'i1',
      val: `<span style="font-size: 14px">
          $1
        </span>`,
      valVars: ['pos1,i0'],
      selectValue: 0,
      position: [chartWidth + 80, 50 + posBoxSize + 10],
    },
    {
      id: 'i2',
      val: `<span style="font-size: 14px">
          $1
        </span>`,
      valVars: ['pos2,i0'],
      selectValue: 0,
      position: [chartWidth + 80, 50 + (posBoxSize + 10) * 2],
    },
    {
      id: 'i3',
      val: `<span style="font-size: 14px">
          $1
        </span>`,
      valVars: ['pos3,i0'],
      selectValue: 0,
      position: [chartWidth + 80, 50 + (posBoxSize + 10) * 3],
    },
  ],
};

const defaultLineChart = {
  blockType: 'line-chart',
  sizeX: chartWidth,
  sizeY: chartSize,
  xLimit: [0, 20],
  yLimit: [-1, 1],
  transition: {
    delay: 400,
  },
};

const defaultItems = [
  {
    type: 'circle',
    size: 5,
    color: '#048B67',
  },
  {
    type: 'circle',
    size: 5,
    color: '#EF476F',
  },
  {
    type: 'circle',
    size: 5,
    color: '#b5179e',
  },
  {
    type: 'circle',
    size: 5,
    color: '#118AB2',
  },
];

const step1 = {
  sin0: {
    ...defaultLineChart,
    color: '#FFD199',
    borderColor: '#A35A00',
    blockName: 'inputs-sin0',
    position: [10, 10],
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (0 / 50)),
        elements: 21,
        items: defaultItems.map((el, idx) => ({
          ...el,
          varName: `pos${idx},i0`,
        })),
      },
    ],
  },
  cos0: {
    ...defaultLineChart,
    color: '#9BF6FF',
    borderColor: '#00838F',
    blockName: 'inputs-cos0',
    position: [10, chartSize + 20],
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (0 / 50)),
        elements: 21,
        items: defaultItems.map((el, idx) => ({
          ...el,
          varName: `pos${idx},i1`,
        })),
      },
    ],
  },
  sin2: {
    ...defaultLineChart,
    color: '#FFADAD',
    borderColor: '#6chartWidth00',
    blockName: 'inputs-sin2',
    position: [10, (chartSize + 20) * 2],
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (2 / 50)),
        elements: 21,
        items: defaultItems.map((el, idx) => ({
          ...el,
          varName: `pos${idx},i2`,
        })),
      },
    ],
  },
  cos2: {
    ...defaultLineChart,
    color: '#CAFFBF',
    borderColor: '#147A00',
    blockName: 'inputs-cos2',
    position: [10, (chartSize + 20) * 3],
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (2 / 50)),
        elements: 21,
        items: defaultItems.map((el, idx) => ({
          ...el,
          varName: `pos${idx},i3`,
        })),
      },
    ],
  },
  posDesc: {
    ...defaultListOfElements,
    color: 'transparent',
    borderColor: 'transparent',
    blockName: 'position-desc',
    valName: 'pos-desc',
    items: [
      {
        id: 'i0-desc',
        val: `<span style="font-size: 16px; font-weight: bold;">
          i=0
        </span>`,
        position: [chartWidth + 80 + posBoxSizeX * 5.5, 50],
      },
      {
        id: 'i1-desc',
        val: `<span style="font-size: 16px; font-weight: bold;">
          i=1
        </span>`,
        position: [chartWidth + 80 + posBoxSizeX * 5.5, 50 + posBoxSize + 10],
      },
      {
        id: 'i2-desc',
        val: `<span style="font-size: 16px; font-weight: bold;">
          i=2
        </span>`,
        position: [
          chartWidth + 80 + posBoxSizeX * 5.5,
          50 + (posBoxSize + 10) * 2,
        ],
      },
      {
        id: 'i3-desc',
        val: `<span style="font-size: 16px; font-weight: bold;">
          i=3
        </span>`,
        position: [
          chartWidth + 80 + posBoxSizeX * 5.5,
          50 + (posBoxSize + 10) * 3,
        ],
      },
    ],
  },
  pos0: {
    ...defaultListOfElements,
    color: '#9CFCE2',
    borderColor: '#048B67',
    blockName: 'position0',
    valName: 'pos0',
    items: defaultListOfElements.items.map((el, idx) => ({
      ...el,
      name: idx === 0 ? 'p0' : null,
      valVars: idx === 0 ? null : [`pos0,i${idx - 1}-val`],
    })),
  },
  pos1: {
    ...defaultListOfElements,
    color: '#F8B4C4',
    borderColor: '#EF476F',
    blockName: 'position1',
    valName: 'pos1',
    items: defaultListOfElements.items.map((el, idx) => ({
      ...el,
      position: [el.position[0] + posBoxSizeX * 1.5, el.position[1]],
      name: idx === 0 ? 'p1' : null,
      valVars: idx === 0 ? null : [`pos1,i${idx - 1}-val`],
    })),
  },
  pos2: {
    ...defaultListOfElements,
    color: '#F6B7EC',
    borderColor: '#b5179e',
    blockName: 'position2',
    valName: 'pos2',
    items: defaultListOfElements.items.map((el, idx) => ({
      ...el,
      position: [el.position[0] + posBoxSizeX * 3, el.position[1]],
      name: idx === 0 ? 'p2' : null,
      valVars: idx === 0 ? null : [`pos2,i${idx - 1}-val`],
    })),
  },
  pos3: {
    ...defaultListOfElements,
    color: '#A2E1F6',
    borderColor: '#118AB2',
    blockName: 'position3',
    valName: 'pos3',
    items: defaultListOfElements.items.map((el, idx) => ({
      ...el,
      position: [el.position[0] + posBoxSizeX * 4.5, el.position[1]],
      name: idx === 0 ? 'p3' : null,
      valVars: idx === 0 ? null : [`pos3,i${idx - 1}-val`],
    })),
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
        id: 'encoding-eq',
        val: positionalEncodingEq,
        sizeX: `450px`,
        sizeY: `150px`,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 4],
      },
      {
        id: 'current-settings',
        val: currentSettingDesc1,
        sizeX: `450px`,
        sizeY: `150px`,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 4 + 200],
      },
    ],
  },
};

const step2 = {
  ...step1,
  sin0: {
    ...step1.sin0,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (0 / 20)),
        elements: 21,
        items: step1.sin0.data[0].items,
      },
    ],
  },
  cos0: {
    ...step1.cos0,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (0 / 20)),
        elements: 21,
        items: step1.cos0.data[0].items,
      },
    ],
  },
  sin2: {
    ...step1.sin2,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (2 / 20)),
        elements: 21,
        items: step1.sin2.data[0].items,
      },
    ],
  },
  cos2: {
    ...step1.cos2,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (2 / 20)),
        elements: 21,
        items: step1.cos2.data[0].items,
      },
    ],
  },
  text: {
    ...step1.text,
    items: [
      step1.text.items[0],
      {
        ...step1.text.items[1],
        val: currentSettingDesc2,
      },
    ],
  },
};

const step3 = {
  ...step2,
  sin0: {
    ...step2.sin0,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (4 / 50)),
        elements: 21,
        items: step2.sin0.data[0].items,
      },
    ],
  },
  cos0: {
    ...step2.cos0,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (4 / 50)),
        elements: 21,
        items: step2.cos0.data[0].items,
      },
    ],
  },
  sin2: {
    ...step2.sin2,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (6 / 50)),
        elements: 21,
        items: step2.sin2.data[0].items,
      },
    ],
  },
  cos2: {
    ...step2.cos2,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (6 / 50)),
        elements: 21,
        items: step2.cos2.data[0].items,
      },
    ],
  },
  text: {
    ...step2.text,
    items: [
      step2.text.items[0],
      {
        ...step2.text.items[1],
        val: currentSettingDesc3,
      },
      {
        sizeX: `100px`,
        sizeY: `150px`,
        position: [
          step2.posDesc.items[0].position[0] + posBoxSizeX,
          step2.posDesc.items[0].position[1],
        ],
        val: `<span style="font-size: 16px; text-align: center">
          <strong>Important!</strong><br/>
          indexes has changed
        </span>`,
      },
    ],
  },
  posDesc: {
    ...step2.posDesc,
    items: step2.posDesc.items.map((el, idx) => ({
      ...el,
      val: `<span style="font-size: 16px; font-weight: bold;">
          i=${idx + 2}
        </span>`,
    })),
  },
};

const step4 = {
  ...step3,
  sin0: {
    ...step3.sin0,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (46 / 50)),
        elements: 21,
        items: step3.sin0.data[0].items,
      },
    ],
  },
  cos0: {
    ...step3.cos0,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (46 / 50)),
        elements: 21,
        items: step3.cos0.data[0].items,
      },
    ],
  },
  sin2: {
    ...step3.sin2,
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (48 / 50)),
        elements: 21,
        items: step3.sin2.data[0].items,
      },
    ],
  },
  cos2: {
    ...step3.cos2,
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (48 / 50)),
        elements: 21,
        items: step3.cos2.data[0].items,
      },
    ],
  },
  text: {
    ...step3.text,
    items: [
      step3.text.items[0],
      {
        ...step3.text.items[1],
        val: currentSettingDesc4,
      },
      step3.text.items[2],
    ],
  },
  posDesc: {
    ...step2.posDesc,
    items: step2.posDesc.items.map((el, idx) => ({
      ...el,
      val: `<span style="font-size: 16px; font-weight: bold;">
          i=${idx + 46}
        </span>`,
    })),
  },
};

const steps = {
  step1,
  step2,
  step3,
  step4,
};

export { steps, animationWidth, animationHeight, defaultItems };
