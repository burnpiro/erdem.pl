import React from 'react';

const animationWidth = 1200;
const chartSize = 100;
const chartWidth = 600;
const animationHeight = (chartSize + 10) * 6;
const circleR = 16;
const posBoxSize = 30;

const step1 = {
  sin0: {
    color: '#FFD199',
    borderColor: '#A35A00',
    blockName: 'inputs-sin0',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, 0],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (0 / 50)),
        elements: 20,
        items: [
          {
            type: 'circle',
            size: 5,
            varName: 'pos0,i0',
          },
        ],
      },
    ],
  },
  cos0: {
    color: '#9BF6FF',
    borderColor: '#00838F',
    blockName: 'inputs-cos0',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, chartSize + 10],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (0 / 50)),
        elements: 20,
      },
    ],
  },
  sin2: {
    color: '#FFADAD',
    borderColor: '#6chartWidth00',
    blockName: 'inputs-sin2',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, (chartSize + 10) * 2],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (2 / 50)),
        elements: 20,
      },
    ],
  },
  cos2: {
    color: '#CAFFBF',
    borderColor: '#147A00',
    blockName: 'inputs-cos2',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, (chartSize + 10) * 3],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (2 / 50)),
        elements: 20,
      },
    ],
  },
  sin4: {
    color: '#d7a8df',
    borderColor: '#ce93d8',
    blockName: 'inputs-sin4',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, (chartSize + 10) * 4],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (4 / 50)),
        elements: 20,
      },
    ],
  },
  cos4: {
    color: '#99d5cf',
    borderColor: '#80cbc4',
    blockName: 'inputs-cos4',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 20],
    yLimit: [-1, 1],
    position: [10, (chartSize + 10) * 5],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.cos(x / 10000 ** (4 / 50)),
        elements: 20,
      },
    ],
  },
  pos0: {
    color: '#CAFFBF',
    borderColor: '#147A00',
    blockName: 'position0',
    blockType: 'rect',
    size: posBoxSize,
    valName: 'pos0',
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
        selectValue: 1,
        position: [chartWidth + 80, 50 + posBoxSize + 10],
      },
      {
        id: 'i2',
        val: `<span style="font-size: 14px">
          i=2
        </span>`,
        selectValue: 2,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 2],
      },
      {
        id: 'i3',
        val: `<span style="font-size: 14px">
          i=3
        </span>`,
        selectValue: 3,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 3],
      },
      {
        id: 'i4',
        val: `<span style="font-size: 14px">
          i=4
        </span>`,
        selectValue: 4,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 4],
      },
      {
        id: 'i5',
        val: `<span style="font-size: 14px">
          i=5
        </span>`,
        selectValue: 5,
        position: [chartWidth + 80, 50 + (posBoxSize + 10) * 5],
      },
    ],
  },
};

const step2 = {
  ...step1,
  sin0: {
    color: '#FFD199',
    borderColor: '#A35A00',
    blockName: 'inputs-sin0',
    blockType: 'line-chart',
    sizeX: chartWidth,
    sizeY: chartSize,
    items: [
      {
        type: 'circle',
        xVal: 1,
        varName: 'pos0',
      },
    ],
    xLimit: [0, 50],
    yLimit: [-1, 1],
    position: [10, 0],
    transition: {
      delay: 400,
    },
    data: [
      {
        name: 'axis',
        fun: x => Math.sin(x / 10000 ** (8 / 50)),
        elements: 50,
      },
    ],
  },
};

const steps = {
  step1,
  step2,
};

export { steps, animationWidth, animationHeight };
