// Dependencies
import React from 'react';

// Components
import { Row } from 'src/components/Box/Box';
import Ticker from 'src/components/Ticker/Ticker';

// Local
import styles from './Meta.module.scss';

const Meta = (props) => {

  return (
    <Row xcenter className={ styles.Meta } onClick={ props.onClick }>
      <Ticker val={ props.nextGame % 2 === 0 ? ' Jonas' : 'Rasmus' }/>: #<Ticker pad={'000'} val={ props.nextGame }/>
    </Row>
  );
};

export default Meta;
