import React from 'react';

const animationWidth = 1200;
const chartSize = 150;
const chartWidth = 600;
const animationHeight = (chartSize + 20) * 4;
const circleR = 16;
const posBoxSize = 30;

const defaultListOfElements = {
  color: '#CAFFBF',
  borderColor: '#147A00',
  blockType: 'rect',
  size: posBoxSize,
  items: [
    {
      id: 'top_name',
      val: `<span style="font-size: 14px">
          i=0
        </span>`,
      name: 'p0',
      sizeX: 0,
      sizeY: 0,
      namePosition: 'top',
      position: [chartWidth + 80, 50],
    },
    {
      id: 'i0',
      val: `<span style="font-size: 14px">
          i=0
        </span>`,
      selectValue: 0,
      position: [chartWidth + 80, 50],
    },
    {
      id: 'i1',
      val: `<span style="font-size: 14px">
          i=1
        </span>`,
      selectValue: 0,
      position: [chartWidth + 80, 50 + posBoxSize + 10],
    },
    {
      id: 'i2',
      val: `<span style="font-size: 14px">
          i=2
        </span>`,
      selectValue: 0,
      position: [chartWidth + 80, 50 + (posBoxSize + 10) * 2],
    },
    {
      id: 'i3',
      val: `<span style="font-size: 14px">
          i=3
        </span>`,
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
  pos0: {
    ...defaultListOfElements,
    color: '#9CFCE2',
    borderColor: '#048B67',
    blockName: 'position0',
    valName: 'pos0',
    items: defaultListOfElements.items.map((el, idx) => ({
      ...el,
      name: idx === 0 ? 'p0' : null,
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
      position: [el.position[0] + posBoxSize * 2, el.position[1]],
      name: idx === 0 ? 'p1' : null,
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
      position: [el.position[0] + posBoxSize * 4, el.position[1]],
      name: idx === 0 ? 'p2' : null,
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
      position: [el.position[0] + posBoxSize * 6, el.position[1]],
      name: idx === 0 ? 'p3' : null,
    })),
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
};

const steps = {
  step1,
  step2,
};

export { steps, animationWidth, animationHeight, defaultItems };
