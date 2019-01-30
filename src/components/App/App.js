// Dependencies
import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { Row, Col } from 'src/components/Box/Box.js';
import Difference from 'src/components/Difference/Difference';
import PlayerScore from 'src/components/PlayerScore/PlayerScore';
import Meta from 'src/components/Meta/Meta';
import TimePeriod from 'src/components/TimePeriod/TimePeriod';

// Local
import styles from './App.module.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      today: false,
      jonas: 0,
      rasmus: 0,
      gamesPlayed: 0,
      today: {
        jonas: 0,
        rasmus: 0,
        gamesPlayed: 0,
        timestamp: 0
      }
    };
  }

  updateScores(data) {
    this.setState((prevState, props) => {
      return {
        jonas: prevState.jonas += data.jonas,
        rasmus: prevState.rasmus += data.rasmus,
        gamesPlayed: prevState.gamesPlayed += 1
      }
    })
  }

  componentDidMount() {
    firebase.database().ref('results').on('child_added', (data) => {
      this.updateScores(data.val())
    })
  }

  handleClickMe() {
    let fakePoints = Math.floor(Math.random()*(16-11+1)+11);
    let playerAScore = Math.floor(fakePoints*Math.random());
    let playerBScore = fakePoints-playerAScore;

    this.updateScores({
      jonas: playerAScore,
      rasmus: playerBScore,
      timestamp: new Date()
    })
  }

  handleTimePeriodClick() {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        today: !prevState.today
      }
    })
  }

  render() {

    let { jonas, rasmus, gamesPlayed } = this.state;

    return (
      <Col h='100%' className={ styles.App }>
        <Meta nextGame={ gamesPlayed + 1 }/>
        <Row className={ styles.Score }>
          <PlayerScore
            name='Jonas'
            val={ jonas }
            score={ jonas - rasmus }
          />
          <PlayerScore
            name='Rasmus'
            val={ rasmus }
            score={ rasmus - jonas }
          />
        </Row>
        <Difference val={ Math.abs(rasmus - jonas) }/>
      </Col>
    );
  }
}

export default App;
