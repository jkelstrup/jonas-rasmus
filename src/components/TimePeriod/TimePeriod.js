// Dependencies
import React from 'react';

// Components
import { Row } from 'src/components/Box/Box';
import Ticker from 'src/components/Ticker/Ticker';

// Local
import styles from './TimePeriod.module.scss';

const TimePeriod = (props) => {

  return (
    <Row xcenter className={ styles.TimePeriod } onClick={ props.onClick }>
      <Ticker word val={ props.period }/>
    </Row>
  );
};

export default TimePeriod;
