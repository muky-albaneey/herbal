import React from 'react';
import CountUp from 'react-countup';
// const CountUp = require('react-countup').default;

export default function CountComponent({start, end, duration, prefix, suffix}) {
  return (
    <section>
   <CountUp
      start={start}
      end={end}
      duration={duration}
      // separator=" "
      // decimals={4}
      decimal=","
      prefix={prefix}
       suffix={suffix}
       />
    </section>
  );
}
