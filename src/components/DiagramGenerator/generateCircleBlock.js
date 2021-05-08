import styles from './DiagramGenerator.module.scss';
import { addTooltip } from './addTooltip';
import {
  generateMainBlock,
  generateLines,
  DEFAULT_FONTSIZE,
  addHTMLContent,
  addOnClickAction,
} from './helpers';

export default function generateCircleBlock(inputs, svg, id, options) {
  const inputBlocks = generateMainBlock(inputs, svg);
  const fontSize = inputs.fontSize || DEFAULT_FONTSIZE;

  const elementSize = Number.parseInt(inputs.size, 10);

  inputs.items.forEach(d => {
    const block = inputBlocks.append('g');
    block
      .append('circle')
      .attr('fill', inputs.color)
      .attr('stroke-width', 1)
      .attr('stroke', inputs.borderColor)
      .attr('id', options.diagramId + d.id)
      .attr('r', inputs.size)
      .attr('cx', d.position[0])
      .attr('cy', d.position[1])
      .attr('dx', 80);
    if (d.selectValue != null) {
      addOnClickAction(block, d, inputs, options);
    }
    if (d.val != null) {
      addHTMLContent(block, d, {
        width: elementSize * 2,
        height: elementSize * 2,
        color: inputs.borderColor,
        fontSize,
        type: 'circle',
        vals: d.valVars,
        values: options.values,
      });
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
      addTooltip(options.toolTips, block, inputs, d, {
        id,
        sizeX: elementSize,
        type: 'circle',
      });
    }
  });
}
