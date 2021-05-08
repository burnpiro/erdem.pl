import React from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/use-d3';
import styles from './DiagramGenerator.module.scss';
import {
  generateArrowElement,
  generateTooltopElement,
} from './helpers';
import generateCircleBlock from './generateCircleBlock';
import generateLineChartBlock from './generateLineChartBlock';
import generateTextBlock from './generateTextBlock';
import generateRectBlock from './generateRectBlock';

let arrowDef = null;
const toolTips = {};
let diagramId = '';

function printBlocks(inputs, svg, id, options) {
  if (inputs.transition == null) {
    svg.selectAll(`.${inputs.blockName}-block`).remove();
  }
  // eslint-disable-next-line no-underscore-dangle
  if (svg.selectAll(`.${inputs.blockName}-block`)._groups[0].length === 0) {
    svg.append('g').attr('class', `${inputs.blockName}-block`);
  }

  const mappedOptions = {
    ...options,
    toolTips,
    diagramId,
  };

  switch (inputs.blockType) {
    case 'line-chart':
      generateLineChartBlock(inputs, svg, id, mappedOptions);
      break;
    case 'circle':
      generateCircleBlock(inputs, svg, id, mappedOptions);
      break;
    case 'text':
      generateTextBlock(inputs, svg, id, mappedOptions);
      break;
    case 'rect':
    default:
      generateRectBlock(inputs, svg, id, mappedOptions);
      break;
  }
}

function DiagramGenerator({
  data,
  step,
  animationWidth = 1200,
  animationHeight = 500,
  id = 'diagram-container',
  values = {},
  onUpdateValues = (val, elId) => {
    console.log(val, elId);
  },
}) {
  const ref = useD3(
    svg => {
      if (diagramId === '') {
        diagramId = `${id}-`;
      }
      if (arrowDef == null) {
        arrowDef = generateArrowElement(svg);
      }
      if (toolTips[id] == null) {
        toolTips[id] = generateTooltopElement(svg, id);
      }

      Object.values(data).forEach(itemBlock => {
        printBlocks(itemBlock, svg, id, { values, onUpdateValues });
      });
    },
    [data, step, values]
  );

  return (
    <div
      id={id}
      style={{
        position: 'relative',
        minHeight: animationHeight,
        height: animationHeight,
        minWidth: animationWidth,
        width: animationWidth,
        marginRight: '0px',
        marginLeft: '0px',
      }}
    >
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
    </div>
  );
}

export default DiagramGenerator;
