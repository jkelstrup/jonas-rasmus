// Dependencies
import React from 'react';

// Components
import { Col, Row } from 'src/components/Box/Box';
import Ticker from 'src/components/Ticker/Ticker';

// Local
import styles from './PlayerScore.module.scss';

const PlayerScore = (props) => {

  return (
    <Col xcenter>
      <Row className={ styles.Name } xcenter>{ props.name }</Row>
      <Ticker
        num
        pad={'0000'}
        val={ props.val }
        score={ props.score }
      />
    </Col>
  );
};

export default PlayerScore;
