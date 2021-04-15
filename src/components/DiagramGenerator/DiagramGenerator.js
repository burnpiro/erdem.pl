import React from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/use-d3';
import styles from './DiagramGenerator.module.scss';
import { generateArrowElement, generateTooltopElement } from './helpers';

const fontSize = 19;
let arrowDef = null;
const toolTips = {};
let diagramId = '';

function generateMainBlock(inputs, svg) {
  return svg.select(`.${inputs.blockName}-block`);
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

function addTooltip(
  inputBlocks,
  inputs,
  d,
  { id, sizeX, sizeY, type = 'rect' }
) {
  switch (type) {
    case 'rect':
      return inputBlocks
        .append('rect')
        .attr('fill', 'transparent')
        .attr('stroke', 'transparent')
        .attr('width', sizeX)
        .attr('height', sizeY)
        .attr('x', d.position[0])
        .attr('y', d.position[1])
        .on('mouseover', e => {
          toolTips[id].mouseOver(inputBlocks, e);
        })
        .on('mousemove', e => {
          toolTips[id].mouseMove(inputBlocks, e, d.tooltipValue);
        })
        .on('mouseleave', e => {
          toolTips[id].mouseLeave(inputBlocks, e);
        });
    default:
      return inputBlocks
        .append('circle')
        .attr('fill', 'transparent')
        .attr('stroke', 'transparent')
        .attr('r', sizeX)
        .attr('cx', d.position[0])
        .attr('cy', d.position[1])
        .on('mouseover', e => {
          toolTips[id].mouseOver(inputBlocks, e);
        })
        .on('mousemove', e => {
          toolTips[id].mouseMove(inputBlocks, e, d.tooltipValue);
        })
        .on('mouseleave', e => {
          toolTips[id].mouseLeave(inputBlocks, e);
        });
  }
}

function generateCircleBlock(inputs, svg, id) {
  const inputBlocks = generateMainBlock(inputs, svg);

  const elementSize = Number.parseInt(inputs.size, 10);

  inputs.items.forEach(d => {
    const block = inputBlocks.append('g');
    block
      .append('circle')
      .attr('fill', inputs.color)
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', diagramId + d.id)
      .attr('r', inputs.size)
      .attr('cx', d.position[0])
      .attr('cy', d.position[1])
      .attr('dx', 80);
    if (d.val != null) {
      block
        .append('foreignObject')
        .attr('width', elementSize * 2)
        .attr('height', elementSize * 2)
        .attr('stroke', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] - elementSize)
        .attr('y', d.position[1] - elementSize)
        .attr('dy', elementSize)
        .attr('dx', elementSize)
        .html(`<div class="${styles['html-object']}">${d.val}</div>`);
    }
    if (d.name != null) {
      block
        .append('text')
        .attr('fill', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0])
        .attr('y', d.position[1])
        .attr(
          'dy',
          d.namePosition === 'top' ? -elementSize * 1.5 : elementSize * 2
        )
        .attr('dx', -(d.name.length * fontSize) / 5)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      generateLines(inputs, block, d, svg);
    }

    if (d.tooltipValue != null) {
      addTooltip(block, inputs, d, {
        id,
        sizeX: elementSize,
        type: 'circle',
      });
    }
  });
}

function generateRectBlock(inputs, svg, id) {
  const elementSize = Number.parseInt(inputs.size, 10);
  const sizeX = Number.parseInt(inputs.sizeX, 10) || elementSize;
  const sizeY = Number.parseInt(inputs.sizeY, 10) || elementSize;
  const inputBlocks = generateMainBlock(inputs, svg);

  inputs.items.forEach(d => {
    const block = inputBlocks.append('g');
    if (id === 'diagram-container') console.log(d);
    block
      .append('rect')
      .attr('fill', inputs.color)
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', diagramId + d.id)
      .attr('width', sizeX)
      .attr('height', sizeY)
      .attr('x', d.position[0])
      .attr('y', d.position[1])
      .attr('dx', 80);

    if (d.val != null) {
      block
        .append('foreignObject')
        .attr('width', sizeX)
        .attr('height', sizeY)
        .attr('stroke', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0])
        .attr('y', d.position[1])
        .html(`<div class="${styles['html-object']}">${d.val}</div>`);
    }
    if (d.name != null) {
      block
        .append('text')
        .attr('fill', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] + 12)
        .attr('y', d.position[1])
        .attr('dy', d.namePosition === 'top' ? -sizeY * 0.5 : sizeY * 1.5)
        .attr('dx', (-d.name.length * fontSize) / 8)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      generateLines(inputs, block, d, svg);
    }

    if (d.tooltipValue != null) {
      addTooltip(block, inputs, d, { id, sizeX, sizeY, type: 'rect' });
    }
  });
}

