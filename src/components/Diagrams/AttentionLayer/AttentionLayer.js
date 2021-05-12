// @flow
import React, { useState } from 'react';
import DiagramGenerator from '../../DiagramGenerator/DiagramGenerator';
import ProcessControls from '../../DiagramGenerator/ProcessControls';

import { steps, animationWidth, animationHeight } from './data';

import styles from './AttentionLayer.module.scss';

const AttentionLayer = () => {
  const [step, setStep] = useState(1);

  const onStepForward = () => {
    setStep(step + 1);
  };

  const onStepBackward = () => {
    setStep(step - 1);
  };

  const currStep = steps[`step${step}`];

  return (
    <div className={styles['attention-continaer']}>
      <DiagramGenerator
        data={currStep}
        step={step}
        animationHeight={animationHeight}
        animationWidth={animationWidth}
        id="attention-layer-diagram"
      />
      <ProcessControls
        onStepForward={onStepForward}
        onStepBackward={onStepBackward}
        prevDisabled={step < 2}
        nextDisabled={step === Object.keys(steps).length}
      />
    </div>
  );
};

export default AttentionLayer;
