import * as d3 from 'd3';
import styles from './DiagramGenerator.module.scss';

function generateArrowElement(svg) {
  return svg
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', [0, 0, 10, 10])
    .attr('refX', 5)
    .attr('refY', 5)
    .attr('markerWidth', 5)
    .attr('markerHeight', 5)
    .attr('orient', 'auto-start-reverse')
    .append('path')
    .attr(
      'd',
      d3.line()([
        [0, 0],
        [0, 10],
        [10, 5],
      ])
    )
    .attr('stroke', 'black');
}

function generateTooltopElement(svg, containerId) {
  const returnObj = {
    element: d3
      .select(`#${containerId}`)
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .style('background-color', 'white')
      .style('border', 'solid')
      .style('border-width', '2px')
      .style('border-radius', '5px')
      .style('position', 'absolute')
      .style('padding', '5px'),
  };

  returnObj.mouseOver = function(el, event) {
    returnObj.element
      .style('opacity', 1)
      .style('left', `${event.offsetX + 10}px`)
      .style('top', `${event.offsetY}px`);
    // el.style('stroke', 'black').style('opacity', 1);
  };

  returnObj.mouseMove = function(el, event, value) {
    returnObj.element
      .html(value)
      .style('left', `${event.offsetX + 10}px`)
      .style('top', `${event.offsetY}px`);
  };

  returnObj.mouseLeave = function(el, event) {
    returnObj.element
      .style('opacity', 0)
      .style('left', `-200px`)
      .style('top', `-200px`);
    // el.style('stroke', 'none').style('opacity', 0.8);
  };

  return returnObj;
}

const ACTIONS = {
  SET: 'SET',
  DELETE: 'DELETE',
};

function generateMainBlock(inputs, svg) {
  return svg.select(`.${inputs.blockName}-block`);
}

function addOnClickAction(inputBlocks, d, { valName }, { onUpdateValues }) {
  return inputBlocks.attr('cursor', `pointer`).on('click', e => {
    const valId = [];
    if (valName != null) {
      valId.push(valName);
    }
    if (d.id != null) {
      valId.push(d.id);
    }
    onUpdateValues(d.selectValue, valId.join(','), ACTIONS.SET);
  });
}

function generateLines(inputs, block, d, svg) {
  const multiLinkData = d.lines.map(line => {
    switch (line.orientation) {
      case 'horizontal':
        return d3.linkHorizontal()({
          source: [line.from[0], line.from[1]],
          target: [line.to[0], line.to[1]],
        });
      case 'multi-curved':
        return d3.line().curve(d3.curveCardinal)([
          [line.from[0], line.from[1]],
          ...line.points,
          [line.to[0], line.to[1]],
        ]);
      case 'multi-squared':
        return d3.line()([
          [line.from[0], line.from[1]],
          ...line.points,
          [line.to[0], line.to[1]],
        ]);
      default:
        return d3.linkVertical()({
          source: [line.from[0], line.from[1]],
          target: [line.to[0], line.to[1]],
        });
    }
  });

  const linesBlock = svg.select(`.${inputs.blockName}-block`).append('g');

  for (let i = 0; i < multiLinkData.length; i += 1) {
    linesBlock
      .append('path')
      .attr('d', multiLinkData[i])
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('fill', 'none')
      .attr('marker-end', 'url(#arrow)');
  }
}

const DEFAULT_FONTSIZE = 19;

const addHTMLContent = (
  block,
  d,
  {
    width,
    height,
    color,
    fontSize = DEFAULT_FONTSIZE,
    type = 'rect',
    vals = [],
    values = {},
  }
) => {
  const objVal = vals.reduce((acc, el, idx) => {
    const re = new RegExp(`\\$${idx + 1}`, 'igm');
    return acc.replaceAll(re, values[el]);
  }, d.val);
  if (type === 'circle') {
    return block
      .append('foreignObject')
      .attr('width', width)
      .attr('height', height)
      .attr('stroke', color)
      .style('font-size', fontSize)
      .attr('x', d.position[0] - width / 2)
      .attr('y', d.position[1] - height / 2)
      .attr('dy', width / 2)
      .attr('dx', height / 2)
      .html(`<div class="${styles['html-object']}">${objVal}</div>`);
  }
  return block
    .append('foreignObject')
    .attr('width', width)
    .attr('height', height)
    .attr('stroke', color)
    .style('font-size', fontSize)
    .attr('x', d.position[0])
    .attr('y', d.position[1])
    .html(`<div class="${styles['html-object']}">${objVal}</div>`);
};

export {
  generateArrowElement,
  generateTooltopElement,
  ACTIONS,
  generateMainBlock,
  addOnClickAction,
  generateLines,
  DEFAULT_FONTSIZE,
  addHTMLContent,
};
