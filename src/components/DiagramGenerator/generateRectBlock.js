import styles from './DiagramGenerator.module.scss';
import { addTooltip } from './addTooltip';
import {
  generateMainBlock,
  addOnClickAction,
  generateLines,
  DEFAULT_FONTSIZE,
  addHTMLContent,
} from './helpers';

export default function generateRectBlock(inputs, svg, id, options) {
  const elementSize = Number.parseInt(inputs.size, 10);
  const sizeX = Number.parseInt(inputs.sizeX, 10) || elementSize;
  const sizeY = Number.parseInt(inputs.sizeY, 10) || elementSize;
  const inputBlocks = generateMainBlock(inputs, svg);
  const fontSize = inputs.fontSize || DEFAULT_FONTSIZE;

  inputs.items.forEach(d => {
    const elSizeX = Number.parseInt(d.sizeX, 10) || sizeX;
    const elSizeY = Number.parseInt(d.sizeY, 10) || sizeY;
    const block = inputBlocks.append('g');
    block
      .append('rect')
      .attr('fill', inputs.color)
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', options.diagramId + d.id)
      .attr('width', elSizeX)
      .attr('height', elSizeY)
      .attr('x', d.position[0])
      .attr('y', d.position[1])
      .attr('dx', 80);

    if (d.selectValue != null) {
      addOnClickAction(block, d, inputs, options);
    }

    if (d.val != null) {
      addHTMLContent(block, d, {
        width: elSizeX,
        height: elSizeY,
        color: inputs.borderColor,
        fontSize,
        vals: d.valVars,
        values: options.values,
      });
    }
    if (d.name != null) {
      block
        .append('text')
        .attr('fill', inputs.borderColor)
        .style('font-size', fontSize)
        .attr('x', d.position[0] + 12)
        .attr('y', d.position[1])
        .attr('dy', d.namePosition === 'top' ? -elSizeY * 0.5 : elSizeY * 1.5)
        .attr('dx', (-d.name.length * fontSize) / 8)
        .text(d.name);
    }
    if (Array.isArray(d.lines)) {
      generateLines(inputs, block, d, svg);
    }

    if (d.tooltipValue != null) {
      addTooltip(options.toolTips, block, inputs, d, {
        id,
        sizeX: elSizeX,
        sizeY: elSizeY,
        type: 'rect',
      });
    }
  });
}
