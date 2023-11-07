import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
  },
  containerFullWidth: {
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

const defaultElements = [0, 1, 2, 3];
const defaultColors = ['blue', 'blue', 'blue', 'blue'];

const PositionSliders = ({
  onUpdateValue,
  colors = defaultColors,
  min = 0,
  max = 20,
  elements = defaultElements,
  prefix = 'pos',
  style = {},
  fullWidth = true,
  updateOnChange = false,
  displayElementName = true,
}) => {
  const classes = useStyles();

  const onChange = elements.map(el => (event, value) => {
    onUpdateValue(value, `pos${el}`);
  });
  return (
    <div
      className={fullWidth ? classes.containerFullWidth : classes.container}
      style={style}
    >
      {elements.map(el => (
        <Fragment key={`post${el}`}>
          <Typography
            id="discrete-slider"
            gutterBottom
            className={classes.sliderLabel}
          >
            {`${prefix}${displayElementName ? el : ''}`}
          </Typography>
          {updateOnChange ? (
            <PositionSlider
              className={classes.slider}
              style={{ color: colors[el] }}
              name={`${prefix}${displayElementName ? el : ''}`}
              aria-label={`${prefix}${el}`}
              defaultValue={el}
              aria-labelledby={`slider-pos${el}`}
              valueLabelDisplay="auto"
              step={1}
              onChange={onChange[el]}
              marks
              min={min}
              max={max}
            />
          ) : (
            <PositionSlider
              className={classes.slider}
              style={{ color: colors[el] }}
              name={`${prefix}${displayElementName ? el : ''}`}
              aria-label={`${prefix}${el}`}
              defaultValue={el}
              aria-labelledby={`slider-pos${el}`}
              valueLabelDisplay="auto"
              step={1}
              onChangeCommitted={onChange[el]}
              marks
              min={min}
              max={max}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default PositionSliders;
