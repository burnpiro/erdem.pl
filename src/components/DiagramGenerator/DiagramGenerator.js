import React from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/use-d3';

const fontSize = 19;

function printBlocks(inputs, svg) {
  svg.selectAll(`.${inputs.blockName}-block g`).remove();
  // eslint-disable-next-line no-underscore-dangle
  if (svg.selectAll(`.${inputs.blockName}-block`)._groups[0].length === 0) {
    svg.append('g').attr('class', `${inputs.blockName}-block`);
  }

  const inputBlocks = svg
    .select(`.${inputs.blockName}-block`)
    .selectAll('g')
    .data(inputs.items)
    .enter()
    .append('g')
    .attr('x', d => d.position[0])
    .attr('y', d => d.position[1]);

  inputBlocks
    .append('rect')
    .attr('fill', inputs.color)
    .attr('stroke-width', 1)
    .attr('stroke', inputs.borderColor)
    .attr('id', d => d.id)
    .attr('width', inputs.size)
    .attr('height', inputs.size)
    .attr('x', d => d.position[0])
    .attr('y', d => d.position[1])
    .attr('dx', 80);

  inputBlocks.each(d => {
    if (d.val != null) {
      inputBlocks
        .append('foreignObject')
        .attr('x', 55 - fontSize)
        .attr('width', inputs.size)
        .attr('y', 20)
        .attr('height', inputs.size)
        .attr('stroke', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] + fontSize - 2)
        .attr('y', d.position[1] + fontSize / 2)
        .html(d.val);
    }
    if (d.name != null) {
      inputBlocks
        .append('text')
        .attr('stroke', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] + 12)
        .attr('y', d.position[1])
        .attr('dy', d.namePosition === 'top' ? -30 : 90)
        .attr('dx', (-d.name.length * fontSize) / 8)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      const multiLinkData = d.lines.map(line => {
        switch (line.orientation) {
          case 'horizontal':
            return d3.linkHorizontal()({
              source: [line.from[0], line.from[1]],
              target: [line.to[0], line.to[1]],
            });
          default:
            return d3.linkVertical()({
              source: [line.from[0], line.from[1]],
              target: [line.to[0], line.to[1]],
            });
        }
      });

      const linesBlock = svg.select('.hidden-block').append('g');

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
  });
}

function drawLine(line, svg) {
  svg
    .append('line')
    .attr({
      x1: 25,
      y1: 15,
      x2: 25,
      y2: 15,
    })
    .transition()
    .duration(1500)
    .attr({
      x2: 400,
      y2: 15,
    });
}

let arrowDef = null;

function DiagramGenerator({ data, step, animationWidth = 1200, animationHeight = 500 }) {
  const ref = useD3(
    svg => {
      if (arrowDef == null) {
        arrowDef = svg
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

      Object.values(data).forEach(itemBlock => {
        printBlocks(itemBlock, svg);
      });
    },
    [data, step]
  );

  return (
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
  );
}

export default DiagramGenerator;