function generateTextBlock(inputs, svg, id) {
  const elementWidth =
    Number.parseInt(inputs.sizeX, 10) || Number.parseInt(inputs.size, 10);
  const elementHeight =
    Number.parseInt(inputs.sizeY, 10) || Number.parseInt(inputs.size, 10);
  const inputBlocks = generateMainBlock(inputs, svg);

  inputs.items.forEach(d => {
    const block = inputBlocks.append('g');
    const currElWidth = d.sizeX != null ? d.sizeX : elementWidth;
    const currElHeight = d.sizeY != null ? d.sizeY : elementHeight;

    block
      .append('rect')
      .attr('fill', 'transparent')
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', diagramId + d.id)
      .attr('width', d.sizeX != null ? d.sizeX : elementWidth)
      .attr('height', d.sizeY != null ? d.sizeY : elementHeight)
      .attr('x', d.position[0])
      .attr('y', d.position[1])
      .attr('dx', 80);
    if (d.val != null) {
      block
        .append('foreignObject')
        .attr('width', currElWidth)
        .attr('height', currElHeight)
        .attr('stroke', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0])
        .attr('y', d.position[1])
        .html(`<div class="${styles['html-object']}">${d.val}</div>`);
    }
    if (d.name != null) {
      block
        .append('text')
        .attr('fill', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] + 12)
        .attr('y', d.position[1])
        .attr(
          'dy',
          d.namePosition === 'top' ? -currElHeight * 0.5 : currElHeight * 1.5
        )
        .attr('dx', (-d.name.length * fontSize) / 8)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      generateLines(inputs, block, d, svg);
    }

    if (d.tooltipValue != null) {
      addTooltip(block, inputs, d, {
        id,
        sizeX: currElWidth,
        sizeY: currElHeight,
        type: 'rect',
      });
    }
  });
}

function printBlocks(inputs, svg, id) {
  svg.selectAll(`.${inputs.blockName}-block g`).remove();
  // eslint-disable-next-line no-underscore-dangle
  if (svg.selectAll(`.${inputs.blockName}-block`)._groups[0].length === 0) {
    svg.append('g').attr('class', `${inputs.blockName}-block`);
  }

  switch (inputs.blockType) {
    case 'circle':
      generateCircleBlock(inputs, svg, id);
      break;
    case 'text':
      generateTextBlock(inputs, svg, id);
      break;
    case 'rect':
    default:
      generateRectBlock(inputs, svg, id);
      break;
  }
}

function DiagramGenerator({
  data,
  step,
  animationWidth = 1200,
  animationHeight = 500,
  id = 'diagram-container',
}) {
  const ref = useD3(
    svg => {
      if (diagramId === '') {
        diagramId = `${id}-`;
      }
      if (arrowDef == null) {
        arrowDef = generateArrowElement(svg);
      }
      if (toolTips[id] == null) {
        toolTips[id] = generateTooltopElement(svg, id);
      }

      Object.values(data).forEach(itemBlock => {
        printBlocks(itemBlock, svg, id);
      });
    },
    [data, step]
  );

  return (
    <div
      id={id}
      style={{
        position: 'relative',
        minHeight: animationHeight,
        height: animationHeight,
        minWidth: animationWidth,
        width: animationWidth,
        marginRight: '0px',
        marginLeft: '0px',
      }}
    >
      <svg
        ref={ref}
        style={{
          minHeight: animationHeight,
          height: animationHeight,
          minWidth: animationWidth,
          width: animationWidth,
          marginRight: '0px',
          marginLeft: '0px',
        }}
      />
    </div>
  );
}

export default DiagramGenerator;
