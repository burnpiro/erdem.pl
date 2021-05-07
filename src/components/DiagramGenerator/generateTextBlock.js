import styles from './DiagramGenerator.module.scss';
import { addTooltip } from './addTooltip';
import {
  generateMainBlock,
  generateLines,
  DEFAULT_FONTSIZE,
  addHTMLContent,
} from './helpers';

export default function generateTextBlock(inputs, svg, id, options) {
  const fontSize = inputs.fontSize || DEFAULT_FONTSIZE;
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
      .attr('id', options.diagramId + d.id)
      .attr('width', d.sizeX != null ? d.sizeX : elementWidth)
      .attr('height', d.sizeY != null ? d.sizeY : elementHeight)
      .attr('x', d.position[0])
      .attr('y', d.position[1])
      .attr('dx', 80);
    if (d.val != null) {
      addHTMLContent(
        block,
        d,
        currElWidth,
        currElHeight,
        inputs.borderColor,
        fontSize
      );
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
      addTooltip(options.toolTips, block, inputs, d, {
        id,
        sizeX: currElWidth,
        sizeY: currElHeight,
        type: 'rect',
      });
    }
  });
}
