import { addTooltip } from './addTooltip';
import {
  generateMainBlock,
  addOnClickAction,
  generateLines,
  DEFAULT_FONTSIZE,
  addHTMLContent,
} from './helpers';

export default function generatePolygonBlock(inputs, svg, id, options) {
  const inputBlocks = generateMainBlock(inputs, svg);
  const fontSize = inputs.fontSize || DEFAULT_FONTSIZE;

  inputs.items.forEach(d => {
    const block = inputBlocks.append('g');
    const points = d.points.map(el => el.join(',')).join(' ');
    const xs = d.points.map(el => el[0]);
    const ys = d.points.map(el => el[1]);

    const sizeX = Math.max(...xs) - Math.min(...xs);
    const sizeY = Math.max(...ys) - Math.min(...ys);

    block
      .append('polygon')
      .attr('points', points)
      .attr('fill', inputs.color)
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', options.diagramId + d.id)
      .attr('dx', 80);

    if (d.selectValue != null) {
      addOnClickAction(block, d, inputs, options);
    }

    if (d.val != null) {
      addHTMLContent(block, d, {
        width: sizeX,
        height: sizeY,
        color: inputs.borderColor,
        fontSize,
        type: 'polygon',
        vals: d.valVars,
        values: options.values,
      });
    }
    if (d.name != null) {
      block
        .append('text')
        .attr('fill', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.points[0][0] + 12)
        .attr('y', d.points[0][1])
        .attr('dy', d.namePosition === 'top' ? -sizeY * 0.5 : sizeY * 1.5)
        .attr('dx', (-d.name.length * fontSize) / 8)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      generateLines(inputs, block, d, svg);
    }

    if (d.tooltipValue != null) {
      addTooltip(options.toolTips, block, inputs, d, {
        id,
        sizeX,
        sizeY,
        type: 'polygon',
      });
    }
  });
}
