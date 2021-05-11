import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100% !important',
  },
  sliderLabel: {
    marginRight: 10,
  },
  slider: {
    marginRight: 10,
    height: 8,
  },
}));

const PositionSlider = withStyles({
  track: {
    height: 4,
    borderRadius: 4,
    paddingRight: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
    paddingRight: 4,
  },
})(Slider);

const PositionSliders = ({
  onUpdateValue,
  colors = ['blue', 'blue', 'blue', 'blue'],
}) => {
  const classes = useStyles();

  const onChange = [0, 1, 2, 3].map(el => (event, value) => {
    onUpdateValue(value, `pos${el}`);
  });
  return (
    <div className={classes.container}>
      {[0, 1, 2, 3].map(el => (
        <Fragment key={`post${el}`}>
          <Typography
            id="discrete-slider"
            gutterBottom
            className={classes.sliderLabel}
          >
            {`pos${el}`}
          </Typography>
          <PositionSlider
            className={classes.slider}
            style={{ color: colors[el] }}
            name={`pos${el}`}
            aria-label={`pos${el}`}
            defaultValue={el}
            aria-labelledby={`slider-pos${el}`}
            valueLabelDisplay="auto"
            step={1}
            onChangeCommitted={onChange[el]}
            marks
            min={0}
            max={20}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default PositionSliders;
