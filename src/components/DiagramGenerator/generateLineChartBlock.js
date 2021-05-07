import * as d3 from 'd3';
import { generateMainBlock } from './helpers';

export default function generateLineChartBlock(
  inputs,
  svg,
  id,
  { values, onUpdateValues }
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
      .duration(2000)
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
  }
}
