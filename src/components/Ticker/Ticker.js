// Dependencies
import React from 'react';

// Components
import { Row } from 'src/components/Box/Box';

// Local
import './flip.min.js';
import './flip.min.css';
import styles from './Ticker.module.scss';

const Ticker = (props) => {
  let transform = '';
  if (props.num) { transform += " arrive(1000) -> round" }
  if (props.pad) {
    transform += ' -> pad(' + props.pad + ')';
  }

  let classNames = 'tick ';
  if (props.score < 0) {
    classNames += styles.bad
  } else if (props.score > 0) {
    classNames += styles.good
  }


  return (
    <div
      className={ classNames }
      data-value={ props.val }
    >
      <div data-repeat="true" data-transform={ transform }>
        <span data-view="flip"></span>
      </div>
    </div>
  );
};

export default Ticker;
