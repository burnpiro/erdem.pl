import * as d3 from 'd3';
import { generateMainBlock } from './helpers';

export default function generateLineChartBlock(
  inputs,
  svg,
  id,
  { values, toolTips, onUpdateValues }
) {
  const inputBlocks = generateMainBlock(inputs, svg);
  inputBlocks
    .attr('x', inputs.position ? inputs.position[0] : 0)
    .attr('y', inputs.position ? inputs.position[1] : 0);
  inputBlocks.attr(
    'transform',
    `translate(40,${inputs.position ? inputs.position[1] : 0})`
  );
  const height = inputs.sizeY || inputs.size;
  const width = inputs.sizeX || inputs.size;
  const delay = inputs?.transition?.delay || 500;

  // Add X axis --> it is a date format
  const x = d3
    .scaleLinear()
    .domain(inputs.xLimit)
    .range([0, width]);
  inputBlocks
    .selectAll('.xAxis')
    .data([1])
    .enter()
    .append('g')
    .attr('class', 'xAxis')
    .attr('transform', `translate(0,${height / 2})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain(inputs.yLimit)
    .range([height, 0]);
  inputBlocks
    .selectAll('.yAxis')
    .data([1])
    .enter()
    .append('g')
    .attr('class', 'yAxis')
    .call(d3.axisLeft(y));

  for (const lineData of inputs.data) {
    const lineColor = lineData.color ? lineData.color : inputs.color;
    const data = Array(lineData.elements)
      .fill(0)
      .map((_, idx) => ({ y: lineData.fun(idx), x: idx }));
    x.domain(
      d3.extent(data, function(d) {
        return d.x;
      })
    );
    // Add the line
    const u = inputBlocks.selectAll(`.${lineData.name}`).data([data]);
    u.enter()
      .append('path')
      .attr('class', lineData.name)
      .merge(u)
      .transition()
      .duration(delay)
      .attr('fill', 'none')
      .attr('stroke', lineColor)
      .attr('stroke-width', 3)
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveNatural) // Just add that to have a curve instead of segments
          .x(function(d) {
            return x(d.x);
          })
          .y(function(d) {
            return y(d.y);
          })
      );

    // Add dots on the chart
    const dotData = Array.isArray(lineData.items) ? lineData.items : [];

    const dots = inputBlocks.selectAll(`circle`).data(dotData);

    dots
      .enter()
      .append(`circle`)
      .attr('class', d => d.varName)
      .on('mouseover', (e, d) => {
        toolTips[id].mouseOver(d, e);
      })
      .on('mousemove', (e, d) => {
        toolTips[id].mouseMove(
          d,
          e,
          Number(lineData.fun(values[d.varName]), 10).toFixed(4)
        );
      })
      .on('mouseleave', (e, d) => {
        toolTips[id].mouseLeave(d, e);
      })
      .merge(dots)
      .transition()
      .duration(delay)
      .attr('cx', function(d) {
        return x(values[d.varName]);
      })
      .attr('cy', function(d) {
        return y(lineData.fun(values[d.varName]));
      })
      .attr('r', d => d.size)
      .attr('stroke', d => d.color || '#f00')
      .attr('display', d => (values[d.varName] == null ? 'none' : 'block'))
      .attr('stroke-width', 3)
      .attr('fill', 'white');

    dots
      .on('mouseover', (e, d) => {
        toolTips[id].mouseOver(d, e);
      })
      .on('mousemove', (e, d) => {
        toolTips[id].mouseMove(
          d,
          e,
          Number(lineData.fun(values[d.varName]), 10).toFixed(4)
        );
      })
      .on('mouseleave', (e, d) => {
        toolTips[id].mouseLeave(d, e);
      });

    dots.exit().remove();
  }
}
