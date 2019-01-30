// Dependencies
import React from 'react';

// Components
import { Row } from 'src/components/Box/Box';
import Ticker from 'src/components/Ticker/Ticker';

// Local
import styles from './Difference.module.scss';

const Difference = (props) => {

  return (
    <Row xcenter className={ styles.Difference }>
      <Ticker num pad={'000'} val={ props.val }/>
    </Row>
  );
};

export default Difference;
