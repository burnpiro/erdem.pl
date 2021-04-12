// @flow
import React, { useEffect, useState, useReducer } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const ProcessControls = ({
  onStepForward,
  onStepBackward,
  nextDisabled = false,
  prevDisabled = true,
}) => {
  return (
    <React.Fragment>
      <Button onClick={onStepBackward} disabled={prevDisabled}>
        Prev
      </Button>
      <Button onClick={onStepForward} disabled={nextDisabled}>
        Next
      </Button>
    </React.Fragment>
  );
};

export default ProcessControls;
