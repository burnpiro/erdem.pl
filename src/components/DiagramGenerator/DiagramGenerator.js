import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/use-d3';
import styles from './DiagramGenerator.module.scss';
import {
  generateArrowElement,
  generateTooltopElement,
  guidGenerator,
} from './helpers';
import generateCircleBlock from './generateCircleBlock';
import generateLineChartBlock from './generateLineChartBlock';
import generateTextBlock from './generateTextBlock';
import generateRectBlock from './generateRectBlock';
import { useWindowSize } from '../../hooks';
import generatePolygonBlock from './generatePolygonBlock';

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
    case 'polygon':
      generatePolygonBlock(inputs, svg, id, mappedOptions);
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
  id,
  values = {},
  onUpdateValues = (val, elId) => {
    console.log(val, elId);
  },
}) {
  const [currId, setCurrId] = useState(id || guidGenerator());
  useEffect(() => {
    if (id != null && id !== '') {
      setCurrId(id);
    }
  }, [id]);
  // Add option for server rendering
  const windowSize =
    typeof window !== 'undefined'
      ? useWindowSize()
      : {
          width: 1920,
          height: 1000,
        };
  const ref = useD3(
    svg => {
      if (diagramId === '') {
        diagramId = `${currId}-`;
      }
      if (arrowDef == null) {
        arrowDef = generateArrowElement(svg);
      }
      if (toolTips[currId] == null) {
        toolTips[currId] = generateTooltopElement(svg, currId);
      }

      Object.values(data).forEach(itemBlock => {
        printBlocks(itemBlock, svg, currId, { values, onUpdateValues });
      });
    },
    [data, step, values]
  );

  return (
    <div
      id={currId}
      style={{
        position: 'relative',
        minHeight: animationHeight,
        height: animationHeight,
        minWidth: animationWidth,
        width: animationWidth,
        transform:
          windowSize.width < animationWidth
            ? `scale(${windowSize.width / animationWidth})`
            : '',
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
