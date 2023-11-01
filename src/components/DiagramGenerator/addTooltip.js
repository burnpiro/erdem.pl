export function addTooltip(
  toolTips,
  inputBlocks,
  inputs,
  d,
  { id, sizeX, sizeY, type = 'rect' }
) {
  switch (type) {
    case 'circle':
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
    case 'rect':
    case 'polygon':
    default:
      const xPos = type === 'polygon' ? d.points[0][0] : d.position[0];
      const yPos = type === 'polygon' ? d.points[0][1] : d.position[1];
      return inputBlocks
        .append('rect')
        .attr('fill', 'transparent')
        .attr('stroke', 'transparent')
        .attr('width', sizeX)
        .attr('height', sizeY)
        .attr('x', xPos)
        .attr('y', yPos)
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
