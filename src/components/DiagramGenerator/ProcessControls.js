import React, { useEffect, useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const ProcessControls = ({
  onStepForward,
  onStepBackward,
  nextDisabled = false,
  prevDisabled = true,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        onClick={onStepBackward}
        disabled={prevDisabled}
        className={classes.button}
        color="secondary"
        variant="outlined"
      >
        Prev
      </Button>
      <Button
        onClick={onStepForward}
        disabled={nextDisabled}
        className={classes.button}
        color="primary"
        variant="outlined"
      >
        Next
      </Button>
    </div>
  );
};

export default ProcessControls;
