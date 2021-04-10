import React from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/use-d3';
import { animationWidth, animationHeight } from './data';

const fontSize = 19;

function printInputBlocks(inputs, svg) {
  const inputBlocks = svg
    .select('.input-block')
    .selectAll('g')
    .data(inputs)
    .enter()
    .append('g')
    .attr('width', '50px')
    .attr('x', (d, i) => d.position[0])
    .attr('y', (d, i) => d.position[1]);

  inputBlocks
    .append('rect')
    .attr('fill', '#FFD199')
    .attr('stroke-width', 1)
    .attr('stroke', '#A35A00')
    .attr('id', d => d.id)
    .attr('width', '50px')
    .attr('height', '50px')
    .attr('x', d => d.position[0])
    .attr('y', d => d.position[1])
    .attr('dx', 80);

  inputBlocks
    .append('text')
    .attr('stroke', '#A35A00')
    .style('font-size', fontSize)
    .attr('x', d => d.position[0] + 12)
    .attr('y', d => d.position[1])
    .attr('dy', 90)
    .attr('dx', d => (-d.name.length * fontSize) / 8)
    .text(d => d.name);

  inputBlocks
    .append('foreignObject')
    .attr('width', '50px')
    .attr('height', '50px')
    .attr('stroke', '#A35A00')
    .style('font-size', fontSize)
    .attr('x', d => d.position[0] + fontSize - 2)
    .attr('y', d => d.position[1] + fontSize / 2)
    .html(d => d.val);
}

function printHiddenBlocks(inputs, svg) {
  svg.selectAll('.hidden-block g').remove();
  svg.selectAll('.hidden-block g').remove();

  const inputBlocks = svg
    .select('.hidden-block')
    .selectAll('g')
    .data(inputs)
    .enter()
    .append('g')
    .attr('width', '50px')
    .attr('x', d => d.position[0])
    .attr('y', d => d.position[1]);

  inputBlocks
    .append('rect')
    .attr('fill', '#9BF6FF')
    .attr('stroke-width', 1)
    .attr('stroke', '#00838F')
    .attr('id', d => d.id)
    .attr('width', '50px')
    .attr('height', '50px')
    .attr('x', d => d.position[0])
    .attr('y', d => d.position[1])
    .attr('dx', 80);

  inputBlocks
    .append('foreignObject')
    .attr('x', 55 - fontSize)
    .attr('width', '50px')
    .attr('y', 20)
    .attr('height', '50px')
    .attr('stroke', '#00838F')
    .style('font-size', fontSize)
    .attr('x', d => d.position[0] + fontSize - 2)
    .attr('y', d => d.position[1] + fontSize / 2)
    .html(d => d.val);

  inputBlocks.each(d => {
    if (Array.isArray(d.lines)) {
      const multiLinkData = d.lines.map(line =>
        d3.linkVertical()({
          source: [line.from[0], line.from[1]],
          target: [line.to[0], line.to[1]],
        })
      );

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

function RNNAnimation({ data, data: { inputs, hidden }, step }) {
  const ref = useD3(
    svg => {
      svg
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

      printInputBlocks(inputs, svg);
      printHiddenBlocks(hidden, svg);
    },
    [inputs, step]
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
    >
      <g className="input-block" />
      <g className="hidden-block" />
      <g className="lines" style={{ zIndex: 0 }} />
    </svg>
  );
}

export default RNNAnimation;
