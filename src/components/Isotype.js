import React from 'react';

const Isotype = ({ width, height, className, style }) => {
  const CIRCLE_RADIO = 110;
  const MIN_CIRCLE_SIZE = 6;
  const CIRCLE_STEP_GROW = 1.6;
  const circles = [];
  const circleGroups = [];
  for (let i = 0; i < 8; i++) {
    const fac = -1 * i * Math.PI / 8; // which fraction of PI (Related to its index but in inverse)
    const position = i; // Position from 0 to 7 within its group
    const size = MIN_CIRCLE_SIZE + CIRCLE_STEP_GROW * position;
    const x = CIRCLE_RADIO * Math.sin(fac);
    const y = CIRCLE_RADIO * Math.cos(fac);
    circleGroups.push(<circle key={i} cx={x} cy={y} r={size} />);
  }
  circles.push(
    <g className="circles-secondary-color" key={0}>{circleGroups}</g>,
    <g className="circles-primary-color" transform="rotate(180)" key={1}>
      {circleGroups}
    </g>,
  );
  const logo = (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="-125, -125, 250 250">
      <g transform="translate(0, 0) rotate(-20)">
        {circles}
      </g>
      <g transform="translate(0, 0) scale(0.7) rotate(20)">
        {circles}
      </g>
      <g transform="translate(0, 0) scale(0.4) rotate(50)">
        {circles}
      </g>
    </svg>
  );

  return logo;
};

export default Isotype;
