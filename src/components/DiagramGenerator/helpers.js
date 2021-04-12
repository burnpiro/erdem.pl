import * as d3 from 'd3';

function generateArrowElement(svg) {
  return svg
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

function generateTooltopElement(svg, containerId) {
  const returnObj = {
    element: d3
      .select(`#${containerId}`)
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .style('background-color', 'white')
      .style('border', 'solid')
      .style('border-width', '2px')
      .style('border-radius', '5px')
      .style('position', 'absolute')
      .style('padding', '5px'),
  };

  returnObj.mouseOver = function(el, event) {
    returnObj.element
      .style('opacity', 1)
      .style('left', `${event.offsetX + 10}px`)
      .style('top', `${event.offsetY}px`);
    // el.style('stroke', 'black').style('opacity', 1);
  };

  returnObj.mouseMove = function(el, event, value) {
    returnObj.element
      .html(value)
      .style('left', `${event.offsetX + 10}px`)
      .style('top', `${event.offsetY}px`);
  };

  returnObj.mouseLeave = function(el, event) {
    returnObj.element
      .style('opacity', 0)
      .style('left', `-200px`)
      .style('top', `-200px`);
    // el.style('stroke', 'none').style('opacity', 0.8);
  };

  return returnObj;
}

export { generateArrowElement, generateTooltopElement };
